/**
 * Cyber Duel 1v1: Versus Network Battle Engine
 * Supports Player vs AI and 2-Player Local Split-Screen
 */
class BattleEngine {
    constructor() {
        this.questions = [];
        this.currentQ = null;
        this.mode = 'pve'; // 'pve' or 'pvp'
        this.aiLevel = 'engineer'; // 'novice', 'engineer', 'master'
        this.aiTimer = null;
        this.isPlaying = false;

        this.p1 = {
            hp: 100,
            maxHp: 100,
            streak: 0,
            lockoutUntil: 0,
            score: 0,
            correct: 0,
            total: 0
        };

        this.p2 = {
            hp: 100,
            maxHp: 100,
            streak: 0,
            lockoutUntil: 0,
            score: 0,
            correct: 0,
            total: 0,
            isAi: true
        };

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.ui = {
            setupView: document.getElementById('battle-setup-view'),
            arenaView: document.getElementById('battle-arena-view'),
            resultView: document.getElementById('battle-result-view'),

            // Setup controls
            modeSelect: document.getElementsByName('battle-mode-radio'),
            aiLevelSelect: document.getElementById('battle-ai-level'),
            aiLevelContainer: document.getElementById('battle-ai-level-container'),
            startBtn: document.getElementById('start-battle-btn'),

            // P1 elements
            p1HpBar: document.getElementById('p1-hp-fill'),
            p1HpText: document.getElementById('p1-hp-text'),
            p1StreakBadge: document.getElementById('p1-streak-badge'),
            p1Card: document.getElementById('p1-card'),
            p1Options: document.getElementById('p1-options-container'),
            p1LockoutOverlay: document.getElementById('p1-lockout-overlay'),

            // P2 elements
            p2Name: document.getElementById('p2-display-name'),
            p2Avatar: document.getElementById('p2-avatar'),
            p2HpBar: document.getElementById('p2-hp-fill'),
            p2HpText: document.getElementById('p2-hp-text'),
            p2StreakBadge: document.getElementById('p2-streak-badge'),
            p2Card: document.getElementById('p2-card'),
            p2Options: document.getElementById('p2-options-container'),
            p2LockoutOverlay: document.getElementById('p2-lockout-overlay'),

            // Question shared display
            qTopic: document.getElementById('battle-q-topic'),
            qText: document.getElementById('battle-q-text'),

            // Result modal
            resTitle: document.getElementById('battle-res-title'),
            resSubtitle: document.getElementById('battle-res-subtitle'),
            resStatsP1: document.getElementById('battle-res-stats-p1'),
            resStatsP2: document.getElementById('battle-res-stats-p2'),
            rematchBtn: document.getElementById('battle-rematch-btn'),
            exitBtn: document.getElementById('battle-exit-btn')
        };
    }

    setQuestions(data) {
        // Exclude fill-in questions for rapid battle action
        this.questions = data.filter(q => q.type === 'single');
    }

    bindEvents() {
        if (!this.ui.startBtn) return;

        // Mode switch
        for (const radio of this.ui.modeSelect) {
            radio.addEventListener('change', (e) => {
                this.mode = e.target.value;
                if (this.ui.aiLevelContainer) {
                    this.ui.aiLevelContainer.classList.toggle('hidden', this.mode === 'pvp');
                }
            });
        }

        this.ui.startBtn.addEventListener('click', () => {
            window.soundManager.playClick();
            this.startBattle();
        });

        if (this.ui.rematchBtn) {
            this.ui.rematchBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.startBattle();
            });
        }

        if (this.ui.exitBtn) {
            this.ui.exitBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.showSetup();
            });
        }

        // Keyboard hotkeys
        window.addEventListener('keydown', (e) => {
            if (!this.isPlaying || !this.currentQ) return;
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            // Player 1 Hotkeys: 1, 2, 3, 4 or A, B, C, D
            const p1Keys = {
                '1': 'A', '2': 'B', '3': 'C', '4': 'D',
                'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D'
            };
            if (p1Keys[e.key.toLowerCase()]) {
                this.handlePlayerAnswer(1, p1Keys[e.key.toLowerCase()]);
            }

            // Player 2 Hotkeys (PVP Mode): 7, 8, 9, 0 or U, I, O, P
            if (this.mode === 'pvp') {
                const p2Keys = {
                    '7': 'A', '8': 'B', '9': 'C', '0': 'D',
                    'u': 'A', 'i': 'B', 'o': 'C', 'p': 'D',
                    'U': 'A', 'I': 'B', 'O': 'C', 'P': 'D'
                };
                if (p2Keys[e.key]) {
                    this.handlePlayerAnswer(2, p2Keys[e.key]);
                }
            }
        });
    }

    startBattle() {
        if (this.questions.length === 0) return;

        this.p1 = { hp: 100, maxHp: 100, streak: 0, lockoutUntil: 0, score: 0, correct: 0, total: 0 };
        this.p2 = {
            hp: 100,
            maxHp: 100,
            streak: 0,
            lockoutUntil: 0,
            score: 0,
            correct: 0,
            total: 0,
            isAi: (this.mode === 'pve')
        };

        if (this.ui.aiLevelSelect) {
            this.aiLevel = this.ui.aiLevelSelect.value;
        }

        // Setup Player 2 UI label
        if (this.mode === 'pve') {
            const aiNames = {
                'novice': '🤖 AI Sentinel (Tân Binh)',
                'engineer': '🛡️ AI Cisco Architect (Kỹ Sư)',
                'master': '⚡ AI DeepMind Cyber Overlord (Thần Mạng)'
            };
            this.ui.p2Name.textContent = aiNames[this.aiLevel] || '🤖 AI Sentinel';
            this.ui.p2Avatar.textContent = '🤖';
        } else {
            this.ui.p2Name.textContent = '👤 Người Chơi 2 (Player 2)';
            this.ui.p2Avatar.textContent = '👤';
        }

        this.isPlaying = true;
        this.updateHUD();

        this.ui.setupView.classList.add('hidden');
        this.ui.resultView.classList.add('hidden');
        this.ui.arenaView.classList.remove('hidden');

        this.nextQuestion();
    }

    updateHUD() {
        // Player 1 HUD
        this.ui.p1HpBar.style.width = `${Math.max(0, this.p1.hp)}%`;
        this.ui.p1HpText.textContent = `${Math.max(0, this.p1.hp)} / 100 HP`;
        if (this.p1.streak >= 2) {
            this.ui.p1StreakBadge.classList.remove('hidden');
            this.ui.p1StreakBadge.textContent = `🔥 x${this.p1.streak} OVERCLOCK`;
        } else {
            this.ui.p1StreakBadge.classList.add('hidden');
        }

        // Player 2 HUD
        this.ui.p2HpBar.style.width = `${Math.max(0, this.p2.hp)}%`;
        this.ui.p2HpText.textContent = `${Math.max(0, this.p2.hp)} / 100 HP`;
        if (this.p2.streak >= 2) {
            this.ui.p2StreakBadge.classList.remove('hidden');
            this.ui.p2StreakBadge.textContent = `🔥 x${this.p2.streak} OVERCLOCK`;
        } else {
            this.ui.p2StreakBadge.classList.add('hidden');
        }
    }

    nextQuestion() {
        if (!this.isPlaying) return;

        // Check if either player is dead
        if (this.p1.hp <= 0 || this.p2.hp <= 0) {
            this.finishBattle();
            return;
        }

        clearTimeout(this.aiTimer);

        // Pick random question
        const q = this.questions[Math.floor(Math.random() * this.questions.length)];
        this.currentQ = q;

        this.ui.qTopic.textContent = `${q.chapter} • ${q.topic}`;
        this.ui.qText.innerHTML = q.question;

        // Render options for Player 1
        this.renderOptions(1, this.ui.p1Options);

        // Render options for Player 2
        this.renderOptions(2, this.ui.p2Options);

        // Schedule AI answer if PVE
        if (this.mode === 'pve') {
            this.scheduleAiAnswer();
        }
    }

    renderOptions(playerNum, container) {
        container.innerHTML = '';
        const q = this.currentQ;
        const isAi = (playerNum === 2 && this.mode === 'pve');

        q.options.forEach((optStr, idx) => {
            const letter = optStr.charAt(0);
            const btn = document.createElement('button');
            btn.className = `battle-opt-btn ${playerNum === 1 ? 'p1-btn' : 'p2-btn'}`;
            
            let hotkey = '';
            if (playerNum === 1) {
                hotkey = `<span class="opt-hotkey">[${idx + 1}]</span> `;
            } else if (!isAi) {
                const keys = ['7', '8', '9', '0'];
                hotkey = `<span class="opt-hotkey">[${keys[idx]}]</span> `;
            }

            btn.innerHTML = `${hotkey}<strong>${letter}.</strong> <span>${optStr.substring(3).trim()}</span>`;

            if (isAi) {
                btn.classList.add('opacity-70', 'cursor-not-allowed');
                btn.disabled = true;
            } else {
                btn.addEventListener('click', () => {
                    this.handlePlayerAnswer(playerNum, letter);
                });
            }

            container.appendChild(btn);
        });
    }

    scheduleAiAnswer() {
        clearTimeout(this.aiTimer);
        // Determine AI latency & accuracy based on difficulty
        let delayMs = 4500;
        let accuracy = 0.75;

        if (this.aiLevel === 'novice') {
            delayMs = 6000 + Math.random() * 3000;
            accuracy = 0.55;
        } else if (this.aiLevel === 'engineer') {
            delayMs = 3800 + Math.random() * 2000;
            accuracy = 0.82;
        } else if (this.aiLevel === 'master') {
            delayMs = 2200 + Math.random() * 1200;
            accuracy = 0.96;
        }

        this.aiTimer = setTimeout(() => {
            if (!this.isPlaying || !this.currentQ) return;
            if (Date.now() < this.p2.lockoutUntil) return;

            const isCorrect = Math.random() < accuracy;
            let chosenLetter = this.currentQ.correctAnswers[0];
            if (!isCorrect) {
                // Pick a wrong letter
                const wrongLetters = this.currentQ.options
                    .map(o => o.charAt(0))
                    .filter(l => !this.currentQ.correctAnswers.includes(l));
                chosenLetter = wrongLetters[Math.floor(Math.random() * wrongLetters.length)] || 'B';
            }

            this.handlePlayerAnswer(2, chosenLetter);
        }, delayMs);
    }

    handlePlayerAnswer(playerNum, letter) {
        if (!this.isPlaying || !this.currentQ) return;

        const actor = playerNum === 1 ? this.p1 : this.p2;
        const target = playerNum === 1 ? this.p2 : this.p1;
        const actorCard = playerNum === 1 ? this.ui.p1Card : this.ui.p2Card;
        const targetCard = playerNum === 1 ? this.ui.p2Card : this.ui.p1Card;
        const overlay = playerNum === 1 ? this.ui.p1LockoutOverlay : this.ui.p2LockoutOverlay;

        // Check lockout
        if (Date.now() < actor.lockoutUntil) {
            window.soundManager.playLockout();
            return;
        }

        actor.total++;
        const isCorrect = this.currentQ.correctAnswers.includes(letter);

        if (isCorrect) {
            actor.correct++;
            actor.streak++;

            // Calculate damage
            let dmg = 25;
            let isCrit = false;
            if (actor.streak >= 3) {
                dmg = 40; // Critical hit!
                isCrit = true;
                window.soundManager.playCrit();
            } else {
                window.soundManager.playAttack();
            }

            target.hp = Math.max(0, target.hp - dmg);
            actor.score += dmg * 10;

            // Attack Animation & Screen Shake
            this.triggerAttackEffect(playerNum, isCrit);
            targetCard.classList.add('shake-anim');
            setTimeout(() => targetCard.classList.remove('shake-anim'), 350);

            this.updateHUD();

            // Next question after short pulse
            setTimeout(() => {
                this.nextQuestion();
            }, 600);

        } else {
            // Wrong answer penalty: self damage + lockout
            actor.streak = 0;
            actor.hp = Math.max(0, actor.hp - 10);
            actor.lockoutUntil = Date.now() + 2000;
            window.soundManager.playLockout();

            actorCard.classList.add('shake-anim');
            setTimeout(() => actorCard.classList.remove('shake-anim'), 350);

            // Show lockout overlay for 2 seconds
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 2000);

            this.updateHUD();

            if (actor.hp <= 0) {
                this.finishBattle();
            }
        }
    }

    triggerAttackEffect(fromPlayer, isCrit) {
        // Visual flash beam across the center
        const beam = document.createElement('div');
        beam.className = `attack-beam ${fromPlayer === 1 ? 'beam-p1' : 'beam-p2'} ${isCrit ? 'crit' : ''}`;
        const arena = document.getElementById('battle-arena-inner');
        if (arena) {
            arena.appendChild(beam);
            setTimeout(() => beam.remove(), 400);
        }
    }

    finishBattle() {
        this.isPlaying = false;
        clearTimeout(this.aiTimer);

        const p1Won = this.p1.hp > 0 && this.p2.hp <= 0;
        const p2Won = this.p2.hp > 0 && this.p1.hp <= 0;

        if (p1Won) {
            window.soundManager.playFanfare();
            this.ui.resTitle.innerHTML = '🏆 NGƯỜI CHƠI 1 CHIẾN THẮNG!';
            this.ui.resTitle.className = 'text-3xl font-black text-cyan-400';
            this.ui.resSubtitle.textContent = 'Bạn đã làm tê liệt toàn bộ băng thông và máy chủ đối phương!';
        } else if (p2Won) {
            window.soundManager.playGameOver();
            const winnerName = this.mode === 'pve' ? 'AI SENTINEL ĐÃ HẠ GỤC BẠN!' : 'NGƯỜI CHƠI 2 CHIẾN THẮNG!';
            this.ui.resTitle.innerHTML = `💀 ${winnerName}`;
            this.ui.resTitle.className = 'text-3xl font-black text-rose-500';
            this.ui.resSubtitle.textContent = 'Hệ thống phòng thủ của bạn đã bị quá tải hoàn toàn!';
        } else {
            this.ui.resTitle.textContent = '🤝 HÒA NHAU!';
            this.ui.resSubtitle.textContent = 'Cả hai hệ thống đều cạn kiệt tài nguyên!';
        }

        // Render stats
        this.ui.resStatsP1.innerHTML = `
            <div class="text-xs text-slate-400">Player 1</div>
            <div class="font-bold text-cyan-400">Còn lại: ${this.p1.hp} HP</div>
            <div class="text-xs text-slate-300">Đúng: ${this.p1.correct}/${this.p1.total} câu</div>
            <div class="text-xs text-emerald-400">Điểm: ${this.p1.score}</div>
        `;

        this.ui.resStatsP2.innerHTML = `
            <div class="text-xs text-slate-400">${this.mode === 'pve' ? 'Cyber AI' : 'Player 2'}</div>
            <div class="font-bold text-rose-400">Còn lại: ${this.p2.hp} HP</div>
            <div class="text-xs text-slate-300">Đúng: ${this.p2.correct}/${this.p2.total} câu</div>
            <div class="text-xs text-emerald-400">Điểm: ${this.p2.score}</div>
        `;

        this.ui.arenaView.classList.add('hidden');
        this.ui.resultView.classList.remove('hidden');
    }

    showSetup() {
        this.isPlaying = false;
        clearTimeout(this.aiTimer);
        this.ui.arenaView.classList.add('hidden');
        this.ui.resultView.classList.add('hidden');
        this.ui.setupView.classList.remove('hidden');
    }
}

window.battleEngine = new BattleEngine();
