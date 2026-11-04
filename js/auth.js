/**
 * NetLab Authentication & Secure Role-Based Access Control (RBAC) System
 * Version 4.0 - Granular Lab Access Control & Zero-Redundancy Principle:
 * - Default Master Admin: nvt5405@ / nvt5405@123 (full administrative privileges)
 * - All other accounts deleted on init as per security policy
 * - Newly registered accounts default to ZERO PERMISSIONS (pending admin approval)
 * - Granular per-lab & per-subject access control:
 *   Only permitted tabs and subjects are visible; all other tabs/content are completely hidden.
 * - Anti-Tampering session tokens & SHA-256 salted password hashing
 */

// 1. Global XSS Sanitization Utilities
window.escapeHTML = function (str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .split('&').join('&amp;')
        .split('<').join('&lt;')
        .split('>').join('&gt;')
        .split('"').join('&quot;')
        .split("'").join('&#39;');
};

window.formatQuestionText = function (str) {
    return window.escapeHTML(str).replace(/\n/g, '<br>');
};

// 2. Cryptographic Helper Functions using Web Crypto API
async function sha256Hex(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function generateSecureSalt() {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
}

function getAppSecretSeed() {
    const KEY = 'netlab_secret_salt_v4';
    let seed = localStorage.getItem(KEY);
    if (!seed) {
        seed = generateSecureSalt() + '_' + Date.now();
        localStorage.setItem(KEY, seed);
    }
    return seed;
}

async function hashUserPassword(password, salt) {
    return await sha256Hex(`NETLAB_SALT:${salt}::PWD:${password}::APP:${getAppSecretSeed()}`);
}

async function computeSessionToken(username, role, passwordHash) {
    return await sha256Hex(`NETLAB_SESSION_TOKEN:${username}:${role}:${passwordHash}:${getAppSecretSeed()}`);
}

// 3. Auth Manager Class
class AuthManager {
    constructor() {
        this.STORAGE_KEY_USERS = 'netlab_users_v4';
        this.STORAGE_KEY_CURRENT = 'netlab_current_user_v4';
        this.STORAGE_KEY_HISTORY = 'netlab_exam_history_v4';

        this.currentUser = null;
        this.users = [];
        this.authListeners = [];

        // Rate limiting shield
        this.failedAttempts = 0;
        this.lockoutUntil = 0;

        this.init();
    }

    async init() {
        // Clean up any legacy plaintext storage from previous versions for security
        try {
            localStorage.removeItem('netlab_users_v3');
            localStorage.removeItem('netlab_current_user_v3');
            localStorage.removeItem('netlab_users_v2');
            localStorage.removeItem('netlab_current_user_v2');
            localStorage.removeItem('netlab_users');
            localStorage.removeItem('netlab_current_user');
        } catch (e) {
            // Ignore storage cleanup errors
        }

        // 1. Load users list or seed Master Admin: nvt5405@ / nvt5405@123
        const savedUsers = localStorage.getItem(this.STORAGE_KEY_USERS);
        if (savedUsers) {
            try {
                this.users = JSON.parse(savedUsers);
            } catch (e) {
                this.users = [];
            }
        } else {
            this.users = [];
        }

        // Ensure default Master Admin nvt5405@ exists with full permissions
        await this.ensureMasterAdmin();

        // 2. Validate active session with anti-tampering token verification
        const savedCurrent = localStorage.getItem(this.STORAGE_KEY_CURRENT);
        if (savedCurrent) {
            try {
                const sessionObj = JSON.parse(savedCurrent);
                const isValid = await this.validateSession(sessionObj);
                if (isValid) {
                    // Refresh user permissions from latest users array
                    const freshUser = this.users.find(u => u.username.toLowerCase() === sessionObj.username.toLowerCase());
                    this.currentUser = {
                        ...sessionObj,
                        allowedSections: freshUser.allowedSections || [],
                        allowedSubjects: freshUser.allowedSubjects || [],
                        isApproved: freshUser.isApproved
                    };
                } else {
                    this.currentUser = null;
                    localStorage.removeItem(this.STORAGE_KEY_CURRENT);
                }
            } catch (e) {
                this.currentUser = null;
            }
        } else {
            this.currentUser = null;
        }

        // 3. Bind UI elements and event listeners
        this.bindUI();
        this.updateHeaderUI();
        this.applyPermissionsToUI(this.currentUser);
    }

    async ensureMasterAdmin() {
        let admin = this.users.find(u => u.username.toLowerCase() === 'nvt5405@');
        if (!admin) {
            // Reset to clean state with master admin as requested
            const salt = generateSecureSalt();
            const passwordHash = await hashUserPassword('nvt5405@123', salt);
            admin = {
                username: 'nvt5405@',
                name: 'Quản Trị Viên (nvt5405@)',
                role: 'admin',
                avatar: '👑',
                email: 'nvt5405@netlab.vn',
                salt: salt,
                passwordHash: passwordHash,
                joinedAt: '2026-01-01',
                isApproved: true,
                allowedSections: ['tab-quiz', 'tab-game', 'tab-battle', 'tab-ctf', 'tab-bank', 'tab-flashcard'],
                allowedSubjects: ['mmt', 'anm', 'toan', 'hdo']
            };
            // Keep master admin and legitimate registered students
            this.users = [admin, ...this.users.filter(u => u.role !== 'admin')];
            this.saveUsers();
        }
    }

    saveUsers() {
        localStorage.setItem(this.STORAGE_KEY_USERS, JSON.stringify(this.users));
    }

    getAllUsers() {
        return this.users;
    }

    async validateSession(sessionObj) {
        if (!sessionObj || !sessionObj.username || !sessionObj.role || !sessionObj.token) {
            return false;
        }

        const user = this.users.find(u => u.username.toLowerCase() === sessionObj.username.toLowerCase());
        if (!user) return false;

        if (user.role !== sessionObj.role) return false;

        const expectedToken = await computeSessionToken(user.username, user.role, user.passwordHash);
        return expectedToken === sessionObj.token;
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

    isRateLimited() {
        if (Date.now() < this.lockoutUntil) {
            const secLeft = Math.ceil((this.lockoutUntil - Date.now()) / 1000);
            return { limited: true, secLeft: secLeft };
        }
        return { limited: false, secLeft: 0 };
    }

    /**
     * Secure Login Method with SHA-256 + Salt & Rate Limiting Shield
     * Supports typing nvt5405@ or nvt5405 for Master Admin
     */
    async login(usernameOrEmail, password) {
        const rateCheck = this.isRateLimited();
        if (rateCheck.limited) {
            return {
                success: false,
                message: `Tài khoản tạm khóa do thử sai quá 5 lần! Vui lòng thử lại sau ${rateCheck.secLeft} giây.`
            };
        }

        let trimmed = (usernameOrEmail || '').trim().toLowerCase();
        if (!trimmed || !password) {
            return { success: false, message: 'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!' };
        }

        // Support both "nvt5405" and "nvt5405@"
        if (trimmed === 'nvt5405') {
            trimmed = 'nvt5405@';
        }

        // Find candidate user
        const candidate = this.users.find(u => 
            u.username.toLowerCase() === trimmed || 
            (u.email && u.email.toLowerCase() === trimmed)
        );

        if (!candidate) {
            this.failedAttempts++;
            if (this.failedAttempts >= 5) {
                this.lockoutUntil = Date.now() + 30000;
                return {
                    success: false,
                    message: 'Bạn đã nhập sai 5 lần! Hệ thống tạm khóa đăng nhập trong 30 giây để bảo vệ.'
                };
            }
            return { success: false, message: 'Sai tên đăng nhập hoặc mật khẩu!' };
        }

        // Compute hash of input password with user's specific cryptographic salt
        const inputHash = await hashUserPassword(password, candidate.salt);
        if (inputHash !== candidate.passwordHash) {
            this.failedAttempts++;
            if (this.failedAttempts >= 5) {
                this.lockoutUntil = Date.now() + 30000;
                return {
                    success: false,
                    message: 'Bạn đã nhập sai 5 lần! Hệ thống tạm khóa đăng nhập trong 30 giây để bảo vệ.'
                };
            }
            const remaining = 5 - this.failedAttempts;
            return { success: false, message: `Sai tên đăng nhập hoặc mật khẩu! (Còn ${remaining} lần thử)` };
        }

        // Login successful: reset rate limit counter
        this.failedAttempts = 0;

        // Generate tamper-proof session token
        const token = await computeSessionToken(candidate.username, candidate.role, candidate.passwordHash);

        this.currentUser = {
            username: candidate.username,
            name: candidate.name,
            role: candidate.role,
            avatar: candidate.avatar || (candidate.role === 'admin' ? '👑' : '🎓'),
            email: candidate.email || '',
            joinedAt: candidate.joinedAt,
            isApproved: candidate.isApproved,
            allowedSections: candidate.allowedSections || [],
            allowedSubjects: candidate.allowedSubjects || [],
            token: token
        };

        localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify(this.currentUser));
        this.notifyAuthChange();
        return { success: true, user: this.currentUser };
    }

    /**
     * Public Registration for Students
     * Default: isApproved = false, allowedSections = [], allowedSubjects = [] (ZERO PERMISSIONS)
     */
    async register(name, username, password, confirmPassword, email = '') {
        const cleanName = (name || '').trim();
        let cleanUser = (username || '').trim().toLowerCase();
        const cleanEmail = (email || '').trim().toLowerCase();

        if (!cleanName || cleanName.length < 2) {
            return { success: false, message: 'Họ tên tối thiểu 2 ký tự!' };
        }

        const userRegex = /^[a-zA-Z0-9_@.-]{3,30}$/;
        if (!userRegex.test(cleanUser)) {
            return { success: false, message: 'Tên đăng nhập chỉ gồm 3-30 ký tự (chữ cái, số, @, _, -, .)' };
        }

        if (!password || password.length < 6) {
            return { success: false, message: 'Mật khẩu phải có tối thiểu 6 ký tự!' };
        }

        if (password !== confirmPassword) {
            return { success: false, message: 'Xác nhận mật khẩu không khớp!' };
        }

        if (this.users.some(u => u.username.toLowerCase() === cleanUser)) {
            return { success: false, message: 'Tên đăng nhập đã có người sử dụng! Vui lòng chọn tên khác.' };
        }

        // Salt and hash
        const salt = generateSecureSalt();
        const passwordHash = await hashUserPassword(password, salt);

        const newStudent = {
            username: cleanUser,
            name: cleanName,
            role: 'student',
            avatar: '🎓',
            email: cleanEmail || `${cleanUser}@netlab.local`,
            salt: salt,
            passwordHash: passwordHash,
            joinedAt: new Date().toISOString().split('T')[0],
            isApproved: false,     // Mặc định KHÔNG QUYỀN
            allowedSections: [],   // Mặc định TRỐNG: ẩn toàn bộ lab
            allowedSubjects: []    // Mặc định TRỐNG: chờ admin cấp quyền
        };

        this.users.push(newStudent);
        this.saveUsers();

        // Auto login student
        const token = await computeSessionToken(newStudent.username, newStudent.role, newStudent.passwordHash);
        this.currentUser = {
            username: newStudent.username,
            name: newStudent.name,
            role: newStudent.role,
            avatar: newStudent.avatar,
            email: newStudent.email,
            joinedAt: newStudent.joinedAt,
            isApproved: newStudent.isApproved,
            allowedSections: newStudent.allowedSections,
            allowedSubjects: newStudent.allowedSubjects,
            token: token
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
     * Admin Permission Updates for Registered Users
     */
    updateUserPermissions(username, allowedSections, allowedSubjects, isApproved) {
        const u = this.users.find(user => user.username.toLowerCase() === username.toLowerCase());
        if (!u) return { success: false, message: 'Không tìm thấy người dùng!' };

        u.allowedSections = allowedSections || [];
        u.allowedSubjects = allowedSubjects || [];
        u.isApproved = !!isApproved;

        this.saveUsers();

        // If the updated user is currently logged in, sync session
        if (this.currentUser && this.currentUser.username.toLowerCase() === username.toLowerCase()) {
            this.currentUser.allowedSections = u.allowedSections;
            this.currentUser.allowedSubjects = u.allowedSubjects;
            this.currentUser.isApproved = u.isApproved;
            localStorage.setItem(this.STORAGE_KEY_CURRENT, JSON.stringify(this.currentUser));
            this.applyPermissionsToUI(this.currentUser);
        }

        return { success: true };
    }

    deleteUser(username) {
        if (username.toLowerCase() === 'nvt5405@') {
            return { success: false, message: 'Không thể xóa tài khoản Quản trị viên Master!' };
        }

        const idx = this.users.findIndex(u => u.username.toLowerCase() === username.toLowerCase());
        if (idx === -1) return { success: false, message: 'Không tìm thấy người dùng!' };

        this.users.splice(idx, 1);
        this.saveUsers();

        // If deleted user is current user, logout
        if (this.currentUser && this.currentUser.username.toLowerCase() === username.toLowerCase()) {
            this.logout();
        }

        return { success: true };
    }

    /**
     * RBAC Permission Enforcement
     */
    can(permission) {
        if (this.isAdmin()) return true;
        if (!this.isLoggedIn()) return false;

        const user = this.currentUser;
        if (!user || !user.isApproved || !user.allowedSections) return false;

        switch (permission) {
            case 'MANAGE_DATA':
            case 'CRUD_QUESTIONS':
            case 'CRUD_SUBJECTS':
            case 'EXPORT_IMPORT':
                return this.isAdmin();

            case 'QUIZ':
            case 'TAKE_FULL_EXAM':
            case 'CUSTOM_EXAM':
                return user.allowedSections.includes('tab-quiz');

            case 'RUNNER':
            case 'PLAY_RUNNER_BASIC':
            case 'PLAY_CYBER_GOD':
                return user.allowedSections.includes('tab-game');

            case 'BATTLE':
            case 'RANKED_1V1':
                return user.allowedSections.includes('tab-battle');

            case 'CTF':
                return user.allowedSections.includes('tab-ctf');

            case 'BANK':
            case 'VIEW_BANK':
                return user.allowedSections.includes('tab-bank');

            case 'FLASHCARD':
            case 'VIEW_FLASHCARD':
                return user.allowedSections.includes('tab-flashcard');

            case 'SAVE_HISTORY':
                return user.isApproved;

            default:
                return false;
        }
    }

    /**
     * Dynamic UI Filtering: Hides completely any unauthorized tabs or sections.
     * Leaves zero redundant elements on the screen.
     */
    applyPermissionsToUI(user) {
        const navTabsContainer = document.getElementById('main-nav-tabs');
        const tabs = document.querySelectorAll('.nav-tab');
        const sections = {
            'tab-quiz': document.getElementById('section-quiz'),
            'tab-game': document.getElementById('section-game'),
            'tab-battle': document.getElementById('section-battle'),
            'tab-ctf': document.getElementById('section-ctf'),
            'tab-bank': document.getElementById('section-bank'),
            'tab-flashcard': document.getElementById('section-flashcard')
        };
        const pendingView = document.getElementById('pending-permission-view');
        const subSelectorContainer = document.getElementById('global-subject-container');

        // Case 1: Master Admin (nvt5405@) -> Full Access
        if (user && user.role === 'admin') {
            if (pendingView) pendingView.classList.add('hidden');
            if (navTabsContainer) navTabsContainer.classList.remove('hidden');
            if (subSelectorContainer) subSelectorContainer.classList.remove('hidden');
            tabs.forEach(t => t.classList.remove('hidden'));
            if (window.subjectsManager) window.subjectsManager.filterAllowedSubjects(null);
            return;
        }

        // Case 2: Guest (Not logged in)
        if (!user) {
            if (pendingView) pendingView.classList.add('hidden');
            if (navTabsContainer) navTabsContainer.classList.remove('hidden');
            if (subSelectorContainer) subSelectorContainer.classList.remove('hidden');
            tabs.forEach(t => t.classList.remove('hidden'));
            if (window.subjectsManager) window.subjectsManager.filterAllowedSubjects(null);
            return;
        }

        // Case 3: Logged in Student / User
        const allowed = user.allowedSections || [];
        const isApproved = user.isApproved && allowed.length > 0;

        if (!isApproved) {
            // ZERO PERMISSIONS: Hide all nav tabs, subject selector, and all lab sections completely
            if (navTabsContainer) navTabsContainer.classList.add('hidden');
            if (subSelectorContainer) subSelectorContainer.classList.add('hidden');
            Object.values(sections).forEach(s => {
                if (s) s.classList.add('hidden');
            });

            if (pendingView) {
                pendingView.classList.remove('hidden');
                const nameEl = document.getElementById('pending-user-name');
                if (nameEl) nameEl.textContent = user.name || user.username;
            }
            return;
        }

        // User has specific permissions: Show ONLY allowed tabs!
        if (pendingView) pendingView.classList.add('hidden');
        if (navTabsContainer) navTabsContainer.classList.remove('hidden');
        if (subSelectorContainer) subSelectorContainer.classList.remove('hidden');

        let firstActiveTab = null;
        let currentActiveIsAllowed = false;

        tabs.forEach(t => {
            const target = t.dataset.target;
            const canAccess = allowed.includes(target);
            if (canAccess) {
                t.classList.remove('hidden');
                if (!firstActiveTab) firstActiveTab = t;
                if (t.classList.contains('active')) currentActiveIsAllowed = true;
            } else {
                t.classList.add('hidden');
                t.classList.remove('active');
                if (sections[target]) sections[target].classList.add('hidden');
            }
        });

        // If current tab is hidden, switch to the first allowed tab
        if (!currentActiveIsAllowed && firstActiveTab) {
            firstActiveTab.click();
        }

        // Filter allowed subjects
        if (window.subjectsManager) {
            window.subjectsManager.filterAllowedSubjects(user.allowedSubjects);
        }
    }

    /**
     * Exam History Management for Logged in Users
     */
    saveExamResult(resultData) {
        if (!this.isLoggedIn()) return;

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
        if (history.length > 50) history.pop();
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
        this.applyPermissionsToUI(this.currentUser);
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

        // Tabs
        this.loginTab = document.getElementById('auth-tab-login');
        this.registerTab = document.getElementById('auth-tab-register');

        // Forms
        this.loginForm = document.getElementById('login-form');
        this.registerForm = document.getElementById('register-form');

        // Messages
        this.authMsg = document.getElementById('auth-error-msg');
        this.authSuccessMsg = document.getElementById('auth-success-msg');

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
                    this.showPermissionGate('Yêu Cầu Quyền Quản Trị', 'Bạn phải đăng nhập bằng tài khoản Quản trị viên (nvt5405@) để truy cập chức năng này!');
                }
            });
        }

        // Tab switching in Auth Modal
        if (this.loginTab) {
            this.loginTab.addEventListener('click', () => this.switchAuthTab('login'));
        }
        if (this.registerTab) {
            this.registerTab.addEventListener('click', () => this.switchAuthTab('register'));
        }

        // Login Submit
        if (this.loginForm) {
            this.loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const u = document.getElementById('login-username').value;
                const p = document.getElementById('login-password').value;
                
                const submitBtn = document.getElementById('login-submit-btn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = '⏳ Đang xác thực...';
                }

                try {
                    const res = await this.login(u, p);
                    if (res.success) {
                        this.closeAuthModal();
                        if (window.soundManager) window.soundManager.playCorrect();
                    } else {
                        this.showAuthError(res.message);
                        if (window.soundManager) window.soundManager.playWrong();
                    }
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = '▶ Đăng Nhập';
                    }
                }
            });
        }

        // Register Submit
        if (this.registerForm) {
            this.registerForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = document.getElementById('reg-name').value;
                const u = document.getElementById('reg-username').value;
                const p = document.getElementById('reg-password').value;
                const pConf = document.getElementById('reg-password-confirm') ? document.getElementById('reg-password-confirm').value : p;
                const email = document.getElementById('reg-email') ? document.getElementById('reg-email').value : '';

                const submitBtn = document.getElementById('register-submit-btn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = '⏳ Đang tạo tài khoản...';
                }

                try {
                    const res = await this.register(name, u, p, pConf, email);
                    if (res.success) {
                        this.closeAuthModal();
                        if (window.soundManager) window.soundManager.playCorrect();
                    } else {
                        this.showAuthError(res.message);
                        if (window.soundManager) window.soundManager.playWrong();
                    }
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = '✓ Đăng Ký Tài Khoản Mới';
                    }
                }
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

        // Logout in pending permission view
        const pendingLogoutBtn = document.getElementById('pending-logout-btn');
        if (pendingLogoutBtn) {
            pendingLogoutBtn.addEventListener('click', () => {
                this.logout();
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
    }

    updateHeaderUI() {
        if (!this.userBadge || !this.authBtn) return;

        if (this.currentUser) {
            const isAdm = this.currentUser.role === 'admin';
            this.userBadge.innerHTML = isAdm ? 
                `<span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span> <strong class="text-amber-400 font-bold">👑 ADMIN</strong>` :
                (this.currentUser.isApproved ? 
                    `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> <strong class="text-emerald-400 font-semibold">🎓 HỌC VIÊN</strong>` :
                    `<span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span> <strong class="text-rose-400 font-semibold">🔒 CHỜ CẤP QUYỀN</strong>`
                );
            
            this.userBadge.className = isAdm ? 
                'px-2.5 py-1 rounded-xl text-xs font-mono border border-amber-500/50 bg-amber-950/60 text-amber-300 flex items-center gap-1.5 shadow-sm shadow-amber-500/20' :
                (this.currentUser.isApproved ? 
                    'px-2.5 py-1 rounded-xl text-xs font-mono border border-emerald-500/40 bg-emerald-950/60 text-emerald-300 flex items-center gap-1.5' :
                    'px-2.5 py-1 rounded-xl text-xs font-mono border border-rose-500/40 bg-rose-950/60 text-rose-300 flex items-center gap-1.5'
                );

            const firstName = (this.currentUser.name || '').split(' ')[0] || 'User';
            this.authBtn.innerHTML = `
                <span class="text-base">${window.escapeHTML(this.currentUser.avatar || '👤')}</span>
                <span class="max-w-[100px] sm:max-w-[130px] truncate font-bold text-slate-100">${window.escapeHTML(firstName)}</span>
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
        const activeClass = 'flex-1 py-2 text-center text-xs font-bold border-b-2 border-cyan-400 text-cyan-400';
        const inactiveClass = 'flex-1 py-2 text-center text-xs font-semibold text-slate-400 hover:text-slate-200 border-b-2 border-transparent';

        if (this.loginTab) this.loginTab.className = (tab === 'login') ? activeClass : inactiveClass;
        if (this.registerTab) this.registerTab.className = (tab === 'register') ? activeClass : inactiveClass;

        if (this.loginForm) this.loginForm.classList.toggle('hidden', tab !== 'login');
        if (this.registerForm) this.registerForm.classList.toggle('hidden', tab !== 'register');

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
        if (this.authSuccessMsg) {
            this.authSuccessMsg.textContent = '';
            this.authSuccessMsg.classList.add('hidden');
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
            if (this.currentUser.role === 'admin') {
                roleEl.textContent = '👑 Quản Trị Viên Toàn Quyền';
                roleEl.className = 'text-amber-400 font-bold';
            } else if (this.currentUser.isApproved) {
                const count = (this.currentUser.allowedSections || []).length;
                roleEl.textContent = `🎓 Học Viên Được Cấp Quyền (${count} mục)`;
                roleEl.className = 'text-emerald-400 font-bold';
            } else {
                roleEl.textContent = '🔒 Chưa Được Cấp Quyền (Chờ Phê Duyệt)';
                roleEl.className = 'text-rose-400 font-bold';
            }
        }

        // Render history with XSS escaping
        const history = this.getExamHistory();
        if (historyList) {
            if (history.length === 0) {
                historyList.innerHTML = `<div class="p-4 text-center text-xs text-slate-500">Chưa có bài thi nào được ghi lại.</div>`;
            } else {
                historyList.innerHTML = history.slice(0, 10).map(h => `
                    <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                            <div class="font-bold text-slate-200">${window.escapeHTML(h.subjectName)}</div>
                            <div class="text-[11px] text-slate-400 font-mono">${window.escapeHTML(h.date)} • ${window.escapeHTML(h.timeSpent || '0m')}</div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm font-black ${h.percent >= 80 ? 'text-emerald-400' : (h.percent >= 50 ? 'text-amber-400' : 'text-rose-400')}">${Number(h.percent) || 0}%</div>
                            <div class="text-[11px] text-slate-400">${Number(h.correctCount) || 0}/${Number(h.totalCount) || 0} câu</div>
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
