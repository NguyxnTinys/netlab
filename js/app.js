/**
 * Main Application Controller
 * Handles Multi-Subject Routing, Navigation, Question Bank, Flashcards, and Auth Integration
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Interactive Network Background
    if (document.getElementById('network-canvas')) {
        new NetworkBackground('network-canvas');
    }

    // 2. Multi-Subject Setup
    const subSelector = document.getElementById('global-subject-selector');
    const headerIcon = document.getElementById('header-subject-icon');
    const headerTitle = document.getElementById('header-subject-title');
    const headerCode = document.getElementById('header-subject-code');
    const headerSubtitle = document.getElementById('header-subject-subtitle');
    const navBankLabel = document.getElementById('nav-bank-label');

    function populateSubjectSelector() {
        if (!subSelector || !window.subjectsManager) return;
        const subs = window.subjectsManager.getAllSubjects();
        const activeId = window.subjectsManager.getActiveSubjectId();

        subSelector.innerHTML = subs.map(s => `
            <option value="${s.id}" ${s.id === activeId ? 'selected' : ''}>
                ${s.icon} ${s.name}
            </option>
        `).join('');
    }

    function syncActiveSubject(sub, questions) {
        if (!sub) return;

        // Update Header Branding
        if (headerIcon) headerIcon.textContent = sub.icon || '🌐';
        if (headerTitle) headerTitle.textContent = `NETLAB • ${sub.name.toUpperCase()}`;
        if (headerCode) headerCode.textContent = sub.code || 'SUB101';
        if (headerSubtitle) headerSubtitle.textContent = sub.description || 'Hệ thống luyện thi & Cyber Game vượt chướng ngại vật';
        if (navBankLabel) navBankLabel.textContent = `Ngân Hàng (${questions.length} Câu)`;

        // Pass questions to all engines
        if (window.quizEngine) {
            window.quizEngine.setQuestions(questions, sub);
        }
        if (window.cyberRunnerGame) {
            window.cyberRunnerGame.setQuestions(questions);
        }
        if (window.battleEngine) {
            window.battleEngine.setQuestions(questions);
        }

        // Re-render bank and flashcards if current
        renderQuestionBank(questions, sub);
        initFlashcards(questions, sub);
    }

    populateSubjectSelector();

    if (subSelector) {
        subSelector.addEventListener('change', (e) => {
            const newSubId = e.target.value;
            window.soundManager.playClick();
            window.subjectsManager.setActiveSubject(newSubId);
        });
    }

    // Listen to subject changes
    if (window.subjectsManager) {
        window.subjectsManager.onSubjectChange((sub, questions) => {
            populateSubjectSelector();
            syncActiveSubject(sub, questions);
        });

        // Initial sync
        const activeSub = window.subjectsManager.getActiveSubject();
        const initialQuestions = window.subjectsManager.getQuestions();
        syncActiveSubject(activeSub, initialQuestions);
    }

    // Listen to Auth state changes
    if (window.authManager) {
        window.authManager.onAuthChange((user) => {
            const guestHint = document.getElementById('guest-count-hint');
            if (guestHint) {
                guestHint.classList.toggle('hidden', !!user);
            }
            // Apply granular permissions to UI
            window.authManager.applyPermissionsToUI(user);

            // Re-render bank to toggle admin edit buttons if applicable
            const activeQuestions = window.subjectsManager ? window.subjectsManager.getQuestions() : [];
            const activeSub = window.subjectsManager ? window.subjectsManager.getActiveSubject() : null;
            renderQuestionBank(activeQuestions, activeSub);
        });

        // Initial permissions sync
        window.authManager.applyPermissionsToUI(window.authManager.getCurrentUser());
    }

    // 3. Navigation Tabs
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = {
        'tab-quiz': document.getElementById('section-quiz'),
        'tab-game': document.getElementById('section-game'),
        'tab-battle': document.getElementById('section-battle'),
        'tab-ctf': document.getElementById('section-ctf'),
        'tab-bank': document.getElementById('section-bank'),
        'tab-flashcard': document.getElementById('section-flashcard')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.target;
            window.soundManager.playClick();

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            Object.keys(sections).forEach(key => {
                if (sections[key]) {
                    if (key === targetId) sections[key].classList.remove('hidden');
                    else sections[key].classList.add('hidden');
                }
            });

            // If switching to game, enable full-width mode and trigger resize
            if (targetId === 'tab-game') {
                document.body.classList.add('game-view-active');
                if (window.cyberRunnerGame) {
                    window.cyberRunnerGame.resize();
                }
            } else {
                document.body.classList.remove('game-view-active');
                if (window.cyberRunnerGame && window.cyberRunnerGame.state === 'running') {
                    window.cyberRunnerGame.pauseGame();
                }
            }

            // If switching to bank or flashcards, ensure synced
            const activeQ = window.subjectsManager ? window.subjectsManager.getQuestions() : [];
            const activeSub = window.subjectsManager ? window.subjectsManager.getActiveSubject() : null;
            if (targetId === 'tab-bank') {
                renderQuestionBank(activeQ, activeSub);
            }
            if (targetId === 'tab-flashcard') {
                initFlashcards(activeQ, activeSub);
            }
        });
    });

    // 4. Sound Mute Toggle Button
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    const updateSoundIcon = () => {
        if (!soundToggleBtn) return;
        const isMuted = window.soundManager.muted;
        soundToggleBtn.innerHTML = isMuted ? '🔇 <span class="hidden sm:inline">Âm thanh: Tắt</span>' : '🔊 <span class="hidden sm:inline">Âm thanh: Bật</span>';
        soundToggleBtn.classList.toggle('opacity-60', isMuted);
    };
    updateSoundIcon();

    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            window.soundManager.toggleMute();
            updateSoundIcon();
            if (!window.soundManager.muted) window.soundManager.playClick();
        });
    }

    // 5. Question Bank Explorer (Multi-Subject & Admin Action Support)
    function renderQuestionBank(questions, currentSubject) {
        const bankList = document.getElementById('bank-list');
        const searchInput = document.getElementById('bank-search');
        const chapterFilter = document.getElementById('bank-chapter-filter');
        const levelFilter = document.getElementById('bank-level-filter');
        const showAnswersCheck = document.getElementById('bank-show-answers');
        const countBadge = document.getElementById('bank-count-badge');

        if (!bankList) return;

        // Populate chapter filter based on current subject
        if (chapterFilter && currentSubject && currentSubject.chapters) {
            const currentVal = chapterFilter.value;
            let html = '<option value="all">Tất cả các chương</option>';
            currentSubject.chapters.forEach(c => {
                html += `<option value="${c.id}" ${currentVal === String(c.id) ? 'selected' : ''}>Chương ${c.id}: ${(c.name.split(':')[1] || c.name).trim()}</option>`;
            });
            chapterFilter.innerHTML = html;
        }

        const filterAndRender = () => {
            const term = (searchInput ? searchInput.value : '').toLowerCase().trim();
            const chVal = chapterFilter ? chapterFilter.value : 'all';
            const lvlVal = levelFilter ? levelFilter.value : 'all';
            const showAnswers = showAnswersCheck ? showAnswersCheck.checked : true;

            const filtered = questions.filter(q => {
                if (chVal !== 'all' && q.chapterId !== parseInt(chVal)) return false;
                if (lvlVal !== 'all' && q.level !== lvlVal) return false;
                if (term) {
                    const matchQ = q.question.toLowerCase().includes(term);
                    const matchTopic = q.topic ? q.topic.toLowerCase().includes(term) : false;
                    const matchOpts = q.options ? q.options.some(o => o.toLowerCase().includes(term)) : false;
                    if (!matchQ && !matchTopic && !matchOpts) return false;
                }
                return true;
            });

            if (countBadge) countBadge.textContent = `${filtered.length} / ${questions.length} câu`;
            bankList.innerHTML = '';

            if (filtered.length === 0) {
                bankList.innerHTML = `<div class="p-8 text-center text-slate-500 glass-card">Không có câu hỏi nào khớp với tìm kiếm.</div>`;
                return;
            }

            const isAdmin = window.authManager && window.authManager.isAdmin();

            filtered.forEach((q) => {
                const card = document.createElement('div');
                card.className = 'glass-card p-4 hover:border-cyan-500/40 transition duration-200 border-slate-800';

                const correctStr = q.type === 'fill' ? (q.correctAnswers || []).join('; ') : (q.correctAnswers || []).join(', ');
                let optionsHtml = '';
                if (q.type === 'fill') {
                    optionsHtml = `<div class="text-xs text-amber-300/80 mb-2 font-mono">Dạng câu hỏi: Điền thông số chia mạng con IPv4 (${q.correctAnswers.length} mục)</div>`;
                } else if (q.options && q.options.length > 0) {
                    optionsHtml = `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 text-sm text-slate-300">
                        ${q.options.map(opt => {
                            const isCorrect = (q.correctAnswers || []).some(a => opt.startsWith(a));
                            const highlight = (showAnswers && isCorrect) ? 'text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-500/40' : 'bg-slate-900/40 border border-slate-800';
                            return `<div class="p-2 rounded-lg ${highlight}">${window.escapeHTML(opt)}</div>`;
                        }).join('')}
                    </div>`;
                }

                card.innerHTML = `
                    <div class="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">#${q.id}</span>
                            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300">Chương ${q.chapterId}</span>
                            <span class="text-xs font-semibold text-indigo-300">${window.escapeHTML(q.topic || '')}</span>
                            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-400">${window.escapeHTML(q.level || 'Thông hiểu')}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-400">${q.score || 1} điểm</span>
                            ${isAdmin ? `
                                <button class="admin-bank-edit-btn px-2 py-0.5 text-xs rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700" data-id="${q.id}">
                                    ✏️ Sửa
                                </button>
                                <button class="admin-bank-delete-btn px-2 py-0.5 text-xs rounded bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-800/60" data-id="${q.id}">
                                    🗑️ Xóa
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    <div class="font-medium text-slate-100 my-2">${window.formatQuestionText(q.question)}</div>
                    ${optionsHtml}
                    ${showAnswers ? `
                        <div class="mt-3 pt-2 border-t border-slate-800 text-xs flex flex-wrap justify-between items-center gap-2">
                            <div><strong class="text-emerald-400">Đáp án đúng:</strong> <span class="font-bold text-cyan-300">${window.escapeHTML(correctStr)}</span></div>
                            <div class="text-slate-400">💡 <em>${window.escapeHTML(q.explanation || '')}</em></div>
                        </div>
                    ` : ''}
                `;

                if (isAdmin) {
                    const editBtn = card.querySelector('.admin-bank-edit-btn');
                    const delBtn = card.querySelector('.admin-bank-delete-btn');
                    if (editBtn) {
                        editBtn.addEventListener('click', () => {
                            if (window.adminDashboard) {
                                window.authManager.openAdminModal();
                                window.adminDashboard.openQuestionForm(q.id);
                            }
                        });
                    }
                    if (delBtn) {
                        delBtn.addEventListener('click', () => {
                            if (confirm(`Bạn có chắc chắn muốn xóa câu hỏi #${q.id}?`)) {
                                const subId = window.subjectsManager.getActiveSubjectId();
                                window.subjectsManager.deleteQuestion(subId, q.id);
                                if (window.soundManager) window.soundManager.playWrong();
                            }
                        });
                    }
                }

                bankList.appendChild(card);
            });
        };

        if (searchInput && !searchInput.dataset.bound) {
            searchInput.dataset.bound = 'true';
            searchInput.addEventListener('input', filterAndRender);
        }
        if (chapterFilter && !chapterFilter.dataset.bound) {
            chapterFilter.dataset.bound = 'true';
            chapterFilter.addEventListener('change', filterAndRender);
        }
        if (levelFilter && !levelFilter.dataset.bound) {
            levelFilter.dataset.bound = 'true';
            levelFilter.addEventListener('change', filterAndRender);
        }
        if (showAnswersCheck && !showAnswersCheck.dataset.bound) {
            showAnswersCheck.dataset.bound = 'true';
            showAnswersCheck.addEventListener('change', filterAndRender);
        }

        filterAndRender();
    }

    // 6. Flashcard System (Dynamic Subject & Chapter Support)
    let flashcardIdx = 0;
    let flashcardList = [];

    function initFlashcards(questions, currentSubject) {
        const fcCard = document.getElementById('fc-card');
        const fcQ = document.getElementById('fc-question');
        const fcA = document.getElementById('fc-answer');
        const fcTopic = document.getElementById('fc-topic');
        const fcChapter = document.getElementById('fc-chapter');
        const fcPrev = document.getElementById('fc-prev-btn');
        const fcNext = document.getElementById('fc-next-btn');
        const fcFlip = document.getElementById('fc-flip-btn');
        const fcCounter = document.getElementById('fc-counter');
        const fcChSelect = document.getElementById('fc-chapter-select');

        if (!fcCard) return;

        // Update chapters dropdown
        if (fcChSelect && currentSubject && currentSubject.chapters) {
            const currentVal = fcChSelect.value;
            let html = '<option value="all">Tất cả các chương</option>';
            currentSubject.chapters.forEach(c => {
                html += `<option value="${c.id}" ${currentVal === String(c.id) ? 'selected' : ''}>Chương ${c.id}: ${(c.name.split(':')[1] || c.name).trim()}</option>`;
            });
            fcChSelect.innerHTML = html;
        }

        const updateList = () => {
            const ch = fcChSelect ? fcChSelect.value : 'all';
            flashcardList = questions.filter(q => ch === 'all' || q.chapterId === parseInt(ch));
            flashcardIdx = 0;
            renderCard();
        };

        const renderCard = () => {
            if (flashcardList.length === 0) {
                if (fcCounter) fcCounter.textContent = '0 / 0';
                if (fcQ) fcQ.textContent = 'Không có thẻ ghi nhớ nào trong chương này.';
                if (fcA) fcA.innerHTML = '';
                return;
            }

            const q = flashcardList[flashcardIdx];
            if (fcCard) fcCard.classList.remove('flipped');

            if (fcCounter) fcCounter.textContent = `${flashcardIdx + 1} / ${flashcardList.length}`;
            if (fcChapter) fcChapter.textContent = `Chương ${q.chapterId}`;
            if (fcTopic) fcTopic.textContent = q.topic || '';
            if (fcQ) fcQ.innerHTML = window.formatQuestionText(q.question);

            const correctStr = q.type === 'fill' ? (q.correctAnswers || []).join('; ') : (q.correctAnswers || []).join(', ');
            if (fcA) {
                fcA.innerHTML = `
                    <div class="text-xs text-cyan-400 font-bold mb-1">ĐÁP ÁN CHÍNH XÁC:</div>
                    <div class="text-lg font-bold text-emerald-400 mb-3">${window.escapeHTML(correctStr)}</div>
                    <div class="text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        💡 <strong>Giải thích / Ghi nhớ:</strong><br>${window.escapeHTML(q.explanation || 'Không có ghi chú.')}
                    </div>
                `;
            }
        };

        if (fcFlip && !fcFlip.dataset.bound) {
            fcFlip.dataset.bound = 'true';
            fcFlip.onclick = () => {
                fcCard.classList.toggle('flipped');
                window.soundManager.playClick();
            };
            fcCard.onclick = () => {
                fcCard.classList.toggle('flipped');
                window.soundManager.playClick();
            };
        }

        if (fcPrev && !fcPrev.dataset.bound) {
            fcPrev.dataset.bound = 'true';
            fcPrev.onclick = () => {
                if (flashcardIdx > 0) {
                    flashcardIdx--;
                    window.soundManager.playClick();
                    renderCard();
                }
            };
        }

        if (fcNext && !fcNext.dataset.bound) {
            fcNext.dataset.bound = 'true';
            fcNext.onclick = () => {
                if (flashcardIdx < flashcardList.length - 1) {
                    flashcardIdx++;
                    window.soundManager.playClick();
                    renderCard();
                }
            };
        }

        if (fcChSelect && !fcChSelect.dataset.bound) {
            fcChSelect.dataset.bound = 'true';
            fcChSelect.onchange = updateList;
        }

        updateList();
    }
});
