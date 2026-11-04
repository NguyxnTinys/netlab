/**
 * Quiz Engine: Handles Practice and Exam Modes
 */
class QuizEngine {
    constructor() {
        this.questions = [];
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.userAnswers = {}; // id -> [answers]
        this.flagged = new Set();
        this.mode = 'practice'; // 'practice' or 'exam'
        this.config = {};
        this.timer = null;
        this.timeLeft = 0; // seconds
        this.startTime = null;
        this.endTime = null;
        this.isFinished = false;

        this.initDOM();
    }

    initDOM() {
        this.elements = {
            // Setup screen
            setupView: document.getElementById('quiz-setup-view'),
            quizView: document.getElementById('quiz-active-view'),
            resultView: document.getElementById('quiz-result-view'),
            chapterSelect: document.getElementById('filter-chapter'),
            countSelect: document.getElementById('filter-count'),
            customCountInput: document.getElementById('custom-count-input'),
            typeSelect: document.getElementById('filter-type'),
            levelSelect: document.getElementById('filter-level'),
            modeRadios: document.getElementsByName('quiz-mode'),
            timeSelect: document.getElementById('filter-time'),
            shuffleQCheckbox: document.getElementById('shuffle-questions'),
            shuffleOptCheckbox: document.getElementById('shuffle-options'),
            startBtn: document.getElementById('start-quiz-btn'),
            availCountBadge: document.getElementById('available-count-badge'),

            // Active view
            timerDisplay: document.getElementById('quiz-timer-display'),
            timerContainer: document.getElementById('quiz-timer-container'),
            qCounter: document.getElementById('q-counter'),
            qProgressFill: document.getElementById('quiz-progress-fill'),
            flagBtn: document.getElementById('flag-q-btn'),
            qChapterBadge: document.getElementById('q-chapter-badge'),
            qTopicBadge: document.getElementById('q-topic-badge'),
            qLevelBadge: document.getElementById('q-level-badge'),
            qTypeBadge: document.getElementById('q-type-badge'),
            qScoreBadge: document.getElementById('q-score-badge'),
            qText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            fillContainer: document.getElementById('fill-container'),
            explanationBox: document.getElementById('explanation-box'),
            explanationText: document.getElementById('explanation-text'),
            prevBtn: document.getElementById('prev-q-btn'),
            nextBtn: document.getElementById('next-q-btn'),
            submitBtn: document.getElementById('submit-quiz-btn'),
            paletteGrid: document.getElementById('palette-grid'),
            togglePaletteBtn: document.getElementById('toggle-palette-btn'),
            paletteDrawer: document.getElementById('palette-drawer'),

            // Result view
            scoreCircleText: document.getElementById('res-score-percent'),
            scoreFraction: document.getElementById('res-score-fraction'),
            totalTimeText: document.getElementById('res-total-time'),
            correctCountText: document.getElementById('res-correct-count'),
            wrongCountText: document.getElementById('res-wrong-count'),
            unansweredCountText: document.getElementById('res-unanswered-count'),
            chapterBreakdownContainer: document.getElementById('chapter-breakdown-container'),
            reviewFilterSelect: document.getElementById('review-filter'),
            reviewList: document.getElementById('review-questions-list'),
            retryBtn: document.getElementById('retry-quiz-btn'),
            retryWrongBtn: document.getElementById('retry-wrong-btn'),
            newQuizBtn: document.getElementById('new-quiz-btn')
        };

        this.bindEvents();
    }

    bindEvents() {
        if (!this.elements.startBtn) return;

        // Update available question count when filters change
        const updateAvail = () => this.updateAvailableCount();
        this.elements.chapterSelect.addEventListener('change', updateAvail);
        this.elements.typeSelect.addEventListener('change', updateAvail);
        this.elements.levelSelect.addEventListener('change', updateAvail);

        this.elements.countSelect.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                this.elements.customCountInput.classList.remove('hidden');
            } else {
                this.elements.customCountInput.classList.add('hidden');
            }
        });

        this.elements.startBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.startQuiz();
        });

        this.elements.prevBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.goToQuestion(this.currentIndex - 1);
        });

        this.elements.nextBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.goToQuestion(this.currentIndex + 1);
        });

        this.elements.flagBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.toggleFlagCurrent();
        });

        this.elements.submitBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.confirmSubmit();
        });

        if (this.elements.togglePaletteBtn) {
            this.elements.togglePaletteBtn.addEventListener('click', () => {
                this.elements.paletteDrawer.classList.toggle('open');
            });
        }

        // Result view buttons
        if (this.elements.retryBtn) {
            this.elements.retryBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.restartCurrentQuiz();
            });
        }

        if (this.elements.retryWrongBtn) {
            this.elements.retryWrongBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.startWrongQuestionsQuiz();
            });
        }

        if (this.elements.newQuizBtn) {
            this.elements.newQuizBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.showSetupView();
            });
        }

        if (this.elements.reviewFilterSelect) {
            this.elements.reviewFilterSelect.addEventListener('change', () => {
                this.renderReviewList();
            });
        }

        // Keyboard navigation
        window.addEventListener('keydown', (e) => {
            if (this.elements.quizView.classList.contains('hidden') || this.isFinished) return;
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'ArrowRight' || e.key === 'n') {
                if (this.currentIndex < this.currentQuestions.length - 1) {
                    this.goToQuestion(this.currentIndex + 1);
                }
            } else if (e.key === 'ArrowLeft' || e.key === 'p') {
                if (this.currentIndex > 0) {
                    this.goToQuestion(this.currentIndex - 1);
                }
            } else if (['1', '2', '3', '4', '5', '6'].includes(e.key)) {
                const optIdx = parseInt(e.key) - 1;
                this.selectOptionByIndex(optIdx);
            } else if (['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'].includes(e.key)) {
                const letter = e.key.toUpperCase();
                const optIdx = ['A', 'B', 'C', 'D', 'E', 'F'].indexOf(letter);
                if (optIdx !== -1) this.selectOptionByIndex(optIdx);
            }
        });
    }

    setQuestions(data, subject) {
        this.questions = data;
        const sub = subject || (window.subjectsManager ? window.subjectsManager.getActiveSubject() : null);
        if (sub) {
            this.updateSubjectUI(sub);
        }
        this.updateAvailableCount();
    }

    updateSubjectUI(sub) {
        const badgeEl = document.getElementById('setup-subject-badge');
        const titleEl = document.getElementById('setup-subject-title');
        const descEl = document.getElementById('setup-subject-desc');

        if (badgeEl) badgeEl.textContent = `${sub.name} • ${sub.code} (${this.questions.length} Câu Hỏi)`;
        if (titleEl) titleEl.textContent = `Thiết Lập Bài Kiểm Tra ${sub.name}`;
        if (descEl) descEl.textContent = sub.description || 'Tùy chỉnh phạm vi ôn tập theo từng chương hoặc thi thử tổng hợp.';

        // Populate Chapter dropdown
        if (this.elements.chapterSelect && sub.chapters) {
            let html = `<option value="all">Tất cả các chương (${this.questions.length} câu)</option>`;
            sub.chapters.forEach(ch => {
                const count = this.questions.filter(q => q.chapterId === ch.id).length;
                html += `<option value="${ch.id}">Chương ${ch.id}: ${ch.name.split(':')[1] || ch.name} (${count} câu)</option>`;
            });
            this.elements.chapterSelect.innerHTML = html;
        }

        // Update custom count max
        if (this.elements.customCountInput) {
            this.elements.customCountInput.max = this.questions.length;
        }
    }

    updateAvailableCount() {
        const filtered = this.getFilteredQuestions();
        if (this.elements.availCountBadge) {
            this.elements.availCountBadge.textContent = `${filtered.length} câu phù hợp`;
        }
    }

    getFilteredQuestions() {
        const chapter = this.elements.chapterSelect.value;
        const type = this.elements.typeSelect.value;
        const level = this.elements.levelSelect.value;

        return this.questions.filter(q => {
            if (chapter !== 'all' && q.chapterId !== parseInt(chapter)) return false;
            if (type !== 'all' && q.type !== type) return false;
            if (level !== 'all' && q.level !== level) return false;
            return true;
        });
    }

    startQuiz() {
        const filtered = this.getFilteredQuestions();
        if (filtered.length === 0) {
            alert('Không có câu hỏi nào khớp với bộ lọc bạn đã chọn!');
            return;
        }

        // Determine question count
        let countVal = this.elements.countSelect.value;
        let count = filtered.length;
        if (countVal === 'custom') {
            const customVal = parseInt(this.elements.customCountInput.value);
            if (!isNaN(customVal) && customVal > 0) count = Math.min(customVal, filtered.length);
        } else if (countVal !== 'all') {
            count = Math.min(parseInt(countVal), filtered.length);
        }

        // Check RBAC permission for Question Count
        if (window.authManager && !window.authManager.isLoggedIn()) {
            if (count > 10) {
                window.authManager.showPermissionGate(
                    'Giới Hạn Lượt Thi Khách Vãng Lai',
                    'Khách vãng lai được làm tối đa 10 câu/lượt thi. Vui lòng đăng nhập hoặc tạo tài khoản miễn phí để làm bài 20, 40 câu hoặc toàn bộ đề thi và lưu lịch sử thi!'
                );
                return;
            }
        }

        // Determine mode
        let selectedMode = 'practice';
        for (const radio of this.elements.modeRadios) {
            if (radio.checked) {
                selectedMode = radio.value;
                break;
            }
        }
        this.mode = selectedMode;

        // Shuffle questions
        let selected = [...filtered];
        if (this.elements.shuffleQCheckbox.checked) {
            selected.sort(() => Math.random() - 0.5);
        }
        selected = selected.slice(0, count);

        // Process options shuffle if checked
        const shuffleOpts = this.elements.shuffleOptCheckbox.checked;
        this.currentQuestions = selected.map(q => {
            if (q.type === 'fill' || !shuffleOpts) return { ...q };
            // For multiple choice, keep letter mapping or shuffle options
            return { ...q };
        });

        // Setup timer
        const timeLimitMinutes = parseInt(this.elements.timeSelect.value);
        if (this.mode === 'exam' && timeLimitMinutes > 0) {
            this.timeLeft = timeLimitMinutes * 60;
            this.startTimer();
            this.elements.timerContainer.classList.remove('hidden');
        } else {
            this.timeLeft = 0;
            this.elements.timerContainer.classList.add('hidden');
        }

        this.userAnswers = {};
        this.flagged = new Set();
        this.currentIndex = 0;
        this.isFinished = false;
        this.startTime = Date.now();

        this.elements.setupView.classList.add('hidden');
        this.elements.resultView.classList.add('hidden');
        this.elements.quizView.classList.remove('hidden');

        this.renderPalette();
        this.renderCurrentQuestion();
    }

    startTimer() {
        clearInterval(this.timer);
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                window.soundManager.playAlarm();
                alert('Hết giờ làm bài! Hệ thống sẽ tự động nộp bài.');
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        this.elements.timerDisplay.textContent = str;
        if (this.timeLeft <= 300) {
            this.elements.timerDisplay.classList.add('text-rose-500', 'animate-pulse');
        } else {
            this.elements.timerDisplay.classList.remove('text-rose-500', 'animate-pulse');
        }
    }

    renderCurrentQuestion() {
        const q = this.currentQuestions[this.currentIndex];
        if (!q) return;

        // Progress
        const total = this.currentQuestions.length;
        this.elements.qCounter.textContent = `Câu ${this.currentIndex + 1} / ${total}`;
        const pct = ((this.currentIndex + 1) / total) * 100;
        this.elements.qProgressFill.style.width = `${pct}%`;

        // Navigation buttons
        this.elements.prevBtn.disabled = this.currentIndex === 0;
        this.elements.nextBtn.disabled = this.currentIndex === total - 1;

        // Badges
        this.elements.qChapterBadge.textContent = `Chương ${q.chapterId}`;
        this.elements.qTopicBadge.textContent = q.topic;
        this.elements.qLevelBadge.textContent = q.level;
        this.elements.qTypeBadge.textContent = q.type === 'single' ? 'Chọn 1' : (q.type === 'multiple' ? 'Chọn nhiều' : 'Điền từ');
        this.elements.qScoreBadge.textContent = `${q.score} điểm`;

        // Flag state
        if (this.flagged.has(q.id)) {
            this.elements.flagBtn.classList.add('flagged');
            this.elements.flagBtn.innerHTML = '🚩 Đã gắn cờ';
        } else {
            this.elements.flagBtn.classList.remove('flagged');
            this.elements.flagBtn.innerHTML = '🏳️ Gắn cờ';
        }

        // Question text
        this.elements.qText.innerHTML = window.formatQuestionText ? window.formatQuestionText(q.question) : q.question.replace(/\n/g, '<br>');

        // Render input containers
        this.elements.explanationBox.classList.add('hidden');

        if (q.type === 'fill') {
            this.elements.optionsContainer.classList.add('hidden');
            this.elements.fillContainer.classList.remove('hidden');
            this.renderFillInputs(q);
        } else {
            this.elements.fillContainer.classList.add('hidden');
            this.elements.optionsContainer.classList.remove('hidden');
            this.renderOptions(q);
        }

        // If in practice mode and question is completely answered, reveal explanation
        const answered = this.userAnswers[q.id] || [];
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;
        const isComplete = isMultiple ? (answered.length === requiredCount) : (answered.length > 0);

        if (this.mode === 'practice' && isComplete) {
            this.showExplanation(q);
        }

        this.updatePaletteSelection();
    }

    renderOptions(q) {
        this.elements.optionsContainer.innerHTML = '';
        const answered = this.userAnswers[q.id] || [];
        const isPractice = this.mode === 'practice';
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;

        // In practice mode, question is considered complete only when requiredCount answers are chosen (or single answer chosen)
        const isComplete = isMultiple ? (answered.length === requiredCount) : (answered.length > 0);

        // Show prominent helper banner for multiple choice questions
        if (isMultiple) {
            const hintBanner = document.createElement('div');
            hintBanner.className = 'w-full mb-3 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between text-xs';
            hintBanner.innerHTML = `
                <div class="flex items-center gap-2">
                    <span class="text-base">🧩</span>
                    <div>
                        <div class="font-bold text-cyan-300 uppercase tracking-wide">CÂU HỎI CHỌN NHIỀU ĐÁP ÁN</div>
                        <div class="text-slate-300">Bạn phải chọn đủ <strong class="text-white">${requiredCount} đáp án đúng</strong> mới được tính điểm!</div>
                    </div>
                </div>
                <div class="px-3 py-1 rounded-lg border font-mono font-bold text-xs ${answered.length === requiredCount ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' : 'bg-amber-500/20 text-amber-300 border-amber-500/50'}">
                    Đã chọn: ${answered.length} / ${requiredCount}
                </div>
            `;
            this.elements.optionsContainer.appendChild(hintBanner);
        }

        q.options.forEach((optStr, idx) => {
            const letter = optStr.charAt(0);
            const btn = document.createElement('button');
            btn.className = 'option-card';
            btn.dataset.letter = letter;

            const isSelected = answered.includes(letter);
            const isCorrect = q.correctAnswers.includes(letter);

            if (isSelected) {
                btn.classList.add('selected');
            }

            // In practice mode, show correct/incorrect styling ONLY after the question is completely answered
            if (isPractice && isComplete) {
                if (isCorrect) {
                    btn.classList.add('correct');
                } else if (isSelected) {
                    btn.classList.add('incorrect');
                }
            }

            const safeOptText = window.escapeHTML ? window.escapeHTML(optStr.substring(3).trim()) : optStr.substring(3).trim();
            btn.innerHTML = `
                <div class="option-badge">${letter}</div>
                <div class="option-text">${safeOptText}</div>
                ${isSelected ? '<span class="text-cyan-400 font-bold ml-auto text-sm">✓</span>' : ''}
            `;

            btn.addEventListener('click', () => {
                if (isPractice && isComplete) return; // Prevent changing in practice mode once completely answered
                this.handleOptionClick(q, letter);
            });

            this.elements.optionsContainer.appendChild(btn);
        });
    }

    handleOptionClick(q, letter) {
        let curr = this.userAnswers[q.id] ? [...this.userAnswers[q.id]] : [];
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;

        if (!isMultiple) {
            window.soundManager.playClick();
            curr = [letter];
            this.userAnswers[q.id] = curr;
            const isCorrect = q.correctAnswers[0] === letter;
            if (this.mode === 'practice') {
                if (isCorrect) window.soundManager.playCorrect();
                else window.soundManager.playWrong();
                this.showExplanation(q);
            }
        } else {
            // Multiple choice: toggle selection
            const pos = curr.indexOf(letter);
            if (pos > -1) {
                // Deselect
                curr.splice(pos, 1);
                window.soundManager.playClick();
            } else {
                // Select
                if (curr.length < requiredCount) {
                    curr.push(letter);
                    window.soundManager.playClick();
                } else {
                    // In exam mode, replace the oldest selection
                    if (this.mode === 'exam') {
                        curr.shift();
                        curr.push(letter);
                        window.soundManager.playClick();
                    } else {
                        // In practice mode, already reached requiredCount
                        return;
                    }
                }
            }
            this.userAnswers[q.id] = curr;

            if (this.mode === 'practice') {
                // Only evaluate and reveal when player has selected ALL required answers
                if (curr.length === requiredCount) {
                    const isAllCorrect = this.checkQuestionAnswer(q);
                    if (isAllCorrect) window.soundManager.playCorrect();
                    else window.soundManager.playWrong();
                    this.showExplanation(q);
                } else {
                    this.elements.explanationBox.classList.add('hidden');
                }
            }
        }

        this.renderOptions(q);
        this.updatePaletteButton(q.id);
    }

    selectOptionByIndex(idx) {
        const q = this.currentQuestions[this.currentIndex];
        if (!q || q.type === 'fill') return;
        if (idx < q.options.length) {
            const letter = q.options[idx].charAt(0);
            this.handleOptionClick(q, letter);
        }
    }

    renderFillInputs(q) {
        this.elements.fillContainer.innerHTML = '';
        const answered = this.userAnswers[q.id] || [];
        const isPractice = this.mode === 'practice';
        const isAnswered = answered.length > 0;

        const count = q.correctAnswers.length;
        const formDiv = document.createElement('div');
        formDiv.className = 'fill-form-grid';

        const inputs = [];

        for (let i = 0; i < count; i++) {
            const row = document.createElement('div');
            row.className = 'fill-row';
            const val = answered[i] || '';
            const isCorrect = val.trim().toLowerCase() === q.correctAnswers[i].trim().toLowerCase();

            let statusClass = '';
            if (isPractice && isAnswered) {
                statusClass = isCorrect ? 'border-emerald-500 bg-emerald-950/20' : 'border-rose-500 bg-rose-950/20';
            }

            row.innerHTML = `
                <span class="fill-idx">${i + 1}.</span>
                <input type="text" class="fill-input ${statusClass}" placeholder="Nhập đáp án mục ${i + 1}..." value="${val}" ${isPractice && isAnswered ? 'readonly' : ''}>
                ${isPractice && isAnswered ? `<span class="fill-key">Đáp án đúng: <strong>${q.correctAnswers[i]}</strong></span>` : ''}
            `;

            const inputEl = row.querySelector('input');
            inputs.push(inputEl);
            formDiv.appendChild(row);
        }

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'btn-primary mt-4';
        confirmBtn.innerHTML = '💾 Lưu câu trả lời điền từ';

        confirmBtn.addEventListener('click', () => {
            const userValues = inputs.map(inp => inp.value.trim());
            this.userAnswers[q.id] = userValues;
            window.soundManager.playClick();
            this.renderFillInputs(q);
            if (this.mode === 'practice') {
                this.showExplanation(q);
            }
            this.updatePaletteButton(q.id);
        });

        if (!(isPractice && isAnswered)) {
            formDiv.appendChild(confirmBtn);
        }

        this.elements.fillContainer.appendChild(formDiv);
    }

    showExplanation(q) {
        this.elements.explanationBox.classList.remove('hidden');
        let isCorrect = this.checkQuestionAnswer(q);
        const header = isCorrect 
            ? '<span class="text-emerald-400 font-bold text-base">🎉 Chính xác! Bạn đã chọn đủ và đúng tất cả đáp án.</span>' 
            : '<span class="text-rose-400 font-bold text-base">❌ Chưa chính xác! Phải chọn đủ và đúng tất cả đáp án mới được tính điểm.</span>';
        const correctStr = q.type === 'fill' ? q.correctAnswers.join('; ') : q.correctAnswers.join(', ');
        const safeCorrectStr = window.escapeHTML ? window.escapeHTML(correctStr) : correctStr;
        const safeExplanation = window.escapeHTML ? window.escapeHTML(q.explanation || '') : (q.explanation || '');

        this.elements.explanationText.innerHTML = `
            ${header}
            <div class="mt-2 text-slate-200"><strong>Đáp án đúng:</strong> <span class="text-cyan-300 font-bold">${safeCorrectStr}</span></div>
            <div class="mt-1 text-slate-300">💡 <strong>Giải thích / Gợi ý:</strong> ${safeExplanation}</div>
        `;
    }

    checkQuestionAnswer(q) {
        const userAns = this.userAnswers[q.id];
        if (!userAns || userAns.length === 0) return false;

        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;

        if (!isMultiple) {
            return userAns[0] === q.correctAnswers[0];
        } else if (isMultiple) {
            // Must select EXACTLY the required number of answers
            if (userAns.length !== requiredCount) return false;
            // AND every correct answer must be selected, and no wrong answers selected
            return q.correctAnswers.every(a => userAns.includes(a)) && userAns.every(a => q.correctAnswers.includes(a));
        } else if (q.type === 'fill') {
            if (userAns.length !== q.correctAnswers.length) return false;
            return q.correctAnswers.every((ca, idx) => {
                const u = (userAns[idx] || '').trim().toLowerCase();
                return u === ca.trim().toLowerCase();
            });
        }
        return false;
    }

    toggleFlagCurrent() {
        const q = this.currentQuestions[this.currentIndex];
        if (!q) return;
        if (this.flagged.has(q.id)) {
            this.flagged.delete(q.id);
        } else {
            this.flagged.add(q.id);
        }
        this.renderCurrentQuestion();
        this.updatePaletteButton(q.id);
    }

    goToQuestion(index) {
        if (index < 0 || index >= this.currentQuestions.length) return;
        this.currentIndex = index;
        this.renderCurrentQuestion();
    }

    renderPalette() {
        this.elements.paletteGrid.innerHTML = '';
        this.currentQuestions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = 'palette-btn';
            btn.dataset.id = q.id;
            btn.dataset.index = idx;
            btn.textContent = idx + 1;

            btn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.goToQuestion(idx);
                if (this.elements.paletteDrawer) this.elements.paletteDrawer.classList.remove('open');
            });

            this.elements.paletteGrid.appendChild(btn);
        });
        this.updateAllPaletteButtons();
    }

    updatePaletteButton(qId) {
        const btn = this.elements.paletteGrid.querySelector(`[data-id="${qId}"]`);
        if (!btn) return;
        const q = this.currentQuestions.find(item => item.id === qId);
        if (!q) return;

        const userAns = this.userAnswers[qId] || [];
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;
        const isComplete = isMultiple ? (userAns.length === requiredCount) : (userAns.length > 0);
        const isFlagged = this.flagged.has(qId);

        btn.classList.toggle('answered', userAns.length > 0);
        btn.classList.toggle('flagged', isFlagged);

        if (this.mode === 'practice' && isComplete) {
            const correct = this.checkQuestionAnswer(q);
            btn.classList.toggle('correct', correct);
            btn.classList.toggle('incorrect', !correct);
        } else {
            btn.classList.remove('correct', 'incorrect');
        }
    }

    updateAllPaletteButtons() {
        this.currentQuestions.forEach(q => this.updatePaletteButton(q.id));
        this.updatePaletteSelection();
    }

    updatePaletteSelection() {
        const btns = this.elements.paletteGrid.querySelectorAll('.palette-btn');
        btns.forEach((btn, idx) => {
            btn.classList.toggle('active', idx === this.currentIndex);
        });
    }

    confirmSubmit() {
        const total = this.currentQuestions.length;
        const answeredCount = Object.keys(this.userAnswers).filter(k => this.userAnswers[k] && this.userAnswers[k].length > 0).length;
        const unans = total - answeredCount;

        let msg = `Bạn đã hoàn thành ${answeredCount}/${total} câu hỏi.`;
        if (unans > 0) {
            msg += `\nCòn ${unans} câu CHƯA TRẢ LỜI. Bạn có chắc chắn muốn nộp bài?`;
        } else {
            msg += `\nBạn có muốn nộp bài và xem kết quả chi tiết?`;
        }

        if (confirm(msg)) {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        clearInterval(this.timer);
        this.isFinished = true;
        this.endTime = Date.now();

        // Calculate statistics
        let correctCount = 0;
        let totalScore = 0;
        let maxScore = 0;
        
        // Dynamic chapter stats based on active subject
        const chapterStats = {};
        const activeSub = window.subjectsManager ? window.subjectsManager.getActiveSubject() : null;
        if (activeSub && activeSub.chapters) {
            activeSub.chapters.forEach(c => {
                chapterStats[c.id] = { total: 0, correct: 0, title: c.name };
            });
        }

        this.currentQuestions.forEach(q => {
            maxScore += q.score;
            if (!chapterStats[q.chapterId]) {
                chapterStats[q.chapterId] = { total: 0, correct: 0, title: q.chapter || `Chương ${q.chapterId}` };
            }
            chapterStats[q.chapterId].total++;

            const isCorrect = this.checkQuestionAnswer(q);
            if (isCorrect) {
                correctCount++;
                totalScore += q.score;
                chapterStats[q.chapterId].correct++;
            }
        });

        const total = this.currentQuestions.length;
        const answeredCount = Object.keys(this.userAnswers).filter(k => this.userAnswers[k] && this.userAnswers[k].length > 0).length;
        const wrongCount = answeredCount - correctCount;
        const unansCount = total - answeredCount;
        const percent = Math.round((correctCount / total) * 100);

        // Sound effect
        if (percent >= 80) window.soundManager.playFanfare();
        else if (percent >= 50) window.soundManager.playCorrect();
        else window.soundManager.playWrong();

        // Display results
        this.elements.scoreCircleText.textContent = `${percent}%`;
        this.elements.scoreFraction.textContent = `${correctCount} / ${total} câu đúng (${totalScore}/${maxScore} điểm)`;

        const durationSeconds = Math.round((this.endTime - this.startTime) / 1000);
        const mins = Math.floor(durationSeconds / 60);
        const secs = durationSeconds % 60;
        const timeSpentStr = `${mins}m ${secs}s`;
        this.elements.totalTimeText.textContent = timeSpentStr;

        this.elements.correctCountText.textContent = correctCount;
        this.elements.wrongCountText.textContent = Math.max(0, wrongCount);
        this.elements.unansweredCountText.textContent = unansCount;

        // Save exam history for logged in user
        if (window.authManager) {
            window.authManager.saveExamResult({
                subjectId: activeSub ? activeSub.id : 'mmt',
                subjectName: activeSub ? activeSub.name : 'Mạng Máy Tính',
                score: totalScore,
                totalScore: maxScore,
                percent: percent,
                correctCount: correctCount,
                totalCount: total,
                timeSpent: timeSpentStr
            });
        }

        // Render chapter breakdown
        this.renderChapterBreakdown(chapterStats);

        // Switch view
        this.elements.quizView.classList.add('hidden');
        this.elements.resultView.classList.remove('hidden');

        // Render review
        this.renderReviewList();
    }

    renderChapterBreakdown(stats) {
        if (!this.elements.chapterBreakdownContainer) return;
        this.elements.chapterBreakdownContainer.innerHTML = '';

        Object.keys(stats).forEach(chId => {
            const s = stats[chId];
            if (!s || s.total === 0) return;
            const pct = Math.round((s.correct / s.total) * 100);
            const row = document.createElement('div');
            row.className = 'chapter-stat-bar';
            row.innerHTML = `
                <div class="flex justify-between text-sm mb-1">
                    <span class="font-medium text-slate-200">${s.title}</span>
                    <span class="text-cyan-400 font-bold">${s.correct}/${s.total} (${pct}%)</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div class="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2.5 rounded-full" style="width: ${pct}%"></div>
                </div>
            `;
            this.elements.chapterBreakdownContainer.appendChild(row);
        });
    }

    renderReviewList() {
        if (!this.elements.reviewList) return;
        this.elements.reviewList.innerHTML = '';
        const filterVal = this.elements.reviewFilterSelect.value;

        this.currentQuestions.forEach((q, idx) => {
            const isCorrect = this.checkQuestionAnswer(q);
            const answered = this.userAnswers[q.id] && this.userAnswers[q.id].length > 0;
            const isFlagged = this.flagged.has(q.id);

            if (filterVal === 'wrong' && (isCorrect || !answered)) return;
            if (filterVal === 'unanswered' && answered) return;
            if (filterVal === 'flagged' && !isFlagged) return;

            const card = document.createElement('div');
            card.className = `review-card ${isCorrect ? 'border-emerald-500/40 bg-emerald-950/10' : 'border-rose-500/40 bg-rose-950/10'}`;

            const userAnsStr = answered ? (q.type === 'fill' ? this.userAnswers[q.id].join('; ') : this.userAnswers[q.id].join(', ')) : 'Chưa trả lời';
            const correctAnsStr = q.type === 'fill' ? q.correctAnswers.join('; ') : q.correctAnswers.join(', ');

            const safeUserAns = answered ? (window.escapeHTML ? window.escapeHTML(userAnsStr) : userAnsStr) : '<span class="text-slate-500 italic">Chưa trả lời</span>';
            const safeCorrectAns = window.escapeHTML ? window.escapeHTML(correctAnsStr) : correctAnsStr;
            const safeExplanation = window.escapeHTML ? window.escapeHTML(q.explanation || '') : (q.explanation || '');
            const safeTopic = window.escapeHTML ? window.escapeHTML(q.topic || '') : (q.topic || '');
            const safeQText = window.formatQuestionText ? window.formatQuestionText(q.question) : q.question.replace(/\n/g, '<br>');

            card.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <span class="font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}">
                        Câu ${idx + 1}: ${isCorrect ? '✅ Đúng' : '❌ Sai'} (${q.score} điểm)
                    </span>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">${safeTopic}</span>
                </div>
                <div class="text-slate-100 font-medium mb-3">${safeQText}</div>
                <div class="text-sm space-y-1 mb-3">
                    <div class="text-slate-300">Lựa chọn của bạn: <strong>${safeUserAns}</strong></div>
                    <div class="text-cyan-300 font-semibold">Đáp án chính xác: <strong>${safeCorrectAns}</strong></div>
                </div>
                <div class="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/50">
                    💡 <strong>Giải thích:</strong> ${safeExplanation}
                </div>
            `;
            this.elements.reviewList.appendChild(card);
        });
    }

    restartCurrentQuiz() {
        this.userAnswers = {};
        this.flagged = new Set();
        this.currentIndex = 0;
        this.isFinished = false;
        this.startTime = Date.now();

        if (this.mode === 'exam' && parseInt(this.elements.timeSelect.value) > 0) {
            this.timeLeft = parseInt(this.elements.timeSelect.value) * 60;
            this.startTimer();
        }

        this.elements.resultView.classList.add('hidden');
        this.elements.quizView.classList.remove('hidden');

        this.renderPalette();
        this.renderCurrentQuestion();
    }

    startWrongQuestionsQuiz() {
        const wrongQs = this.currentQuestions.filter(q => !this.checkQuestionAnswer(q));
        if (wrongQs.length === 0) {
            alert('Tuyệt vời! Bạn không có câu hỏi nào làm sai trong đề vừa rồi!');
            return;
        }

        this.currentQuestions = wrongQs;
        this.restartCurrentQuiz();
    }

    showSetupView() {
        clearInterval(this.timer);
        this.elements.quizView.classList.add('hidden');
        this.elements.resultView.classList.add('hidden');
        this.elements.setupView.classList.remove('hidden');
        this.updateAvailableCount();
    }
}

window.quizEngine = new QuizEngine();

