/**
 * CTF (Capture The Flag / Packet) Challenge Engine
 * 8 Interactive Network Security & Protocol Analysis Scenarios
 */
class CTFEngine {
    constructor() {
        this.challenges = [
            {
                id: 1,
                title: "Thử Thách 1: Wireshark Packet Forensics (Điều Tra Bắt Gói Tin)",
                category: "Phân Tích Giao Thức",
                difficulty: "Dễ",
                points: 100,
                description: "Hệ thống IDS phát hiện một nhân viên truy cập máy chủ quản trị bằng giao thức không mã hóa qua mạng nội bộ. Hãy phân tích đoạn trích xuất gói tin Ethernet/IP/TCP bắt được bên dưới để tìm mật khẩu cờ bí mật!",
                codeSnippet: `--- FRAME 42: TCP Packet Dump on Port 23 (Telnet) ---
0000   00 50 56 c0 00 08 00 0c 29 3e 51 4a 08 00 45 00
0010   00 48 a1 b2 40 00 40 06 7c d4 c0 a8 01 0a c0 a8
0020   01 01 04 23 00 17 6f 12 8a 44 2e 84 9b 12 50 18
0030   10 00 e3 9d 00 00 50 41 53 53 20 46 4c 41 47 7b
0040   63 6c 65 61 72 5f 74 65 78 74 5f 74 65 6c 6e 65
0050   74 5f 69 73 5f 69 6e 73 65 63 75 72 65 7d 0d 0a
[ASCII Translated]:
...PASS FLAG{clear_text_telnet_is_insecure}..`,
                hint: "Giao thức Telnet hoạt động trên TCP Port 23 và không mã hóa thông điệp. Cờ Flag nằm trực tiếp sau chuỗi 'PASS '.",
                flag: "FLAG{clear_text_telnet_is_insecure}"
            },
            {
                id: 2,
                title: "Thử Thách 2: Subnetting Broadcast Gate (Bẻ Khóa Mạng Con Ngầm)",
                category: "Tính Toán Mạng Con",
                difficulty: "Trung bình",
                points: 150,
                description: "Máy chủ bảo mật của bạn đang ở chế độ ngủ (Standby) tại địa chỉ IP: 172.28.140.219/21. Để đánh thức máy chủ bằng gói tin Wake-on-LAN qua Router, bạn phải tính toán chính xác địa chỉ Directed Broadcast IP của mạng con này!",
                codeSnippet: `Target IP: 172.28.140.219
Prefix: /21
Nhiệm vụ: Tính toán Directed Broadcast Address của mạng con này.
Định dạng cờ nộp bài: FLAG{<Broadcast_IP>} (Ví dụ: FLAG{172.28.x.255})`,
                hint: "/21 có 21 bit mạng (Mask = 255.255.248.0). Bước nhảy trong octet thứ 3 là: 256 - 248 = 8. Octet 3 là 140, lấy 140 chia 8 = 17 dư 4 -> Network Octet 3 là 17 * 8 = 136. Broadcast Octet 3 = 136 + 8 - 1 = 143.",
                flag: "FLAG{172.28.143.255}"
            },
            {
                id: 3,
                title: "Thử Thách 3: Cisco Firewall ACL Bypass (Xuyên Thủng Tường Lửa)",
                category: "Bảo Mật Tường Lửa",
                difficulty: "Trung bình",
                points: 150,
                description: "Tường lửa Cisco ASA được cấu hình bộ quy tắc Extended ACL sau đây để bảo vệ máy chủ Web tài chính 10.20.30.40. Cổng dịch vụ TCP bảo mật nào được phép truyền dữ liệu qua tường lửa mà không bị lệnh Implicit Deny chặn lại?",
                codeSnippet: `Router# show access-lists 105
Extended IP access list 105
    10 permit tcp any host 10.20.30.40 eq 443
    20 permit udp any host 10.20.30.40 eq 53
    30 deny ip any any (implicit default)

Nhiệm vụ: Nhập số hiệu cổng TCP được phép đi qua tường lửa vào cấu trúc cờ:
FLAG{tcp_port_<số_cổng>_https}`,
                hint: "Xem dòng lệnh số 10: eq 443 cho phép giao thức HTTPS bảo mật chạy trên TCP port 443.",
                flag: "FLAG{tcp_port_443_https}"
            },
            {
                id: 4,
                title: "Thử Thách 4: OSPF Metric Shortest Path (Tối Ưu Tuyến Đường OSPF)",
                category: "Định Tuyến Động",
                difficulty: "Trung bình",
                points: 200,
                description: "Một gói tin dữ liệu cần đi từ Router A đến Router D qua mạng OSPF. Công thức Cost = 100 Mbps / Bandwidth. Tuyến A -> B -> D có băng thông A-B là 100 Mbps (Cost 1) và B-D là 10 Mbps (Cost 10). Tuyến A -> C -> D có băng thông A-C là 1 Gbps (Cost 1) và C-D là 1 Gbps (Cost 1). Tổng Cost của tuyến đường tối ưu được OSPF lựa chọn là bao nhiêu?",
                codeSnippet: `Tuyến 1: A -> B -> D (Tổng Cost: 1 + 10 = 11)
Tuyến 2: A -> C -> D (Tổng Cost: 1 + 1 = 2)

Nhiệm vụ: Nhập tổng chi phí Cost và tên tuyến đường tối ưu theo định dạng:
FLAG{cost_<số_cost>_path_<tên_tuyến>} (Ví dụ: FLAG{cost_2_path_acd})`,
                hint: "OSPF luôn chọn đường có tổng Cost nhỏ nhất. Tuyến A -> C -> D có tổng Cost = 2.",
                flag: "FLAG{cost_2_path_acd}"
            },
            {
                id: 5,
                title: "Thử Thách 5: Rogue DHCP Server Hunt (Truy Lùng Máy Chủ DHCP Giả Mạo)",
                category: "Phân Tích Tấn Công",
                difficulty: "Nâng cao",
                points: 200,
                description: "Người dùng trong văn phòng phàn nàn bị cấp sai Default Gateway. Bật tính năng DHCP Snooping trên Switch phát hiện bảng log sau. Hãy tìm ra địa chỉ MAC của thiết bị giả mạo gắn vào cổng Untrusted!",
                codeSnippet: `Switch# show ip dhcp snooping binding
MacAddress          IpAddress        Lease(sec)  Type            VLAN  Interface
------------------  ---------------  ----------  --------------  ----  -----------------
00:1A:2B:3C:4D:5E   192.168.1.100    86400       dhcp-snooping   10    GigabitEthernet0/1 [TRUSTED]
F4:0F:24:99:AA:BB   192.168.1.254    86400       dhcp-snooping   10    FastEthernet0/24   [UNTRUSTED_ALERT]

Nhiệm vụ: Cờ chính là địa chỉ MAC của kẻ tấn công: FLAG{<MAC_ADDRESS>}`,
                hint: "Cổng FastEthernet0/24 là cổng không tin cậy (Untrusted) đã tự ý cấp phát IP 192.168.1.254. Địa chỉ MAC là F4:0F:24:99:AA:BB.",
                flag: "FLAG{F4:0F:24:99:AA:BB}"
            },
            {
                id: 6,
                title: "Thử Thách 6: TCP 3-Way Handshake Cracking (Bắt Tay 3 Bước TCP)",
                category: "Giao Thức Lớp 4",
                difficulty: "Nâng cao",
                points: 200,
                description: "Máy Client gửi gói tin SYN khởi tạo kết nối TCP đến Server với Initial Sequence Number (ISN) = 1000. Để hoàn thành bước thứ 2 trong quá trình bắt tay, Server phải phản hồi gói tin SYN-ACK với giá trị Acknowledgment Number (AckN) bằng bao nhiêu?",
                codeSnippet: `Step 1: Client -> Server: [SYN] Seq = 1000
Step 2: Server -> Client: [SYN, ACK] Seq = 5000, Ack = ?

Nhiệm vụ: Tính giá trị trường Ack của gói tin SYN-ACK theo định dạng:
FLAG{ack_<giá_trị>}`,
                hint: "Trong quá trình bắt tay 3 bước, cờ SYN chiếm 1 byte ảo trong không gian sequence number, do đó số xác nhận AckN luôn bằng SeqN + 1 = 1000 + 1 = 1001.",
                flag: "FLAG{ack_1001}"
            },
            {
                id: 7,
                title: "Thử Thách 7: REST API Token Extraction (Tự Động Hóa Mạng)",
                category: "Lập Trình Mạng",
                difficulty: "Nâng cao",
                points: 250,
                description: "Bạn đang viết kịch bản Python tương tác với controller Cisco DNA Center để yêu cầu cấp mã xác thực Bearer Token. Phương thức HTTP Verb chuẩn nào được sử dụng khi gửi thông tin xác thực đăng nhập trong Request Body đến URI /dna/system/api/v1/auth/token?",
                codeSnippet: `import requests

url = "https://sandboxdnac.cisco.com/dna/system/api/v1/auth/token"
headers = {"Content-Type": "application/json"}
# Điền phương thức HTTP thích hợp: get, post, put hay delete?
response = requests.request("???", url, auth=("devnetuser", "Cisco123!"))

Nhiệm vụ: Nộp cờ với tên phương thức HTTP ở dạng chữ thường:
FLAG{http_<method>_token}`,
                hint: "Để gửi payload đăng nhập và yêu cầu tạo mới phiên làm việc/token, kiến trúc RESTful API luôn sử dụng phương thức POST.",
                flag: "FLAG{http_post_token}"
            },
            {
                id: 8,
                title: "Thử Thách 8: Master Flag: Longest Prefix Match Triage (Giải Mã Định Tuyến)",
                category: "Định Tuyến Cốt Lõi",
                difficulty: "Chuyên gia",
                points: 300,
                description: "Router nhận được gói tin có địa chỉ IP đích là 10.10.20.150. Trong bảng định tuyến có 4 tuyến đường thỏa mãn: 10.0.0.0/8 (Next-Hop A), 10.10.0.0/16 (Next-Hop B), 10.10.20.0/24 (Next-Hop C) và 10.10.20.128/26 (Next-Hop D). Theo luật Longest Prefix Match của Cisco, gói tin sẽ được chuyển tiếp qua Next-Hop nào?",
                codeSnippet: `Routing Table:
S    10.0.0.0/8 [1/0] via Next-Hop A
O    10.10.0.0/16 [110/2] via Next-Hop B
O    10.10.20.0/24 [110/10] via Next-Hop C
S    10.10.20.128/26 [1/0] via Next-Hop D

Destination IP: 10.10.20.150
Nhiệm vụ: Nhập tên Next-Hop và độ dài prefix dài nhất:
FLAG{next_hop_<chữ_cái>_prefix_<số_bit>}`,
                hint: "10.10.20.150 thuộc dải 10.10.20.128 đến 10.10.20.191 của mạng /26. Đây là prefix dài nhất (26 bits mạng). Next-Hop được chọn là D.",
                flag: "FLAG{next_hop_d_prefix_26}"
            }
        ];

        this.solvedFlags = new Set(JSON.parse(localStorage.getItem('mmt_ctf_solved') || '[]'));
        this.activeChallengeIndex = 0;

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.ui = {
            totalPointsText: document.getElementById('ctf-total-points'),
            solvedCountBadge: document.getElementById('ctf-solved-count'),
            challengeNav: document.getElementById('ctf-challenge-nav'),
            cardTitle: document.getElementById('ctf-card-title'),
            cardCategory: document.getElementById('ctf-card-category'),
            cardDifficulty: document.getElementById('ctf-card-difficulty'),
            cardPoints: document.getElementById('ctf-card-points'),
            cardDesc: document.getElementById('ctf-card-desc'),
            cardCode: document.getElementById('ctf-card-code'),
            hintToggleBtn: document.getElementById('ctf-hint-toggle-btn'),
            hintBox: document.getElementById('ctf-hint-box'),
            hintText: document.getElementById('ctf-hint-text'),
            flagInput: document.getElementById('ctf-flag-input'),
            submitBtn: document.getElementById('ctf-submit-btn'),
            statusBox: document.getElementById('ctf-status-box'),
            terminalInput: document.getElementById('ctf-terminal-input'),
            terminalOutput: document.getElementById('ctf-terminal-output')
        };
    }

    bindEvents() {
        if (!this.ui.submitBtn) return;

        this.ui.submitBtn.addEventListener('click', () => {
            this.handleSubmitFlag();
        });

        this.ui.flagInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleSubmitFlag();
            }
        });

        if (this.ui.hintToggleBtn) {
            this.ui.hintToggleBtn.addEventListener('click', () => {
                this.ui.hintBox.classList.toggle('hidden');
                window.soundManager.playClick();
            });
        }

        // Terminal CLI simulation
        if (this.ui.terminalInput) {
            this.ui.terminalInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = this.ui.terminalInput.value.trim();
                    this.ui.terminalInput.value = '';
                    this.handleTerminalCommand(cmd);
                }
            });
        }

        this.renderChallengeList();
        this.renderActiveChallenge();
        this.updateStats();
    }

    updateStats() {
        let total = 0;
        this.challenges.forEach(c => {
            if (this.solvedFlags.has(c.id)) {
                total += c.points;
            }
        });

        if (this.ui.totalPointsText) this.ui.totalPointsText.textContent = `${total} PTS`;
        if (this.ui.solvedCountBadge) this.ui.solvedCountBadge.textContent = `${this.solvedFlags.size} / ${this.challenges.length} Cờ Đã Giải`;
    }

    renderChallengeList() {
        if (!this.ui.challengeNav) return;
        this.ui.challengeNav.innerHTML = '';

        this.challenges.forEach((c, idx) => {
            const btn = document.createElement('button');
            const isSolved = this.solvedFlags.has(c.id);
            const isActive = idx === this.activeChallengeIndex;

            btn.className = `ctf-nav-btn ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}`;
            btn.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="font-bold text-xs">${isSolved ? '✅' : '🚩'} Bài ${c.id}: ${c.category}</span>
                    <span class="text-xs text-cyan-400 font-mono">+${c.points}p</span>
                </div>
                <div class="text-xs text-slate-400 truncate text-left mt-0.5">${c.title.split(':')[1] || c.title}</div>
            `;

            btn.addEventListener('click', () => {
                this.activeChallengeIndex = idx;
                window.soundManager.playClick();
                this.renderChallengeList();
                this.renderActiveChallenge();
            });

            this.ui.challengeNav.appendChild(btn);
        });
    }

    renderActiveChallenge() {
        const c = this.challenges[this.activeChallengeIndex];
        if (!c) return;

        const isSolved = this.solvedFlags.has(c.id);

        this.ui.cardTitle.textContent = c.title;
        this.ui.cardCategory.textContent = c.category;
        this.ui.cardDifficulty.textContent = c.difficulty;
        this.ui.cardPoints.textContent = `+${c.points} Điểm`;
        this.ui.cardDesc.textContent = c.description;
        this.ui.cardCode.textContent = c.codeSnippet;
        this.ui.hintText.textContent = c.hint;
        this.ui.hintBox.classList.add('hidden');

        this.ui.statusBox.classList.add('hidden');
        this.ui.flagInput.value = '';

        if (isSolved) {
            this.ui.flagInput.placeholder = "Bạn đã hoàn thành thử thách này!";
            this.ui.flagInput.disabled = true;
            this.ui.submitBtn.disabled = true;
            this.ui.submitBtn.innerHTML = "✅ ĐÃ CHIẾM CỜ";
            this.ui.submitBtn.className = "btn-secondary opacity-60";
        } else {
            this.ui.flagInput.placeholder = "Nhập cờ định dạng FLAG{...}";
            this.ui.flagInput.disabled = false;
            this.ui.submitBtn.disabled = false;
            this.ui.submitBtn.innerHTML = "🚩 Nộp Cờ (Submit Flag)";
            this.ui.submitBtn.className = "btn-primary";
        }
    }

    handleSubmitFlag() {
        const c = this.challenges[this.activeChallengeIndex];
        if (!c || this.solvedFlags.has(c.id)) return;

        const inputVal = this.ui.flagInput.value.trim();
        this.ui.statusBox.classList.remove('hidden');

        if (inputVal === c.flag) {
            // Correct Flag
            window.soundManager.playFlagCaptured();
            this.solvedFlags.add(c.id);
            localStorage.setItem('mmt_ctf_solved', JSON.stringify(Array.from(this.solvedFlags)));

            this.ui.statusBox.className = "p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-bold text-center";
            this.ui.statusBox.innerHTML = `🎉 CHÍNH XÁC! CỜ ĐÃ ĐƯỢC GIẢI MÃ THÀNH CÔNG! (+${c.points} Điểm)`;

            this.updateStats();
            this.renderChallengeList();
            this.renderActiveChallenge();

            // Append to terminal
            this.printTerminal(`[SUCCESS] Flag accepted for Challenge ${c.id}! +${c.points} Points awarded!`, 'text-emerald-400');
        } else {
            // Wrong Flag
            window.soundManager.playWrong();
            this.ui.statusBox.className = "p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-300 font-bold text-center";
            this.ui.statusBox.innerHTML = `❌ CỜ KHÔNG CHÍNH XÁC! Hãy kiểm tra lại phân tích gói tin hoặc nhấn "Xem gợi ý".`;

            this.printTerminal(`[FAIL] Invalid flag: "${inputVal}"`, 'text-rose-400');
        }
    }

    handleTerminalCommand(cmd) {
        if (!cmd) return;
        this.printTerminal(`guest@netlab:~$ ${cmd}`, 'text-cyan-300');

        const parts = cmd.split(' ');
        const main = parts[0].toLowerCase();

        switch (main) {
            case 'help':
                this.printTerminal(`Các lệnh được hỗ trợ:\n- list: Xem danh sách thử thách CTF\n- cat: Đọc thông tin thử thách hiện tại\n- hint: Xem gợi ý giải cờ\n- flag <FLAG{...}>: Nộp cờ nhanh\n- clear: Xóa màn hình terminal`, 'text-slate-300');
                break;
            case 'list':
                this.challenges.forEach(c => {
                    const status = this.solvedFlags.has(c.id) ? '[SOLVED]' : '[OPEN]';
                    this.printTerminal(`${status} ${c.id}. ${c.title} (+${c.points} pts)`, 'text-slate-400');
                });
                break;
            case 'cat':
                const c = this.challenges[this.activeChallengeIndex];
                this.printTerminal(`=== ${c.title} ===\n${c.description}\n\nSnippet:\n${c.codeSnippet}`, 'text-slate-200');
                break;
            case 'hint':
                this.printTerminal(`[HINT]: ${this.challenges[this.activeChallengeIndex].hint}`, 'text-amber-300');
                break;
            case 'flag':
            case 'submit':
                const flagVal = parts.slice(1).join(' ').trim();
                if (flagVal) {
                    this.ui.flagInput.value = flagVal;
                    this.handleSubmitFlag();
                } else {
                    this.printTerminal(`Cú pháp: flag FLAG{...}`, 'text-rose-400');
                }
                break;
            case 'clear':
                if (this.ui.terminalOutput) this.ui.terminalOutput.innerHTML = '';
                break;
            default:
                this.printTerminal(`Lệnh không nhận dạng: "${cmd}". Gõ "help" để xem trợ giúp.`, 'text-slate-500');
                break;
        }
    }

    printTerminal(text, colorClass = 'text-slate-300') {
        if (!this.ui.terminalOutput) return;
        const line = document.createElement('div');
        line.className = `${colorClass} whitespace-pre-wrap leading-relaxed`;
        line.textContent = text;
        this.ui.terminalOutput.appendChild(line);
        this.ui.terminalOutput.scrollTop = this.ui.terminalOutput.scrollHeight;
    }
}

window.ctfEngine = new CTFEngine();

