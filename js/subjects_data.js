/**
 * Multi-Subject Registry & Question Bank Manager
 * Supports:
 * - mmt: Mạng Máy Tính & CCNA (331 questions)
 * - anm: An Ninh Mạng & An Toàn Thông Tin (20 questions + extensible)
 * - toan: Toán Rời Rạc & Lý Thuyết Đồ Thị (15 questions + extensible)
 * - hdo: Hệ Điều Hành & Kiến Trúc Máy Tính (15 questions + extensible)
 */

window.DEFAULT_SUBJECTS_METADATA = {
    mmt: {
        id: 'mmt',
        name: 'Mạng Máy Tính & CCNA',
        shortName: 'Mạng Máy Tính',
        code: 'NET101',
        icon: '🌐',
        themeColor: '#06b6d4',
        accentGradient: 'from-cyan-500 to-blue-600',
        badgeClass: 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300',
        description: 'Kiến trúc TCP/IP, 7 tầng OSI, định tuyến OSPF/BGP, chia mạng con IPv4/IPv6, cấu hình Switch/Router Cisco CCNA 200-301.',
        chapters: [
            { id: 1, name: 'Chương 1: Tổng quan về Mạng máy tính và Internet' },
            { id: 2, name: 'Chương 2: Tầng Ứng Dụng (Application Layer)' },
            { id: 3, name: 'Chương 3: Tầng Giao Vận (Transport Layer)' },
            { id: 4, name: 'Chương 4: Tầng Mạng & Định Tuyến (Network Layer)' },
            { id: 5, name: 'Chương 5: Tầng Liên Kết Dữ Liệu & CCNA (Data Link & Security)' }
        ]
    },
    anm: {
        id: 'anm',
        name: 'An Ninh Mạng & An Toàn Thông Tin',
        shortName: 'An Ninh Mạng',
        code: 'SEC201',
        icon: '🛡️',
        themeColor: '#f43f5e',
        accentGradient: 'from-rose-500 to-red-600',
        badgeClass: 'border-rose-500/40 bg-rose-950/60 text-rose-300',
        description: 'Mật mã học đối xứng & bất đối xứng, chữ ký số PKI, phân tích tấn công (MITM, DDoS, SQLi, XSS), Tường lửa Stateful, IPS/IDS và Zero Trust.',
        chapters: [
            { id: 1, name: 'Chương 1: Tổng quan ATTT & Mô hình Tam giác CIA' },
            { id: 2, name: 'Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)' },
            { id: 3, name: 'Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)' },
            { id: 4, name: 'Chương 4: Phòng Thủ, Tường Lửa & VPN (Defense & Firewalls)' },
            { id: 5, name: 'Chương 5: Quản Lý Rủi Ro & Tiêu Chuẩn Bảo Mật (Risk & Standards)' }
        ]
    },
    toan: {
        id: 'toan',
        name: 'Toán Rời Rạc & Lý Thuyết Đồ Thị',
        shortName: 'Toán Rời Rạc',
        code: 'MAT102',
        icon: '📐',
        themeColor: '#8b5cf6',
        accentGradient: 'from-purple-500 to-indigo-600',
        badgeClass: 'border-purple-500/40 bg-purple-950/60 text-purple-300',
        description: 'Cơ sở logic mệnh đề & vị từ, lý thuyết tập hợp, giải thuật đếm tổ hợp Dirichlet, đồ thị Euler, chu trình Hamilton và thuật toán Dijkstra, Kruskal.',
        chapters: [
            { id: 1, name: 'Chương 1: Cơ Sở Logic Mệnh Đề & Vị Từ' },
            { id: 2, name: 'Chương 2: Lý Thuyết Tập Hợp & Ánh Xạ' },
            { id: 3, name: 'Chương 3: Phép Đếm & Đại Số Tổ Hợp' },
            { id: 4, name: 'Chương 4: Lý Thuyết Đồ Thị & Đường Đi' },
            { id: 5, name: 'Chương 5: Cây Khung & Các Thuật Toán Tối Ưu' }
        ]
    },
    hdo: {
        id: 'hdo',
        name: 'Hệ Điều Hành & Kiến Trúc Máy Tính',
        shortName: 'Hệ Điều Hành',
        code: 'OS202',
        icon: '⚡',
        themeColor: '#10b981',
        accentGradient: 'from-emerald-500 to-teal-600',
        badgeClass: 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300',
        description: 'Quản lý tiến trình (Process), luồng (Thread), thuật toán điều độ CPU, đồng bộ bế tắc (Deadlock), bộ nhớ ảo (Paging/LRU), hệ thống tệp và DMA.',
        chapters: [
            { id: 1, name: 'Chương 1: Tổng Quan Hệ Điều Hành & Cấu Trúc Máy Tính' },
            { id: 2, name: 'Chương 2: Quản Lý Tiến Trình, Luồng & Điều Độ CPU' },
            { id: 3, name: 'Chương 3: Đồng Bộ Hóa & Bế Tắc (Deadlock)' },
            { id: 4, name: 'Chương 4: Quản Lý Bộ Nhớ & Bộ Nhớ Ảo (Virtual Memory)' },
            { id: 5, name: 'Chương 5: Hệ Thống Tệp Tin (File System) & Vào/Ra (I/O)' }
        ]
    }
};

window.DEFAULT_EXTRA_QUESTIONS = {
    anm: [
  {
    "id": 1001,
    "chapter": "Chương 1: Tổng quan ATTT & Mô hình Tam giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Mô hình bảo mật thông tin kinh điển CIA Triad bao gồm ba yếu tố cốt lõi nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Confidentiality (Bảo mật), Integrity (Toàn vẹn), Availability (Khả dụng)",
      "B. Confidentiality (Bảo mật), Identity (Định danh), Authentication (Xác thực)",
      "C. Control (Kiểm soát), Integrity (Toàn vẹn), Access (Truy cập)",
      "D. Cryptography (Mật mã), Inspection (Giám sát), Authorization (Ủy quyền)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Tam giác CIA (CIA Triad):** Ba trụ cột nền tảng của an toàn thông tin gồm: Confidentiality (Tính bảo mật - chỉ người được phép mới đọc được dữ liệu), Integrity (Tính toàn vẹn - dữ liệu không bị sửa đổi trái phép), và Availability (Tính khả dụng - hệ thống sẵn sàng phục vụ khi cần)."
  },
  {
    "id": 1002,
    "chapter": "Chương 1: Tổng quan ATTT & Mô hình Tam giác CIA",
    "chapterId": 1,
    "topic": "Khái niệm An toàn thông tin",
    "question": "Tính năng 'Non-repudiation' (Chống chối bỏ) trong an toàn thông tin đảm bảo điều gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đảm bảo dữ liệu được truyền đi với tốc độ cao nhất",
      "B. Người gửi hoặc người thực hiện giao dịch không thể phủ nhận hành động mình đã làm",
      "C. Tự động mã hóa đường truyền ở tầng vật lý",
      "D. Ngăn chặn triệt để mọi cuộc tấn công từ chối dịch vụ DoS"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "**Tính chống chối bỏ (Non-repudiation):** Đảm bảo chủ thể thực hiện hành vi gửi dữ liệu hoặc giao dịch không thể chối bỏ trách nhiệm. Tính chất này thường đạt được thông qua Chữ ký số (Digital Signature) và hệ thống lưu vết nhật ký kiểm toán (Audit Logs)."
  },
  {
    "id": 1003,
    "chapter": "Chương 1: Tổng quan ATTT & Mô hình Tam giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Một cuộc tấn công từ chối dịch vụ (DDoS) làm tê liệt máy chủ Web ngân hàng vi phạm nghiêm trọng nhất vào thuộc tính nào của mô hình CIA?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Confidentiality (Tính bảo mật)",
      "B. Integrity (Tính toàn vẹn)",
      "C. Availability (Tính khả dụng)",
      "D. Accountability (Tính trách nhiệm)"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tấn công từ chối dịch vụ (DoS/DDoS) nhằm mục đích làm cạn kiệt tài nguyên mạng hoặc máy chủ, khiến người dùng hợp pháp không thể truy cập dịch vụ, do đó vi phạm trực tiếp tính **Availability (Tính khả dụng)**."
  },
  {
    "id": 1004,
    "chapter": "Chương 1: Tổng quan ATTT & Mô hình Tam giác CIA",
    "chapterId": 1,
    "topic": "Các hình thức đe dọa",
    "question": "Những mục nào sau đây là các yếu tố trong mô hình xác thực AAA (Chọn 3 đáp án đúng)?",
    "level": "Thông hiểu",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Authentication (Xác thực danh tính)",
      "B. Authorization (Phân quyền truy cập)",
      "C. Accounting (Ghi nhật ký và thống kê sử dụng)",
      "D. Availability (Tính khả dụng)"
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Mô hình **AAA** trong bảo mật mạng bao gồm: Authentication (Bạn là ai?), Authorization (Bạn được phép làm những gì?), và Accounting (Bạn đã làm những gì và dùng bao nhiêu tài nguyên?)."
  },
  {
    "id": 1005,
    "chapter": "Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)",
    "chapterId": 2,
    "topic": "Mã hóa đối xứng & bất đối xứng",
    "question": "Thuật toán nào sau đây thuộc nhóm thuật toán mã hóa đối xứng (Symmetric Encryption)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. AES (Advanced Encryption Standard)",
      "B. RSA (Rivest–Shamir–Adleman)",
      "C. ECC (Elliptic Curve Cryptography)",
      "D. Diffie-Hellman Key Exchange"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**AES, DES, 3DES, ChaCha20** là các thuật toán mã hóa đối xứng (dùng chung một khóa bí mật cho cả mã hóa và giải mã). Trong khi RSA, ECC, ElGamal là các thuật toán mã hóa bất đối xứng (dùng cặp Public Key và Private Key)."
  },
  {
    "id": 1006,
    "chapter": "Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)",
    "chapterId": 2,
    "topic": "Hàm băm mật mã (Cryptographic Hash)",
    "question": "Đặc điểm cơ bản của một hàm băm mật mã học (Cryptographic Hash Function) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đầu vào có kích thước bất kỳ, đầu ra luôn có độ dài cố định và không thể đảo ngược (hàm một chiều)",
      "B. Có thể giải mã ngược lại thông điệp gốc khi biết khóa bí mật",
      "C. Đầu ra luôn có kích thước tỷ lệ thuận với kích thước thông điệp đầu vào",
      "D. Chỉ dùng để nén dữ liệu chứ không có ý nghĩa trong bảo mật"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hàm băm mật mã (như SHA-256, MD5) nhận đầu vào có độ dài tùy ý và biến đổi thành giá trị băm (digest) có **độ dài cố định**, có tính chất một chiều (kháng tiền ảnh - Pre-image resistance) và kháng xung đột (Collision resistance)."
  },
  {
    "id": 1007,
    "chapter": "Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)",
    "chapterId": 2,
    "topic": "Chữ ký số (Digital Signature)",
    "question": "Trong quy trình ký số điện tử (Digital Signature), người gửi sử dụng khóa nào để tạo chữ ký số cho thông điệp?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. Khóa công khai (Public Key) của người nhận",
      "B. Khóa riêng bí mật (Private Key) của chính người gửi",
      "C. Khóa công khai (Public Key) của chính người gửi",
      "D. Khóa chia sẻ đối xứng phiên (Session Key)"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Để tạo chữ ký số, người gửi dùng **Khóa riêng (Private Key) của mình** để mã hóa giá trị băm của thông điệp. Người nhận sẽ dùng **Khóa công khai (Public Key) của người gửi** để kiểm tra và xác thực chữ ký."
  },
  {
    "id": 1008,
    "chapter": "Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)",
    "chapterId": 2,
    "topic": "Hạ tầng khóa công khai PKI",
    "question": "Tổ chức CA (Certificate Authority) trong hạ tầng PKI có vai trò chính là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lưu trữ toàn bộ Private Key của tất cả người dùng trên Internet",
      "B. Ký số xác nhận và cấp chứng chỉ số (Digital Certificate) chứng thực danh tính cho thực thể",
      "C. Giám sát băng thông và chặn lưu lượng mã độc qua mạng",
      "D. Quản lý DNS root servers cho toàn cầu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "**Certificate Authority (CA):** Là bên thứ ba đáng tin cậy chịu trách nhiệm ký số và cấp phát Chứng thư số (như chứng chỉ SSL/TLS X.509) để ràng buộc khóa công khai (Public Key) với danh tính của một tổ chức/cá nhân."
  },
  {
    "id": 1009,
    "chapter": "Chương 2: Mật Mã Học & Chữ Ký Số (Cryptography & PKI)",
    "chapterId": 2,
    "topic": "Thuật toán RSA",
    "question": "Độ an toàn của thuật toán mã hóa khóa công khai RSA dựa trên độ phức tạp tính toán của bài toán toán học nào?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. Bài toán phân tích một số nguyên cực lớn thành tích các thừa số nguyên tố (Integer Factorization)",
      "B. Bài toán Logarit rời rạc (Discrete Logarithm)",
      "C. Bài toán đường đi ngắn nhất đồ thị",
      "D. Bài toán mã hóa dịch chuyển Caesar"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Thuật toán **RSA** dựa trên bài toán phân tích một hợp số lớn $N = p \\times q$ thành tích của hai số nguyên tố rất lớn $p$ và $q$. Việc nhân hai số nguyên tố rất dễ, nhưng việc phân tích ngược lại đòi hỏi thời gian tính toán khổng lồ."
  },
  {
    "id": 1010,
    "chapter": "Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)",
    "chapterId": 3,
    "topic": "Tấn công Web Application",
    "question": "Kỹ thuật tấn công chèn các câu lệnh truy vấn độc hại vào ô nhập liệu để thao túng cơ sở dữ liệu phía sau gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. SQL Injection (SQLi)",
      "B. Cross-Site Scripting (XSS)",
      "C. Cross-Site Request Forgery (CSRF)",
      "D. Server-Side Request Forgery (SSRF)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**SQL Injection (SQLi):** Xảy ra khi ứng dụng web không làm sạch dữ liệu đầu vào người dùng trước khi ghép vào câu truy vấn cơ sở dữ liệu SQL, cho phép kẻ tấn công đọc lén, sửa đổi hoặc xóa dữ liệu nhạy cảm."
  },
  {
    "id": 1011,
    "chapter": "Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)",
    "chapterId": 3,
    "topic": "Tấn công Web Application",
    "question": "Những biện pháp nào sau đây giúp phòng chống hiệu quả lỗ hổng SQL Injection (Chọn 2 đáp án đúng)?",
    "level": "Vận dụng",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Sử dụng Prepared Statements (Parameterized Queries)",
      "B. Sử dụng ORM hoặc Stored Procedures có tham số an toàn",
      "C. Đổi cổng mặc định của dịch vụ Web từ 80 sang 8080",
      "D. Tăng tốc độ đường truyền mạng lên 10Gbps"
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Biện pháp cốt lõi để loại trừ triệt để SQL Injection là dùng **Parameterized Queries (Prepared Statements)** tách biệt hoàn toàn giữa câu lệnh truy vấn và dữ liệu đầu vào, hoặc dùng **ORM an toàn**."
  },
  {
    "id": 1012,
    "chapter": "Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)",
    "chapterId": 3,
    "topic": "Tấn công mạng",
    "question": "Kẻ tấn công giả mạo địa chỉ MAC của Router Gateway gửi gói tin ARP Reply vào mạng LAN nhằm mục đích gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tấn công đầu độc bảng ARP (ARP Spoofing / Poisoning) để thực hiện nghe lén Man-in-the-Middle (MITM)",
      "B. Tăng băng thông mạng cho toàn bộ các máy trạm",
      "C. Khởi động lại hệ điều hành của Switch",
      "D. Kích hoạt tính năng DHCP Snooping trên Router"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**ARP Spoofing:** Lợi dụng việc giao thức ARP không có cơ chế xác thực, kẻ tấn công gửi phản hồi ARP giả mạo để gán địa chỉ MAC của mình với IP của Default Gateway, từ đó chặn bắt và nghe lén toàn bộ lưu lượng dữ liệu (Man-in-the-Middle)."
  },
  {
    "id": 1013,
    "chapter": "Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)",
    "chapterId": 3,
    "topic": "Mã độc Malware",
    "question": "Loại mã độc tự động mã hóa toàn bộ tệp tin quan trọng của nạn nhân bằng thuật toán mã hóa mạnh rồi đòi tiền chuộc (Bitcoin) gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ransomware (Mã độc tống tiền)",
      "B. Spyware (Phần mềm gián điệp)",
      "C. Adware (Phần mềm quảng cáo)",
      "D. Rootkit (Mã độc ẩn giấu quyền root)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Ransomware:** Phần mềm độc hại mã hóa dữ liệu của người dùng hoặc khóa màn hình hệ thống và hiển thị thông báo yêu cầu nạn nhân trả tiền chuộc để lấy khóa giải mã."
  },
  {
    "id": 1014,
    "chapter": "Chương 3: Các Hình Thức Tấn Công & Mã Độc (Cyber Attacks & Malware)",
    "chapterId": 3,
    "topic": "Kỹ thuật tấn công Social Engineering",
    "question": "Phương thức tấn công gửi email giả mạo các tổ chức uy tín (ngân hàng, cơ quan thuế, Apple, Google) chứa liên kết đăng nhập giả để lừa nạn nhân cung cấp mật khẩu gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phishing (Tấn công giả mạo lừa đảo)",
      "B. Brute-force attack",
      "C. Buffer Overflow",
      "D. Side-channel attack"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Phishing:** Hình thức tấn công phi kỹ thuật (Social Engineering) lừa gạt người dùng bằng email, tin nhắn hoặc website mạo danh để đánh cắp thông tin đăng nhập, mã OTP hoặc số thẻ tín dụng."
  },
  {
    "id": 1015,
    "chapter": "Chương 4: Phòng Thủ, Tường Lửa & VPN (Defense & Firewalls)",
    "chapterId": 4,
    "topic": "Tường lửa Firewall",
    "question": "Sự khác biệt căn bản giữa Tường lửa Stateful Inspection và Packet Filtering Firewall là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Stateful Firewall theo dõi và duy trì trạng thái của từng phiên kết nối (Connection State Table)",
      "B. Packet Filtering Firewall chỉ hoạt động ở tầng ứng dụng Layer 7",
      "C. Stateful Firewall không có khả năng lọc địa chỉ IP",
      "D. Packet Filtering Firewall yêu cầu máy chủ phải có chứng chỉ số SSL"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Stateful Inspection Firewall** lưu giữ bảng trạng thái phiên (State Table - ghi nhận TCP SYN, SYN-ACK, ESTABLISHED). Nhờ đó, nó tự động cho phép lưu lượng phản hồi hợp lệ quay trở lại mà không cần mở cổng tràn lan như Packet Filtering Firewall."
  },
  {
    "id": 1016,
    "chapter": "Chương 4: Phòng Thủ, Tường Lửa & VPN (Defense & Firewalls)",
    "chapterId": 4,
    "topic": "Hệ thống IDS / IPS",
    "question": "Điểm khác biệt quan trọng nhất giữa hệ thống IDS (Intrusion Detection System) và IPS (Intrusion Prevention System) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. IDS chỉ phát hiện và cảnh báo thụ động, còn IPS nằm trên đường truyền (In-line) và có thể tự động chặn lưu lượng độc hại",
      "B. IDS chỉ hoạt động trên mạng Wifi, còn IPS chỉ hoạt động trên mạng có dây",
      "C. IDS dùng mã hóa RSA, còn IPS dùng mã hóa AES",
      "D. IDS là phần cứng, còn IPS bắt buộc là phần mềm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**IDS (Phát hiện xâm nhập):** Giám sát lưu lượng thụ động qua cổng Span/Mirror và phát cảnh báo khi thấy dấu hiệu bất thường. **IPS (Ngăn chặn xâm nhập):** Đặt trực tiếp nối tiếp trên luồng mạng (in-line) để có thể drop gói tin độc hại ngay lập tức."
  },
  {
    "id": 1017,
    "chapter": "Chương 4: Phòng Thủ, Tường Lửa & VPN (Defense & Firewalls)",
    "chapterId": 4,
    "topic": "Mạng riêng ảo VPN & IPSec",
    "question": "Trong bộ giao thức bảo mật IPSec, giao thức nào cung cấp cả hai tính năng: mã hóa bảo mật dữ liệu (Confidentiality) VÀ xác thực toàn vẹn (Integrity)?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. ESP (Encapsulating Security Payload)",
      "B. AH (Authentication Header)",
      "C. IKE (Internet Key Exchange)",
      "D. L2TP (Layer 2 Tunneling Protocol)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**ESP (IP Protocol 50):** Cung cấp cả mã hóa dữ liệu (Confidentiality) và tính toàn vẹn, xác thực nguồn gốc. Trong khi **AH (IP Protocol 51)** chỉ cung cấp xác thực và toàn vẹn chứ **KHÔNG** mã hóa dữ liệu."
  },
  {
    "id": 1018,
    "chapter": "Chương 4: Phòng Thủ, Tường Lửa & VPN (Defense & Firewalls)",
    "chapterId": 4,
    "topic": "Kiến trúc Zero Trust",
    "question": "Nguyên lý cốt lõi 'Never Trust, Always Verify' thuộc về kiến trúc bảo mật nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Zero Trust Architecture (ZTA)",
      "B. Castle-and-Moat (Bảo mật bao quanh truyền thống)",
      "C. DMZ (Demilitarized Zone)",
      "D. NAC (Network Access Control)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Mô hình Zero Trust:** Không tin tưởng bất kỳ ai hay thiết bị nào theo mặc định, dù họ đang nằm bên trong hay bên ngoài mạng nội bộ; mọi yêu cầu truy cập đều phải được xác thực, cấp phép và mã hóa liên tục."
  },
  {
    "id": 1019,
    "chapter": "Chương 5: Quản Lý Rủi Ro & Tiêu Chuẩn Bảo Mật (Risk & Standards)",
    "chapterId": 5,
    "topic": "Tiêu chuẩn ISO 27001",
    "question": "Tiêu chuẩn quốc tế phổ biến nhất quy định về Hệ thống Quản lý An toàn Thông tin (ISMS) là tiêu chuẩn nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. ISO/IEC 27001",
      "B. ISO 9001",
      "C. IEEE 802.11",
      "D. RFC 1918"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**ISO/IEC 27001:** Là tiêu chuẩn quốc tế quy định các yêu cầu đối với việc thiết lập, triển khai, duy trì và liên tục cải tiến Hệ thống Quản lý An toàn Thông tin (ISMS - Information Security Management System)."
  },
  {
    "id": 1020,
    "chapter": "Chương 5: Quản Lý Rủi Ro & Tiêu Chuẩn Bảo Mật (Risk & Standards)",
    "chapterId": 5,
    "topic": "Đánh giá an toàn thông tin",
    "question": "Thuật ngữ 'Penetration Testing' (PenTest - Kiểm thử xâm nhập) dùng để chỉ hành động nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mô phỏng có kiểm soát các cuộc tấn công mạng thực tế nhằm tìm kiếm và khai thác lỗ hổng bảo mật",
      "B. Cài đặt hệ điều hành Windows mới cho toàn bộ máy tính công ty",
      "C. Mua sắm thêm máy chủ dự phòng khi hệ thống quá tải",
      "D. Kiểm tra tốc độ đọc/ghi của ổ cứng SSD"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Penetration Testing (PenTest):** Phương pháp đánh giá an ninh bằng cách đóng vai tin tặc (White Hat Hacker) để mô phỏng tấn công vào hệ thống, từ đó phát hiện các điểm yếu tiềm tàng trước khi kẻ xấu lợi dụng."
  }
],
    toan: [
  {
    "id": 2001,
    "chapter": "Chương 1: Cơ Sở Logic Mệnh Đề & Vị Từ",
    "chapterId": 1,
    "topic": "Mệnh đề logic",
    "question": "Trong các câu sau, câu nào là một mệnh đề logic (Proposition)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. 15 là một số nguyên tố.",
      "B. Hôm nay thời tiết có đẹp không?",
      "C. Hãy học bài ngay đi!",
      "D. x + 5 = 12."
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Mệnh đề logic:** Là một khẳng định có giá trị chân lý xác định rõ ràng: hoặc Đúng (True) hoặc Sai (False), không thể vừa đúng vừa sai. Câu '15 là một số nguyên tố' là một mệnh đề (và mang giá trị Sai)."
  },
  {
    "id": 2002,
    "chapter": "Chương 1: Cơ Sở Logic Mệnh Đề & Vị Từ",
    "chapterId": 1,
    "topic": "Phép kéo theo logic",
    "question": "Mệnh đề kéo theo P -> Q chỉ nhận giá trị SAI (False) khi nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. P Đúng (True) và Q Sai (False)",
      "B. P Sai (False) và Q Đúng (True)",
      "C. Cả P và Q đều Sai (False)",
      "D. Cả P và Q đều Đúng (True)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bảng chân trị của phép kéo theo $P \\rightarrow Q$: Mệnh đề chỉ Sai khi tiền đề $P$ Đúng nhưng hệ quả $Q$ lại Sai ($T \\rightarrow F = F$). Trong mọi trường hợp còn lại, $P \\rightarrow Q$ đều Đúng."
  },
  {
    "id": 2003,
    "chapter": "Chương 1: Cơ Sở Logic Mệnh Đề & Vị Từ",
    "chapterId": 1,
    "topic": "Quy tắc De Morgan",
    "question": "Theo luật De Morgan trong logic mệnh đề, phủ định của mệnh đề (P ∧ Q) tương đương logic với mệnh đề nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. ¬P ∨ ¬Q",
      "B. ¬P ∧ ¬Q",
      "C. P ∨ Q",
      "D. ¬(P ∨ Q)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Định luật De Morgan:**\n1. $\\neg(P \\land Q) \\equiv \\neg P \\lor \\neg Q$\n2. $\\neg(P \\lor Q) \\equiv \\neg P \\land \\neg Q$."
  },
  {
    "id": 2004,
    "chapter": "Chương 1: Cơ Sở Logic Mệnh Đề & Vị Từ",
    "chapterId": 1,
    "topic": "Vị từ và Lượng từ",
    "question": "Phủ định của mệnh đề 'Mọi học sinh trong lớp đều có điện thoại thông minh' (∀x, P(x)) là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tồn tại ít nhất một học sinh trong lớp không có điện thoại thông minh (∃x, ¬P(x))",
      "B. Mọi học sinh trong lớp đều không có điện thoại thông minh (∀x, ¬P(x))",
      "C. Không có học sinh nào trong lớp có điện thoại thông minh",
      "D. Có một số học sinh có điện thoại thông minh"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quy tắc phủ định lượng từ: $\\neg(\\forall x, P(x)) \\equiv \\exists x, \\neg P(x)$. Phủ định của 'tất cả đều có' là 'có ít nhất một người không có'."
  },
  {
    "id": 2005,
    "chapter": "Chương 2: Lý Thuyết Tập Hợp & Ánh Xạ",
    "chapterId": 2,
    "topic": "Lực lượng tập hợp",
    "question": "Nếu tập hợp A có 4 phần tử thì tập hợp lũy thừa (tập tất cả các tập con) P(A) có bao nhiêu phần tử?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. 16 phần tử",
      "B. 8 phần tử",
      "C. 12 phần tử",
      "D. 4 phần tử"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Số lượng tập con của một tập hợp có $n$ phần tử là $|P(A)| = 2^n$. Với $n = 4$, ta có $2^4 = 16$ phần tử (bao gồm cả tập rỗng $\\emptyset$ và chính tập $A$)."
  },
  {
    "id": 2006,
    "chapter": "Chương 2: Lý Thuyết Tập Hợp & Ánh Xạ",
    "chapterId": 2,
    "topic": "Ánh xạ (Functions)",
    "question": "Một ánh xạ f: A -> B vừa là đơn ánh (Injective) vừa là toàn ánh (Surjective) thì được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Song ánh (Bijective)",
      "B. Ánh xạ đồng nhất (Identity map)",
      "C. Phép hợp thành (Composition)",
      "D. Ánh xạ ngược (Inverse function)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Một ánh xạ thỏa mãn đồng thời hai tính chất: **Đơn ánh** (các phần tử khác nhau cho ảnh khác nhau) và **Toàn ánh** (mọi phần tử trong tập đích đều có nghịch ảnh) được gọi là **Song ánh (Bijective)**."
  },
  {
    "id": 2007,
    "chapter": "Chương 2: Lý Thuyết Tập Hợp & Ánh Xạ",
    "chapterId": 2,
    "topic": "Quan hệ tương đương",
    "question": "Một quan hệ R trên tập A được gọi là một quan hệ tương đương (Equivalence Relation) khi thỏa mãn 3 tính chất nào (Chọn 3 đáp án đúng)?",
    "level": "Thông hiểu",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Tính phản xạ (Reflexive: a R a)",
      "B. Tính đối xứng (Symmetric: a R b -> b R a)",
      "C. Tính bắc cầu (Transitive: a R b và b R c -> a R c)",
      "D. Tính phản đối xứng (Antisymmetric)"
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Quan hệ tương đương bắt buộc phải thỏa mãn 3 tính chất: **Phản xạ**, **Đối xứng**, và **Bắc cầu**. (Nếu thỏa mãn phản xạ, phản đối xứng và bắc cầu thì đó là quan hệ thứ tự)."
  },
  {
    "id": 2008,
    "chapter": "Chương 3: Phép Đếm & Đại Số Tổ Hợp",
    "chapterId": 3,
    "topic": "Tổ hợp và Chỉnh hợp",
    "question": "Từ một nhóm gồm 10 sinh viên, có bao nhiêu cách chọn ra một ban cán sự gồm 3 bạn giữ các chức vụ phân biệt: Lớp trưởng, Lớp phó, Bí thư?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. 720 cách (A₁₀³)",
      "B. 120 cách (C₁₀³)",
      "C. 30 cách",
      "D. 1000 cách"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vì 3 chức vụ có phân biệt thứ tự (Lớp trưởng, Lớp phó, Bí thư), đây là bài toán tính số **chỉnh hợp chập 3 của 10**: $A_{10}^3 = \\frac{10!}{(10-3)!} = 10 \\times 9 \\times 8 = 720$ cách."
  },
  {
    "id": 2009,
    "chapter": "Chương 3: Phép Đếm & Đại Số Tổ Hợp",
    "chapterId": 3,
    "topic": "Nguyên lý Dirichlet",
    "question": "Cần chọn ngẫu nhiên ít nhất bao nhiêu người để chắc chắn có ít nhất 2 người có cùng tháng sinh (trong 12 tháng của năm)?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. 13 người",
      "B. 12 người",
      "C. 24 người",
      "D. 365 người"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Theo nguyên lý chuồng bồ câu (Dirichlet): Có 12 tháng sinh (12 chuồng). Nếu chọn 13 người (13 chú chim), ắt phải có ít nhất $\\lceil 13/12 \\rceil = 2$ người có cùng tháng sinh."
  },
  {
    "id": 2010,
    "chapter": "Chương 4: Lý Thuyết Đồ Thị & Đường Đi",
    "chapterId": 4,
    "topic": "Định lý bắt tay",
    "question": "Theo Định lý bắt tay (Handshaking Theorem) trong đồ thị vô hướng G = (V, E), tổng bậc của tất cả các đỉnh bằng bao nhiêu?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bằng 2 lần số cạnh (2|E|)",
      "B. Bằng số cạnh (|E|)",
      "C. Bằng số đỉnh bình phương (|V|²)",
      "D. Bằng số đỉnh trừ 1 (|V| - 1)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Định lý bắt tay:** $\\sum_{v \\in V} \\deg(v) = 2|E|$. Vì mỗi cạnh nối giữa hai đỉnh sẽ đóng góp 1 đơn vị bậc cho mỗi đỉnh ở hai đầu mút, tổng bậc của toàn bộ đồ thị luôn là một số chẵn và gấp đôi số cạnh."
  },
  {
    "id": 2011,
    "chapter": "Chương 4: Lý Thuyết Đồ Thị & Đường Đi",
    "chapterId": 4,
    "topic": "Đồ thị Euler",
    "question": "Một đồ thị vô hướng liên thông có chu trình Euler (Eulerian Circuit) khi và chỉ khi điều kiện nào sau đây thỏa mãn?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. Tất cả các đỉnh của đồ thị đều có bậc chẵn",
      "B. Đồ thị có đúng 2 đỉnh bậc lẻ",
      "C. Tất cả các đỉnh của đồ thị đều có bậc lẻ",
      "D. Số cạnh bằng số đỉnh trừ 1"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Định lý Euler:** Đồ thị vô hướng liên thông có Chu trình Euler (đi qua mỗi cạnh đúng 1 lần và quay về điểm xuất phát) khi và chỉ khi **mọi đỉnh của đồ thị đều có bậc chẵn**. (Nếu có đúng 2 đỉnh bậc lẻ thì có Đường đi Euler nhưng không có chu trình Euler)."
  },
  {
    "id": 2012,
    "chapter": "Chương 4: Lý Thuyết Đồ Thị & Đường Đi",
    "chapterId": 4,
    "topic": "Chu trình Hamilton",
    "question": "Sự khác biệt căn bản giữa Đường đi Euler và Đường đi Hamilton là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đường đi Euler đi qua mỗi CẠNH đúng 1 lần; Đường đi Hamilton đi qua mỗi ĐỈNH đúng 1 lần",
      "B. Đường đi Euler chỉ áp dụng cho cây, còn Hamilton áp dụng cho đồ thị phẳng",
      "C. Đường đi Euler đòi hỏi trọng số dương, còn Hamilton đòi hỏi trọng số âm",
      "D. Cả hai khái niệm này là hoàn toàn giống nhau"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "- **Euler:** Tìm đường đi qua tất cả các **Cạnh (Edges)** đúng một lần.\n- **Hamilton:** Tìm đường đi qua tất cả các **Đỉnh (Vertices)** đúng một lần."
  },
  {
    "id": 2013,
    "chapter": "Chương 5: Cây Khung & Các Thuật Toán Tối Ưu",
    "chapterId": 5,
    "topic": "Đặc trưng của Cây (Tree)",
    "question": "Một cây (Tree) có n đỉnh thì luôn có chính xác bao nhiêu cạnh?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. n - 1 cạnh",
      "B. n cạnh",
      "C. n + 1 cạnh",
      "D. 2n cạnh"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Đặc trưng của Cây:** Một đồ thị vô hướng liên thông không có chu trình (cây) có $n$ đỉnh thì luôn có chính xác $n - 1$ cạnh."
  },
  {
    "id": 2014,
    "chapter": "Chương 5: Cây Khung & Các Thuật Toán Tối Ưu",
    "chapterId": 5,
    "topic": "Cây khung nhỏ nhất (MST)",
    "question": "Hai thuật toán kinh điển nào dùng để tìm Cây khung nhỏ nhất (Minimum Spanning Tree - MST) của đồ thị vô hướng có trọng số (Chọn 2 đáp án)?",
    "level": "Thông hiểu",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Thuật toán Kruskal",
      "B. Thuật toán Prim",
      "C. Thuật toán Bellman-Ford",
      "D. Thuật toán Floyd-Warshall"
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "**Kruskal và Prim** là hai thuật toán tham lam (Greedy) kinh điển dùng để tìm Cây khung nhỏ nhất (MST). Trong khi Bellman-Ford và Floyd-Warshall là các thuật toán tìm đường đi ngắn nhất."
  },
  {
    "id": 2015,
    "chapter": "Chương 5: Cây Khung & Các Thuật Toán Tối Ưu",
    "chapterId": 5,
    "topic": "Giải thuật Dijkstra",
    "question": "Thuật toán Dijkstra được sử dụng để giải quyết bài toán nào trên đồ thị có trọng số không âm?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tìm đường đi ngắn nhất từ một đỉnh nguồn đến tất cả các đỉnh còn lại",
      "B. Tìm chu trình Euler",
      "C. Tìm luồng cực đại trong mạng",
      "D. Tô màu đồ thị với số màu ít nhất"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Thuật toán Dijkstra:** Giải thuật tìm đường đi ngắn nhất từ một đỉnh gốc (Single-Source Shortest Path) đến tất cả các đỉnh còn lại trong đồ thị có trọng số không âm."
  }
],
    hdo: [
  {
    "id": 3001,
    "chapter": "Chương 1: Tổng Quan Hệ Điều Hành & Cấu Trúc Máy Tính",
    "chapterId": 1,
    "topic": "Khái niệm Hệ điều hành",
    "question": "Chức năng cốt lõi nhất của Hệ điều hành (Operating System) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đóng vai trò là cầu nối quản lý phần cứng và cung cấp môi trường chạy cho các chương trình ứng dụng",
      "B. Biên dịch mã nguồn C/C++ thành mã máy",
      "C. Cung cấp nguồn điện cho các linh kiện phần cứng",
      "D. Quét virus tự động trên toàn mạng Internet"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hệ điều hành là phần mềm hệ thống trung gian quản lý tài nguyên phần cứng (CPU, bộ nhớ, thiết bị I/O) và cung cấp giao diện lập trình/môi trường thực thi an toàn cho người dùng và các ứng dụng."
  },
  {
    "id": 3002,
    "chapter": "Chương 1: Tổng Quan Hệ Điều Hành & Cấu Trúc Máy Tính",
    "chapterId": 1,
    "topic": "Chế độ hoạt động Dual-mode",
    "question": "Cơ chế Dual-mode (User Mode và Kernel Mode) trong CPU hiện đại nhằm mục đích chính là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảo vệ hệ thống: Ngăn chặn chương trình người dùng truy cập trực tiếp các chỉ thị nhạy cảm và phần cứng",
      "B. Cho phép máy tính chạy được hai hệ điều hành cùng một lúc",
      "C. Tăng tốc độ xung nhịp CPU lên gấp đôi",
      "D. Chia đôi dung lượng bộ nhớ RAM"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Dual-mode:** Phân chia thành User Mode (dành cho app thông thường, bị hạn chế lệnh đặc quyền) và Kernel/Supervisor Mode (dành cho nhân HĐH, thực thi toàn quyền) để ngăn lỗi ứng dụng làm sập toàn bộ hệ thống."
  },
  {
    "id": 3003,
    "chapter": "Chương 1: Tổng Quan Hệ Điều Hành & Cấu Trúc Máy Tính",
    "chapterId": 1,
    "topic": "System Calls",
    "question": "Để yêu cầu Hệ điều hành thực hiện một tác vụ phần cứng (ví dụ: mở tệp tin, cấp phát bộ nhớ), chương trình người dùng phải sử dụng cơ chế nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lời gọi hệ thống (System Call)",
      "B. Lệnh nhảy vô điều kiện JUMP trong Assembly",
      "C. Gửi tin nhắn Broadcast qua mạng LAN",
      "D. Thay đổi trực tiếp thanh ghi con trỏ lệnh PC"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**System Call:** Giao diện lập trình trung gian cho phép chương trình ở User Mode yêu cầu các dịch vụ của Kernel (như đọc/ghi file `read()`, `write()`, tạo tiến trình `fork()`)."
  },
  {
    "id": 3004,
    "chapter": "Chương 2: Quản Lý Tiến Trình, Luồng & Điều Độ CPU",
    "chapterId": 2,
    "topic": "Tiến trình (Process)",
    "question": "Khối điều khiển tiến trình PCB (Process Control Block) lưu trữ những thông tin nào sau đây (Chọn 3 đáp án đúng)?",
    "level": "Thông hiểu",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Trạng thái tiến trình (Process State: Running, Ready, Waiting...)",
      "B. Định danh tiến trình (PID) và con trỏ lệnh (Program Counter)",
      "C. Các giá trị thanh ghi CPU và thông tin cấp phát bộ nhớ",
      "D. Mật khẩu ngân hàng của người dùng"
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "**PCB (Process Control Block):** Cấu trúc dữ liệu chứa thông tin quản lý một tiến trình gồm: PID, Process State, Program Counter, CPU registers, CPU scheduling info, Memory management info, Accounting & I/O status."
  },
  {
    "id": 3005,
    "chapter": "Chương 2: Quản Lý Tiến Trình, Luồng & Điều Độ CPU",
    "chapterId": 2,
    "topic": "Luồng (Thread)",
    "question": "Các luồng (Threads) trong cùng một tiến trình (Process) dùng chung vùng tài nguyên nào sau đây?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. Không gian địa chỉ bộ nhớ (Mã code, Dữ liệu toàn cục và Heap)",
      "B. Vùng nhớ Stack của từng luồng",
      "C. Tập thanh ghi CPU của từng luồng",
      "D. Bộ đếm chương trình (Program Counter) của từng luồng"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Các luồng trong cùng một tiến trình chia sẻ chung: Mã chương trình (Code), Dữ liệu (Data), Heap và tệp tin mở; nhưng **mỗi luồng có Stack riêng**, Program Counter riêng và tập thanh ghi riêng."
  },
  {
    "id": 3006,
    "chapter": "Chương 2: Quản Lý Tiến Trình, Luồng & Điều Độ CPU",
    "chapterId": 2,
    "topic": "Thuật toán điều độ CPU",
    "question": "Thuật toán điều độ CPU Round-Robin (RR) hoạt động dựa trên cơ chế đặc thù nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cấp cho mỗi tiến trình một khoảng thời gian thực thi cố định gọi là Time Quantum (lượng tử thời gian)",
      "B. Ưu tiên tiến trình có thời gian thực thi ngắn nhất trước",
      "C. Không bao giờ ngắt quyền CPU của tiến trình cho đến khi tiến trình kết thúc",
      "D. Chỉ phục vụ tiến trình nào trả nhiều tiền hơn"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Round-Robin (RR):** Thuật toán chia sẻ thời gian (Time-sharing) cấp cho mỗi tiến trình một lượng tử thời gian (Time Quantum/Slice). Hết thời gian mà chưa xong, tiến trình bị đưa về cuối hàng đợi Ready."
  },
  {
    "id": 3007,
    "chapter": "Chương 3: Đồng Bộ Hóa & Bế Tắc (Deadlock)",
    "chapterId": 3,
    "topic": "Race Condition & Critical Section",
    "question": "Hiện tượng 'Race Condition' (Điều kiện chạy đua) xảy ra khi nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nhiều tiến trình cùng truy cập và sửa đổi dữ liệu dùng chung đồng thời, kết quả cuối cùng phụ thuộc vào thứ tự thực thi",
      "B. Hai máy tính đua xem máy nào truyền tải dữ liệu nhanh hơn qua mạng",
      "C. Bộ nhớ RAM bị cạn kiệt dung lượng",
      "D. CPU đạt 100% công suất hoạt động"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Race Condition:** Xảy ra khi nhiều luồng/tiến trình cùng đọc và ghi vào tài nguyên chia sẻ mà không có cơ chế đồng bộ hóa, dẫn đến tính toàn vẹn dữ liệu bị phá hủy tùy thuộc vào tiến trình nào chạy trước."
  },
  {
    "id": 3008,
    "chapter": "Chương 3: Đồng Bộ Hóa & Bế Tắc (Deadlock)",
    "chapterId": 3,
    "topic": "Điều kiện xảy ra Deadlock",
    "question": "Theo tiêu chuẩn của Coffman, Deadlock (Bế tắc) xảy ra khi thỏa mãn đồng thời 4 điều kiện nào (Chọn 4 đáp án đúng)?",
    "level": "Vận dụng",
    "score": 2,
    "type": "multiple",
    "options": [
      "A. Mutual Exclusion (Loại trừ tương hỗ)",
      "B. Hold and Wait (Giữ và chờ tài nguyên)",
      "C. No Preemption (Không thu hồi tài nguyên cưỡng chế)",
      "D. Circular Wait (Chờ đợi vòng tròn)"
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "4 điều kiện Coffman dẫn đến Deadlock:\n1. Mutual Exclusion: Tài nguyên chỉ 1 tiến trình dùng tại 1 thời điểm.\n2. Hold and Wait: Tiến trình đang giữ tài nguyên lại xin thêm tài nguyên khác.\n3. No Preemption: Không thể cướp tài nguyên của tiến trình khác.\n4. Circular Wait: Tồn tại chu trình chờ đợi $P_0 \\rightarrow P_1 \\rightarrow ... \\rightarrow P_0$."
  },
  {
    "id": 3009,
    "chapter": "Chương 3: Đồng Bộ Hóa & Bế Tắc (Deadlock)",
    "chapterId": 3,
    "topic": "Thuật toán Banker",
    "question": "Thuật toán Banker của Dijkstra được sử dụng trong hệ điều hành nhằm mục đích gì đối với Deadlock?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tránh bế tắc (Deadlock Avoidance) bằng cách chỉ cấp phát tài nguyên khi hệ thống vẫn ở trạng thái an toàn (Safe State)",
      "B. Tự động khởi động lại máy khi phát hiện Deadlock",
      "C. Khóa tất cả các tiến trình vĩnh viễn",
      "D. Tính toán lãi suất tiền gửi ngân hàng"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Thuật toán Banker:** Giải thuật tránh bế tắc (Deadlock Avoidance). Trước khi cấp phát tài nguyên, nó kiểm tra xem liệu việc cấp phát có đẩy hệ thống vào trạng thái không an toàn (Unsafe State) hay không."
  },
  {
    "id": 3010,
    "chapter": "Chương 4: Quản Lý Bộ Nhớ & Bộ Nhớ Ảo (Virtual Memory)",
    "chapterId": 4,
    "topic": "Phân trang (Paging)",
    "question": "Trong cơ chế phân trang (Paging), bộ nhớ vật lý được chia thành các khối cố định gọi là gì, và không gian nhớ logic của tiến trình được chia thành các khối tương ứng gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Khung trang (Frames) và Trang (Pages)",
      "B. Trang (Pages) và Khung trang (Frames)",
      "C. Đoạn (Segments) và Khối (Blocks)",
      "D. Cụm (Clusters) và Vùng (Sectors)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trong kỹ thuật phân trang: Bộ nhớ vật lý (RAM) được chia thành các khối kích thước bằng nhau gọi là **Khung trang (Page Frames)**; Bộ nhớ logic được chia thành các khối có cùng kích thước gọi là **Trang (Pages)**."
  },
  {
    "id": 3011,
    "chapter": "Chương 4: Quản Lý Bộ Nhớ & Bộ Nhớ Ảo (Virtual Memory)",
    "chapterId": 4,
    "topic": "Bộ nhớ ảo & Lỗi trang (Page Fault)",
    "question": "Sự kiện 'Page Fault' (Lỗi trang) xảy ra khi nào trong quá trình thực thi chương trình?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tiến trình cố gắng truy cập một trang nhớ hợp lệ nhưng trang đó hiện chưa được nạp vào bộ nhớ RAM vật lý",
      "B. Ổ cứng bị hỏng vật lý không đọc được",
      "C. Thanh RAM bị chập điện cháy mạch",
      "D. Chương trình bị nhiễm mã độc tống tiền"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Page Fault (Lỗi trang):** Là một ngắt (Trap) do phần cứng MMU kích hoạt khi CPU cần truy cập một địa chỉ nằm trong một trang có bit Valid-Invalid = Invalid (tức trang đó đang nằm trên đĩa cứng Swap chứ chưa nạp vào RAM). HĐH sẽ đưa trang đó từ đĩa vào RAM."
  },
  {
    "id": 3012,
    "chapter": "Chương 4: Quản Lý Bộ Nhớ & Bộ Nhớ Ảo (Virtual Memory)",
    "chapterId": 4,
    "topic": "Thuật toán thay thế trang",
    "question": "Thuật toán thay thế trang LRU (Least Recently Used) lựa chọn trang nào để tráo đổi ra đĩa khi bộ nhớ RAM bị đầy?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Trang đã lâu nhất không được CPU truy cập tới trong quá khứ",
      "B. Trang được nạp vào bộ nhớ đầu tiên (FIFO)",
      "C. Trang có kích thước lớn nhất",
      "D. Trang ngẫu nhiên bất kỳ"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**LRU (Least Recently Used):** Dựa trên nguyên lý định vị thời gian (Temporal Locality), thuật toán sẽ chọn thay thế trang nào trong bộ nhớ đã lâu nhất chưa được tham chiếu tới."
  },
  {
    "id": 3013,
    "chapter": "Chương 5: Hệ Thống Tệp Tin (File System) & Vào/Ra (I/O)",
    "chapterId": 5,
    "topic": "Cấu trúc Inode",
    "question": "Trong hệ thống tệp tin Unix/Linux (như ext4), cấu trúc 'Inode' (Index Node) chứa những thông tin gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Siêu dữ liệu (Metadata) của tệp: quyền hạn, kích thước, thời gian tạo, con trỏ tới các khối dữ liệu trên đĩa (trừ tên tệp)",
      "B. Toàn bộ nội dung dữ liệu nhị phân của tệp",
      "C. Tên đăng nhập và mật khẩu tài khoản root",
      "D. Mã nguồn hệ điều hành Linux"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**Inode:** Cấu trúc dữ liệu lưu trữ Metadata của file (File size, Owner, Permissions, Timestamps, Pointers to data blocks). Lưu ý: Tên file và số Inode được lưu trong Directory entries chứ không nằm trong Inode."
  },
  {
    "id": 3014,
    "chapter": "Chương 5: Hệ Thống Tệp Tin (File System) & Vào/Ra (I/O)",
    "chapterId": 5,
    "topic": "Công nghệ RAID",
    "question": "Mức RAID nào sử dụng kỹ thuật phân chia dải dữ liệu (Striping) kết hợp lưu thông tin chẵn lẻ phân tán (Distributed Parity) để vừa tăng tốc độ đọc vừa chịu lỗi hỏng 1 ổ cứng?",
    "level": "Vận dụng",
    "score": 2,
    "type": "single",
    "options": [
      "A. RAID 5",
      "B. RAID 0 (Striping thuần túy)",
      "C. RAID 1 (Mirroring thuần túy)",
      "D. JBOD"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**RAID 5:** Yêu cầu tối thiểu 3 ổ đĩa. Dữ liệu và mã chẵn lẻ (Parity) được phân tán đều trên tất cả các ổ cứng. Khi 1 ổ bất kỳ bị hỏng, hệ thống vẫn hoạt động bình thường và có thể khôi phục lại dữ liệu."
  },
  {
    "id": 3015,
    "chapter": "Chương 5: Hệ Thống Tệp Tin (File System) & Vào/Ra (I/O)",
    "chapterId": 5,
    "topic": "Bộ điều khiển DMA",
    "question": "Cơ chế DMA (Direct Memory Access) mang lại lợi ích gì cho hiệu suất vào/ra dữ liệu của máy tính?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cho phép thiết bị ngoại vi truyền dữ liệu trực tiếp với bộ nhớ RAM mà không cần sự can thiệp liên tục của CPU",
      "B. Giúp máy tính không cần dùng quạt tản nhiệt",
      "C. Tự động mã hóa tệp tin khi truyền qua mạng",
      "D. Thay thế hoàn toàn thanh RAM vật lý"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "**DMA (Direct Memory Access):** Cho phép các thiết bị I/O tốc độ cao (như ổ cứng, card mạng) truyền thẳng khối dữ liệu lớn vào/ra RAM mà CPU chỉ cần khởi tạo lệnh ban đầu và nhận ngắt khi hoàn tất, giải phóng CPU làm việc khác."
  }
]
};

/**
 * Global Subjects & Question Store
 */
class SubjectsManager {
    constructor() {
        this.STORAGE_KEY_SUBJECTS = 'netlab_subjects_v2';
        this.STORAGE_KEY_QUESTIONS = 'netlab_questions_v2';
        this.STORAGE_KEY_ACTIVE = 'netlab_active_subject_v2';
        
        this.subjects = {};
        this.questionsMap = {};
        this.activeSubjectId = 'mmt';
        this.listeners = [];

        this.init();
    }

    init() {
        // 1. Load subjects metadata
        const savedSubs = localStorage.getItem(this.STORAGE_KEY_SUBJECTS);
        if (savedSubs) {
            try {
                this.subjects = JSON.parse(savedSubs);
            } catch (e) {
                this.subjects = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA));
            }
        } else {
            this.subjects = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA));
        }

        // 2. Load questions map
        const savedQ = localStorage.getItem(this.STORAGE_KEY_QUESTIONS);
        if (savedQ) {
            try {
                this.questionsMap = JSON.parse(savedQ);
            } catch (e) {
                this.initDefaultQuestions();
            }
        } else {
            this.initDefaultQuestions();
        }

        // Ensure MMT questions are populated from window.QUIZ_DATA if empty
        if (!this.questionsMap.mmt || this.questionsMap.mmt.length === 0) {
            this.questionsMap.mmt = (window.QUIZ_DATA && window.QUIZ_DATA.length > 0) ? window.QUIZ_DATA : [];
        }

        // 3. Load active subject
        const active = localStorage.getItem(this.STORAGE_KEY_ACTIVE);
        if (active && this.subjects[active]) {
            this.activeSubjectId = active;
        } else {
            this.activeSubjectId = 'mmt';
        }
    }

    initDefaultQuestions() {
        this.questionsMap = {
            mmt: (window.QUIZ_DATA && window.QUIZ_DATA.length > 0) ? window.QUIZ_DATA : [],
            anm: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.anm || [])),
            toan: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.toan || [])),
            hdo: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.hdo || []))
        };
        this.saveQuestions();
    }

    saveSubjects() {
        localStorage.setItem(this.STORAGE_KEY_SUBJECTS, JSON.stringify(this.subjects));
    }

    saveQuestions() {
        localStorage.setItem(this.STORAGE_KEY_QUESTIONS, JSON.stringify(this.questionsMap));
    }

    getAllSubjects() {
        return Object.values(this.subjects);
    }

    getSubject(subId) {
        return this.subjects[subId] || this.subjects['mmt'];
    }

    getActiveSubject() {
        return this.getSubject(this.activeSubjectId);
    }

    getActiveSubjectId() {
        return this.activeSubjectId;
    }

    setActiveSubject(subId) {
        if (!this.subjects[subId]) return false;
        this.activeSubjectId = subId;
        localStorage.setItem(this.STORAGE_KEY_ACTIVE, subId);
        this.notifyChange();
        return true;
    }

    getQuestions(subId) {
        const targetId = subId || this.activeSubjectId;
        return this.questionsMap[targetId] || [];
    }

    getQuestionById(subId, qId) {
        const qList = this.getQuestions(subId);
        return qList.find(q => q.id === qId) || null;
    }

    addQuestion(subId, questionObj) {
        if (!this.questionsMap[subId]) {
            this.questionsMap[subId] = [];
        }
        // Assign new ID
        const existingIds = this.questionsMap[subId].map(q => q.id);
        const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
        questionObj.id = maxId + 1;

        this.questionsMap[subId].push(questionObj);
        this.saveQuestions();
        this.notifyChange();
        return questionObj;
    }

    updateQuestion(subId, qId, updatedData) {
        const qList = this.questionsMap[subId];
        if (!qList) return false;
        const idx = qList.findIndex(q => q.id === qId);
        if (idx === -1) return false;

        qList[idx] = { ...qList[idx], ...updatedData, id: qId };
        this.saveQuestions();
        this.notifyChange();
        return true;
    }

    deleteQuestion(subId, qId) {
        const qList = this.questionsMap[subId];
        if (!qList) return false;
        this.questionsMap[subId] = qList.filter(q => q.id !== qId);
        this.saveQuestions();
        this.notifyChange();
        return true;
    }

    addSubject(subObj) {
        if (!subObj.id) return false;
        this.subjects[subObj.id] = subObj;
        if (!this.questionsMap[subObj.id]) {
            this.questionsMap[subObj.id] = [];
        }
        this.saveSubjects();
        this.saveQuestions();
        this.notifyChange();
        return true;
    }

    deleteSubject(subId) {
        if (subId === 'mmt') return false; // Prevent deleting default MMT
        delete this.subjects[subId];
        delete this.questionsMap[subId];
        if (this.activeSubjectId === subId) {
            this.activeSubjectId = 'mmt';
            localStorage.setItem(this.STORAGE_KEY_ACTIVE, 'mmt');
        }
        this.saveSubjects();
        this.saveQuestions();
        this.notifyChange();
        return true;
    }

    resetToDefault() {
        localStorage.removeItem(this.STORAGE_KEY_SUBJECTS);
        localStorage.removeItem(this.STORAGE_KEY_QUESTIONS);
        this.subjects = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA));
        this.initDefaultQuestions();
        this.notifyChange();
    }

    exportAllData() {
        return {
            version: '2.0',
            exportedAt: new Date().toISOString(),
            subjects: this.subjects,
            questions: this.questionsMap
        };
    }

    importAllData(dataObj) {
        if (!dataObj || !dataObj.subjects || !dataObj.questions) {
            throw new Error('Dữ liệu nhập không đúng định dạng NetLab!');
        }
        this.subjects = dataObj.subjects;
        this.questionsMap = dataObj.questions;
        this.saveSubjects();
        this.saveQuestions();
        this.notifyChange();
    }

    onSubjectChange(callback) {
        this.listeners.push(callback);
    }

    notifyChange() {
        const activeSub = this.getActiveSubject();
        const questions = this.getQuestions();
        this.listeners.forEach(cb => {
            try {
                cb(activeSub, questions);
            } catch (e) {
                console.error('Error in subject change listener:', e);
            }
        });
    }
}

window.subjectsManager = new SubjectsManager();
