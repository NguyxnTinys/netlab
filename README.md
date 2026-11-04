# 🌐 NETLAB • Hệ Thống Trắc Nghiệm Mạng Máy Tính, Cyber Runner, Đấu Trường 1v1 & Thử Thách CTF

Hệ thống môi trường học tập, luyện thi chuẩn quốc tế và trò chơi tương tác đa dạng môn **Mạng Máy Tính (Chương 1 - Chương 4) & Bộ Đề Luyện Thi CCNA 200-301 (Chương 5)** với tổng cộng **331 câu hỏi đầy đủ đáp án & lý thuyết chuyên sâu**.

---

## ✨ Các Chế Độ & Trò Chơi Nổi Bật

### 1. ⚔️ Đấu Trường Đối Kháng 1v1 (Cyber Duel Arena) - MỚI
- **Chế độ Người vs AI Sentinel (PvE)**:
  - Thi đấu tốc độ và độ chính xác trực tiếp với AI.
  - 3 Cấp độ AI:
    - *Tân Binh*: Phản ứng 6-9s, độ chính xác ~55%.
    - *Kỹ Sư Cisco*: Phản ứng 4s, độ chính xác ~82%.
    - *Siêu AI DeepMind Overlord*: Phản ứng 2.5s, độ chính xác ~96%.
- **Chế độ 2 Người Chơi Cùng Máy (Local PvP Split-Screen)**:
  - Màn hình chia đôi đối kháng thời gian thực.
  - **Player 1 (Xanh Cyan)**: Sử dụng phím `1, 2, 3, 4` hoặc `A, B, C, D`.
  - **Player 2 (Đỏ Rose)**: Sử dụng phím `7, 8, 9, 0` hoặc `U, I, O, P`.
- **Cơ chế chiến đấu**:
  - Mỗi bên có **100 HP (Băng thông mạng)**.
  - Trả lời đúng: Bắn tia năng lượng gây **25 sát thương**. Trả lời đúng 3 câu liên tiếp kích hoạt **Overclock (Đòn chí mạng gây 40 sát thương)**!
  - Trả lời sai: Tự tiêu hao 10 HP và bị **Khóa cổng SYN Flood Lockout trong 2 giây** không thể thao tác!

### 2. 🚩 Thử Thách CTF Mạng Máy Tính (Capture The Flag / Packet) - MỚI
Bao gồm **8 phòng Lab kịch bản thực tế** kèm giao diện dòng lệnh Cyber Terminal CLI mô phỏng:
- **Lab 1: Wireshark Packet Forensics**: Phân tích đoạn packet dump bắt bằng Wireshark để tìm mật khẩu Telnet không mã hóa (`FLAG{clear_text_telnet_is_insecure}`).
- **Lab 2: Subnetting Broadcast Gate**: Tính toán Directed Broadcast IP của mạng con `/21` để gửi gói tin đánh thức server (`FLAG{172.28.143.255}`).
- **Lab 3: Cisco Firewall ACL Exploit**: Phân tích danh sách Extended ACL để tìm cổng TCP duy nhất có thể đi qua tường lửa (`FLAG{tcp_port_443_https}`).
- **Lab 4: OSPF Metric Shortest Path**: Tính toán tổng Cost OSPF của tuyến đường ngắn nhất để cắm cờ (`FLAG{cost_2_path_acd}`).
- **Lab 5: Rogue DHCP Server Hunt**: Điều tra bảng DHCP Snooping Binding để phát hiện địa chỉ MAC kẻ giả mạo (`FLAG{F4:0F:24:99:AA:BB}`).
- **Lab 6: TCP 3-Way Handshake Cracking**: Tính toán chính xác giá trị số xác nhận $AckN = ISN + 1$ trong gói SYN-ACK (`FLAG{ack_1001}`).
- **Lab 7: REST API Token Extraction**: Nhận diện HTTP Method chuẩn (POST) gửi trong API Cisco DNA Center (`FLAG{http_post_token}`).
- **Lab 8: Master Flag: Longest Prefix Match**: Áp dụng luật tiền tố dài nhất để xác định Next-Hop chuyển tiếp gói tin (`FLAG{next_hop_d_prefix_26}`).
- **Terminal CLI Tích Hợp**: Gõ các lệnh `help`, `list`, `cat`, `hint`, `flag <FLAG{...}>`, `clear` trực tiếp trên cửa sổ điều khiển.

### 3. 🎮 Cyber Runner (Game Vượt Chướng Ngại Vật & Giao Thức Hồi Sinh) - NÂNG CẤP TOÀN DIỆN
- **Màn hình Trò chơi Chuẩn Công Thái Học & Toàn Màn Hình (Locked Height & Fullscreen)**:
  - Khóa cố định chiều cao chuẩn 480px trên máy tính (420px trên di động) giúp khung game ổn định tuyệt đối, không bị xê dịch hay kéo giãn trang web khi cuộn.
  - Phá vỡ giới hạn chiều ngang, trải rộng full 100% chiều rộng màn hình.
  - **Chế độ Toàn màn hình (Fullscreen Mode - F11 / Nút ⛶)**: Mở rộng 100vw × 100vh không viền khi người chơi muốn đắm chìm vào cuộc đua.
- **Hệ Thống 4 Cấp Độ Đường Truyền Rõ Ràng & Đếm Ngược Thời Gian (Timer)**:
  - 🥉 **Cấp 1 • Tân Binh Cáp Đồng (10BASE-T)**: Tốc độ 5.0 êm dịu, **25 giây đếm ngược**, chướng ngại thưa (gap 105-145), 4 Mạng khởi đầu, câu hỏi Router Gateway mức *Nhận biết* (x1.0 điểm).
  - 🥈 **Cấp 2 • Kỹ Sư Cáp Quang (Gigabit Ethernet)**: Tốc độ 6.8 tiêu chuẩn, **18 giây đếm ngược**, chướng ngại nhịp nhàng, 3 Mạng, câu hỏi mức *Thông hiểu* (x1.5 điểm).
  - 🥇 **Cấp 3 • Chuyên Gia Định Tuyến (10G Backbone)**: Tốc độ 8.5 nhanh, **12 giây đếm ngược**, chướng ngại dày đặc (gap 55-88), tường lửa cao tầng, câu hỏi mức *Vận dụng* (x2.0 điểm).
  - ⚡ **Cấp 4 • Siêu Thần Mạng Cyber God (Quantum Overclock)**: Tốc độ 10.5 cực nhanh, **8 giây đếm ngược cực gắt**, chướng ngại dồn dập (gap 40-66), 2 Mạng & 0 Khiên khởi đầu, câu hỏi mức *Vận dụng cao & CCNA quốc tế* (x3.0 điểm).
- **Thanh Tiến Trình Đếm Ngược & Thưởng Tốc Độ**:
  - Thanh năng lượng thời gian co dần kèm badge số giây còn lại (`⏱️ 18s`), nhấp nháy báo động đỏ khi sắp hết giờ ($\le 4s$).
  - Trả lời đúng càng nhanh càng được cộng thêm **Điểm Thưởng Tốc Độ** (`+15đ / giây còn lại`).
  - Hết thời gian: Gói tin bị quá hạn TTL (Gateway Timeout), trừ 1 Mạng và hiển thị đáp án đúng để học tập!
- **Cơ chế Câu Hỏi Chọn Nhiều Đáp Án Chuẩn Xác**:
  - Đối với các câu hỏi có nhiều đáp án (ví dụ: Chọn 3 đáp án), người chơi **bắt buộc phải chọn đủ và đúng tất cả các đáp án** mới được tính điểm/vượt trạm. Có bộ đếm và giao diện chọn/bỏ chọn trực quan.
- **Tính năng Điều khiển & Tạm dừng linh hoạt**:
  - Hỗ trợ đổi cấp độ ngay trong khi chơi (`⚙️ Cấp độ`).
  - Hỗ trợ Tạm dừng game (`P` hoặc `⏸️ Tạm dừng`) để nghỉ ngơi hoặc đổi cấp độ giữa chừng.
- **⚡ Giao Thức Hồi Sinh (Revival Protocol)**: Khi mất hết mạng (0 HP), còi báo động khẩn cấp vang lên; trả lời đúng câu hỏi thử thách hồi sinh để khởi động lại máy chủ, phục hồi **2 Mạng** và nhận **Khiên bất tử** tiếp tục cuộc đua!

### 4. 📚 Ngân Hàng 331 Câu Hỏi Chuẩn Hóa Kèm Lý Thuyết Chi Tiết
- **Chương 1**: Tổng quan về Mạng máy tính và Internet (66 câu)
- **Chương 2**: Chuyển mạch Ethernet & Tầng Liên kết dữ liệu (51 câu)
- **Chương 3**: Định tuyến IP & Bài toán chia mạng con IPv4 / IPv6 (94 câu)
- **Chương 4**: Tầng giao vận TCP/UDP & Cơ chế truyền tin cậy (60 câu)
- **Chương 5**: Bộ Đề Luyện Thi CCNA 200-301 Quốc Tế (60 câu)
- **Lý thuyết chi tiết**: Giải thích bản chất tại sao đáp án đó đúng, phân tích tại sao phương án khác sai, kèm công thức tính toán mạng con từng bước.

### 5. 🎨 Giao Diện Cyber Glassmorphism & Web Audio API
- Thiết kế Glassmorphism (`backdrop-filter: blur(20px)`), viền neon phát sáng (Cyan, Indigo, Emerald, Rose).
- Background Canvas mô phỏng các nút mạng và luồng xung dữ liệu tương tác chuyển động liên tục.
- Tự động tổng hợp âm thanh bằng **Web Audio API** (ting ting đúng, tiếng trầm cảnh báo khi sai, tiếng còi hú hồi sinh, âm thanh laser bắn hạ đối thủ, âm thanh cờ CTF giải mã thành công).

---

## 🚀 Cách Sử Dụng

### Mở trực tiếp (Không cần cài đặt)
Nhấp đúp chuột trực tiếp vào file **`start.command`** hoặc **`index.html`** trong thư mục này. Trình duyệt của bạn sẽ mở ngay lập tức.

### Hoặc chạy qua Terminal:
```bash
cd /Users/user/Downloads/MMT
open index.html
```

---

## 📁 Cấu Trúc Thư Mục

```
MMT/
├── index.html                    # Giao diện web trung tâm của toàn bộ hệ thống
├── start.command                 # Phím tắt mở nhanh 1 chạm trên macOS
├── css/
│   └── style.css                 # Hệ thống giao diện Glassmorphism, Neon Gradient & Animation
├── js/
│   ├── sound.js                  # Bộ phát âm thanh Web Audio API (Laser, Hit, Flag, Alarm, Fanfare)
│   ├── network_bg.js             # Canvas nền hiệu ứng mạng máy tính tương tác
│   ├── quiz_data.js              # Bộ dữ liệu 331 câu hỏi đầy đủ đáp án & lý thuyết
│   ├── quiz.js                   # Engine quản lý bài thi, đếm giờ, chấm điểm & xem lại
│   ├── game.js                   # Engine game Cyber Packet Runner & Giao thức Hồi sinh
│   ├── battle.js                 # Engine Đấu Trường Đối Kháng 1v1 (PvE vs AI / PvP 2 người)
│   ├── ctf.js                    # Engine Thử Thách CTF 8 phòng Lab & Cyber Terminal CLI
│   └── app.js                    # Điều hướng tab, ngân hàng 331 câu & Flashcards
├── data/
│   └── quiz_data.json            # File dữ liệu JSON chuẩn hóa
├── docs/
│   ├── tr_c_nghi_m_m_ng_m_y_t_nh_ch_ng_1_n_4.md  # File MD đầy đủ 5 chương kèm đáp án & lý thuyết
│   └── *.pdf                     # 4 file đề thi & đáp án gốc của Chương 1, 2, 3, 4
├── build_enhanced_dataset.py     # Script tự động trích xuất, chuẩn hóa & tạo lý thuyết
└── extract_quiz.py               # Kịch bản trích xuất PDF gốc
```
