/**
 * NetLab Authentication & Role-Based Access Control (RBAC) System
 * Roles:
 * - guest: Khách vãng lai (không đăng nhập)
 * - student: Học viên đã đăng nhập (toàn quyền làm bài, lưu lịch sử, thi đấu)
 * - admin: Quản trị viên (toàn quyền học viên + Quản trị CRUD dữ liệu ngân hàng & môn học)
 */

class AuthManager {
    constructor() {
        this.STORAGE_KEY_USERS = 'netlab_users_v2';
        this.STORAGE_KEY_CURRENT = 'netlab_current_user_v2';
        this.STORAGE_KEY_HISTORY = 'netlab_exam_history_v2';

        this.currentUser = null;
        this.users = [];
        this.authListeners = [];

        this.init();
    }

    init() {
        // 1. Initialize default users if not existing
        const savedUsers = localStorage.getItem(this.STORAGE_KEY_USERS);
        if (savedUsers) {
            try {
                this.users = JSON.parse(savedUsers);
            } catch (e) {
                this.initDefaultUsers();
            }
        } else {
            this.initDefaultUsers();
        }

        // 2. Check current active session
        const savedCurrent = localStorage.getItem(this.STORAGE_KEY_CURRENT);
        if (savedCurrent) {
            try {
                this.currentUser = JSON.parse(savedCurrent);
            } catch (e) {
                this.currentUser = null;
            }
        } else {
            this.currentUser = null;
        }

        // 3. Bind UI events for auth modals and admin triggers
        this.bindUI();
    }

    initDefaultUsers() {
        this.users = [
            {
                username: 'admin',
                password: '123',
                name: 'Quản Trị Viên NetLab',
                role: 'admin',
                avatar: '👑',
                joinedAt: '2026-01-01',
                email: 'admin@netlab.vn'
            },
            {
                username: 'student',
                password: '123',
                name: 'Nguyễn Văn A (Học Viên)',
                role: 'student',
                avatar: '🎓',
                joinedAt: '2026-03-15',
                email: 'student@netlab.vn'
            }
        ];
        this.saveUsers();
    }

    saveUsers() {
        localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(this.users));
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    isAdmin() {
        return this.currentUser !== null && this.currentUser.role === 'admin';
    }

    login(username, password) {
        const u = this.users.find(user => 
            (user.username.toLowerCase() === username.toLowerCase().trim() || 
             (user.email && user.email.toLowerCase() === username.toLowerCase().trim())) &&
            user.password === password
        );

        if (!u) {
            return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu! (Mẹo: admin/123 hoặc student/123)' };
        }

        this.currentUser = {
            username: u.username,
            name: u.name,
            role: u.role,
            avatar: u.avatar || (u.role === 'admin' ? '👑' : '🎓'),
            email: u.email,
            joinedAt: u.joinedAt
        };

        localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify(this.currentUser));
        this.notifyAuthChange();
        return { success: true, user: this.currentUser };
    }

    register(name, username, password, email = '') {
        const trimmedUser = username.toLowerCase().trim();
        if (!trimmedUser || !password || !name) {
            return { success: false, message: 'Vui lòng điền đầy đủ thông tin!' };
        }

        if (this.users.some(u => u.username.toLowerCase() === trimmedUser)) {
            return { success: false, message: 'Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác.' };
        }

        const newUser = {
            username: trimmedUser,
            password: password,
            name: name.trim(),
            role: 'student', // default role
            avatar: '🎓',
            email: email.trim() || `${trimmedUser}@netlab.local`,
            joinedAt: new Date().toISOString().split('T')[0]
        };

        this.users.push(newUser);
        this.saveUsers();

        // Auto login after register
        this.currentUser = {
            username: newUser.username,
            name: newUser.name,
            role: newUser.role,
            avatar: newUser.avatar,
            email: newUser.email,
            joinedAt: newUser.joinedAt
        };
        localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify(this.currentUser));
        this.notifyAuthChange();
        return { success: true, user: this.currentUser };
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem(this.STORAGE_KEY_CURRENT);
        this.notifyAuthChange();
    }

    /**
     * RBAC Permission Enforcement
     */
    can(permission) {
        switch (permission) {
            case 'MANAGE_DATA':
            case 'CRUD_QUESTIONS':
            case 'CRUD_SUBJECTS':
            case 'EXPORT_IMPORT':
                return this.isAdmin();

            case 'TAKE_FULL_EXAM': // > 10 questions
            case 'SAVE_HISTORY':
            case 'PLAY_CYBER_GOD': // Levels 3 & 4 in Cyber Runner
            case 'CUSTOM_EXAM':
            case 'RANKED_1V1':
                return this.isLoggedIn();

            case 'DEMO_QUIZ':
            case 'PLAY_RUNNER_BASIC': // Levels 1 & 2
            case 'VIEW_BANK':
            case 'VIEW_FLASHCARD':
                return true; // Guest allowed

            default:
                return false;
        }
    }

    /**
     * Exam History Management for Logged in Users
     */
    saveExamResult(resultData) {
        if (!this.isLoggedIn()) return; // Guests don't persist history

        const historyKey = `${this.STORAGE_KEY_HISTORY}_${this.currentUser.username}`;
        let history = [];
        try {
            const saved = localStorage.getItem(historyKey);
            if (saved) history = JSON.parse(saved);
        } catch (e) {
            history = [];
        }

        const entry = {
            id: Date.now(),
            date: new Date().toLocaleString('vi-VN'),
            subjectId: resultData.subjectId || (window.subjectsManager ? window.subjectsManager.getActiveSubjectId() : 'mmt'),
            subjectName: resultData.subjectName || (window.subjectsManager ? window.subjectsManager.getActiveSubject().name : 'Mạng Máy Tính'),
            score: resultData.score,
            totalScore: resultData.totalScore,
            percent: resultData.percent,
            correctCount: resultData.correctCount,
            totalCount: resultData.totalCount,
            timeSpent: resultData.timeSpent
        };

        history.unshift(entry);
        if (history.length > 50) history.pop(); // Keep 50 most recent
        localStorage.setItem(historyKey, JSON.stringify(history));
    }

    getExamHistory() {
        if (!this.isLoggedIn()) return [];
        const historyKey = `${this.STORAGE_KEY_HISTORY}_${this.currentUser.username}`;
        try {
            const saved = localStorage.getItem(historyKey);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    onAuthChange(callback) {
        this.authListeners.push(callback);
    }

    notifyAuthChange() {
        this.updateHeaderUI();
        this.authListeners.forEach(cb => {
            try {
                cb(this.currentUser);
            } catch (e) {
                console.error('Auth listener error:', e);
            }
        });
    }

    // UI integration bindings
    bindUI() {
        // Elements in Header
        this.authBtn = document.getElementById('auth-action-btn');
        this.userBadge = document.getElementById('user-role-badge');
        this.adminBtn = document.getElementById('admin-panel-btn');

        // Modals
        this.authModal = document.getElementById('auth-modal');
        this.profileModal = document.getElementById('profile-modal');
        this.permissionModal = document.getElementById('permission-modal');
        this.adminModal = document.getElementById('admin-modal');

        // Form elements
        this.loginTab = document.getElementById('auth-tab-login');
        this.registerTab = document.getElementById('auth-tab-register');
        this.loginForm = document.getElementById('login-form');
        this.registerForm = document.getElementById('register-form');
        this.authMsg = document.getElementById('auth-error-msg');

        if (this.authBtn) {
            this.authBtn.addEventListener('click', () => {
                if (this.isLoggedIn()) {
                    this.openProfileModal();
                } else {
                    this.openAuthModal('login');
                }
            });
        }

        if (this.adminBtn) {
            this.adminBtn.addEventListener('click', () => {
                if (this.isAdmin()) {
                    this.openAdminModal();
                } else {
                    this.showPermissionGate('Yêu Cầu Quyền Quản Trị', 'Bạn phải đăng nhập bằng tài khoản Quản trị viên (Admin) để quản lý ngân hàng câu hỏi và môn học!');
                }
            });
        }

        // Tab switching in Auth Modal
        if (this.loginTab && this.registerTab) {
            this.loginTab.addEventListener('click', () => this.switchAuthTab('login'));
            this.registerTab.addEventListener('click', () => this.switchAuthTab('register'));
        }

        // Form submits
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const u = document.getElementById('login-username').value;
                const p = document.getElementById('login-password').value;
                const res = this.login(u, p);
                if (res.success) {
                    this.closeAuthModal();
                    if (window.soundManager) window.soundManager.playCorrect();
                } else {
                    this.showAuthError(res.message);
                    if (window.soundManager) window.soundManager.playWrong();
                }
            });
        }

        if (this.registerForm) {
            this.registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('reg-name').value;
                const u = document.getElementById('reg-username').value;
                const p = document.getElementById('reg-password').value;
                const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value : '';
                const res = this.register(name, u, p, email);
                if (res.success) {
                    this.closeAuthModal();
                    if (window.soundManager) window.soundManager.playCorrect();
                } else {
                    this.showAuthError(res.message);
                    if (window.soundManager) window.soundManager.playWrong();
                }
            });
        }

        // Quick demo login buttons in auth modal
        const demoAdminBtn = document.getElementById('demo-admin-login-btn');
        if (demoAdminBtn) {
            demoAdminBtn.addEventListener('click', () => {
                this.login('admin', '123');
                this.closeAuthModal();
                if (window.soundManager) window.soundManager.playCorrect();
            });
        }

        const demoStudentBtn = document.getElementById('demo-student-login-btn');
        if (demoStudentBtn) {
            demoStudentBtn.addEventListener('click', () => {
                this.login('student', '123');
                this.closeAuthModal();
                if (window.soundManager) window.soundManager.playCorrect();
            });
        }

        // Logout in profile modal
        const logoutBtn = document.getElementById('profile-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
                this.closeProfileModal();
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        // Close modal buttons
        document.querySelectorAll('.close-auth-modal').forEach(b => {
            b.addEventListener('click', () => this.closeAuthModal());
        });
        document.querySelectorAll('.close-profile-modal').forEach(b => {
            b.addEventListener('click', () => this.closeProfileModal());
        });
        document.querySelectorAll('.close-permission-modal').forEach(b => {
            b.addEventListener('click', () => this.closePermissionModal());
        });
        document.querySelectorAll('.close-admin-modal').forEach(b => {
            b.addEventListener('click', () => this.closeAdminModal());
        });

        // Permission modal CTA
        const permLoginBtn = document.getElementById('perm-login-cta-btn');
        if (permLoginBtn) {
            permLoginBtn.addEventListener('click', () => {
                this.closePermissionModal();
                this.openAuthModal('login');
            });
        }

        // Initial Header state
        this.updateHeaderUI();
    }

    updateHeaderUI() {
        if (!this.userBadge || !this.authBtn) return;

        if (this.currentUser) {
            // Logged in
            const isAdm = this.currentUser.role === 'admin';
            this.userBadge.innerHTML = isAdm ? 
                `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span> <strong class="text-amber-400 font-bold">👑 ADMIN</strong>` :
                `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> <strong class="text-emerald-400 font-semibold">🎓 HỌC VIÊN</strong>`;
            
            this.userBadge.className = isAdm ? 
                'px-2.5 py-1 rounded-xl text-xs font-mono border border-amber-500/50 bg-amber-950/60 text-amber-300 flex items-center gap-1.5 shadow-sm shadow-amber-500/20' :
                'px-2.5 py-1 rounded-xl text-xs font-mono border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 flex items-center gap-1.5';

            this.authBtn.innerHTML = `
                <span class="text-base">${this.currentUser.avatar || '👤'}</span>
                <span class="max-w-[100px] sm:max-w-[130px] truncate font-bold text-slate-100">${this.currentUser.name.split(' ')[0]}</span>
            `;
            this.authBtn.className = 'btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5 border-slate-700 bg-slate-800/90';

            // Show admin button if admin
            if (this.adminBtn) {
                if (isAdm) {
                    this.adminBtn.classList.remove('hidden');
                } else {
                    this.adminBtn.classList.add('hidden');
                }
            }
        } else {
            // Guest mode
            this.userBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-500"></span> <span>Khách vãng lai</span>`;
            this.userBadge.className = 'px-2.5 py-1 rounded-xl text-xs font-mono border border-slate-800 bg-slate-900/60 text-slate-400 flex items-center gap-1.5';
            
            this.authBtn.innerHTML = `<span>🔑</span> <span class="font-semibold">Đăng nhập</span>`;
            this.authBtn.className = 'btn-primary text-xs py-1.5 px-3.5 flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-indigo-600 shadow-sm';

            if (this.adminBtn) {
                this.adminBtn.classList.add('hidden');
            }
        }
    }

    openAuthModal(tab = 'login') {
        if (!this.authModal) return;
        this.clearAuthError();
        this.switchAuthTab(tab);
        this.authModal.classList.remove('hidden');
    }

    closeAuthModal() {
        if (this.authModal) this.authModal.classList.add('hidden');
    }

    switchAuthTab(tab) {
        if (tab === 'login') {
            if (this.loginTab) this.loginTab.className = 'flex-1 py-2 text-center text-xs font-bold border-b-2 border-cyan-400 text-cyan-400';
            if (this.registerTab) this.registerTab.className = 'flex-1 py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-200 border-b-2 border-transparent';
            if (this.loginForm) this.loginForm.classList.remove('hidden');
            if (this.registerForm) this.registerForm.classList.add('hidden');
        } else {
            if (this.registerTab) this.registerTab.className = 'flex-1 py-2 text-center text-xs font-bold border-b-2 border-cyan-400 text-cyan-400';
            if (this.loginTab) this.loginTab.className = 'flex-1 py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-200 border-b-2 border-transparent';
            if (this.registerForm) this.registerForm.classList.remove('hidden');
            if (this.loginForm) this.loginForm.classList.add('hidden');
        }
        this.clearAuthError();
    }

    showAuthError(msg) {
        if (this.authMsg) {
            this.authMsg.textContent = msg;
            this.authMsg.classList.remove('hidden');
        }
    }

    clearAuthError() {
        if (this.authMsg) {
            this.authMsg.textContent = '';
            this.authMsg.classList.add('hidden');
        }
    }

    openProfileModal() {
        if (!this.profileModal || !this.currentUser) return;
        
        const avatarEl = document.getElementById('profile-avatar');
        const nameEl = document.getElementById('profile-name');
        const roleEl = document.getElementById('profile-role');
        const usernameEl = document.getElementById('profile-username');
        const emailEl = document.getElementById('profile-email');
        const joinedEl = document.getElementById('profile-joined');
        const historyList = document.getElementById('profile-history-list');

        if (avatarEl) avatarEl.textContent = this.currentUser.avatar || '🎓';
        if (nameEl) nameEl.textContent = this.currentUser.name;
        if (usernameEl) usernameEl.textContent = `@${this.currentUser.username}`;
        if (emailEl) emailEl.textContent = this.currentUser.email || 'Chưa cập nhật';
        if (joinedEl) joinedEl.textContent = `Tham gia: ${this.currentUser.joinedAt || '2026'}`;
        if (roleEl) {
            roleEl.textContent = this.currentUser.role === 'admin' ? '👑 Quản Trị Viên Toàn Quyền' : '🎓 Học Viên Chính Thức';
            roleEl.className = this.currentUser.role === 'admin' ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold';
        }

        // Render history
        const history = this.getExamHistory();
        if (historyList) {
            if (history.length === 0) {
                historyList.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Chưa có bài thi nào được ghi lại. Hãy vào mục Luyện Thi để bắt đầu!</div>`;
            } else {
                historyList.innerHTML = history.slice(0, 10).map(h => `
                    <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                            <div class="font-bold text-slate-200">${h.subjectName}</div>
                            <div class="text-[11px] text-slate-400 font-mono">${h.date} • ${h.timeSpent || '0m'}</div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm font-black ${h.percent >= 80 ? 'text-emerald-400' : (h.percent >= 50 ? 'text-amber-400' : 'text-rose-400')}">${h.percent}%</div>
                            <div class="text-[11px] text-slate-400">${h.correctCount}/${h.totalCount} câu</div>
                        </div>
                    </div>
                `).join('');
            }
        }

        this.profileModal.classList.remove('hidden');
    }

    closeProfileModal() {
        if (this.profileModal) this.profileModal.classList.add('hidden');
    }

    showPermissionGate(title, message) {
        if (!this.permissionModal) return;
        const tEl = document.getElementById('perm-modal-title');
        const mEl = document.getElementById('perm-modal-msg');
        if (tEl) tEl.textContent = title;
        if (mEl) mEl.textContent = message;
        this.permissionModal.classList.remove('hidden');
        if (window.soundManager) window.soundManager.playAlarm();
    }

    closePermissionModal() {
        if (this.permissionModal) this.permissionModal.classList.add('hidden');
    }

    openAdminModal() {
        if (!this.adminModal || !this.isAdmin()) return;
        this.adminModal.classList.remove('hidden');
        if (window.adminDashboard) {
            window.adminDashboard.render();
        }
    }

    closeAdminModal() {
        if (this.adminModal) this.adminModal.classList.add('hidden');
    }
}

window.authManager = new AuthManager();
