/**
 * Admin Data Management Dashboard Engine
 * Handles CRUD for Questions and Subjects, Analytics, Backup & Restore
 */

class AdminDashboard {
    constructor() {
        this.currentSubjectId = 'mmt';
        this.editingQuestionId = null;
        this.activeAdminTab = 'questions'; // 'questions', 'subjects', 'backup'

        this.init();
    }

    init() {
        // Elements
        this.container = document.getElementById('admin-modal');
        this.subSelect = document.getElementById('admin-subject-select');
        this.searchQ = document.getElementById('admin-q-search');
        this.filterChapter = document.getElementById('admin-chapter-filter');
        this.filterLevel = document.getElementById('admin-level-filter');
        this.questionsList = document.getElementById('admin-questions-list');
        this.qCountBadge = document.getElementById('admin-q-count');

        // Modal Form for Question Add/Edit
        this.qFormModal = document.getElementById('admin-q-form-modal');
        this.qForm = document.getElementById('admin-question-form');
        this.qFormTitle = document.getElementById('admin-q-form-title');

        // Modal for Subject Add
        this.subFormModal = document.getElementById('admin-sub-form-modal');
        this.subForm = document.getElementById('admin-subject-form');

        // Modal for Bulk Question Import (Form Chuẩn)
        this.bulkModal = document.getElementById('admin-bulk-import-modal');
        this.bulkOpenBtn = document.getElementById('admin-bulk-import-btn');
        this.bulkTextarea = document.getElementById('bulk-import-textarea');
        this.bulkTargetSub = document.getElementById('bulk-target-subject');
        this.bulkPreviewBtn = document.getElementById('bulk-preview-btn');
        this.bulkConfirmBtn = document.getElementById('bulk-confirm-import-btn');
        this.bulkBadge = document.getElementById('bulk-parse-badge');
        this.bulkPreviewSection = document.getElementById('bulk-preview-section');
        this.bulkPreviewList = document.getElementById('bulk-preview-list');
        this.bulkPreviewCountPill = document.getElementById('bulk-preview-count-pill');
        this.bulkCharCount = document.getElementById('bulk-char-count');
        this.bulkLoadToan9Btn = document.getElementById('bulk-load-toan9-template-btn');
        this.bulkLoadBlankBtn = document.getElementById('bulk-load-blank-template-btn');
        this.bulkClearBtn = document.getElementById('bulk-clear-btn');
        this.currentParsedBulkQuestions = [];

        // Tab buttons
        this.tabBtns = document.querySelectorAll('.admin-tab-btn');
        this.tabContents = {
            questions: document.getElementById('admin-tab-content-questions'),
            subjects: document.getElementById('admin-tab-content-subjects'),
            users: document.getElementById('admin-tab-content-users'),
            backup: document.getElementById('admin-tab-content-backup')
        };

        this.bindEvents();
    }

    bindEvents() {
        // Tab switching
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Subject selector change
        if (this.subSelect) {
            this.subSelect.addEventListener('change', () => {
                this.currentSubjectId = this.subSelect.value;
                this.updateChapterFilters();
                this.renderQuestions();
            });
        }

        // Search & Filter questions
        if (this.searchQ) this.searchQ.addEventListener('input', () => this.renderQuestions());
        if (this.filterChapter) this.filterChapter.addEventListener('change', () => this.renderQuestions());
        if (this.filterLevel) this.filterLevel.addEventListener('change', () => this.renderQuestions());

        // Search users
        const userSearch = document.getElementById('admin-user-search');
        if (userSearch) userSearch.addEventListener('input', () => this.renderUsers());

        // Remote Request Code Parsing
        const parseReqBtn = document.getElementById('admin-parse-req-btn');
        const reqInput = document.getElementById('admin-req-input');
        if (parseReqBtn && reqInput) {
            parseReqBtn.addEventListener('click', () => {
                const val = reqInput.value.trim();
                if (!val.startsWith('NETLAB-REQ-')) {
                    alert('Vui lòng dán đúng mã yêu cầu có tiền tố NETLAB-REQ-...');
                    return;
                }
                try {
                    const rawB64 = val.replace('NETLAB-REQ-', '');
                    const json = JSON.parse(decodeURIComponent(atob(rawB64)));
                    this.currentParsedStudent = json;

                    const parsedBox = document.getElementById('admin-req-parsed-box');
                    const nameEl = document.getElementById('admin-parsed-name');
                    const userEl = document.getElementById('admin-parsed-user');

                    if (nameEl) nameEl.textContent = json.n || json.u;
                    if (userEl) userEl.textContent = '@' + json.u;
                    if (parsedBox) parsedBox.classList.remove('hidden');

                    // If user is not yet in local users list, auto register them
                    if (window.authManager && !window.authManager.users.some(u => u.username.toLowerCase() === json.u.toLowerCase())) {
                        window.authManager.users.push({
                            username: json.u.toLowerCase(),
                            name: json.n || json.u,
                            role: 'student',
                            avatar: '🎓',
                            email: json.e || `${json.u}@netlab.local`,
                            joinedAt: new Date().toISOString().split('T')[0],
                            isApproved: false,
                            allowedSections: [],
                            allowedSubjects: []
                        });
                        window.authManager.saveUsers();
                        this.renderUsers();
                    }
                    if (window.soundManager) window.soundManager.playCorrect();
                } catch (e) {
                    alert('Mã yêu cầu không hợp lệ hoặc bị lỗi định dạng!');
                }
            });
        }

        // Generate Activation Key
        const createActBtn = document.getElementById('admin-create-act-key-btn');
        if (createActBtn) {
            createActBtn.addEventListener('click', () => {
                if (!this.currentParsedStudent) {
                    alert('Vui lòng nạp mã yêu cầu học viên trước!');
                    return;
                }
                const checkedSecs = Array.from(document.querySelectorAll('.admin-gen-sec:checked')).map(cb => cb.value);
                if (checkedSecs.length === 0) {
                    alert('Vui lòng tích chọn ít nhất 1 Lab để mở khóa!');
                    return;
                }

                const allSubIds = window.subjectsManager ? window.subjectsManager.getAllSubjects().map(s => s.id) : ['mmt', 'anm', 'toan9', 'toan', 'hdo'];
                const payload = {
                    u: this.currentParsedStudent.u,
                    secs: checkedSecs,
                    subs: allSubIds,
                    iss: Date.now()
                };

                const actCode = 'NETLAB-ACT-' + btoa(encodeURIComponent(JSON.stringify(payload)));
                const outInput = document.getElementById('admin-act-code-output');
                const resBox = document.getElementById('admin-act-result-box');

                if (outInput) outInput.value = actCode;
                if (resBox) resBox.classList.remove('hidden');

                // Update local user permissions in authManager
                if (window.authManager) {
                    window.authManager.updateUserPermissions(this.currentParsedStudent.u, checkedSecs, allSubIds, true);
                    this.renderUsers();
                }

                if (window.soundManager) window.soundManager.playCorrect();
            });
        }

        // Copy Activation Code
        const copyActBtn = document.getElementById('admin-copy-act-btn');
        if (copyActBtn) {
            copyActBtn.addEventListener('click', () => {
                const outInput = document.getElementById('admin-act-code-output');
                if (outInput && outInput.value) {
                    navigator.clipboard.writeText(outInput.value);
                    copyActBtn.textContent = '✓ Đã Chép';
                    setTimeout(() => { copyActBtn.textContent = '📋 Sao Chép'; }, 2000);
                    if (window.soundManager) window.soundManager.playCorrect();
                }
            });
        }

        // Bulk Import button
        if (this.bulkOpenBtn) {
            this.bulkOpenBtn.addEventListener('click', () => this.openBulkImportModal());
        }

        // Close bulk modal
        document.querySelectorAll('.close-bulk-modal').forEach(b => {
            b.addEventListener('click', () => {
                if (this.bulkModal) this.bulkModal.classList.add('hidden');
            });
        });

        // Bulk load TOAN 9 template button
        if (this.bulkLoadToan9Btn) {
            this.bulkLoadToan9Btn.addEventListener('click', () => {
                if (window.TOAN9_SAMPLE_TEXT && this.bulkTextarea) {
                    this.bulkTextarea.value = window.TOAN9_SAMPLE_TEXT;
                    this.updateBulkCharCount();
                    if (this.bulkTargetSub) {
                        this.bulkTargetSub.value = 'toan9';
                    }
                    this.handleBulkPreview();
                    if (window.soundManager) window.soundManager.playCorrect();
                }
            });
        }

        // Bulk load Blank template button
        if (this.bulkLoadBlankBtn) {
            this.bulkLoadBlankBtn.addEventListener('click', () => {
                if (window.BLANK_SAMPLE_TEXT && this.bulkTextarea) {
                    this.bulkTextarea.value = window.BLANK_SAMPLE_TEXT;
                    this.updateBulkCharCount();
                    this.handleBulkPreview();
                    if (window.soundManager) window.soundManager.playClick();
                }
            });
        }

        // Bulk clear button
        if (this.bulkClearBtn) {
            this.bulkClearBtn.addEventListener('click', () => {
                if (this.bulkTextarea) {
                    this.bulkTextarea.value = '';
                    this.updateBulkCharCount();
                }
                this.currentParsedBulkQuestions = [];
                if (this.bulkPreviewSection) this.bulkPreviewSection.classList.add('hidden');
                if (this.bulkConfirmBtn) {
                    this.bulkConfirmBtn.disabled = true;
                    this.bulkConfirmBtn.textContent = '💾 Lưu Vào Ngân Hàng Câu Hỏi';
                }
                if (this.bulkBadge) {
                    this.bulkBadge.className = 'px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400';
                    this.bulkBadge.textContent = 'Chưa phân tích';
                }
            });
        }

        // Textarea input char count
        if (this.bulkTextarea) {
            this.bulkTextarea.addEventListener('input', () => this.updateBulkCharCount());
        }

        // Preview button
        if (this.bulkPreviewBtn) {
            this.bulkPreviewBtn.addEventListener('click', () => this.handleBulkPreview());
        }

        // Target subject change in bulk modal
        if (this.bulkTargetSub) {
            this.bulkTargetSub.addEventListener('change', () => {
                if (this.bulkTextarea && this.bulkTextarea.value.trim().length > 0) {
                    this.handleBulkPreview();
                }
            });
        }

        // Confirm import button
        if (this.bulkConfirmBtn) {
            this.bulkConfirmBtn.addEventListener('click', () => this.handleBulkConfirm());
        }

        // Add Question button
        const addQBtn = document.getElementById('admin-add-q-btn');
        if (addQBtn) {
            addQBtn.addEventListener('click', () => this.openQuestionForm(null));
        }

        // Add Subject button
        const addSubBtn = document.getElementById('admin-add-sub-btn');
        if (addSubBtn) {
            addSubBtn.addEventListener('click', () => this.openSubjectForm());
        }

        // Question form submit
        if (this.qForm) {
            this.qForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleQuestionFormSubmit();
            });
        }

        // Subject form submit
        if (this.subForm) {
            this.subForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubjectFormSubmit();
            });
        }

        // Close question form modal
        document.querySelectorAll('.close-q-form-modal').forEach(b => {
            b.addEventListener('click', () => {
                if (this.qFormModal) this.qFormModal.classList.add('hidden');
            });
        });

        // Close subject form modal
        document.querySelectorAll('.close-sub-form-modal').forEach(b => {
            b.addEventListener('click', () => {
                if (this.subFormModal) this.subFormModal.classList.add('hidden');
            });
        });

        // Backup buttons
        const backupBulkBtn = document.getElementById('admin-backup-bulk-btn');
        if (backupBulkBtn) {
            backupBulkBtn.addEventListener('click', () => this.openBulkImportModal());
        }

        const exportBtn = document.getElementById('admin-export-json-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportJSON());
        }

        const importInput = document.getElementById('admin-import-file-input');
        if (importInput) {
            importInput.addEventListener('change', (e) => this.importJSON(e));
        }

        const resetDefaultBtn = document.getElementById('admin-reset-default-btn');
        if (resetDefaultBtn) {
            resetDefaultBtn.addEventListener('click', () => {
                if (confirm('CẢNH BÁO: Bạn có chắc chắn muốn khôi phục toàn bộ ngân hàng câu hỏi và môn học về mặc định? Các dữ liệu tự thêm sẽ bị xóa.')) {
                    window.subjectsManager.resetToDefault();
                    this.render();
                    alert('Đã khôi phục dữ liệu gốc thành công!');
                }
            });
        }
    }

    switchTab(tab) {
        this.activeAdminTab = tab;
        this.tabBtns.forEach(b => {
            const isActive = b.dataset.tab === tab;
            b.className = isActive ? 
                'admin-tab-btn py-2 px-4 rounded-xl text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' :
                'admin-tab-btn py-2 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800';
        });

        Object.keys(this.tabContents).forEach(key => {
            if (this.tabContents[key]) {
                if (key === tab) this.tabContents[key].classList.remove('hidden');
                else this.tabContents[key].classList.add('hidden');
            }
        });

        if (tab === 'questions') this.renderQuestions();
        if (tab === 'subjects') this.renderSubjects();
        if (tab === 'users') this.renderUsers();
        if (tab === 'backup') this.renderBackupStats();
    }

    render() {
        if (!window.subjectsManager) return;
        this.currentSubjectId = window.subjectsManager.getActiveSubjectId();
        this.updateSubjectDropdown();
        this.updateChapterFilters();
        this.switchTab(this.activeAdminTab);
    }

    updateSubjectDropdown() {
        if (!this.subSelect) return;
        const subs = window.subjectsManager.getAllSubjects();
        this.subSelect.innerHTML = subs.map(s => `
            <option value="${s.id}" ${s.id === this.currentSubjectId ? 'selected' : ''}>
                ${s.icon} ${s.name} (${window.subjectsManager.getQuestions(s.id).length} câu)
            </option>
        `).join('');
    }

    updateChapterFilters() {
        if (!this.filterChapter) return;
        const sub = window.subjectsManager.getSubject(this.currentSubjectId);
        let html = '<option value="all">Tất cả các chương</option>';
        if (sub && sub.chapters) {
            sub.chapters.forEach(ch => {
                html += `<option value="${ch.id}">Chương ${ch.id}: ${ch.name.split(':')[1] || ch.name}</option>`;
            });
        }
        this.filterChapter.innerHTML = html;
    }

    renderQuestions() {
        if (!this.questionsList) return;
        const qList = window.subjectsManager.getQuestions(this.currentSubjectId);

        const search = (this.searchQ ? this.searchQ.value : '').toLowerCase().trim();
        const chVal = this.filterChapter ? this.filterChapter.value : 'all';
        const lvlVal = this.filterLevel ? this.filterLevel.value : 'all';

        const filtered = qList.filter(q => {
            if (chVal !== 'all' && q.chapterId !== parseInt(chVal)) return false;
            if (lvlVal !== 'all' && q.level !== lvlVal) return false;
            if (search) {
                const matchQ = q.question.toLowerCase().includes(search);
                const matchTopic = q.topic ? q.topic.toLowerCase().includes(search) : false;
                const matchOpts = q.options ? q.options.some(o => o.toLowerCase().includes(search)) : false;
                if (!matchQ && !matchTopic && !matchOpts) return false;
            }
            return true;
        });

        if (this.qCountBadge) {
            this.qCountBadge.textContent = `${filtered.length} / ${qList.length} câu`;
        }

        if (filtered.length === 0) {
            this.questionsList.innerHTML = `
                <div class="p-8 text-center text-slate-500 glass-card">
                    Không tìm thấy câu hỏi nào phù hợp với bộ lọc.
                </div>
            `;
            return;
        }

        this.questionsList.innerHTML = filtered.map(q => {
            const correctStr = q.correctAnswers ? q.correctAnswers.join(', ') : '';
            return `
                <div class="glass-card p-4 hover:border-slate-700 transition space-y-2 border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">#${q.id}</span>
                            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 font-medium">Chương ${q.chapterId}</span>
                            <span class="text-xs text-indigo-300 font-semibold">${window.escapeHTML(q.topic || '')}</span>
                            <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-400">${window.escapeHTML(q.level || 'Thông hiểu')}</span>
                        </div>
                        <div class="flex items-center gap-1.5 ml-auto">
                            <button class="edit-q-btn px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700" data-id="${q.id}">
                                ✏️ Sửa
                            </button>
                            <button class="delete-q-btn px-2.5 py-1 rounded-lg text-xs bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-800/60" data-id="${q.id}">
                                🗑️ Xóa
                            </button>
                        </div>
                    </div>

                    <div class="text-sm font-semibold text-slate-100">
                        ${window.formatQuestionText(q.question)}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pt-1">
                        ${(q.options || []).map(opt => {
                            const isCorrect = (q.correctAnswers || []).some(a => opt.startsWith(a));
                            return `<div class="p-1.5 rounded ${isCorrect ? 'bg-emerald-950/50 text-emerald-300 font-semibold border border-emerald-800/50' : 'bg-slate-900/50 text-slate-400'}">${window.escapeHTML(opt)}</div>`;
                        }).join('')}
                    </div>

                    <div class="text-xs pt-1 border-t border-slate-800/60 flex items-center justify-between text-slate-400">
                        <span>Đúng: <strong class="text-emerald-400 font-bold">${window.escapeHTML(correctStr)}</strong></span>
                        <span class="truncate max-w-md italic text-slate-500">${window.escapeHTML(q.explanation || '')}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Attach edit/delete listeners
        this.questionsList.querySelectorAll('.edit-q-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qId = parseInt(btn.dataset.id);
                this.openQuestionForm(qId);
            });
        });

        this.questionsList.querySelectorAll('.delete-q-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qId = parseInt(btn.dataset.id);
                if (confirm(`Bạn có chắc chắn muốn xóa câu hỏi #${qId}?`)) {
                    window.subjectsManager.deleteQuestion(this.currentSubjectId, qId);
                    this.renderQuestions();
                    this.updateSubjectDropdown();
                    if (window.soundManager) window.soundManager.playWrong();
                }
            });
        });
    }

    openBulkImportModal() {
        if (!this.bulkModal) return;

        // Populate target subject dropdown
        if (this.bulkTargetSub && window.subjectsManager) {
            const subs = window.subjectsManager.getAllSubjects();
            this.bulkTargetSub.innerHTML = subs.map(s => `
                <option value="${s.id}" ${s.id === this.currentSubjectId ? 'selected' : ''}>
                    ${s.icon} ${s.name} (${window.subjectsManager.getQuestions(s.id).length} câu)
                </option>
            `).join('');
        }

        this.updateBulkCharCount();
        this.bulkModal.classList.remove('hidden');
    }

    updateBulkCharCount() {
        if (!this.bulkCharCount || !this.bulkTextarea) return;
        const val = this.bulkTextarea.value || '';
        const len = val.length;
        const lines = val ? val.split('\n').length : 0;
        this.bulkCharCount.textContent = `${len.toLocaleString()} ký tự • ${lines} dòng`;
    }

    handleBulkPreview() {
        if (!this.bulkTextarea) return;
        const raw = this.bulkTextarea.value;
        const targetSubId = this.bulkTargetSub ? this.bulkTargetSub.value : this.currentSubjectId;

        const result = this.parseStandardQuestions(raw, targetSubId);
        this.currentParsedBulkQuestions = result.valid;

        // Update badge
        if (this.bulkBadge) {
            if (result.valid.length > 0) {
                this.bulkBadge.className = 'px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800';
                this.bulkBadge.textContent = `✓ Hợp lệ: ${result.valid.length} câu${result.errors.length > 0 ? ` (${result.errors.length} cảnh báo)` : ''}`;
            } else {
                this.bulkBadge.className = 'px-3 py-1 rounded-lg text-xs font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800';
                this.bulkBadge.textContent = '❌ Không nhận diện được câu hỏi';
            }
        }

        // Update confirm button
        if (this.bulkConfirmBtn) {
            if (result.valid.length > 0) {
                this.bulkConfirmBtn.disabled = false;
                this.bulkConfirmBtn.textContent = `💾 Lưu ${result.valid.length} Câu Vào Ngân Hàng`;
            } else {
                this.bulkConfirmBtn.disabled = true;
                this.bulkConfirmBtn.textContent = '💾 Lưu Vào Ngân Hàng Câu Hỏi';
            }
        }

        // Render preview cards
        if (this.bulkPreviewSection && this.bulkPreviewList) {
            this.bulkPreviewSection.classList.remove('hidden');
            if (this.bulkPreviewCountPill) {
                this.bulkPreviewCountPill.textContent = `${result.valid.length} câu hợp lệ [${result.format}]`;
            }

            let html = '';
            if (result.errors.length > 0) {
                html += `
                    <div class="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300 text-xs space-y-1">
                        <div class="font-bold flex items-center gap-1.5"><span>⚠️</span> <span>Một số thông báo phân tích:</span></div>
                        <ul class="list-disc list-inside space-y-0.5 text-[11px] text-amber-200/90 font-mono">
                            ${result.errors.map(err => `<li>${window.escapeHTML(err)}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            if (result.valid.length === 0) {
                html += `
                    <div class="p-6 text-center text-slate-500 glass-card text-xs">
                        Chưa có câu hỏi hợp lệ nào được tìm thấy. Vui lòng kiểm tra lại cấu trúc "Câu 1: ... A. ... B. ... Đáp án: ... Lời giải: ...".
                    </div>
                `;
            } else {
                html += result.valid.map((q, idx) => {
                    const correctStr = (q.correctAnswers || []).join(', ');
                    return `
                        <div class="glass-card p-3.5 rounded-xl border-slate-800 space-y-2 hover:border-slate-700 transition">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">Câu ${idx + 1}</span>
                                    <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300">${window.escapeHTML(q.chapter || `Chương ${q.chapterId}`)}</span>
                                    <span class="text-xs text-indigo-300 font-semibold">${window.escapeHTML(q.topic || 'Tổng hợp')}</span>
                                    <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800/80 text-slate-400">${window.escapeHTML(q.level || 'Thông hiểu')}</span>
                                </div>
                                <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">Đáp án: ${window.escapeHTML(correctStr)}</span>
                            </div>

                            <div class="text-xs font-semibold text-slate-100 pt-0.5">
                                ${window.formatQuestionText(q.question)}
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs pt-1">
                                ${(q.options || []).map(opt => {
                                    const isCorrect = (q.correctAnswers || []).some(a => opt.trim().startsWith(a));
                                    return `
                                        <div class="p-1.5 rounded text-[11px] ${isCorrect ? 'bg-emerald-950/60 text-emerald-300 font-semibold border border-emerald-800/60' : 'bg-slate-900/60 text-slate-400 border border-slate-800/50'}">
                                            ${window.escapeHTML(opt)}
                                        </div>
                                    `;
                                }).join('')}
                            </div>

                            <div class="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs space-y-1">
                                <div class="font-bold text-amber-400 flex items-center gap-1 text-[11px]">
                                    <span>💡</span> <span>Lời giải chi tiết:</span>
                                </div>
                                <div class="text-slate-300 leading-relaxed text-[11px]">
                                    ${window.formatExplanation ? window.formatExplanation(q.explanation) : window.escapeHTML(q.explanation)}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            this.bulkPreviewList.innerHTML = html;
        }
    }

    handleBulkConfirm() {
        if (!this.currentParsedBulkQuestions || this.currentParsedBulkQuestions.length === 0) {
            alert('Chưa có câu hỏi hợp lệ nào để lưu!');
            return;
        }

        const targetSubId = this.bulkTargetSub ? this.bulkTargetSub.value : this.currentSubjectId;

        // Ensure subject exists; if not, create it
        let sub = window.subjectsManager.getSubject(targetSubId);
        if (!sub && targetSubId === 'toan9') {
            if (window.DEFAULT_SUBJECTS_METADATA && window.DEFAULT_SUBJECTS_METADATA.toan9) {
                window.subjectsManager.addSubject(JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA.toan9)));
                sub = window.subjectsManager.getSubject('toan9');
            }
        }

        const count = this.currentParsedBulkQuestions.length;
        if (!confirm(`Bạn có chắc chắn muốn nạp ${count} câu hỏi vào môn "${sub ? sub.name : targetSubId}"?`)) {
            return;
        }

        this.currentParsedBulkQuestions.forEach(q => {
            window.subjectsManager.addQuestion(targetSubId, q);
        });

        // Switch to this subject
        this.currentSubjectId = targetSubId;
        window.subjectsManager.setActiveSubject(targetSubId);

        // Close bulk modal
        if (this.bulkModal) this.bulkModal.classList.add('hidden');

        // Re-render
        this.render();
        if (window.soundManager) window.soundManager.playCorrect();

        alert(`🎉 Đã nạp thành công ${count} câu hỏi vào môn "${sub ? sub.name : targetSubId}"!`);
    }

    parseStandardQuestions(rawText, targetSubId) {
        const text = (rawText || '').trim();
        if (!text) {
            return { valid: [], errors: ['Nội dung trống, vui lòng nhập văn bản câu hỏi hoặc chọn Mẫu có sẵn.'], format: 'Trống' };
        }

        const sub = window.subjectsManager.getSubject(targetSubId);
        const subChapters = (sub && sub.chapters) ? sub.chapters : [
            { id: 1, name: 'Chương 1: Tổng quan' }
        ];

        // 1. Check if JSON format
        if (text.startsWith('[') || text.startsWith('{')) {
            try {
                const parsed = JSON.parse(text);
                const list = Array.isArray(parsed) ? parsed : (parsed.questions || [parsed]);
                const valid = [];
                const errors = [];

                list.forEach((item, idx) => {
                    if (!item.question || typeof item.question !== 'string' || !item.question.trim()) {
                        errors.push(`Mục JSON #${idx + 1}: Thiếu nội dung câu hỏi.`);
                        return;
                    }
                    if (!item.options || !Array.isArray(item.options) || item.options.length < 2) {
                        errors.push(`Mục JSON #${idx + 1}: Cần ít nhất 2 phương án lựa chọn.`);
                        return;
                    }
                    if (!item.correctAnswers || !Array.isArray(item.correctAnswers) || item.correctAnswers.length === 0) {
                        errors.push(`Mục JSON #${idx + 1}: Thiếu đáp án đúng.`);
                        return;
                    }

                    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
                    const normOptions = item.options.map((opt, oIdx) => {
                        const trimmed = String(opt).trim();
                        if (/^[A-F][\.\)]/i.test(trimmed)) {
                            return trimmed;
                        }
                        return `${letters[oIdx] || 'A'}. ${trimmed}`;
                    });

                    let chId = item.chapterId ? parseInt(item.chapterId) : 1;
                    let chObj = subChapters.find(c => c.id === chId) || subChapters[0];

                    valid.push({
                        question: item.question.trim(),
                        options: normOptions,
                        correctAnswers: item.correctAnswers.map(a => String(a).trim().toUpperCase()),
                        explanation: (item.explanation || 'Không có giải thích chi tiết.').trim(),
                        chapterId: chObj ? chObj.id : 1,
                        chapter: chObj ? chObj.name : `Chương ${chId}`,
                        topic: (item.topic || 'Tổng hợp').trim(),
                        level: (item.level || 'Thông hiểu').trim(),
                        score: item.score ? parseInt(item.score) : 1,
                        type: (item.correctAnswers && item.correctAnswers.length > 1) ? 'multiple' : (item.type || 'single')
                    });
                });

                return { valid, errors, format: 'JSON' };
            } catch (err) {
                // Not valid JSON, continue to text parsing
            }
        }

        // 2. Parse Standard Text Format
        const questionBlocks = [];
        const lines = text.split('\n');
        let currentBlock = [];

        const isQuestionStart = (line) => {
            const trimmed = line.trim();
            return /^(?:câu|bài|question|q)\s*\d+[\.\:\-\]]/i.test(trimmed) || /^\d+[\.\:\)]\s+[^\d]/i.test(trimmed);
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (isQuestionStart(line)) {
                if (currentBlock.length > 0) {
                    questionBlocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
            }
            currentBlock.push(line);
        }
        if (currentBlock.length > 0) {
            questionBlocks.push(currentBlock.join('\n'));
        }

        if (questionBlocks.length === 0 && text.length > 0) {
            questionBlocks.push(text);
        }

        const valid = [];
        const errors = [];

        questionBlocks.forEach((blockText, bIdx) => {
            const blockNum = bIdx + 1;
            const bLines = blockText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            if (bLines.length === 0) return;

            let questionStr = '';
            const options = [];
            let correctAnswers = [];
            let explanation = '';
            let chapterId = 1;
            let topic = 'Tổng hợp';
            let level = 'Thông hiểu';
            let score = 1;

            let currentField = 'question';
            let explLines = [];

            for (let i = 0; i < bLines.length; i++) {
                const line = bLines[i];

                const optMatch = line.match(/^([A-D])[\.\)\:\s]\s*(.*)$/i);
                const ansMatch = line.match(/^(?:đáp\s*án|đ\/a|đa|key|answer|đáp\s*án\s*đúng)\s*[:=]\s*(.*)$/i);
                const explMatch = line.match(/^(?:lời\s*giải|lời\s*giải\s*chi\s*tiết|giải\s*thích|hướng\s*dẫn\s*giải|hd|explanation)\s*[:=]\s*(.*)$/i);
                const chMatch = line.match(/^(?:chương|chapter)\s*[:=]?\s*(\d+)/i);
                const topicMatch = line.match(/^(?:chủ\s*đề|chuyên\s*đề|topic)\s*[:=]\s*(.*)$/i);
                const lvlMatch = line.match(/^(?:mức\s*độ|level)\s*[:=]\s*(.*)$/i);
                const scoreMatch = line.match(/^(?:điểm|score)\s*[:=]\s*(\d+)/i);

                if (ansMatch) {
                    currentField = 'ans';
                    const rawAns = ansMatch[1].toUpperCase();
                    const matches = rawAns.match(/[A-D]/g);
                    if (matches) {
                        correctAnswers = Array.from(new Set(matches));
                    }
                } else if (explMatch) {
                    currentField = 'expl';
                    if (explMatch[1].trim()) explLines.push(explMatch[1].trim());
                } else if (chMatch) {
                    currentField = 'meta';
                    chapterId = parseInt(chMatch[1]);
                } else if (topicMatch) {
                    currentField = 'meta';
                    topic = topicMatch[1].trim();
                } else if (lvlMatch) {
                    currentField = 'meta';
                    const rawLvl = lvlMatch[1].trim();
                    if (/nhận\s*biết/i.test(rawLvl)) level = 'Nhận biết';
                    else if (/vận\s*dụng\s*cao/i.test(rawLvl)) level = 'Vận dụng cao';
                    else if (/vận\s*dụng/i.test(rawLvl)) level = 'Vận dụng';
                    else level = 'Thông hiểu';
                } else if (scoreMatch) {
                    currentField = 'meta';
                    score = parseInt(scoreMatch[1]) || 1;
                } else if (optMatch) {
                    currentField = 'option';
                    const letter = optMatch[1].toUpperCase();
                    const optContent = optMatch[2].trim();
                    options.push(`${letter}. ${optContent}`);
                } else {
                    if (currentField === 'question') {
                        questionStr += (questionStr ? '\n' : '') + line;
                    } else if (currentField === 'expl') {
                        explLines.push(line);
                    } else if (currentField === 'option' && options.length > 0) {
                        options[options.length - 1] += ' ' + line;
                    }
                }
            }

            questionStr = questionStr.replace(/^(?:câu|bài|question|q)\s*\d+[\.\:\-\]]\s*/i, '').replace(/^\d+[\.\:\)]\s*/, '').trim();

            if (explLines.length > 0) {
                explanation = explLines.join('\n').trim();
            }

            if (!questionStr) {
                errors.push(`Câu #${blockNum}: Không tìm thấy nội dung câu hỏi.`);
                return;
            }
            if (options.length < 2) {
                errors.push(`Câu #${blockNum} ("${questionStr.substring(0, 30)}..."): Cần ít nhất 2 phương án lựa chọn (A, B, C, D).`);
                return;
            }
            if (correctAnswers.length === 0) {
                errors.push(`Câu #${blockNum} ("${questionStr.substring(0, 30)}..."): Thiếu thông tin đáp án đúng (Ví dụ: "Đáp án: A").`);
                return;
            }

            const chObj = subChapters.find(c => c.id === chapterId) || subChapters[0];

            valid.push({
                question: questionStr,
                options: options,
                correctAnswers: correctAnswers,
                explanation: explanation || 'Lời giải chi tiết đang được cập nhật.',
                chapterId: chObj ? chObj.id : chapterId,
                chapter: chObj ? chObj.name : `Chương ${chapterId}`,
                topic: topic || 'Tổng hợp',
                level: level || 'Thông hiểu',
                score: score || 1,
                type: correctAnswers.length > 1 ? 'multiple' : 'single'
            });
        });

        return { valid, errors, format: 'Văn bản (Form Chuẩn)' };
    }

    openQuestionForm(qId) {
        if (!this.qFormModal) return;
        this.editingQuestionId = qId;

        const sub = window.subjectsManager.getSubject(this.currentSubjectId);
        
        // Populate chapter select
        const chSelect = document.getElementById('qform-chapter');
        if (chSelect && sub && sub.chapters) {
            chSelect.innerHTML = sub.chapters.map(c => `
                <option value="${c.id}">Chương ${c.id}: ${c.name.split(':')[1] || c.name}</option>
            `).join('');
        }

        if (qId) {
            // Edit mode
            if (this.qFormTitle) this.qFormTitle.textContent = `SỬA CÂU HỎI #${qId}`;
            const q = window.subjectsManager.getQuestionById(this.currentSubjectId, qId);
            if (!q) return;

            document.getElementById('qform-chapter').value = q.chapterId;
            document.getElementById('qform-topic').value = q.topic || '';
            document.getElementById('qform-level').value = q.level || 'Thông hiểu';
            document.getElementById('qform-type').value = q.type || 'single';
            document.getElementById('qform-score').value = q.score || 1;
            document.getElementById('qform-text').value = q.question || '';

            // Options
            const optA = q.options && q.options[0] ? q.options[0].substring(3).trim() : '';
            const optB = q.options && q.options[1] ? q.options[1].substring(3).trim() : '';
            const optC = q.options && q.options[2] ? q.options[2].substring(3).trim() : '';
            const optD = q.options && q.options[3] ? q.options[3].substring(3).trim() : '';

            document.getElementById('qform-opt-a').value = optA;
            document.getElementById('qform-opt-b').value = optB;
            document.getElementById('qform-opt-c').value = optC;
            document.getElementById('qform-opt-d').value = optD;

            // Correct checkboxes
            ['A', 'B', 'C', 'D'].forEach(letter => {
                const cb = document.getElementById(`qform-ans-${letter.toLowerCase()}`);
                if (cb) cb.checked = (q.correctAnswers || []).includes(letter);
            });

            document.getElementById('qform-explanation').value = q.explanation || '';
        } else {
            // Add mode
            if (this.qFormTitle) this.qFormTitle.textContent = 'THÊM CÂU HỎI MỚI';
            this.qForm.reset();
            document.getElementById('qform-score').value = 1;
            document.getElementById('qform-level').value = 'Thông hiểu';
            document.getElementById('qform-type').value = 'single';
            const cbA = document.getElementById('qform-ans-a');
            if (cbA) cbA.checked = true;
        }

        this.qFormModal.classList.remove('hidden');
    }

    handleQuestionFormSubmit() {
        const chapterId = parseInt(document.getElementById('qform-chapter').value);
        const sub = window.subjectsManager.getSubject(this.currentSubjectId);
        const chapterObj = sub.chapters.find(c => c.id === chapterId);
        const chapterName = chapterObj ? chapterObj.name : `Chương ${chapterId}`;

        const topic = document.getElementById('qform-topic').value.trim();
        const level = document.getElementById('qform-level').value;
        const type = document.getElementById('qform-type').value;
        const score = parseInt(document.getElementById('qform-score').value) || 1;
        const questionText = document.getElementById('qform-text').value.trim();

        const optA = document.getElementById('qform-opt-a').value.trim();
        const optB = document.getElementById('qform-opt-b').value.trim();
        const optC = document.getElementById('qform-opt-c').value.trim();
        const optD = document.getElementById('qform-opt-d').value.trim();

        const options = [];
        if (optA) options.push(`A. ${optA}`);
        if (optB) options.push(`B. ${optB}`);
        if (optC) options.push(`C. ${optC}`);
        if (optD) options.push(`D. ${optD}`);

        const correctAnswers = [];
        ['A', 'B', 'C', 'D'].forEach(letter => {
            const cb = document.getElementById(`qform-ans-${letter.toLowerCase()}`);
            if (cb && cb.checked) correctAnswers.push(letter);
        });

        if (correctAnswers.length === 0) {
            alert('Vui lòng chọn ít nhất một đáp án đúng!');
            return;
        }

        const explanation = document.getElementById('qform-explanation').value.trim();

        const questionData = {
            chapter: chapterName,
            chapterId: chapterId,
            topic: topic || 'Tổng hợp',
            question: questionText,
            level: level,
            score: score,
            type: type,
            options: options,
            correctAnswers: correctAnswers,
            explanation: explanation || 'Không có giải thích chi tiết.'
        };

        if (this.editingQuestionId) {
            window.subjectsManager.updateQuestion(this.currentSubjectId, this.editingQuestionId, questionData);
        } else {
            window.subjectsManager.addQuestion(this.currentSubjectId, questionData);
        }

        this.qFormModal.classList.add('hidden');
        this.renderQuestions();
        this.updateSubjectDropdown();
        if (window.soundManager) window.soundManager.playCorrect();
    }

    renderSubjects() {
        const subListEl = document.getElementById('admin-subjects-list');
        if (!subListEl) return;

        const subs = window.subjectsManager.getAllSubjects();
        subListEl.innerHTML = subs.map(s => {
            const count = window.subjectsManager.getQuestions(s.id).length;
            const isProtected = s.id === 'mmt';
            return `
                <div class="glass-card p-5 rounded-2xl border-slate-800 space-y-3">
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <div class="text-3xl">${window.escapeHTML(s.icon)}</div>
                            <div>
                                <h4 class="font-bold text-white text-base">${window.escapeHTML(s.name)}</h4>
                                <span class="text-xs font-mono text-cyan-400">${window.escapeHTML(s.code)} • ${count} câu hỏi</span>
                            </div>
                        </div>
                        ${!isProtected ? `
                            <button class="delete-sub-btn px-2.5 py-1 text-xs rounded-lg bg-rose-950 text-rose-300 border border-rose-800" data-id="${s.id}">
                                🗑️ Xóa môn
                            </button>
                        ` : '<span class="text-xs text-slate-500 font-mono">Môn mặc định</span>'}
                    </div>

                    <p class="text-xs text-slate-300 leading-relaxed">${window.escapeHTML(s.description || '')}</p>

                    <div class="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5">
                        ${(s.chapters || []).map(c => `
                            <span class="px-2 py-0.5 text-[11px] rounded bg-slate-900 border border-slate-800 text-slate-400">
                                Ch.${c.id}: ${window.escapeHTML((c.name.split(':')[1] || c.name).trim())}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        subListEl.querySelectorAll('.delete-sub-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const subId = btn.dataset.id;
                if (confirm(`Xóa môn học này sẽ xóa toàn bộ câu hỏi bên trong! Bạn có chắc chắn muốn xóa?`)) {
                    window.subjectsManager.deleteSubject(subId);
                    this.render();
                    if (window.soundManager) window.soundManager.playWrong();
                }
            });
        });
    }

    openSubjectForm() {
        if (!this.subFormModal) return;
        this.subForm.reset();
        this.subFormModal.classList.remove('hidden');
    }

    handleSubjectFormSubmit() {
        const id = document.getElementById('subform-id').value.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
        const name = document.getElementById('subform-name').value.trim();
        const code = document.getElementById('subform-code').value.trim().toUpperCase();
        const icon = document.getElementById('subform-icon').value.trim() || '📚';
        const color = document.getElementById('subform-color').value || '#06b6d4';
        const desc = document.getElementById('subform-desc').value.trim();
        const rawChapters = document.getElementById('subform-chapters').value.trim();

        if (!id || !name) {
            alert('Vui lòng nhập ID và Tên môn học!');
            return;
        }

        const chapters = rawChapters.split('\n').filter(l => l.trim().length > 0).map((line, idx) => ({
            id: idx + 1,
            name: `Chương ${idx + 1}: ${line.trim()}`
        }));

        if (chapters.length === 0) {
            chapters.push({ id: 1, name: 'Chương 1: Tổng quan' });
        }

        const newSub = {
            id: id,
            name: name,
            shortName: name.split('&')[0].trim(),
            code: code || 'SUB101',
            icon: icon,
            themeColor: color,
            badgeClass: 'border-slate-700 bg-slate-900 text-slate-300',
            description: desc,
            chapters: chapters
        };

        window.subjectsManager.addSubject(newSub);
        this.subFormModal.classList.add('hidden');
        this.render();
        if (window.soundManager) window.soundManager.playCorrect();
    }

    renderBackupStats() {
        const totalQ = Object.values(window.subjectsManager.questionsMap).reduce((acc, cur) => acc + cur.length, 0);
        const totalSub = Object.keys(window.subjectsManager.subjects).length;
        const totalUsers = window.authManager.users.length;

        const statEl = document.getElementById('admin-backup-stats');
        if (statEl) {
            statEl.innerHTML = `
                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                        <div class="text-xs text-slate-400">Tổng Môn Học</div>
                        <div class="text-xl font-black text-cyan-400">${totalSub}</div>
                    </div>
                    <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                        <div class="text-xs text-slate-400">Tổng Câu Hỏi</div>
                        <div class="text-xl font-black text-emerald-400">${totalQ}</div>
                    </div>
                    <div class="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                        <div class="text-xs text-slate-400">Tài Khoản</div>
                        <div class="text-xl font-black text-purple-400">${totalUsers}</div>
                    </div>
                </div>
            `;
        }
    }

    exportJSON() {
        const data = window.subjectsManager.exportAllData();
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `netlab_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    importJSON(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (confirm('Nhập dữ liệu sẽ ghi đè ngân hàng câu hỏi hiện tại. Bạn có chắc chắn muốn nhập?')) {
                    window.subjectsManager.importAllData(data);
                    this.render();
                    alert('Nhập dữ liệu thành công!');
                    if (window.soundManager) window.soundManager.playCorrect();
                }
            } catch (err) {
                alert('Tệp tin JSON không hợp lệ: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    renderUsers() {
        const container = document.getElementById('admin-users-list');
        const badge = document.getElementById('admin-users-stat-badge');
        if (!container) return;

        if (!window.authManager) return;
        const allUsers = window.authManager.getAllUsers();
        const students = allUsers.filter(u => u.username.toLowerCase() !== 'nvt5405@' && u.role !== 'admin');

        const searchInput = document.getElementById('admin-user-search');
        const searchVal = (searchInput ? searchInput.value : '').toLowerCase().trim();

        const filtered = students.filter(u => {
            if (!searchVal) return true;
            return u.username.toLowerCase().includes(searchVal) || 
                   (u.name && u.name.toLowerCase().includes(searchVal)) ||
                   (u.email && u.email.toLowerCase().includes(searchVal));
        });

        if (badge) {
            const approvedCount = students.filter(s => s.isApproved && (s.allowedSections || []).length > 0).length;
            badge.textContent = `${filtered.length} Học viên (${approvedCount} đã cấp quyền)`;
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="glass-card p-8 text-center text-slate-400 space-y-2">
                    <div class="text-3xl">👥</div>
                    <div class="font-bold text-slate-200">
                        ${searchVal ? 'Không tìm thấy học viên nào phù hợp với tìm kiếm.' : 'Chưa có học viên nào đăng ký tài khoản.'}
                    </div>
                    <p class="text-xs text-slate-500 max-w-md mx-auto">
                        Khi có người tạo tài khoản mới trên hệ thống, tài khoản sẽ tự động xuất hiện tại đây ở trạng thái "Chưa cấp quyền". Bạn có thể cấp quyền vào từng Lab hoặc môn học theo ý muốn.
                    </p>
                </div>
            `;
            return;
        }

        const sectionsDef = [
            { id: 'tab-quiz', name: '📝 Luyện Thi' },
            { id: 'tab-game', name: '🎮 Cyber Runner' },
            { id: 'tab-battle', name: '⚔️ Đấu Trường 1v1' },
            { id: 'tab-ctf', name: '🚩 Thử Thách CTF' },
            { id: 'tab-bank', name: '📚 Ngân Hàng Câu' },
            { id: 'tab-flashcard', name: '⚡ Flashcards' }
        ];

        const subjectsDef = window.subjectsManager ? window.subjectsManager.getAllSubjects().map(s => ({
            id: s.id,
            name: `${s.icon || '📚'} ${s.name}`
        })) : [
            { id: 'mmt', name: '🌐 Mạng Máy Tính & CCNA' }
        ];

        container.innerHTML = filtered.map(u => {
            const isApproved = !!u.isApproved;
            const allowedSections = u.allowedSections || [];
            const allowedSubjects = u.allowedSubjects || [];
            const permCount = allowedSections.length;

            return `
                <div class="glass-card p-5 rounded-2xl border-slate-800 space-y-4 hover:border-slate-700 transition" data-user="${window.escapeHTML(u.username)}">
                    <!-- User Header -->
                    <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center text-xl shadow-md">
                                ${window.escapeHTML(u.avatar || '🎓')}
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <h4 class="font-bold text-white text-sm">${window.escapeHTML(u.name)}</h4>
                                    <span class="text-xs font-mono text-cyan-400">@${window.escapeHTML(u.username)}</span>
                                </div>
                                <div class="text-[11px] text-slate-400 font-mono mt-0.5">
                                    ${window.escapeHTML(u.email || '')} • Ngày tạo: ${window.escapeHTML(u.joinedAt || '2026')}
                                </div>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="flex items-center gap-2">
                            ${isApproved && permCount > 0 ? 
                                `<span class="px-2.5 py-1 rounded-xl text-xs font-mono font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800 flex items-center gap-1.5 shadow-sm">
                                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span> ĐÃ CẤP QUYỀN (${permCount} LAB)
                                </span>` :
                                `<span class="px-2.5 py-1 rounded-xl text-xs font-mono font-bold bg-rose-950/80 text-rose-300 border border-rose-800 flex items-center gap-1.5 shadow-sm">
                                    <span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span> CHƯA CẤP QUYỀN (KHÓA)
                                </span>`
                            }
                        </div>
                    </div>

                    <!-- Granular Permission Options -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                        <!-- Sections / Labs Perms -->
                        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                            <div class="font-bold text-slate-300 flex items-center justify-between">
                                <span class="flex items-center gap-1.5"><span>🧪</span> <span>Phân Quyền Các Lab & Mục Học:</span></span>
                                <span class="text-[10px] text-slate-500">(Mục không chọn sẽ bị ẩn)</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 pt-1">
                                ${sectionsDef.map(sec => {
                                    const checked = allowedSections.includes(sec.id) ? 'checked' : '';
                                    return `
                                        <label class="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-800/60 cursor-pointer border border-slate-800/80">
                                            <input type="checkbox" class="user-perm-sec rounded text-cyan-500 focus:ring-0 bg-slate-900 border-slate-700" data-sec="${sec.id}" ${checked}>
                                            <span class="text-slate-300 text-[11px] font-medium">${sec.name}</span>
                                        </label>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        <!-- Subjects Perms -->
                        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                            <div class="font-bold text-slate-300 flex items-center justify-between">
                                <span class="flex items-center gap-1.5"><span>📚</span> <span>Phân Quyền Môn Học:</span></span>
                                <span class="text-[10px] text-slate-500">(Môn không chọn sẽ bị ẩn)</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 pt-1">
                                ${subjectsDef.map(sub => {
                                    const checked = allowedSubjects.includes(sub.id) ? 'checked' : '';
                                    return `
                                        <label class="flex items-center gap-2 p-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-800/60 cursor-pointer border border-slate-800/80">
                                            <input type="checkbox" class="user-perm-sub rounded text-indigo-500 focus:ring-0 bg-slate-900 border-slate-700" data-sub="${sub.id}" ${checked}>
                                            <span class="text-slate-300 text-[11px] font-medium truncate" title="${sub.name}">${sub.name}</span>
                                        </label>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Card Actions -->
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                        <div class="flex items-center gap-2">
                            <button type="button" class="quick-grant-all-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-800">
                                ⚡ Mở Tất Cả
                            </button>
                            <button type="button" class="quick-revoke-all-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700">
                                🚫 Khóa Toàn Bộ
                            </button>
                        </div>
                        <div class="flex items-center gap-2">
                            <button type="button" class="delete-user-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-800">
                                🗑️ Xóa Tài Khoản
                            </button>
                            <button type="button" class="save-user-perm-btn px-4 py-1.5 rounded-xl text-xs font-bold btn-primary bg-gradient-to-r from-cyan-600 to-indigo-600 shadow-md">
                                💾 Lưu Phân Quyền
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Attach event listeners for each user card
        container.querySelectorAll('[data-user]').forEach(card => {
            const username = card.dataset.user;

            // Quick grant all
            const grantBtn = card.querySelector('.quick-grant-all-btn');
            if (grantBtn) {
                grantBtn.addEventListener('click', () => {
                    card.querySelectorAll('.user-perm-sec').forEach(cb => { cb.checked = true; });
                    card.querySelectorAll('.user-perm-sub').forEach(cb => { cb.checked = true; });
                });
            }

            // Quick revoke all
            const revokeBtn = card.querySelector('.quick-revoke-all-btn');
            if (revokeBtn) {
                revokeBtn.addEventListener('click', () => {
                    card.querySelectorAll('.user-perm-sec').forEach(cb => { cb.checked = false; });
                    card.querySelectorAll('.user-perm-sub').forEach(cb => { cb.checked = false; });
                });
            }

            // Save permissions
            const saveBtn = card.querySelector('.save-user-perm-btn');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => {
                    const selectedSecs = Array.from(card.querySelectorAll('.user-perm-sec:checked')).map(cb => cb.dataset.sec);
                    const selectedSubs = Array.from(card.querySelectorAll('.user-perm-sub:checked')).map(cb => cb.dataset.sub);
                    const isApproved = selectedSecs.length > 0;

                    const res = window.authManager.updateUserPermissions(username, selectedSecs, selectedSubs, isApproved);
                    if (res.success) {
                        this.renderUsers();
                        if (window.soundManager) window.soundManager.playCorrect();
                    } else {
                        alert(res.message || 'Lỗi khi lưu phân quyền!');
                    }
                });
            }

            // Delete user
            const delBtn = card.querySelector('.delete-user-btn');
            if (delBtn) {
                delBtn.addEventListener('click', () => {
                    if (confirm(`Bạn có chắc chắn muốn xóa tài khoản @${username}?`)) {
                        const res = window.authManager.deleteUser(username);
                        if (res.success) {
                            this.renderUsers();
                            if (window.soundManager) window.soundManager.playWrong();
                        } else {
                            alert(res.message || 'Lỗi khi xóa!');
                        }
                    }
                });
            }
        });
    }
}

window.adminDashboard = new AdminDashboard();

