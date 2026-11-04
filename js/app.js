/**
 * Main Application Controller
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Network background animation
    if (document.getElementById('network-canvas')) {
        new NetworkBackground('network-canvas');
    }

    // 2. Load Quiz Data
    const data = window.QUIZ_DATA || [];
    console.log(`Loaded ${data.length} network quiz questions.`);

    // Pass data to engines
    if (window.quizEngine) {
        window.quizEngine.setQuestions(data);
    }
    if (window.cyberRunnerGame) {
        window.cyberRunnerGame.setQuestions(data);
    }
    if (window.battleEngine) {
        window.battleEngine.setQuestions(data);
    }

    // 3. Setup Navigation Tabs
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
                // Auto pause game if running when leaving game tab
                if (window.cyberRunnerGame && window.cyberRunnerGame.state === 'running') {
                    window.cyberRunnerGame.pauseGame();
                }
            }
            // If switching to bank, render question bank if not done
            if (targetId === 'tab-bank') {
                renderQuestionBank(data);
            }
            // If switching to flashcard, render flashcards
            if (targetId === 'tab-flashcard') {
                initFlashcards(data);
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

    // 5. Question Bank Explorer
    let bankInitialized = false;
    function renderQuestionBank(questions) {
        if (bankInitialized) return;
        bankInitialized = true;

        const bankList = document.getElementById('bank-list');
        const searchInput = document.getElementById('bank-search');
        const chapterFilter = document.getElementById('bank-chapter-filter');
        const levelFilter = document.getElementById('bank-level-filter');
        const showAnswersCheck = document.getElementById('bank-show-answers');
        const countBadge = document.getElementById('bank-count-badge');

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
                    const matchTopic = q.topic.toLowerCase().includes(term);
                    const matchOpts = q.options.some(o => o.toLowerCase().includes(term));
                    if (!matchQ && !matchTopic && !matchOpts) return false;
                }
                return true;
            });

            if (countBadge) countBadge.textContent = `${filtered.length} / ${questions.length} câu`;
            if (!bankList) return;

            bankList.innerHTML = '';
            filtered.forEach((q, idx) => {
                const card = document.createElement('div');
                card.className = 'glass-card p-4 hover:border-cyan-500/40 transition duration-200';

                const correctStr = q.type === 'fill' ? q.correctAnswers.join('; ') : q.correctAnswers.join(', ');
                let optionsHtml = '';
                if (q.type === 'fill') {
                    optionsHtml = `<div class="text-xs text-amber-300/80 mb-2 font-mono">Dạng câu hỏi: Điền thông số chia mạng con IPv4 (${q.correctAnswers.length} mục)</div>`;
                } else {
                    optionsHtml = `<div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 text-sm text-slate-300">
                        ${q.options.map(opt => {
                            const isCorrect = q.correctAnswers.some(a => opt.startsWith(a));
                            const highlight = (showAnswers && isCorrect) ? 'text-emerald-400 font-bold bg-emerald-950/30 border border-emerald-500/40' : 'bg-slate-900/40 border border-slate-800';
                            return `<div class="p-2 rounded-lg ${highlight}">${opt}</div>`;
                        }).join('')}
                    </div>`;
                }

                card.innerHTML = `
                    <div class="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <div class="flex items-center gap-2">
                            <span class="px-2 py-0.5 rounded text-xs font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">#${q.id}</span>
                            <span class="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300">Chương ${q.chapterId}</span>
                            <span class="text-xs font-semibold text-indigo-300">${q.topic}</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400">${q.level}</span>
                            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400">${q.score} điểm</span>
                        </div>
                    </div>
                    <div class="font-medium text-slate-100 my-2">${q.question.replace(/\n/g, '<br>')}</div>
                    ${optionsHtml}
                    ${showAnswers ? `
                        <div class="mt-3 pt-2 border-t border-slate-800 text-xs flex flex-wrap justify-between items-center gap-2">
                            <div><strong class="text-emerald-400">Đáp án:</strong> <span class="font-bold text-cyan-300">${correctStr}</span></div>
                            <div class="text-slate-400">💡 <em>${q.explanation}</em></div>
                        </div>
                    ` : ''}
                `;
                bankList.appendChild(card);
            });
        };

        if (searchInput) searchInput.addEventListener('input', filterAndRender);
        if (chapterFilter) chapterFilter.addEventListener('change', filterAndRender);
        if (levelFilter) levelFilter.addEventListener('change', filterAndRender);
        if (showAnswersCheck) showAnswersCheck.addEventListener('change', filterAndRender);

        filterAndRender();
    }

    // 6. Flashcard System
    let flashcardIdx = 0;
    let flashcardList = [];
    function initFlashcards(questions) {
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

        const updateList = () => {
            const ch = fcChSelect ? fcChSelect.value : 'all';
            flashcardList = questions.filter(q => ch === 'all' || q.chapterId === parseInt(ch));
            flashcardIdx = 0;
            renderCard();
        };

        const renderCard = () => {
            if (flashcardList.length === 0) return;
            const q = flashcardList[flashcardIdx];
            if (fcCard) fcCard.classList.remove('flipped');

            if (fcCounter) fcCounter.textContent = `${flashcardIdx + 1} / ${flashcardList.length}`;
            if (fcChapter) fcChapter.textContent = `Chương ${q.chapterId}`;
            if (fcTopic) fcTopic.textContent = q.topic;
            if (fcQ) fcQ.innerHTML = q.question.replace(/\n/g, '<br>');

            const correctStr = q.type === 'fill' ? q.correctAnswers.join('; ') : q.correctAnswers.join(', ');
            if (fcA) {
                fcA.innerHTML = `
                    <div class="text-xs text-cyan-400 font-bold mb-1">ĐÁP ÁN CHÍNH XÁC:</div>
                    <div class="text-lg font-bold text-emerald-400 mb-3">${correctStr}</div>
                    <div class="text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                        💡 <strong>Giải thích / Ghi nhớ:</strong><br>${q.explanation}
                    </div>
                `;
            }
        };

        if (fcFlip && fcCard) {
            fcFlip.onclick = () => {
                fcCard.classList.toggle('flipped');
                window.soundManager.playClick();
            };
            fcCard.onclick = () => {
                fcCard.classList.toggle('flipped');
                window.soundManager.playClick();
            };
        }

        if (fcPrev) {
            fcPrev.onclick = () => {
                if (flashcardIdx > 0) {
                    flashcardIdx--;
                    window.soundManager.playClick();
                    renderCard();
                }
            };
        }

        if (fcNext) {
            fcNext.onclick = () => {
                if (flashcardIdx < flashcardList.length - 1) {
                    flashcardIdx++;
                    window.soundManager.playClick();
                    renderCard();
                }
            };
        }

        if (fcChSelect) {
            fcChSelect.onchange = updateList;
        }

        updateList();
    }
});

