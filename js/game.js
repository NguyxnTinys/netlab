/**
 * Cyber Packet Runner: Obstacle Course Game with Network Quiz & Revival Protocol
 * Enhanced with Dynamic Level Selection, Multi-tier Difficulty, and Full-Width / Full-Screen Adaptive Canvas.
 */
class CyberRunnerGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');

        this.questions = [];
        this.state = 'idle'; // 'idle', 'running', 'paused', 'gateway', 'revival', 'gameover'
        this.isCustomFullscreen = false;

        // Difficulty Level Specifications
        this.levels = {
            level1: {
                id: 'level1',
                name: 'Tân Binh Cáp Đồng',
                shortName: 'Tân Binh',
                subtitle: '10BASE-T',
                icon: '🥉',
                badgeText: '🥉 Cấp 1: Tân Binh Cáp Đồng',
                badgeClass: 'badge-level-1',
                themeColor: '#10b981', // emerald
                floorNeon: '#059669',
                timeLimit: 25, // 25s countdown
                baseSpeed: 5.0,
                maxSpeed: 8.5,
                speedGrowth: 0.003,
                initialLives: 4,
                maxLives: 4,
                startShield: 1,
                minObstacleGap: 105,
                maxObstacleGap: 145,
                gatewayDistance: 140,
                multiplier: 1.0,
                targetLevel: 'Nhận biết',
                description: 'Tốc độ êm dịu, 25s trả lời câu hỏi, chướng ngại thưa. Phù hợp làm quen phản xạ và củng cố kiến thức nền tảng.'
            },
            level2: {
                id: 'level2',
                name: 'Kỹ Sư Cáp Quang',
                shortName: 'Kỹ Sư',
                subtitle: 'Gigabit Ethernet',
                icon: '🥈',
                badgeText: '🥈 Cấp 2: Kỹ Sư Cáp Quang',
                badgeClass: 'badge-level-2',
                themeColor: '#38bdf8', // cyan / sky
                floorNeon: '#0284c7',
                timeLimit: 18, // 18s countdown
                baseSpeed: 6.8,
                maxSpeed: 11.5,
                speedGrowth: 0.005,
                initialLives: 3,
                maxLives: 3,
                startShield: 1,
                minObstacleGap: 75,
                maxObstacleGap: 115,
                gatewayDistance: 180,
                multiplier: 1.5,
                targetLevel: 'Thông hiểu',
                description: 'Tốc độ tiêu chuẩn, 18s trả lời, chướng ngại vật xuất hiện đều đặn. Thử thách cơ chế hoạt động mạng.'
            },
            level3: {
                id: 'level3',
                name: 'Chuyên Gia Định Tuyến',
                shortName: 'Chuyên Gia',
                subtitle: '10G Backbone',
                icon: '🥇',
                badgeText: '🥇 Cấp 3: Chuyên Gia Định Tuyến',
                badgeClass: 'badge-level-3',
                themeColor: '#f59e0b', // amber
                floorNeon: '#d97706',
                timeLimit: 12, // 12s countdown
                baseSpeed: 8.5,
                maxSpeed: 14.0,
                speedGrowth: 0.007,
                initialLives: 3,
                maxLives: 3,
                startShield: 1,
                minObstacleGap: 55,
                maxObstacleGap: 88,
                gatewayDistance: 220,
                multiplier: 2.0,
                targetLevel: 'Vận dụng',
                description: 'Tốc độ cao, 12s phản xạ nhanh, rào chắn dày đặc, câu hỏi tính toán Subnet và giải thuật định tuyến phức tạp.'
            },
            level4: {
                id: 'level4',
                name: 'Siêu Thần Mạng (Cyber God)',
                shortName: 'Cyber God',
                subtitle: 'Quantum Overclock',
                icon: '⚡',
                badgeText: '⚡ Cấp 4: Siêu Thần Mạng',
                badgeClass: 'badge-level-4',
                themeColor: '#f43f5e', // rose / crimson
                floorNeon: '#e11d48',
                timeLimit: 8, // 8s countdown
                baseSpeed: 10.5,
                maxSpeed: 16.5,
                speedGrowth: 0.009,
                initialLives: 2,
                maxLives: 2,
                startShield: 0, // No starting shield
                minObstacleGap: 40,
                maxObstacleGap: 66,
                gatewayDistance: 260,
                multiplier: 3.0,
                targetLevel: 'Vận dụng cao',
                description: 'Tốc độ bàn thờ, chỉ 8s đếm ngược cực gắt, 2 Mạng & 0 Khiên. Đòi hỏi phản xạ đỉnh cao và kiến thức CCNA chuyên sâu!'
            }
        };

        this.selectedLevelKey = 'level2';
        this.currentLevelCfg = this.levels.level2;

        // Game parameters
        this.score = 0;
        this.distance = 0;
        this.lives = 3;
        this.maxLives = 3;
        this.revivalsCount = 0;
        this.shield = 1;
        this.speed = 6.8;
        this.baseSpeed = 6.8;
        this.maxSpeed = 11.5;

        // Player physics
        this.groundY = 0;
        this.player = {
            x: 80,
            y: 0,
            w: 36,
            h: 36,
            vy: 0,
            jumpStrength: -14.5,
            gravity: 0.74,
            isGrounded: false,
            jumpsLeft: 2, // Double jump
            invulnerableTimer: 0,
            trail: []
        };

        // World entities
        this.obstacles = [];
        this.collectibles = [];
        this.particles = [];
        this.gridOffset = 0;
        this.nextObstacleDist = 80;
        this.nextGatewayDist = 180;

        // Quiz tracking in game
        this.activeGatewayQuestion = null;
        this.activeRevivalQuestion = null;
        this.gameQuizHistory = [];

        this.initDOM();
        this.resize();
        this.bindEvents();
        this.updateLevelUI();
    }

    initDOM() {
        this.ui = {
            container: document.getElementById('game-container'),
            scoreVal: document.getElementById('game-score-val'),
            distVal: document.getElementById('game-dist-val'),
            livesContainer: document.getElementById('game-lives-container'),
            shieldBadge: document.getElementById('game-shield-badge'),
            levelBadge: document.getElementById('game-level-badge'),

            // Action buttons in top bar
            fsBtn: document.getElementById('game-fullscreen-btn'),
            fsIcon: document.getElementById('game-fs-icon'),
            fsText: document.getElementById('game-fs-text'),
            pauseBtn: document.getElementById('game-pause-btn'),
            pauseIcon: document.getElementById('game-pause-icon'),
            pauseText: document.getElementById('game-pause-text'),
            changeLevelBtn: document.getElementById('game-change-level-btn'),

            // Fullscreen floating HUD
            fsHud: document.getElementById('game-fs-hud'),
            fsLevelBadge: document.getElementById('fs-level-badge'),
            fsScoreVal: document.getElementById('fs-score-val'),
            fsLivesContainer: document.getElementById('fs-lives-container'),
            fsExitBtn: document.getElementById('fs-exit-btn'),

            // Start & Level overlay
            startOverlay: document.getElementById('game-start-overlay'),
            startBtn: document.getElementById('game-start-btn'),
            levelCards: document.querySelectorAll('.level-card'),

            // Pause Modal
            pauseModal: document.getElementById('game-pause-modal'),
            pauseScoreVal: document.getElementById('pause-score-val'),
            pauseDistVal: document.getElementById('pause-dist-val'),
            pauseResumeBtn: document.getElementById('pause-resume-btn'),
            pauseChangeLevelBtn: document.getElementById('pause-change-level-btn'),
            pauseRestartBtn: document.getElementById('pause-restart-btn'),

            // Gateway modal
            gatewayModal: document.getElementById('game-gateway-modal'),
            gatewayTimerBadge: document.getElementById('gateway-timer-badge'),
            gatewayTimerText: document.getElementById('gateway-timer-text'),
            gatewayTimerBar: document.getElementById('gateway-timer-bar'),
            gatewayMultiHint: document.getElementById('gateway-multi-hint'),
            gatewayQTopic: document.getElementById('gateway-q-topic'),
            gatewayQText: document.getElementById('gateway-q-text'),
            gatewayOptions: document.getElementById('gateway-options'),
            gatewayFeedback: document.getElementById('gateway-feedback'),

            // Revival modal
            revivalModal: document.getElementById('game-revival-modal'),
            revivalTimerBadge: document.getElementById('revival-timer-badge'),
            revivalTimerText: document.getElementById('revival-timer-text'),
            revivalTimerBar: document.getElementById('revival-timer-bar'),
            revivalMultiHint: document.getElementById('revival-multi-hint'),
            revivalQText: document.getElementById('revival-q-text'),
            revivalOptions: document.getElementById('revival-options'),
            revivalStatus: document.getElementById('revival-status'),

            // Game over modal
            gameOverModal: document.getElementById('game-over-modal'),
            goScore: document.getElementById('go-final-score'),
            goDist: document.getElementById('go-final-dist'),
            goLevelBadge: document.getElementById('go-level-badge'),
            goScoreMultiplier: document.getElementById('go-score-multiplier'),
            goQuestionsCount: document.getElementById('go-questions-count'),
            goRankBadge: document.getElementById('go-rank-badge'),
            goRestartBtn: document.getElementById('go-restart-btn'),
            goChangeLevelBtn: document.getElementById('go-change-level-btn')
        };
    }

    resize() {
        if (!this.canvas || !this.ui.container) return;

        const isFs = document.fullscreenElement === this.ui.container || 
                     document.webkitFullscreenElement === this.ui.container || 
                     this.isCustomFullscreen;

        const container = this.ui.container;
        const rect = container.getBoundingClientRect();

        // Canvas width is full width of parent container (responsive edge-to-edge)
        this.width = this.canvas.width = rect.width || window.innerWidth;

        if (isFs) {
            this.height = this.canvas.height = window.innerHeight;
            container.style.height = `${window.innerHeight}px`;
        } else {
            // Full height: stretch all the way down to the bottom of the viewport
            const topOffset = rect.top > 0 ? rect.top : 135;
            // Reserve space for controls guide footer (~50px) + page footer (~45px) + paddings (~15px) = ~110px
            const calculatedH = Math.max(560, Math.floor(window.innerHeight - topOffset - 110));
            this.height = this.canvas.height = calculatedH;
            container.style.height = `${calculatedH}px`;
        }

        // Calibrated ground level & jump physics
        this.groundY = this.height - 75;
        this.player.jumpStrength = -14.2;
        this.player.gravity = 0.72;

        if (this.state !== 'running' || this.player.isGrounded) {
            this.player.y = this.groundY - this.player.h;
        }
    }

    setQuestions(data) {
        // Filter out fill questions for runner mode for fast real-time gameplay
        this.questions = data.filter(q => q.type !== 'fill');
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());

        // Fullscreen Change Listeners (native & webkit)
        const onFsChange = () => {
            this.handleFullscreenStateChange();
        };
        document.addEventListener('fullscreenchange', onFsChange);
        document.addEventListener('webkitfullscreenchange', onFsChange);

        // Jump triggers
        const handleJump = (e) => {
            if (this.state === 'running') {
                e.preventDefault();
                this.jump();
            }
        };

        window.addEventListener('keydown', (e) => {
            // Space to jump or start game if on start overlay
            if (e.code === 'Space') {
                if (this.state === 'running') {
                    e.preventDefault();
                    this.jump();
                } else if (this.state === 'idle' && !this.ui.startOverlay.classList.contains('hidden')) {
                    e.preventDefault();
                    this.startGame();
                }
            } else if (['ArrowUp', 'KeyW'].includes(e.code)) {
                if (this.state === 'running') {
                    e.preventDefault();
                    this.jump();
                }
            } else if (e.code === 'KeyP') {
                if (this.state === 'running' || this.state === 'paused') {
                    e.preventDefault();
                    this.togglePause();
                }
            } else if (e.code === 'Escape') {
                if (this.isCustomFullscreen || document.fullscreenElement) {
                    this.exitFullscreen();
                } else if (this.state === 'running') {
                    this.pauseGame();
                }
            }
        });

        this.canvas.addEventListener('touchstart', (e) => {
            handleJump(e);
        }, { passive: false });

        this.canvas.addEventListener('mousedown', (e) => {
            handleJump(e);
        });

        // Level Cards Click
        if (this.ui.levelCards) {
            this.ui.levelCards.forEach(card => {
                card.addEventListener('click', () => {
                    const levelKey = card.dataset.level;
                    if (levelKey && this.levels[levelKey]) {
                        window.soundManager.playClick();
                        this.selectLevel(levelKey);
                    }
                });
            });
        }

        // Start Button
        if (this.ui.startBtn) {
            this.ui.startBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.startGame();
            });
        }

        // Fullscreen Button
        if (this.ui.fsBtn) {
            this.ui.fsBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.toggleFullscreen();
            });
        }

        // Exit Fullscreen Button in HUD
        if (this.ui.fsExitBtn) {
            this.ui.fsExitBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.exitFullscreen();
            });
        }

        // Change Level Button (Top Bar)
        if (this.ui.changeLevelBtn) {
            this.ui.changeLevelBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.openLevelSelect();
            });
        }

        // Pause Button (Top Bar)
        if (this.ui.pauseBtn) {
            this.ui.pauseBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.togglePause();
            });
        }

        // Pause Modal buttons
        if (this.ui.pauseResumeBtn) {
            this.ui.pauseResumeBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.resumeGame();
            });
        }
        if (this.ui.pauseChangeLevelBtn) {
            this.ui.pauseChangeLevelBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.ui.pauseModal.classList.add('hidden');
                this.openLevelSelect();
            });
        }
        if (this.ui.pauseRestartBtn) {
            this.ui.pauseRestartBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.ui.pauseModal.classList.add('hidden');
                this.startGame();
            });
        }

        // Game Over Modal buttons
        if (this.ui.goRestartBtn) {
            this.ui.goRestartBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.ui.gameOverModal.classList.add('hidden');
                this.startGame();
            });
        }
        if (this.ui.goChangeLevelBtn) {
            this.ui.goChangeLevelBtn.addEventListener('click', () => {
                window.soundManager.playClick();
                this.ui.gameOverModal.classList.add('hidden');
                this.openLevelSelect();
            });
        }
    }

    selectLevel(levelKey) {
        if (!this.levels[levelKey]) return;
        this.selectedLevelKey = levelKey;
        this.currentLevelCfg = this.levels[levelKey];
        this.updateLevelUI();
    }

    updateLevelUI() {
        const cfg = this.currentLevelCfg;

        // Update cards in Start Overlay
        if (this.ui.levelCards) {
            this.ui.levelCards.forEach(card => {
                const isSelected = card.dataset.level === this.selectedLevelKey;
                card.classList.toggle('active', isSelected);
                const indicator = card.querySelector('.level-indicator');
                if (indicator) {
                    indicator.textContent = isSelected ? '✓ Đang Chọn' : `Chọn ${this.levels[card.dataset.level]?.name || ''}`;
                }
            });
        }

        // Update HUD Badge in top bar
        if (this.ui.levelBadge) {
            this.ui.levelBadge.textContent = cfg.badgeText;
            this.ui.levelBadge.className = `px-2.5 py-0.5 rounded-full text-xs font-bold border ${cfg.badgeClass}`;
        }

        // Update Fullscreen HUD Badge
        if (this.ui.fsLevelBadge) {
            this.ui.fsLevelBadge.textContent = `${cfg.icon} ${cfg.name}`;
            this.ui.fsLevelBadge.style.color = cfg.themeColor;
        }

        // Update preview lives if idle
        if (this.state === 'idle') {
            this.lives = cfg.initialLives;
            this.maxLives = cfg.maxLives;
            this.shield = cfg.startShield;
            this.updateHUD();
        }
    }

    openLevelSelect() {
        this.stopQuestionTimer();
        if (this.state === 'running') {
            this.state = 'paused';
        }
        this.ui.pauseModal.classList.add('hidden');
        this.ui.gameOverModal.classList.add('hidden');
        this.ui.gatewayModal.classList.add('hidden');
        this.ui.revivalModal.classList.add('hidden');
        this.ui.startOverlay.classList.remove('hidden');
        this.updateLevelUI();
    }

    togglePause() {
        if (this.state === 'running' || this.state === 'gateway' || this.state === 'revival') {
            this.pauseGame();
        } else if (this.state === 'paused') {
            this.resumeGame();
        }
    }

    pauseGame() {
        if (this.state === 'paused') return;
        this.pausedPreviousState = this.state;
        this.state = 'paused';

        // Pause question timer if active
        if (this.qTimerInterval) {
            clearInterval(this.qTimerInterval);
            this.qTimerInterval = null;
            this.qTimerIsPaused = true;
            this.qTimerRemainingMs = Math.max(0, this.qTimerTotalMs - (Date.now() - this.qTimerStart));
        }

        if (this.ui.pauseScoreVal) this.ui.pauseScoreVal.textContent = Math.floor(this.score);
        if (this.ui.pauseDistVal) this.ui.pauseDistVal.textContent = `${Math.floor(this.distance)}m`;
        if (this.ui.pauseModal) this.ui.pauseModal.classList.remove('hidden');

        if (this.ui.pauseIcon) this.ui.pauseIcon.textContent = '▶';
        if (this.ui.pauseText) this.ui.pauseText.textContent = 'Tiếp tục';
    }

    resumeGame() {
        if (this.state !== 'paused') return;
        this.state = this.pausedPreviousState || 'running';

        if (this.ui.pauseModal) this.ui.pauseModal.classList.add('hidden');

        if (this.ui.pauseIcon) this.ui.pauseIcon.textContent = '⏸️';
        if (this.ui.pauseText) this.ui.pauseText.textContent = 'Tạm dừng';

        // Resume question timer if was active
        if (this.qTimerIsPaused && (this.state === 'gateway' || this.state === 'revival')) {
            this.qTimerIsPaused = false;
            const remainingSec = Math.max(1, Math.ceil(this.qTimerRemainingMs / 1000));
            this.startQuestionTimer(this.qTimerType, remainingSec, this.qTimerOnTimeout);
        }

        if (this.state === 'running') {
            this.lastTime = performance.now();
            requestAnimationFrame((t) => this.gameLoop(t));
        }
    }

    toggleFullscreen() {
        const isFs = document.fullscreenElement === this.ui.container || 
                     document.webkitFullscreenElement === this.ui.container || 
                     this.isCustomFullscreen;

        if (!isFs) {
            this.enterFullscreen();
        } else {
            this.exitFullscreen();
        }
    }

    enterFullscreen() {
        const container = this.ui.container;
        if (!container) return;

        if (container.requestFullscreen) {
            container.requestFullscreen().catch(() => {
                this.enableCustomFullscreen();
            });
        } else if (container.webkitRequestFullscreen) {
            container.webkitRequestFullscreen();
        } else {
            this.enableCustomFullscreen();
        }
    }

    exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        }
        this.disableCustomFullscreen();
    }

    enableCustomFullscreen() {
        this.isCustomFullscreen = true;
        this.ui.container.classList.add('game-fullscreen-fallback');
        this.handleFullscreenStateChange();
    }

    disableCustomFullscreen() {
        this.isCustomFullscreen = false;
        this.ui.container.classList.remove('game-fullscreen-fallback');
        this.handleFullscreenStateChange();
    }

    handleFullscreenStateChange() {
        const isFs = document.fullscreenElement === this.ui.container || 
                     document.webkitFullscreenElement === this.ui.container || 
                     this.isCustomFullscreen;

        if (isFs) {
            if (this.ui.fsIcon) this.ui.fsIcon.textContent = '🗗';
            if (this.ui.fsText) this.ui.fsText.textContent = 'Thu nhỏ';
            if (this.ui.fsHud) this.ui.fsHud.classList.remove('hidden');
        } else {
            if (this.ui.fsIcon) this.ui.fsIcon.textContent = '⛶';
            if (this.ui.fsText) this.ui.fsText.textContent = 'Toàn màn hình';
            if (this.ui.fsHud) this.ui.fsHud.classList.add('hidden');
        }

        setTimeout(() => this.resize(), 50);
    }

    jump() {
        if (this.player.jumpsLeft > 0) {
            this.player.vy = this.player.jumpStrength;
            this.player.isGrounded = false;
            this.player.jumpsLeft--;
            window.soundManager.playJump();

            // Jump burst particles colored according to level theme
            const burstColor = this.currentLevelCfg.themeColor || '#38bdf8';
            for (let i = 0; i < 9; i++) {
                this.particles.push({
                    x: this.player.x + this.player.w / 2,
                    y: this.player.y + this.player.h,
                    vx: (Math.random() - 0.5) * 4.5,
                    vy: Math.random() * 2.5 + 1,
                    radius: Math.random() * 3.5 + 1.5,
                    color: burstColor,
                    alpha: 1,
                    decay: 0.04
                });
            }
        }
    }

    startGame() {
        this.stopQuestionTimer();
        const cfg = this.currentLevelCfg;

        this.score = 0;
        this.distance = 0;
        this.lives = cfg.initialLives;
        this.maxLives = cfg.maxLives;
        this.shield = cfg.startShield;
        this.revivalsCount = 0;
        this.speed = cfg.baseSpeed;
        this.baseSpeed = cfg.baseSpeed;
        this.maxSpeed = cfg.maxSpeed;

        this.obstacles = [];
        this.collectibles = [];
        this.particles = [];
        this.gameQuizHistory = [];
        this.nextObstacleDist = 55;
        this.nextGatewayDist = cfg.gatewayDistance;

        this.player.y = this.groundY - this.player.h;
        this.player.vy = 0;
        this.player.jumpsLeft = 2;
        this.player.invulnerableTimer = 0;
        this.player.trail = [];

        this.updateHUD();
        this.ui.startOverlay.classList.add('hidden');
        this.ui.gameOverModal.classList.add('hidden');
        this.ui.gatewayModal.classList.add('hidden');
        this.ui.revivalModal.classList.add('hidden');
        this.ui.pauseModal.classList.add('hidden');

        if (this.ui.pauseIcon) this.ui.pauseIcon.textContent = '⏸️';
        if (this.ui.pauseText) this.ui.pauseText.textContent = 'Tạm dừng';

        this.state = 'running';
        this.lastTime = performance.now();
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    updateHUD() {
        const formattedScore = Math.floor(this.score);
        const formattedDist = `${Math.floor(this.distance)}m`;

        if (this.ui.scoreVal) this.ui.scoreVal.textContent = formattedScore;
        if (this.ui.distVal) this.ui.distVal.textContent = formattedDist;
        if (this.ui.fsScoreVal) this.ui.fsScoreVal.textContent = formattedScore;

        // Render hearts
        let hearts = '';
        for (let i = 0; i < this.maxLives; i++) {
            hearts += i < this.lives ? '❤️ ' : '🖤 ';
        }
        hearts = hearts.trim();

        if (this.ui.livesContainer) this.ui.livesContainer.innerHTML = hearts;
        if (this.ui.fsLivesContainer) this.ui.fsLivesContainer.innerHTML = hearts;

        if (this.ui.shieldBadge) {
            if (this.shield > 0) {
                this.ui.shieldBadge.classList.remove('hidden');
                this.ui.shieldBadge.textContent = `🛡️ Khiên x${this.shield}`;
            } else {
                this.ui.shieldBadge.classList.add('hidden');
            }
        }
    }

    gameLoop(now) {
        if (this.state !== 'running') return;

        const dt = Math.min(32, now - (this.lastTime || now)) / 16.66;
        this.lastTime = now;

        this.update(dt);
        this.render();

        requestAnimationFrame((t) => this.gameLoop(t));
    }

    update(dt) {
        const cfg = this.currentLevelCfg;

        // Increment distance & score with level multiplier
        this.distance += (this.speed * 0.1) * dt;
        this.score += (this.speed * 0.15 * cfg.multiplier) * dt;

        // Progressive speed increase based on level tuning
        this.speed = Math.min(cfg.maxSpeed, cfg.baseSpeed + this.distance * cfg.speedGrowth);

        // Player physics
        this.player.vy += this.player.gravity * dt;
        this.player.y += this.player.vy * dt;

        if (this.player.y >= this.groundY - this.player.h) {
            this.player.y = this.groundY - this.player.h;
            this.player.vy = 0;
            this.player.isGrounded = true;
            this.player.jumpsLeft = 2;
        }

        if (this.player.invulnerableTimer > 0) {
            this.player.invulnerableTimer -= dt * 16.66;
        }

        // Add player trail
        this.player.trail.unshift({
            x: this.player.x,
            y: this.player.y,
            alpha: 0.6
        });
        if (this.player.trail.length > 8) this.player.trail.pop();
        this.player.trail.forEach(t => t.alpha -= 0.07);

        // Grid road movement
        this.gridOffset = (this.gridOffset + this.speed * dt) % 40;

        // Spawn obstacles based on level gap specifications
        if (this.distance >= this.nextObstacleDist) {
            this.spawnObstacle();
            const gapRange = cfg.maxObstacleGap - cfg.minObstacleGap;
            this.nextObstacleDist = this.distance + Math.random() * gapRange + cfg.minObstacleGap;
        }

        // Spawn collectibles
        if (Math.random() < 0.032 * dt) {
            this.spawnCollectible();
        }

        // Check Gateway checkpoint trigger
        if (this.distance >= this.nextGatewayDist) {
            this.triggerGateway();
            this.nextGatewayDist = this.distance + cfg.gatewayDistance + Math.random() * 45;
            return;
        }

        // Update obstacles
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            obs.x -= this.speed * dt;

            // Collision check
            if (this.checkCollision(this.player, obs) && this.player.invulnerableTimer <= 0) {
                this.handlePlayerHit(obs);
                this.obstacles.splice(i, 1);
                continue;
            }

            if (obs.x + obs.w < 0) {
                this.obstacles.splice(i, 1);
            }
        }

        // Update collectibles
        for (let i = this.collectibles.length - 1; i >= 0; i--) {
            const col = this.collectibles[i];
            col.x -= this.speed * dt;

            // Pickup check
            if (this.checkCollision(this.player, col)) {
                this.handlePickup(col);
                this.collectibles.splice(i, 1);
                continue;
            }

            if (col.x + col.w < 0) {
                this.collectibles.splice(i, 1);
            }
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.alpha -= p.decay * dt;
            if (p.alpha <= 0) this.particles.splice(i, 1);
        }

        this.updateHUD();
    }

    spawnObstacle() {
        const types = [
            { type: 'firewall', w: 24, h: 48, color: '#f43f5e', name: 'Tường lửa Firewall' },
            { type: 'collision', w: 32, h: 32, color: '#f59e0b', name: 'Xung đột tín hiệu Collision' },
            { type: 'loop', w: 26, h: 56, color: '#a855f7', name: 'Vòng lặp mạng Loop' }
        ];

        // In level 3 and 4, chance of double obstacle or tall firewall
        if (['level3', 'level4'].includes(this.selectedLevelKey) && Math.random() < 0.35) {
            types.push({ type: 'firewall_high', w: 28, h: 62, color: '#e11d48', name: 'Tường Lửa Cao Cấp' });
        }

        const chosen = types[Math.floor(Math.random() * types.length)];
        this.obstacles.push({
            x: this.width + 20,
            y: this.groundY - chosen.h,
            w: chosen.w,
            h: chosen.h,
            color: chosen.color,
            type: chosen.type,
            name: chosen.name
        });
    }

    spawnCollectible() {
        const isShield = Math.random() < 0.18 && this.shield === 0;
        this.collectibles.push({
            x: this.width + 20,
            y: this.groundY - 45 - Math.random() * 65,
            w: 20,
            h: 20,
            type: isShield ? 'shield' : 'data',
            color: isShield ? '#3b82f6' : (this.currentLevelCfg.themeColor || '#06b6d4'),
            pulse: 0
        });
    }

    checkCollision(a, b) {
        return (
            a.x < b.x + b.w &&
            a.x + a.w > b.x &&
            a.y < b.y + b.h &&
            a.y + a.h > b.y
        );
    }

    handlePlayerHit(obs) {
        if (this.shield > 0) {
            this.shield--;
            this.player.invulnerableTimer = 1000;
            window.soundManager.playHit();
            this.screenShake();
            this.createExplosion(this.player.x, this.player.y, '#38bdf8', 16);
            return;
        }

        // Take damage
        this.lives--;
        window.soundManager.playHit();
        this.player.invulnerableTimer = 1800;
        this.screenShake();
        this.createExplosion(this.player.x, this.player.y, '#f43f5e', 22);

        if (this.lives <= 0) {
            this.triggerRevival();
        }
    }

    handlePickup(col) {
        const mult = this.currentLevelCfg.multiplier || 1.0;
        window.soundManager.playCollect();
        if (col.type === 'shield') {
            this.shield = 1;
            this.score += 75 * mult;
            this.createExplosion(col.x, col.y, '#3b82f6', 12);
        } else {
            this.score += 35 * mult;
            this.createExplosion(col.x, col.y, this.currentLevelCfg.themeColor || '#06b6d4', 10);
        }
    }

    screenShake() {
        if (this.ui.container) {
            this.ui.container.classList.add('shake-anim');
            setTimeout(() => this.ui.container.classList.remove('shake-anim'), 400);
        }
    }

    createExplosion(x, y, color, count = 12) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 4.5 + 1.5;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                radius: Math.random() * 3 + 1,
                color,
                alpha: 1,
                decay: 0.032
            });
        }
    }

    getQuestionForCurrentLevel() {
        const cfg = this.currentLevelCfg;
        let pool = [];

        if (cfg.id === 'level1') {
            pool = this.questions.filter(q => q.level === 'Nhận biết');
        } else if (cfg.id === 'level2') {
            pool = this.questions.filter(q => q.level === 'Thông hiểu');
        } else if (cfg.id === 'level3') {
            pool = this.questions.filter(q => q.level === 'Vận dụng');
        } else if (cfg.id === 'level4') {
            pool = this.questions.filter(q => q.level === 'Vận dụng cao' || q.chapter === 'CCNA' || (q.topic && q.topic.includes('CCNA')));
        }

        // Fallback to all questions if pool is empty or small
        if (!pool || pool.length === 0) {
            pool = this.questions;
        }

        return pool[Math.floor(Math.random() * pool.length)];
    }

    startQuestionTimer(type, seconds, onTimeout) {
        this.stopQuestionTimer();

        this.qTimerType = type; // 'gateway' or 'revival'
        this.qTimerTotalMs = seconds * 1000;
        this.qTimerRemainingMs = this.qTimerTotalMs;
        this.qTimerStart = Date.now();
        this.qTimerOnTimeout = onTimeout;

        const badge = type === 'gateway' ? this.ui.gatewayTimerBadge : this.ui.revivalTimerBadge;
        const text = type === 'gateway' ? this.ui.gatewayTimerText : this.ui.revivalTimerText;
        const bar = type === 'gateway' ? this.ui.gatewayTimerBar : this.ui.revivalTimerBar;

        if (bar) {
            bar.style.width = '100%';
            bar.className = type === 'gateway' 
                ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-100 ease-linear'
                : 'bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full transition-all duration-100 ease-linear';
        }
        if (text) text.textContent = `${seconds}s`;
        if (badge) {
            badge.classList.remove('border-rose-500', 'bg-rose-950/90', 'text-rose-300', 'animate-pulse');
        }

        this.qTimerInterval = setInterval(() => {
            const elapsed = Date.now() - this.qTimerStart;
            this.qTimerRemainingMs = Math.max(0, this.qTimerTotalMs - elapsed);
            const remainingSec = Math.ceil(this.qTimerRemainingMs / 1000);
            const pct = Math.max(0, (this.qTimerRemainingMs / this.qTimerTotalMs) * 100);

            if (bar) bar.style.width = `${pct}%`;
            if (text) text.textContent = `${remainingSec}s`;

            // Visual urgency when time <= 30% or <= 4 seconds
            if (pct <= 30 || remainingSec <= 4) {
                if (bar) {
                    bar.className = 'bg-gradient-to-r from-rose-500 to-red-600 h-full rounded-full transition-all duration-100 ease-linear animate-pulse';
                }
                if (badge) {
                    badge.classList.add('border-rose-500', 'bg-rose-950/90', 'text-rose-300', 'animate-pulse');
                }
            }

            if (this.qTimerRemainingMs <= 0) {
                this.stopQuestionTimer();
                if (onTimeout) onTimeout();
            }
        }, 100);
    }

    stopQuestionTimer() {
        if (this.qTimerInterval) {
            clearInterval(this.qTimerInterval);
            this.qTimerInterval = null;
        }
    }

    triggerGateway() {
        this.state = 'gateway';
        window.soundManager.playAlarm();

        const q = this.getQuestionForCurrentLevel();
        this.activeGatewayQuestion = q;
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;
        this.activeGatewaySelected = [];

        this.ui.gatewayQTopic.textContent = `${q.chapter} • ${q.topic} [Cấp: ${q.level || 'Tổng hợp'}]`;
        this.ui.gatewayQText.textContent = q.question;
        this.ui.gatewayFeedback.classList.add('hidden');
        this.ui.gatewayOptions.innerHTML = '';

        const timeLimit = this.currentLevelCfg.timeLimit || 18;

        if (this.ui.gatewayMultiHint) {
            if (isMultiple) {
                this.ui.gatewayMultiHint.classList.remove('hidden');
                const textEl = document.getElementById('gateway-multi-text');
                const countEl = document.getElementById('gateway-selected-count');
                if (textEl) textEl.innerHTML = `🧩 <strong>Câu hỏi chọn nhiều đáp án:</strong> Hãy chọn đủ <strong>${requiredCount} đáp án đúng</strong>`;
                if (countEl) {
                    countEl.textContent = `Đã chọn: 0/${requiredCount}`;
                    countEl.className = 'font-mono font-bold text-amber-400';
                }
            } else {
                this.ui.gatewayMultiHint.classList.add('hidden');
            }
        }

        q.options.forEach(optStr => {
            const letter = optStr.charAt(0);
            const btn = document.createElement('button');
            btn.className = 'gateway-opt-btn';
            btn.dataset.letter = letter;
            btn.innerHTML = `<strong>${letter}</strong> <span>${optStr.substring(3).trim()}</span>`;
            
            btn.addEventListener('click', () => {
                if (this.state !== 'gateway') return;

                if (!isMultiple) {
                    this.handleGatewayAnswer([letter]);
                } else {
                    const idx = this.activeGatewaySelected.indexOf(letter);
                    if (idx > -1) {
                        this.activeGatewaySelected.splice(idx, 1);
                        btn.classList.remove('selected');
                        window.soundManager.playClick();
                    } else {
                        if (this.activeGatewaySelected.length < requiredCount) {
                            this.activeGatewaySelected.push(letter);
                            btn.classList.add('selected');
                            window.soundManager.playClick();
                        }
                    }

                    const counterEl = document.getElementById('gateway-selected-count');
                    if (counterEl) {
                        counterEl.textContent = `Đã chọn: ${this.activeGatewaySelected.length}/${requiredCount}`;
                        counterEl.className = this.activeGatewaySelected.length === requiredCount 
                            ? 'font-mono font-bold text-emerald-400' 
                            : 'font-mono font-bold text-amber-400';
                    }

                    // Auto validate when player has chosen exactly all required answers
                    if (this.activeGatewaySelected.length === requiredCount) {
                        this.handleGatewayAnswer(this.activeGatewaySelected);
                    }
                }
            });

            this.ui.gatewayOptions.appendChild(btn);
        });

        this.ui.gatewayModal.classList.remove('hidden');

        // Start countdown timer for current level
        this.startQuestionTimer('gateway', timeLimit, () => {
            this.handleGatewayTimeout();
        });
    }

    handleGatewayAnswer(selectedLetters) {
        this.stopQuestionTimer();

        const q = this.activeGatewayQuestion;
        const requiredCount = q.correctAnswers.length;
        
        // Must select ALL correct answers and ONLY correct answers
        const isCorrect = selectedLetters.length === requiredCount && 
                          q.correctAnswers.every(a => selectedLetters.includes(a)) && 
                          selectedLetters.every(a => q.correctAnswers.includes(a));

        this.gameQuizHistory.push({ question: q, correct: isCorrect, userAns: selectedLetters.join(', ') });

        const btns = this.ui.gatewayOptions.querySelectorAll('.gateway-opt-btn');
        btns.forEach(b => {
            b.disabled = true;
            const bLetter = b.dataset.letter;
            if (q.correctAnswers.includes(bLetter)) {
                b.classList.add('correct');
            } else if (selectedLetters.includes(bLetter)) {
                b.classList.add('incorrect');
            }
        });

        this.ui.gatewayFeedback.classList.remove('hidden');
        const mult = this.currentLevelCfg.multiplier || 1.0;

        if (isCorrect) {
            window.soundManager.playCorrect();
            const bonusScore = Math.floor(250 * mult);
            const remainingSec = Math.max(0, Math.floor(this.qTimerRemainingMs / 1000));
            const speedBonus = Math.floor(remainingSec * 15 * mult);
            this.score += bonusScore + speedBonus;
            if (this.lives < this.maxLives) this.lives++;
            this.shield = 1;

            const speedBonusText = speedBonus > 0 ? ` + ⚡ Thưởng tốc độ <strong>+${speedBonus}đ</strong> (${remainingSec}s còn lại)` : '';
            this.ui.gatewayFeedback.innerHTML = `
                <div class="text-emerald-400 font-bold text-lg mb-1">🎉 XÁC THỰC THÀNH CÔNG!</div>
                <div class="text-slate-300 text-sm">Đã chọn đủ và đúng tất cả ${requiredCount} đáp án: <strong>${q.correctAnswers.join(', ')}</strong>! Thưởng <strong>+${bonusScore} điểm</strong>${speedBonusText}, hồi 1 Mạng & Kích hoạt Khiên!</div>
            `;
        } else {
            window.soundManager.playWrong();
            this.lives--;
            this.ui.gatewayFeedback.innerHTML = `
                <div class="text-rose-400 font-bold text-lg mb-1">❌ GÓI TIN BỊ TỪ CHỐI!</div>
                <div class="text-slate-300 text-sm">Phải chọn đủ và đúng tất cả đáp án: <strong>${q.correctAnswers.join(', ')}</strong>. Bị trừ 1 Mạng!</div>
            `;
        }

        setTimeout(() => {
            this.ui.gatewayModal.classList.add('hidden');
            if (this.lives <= 0) {
                this.triggerRevival();
            } else {
                this.state = 'running';
                this.lastTime = performance.now();
                requestAnimationFrame((t) => this.gameLoop(t));
            }
        }, 1900);
    }

    handleGatewayTimeout() {
        this.stopQuestionTimer();
        const q = this.activeGatewayQuestion;
        this.gameQuizHistory.push({ question: q, correct: false, userAns: 'Hết giờ (Timeout)' });

        const btns = this.ui.gatewayOptions.querySelectorAll('.gateway-opt-btn');
        btns.forEach(b => {
            b.disabled = true;
            const bLetter = b.dataset.letter;
            if (q.correctAnswers.includes(bLetter)) {
                b.classList.add('correct');
            }
        });

        window.soundManager.playWrong();
        this.lives--;
        this.ui.gatewayFeedback.classList.remove('hidden');
        this.ui.gatewayFeedback.innerHTML = `
            <div class="text-rose-400 font-bold text-lg mb-1">⏰ HẾT THỜI GIAN (GATEWAY TIMEOUT)!</div>
            <div class="text-slate-300 text-sm">Gói tin bị quá hạn TTL (${this.currentLevelCfg.timeLimit}s)! Bị trừ 1 Mạng! Đáp án đúng: <strong>${q.correctAnswers.join(', ')}</strong></div>
        `;

        setTimeout(() => {
            this.ui.gatewayModal.classList.add('hidden');
            if (this.lives <= 0) {
                this.triggerRevival();
            } else {
                this.state = 'running';
                this.lastTime = performance.now();
                requestAnimationFrame((t) => this.gameLoop(t));
            }
        }, 1900);
    }

    triggerRevival() {
        this.state = 'revival';
        window.soundManager.playAlarm();

        const q = this.getQuestionForCurrentLevel();
        this.activeRevivalQuestion = q;
        const requiredCount = q.correctAnswers.length;
        const isMultiple = q.type === 'multiple' || requiredCount > 1;
        this.activeRevivalSelected = [];

        this.ui.revivalQText.textContent = q.question;
        this.ui.revivalStatus.innerHTML = `
            <div class="text-rose-400 font-bold animate-pulse text-sm sm:text-base">⚡ MẤT HẾT MẠNG! TRẢ LỜI ĐÚNG ĐỂ HỒI SINH!</div>
            <div class="text-slate-400 text-xs mt-1">Giao thức hồi sinh sẽ khôi phục 2 Mạng và Khiên bất tử để bạn tiếp tục đường chạy!</div>
        `;
        this.ui.revivalOptions.innerHTML = '';

        const timeLimit = this.currentLevelCfg.timeLimit || 18;

        if (this.ui.revivalMultiHint) {
            if (isMultiple) {
                this.ui.revivalMultiHint.classList.remove('hidden');
                const textEl = document.getElementById('revival-multi-text');
                const countEl = document.getElementById('revival-selected-count');
                if (textEl) textEl.innerHTML = `⚡ <strong>Câu hỏi chọn nhiều đáp án:</strong> Hãy chọn đủ <strong>${requiredCount} đáp án đúng</strong>`;
                if (countEl) {
                    countEl.textContent = `Đã chọn: 0/${requiredCount}`;
                    countEl.className = 'font-mono font-bold text-amber-400';
                }
            } else {
                this.ui.revivalMultiHint.classList.add('hidden');
            }
        }

        q.options.forEach(optStr => {
            const letter = optStr.charAt(0);
            const btn = document.createElement('button');
            btn.className = 'revival-opt-btn';
            btn.dataset.letter = letter;
            btn.innerHTML = `<strong>${letter}</strong> <span>${optStr.substring(3).trim()}</span>`;

            btn.addEventListener('click', () => {
                if (this.state !== 'revival') return;

                if (!isMultiple) {
                    this.handleRevivalAnswer([letter]);
                } else {
                    const idx = this.activeRevivalSelected.indexOf(letter);
                    if (idx > -1) {
                        this.activeRevivalSelected.splice(idx, 1);
                        btn.classList.remove('selected');
                        window.soundManager.playClick();
                    } else {
                        if (this.activeRevivalSelected.length < requiredCount) {
                            this.activeRevivalSelected.push(letter);
                            btn.classList.add('selected');
                            window.soundManager.playClick();
                        }
                    }

                    const counterEl = document.getElementById('revival-selected-count');
                    if (counterEl) {
                        counterEl.textContent = `Đã chọn: ${this.activeRevivalSelected.length}/${requiredCount}`;
                        counterEl.className = this.activeRevivalSelected.length === requiredCount 
                            ? 'font-mono font-bold text-emerald-400' 
                            : 'font-mono font-bold text-amber-400';
                    }

                    // Auto validate when player has chosen exactly all required answers
                    if (this.activeRevivalSelected.length === requiredCount) {
                        this.handleRevivalAnswer(this.activeRevivalSelected);
                    }
                }
            });

            this.ui.revivalOptions.appendChild(btn);
        });

        this.ui.revivalModal.classList.remove('hidden');

        // Start countdown timer for current level
        this.startQuestionTimer('revival', timeLimit, () => {
            this.handleRevivalTimeout();
        });
    }

    handleRevivalAnswer(selectedLetters) {
        this.stopQuestionTimer();

        const q = this.activeRevivalQuestion;
        const requiredCount = q.correctAnswers.length;

        // Must select ALL correct answers and ONLY correct answers
        const isCorrect = selectedLetters.length === requiredCount && 
                          q.correctAnswers.every(a => selectedLetters.includes(a)) && 
                          selectedLetters.every(a => q.correctAnswers.includes(a));

        this.gameQuizHistory.push({ question: q, correct: isCorrect, userAns: selectedLetters.join(', ') });

        const btns = this.ui.revivalOptions.querySelectorAll('.revival-opt-btn');
        btns.forEach(b => {
            b.disabled = true;
            const bLetter = b.dataset.letter;
            if (q.correctAnswers.includes(bLetter)) {
                b.classList.add('correct');
            } else if (selectedLetters.includes(bLetter)) {
                b.classList.add('incorrect');
            }
        });

        if (isCorrect) {
            window.soundManager.playRevive();
            this.revivalsCount++;
            this.lives = Math.min(2, this.maxLives);
            this.shield = 1;
            this.player.invulnerableTimer = 3000;

            this.ui.revivalStatus.innerHTML = `
                <div class="text-emerald-400 font-bold text-lg">✨ HỒI SINH THÀNH CÔNG! HỆ THỐNG ĐÃ KHỞI ĐỘNG LẠI!</div>
                <div class="text-slate-200 text-sm mt-1">Đã chọn đủ và đúng tất cả đáp án: <strong>${q.correctAnswers.join(', ')}</strong>. Phục hồi 2 Mạng + Khiên bảo vệ!</div>
            `;

            setTimeout(() => {
                this.ui.revivalModal.classList.add('hidden');
                // Clear immediate obstacles in front of player
                this.obstacles = this.obstacles.filter(o => o.x > this.player.x + 220);
                this.state = 'running';
                this.lastTime = performance.now();
                requestAnimationFrame((t) => this.gameLoop(t));
            }, 1900);
        } else {
            window.soundManager.playGameOver();
            this.ui.revivalStatus.innerHTML = `
                <div class="text-rose-500 font-bold text-lg">💀 KHỞI ĐỘNG THẤT BẠI! SẬP TOÀN BỘ HỆ THỐNG!</div>
                <div class="text-slate-300 text-sm mt-1">Chưa chọn đủ hoặc chọn sai! Đáp án đúng là: <strong>${q.correctAnswers.join(', ')}</strong></div>
            `;

            setTimeout(() => {
                this.ui.revivalModal.classList.add('hidden');
                this.triggerGameOver();
            }, 1900);
        }
    }

    handleRevivalTimeout() {
        this.stopQuestionTimer();
        const q = this.activeRevivalQuestion;
        this.gameQuizHistory.push({ question: q, correct: false, userAns: 'Hết giờ (Timeout)' });

        const btns = this.ui.revivalOptions.querySelectorAll('.revival-opt-btn');
        btns.forEach(b => {
            b.disabled = true;
            const bLetter = b.dataset.letter;
            if (q.correctAnswers.includes(bLetter)) {
                b.classList.add('correct');
            }
        });

        window.soundManager.playGameOver();
        this.ui.revivalStatus.innerHTML = `
            <div class="text-rose-500 font-bold text-lg">💀 HẾT THỜI GIAN HỒI SINH (${this.currentLevelCfg.timeLimit}s)!</div>
            <div class="text-slate-300 text-sm mt-1">Giao thức hồi sinh bị timeout! Đáp án đúng là: <strong>${q.correctAnswers.join(', ')}</strong></div>
        `;

        setTimeout(() => {
            this.ui.revivalModal.classList.add('hidden');
            this.triggerGameOver();
        }, 1900);
    }

    triggerGameOver() {
        this.state = 'gameover';
        const cfg = this.currentLevelCfg;
        const finalScore = Math.floor(this.score);
        const finalDist = Math.floor(this.distance);

        // Calculate Rank based on final score
        let rank = 'Học viên Mạng Sơ Cấp (Network Novice)';
        let rankColor = 'text-slate-300';
        if (finalScore >= 4500) {
            rank = '🏆 Kiến Trúc Sư Mạng Toàn Cầu (Global Network Architect)';
            rankColor = 'text-amber-400 font-bold';
        } else if (finalScore >= 2500) {
            rank = '⚡ Bậc Thầy Giao Vận & Bảo Mật (Transport Master)';
            rankColor = 'text-cyan-400 font-bold';
        } else if (finalScore >= 1200) {
            rank = '🛡️ Chuyên Viên Định Tuyến IP (Routing Specialist)';
            rankColor = 'text-emerald-400 font-semibold';
        } else if (finalScore >= 500) {
            rank = '🔌 Kỹ Thuật Viên Chuyển Mạch (Ethernet Tech)';
            rankColor = 'text-blue-400';
        }

        const totalQ = this.gameQuizHistory.length;
        const correctQ = this.gameQuizHistory.filter(h => h.correct).length;

        if (this.ui.goScore) this.ui.goScore.textContent = finalScore;
        if (this.ui.goDist) this.ui.goDist.textContent = `${finalDist}m`;
        if (this.ui.goLevelBadge) {
            this.ui.goLevelBadge.textContent = `${cfg.icon} ${cfg.name}`;
            this.ui.goLevelBadge.style.color = cfg.themeColor;
        }
        if (this.ui.goScoreMultiplier) {
            this.ui.goScoreMultiplier.textContent = `x${cfg.multiplier}`;
        }
        if (this.ui.goQuestionsCount) this.ui.goQuestionsCount.textContent = `${correctQ}/${totalQ}`;
        if (this.ui.goRankBadge) {
            this.ui.goRankBadge.className = `text-sm sm:text-base ${rankColor}`;
            this.ui.goRankBadge.textContent = rank;
        }

        this.ui.gameOverModal.classList.remove('hidden');
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // Cyber background grid
        this.renderBackground();

        // Render collectibles
        this.collectibles.forEach(col => {
            this.ctx.save();
            this.ctx.shadowBlur = 14;
            this.ctx.shadowColor = col.color;
            this.ctx.fillStyle = col.color;
            if (col.type === 'shield') {
                // Draw diamond shield
                this.ctx.beginPath();
                this.ctx.moveTo(col.x + col.w / 2, col.y);
                this.ctx.lineTo(col.x + col.w, col.y + col.h / 2);
                this.ctx.lineTo(col.x + col.w / 2, col.y + col.h);
                this.ctx.lineTo(col.x, col.y + col.h / 2);
                this.ctx.closePath();
                this.ctx.fill();
            } else {
                // Data bit cube
                this.ctx.fillRect(col.x, col.y, col.w, col.h);
            }
            this.ctx.restore();
        });

        // Render obstacles
        this.obstacles.forEach(obs => {
            this.ctx.save();
            this.ctx.shadowBlur = 16;
            this.ctx.shadowColor = obs.color;
            this.ctx.fillStyle = obs.color;

            if (obs.type === 'firewall' || obs.type === 'firewall_high') {
                // Vertical laser barrier
                this.ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.fillRect(obs.x + 8, obs.y, 4, obs.h);
            } else if (obs.type === 'collision') {
                // Spark triangle
                this.ctx.beginPath();
                this.ctx.moveTo(obs.x + obs.w / 2, obs.y);
                this.ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
                this.ctx.lineTo(obs.x, obs.y + obs.h);
                this.ctx.closePath();
                this.ctx.fill();
            } else {
                // Loop gate
                this.ctx.strokeStyle = obs.color;
                this.ctx.lineWidth = 4;
                this.ctx.strokeRect(obs.x, obs.y, obs.w, obs.h);
            }
            this.ctx.restore();
        });

        // Render player trail
        const playerThemeColor = this.currentLevelCfg.themeColor || '#38bdf8';
        this.player.trail.forEach(t => {
            if (t.alpha > 0) {
                this.ctx.save();
                this.ctx.globalAlpha = t.alpha * 0.45;
                this.ctx.fillStyle = playerThemeColor;
                this.ctx.fillRect(t.x, t.y, this.player.w, this.player.h);
                this.ctx.restore();
            }
        });

        // Render player (Glowing Data Packet)
        this.ctx.save();
        const isFlicker = this.player.invulnerableTimer > 0 && Math.floor(Date.now() / 80) % 2 === 0;
        if (!isFlicker) {
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = playerThemeColor;
            this.ctx.fillStyle = playerThemeColor;
            
            // Rounded cyber box
            this.roundRect(this.player.x, this.player.y, this.player.w, this.player.h, 6);
            this.ctx.fill();

            // Inner core
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(this.player.x + 10, this.player.y + 10, this.player.w - 20, this.player.h - 20);

            // Shield aura
            if (this.shield > 0) {
                this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.85)';
                this.ctx.lineWidth = 3;
                this.ctx.shadowColor = '#3b82f6';
                this.ctx.shadowBlur = 22;
                this.ctx.beginPath();
                this.ctx.arc(this.player.x + this.player.w / 2, this.player.y + this.player.h / 2, this.player.w * 0.85, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        }
        this.ctx.restore();

        // Render particles
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        });
    }

    renderBackground() {
        const h = this.height;
        const w = this.width;
        const gy = this.groundY;
        const cfg = this.currentLevelCfg;

        // Ground highway gradient
        const grad = this.ctx.createLinearGradient(0, gy, 0, h);
        grad.addColorStop(0, '#0f172a');
        grad.addColorStop(1, '#020617');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, gy, w, h - gy);

        // Cyber ground neon line matching level theme
        this.ctx.shadowBlur = 14;
        this.ctx.shadowColor = cfg.themeColor;
        this.ctx.strokeStyle = cfg.themeColor;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(0, gy);
        this.ctx.lineTo(w, gy);
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;

        // Moving vertical grid lines on ground
        this.ctx.strokeStyle = `${cfg.themeColor}33`; // 20% alpha
        this.ctx.lineWidth = 1;
        for (let x = -this.gridOffset; x < w; x += 42) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, gy);
            this.ctx.lineTo(x - 30, h);
            this.ctx.stroke();
        }
    }

    roundRect(x, y, w, h, r) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + r, y);
        this.ctx.lineTo(x + w - r, y);
        this.ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        this.ctx.lineTo(x + w, y + h - r);
        this.ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        this.ctx.lineTo(x + r, y + h);
        this.ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        this.ctx.lineTo(x, y + r);
        this.ctx.quadraticCurveTo(x, y, x + r, y);
        this.ctx.closePath();
    }
}

window.cyberRunnerGame = new CyberRunnerGame('game-canvas');
