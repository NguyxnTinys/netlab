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
        description: 'Chương trình An ninh mạng toàn diện theo chuẩn Cisco NetAcad và Google Coursera: Tam giác CIA, Mã độc & Kỹ thuật tấn công, Mật mã học & PKI, Tường lửa Stateful, Giám sát lưu lượng Wireshark & Tcpdump, Hardening và Zero Trust.',
        chapters: [
            { id: 1, name: 'Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA' },
            { id: 2, name: 'Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)' },
            { id: 3, name: 'Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)' },
            { id: 4, name: 'Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)' },
            { id: 5, name: 'Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)' },
            { id: 6, name: 'Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng' }
        ]
    },
    toan9: {
        id: 'toan9',
        name: 'Toán Học Lớp 9 (Đại Số & Hình Học)',
        shortName: 'Toán Lớp 9',
        code: 'MAT901',
        icon: '📐',
        themeColor: '#f59e0b',
        accentGradient: 'from-amber-500 to-orange-600',
        badgeClass: 'border-amber-500/40 bg-amber-950/60 text-amber-300',
        description: 'Chương trình Toán 9: Căn bậc hai & ba, Hàm số bậc nhất & bậc hai, Hệ phương trình, Định lý Vi-et, Hệ thức lượng tam giác vuông và Hình học đường tròn.',
        chapters: [
            { id: 1, name: 'Chương 1: Căn bậc hai & Căn bậc ba' },
            { id: 2, name: 'Chương 2: Hàm số bậc nhất y = ax + b' },
            { id: 3, name: 'Chương 3: Hệ hai phương trình bậc nhất hai ẩn' },
            { id: 4, name: 'Chương 4: Hàm số y = ax² & Phương trình bậc hai một ẩn' },
            { id: 5, name: 'Chương 5: Hệ thức lượng trong tam giác vuông' },
            { id: 6, name: 'Chương 6: Đường tròn & Góc với đường tròn' }
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
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "An ninh mạng (Cybersecurity) được định nghĩa chính xác nhất là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Việc cài đặt phần mềm diệt virus trên máy tính cá nhân.",
      "B. Nỗ lực liên tục nhằm bảo vệ các hệ thống mạng, thiết bị, chương trình và dữ liệu khỏi bị hư hại, truy cập hoặc tấn công trái phép.",
      "C. Việc cấu hình mật khẩu phức tạp cho các thiết bị định tuyến và chuyển mạch.",
      "D. Luật pháp ngăn cấm các hành vi sử dụng máy tính sai mục đích."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco NetAcad định nghĩa an ninh mạng là nỗ lực liên tục để bảo vệ các hệ thống kết nối mạng và toàn bộ dữ liệu khỏi bị truy cập hoặc hủy hoại trái phép."
  },
  {
    "id": 1002,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Ba thành phần cốt lõi của tam giác bảo mật CIA Triad là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Confidentiality, Internet, Authentication",
      "B. Control, Integrity, Authorization",
      "C. Confidentiality, Integrity, Availability",
      "D. Cryptography, Inspection, Accountability"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tam giác bảo mật CIA bao gồm: Confidentiality (Tính bảo mật), Integrity (Tính toàn vẹn) và Availability (Tính khả dụng)."
  },
  {
    "id": 1003,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Thuật ngữ nào đồng nghĩa với \"Confidentiality\" (Tính bảo mật) trong ngữ cảnh dữ liệu cá nhân?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Consistency (Tính nhất quán)",
      "B. Privacy (Quyền riêng tư)",
      "C. Redundancy (Tính dự phòng)",
      "D. Accessibility (Tính tiếp cận)"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tính bảo mật thông tin cá nhân thường được gọi là quyền riêng tư (Privacy), đảm bảo chỉ những người được ủy quyền mới có thể xem dữ liệu."
  },
  {
    "id": 1004,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Phương pháp hoặc kỹ thuật nào thường được sử dụng nhất để đảm bảo tính toàn vẹn (Integrity) của dữ liệu trong quá trình truyền tải?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đặt mật khẩu mở file",
      "B. Sử dụng hàm băm (Hash / Checksum)",
      "C. Lưu trữ file trên thẻ nhớ USB",
      "D. Tăng băng thông đường truyền mạng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hàm băm (Cryptographic Hash / Checksum như MD5, SHA-256) tạo ra một chuỗi giá trị cố định đại diện cho dữ liệu. Nếu dữ liệu bị sửa đổi dù chỉ 1 bit, giá trị băm sẽ thay đổi hoàn toàn, giúp phát hiện dữ liệu bị can thiệp."
  },
  {
    "id": 1005,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Thuật ngữ nào mô tả sự sẵn sàng của hệ thống và dữ liệu để người dùng được ủy quyền truy cập bất cứ khi nào cần?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Confidentiality",
      "B. Integrity",
      "C. Availability",
      "D. Scalability"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Availability (Tính khả dụng) đảm bảo hệ thống dịch vụ, mạng và dữ liệu luôn hoạt động và sẵn sàng phục vụ khi cần thiết."
  },
  {
    "id": 1006,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Biện pháp nào sau đây giúp đảm bảo tính khả dụng (Availability) của hệ thống?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Triển khai hệ thống nguồn điện liên tục (UPS) và máy chủ dự phòng (Redundancy)",
      "B. Sử dụng thuật toán mã hóa AES-256 cho ổ đĩa",
      "C. Buộc người dùng đổi mật khẩu mỗi ngày",
      "D. Đặt tên file ở dạng ẩn"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nguồn điện dự phòng (UPS), liên kết mạng dự phòng và hệ thống lưu trữ dự phòng (RAID/Cluster) giúp ngăn chặn gián đoạn hoạt động, đảm bảo tính khả dụng."
  },
  {
    "id": 1007,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Ví dụ nào sau đây thể hiện sự vi phạm tính toàn vẹn (Integrity)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Hacker đánh cắp cơ sở dữ liệu số thẻ tín dụng nhưng không sửa đổi gì.",
      "B. Một kẻ tấn công chặn gói tin chuyển khoản ngân hàng và sửa đổi số tiền từ 100 USD thành 10,000 USD.",
      "C. Một trang web bị tấn công DDoS làm tê liệt máy chủ trong 4 giờ.",
      "D. Nhân viên để lộ mật khẩu máy tính cho bạn đồng nghiệp."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc sửa đổi dữ liệu trái phép (thay đổi số tiền) là hành vi xâm phạm tính toàn vẹn của dữ liệu."
  },
  {
    "id": 1008,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Ví dụ nào sau đây là sự vi phạm tính khả dụng (Availability)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một nhân viên sao chép tài liệu mật của công ty về máy cá nhân.",
      "B. Kẻ tấn công làm tràn ngập lưu lượng truy cập khiến máy chủ web bán hàng bị sập.",
      "C. Dữ liệu bảng điểm học sinh bị sửa đổi điểm từ 5 lên 9.",
      "D. Email bị kẻ nghe lén đọc trộm nội dung trên mạng Wi-Fi công cộng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Làm sập máy chủ web ngăn cản người dùng truy cập dịch vụ, đây là hành vi phá hoại tính khả dụng."
  },
  {
    "id": 1009,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Bảo vệ quyền riêng tư & Dữ liệu PII",
    "question": "Thuật ngữ PII trong an ninh mạng là viết tắt của cụm từ nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Private Internet Information",
      "B. Personally Identifiable Information",
      "C. Protected Internal Infrastructure",
      "D. Public Identification Interface"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "PII là viết tắt của Personally Identifiable Information (Thông tin nhận dạng cá nhân)."
  },
  {
    "id": 1010,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Bảo vệ quyền riêng tư & Dữ liệu PII",
    "question": "Dữ liệu nào sau đây KHÔNG PHẢI là một ví dụ về PII (Personally Identifiable Information)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Số Căn cước công dân / Mã số An sinh xã hội (SSN)",
      "B. Số hiệu phiên bản của hệ điều hành Windows đang cài đặt",
      "C. Dữ liệu quét sinh trắc học vân tay của nhân viên",
      "D. Hồ sơ bệnh án y tế cá nhân"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Số phiên bản hệ điều hành là thông tin kỹ thuật chung của máy tính, không thể dùng độc lập để xác định danh tính cụ thể của một cá nhân."
  },
  {
    "id": 1011,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Một hồ sơ người dùng trên mạng xã hội bao gồm ảnh, bài viết, sở thích được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Online Identity (Danh tính trực tuyến)",
      "B. Virtual Memory",
      "C. Proxy Identity",
      "D. Digital Certificate"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hồ sơ cá nhân trên các trang mạng xã hội đại diện cho danh tính trực tuyến (Online Identity) của người dùng trên không gian mạng."
  },
  {
    "id": 1012,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Dấu vết dữ liệu mà bạn để lại khi duyệt web, đăng bài viết, tìm kiếm thông tin trên Internet được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Digital Footprint (Dấu chân số)",
      "B. Digital Token",
      "C. Cyber Trail",
      "D. Virtual Footmark"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dấu chân số (Digital footprint) là tất cả các dấu vết dữ liệu do một cá nhân để lại trên Internet qua các hoạt động trực tuyến."
  },
  {
    "id": 1013,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Đâu là đặc điểm phân biệt dữ liệu truyền thống với dữ liệu lớn (Big Data)?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dữ liệu lớn không bao giờ cần bảo mật.",
      "B. Dữ liệu lớn đặc trưng bởi khối lượng khổng lồ (Volume), tốc độ gia tăng nhanh (Velocity) và tính đa dạng định dạng (Variety).",
      "C. Dữ liệu lớn chỉ bao gồm các bảng tính Excel của công ty.",
      "D. Dữ liệu truyền thống chỉ được lưu trên đám mây."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Big Data thường được định nghĩa bởi các đặc trưng cốt lõi (3V): Volume (Khối lượng lớn), Velocity (Tốc độ sinh dữ liệu cực nhanh), và Variety (Đa dạng thể loại dữ liệu)."
  },
  {
    "id": 1014,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Kẻ tấn công mạng thuộc nhóm \"Script Kiddies\" (Amateurs) là ai?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Những lập trình viên chuyên nghiệp chuyên viết các ngôn ngữ kịch bản như Python.",
      "B. Những kẻ tấn công thiếu kỹ năng chuyên sâu, sử dụng các công cụ hoặc kịch bản có sẵn trên Internet để tấn công.",
      "C. Các điệp viên mạng do chính phủ tài trợ.",
      "D. Các chuyên gia bảo mật hàng đầu thế giới."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Script Kiddies là thuật ngữ chỉ những kẻ tấn công nghiệp dư, sử dụng công cụ hoặc mã độc do người khác viết mà không hiểu rõ bản chất bên dưới."
  },
  {
    "id": 1015,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tin tặc mũ trắng (White Hat Hacker) khác biệt cơ bản với tin tặc mũ đen (Black Hat Hacker) ở điểm nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tin tặc mũ trắng sử dụng hệ điều hành Windows, mũ đen dùng Linux.",
      "B. Tin tặc mũ trắng có sự cho phép bằng văn bản của chủ sở hữu hệ thống để kiểm tra bảo mật nhằm khắc phục lỗ hổng.",
      "C. Tin tặc mũ trắng không biết cách tấn công hệ thống.",
      "D. Tin tặc mũ trắng luôn làm việc cho các tổ chức tình báo quân sự."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "White Hat Hacker (Ethical Hacker) được cấp quyền hợp pháp để kiểm thử thâm nhập nhằm mục đích tìm và vá lỗ hổng, nâng cao an ninh."
  },
  {
    "id": 1016,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Động cơ chính của một \"Tin tặc mũ đen\" (Black Hat Hacker) thường là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảo vệ an ninh quốc gia",
      "B. Tìm kiếm lỗ hổng để báo cáo miễn phí cho nhà sản xuất",
      "C. Đạt được lợi ích tài chính cá nhân, phá hoại hoặc thỏa mãn sự ác ý",
      "D. Nâng cao văn hóa tuân thủ đạo đức mạng"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Black Hat Hacker tấn công hệ thống trái phép nhằm trục lợi tài chính, tống tiền, đánh cắp thông tin hoặc phá hoại."
  },
  {
    "id": 1017,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Một tin tặc phát hiện lỗ hổng trên website của một ngân hàng, không phá hoại nhưng tự ý xâm nhập và yêu cầu ngân hàng trả tiền thưởng thì mới chỉ cách khắc phục. Tin tặc này thuộc nhóm nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. White Hat Hacker",
      "B. Gray Hat Hacker",
      "C. Script Kiddie",
      "D. State-sponsored Hacker"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Gray Hat Hacker xâm nhập không xin phép (hành vi bất hợp pháp) nhưng không có ý định phá hoại độc hại, thường đòi hỏi thù lao để sửa lỗi hoặc công khai lỗ hổng nếu không được trả thưởng."
  },
  {
    "id": 1018,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Nhóm đối tượng nào thực hiện tấn công mạng với động cơ chính trị, xã hội hoặc bảo vệ môi trường?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cybercriminals (Tội phạm mạng)",
      "B. Hacktivists (Nhà hoạt động tin tặc)",
      "C. Script Kiddies",
      "D. System Administrators"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hacktivists là những cá nhân hoặc nhóm sử dụng kỹ năng tin tặc để truyền tải thông điệp chính trị, xã hội, môi trường hoặc tôn giáo."
  },
  {
    "id": 1019,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Ví dụ nào sau đây minh họa rõ nhất cho hành vi \"Hacktivism\"?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một nhóm tin tặc mã hóa cơ sở dữ liệu bệnh viện đòi 2 triệu USD tiền chuộc.",
      "B. Một nhóm tấn công từ chối dịch vụ (DoS) vào trang web của tập đoàn khai khoáng để phản đối việc hủy hoại rừng nguyên sinh.",
      "C. Một học sinh tải phần mềm quét cổng mạng về thử quét máy tính bạn cùng lớp.",
      "D. Một chuyên gia bảo mật gửi báo cáo lỗ hổng cho Microsoft."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tấn công vào công ty để biểu tình phản đối vấn đề xã hội/môi trường là hành vi kinh điển của Hacktivist."
  },
  {
    "id": 1020,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Chiến tranh mạng (Cyberwarfare) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cuộc thi đấu an ninh mạng giữa các sinh viên đại học.",
      "B. Xung đột trên không gian mạng có chủ đích giữa các quốc gia nhằm xâm nhập và phá hoại hệ thống thông tin, cơ sở hạ tầng trọng yếu của đối phương.",
      "C. Việc một cá nhân cài đặt virus vào máy tính của một người khác cùng công ty.",
      "D. Các cuộc thảo luận tranh cãi gay gắt trên mạng xã hội."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cyberwarfare là hoạt động xung đột cấp quốc gia, sử dụng công nghệ số để tấn công các mục tiêu quốc phòng, kinh tế và cơ sở hạ tầng của quốc gia khác."
  },
  {
    "id": 1021,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Mã độc nổi tiếng nào được coi là vũ khí mạng cấp quốc gia đầu tiên trên thế giới, được tạo ra để phá hủy cơ sở làm giàu hạt nhân Natanz của Iran?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. WannaCry",
      "B. ILOVEYOU",
      "C. Stuxnet",
      "D. Melissa"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Sâu máy tính Stuxnet được phát hiện năm 2010 là ví dụ điển hình về chiến tranh mạng (State-sponsored), nhắm vào hệ thống điều khiển công nghiệp SCADA/PLC để phá hỏng máy ly tâm hạt nhân."
  },
  {
    "id": 1022,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Cơ sở hạ tầng trọng yếu (Critical Infrastructure) thường là mục tiêu hàng đầu của chiến tranh mạng bao gồm những gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Các trang web thương mại điện tử nhỏ",
      "B. Hệ thống lưới điện, mạng lưới cấp nước, bệnh viện, viễn thông và giao thông vận tải",
      "C. Các diễn đàn chia sẻ phim ảnh trực tuyến",
      "D. Các phòng máy chơi game công cộng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cơ sở hạ tầng trọng yếu là các hệ thống thiết yếu đối với an ninh, kinh tế và đời sống của một quốc gia (điện lực, nước, y tế, giao thông)."
  },
  {
    "id": 1023,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Lưới điện thông minh (Smart Grid) mang lại nhiều tiện ích nhưng cũng tạo ra rủi ro an ninh mạng nào lớn nhất?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giảm tuổi thọ bóng đèn trong gia đình",
      "B. Kẻ tấn công có thể từ xa ngắt nguồn cấp điện diện rộng, gây hỗn loạn kinh tế và xã hội",
      "C. Tăng chi phí hóa đơn tiền điện tự động",
      "D. Làm chậm tốc độ kết nối Internet của hộ gia đình"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Việc số hóa và kết nối lưới điện vào mạng máy tính mở ra nguy cơ bị tin tặc tấn công ngắt nguồn cấp điện quy mô lớn."
  },
  {
    "id": 1024,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Một người đăng tải ảnh thẻ căn cước công dân và vé máy bay có mã QR lên trang Facebook công khai. Hành vi này có nguy cơ gì lớn nhất?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Máy ảnh điện thoại bị hỏng",
      "B. Bị lộ lọt PII, dẫn đến nguy cơ bị đánh cắp danh tính (Identity Theft) và làm giả giấy tờ",
      "C. Facebook sẽ khóa tài khoản ngay lập tức",
      "D. Điện thoại sẽ bị nhiễm virus tự động"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thẻ CCCD và mã QR trên vé máy bay chứa các thông tin PII nhạy cảm, kẻ xấu có thể dùng để mạo danh, mở tài khoản vay nợ hoặc lừa đảo."
  },
  {
    "id": 1025,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tội phạm mạng (Cybercriminals) thường có xu hướng cấu kết thành các mạng lưới như thế nào trong thời đại hiện nay?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Hoạt động độc lập và không bao giờ trao đổi với nhau",
      "B. Hoạt động giống như các doanh nghiệp hợp pháp, cung cấp dịch vụ mã độc cho thuê (MaaS, RaaS) và rửa tiền qua tiền điện tử",
      "C. Chỉ hoạt động vào ban đêm",
      "D. Toàn bộ đều là nhân viên của các cơ quan chính phủ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tội phạm mạng ngày nay hoạt động chuyên nghiệp hóa, tổ chức thành các tổ chức ngầm cung cấp dịch vụ như Ransomware-as-a-Service (RaaS)."
  },
  {
    "id": 1026,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tại sao các thiết bị y tế được kết nối mạng (như máy tạo nhịp tim, máy truyền dịch thông minh) lại cần được bảo vệ an ninh mạng nghiêm ngặt?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì chúng tiêu thụ quá nhiều băng thông Internet của bệnh viện.",
      "B. Vì việc bị xâm nhập hoặc thay đổi thông số hoạt động có thể đe dọa trực tiếp đến tính mạng của bệnh nhân.",
      "C. Vì bệnh nhân muốn tải ứng dụng nghe nhạc lên thiết bị.",
      "D. Vì thiết bị y tế không thể sử dụng mật khẩu."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Can thiệp trái phép vào thiết bị y tế có thể gây tử vong cho bệnh nhân, do đó an ninh mạng ở đây gắn liền với sinh mạng con người."
  },
  {
    "id": 1027,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Khi mua hàng trực tuyến, trình duyệt hiển thị biểu tượng ổ khóa màu xanh lá/xám cùng tiền tố \"https://\". Điều này giúp đảm bảo yếu tố nào trong CIA Triad đối với thông tin thẻ ngân hàng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Availability",
      "B. Confidentiality và Integrity",
      "C. Non-repudiation",
      "D. Redundancy"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giao thức HTTPS sử dụng SSL/TLS để mã hóa dữ liệu truyền tải (bảo vệ tính bí mật - Confidentiality) và kiểm tra tính toàn vẹn (Integrity) để dữ liệu không bị thay đổi trên đường truyền."
  },
  {
    "id": 1028,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Một nhân viên vô tình gửi nhầm danh sách lương thưởng của toàn bộ công ty vào hòm thư chung của tất cả nhân viên. Đây là sự cố an ninh mạng thuộc loại nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vi phạm tính toàn vẹn (Integrity Breach)",
      "B. Vi phạm tính bảo mật (Confidentiality Breach do lỗi con người)",
      "C. Tấn công từ chối dịch vụ (DoS)",
      "D. Vi phạm tính khả dụng (Availability Breach)"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Danh sách lương là dữ liệu bí mật; việc người không có thẩm quyền đọc được là sự cố vi phạm tính bảo mật (Confidentiality)."
  },
  {
    "id": 1029,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Mô hình CIA Triad",
    "question": "Bản sao lưu dữ liệu (Data Backup) đóng vai trò chính trong việc bảo vệ yếu tố nào của tam giác CIA khi xảy ra sự cố hỏng ổ cứng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Confidentiality",
      "B. Availability",
      "C. Accountability",
      "D. Authorization"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bản sao lưu cho phép phục hồi dữ liệu khi ổ cứng bị hỏng hoặc dữ liệu bị mã hóa, đảm bảo tính khả dụng (Availability) của dữ liệu."
  },
  {
    "id": 1030,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Chữ ký số (Digital Signature) cung cấp những đặc tính bảo mật nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chỉ cung cấp khả năng nén dung lượng file",
      "B. Xác thực nguồn gốc người gửi, đảm bảo tính toàn vẹn và chống chối bỏ (Non-repudiation)",
      "C. Tăng tốc độ truyền dữ liệu qua Internet",
      "D. Tự động xóa file sau khi đọc xong"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chữ ký số kết hợp mã hóa bất đối xứng và hàm băm, giúp chứng minh ai đã gửi tài liệu, tài liệu không bị chỉnh sửa và người gửi không thể phủ nhận việc đã ký."
  },
  {
    "id": 1031,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Khái niệm \"Attack Surface\" (Bề mặt tấn công) trong an ninh mạng có nghĩa là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kích thước màn hình của máy tính bị tấn công.",
      "B. Tổng số tất cả các điểm yếu, cổng mở, dịch vụ hoặc lỗ hổng có thể bị kẻ tấn công tiếp cận và khai thác trong một hệ thống.",
      "C. Vỏ bề mặt bên ngoài của máy chủ.",
      "D. Khu vực địa lý nơi kẻ tấn công sinh sống."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Attack Surface là toàn bộ các điểm tiếp xúc trên hệ thống (phần mềm, cổng mạng, con người, cấu hình) mà kẻ tấn công có thể lợi dụng để đột nhập."
  },
  {
    "id": 1032,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Thuật ngữ nào mô tả các chuyên gia bảo mật được thuê để tìm cách đột nhập vào hệ thống của chính công ty mình nhằm phát hiện lỗ hổng trước khi kẻ xấu tìm ra?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Black Hat Hackers",
      "B. Blue Team / Red Team (Penetration Testers)",
      "C. Script Kiddies",
      "D. Spammers"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Red Team đóng vai trò kẻ tấn công (kiểm thử thâm nhập) có đạo đức để phát hiện điểm yếu của hệ thống."
  },
  {
    "id": 1033,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tấn công mạng nhắm vào chuỗi cung ứng (Supply Chain Attack) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tấn công vào xe tải vận chuyển hàng hóa của siêu thị.",
      "B. Tấn công vào một nhà cung cấp bên thứ ba kém an toàn hơn để từ đó gián tiếp xâm nhập vào tổ chức mục tiêu chính.",
      "C. Tấn công vào cửa hàng bán lẻ máy tính.",
      "D. Chặn đường truyền cáp quang ngầm dưới biển."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chuỗi cung ứng thường liên quan đến các nhà cung cấp phần mềm hoặc dịch vụ bên thứ ba. Nếu đối tác này bị xâm nhập, kẻ tấn công có thể mượn đường này để tấn công mục tiêu lớn hơn (ví dụ vụ SolarWinds)."
  },
  {
    "id": 1034,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tại sao mật khẩu một chữ số hoặc mật khẩu như \"123456\" lại là mối nguy hại lớn đối với tính bảo mật?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì máy tính không cho phép nhập số.",
      "B. Vì kẻ tấn công có thể dễ dàng đoán được hoặc dùng phần mềm bẻ khóa trong vòng chưa đến một giây.",
      "C. Vì nó làm hỏng bàn phím máy tính.",
      "D. Vì hệ thống mạng không hiểu được ký tự số."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mật khẩu ngắn và phổ biến là mục tiêu hàng đầu của các cuộc tấn công vét cạn (Brute-force) hoặc tấn công từ điển (Dictionary attack)."
  },
  {
    "id": 1035,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Khi nói về dữ liệu tổ chức, \"Sở hữu trí tuệ\" (Intellectual Property) bao gồm những tài sản nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Máy tính bàn và bàn ghế văn phòng",
      "B. Bằng sáng chế, bí mật công thức sản phẩm, mã nguồn phần mềm, thiết kế sản phẩm mới",
      "C. Bãi đỗ xe và tòa nhà trụ sở",
      "D. Hóa đơn tiền điện tháng trước"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sở hữu trí tuệ là các tài sản vô hình do trí tuệ tạo ra, như phát minh, sáng chế, mã nguồn, công thức độc quyền."
  },
  {
    "id": 1036,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Hậu quả tài chính của một vụ vi phạm dữ liệu (Data Breach) đối với doanh nghiệp thường bao gồm những gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tiền phạt từ các cơ quan quản lý nhà nước (như vi phạm GDPR).",
      "B. Chi phí khắc phục, điều tra sự cố số và bồi thường khách hàng.",
      "C. Tổn hại uy tín thương hiệu dẫn đến sụt giảm doanh thu.",
      "D. Tất cả các phương án trên đều đúng."
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Một vụ lộ lọt dữ liệu gây tổn thất toàn diện: tiền phạt pháp lý, chi phí kỹ thuật điều tra khắc phục, bồi thường và mất niềm tin từ khách hàng."
  },
  {
    "id": 1037,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Thuật ngữ nào chỉ tình trạng kẻ tấn công chiếm quyền kiểm soát máy tính của người dùng nhưng máy tính đó vẫn hoạt động bình thường và người dùng không hề hay biết?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Supercomputer",
      "B. Zombie (hoặc Bot)",
      "C. Master Server",
      "D. Proxy Server"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Một máy tính bị nhiễm mã độc và bị điều khiển từ xa bởi kẻ tấn công được gọi là Zombie (hoặc Bot). Nhiều Zombie kết hợp lại tạo thành Botnet."
  },
  {
    "id": 1038,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Mối đe dọa nội bộ (Insider Threat) đến từ đối tượng nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một hacker nước ngoài không có tài khoản công ty",
      "B. Một nhân viên, cựu nhân viên hoặc nhà thầu phụ hiện có hoặc từng có quyền truy cập hợp pháp vào mạng lưới của tổ chức",
      "C. Một chương trình diệt virus được mua từ nhà phân phối chính thức",
      "D. Khách vãng lai đi ngang qua trụ sở công ty"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Insider Threat là mối đe dọa xuất phát từ những người bên trong tổ chức, những người đã có sẵn quyền truy cập hợp lệ vào hệ thống."
  },
  {
    "id": 1039,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Điều nào sau đây là động cơ thường thấy của một nhân viên gây ra mối đe dọa nội bộ (Insider Threat)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bất mãn với công ty, muốn trả thù sếp",
      "B. Bị lôi kéo, mua chuộc bởi đối thủ cạnh tranh vì tiền",
      "C. Thiếu kiến thức bảo mật dẫn đến thao tác sai lầm vô tình",
      "D. Tất cả các phương án trên"
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Mối đe dọa nội bộ có thể do cố ý (bất mãn, tham lam tiền bạc) hoặc do vô ý (bất cẩn, thiếu kiến thức)."
  },
  {
    "id": 1040,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Để chứng minh tính xác thực (Authentication), hệ thống thường yêu cầu người dùng cung cấp điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Thông tin nhận dạng như tài khoản và mật khẩu, mã OTP hoặc vân tay",
      "B. Chỉ cần địa chỉ IP máy tính",
      "C. Bằng khen học tập",
      "D. Tên nhà cung cấp dịch vụ Internet"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Authentication là quá trình xác minh danh tính người dùng thông qua các bằng chứng xác thực (yếu tố biết, có hoặc là)."
  },
  {
    "id": 1041,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Khái niệm \"Non-repudiation\" (Chống chối bỏ) trong an ninh mạng có nghĩa là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ngăn chặn virus lây vào USB.",
      "B. Đảm bảo rằng một cá nhân không thể phủ nhận tính hợp lệ của một hành động hoặc giao dịch mà họ đã thực hiện.",
      "C. Cho phép người dùng từ chối nhận email rác.",
      "D. Xóa toàn bộ lịch sử trò chuyện sau 24 giờ."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chống chối bỏ là khả năng chứng minh chắc chắn một hành động (như gửi email, ký hợp đồng, chuyển khoản) được thực hiện bởi người đó, khiến họ không thể chối cãi."
  },
  {
    "id": 1042,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Tại sao an ninh mạng được mô tả là \"một quá trình liên tục\" chứ không phải \"một trạng thái tĩnh hoàn chỉnh\"?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì các nhà phát triển phần mềm muốn bán bản cập nhật liên tục để kiếm tiền.",
      "B. Vì các lỗ hổng mới liên tục xuất hiện, công nghệ thay đổi và kẻ tấn công không ngừng phát triển các kỹ thuật tấn công tinh vi hơn.",
      "C. Vì luật an ninh mạng thay đổi theo từng ngày.",
      "D. Vì phần cứng máy tính luôn bị hao mòn cơ học."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Môi trường mạng luôn biến động; khi lỗ hổng cũ được vá thì lỗ hổng mới lại xuất hiện, đòi hỏi việc phòng vệ phải là nỗ lực liên tục không ngừng."
  },
  {
    "id": 1043,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Điều nào sau đây là một ví dụ về dữ liệu không có cấu trúc (Unstructured Data) trong Big Data?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảng lương cơ sở dữ liệu SQL có các cột định sẵn",
      "B. Các video, hình ảnh, bài đăng văn bản tự do và tệp ghi âm cuộc gọi",
      "C. Bảng điểm học sinh lưu trong cơ sở dữ liệu quan hệ",
      "D. Mã số nhân viên định dạng số nguyên"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dữ liệu phi cấu trúc không tuân theo mô hình hàng cột cố định, ví dụ như hình ảnh, âm thanh, video, văn bản tự do trên mạng xã hội."
  },
  {
    "id": 1044,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Điểm khác nhau giữa \"Data at Rest\" (Dữ liệu tĩnh) và \"Data in Transit\" (Dữ liệu truyền tải) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Data at Rest là dữ liệu đang được lưu trữ trên ổ cứng/thiết bị lưu trữ, còn Data in Transit là dữ liệu đang di chuyển qua mạng.",
      "B. Data at Rest không bao giờ bị hack, còn Data in Transit luôn bị hack.",
      "C. Data at Rest là dữ liệu video, Data in Transit là dữ liệu văn bản.",
      "D. Data at Rest chỉ tồn tại trong bộ nhớ RAM tạm thời."
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Data at Rest: Dữ liệu lưu tĩnh trên đĩa/băng từ; Data in Transit (hoặc Data in Motion): Dữ liệu đang truyền qua mạng."
  },
  {
    "id": 1045,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Phương pháp bảo vệ phổ biến nhất đối với \"Data in Transit\" là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cất ổ cứng vào tủ sắt chống cháy",
      "B. Mã hóa đường truyền bằng giao thức như TLS/HTTPS, IPsec hoặc VPN",
      "C. Ngắt hoàn toàn dây mạng Internet",
      "D. Sử dụng mật khẩu màn hình máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã hóa dữ liệu trên đường truyền (Transport Encryption) ngăn chặn việc nghe lén hoặc sửa đổi gói tin giữa chừng."
  },
  {
    "id": 1046,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Một cuộc tấn công mạng nhằm làm thay đổi kết quả kiểm phiếu trong cuộc bầu cử quốc gia là mối đe dọa trực tiếp vào yếu tố nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tính toàn vẹn (Integrity) và An ninh quốc gia",
      "B. Băng thông đường truyền quốc tế",
      "C. Tốc độ quay của đĩa cứng máy chủ",
      "D. Tính thẩm mỹ của website kiểm phiếu"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Việc gian lận hoặc can thiệp sửa đổi kết quả bầu cử là hành vi xâm phạm tính toàn vẹn của dữ liệu và đe dọa chủ quyền an ninh quốc gia."
  },
  {
    "id": 1047,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Khái niệm \"Cyber Espionage\" (Gián điệp mạng) dùng để chỉ hành vi nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tấn công làm hỏng phần cứng màn hình máy tính của đối phương",
      "B. Sử dụng mạng máy tính để bí mật thâm nhập và đánh cắp thông tin tình báo kinh tế, công nghệ hoặc quân sự từ chính phủ hoặc doanh nghiệp đối thủ",
      "C. Gửi tin nhắn quảng cáo khuyến mãi bán hàng",
      "D. Chơi trò chơi điện tử trực tuyến đóng vai thám tử"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Gián điệp mạng là hoạt động thu thập trái phép thông tin bí mật chiến lược của quốc gia hoặc đối thủ thương mại thông qua mạng máy tính."
  },
  {
    "id": 1048,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Đạo đức nghề nghiệp & Pháp lý ATTT",
    "question": "Đâu là một thách thức lớn đối với việc thực thi pháp luật khi xử lý các vụ án tội phạm mạng xuyên quốc gia?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kẻ tấn công luôn để lại địa chỉ nhà ở thật trong email",
      "B. Vấn đề ranh giới quyền tài phán (Jurisdiction), sự khác biệt luật pháp giữa các quốc gia và việc kẻ tấn công sử dụng công nghệ ẩn danh",
      "C. Cảnh sát không được phép sử dụng máy tính",
      "D. Không có luật pháp quốc tế nào đề cập đến an ninh mạng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Không gian mạng không có biên giới địa lý, kẻ tấn công ở quốc gia này có thể tấn công nạn nhân ở quốc gia khác khiến việc phối hợp dẫn độ và khởi tố gặp muôn vàn khó khăn về quyền tài phán."
  },
  {
    "id": 1049,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Tấn công DoS & DDoS",
    "question": "Thuật ngữ \"DDoS\" viết tắt của cụm từ nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Direct Denial of Service",
      "B. Distributed Denial of Service",
      "C. Digital Detection of Security",
      "D. Data Destruction Operating System"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DDoS là viết tắt của Distributed Denial of Service (Tấn công từ chối dịch vụ phân tán)."
  },
  {
    "id": 1050,
    "chapter": "Chương 1: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "chapterId": 1,
    "topic": "Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA",
    "question": "Theo bạn, yếu tố nào thường được coi là mắt xích yếu nhất trong chuỗi bảo mật an ninh mạng của một tổ chức?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Thiết bị tường lửa phần cứng cao cấp",
      "B. Con người (nhân viên và người dùng cuối)",
      "C. Thuật toán mã hóa AES-256",
      "D. Cáp quang truyền dẫn dữ liệu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Con người thường là mắt xích yếu nhất (The weakest link) do dễ bị thao túng tâm lý (Social Engineering), bất cẩn hoặc thiếu kiến thức an ninh thông tin."
  },
  {
    "id": 1051,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Sâu máy tính (Worm)",
    "question": "Hai đặc điểm nổi bật nào mô tả chính xác nhất một Sâu máy tính (Worm)? (Chọn hai đáp án)",
    "level": "Nhận biết",
    "score": 1,
    "type": "multiple",
    "options": [
      "A. Nó cần một tệp chương trình chủ hợp pháp để gắn vào.",
      "B. Nó có khả năng tự nhân bản (self-duplicates).",
      "C. Nó tự lan truyền sang các máy tính khác qua mạng mà không cần sự can thiệp hoặc nhận biết của người dùng.",
      "D. Nó luôn ngụy trang dưới dạng một trò chơi máy tính miễn phí."
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Khác với Virus, Worm là chương trình độc lập, có khả năng tự nhân bản và tự động quét, khai thác mạng để lây lan sang các máy tính khác mà không cần sự tương tác của con người hay tệp chủ."
  },
  {
    "id": 1052,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Sâu máy tính (Worm)",
    "question": "Điểm khác biệt cơ bản nhất giữa Virus máy tính và Sâu máy tính (Worm) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Virus chỉ tấn công hệ điều hành Linux, còn Worm chỉ tấn công Windows.",
      "B. Virus cần gắn vào một chương trình/tệp chủ và cần con người kích hoạt để lây lan, trong khi Worm tự động lây lan độc lập qua mạng.",
      "C. Worm không bao giờ gây hại cho hệ thống, chỉ có Virus mới phá hoại.",
      "D. Virus lây qua mạng, còn Worm chỉ lây qua cổng USB."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Virus cần tệp vật chủ (host file) và hành động thực thi của người dùng (như mở file đính kèm), còn Worm là phần mềm độc lập tự nhân bản qua mạng."
  },
  {
    "id": 1053,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Mục tiêu chính của một cuộc tấn công Từ chối Dịch vụ (DoS - Denial of Service) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đánh cắp mã nguồn phần mềm của máy chủ.",
      "B. Ngăn chặn máy chủ mục tiêu xử lý và đáp ứng các yêu cầu hợp lệ của người dùng.",
      "C. Bí mật cài đặt phần mềm gián điệp để theo dõi bàn phím.",
      "D. Sửa đổi số dư tài khoản ngân hàng của nạn nhân."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tấn công DoS nhằm mục đích làm tràn ngập hoặc làm cạn kiệt tài nguyên (CPU, RAM, băng thông) của hệ thống mục tiêu, khiến dịch vụ bị tê liệt hoặc từ chối phục vụ người dùng hợp pháp."
  },
  {
    "id": 1054,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Một chương trình độc hại nằm im lìm trong hệ thống và chỉ kích hoạt hành vi phá hoại khi có một sự kiện hoặc thời điểm cụ thể xảy ra được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Trojan Horse",
      "B. Logic Bomb (Bom logic)",
      "C. Adware",
      "D. Macro Virus"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Logic Bomb là đoạn mã độc được gài sẵn, chờ đợi điều kiện logic thỏa mãn (ví dụ: ngày giờ cụ thể, hoặc khi một tài khoản nhân viên bị xóa) mới kích hoạt."
  },
  {
    "id": 1055,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Mã độc Rootkit & Bootkit",
    "question": "Chức năng chính của một \"Rootkit\" là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động hiển thị các biểu ngữ quảng cáo kiếm tiền.",
      "B. Giành quyền truy cập đặc quyền cấp quản trị cao nhất (root/kernel) và chủ động che giấu sự hiện diện của mình khỏi sự phát hiện của hệ điều hành.",
      "C. Tăng tốc độ quạt tản nhiệt của máy tính.",
      "D. Quét và diệt các phần mềm gián điệp khác."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Rootkit can thiệp sâu vào nhân hệ điều hành để trao quyền kiểm soát tối cao cho tin tặc và che giấu các tiến trình, tệp và khóa registry độc hại."
  },
  {
    "id": 1056,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "\"SEO Poisoning\" (Đầu độc công cụ tìm kiếm) là kỹ thuật gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Gửi chất độc hóa học vào các trung tâm dữ liệu của Google.",
      "B. Thao túng thuật toán của các công cụ tìm kiếm nhằm đưa các trang web độc hại lên vị trí cao trong kết quả tìm kiếm, lừa người dùng nhấp vào.",
      "C. Xóa sạch cơ sở dữ liệu của các công cụ tìm kiếm.",
      "D. Tấn công DDoS làm sập máy chủ tìm kiếm Yahoo."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ tấn công lợi dụng các kỹ thuật SEO để đẩy đường link chứa mã độc hoặc lừa đảo lên top kết quả tìm kiếm của các từ khóa hot."
  },
  {
    "id": 1057,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Khái niệm \"Zombie\" trong an ninh mạng dùng để chỉ đối tượng nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một nhân viên an ninh mạng làm việc ca đêm.",
      "B. Một máy tính bị nhiễm mã độc và bị kẻ tấn công điều khiển từ xa, thường là một phần của mạng botnet.",
      "C. Một máy tính cũ đã bị hỏng ổ cứng hoàn toàn.",
      "D. Một loại virus đã bị tiêu diệt bởi phần mềm diệt virus."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Zombie (hoặc Bot) là máy tính bị chiếm quyền điều khiển ngầm, phục vụ cho các chiến dịch tấn công quy mô lớn theo lệnh của Botmaster."
  },
  {
    "id": 1058,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Một cuộc tấn công Brute-Force (vét cạn) vào mật khẩu là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tấn công đập phá phần cứng bàn phím của nạn nhân.",
      "B. Cuộc tấn công sử dụng phần mềm tự động thử tất cả các tổ hợp ký tự có thể cho đến khi tìm thấy mật khẩu chính xác.",
      "C. Gọi điện thoại đe dọa người dùng để lấy mật khẩu.",
      "D. Tìm mật khẩu được viết trên giấy ghi chú dán ở màn hình."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Brute-Force là phương pháp thử - sai toàn diện, lần lượt thử từng khả năng ký tự có thể có để bẻ khóa mật khẩu."
  },
  {
    "id": 1059,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Mật mã học (Cryptography)",
    "question": "Loại phần mềm độc hại nào mã hóa toàn bộ dữ liệu của nạn nhân và yêu cầu thanh toán tiền chuộc bằng tiền điện tử để nhận chìa khóa giải mã?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Spyware",
      "B. Ransomware",
      "C. Adware",
      "D. Scareware"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ransomware (mã độc tống tiền) tước quyền truy cập dữ liệu của nạn nhân bằng mật mã học và tống tiền chuộc (như vụ WannaCry)."
  },
  {
    "id": 1060,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Phần mềm độc hại giả dạng một ứng dụng hữu ích hoặc vô hại (như ứng dụng dọn rác, trò chơi) để lừa người dùng cài đặt được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Worm",
      "B. Trojan Horse",
      "C. Rootkit",
      "D. Keylogger"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lấy cảm hứng từ con ngựa thành Troy trong thần thoại Hy Lạp, Trojan Horse đánh lừa người dùng bằng vẻ ngoài hợp pháp nhưng bên trong chứa mã độc mở cửa hậu (Backdoor)."
  },
  {
    "id": 1061,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Một nhân viên nhận được email thông báo từ \"Bộ phận IT\" yêu cầu nhấp vào liên kết để đổi mật khẩu khẩn cấp do hệ thống bị lỗi, nhưng liên kết dẫn đến một trang web giả mạo. Đây là hình thức tấn công nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phishing",
      "B. Man-in-the-Middle",
      "C. DDoS",
      "D. SQL Injection"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phishing (lừa đảo giả mạo) sử dụng email mạo danh tổ chức uy tín để dụ nạn nhân cung cấp thông tin đăng nhập hoặc tải tệp độc hại."
  },
  {
    "id": 1062,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Social Engineering & Phishing",
    "question": "Hình thức lừa đảo Phishing được thiết kế nhắm riêng vào các lãnh đạo cấp cao trong tổ chức (như CEO, CFO) được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Spear Phishing",
      "B. Whaling",
      "C. Vishing",
      "D. Smishing"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Whaling (săn cá voi) là biến thể đặc biệt của Phishing nhắm trực tiếp vào các nhân vật cấp cao (C-suite) nhằm chiếm đoạt số tiền lớn hoặc dữ liệu tối mật."
  },
  {
    "id": 1063,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Kỹ thuật lừa đảo qua tin nhắn văn bản SMS trên điện thoại di động được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vishing",
      "B. Smishing",
      "C. Pharming",
      "D. Spimming"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Smishing là sự kết hợp giữa SMS và Phishing, gửi tin nhắn SMS chứa liên kết độc hại để lừa đảo."
  },
  {
    "id": 1064,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Hình thức lừa đảo qua cuộc gọi thoại điện thoại trực tiếp mạo danh nhân viên ngân hàng hoặc cơ quan công an được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vishing (Voice Phishing)",
      "B. Smishing",
      "C. Phishing",
      "D. Whaling"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Vishing sử dụng cuộc gọi thoại (Voice) để thao túng tâm lý nạn nhân qua điện thoại."
  },
  {
    "id": 1065,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Kẻ tấn công đứng phía sau một người đang rút tiền tại cây ATM hoặc đăng nhập máy tính để nhìn lén mã PIN/mật khẩu. Hành vi này được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dumpster Diving",
      "B. Shoulder Surfing",
      "C. Tailgating",
      "D. Pretexting"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Shoulder Surfing (nhìn qua vai) là hành vi quan sát trực tiếp màn hình hoặc bàn phím của người khác để đánh cắp thông tin bí mật."
  },
  {
    "id": 1066,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Hành vi lục lọi các thùng rác của công ty để tìm kiếm các bản in tài liệu, danh bạ nội bộ, mật khẩu ghi trên giấy được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Shoulder Surfing",
      "B. Dumpster Diving",
      "C. Social Networking",
      "D. Piggybacking"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dumpster Diving (lục thùng rác) là kỹ thuật phi kỹ thuật nhằm thu thập thông tin nhạy cảm bị vứt bỏ bất cẩn trong thùng rác."
  },
  {
    "id": 1067,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Một người lạ không có thẻ từ đi sát ngay sau lưng một nhân viên công ty khi người này quẹt thẻ mở cửa an ninh để lọt vào trong tòa nhà. Hành vi này gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Shoulder Surfing",
      "B. Tailgating (hoặc Piggybacking)",
      "C. Pretexting",
      "D. Phishing"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tailgating là hành vi đi theo sát người có quyền truy cập hợp lệ để vượt qua cửa kiểm soát vật lý."
  },
  {
    "id": 1068,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Một cửa sổ trình duyệt bất ngờ xuất hiện với thông báo nhấp nháy đỏ: \"CẢNH BÁO: Máy tính của bạn đã nhiễm 32 virus cực kỳ nguy hiểm! Nhấp vào đây để mua phần mềm quét sạch ngay lập tức!\". Đây là ví dụ của:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ransomware",
      "B. Scareware",
      "C. Spyware",
      "D. Firmware"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Scareware sử dụng các cảnh báo virus giả mạo để làm nạn nhân hoảng sợ và trả tiền mua phần mềm độc hại hoặc vô dụng."
  },
  {
    "id": 1069,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Loại phần mềm độc hại nào bí mật ghi lại mọi thao tác bàn phím của người dùng nhằm thu thập tên đăng nhập, mật khẩu và số thẻ tín dụng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Keylogger",
      "B. Adware",
      "C. Rootkit",
      "D. Worm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Keylogger là công cụ chuyên ghi lại nhật ký phím bấm (keystrokes) của người dùng để đánh cắp dữ liệu nhạy cảm."
  },
  {
    "id": 1070,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Man-in-the-Middle (On-Path)",
    "question": "Tấn công Man-in-the-Middle (MitM) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cuộc tấn công phá hỏng bộ định tuyến nằm ở giữa phòng máy chủ.",
      "B. Kẻ tấn công bí mật chặn và chuyển tiếp liên lạc giữa hai bên tin rằng họ đang liên lạc trực tiếp với nhau, cho phép kẻ tấn công nghe lén hoặc sửa đổi dữ liệu.",
      "C. Tấn công vào máy chủ web bằng cách gửi nhiều bình luận spam.",
      "D. Tranh chấp giữa hai kỹ sư quản trị mạng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trong MitM, kẻ tấn công chèn mình vào giữa luồng truyền thông giữa hai bên (ví dụ client và server) để đánh cắp hoặc thay đổi dữ liệu mà các bên không hề hay biết."
  },
  {
    "id": 1071,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Kỹ thuật kẻ tấn công tạo ra một điểm phát sóng Wi-Fi giả mạo có cùng tên (SSID) với mạng Wi-Fi hợp pháp của quán cà phê hoặc sân bay để lừa người dùng kết nối vào được gọi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Man-in-the-Middle",
      "B. Evil Twin",
      "C. Botnet",
      "D. Logic Bomb"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Evil Twin (Bản sao ác quỷ) là điểm truy cập không dây giả mạo bắt chước hoàn toàn tên mạng Wi-Fi hợp pháp nhằm đánh cắp thông tin người dùng kết nối vào."
  },
  {
    "id": 1072,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Điểm truy cập không dây bất hợp pháp (Rogue Access Point) trong mạng doanh nghiệp là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một trạm phát Wi-Fi chính hãng của Cisco.",
      "B. Một điểm phát Wi-Fi do nhân viên hoặc kẻ tấn công tự ý gắn vào mạng nội bộ của công ty mà không được phép của bộ phận IT.",
      "C. Một ăng-ten thu sóng vệ tinh.",
      "D. Thiết bị chia cổng mạng Switch."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Rogue AP là thiết bị phát sóng không dây gắn trái phép vào mạng có dây của tổ chức, tạo ra lỗ hổng bỏ qua các rào chắn bảo mật của công ty."
  },
  {
    "id": 1073,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Giả mạo DNS (DNS Poisoning)",
    "question": "Tấn công DNS Poisoning (Nhiễm độc DNS) dẫn đến hậu quả gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Làm sập máy in trong văn phòng.",
      "B. Thay đổi bản ghi phân giải tên miền của máy chủ DNS, khiến người dùng gõ địa chỉ trang web hợp pháp nhưng bị chuyển hướng sang trang web độc hại của tin tặc.",
      "C. Làm chậm chuột máy tính.",
      "D. Xóa toàn bộ file trên máy tính của người dùng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DNS Poisoning chèn dữ liệu IP sai lệch vào bộ nhớ đệm máy chủ DNS, khiến người dùng truy cập trang web ngân hàng hợp pháp nhưng thực chất bị đưa đến máy chủ giả mạo."
  },
  {
    "id": 1074,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Kỹ thuật \"IP Spoofing\" là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đổi màu địa chỉ IP trên giao diện đồ họa.",
      "B. Kẻ tấn công giả mạo địa chỉ IP nguồn trong tiêu đề gói tin để che giấu danh tính thật hoặc mạo danh một máy tính đáng tin cậy.",
      "C. Cắt dây mạng kết nối IP.",
      "D. Mua thêm nhiều dải địa chỉ IP công cộng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "IP Spoofing là việc tạo ra các gói tin IP với địa chỉ nguồn giả mạo nhằm lừa hệ thống đích chấp nhận gói tin hoặc chuyển hướng lưu lượng phản hồi."
  },
  {
    "id": 1075,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Lỗ hổng bảo mật Zero-Day (Ngày 0) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lỗ hổng đã được phát hiện cách đây 10 năm.",
      "B. Lỗ hổng phần mềm chưa được nhà phát triển biết đến hoặc chưa có bản vá bảo mật nào được phát hành khi cuộc tấn công xảy ra.",
      "C. Lỗi màn hình xanh xuất hiện vào ngày chủ nhật.",
      "D. Lỗ hổng chỉ tồn tại trong vòng 0 giây."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Zero-day ngụ ý các nhà phát triển có \"0 ngày\" để sửa lỗi vì nó đang bị khai thác trước khi kịp tạo ra bản vá."
  },
  {
    "id": 1076,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Kỹ thuật bẻ khóa mật khẩu",
    "question": "Điều nào sau đây mô tả chính xác nhất một cuộc tấn công Dictionary Attack (Tấn công từ điển)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ném cuốn từ điển vào màn hình máy tính.",
      "B. Sử dụng một danh sách các từ phổ biến và mật khẩu thường dùng có sẵn để thử đăng nhập tự động.",
      "C. Tìm kiếm định nghĩa của từ trong từ điển Oxford.",
      "D. Thay đổi ngôn ngữ hiển thị của bàn phím."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tấn công từ điển sử dụng danh sách từ ngữ, cụm từ phổ biến (dictionary wordlist) để bẻ khóa mật khẩu nhanh hơn nhiều so với vét cạn mọi ký tự."
  },
  {
    "id": 1077,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Kỹ thuật bẻ khóa mật khẩu",
    "question": "Rainbow Table được sử dụng cho mục đích gì trong an ninh mạng?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tạo hiệu ứng màu cầu vồng cho giao diện website.",
      "B. Tra cứu nhanh mật khẩu gốc từ các giá trị băm (hash) đã được tính toán sẵn, giúp bẻ khóa mật khẩu nhanh chóng.",
      "C. Lọc các gói tin mạng không hợp lệ.",
      "D. Sao lưu dữ liệu lên đám mây."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Rainbow Table là bảng dữ liệu tính toán sẵn các cặp (Mật khẩu văn bản rõ - Giá trị băm) để tra cứu ngược tìm mật khẩu gốc từ mã băm."
  },
  {
    "id": 1078,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Kỹ thuật Salting (Thêm muối) trong việc lưu trữ mật khẩu có tác dụng gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Làm cho mật khẩu có vị mặn hơn.",
      "B. Thêm một chuỗi ký tự ngẫu nhiên vào mật khẩu trước khi băm, giúp vô hiệu hóa các cuộc tấn công bằng Rainbow Table.",
      "C. Xóa sạch mật khẩu khỏi cơ sở dữ liệu.",
      "D. Giảm kích thước file chứa mật khẩu."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thêm Salt (chuỗi ngẫu nhiên) làm cho cùng một mật khẩu có giá trị băm hoàn toàn khác nhau, khiến Rainbow Table tính sẵn trở nên vô dụng."
  },
  {
    "id": 1079,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Một cuộc tấn công SYN Flood lợi dụng cơ chế bắt tay nào của giao thức mạng?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bắt tay 2 bước của UDP",
      "B. Bắt tay 3 bước (Three-way Handshake: SYN, SYN-ACK, ACK) của giao thức TCP",
      "C. Giao thức truyền file FTP",
      "D. Giao thức phân giải địa chỉ ARP"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SYN Flood gửi liên tục các gói tin SYN nhưng không bao giờ phản hồi ACK cuối cùng, khiến máy chủ phải giữ hàng ngàn phiên kết nối nửa mở (half-open) làm cạn kiệt tài nguyên bộ nhớ."
  },
  {
    "id": 1080,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Một cuộc tấn công Smurf Attack sử dụng loại lưu lượng mạng nào để làm tràn ngập nạn nhân?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Gói tin ICMP Echo Request (Ping) gửi đến địa chỉ Broadcast với địa chỉ nguồn giả mạo là máy nạn nhân",
      "B. Email quảng cáo spam",
      "C. Lưu lượng cuộc gọi video Skype",
      "D. Các truy vấn cơ sở dữ liệu SQL"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Smurf Attack gửi gói tin ICMP Ping đến địa chỉ quảng bá mạng với IP nguồn là nạn nhân, khiến tất cả máy tính trong mạng đồng loạt gửi phản hồi ICMP Reply về làm nghẽn máy nạn nhân."
  },
  {
    "id": 1081,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Kỹ thuật Pretexting trong Social Engineering là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Gửi email hàng loạt cho 1 triệu người cùng lúc.",
      "B. Kẻ tấn công tạo ra một kịch bản hoặc lý do giả hợp lý (ví dụ đóng giả nhân viên hỗ trợ kỹ thuật hoặc kiểm toán viên) để lừa nạn nhân cung cấp thông tin bí mật.",
      "C. Chèn mã độc vào file ảnh JPG.",
      "D. Tấn công vét cạn mật khẩu Wi-Fi."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pretexting là nghệ thuật tạo dựng câu chuyện, bối cảnh giả mạo đầy thuyết phục để dẫn dắt nạn nhân làm theo yêu cầu của kẻ xấu."
  },
  {
    "id": 1082,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Kỹ thuật Baiting (Gài bẫy) trong an ninh mạng thường được tiến hành như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nhắn tin tán tỉnh trên mạng xã hội.",
      "B. Kẻ tấn công để lại một chiếc thẻ nhớ USB hoặc ổ cứng có dán nhãn hấp dẫn (như \"Bảng lương quý 4\", \"Hồ sơ mật\") ở nơi công cộng như bãi giữ xe hoặc hành lang công ty để kích thích sự tò mò của nạn nhân cắm vào máy tính.",
      "C. Mời nạn nhân đi ăn trưa.",
      "D. Gửi tặng máy in mới cho văn phòng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Baiting đánh vào tính tò mò hoặc lòng tham; khi nạn nhân cắm USB độc hại vào máy tính công ty, mã độc tự động chạy và lây nhiễm mạng nội bộ."
  },
  {
    "id": 1083,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Cross-Site Scripting (XSS)",
    "question": "Tấn công Cross-Site Scripting (XSS) nhắm vào đối tượng nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dây cáp mạng Internet ngầm",
      "B. Ứng dụng web, bằng cách chèn các đoạn mã kịch bản độc hại (thường là JavaScript) vào trang web để thực thi trên trình duyệt của người dùng khác",
      "C. Nguồn điện cấp cho phòng máy chủ",
      "D. Card đồ họa của máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "XSS là lỗ hổng ứng dụng web cho phép kẻ tấn công đưa mã script độc hại vào trình duyệt của người dùng xem trang web đó để đánh cắp session cookie hoặc token."
  },
  {
    "id": 1084,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công SQL Injection",
    "question": "Tấn công SQL Injection (SQLi) cho phép kẻ tấn công làm gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Làm đứt kết nối mạng nội bộ",
      "B. Can thiệp vào các câu lệnh truy vấn cơ sở dữ liệu để xem, sửa đổi hoặc xóa dữ liệu nhạy cảm mà không cần quyền truy cập hợp lệ",
      "C. Tăng tốc độ truy vấn cơ sở dữ liệu",
      "D. Tắt màn hình máy chủ từ xa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SQL Injection khai thác lỗi không kiểm tra dữ liệu đầu vào (Input Validation) của ứng dụng web, cho phép kẻ tấn công thực thi các lệnh SQL trái phép trên cơ sở dữ liệu."
  },
  {
    "id": 1085,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Lỗ hổng tràn bộ đệm (Buffer Overflow) xảy ra khi nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Khi máy tính bị mất điện đột ngột",
      "B. Khi chương trình ghi dữ liệu vượt quá giới hạn dung lượng được phân bổ của vùng đệm bộ nhớ, dẫn đến ghi đè lên các vùng nhớ liền kề và có thể thực thi mã tùy ý",
      "C. Khi dung lượng ổ đĩa cứng bị đầy 100%",
      "D. Khi có quá nhiều người cùng kết nối vào một máy chủ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Buffer Overflow xảy ra khi ứng dụng ghi dữ liệu vượt quá kích thước bộ đệm, làm tràn sang các vùng nhớ khác, tạo điều kiện cho tin tặc chèn mã máy thực thi."
  },
  {
    "id": 1086,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Tấn công Replay Attack (Tấn công phát lại) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phát lại một video ca nhạc trên YouTube nhiều lần",
      "B. Kẻ tấn công chặn bắt một gói tin xác thực hợp lệ trên mạng và phát lại gói tin đó sau đó để giả mạo phiên đăng nhập của người dùng",
      "C. Khởi động lại máy tính liên tục",
      "D. Gửi lại cùng một email nhiều lần"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Replay Attack đánh cắp các gói tin xác thực hợp pháp trên đường truyền và gửi lại nguyên vẹn cho máy chủ để đánh lừa hệ thống cấp quyền truy cập."
  },
  {
    "id": 1087,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Thuật ngữ APT (Advanced Persistent Threat) thường liên quan đến đối tượng tấn công nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Học sinh trung học mới học lập trình",
      "B. Các nhóm gián điệp mạng có trình độ kỹ thuật cao, được các chính phủ hoặc tổ chức tội phạm quy mô lớn tài trợ ngân sách dồi dào",
      "C. Người vô tình làm hỏng máy tính cá nhân",
      "D. Những người bán hàng rong qua mạng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "APT là các chiến dịch tấn công kéo dài, tinh vi, nhắm vào các mục tiêu giá trị cao của chính phủ hoặc tập đoàn lớn, đòi hỏi nguồn lực và ngân sách khổng lồ."
  },
  {
    "id": 1088,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Phương thức tấn công nào sau đây KHÔNG thuộc nhóm tấn công Social Engineering (Phi kỹ thuật)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phishing",
      "B. Pretexting",
      "C. Buffer Overflow",
      "D. Dumpster Diving"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Buffer Overflow là lỗ hổng kỹ thuật phần mềm; trong khi Phishing, Pretexting và Dumpster Diving là các kỹ thuật tấn công phi kỹ thuật nhắm vào con người."
  },
  {
    "id": 1089,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Social Engineering & Phishing",
    "question": "Trong cuộc tấn công Phishing, dấu hiệu nhận biết email lừa đảo thường là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lỗi chính tả, ngữ pháp bất thường trong nội dung email",
      "B. Địa chỉ email người gửi có tên miền gần giống nhưng không chính xác (ví dụ support@paypa1.com thay vì paypal.com)",
      "C. Lời lẽ khẩn cấp, đe dọa khóa tài khoản ngay lập tức nếu không hành động",
      "D. Tất cả các phương án trên"
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kẻ lừa đảo thường dùng tên miền gần giống (typosquatting), thúc ép tâm lý khẩn trương và thường có sai sót về ngữ pháp."
  },
  {
    "id": 1090,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Kỹ thuật Port Scanning (Quét cổng) được kẻ tấn công sử dụng trong giai đoạn nào của cuộc tấn công?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giai đoạn thu thập thông tin và trinh sát (Reconnaissance) nhằm tìm kiếm các dịch vụ đang mở và có khả năng bị tấn công",
      "B. Giai đoạn tống tiền nạn nhân",
      "C. Giai đoạn khôi phục dữ liệu",
      "D. Giai đoạn rút tiền từ tài khoản nạn nhân"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quét cổng (dùng công cụ như Nmap) là bước trinh sát ban đầu giúp kẻ tấn công phát hiện các cổng mở và phiên bản dịch vụ đang chạy trên hệ thống mục tiêu."
  },
  {
    "id": 1091,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Mạng máy tính ma (Botnet)",
    "question": "Khái niệm \"Botnet\" là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một mạng xã hội dành cho robot",
      "B. Mạng lưới các thiết bị kết nối Internet bị nhiễm mã độc và bị kiểm soát từ xa bởi một kẻ tấn công (Botmaster)",
      "C. Một trò chơi điện tử trực tuyến nhiều người chơi",
      "D. Một loại cáp mạng có tốc độ cao"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Botnet là mạng lưới máy tính ma quái (Zombies) bị kẻ tấn công chỉ huy đồng loạt để thực hiện tấn công DDoS, gửi thư rác hoặc đào tiền ảo."
  },
  {
    "id": 1092,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Mạng máy tính ma (Botnet)",
    "question": "Tại sao các thiết bị nhà thông minh (IoT) thường bị tin tặc biến thành Botnet tấn công DDoS?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì thiết bị IoT có màn hình quá nhỏ",
      "B. Vì thiết bị IoT thường có bảo mật kém, ít khi cập nhật phần mềm và người dùng thường để nguyên mật khẩu mặc định của nhà máy",
      "C. Vì thiết bị IoT tiêu tốn ít điện năng",
      "D. Vì thiết bị IoT chỉ chạy hệ điều hành macOS"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thiết bị IoT (camera, router gia đình) thường thiếu cơ chế cập nhật tự động và người dùng không đổi thông tin đăng nhập mặc định (admin/admin), biến chúng thành mồi ngon cho mã độc như Mirai."
  },
  {
    "id": 1093,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Mật mã học (Cryptography)",
    "question": "Chuẩn mã hóa Wi-Fi nào sau đây bị coi là cực kỳ lỗi thời, mất an toàn và có thể bị tin tặc bẻ khóa trong vài phút bằng công cụ dò sóng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. WPA3-Enterprise",
      "B. WEP (Wired Equivalent Privacy)",
      "C. WPA2-AES",
      "D. IPsec"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "WEP sử dụng thuật toán mã hóa RC4 với vector khởi tạo (IV) quá ngắn và lặp lại, khiến tin tặc có thể thu thập đủ gói tin và bẻ khóa mật khẩu chỉ trong vài phút."
  },
  {
    "id": 1094,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Phần mềm gián điệp & Quảng cáo",
    "question": "Phần mềm gián điệp (Spyware) thường thâm nhập vào máy tính người dùng qua con đường nào phổ biến nhất?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Được cài đặt sẵn từ nhà máy của các thương hiệu máy tính lớn",
      "B. Đi kèm (bundle) với các phần mềm tải lậu, phần mềm bẻ khóa (crack) hoặc trò chơi miễn phí từ các trang web không rõ nguồn gốc",
      "C. Do hệ thống cáp mạng tự động sinh ra",
      "D. Tự động lây qua sóng radio FM"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Spyware thường được đính kèm ngầm trong các bộ cài đặt phần mềm bẻ khóa (crack/keygen) hoặc tiện ích miễn phí trôi nổi trên mạng."
  },
  {
    "id": 1095,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Điều nào sau đây là hành vi đúng đắn khi nhận được một email từ ngân hàng yêu cầu nhấp vào link để cập nhật thông tin tài khoản?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nhấp vào link ngay lập tức và nhập thông tin để tránh bị khóa tài khoản",
      "B. Chuyển tiếp email đó cho tất cả bạn bè để cảnh báo",
      "C. Không nhấp vào link trong email, mở trình duyệt và tự gõ địa chỉ website chính thức của ngân hàng hoặc gọi số hotline tổng đài ngân hàng để kiểm tra",
      "D. Trả lời email gửi kèm mật khẩu hiện tại"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ngân hàng không bao giờ yêu cầu khách hàng cung cấp mật khẩu qua liên kết email; cách an toàn nhất là chủ động truy cập website chính thức độc lập."
  },
  {
    "id": 1096,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Man-in-the-Middle (On-Path)",
    "question": "Một cuộc tấn công Man-in-the-Middle có thể bị ngăn chặn hiệu quả nhất bằng biện pháp kỹ thuật nào sau đây?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tắt màn hình khi không sử dụng",
      "B. Sử dụng mã hóa đầu cuối (End-to-End Encryption) và xác thực chứng chỉ số SSL/TLS (HTTPS) hợp lệ",
      "C. Tăng độ sáng màn hình máy tính",
      "D. Đổi tên máy tính cá nhân"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã hóa SSL/TLS ngăn kẻ đứng giữa đọc được dữ liệu rõ, và chứng chỉ số (Digital Certificate) giúp người dùng phát hiện ngay nếu đang bị một kẻ giả mạo chặn đường truyền."
  },
  {
    "id": 1097,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Khái niệm \"Backdoor\" (Cổng sau) trong an ninh phần mềm là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cửa thoát hiểm phía sau của phòng đặt máy chủ",
      "B. Cơ chế bí mật được cài cắm vào phần mềm cho phép kẻ tấn công bỏ qua các bước xác thực thông thường để truy cập hệ thống từ xa",
      "C. Cổng kết nối cáp mạng ở mặt sau của máy tính",
      "D. Lỗ thông gió của thùng máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Backdoor là lối vào bí mật do lập trình viên cố ý để lại hoặc do mã độc tạo ra để kẻ tấn công dễ dàng quay lại kiểm soát hệ thống bất cứ lúc nào."
  },
  {
    "id": 1098,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Tấn công từ chối dịch vụ phân tán (DDoS) khác với tấn công từ chối dịch vụ (DoS) thông thường ở điểm nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. DoS nguy hiểm hơn DDoS",
      "B. DoS xuất phát từ một máy tính duy nhất, trong khi DDoS xuất phát đồng thời từ hàng ngàn, hàng triệu máy tính khác nhau phân tán trên toàn cầu",
      "C. DDoS chỉ tấn công các trang web bán hoa",
      "D. DoS sử dụng botnet còn DDoS thì không"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tấn công DoS chỉ dùng 1 nguồn duy nhất (dễ bị chặn IP), còn DDoS huy động hàng ngàn thiết bị zombie phân tán khắp thế giới, khiến việc phòng thủ và lọc lưu lượng khó khăn hơn gấp bội."
  },
  {
    "id": 1099,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xác thực đa yếu tố (MFA)",
    "question": "Kỹ thuật lừa đảo mạo danh địa chỉ email người gửi (Email Spoofing) có thể thực hiện được là do giao thức gửi thư nào ban đầu vốn không có cơ chế xác thực nguồn gốc tích hợp?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. POP3",
      "B. IMAP",
      "C. SMTP (Simple Mail Transfer Protocol)",
      "D. HTTP"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Giao thức SMTP truyền thống không có cơ chế xác minh tính xác thực của người gửi, dẫn đến việc kẻ tấn công có thể dễ dàng điền bất kỳ địa chỉ nào vào trường \"From:\"."
  },
  {
    "id": 1100,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc",
    "question": "Nhận định nào sau đây là ĐÚNG khi nói về phần mềm diệt virus (Antivirus)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Khi đã cài phần mềm diệt virus thì máy tính an toàn 100% trước mọi cuộc tấn công mạng.",
      "B. Phần mềm diệt virus chỉ là một lớp bảo vệ trong mô hình phòng thủ nhiều lớp, cần kết hợp với cập nhật hệ điều hành và ý thức cảnh giác của người dùng.",
      "C. Phần mềm diệt virus không bao giờ cần cập nhật cơ sở dữ liệu.",
      "D. Phần mềm diệt virus có thể ngăn chặn được kẻ trộm lấy cắp máy tính vật lý."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Không có công cụ nào bảo vệ an toàn tuyệt đối 100%. Phần mềm diệt virus là lớp phòng thủ cần thiết nhưng cần cập nhật liên tục và kết hợp với hành vi sử dụng an toàn của con người."
  },
  {
    "id": 1101,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Công nghệ nào giúp loại bỏ trực tiếp chi phí mua sắm thiết bị phần cứng và bảo trì hạ tầng sao lưu dữ liệu cho người dùng cá nhân?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mạng cục bộ có dây (LAN)",
      "B. Dịch vụ lưu trữ đám mây (Cloud Service / Cloud Backup)",
      "C. Ổ cứng gắn ngoài USB",
      "D. Băng từ sao lưu (Tape Backup)"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sử dụng dịch vụ lưu trữ đám mây (Cloud Service) chuyển gánh nặng chi phí mua sắm phần cứng lưu trữ và bảo trì hệ thống sang nhà cung cấp dịch vụ đám mây."
  },
  {
    "id": 1102,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Một người dùng đang sử dụng máy tính xách tay kết nối vào mạng Wi-Fi công cộng tại một quán cà phê. Điều gì nên được kiểm tra và tắt đầu tiên trên máy tính?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tắt độ sáng màn hình máy tính",
      "B. Kiểm tra và tắt tính năng chia sẻ tệp và máy in (File and Media / Printer Sharing)",
      "C. Rút dây nguồn sạc pin máy tính",
      "D. Tắt chuột không dây"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khi kết nối vào Wi-Fi công cộng không tin cậy, việc bật tính năng chia sẻ tệp/thư mục có thể khiến người khác cùng kết nối trong mạng nhìn thấy hoặc truy cập trái phép vào tài liệu cá nhân của bạn."
  },
  {
    "id": 1103,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Làm thế nào để một nhân viên sử dụng máy tính dùng chung tại văn phòng giữ cho lịch sử duyệt web cá nhân không bị người dùng tiếp theo nhìn thấy?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bật chế độ duyệt web toàn màn hình (F11)",
      "B. Sử dụng chế độ duyệt web riêng tư (Private / Incognito Mode)",
      "C. Đổi ảnh nền máy tính sang màu đen",
      "D. Ngắt dây cáp mạng trước khi mở trình duyệt"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chế độ duyệt web riêng tư (Incognito / InPrivate) tự động xóa lịch sử duyệt web, bộ nhớ cache và cookie ngay khi người dùng đóng tất cả các cửa sổ trình duyệt."
  },
  {
    "id": 1104,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tại sao các thiết bị nhà thông minh (IoT) lại tạo ra rủi ro an ninh mạng lớn hơn so với máy tính cá nhân hoặc điện thoại thông minh?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì thiết bị IoT luôn có kích thước quá nhỏ.",
      "B. Hầu hết các thiết bị IoT không nhận được các bản cập nhật firmware định kỳ và thường giữ nguyên cấu hình bảo mật mặc định yếu.",
      "C. Vì thiết bị IoT sử dụng dòng điện một chiều DC.",
      "D. Vì thiết bị IoT không có khả năng kết nối mạng Internet."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thiết bị IoT thường bị bỏ quên khâu cập nhật phần mềm/firmware và người dùng ít khi đổi mật khẩu mặc định của nhà máy, khiến chúng dễ bị tấn công và biến thành botnet."
  },
  {
    "id": 1105,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Xác thực đa yếu tố (MFA)",
    "question": "Một khách hàng muốn in các bức ảnh lưu trên tài khoản đám mây bằng một dịch vụ in ảnh trực tuyến của bên thứ ba. Sau khi đăng nhập vào tài khoản đám mây và cấp phép, dịch vụ in ảnh tự động có quyền truy cập vào kho ảnh mà không cần biết mật khẩu tài khoản đám mây của khách hàng. Điều gì đã cho phép xác thực này diễn ra?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dịch vụ in ảnh đã bẻ khóa mật khẩu đám mây của người dùng.",
      "B. Dịch vụ lưu trữ đám mây xem dịch vụ in ảnh là một ứng dụng được phê duyệt (Approved Application qua cơ chế OAuth).",
      "C. Máy tính của người dùng bị nhiễm mã độc Trojan.",
      "D. Hai dịch vụ này có chung cơ sở dữ liệu nhân viên."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đây là cơ chế ủy quyền OAuth (Delegated Authorization), trong đó dịch vụ đám mây xem dịch vụ bên thứ ba là ứng dụng được phê duyệt (approved application) và cấp access token giới hạn mà không cần lộ mật khẩu chính."
  },
  {
    "id": 1106,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Biện pháp thực hành tốt nhất để bảo vệ kết nối Bluetooth trên thiết bị di động cá nhân là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Luôn để Bluetooth ở chế độ phát hiện công khai (Discoverable).",
      "B. Luôn tắt Bluetooth khi không có nhu cầu sử dụng tích cực.",
      "C. Đặt tên Bluetooth là số điện thoại cá nhân.",
      "D. Kết nối Bluetooth với bất kỳ thiết bị nào xuất hiện xung quanh."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tắt Bluetooth khi không sử dụng giúp ngăn chặn các hình thức tấn công không dây như Bluejacking, Bluesnarfing hoặc theo dõi vị trí thiết bị."
  },
  {
    "id": 1107,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Quy tắc sao lưu dữ liệu kinh điển \"3-2-1\" bao gồm những yêu cầu nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giữ 3 bản sao dữ liệu, trên 2 phương tiện lưu trữ khác nhau, với ít nhất 1 bản lưu tại địa điểm khác bên ngoài (Offsite / Cloud).",
      "B. Sao lưu 3 lần một ngày, trong 2 giờ, lưu trên 1 ổ cứng duy nhất.",
      "C. Giữ 3 mật khẩu, đổi sau 2 tháng, cho 1 tài khoản.",
      "D. Sao lưu dữ liệu của 3 nhân viên, chia thành 2 thư mục, lưu 1 file nén."
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nguyên tắc sao lưu 3-2-1: 3 bản sao dữ liệu (1 chính, 2 phụ), trên 2 loại thiết bị lưu trữ khác nhau, và 1 bản đặt ở vị trí địa lý khác (offsite/cloud) để tránh mất dữ liệu khi gặp thiên tai, hỏa hoạn."
  },
  {
    "id": 1108,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Mật khẩu nào sau đây được coi là có độ an toàn và độ mạnh cao nhất theo tiêu chuẩn bảo mật hiện đại?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Password123",
      "B. NguyenVanA_1995",
      "C. Blue#Horse!Running$2026Fast",
      "D. 1234567890!@#$"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cụm mật khẩu (Passphrase) dài trên 20 ký tự, kết hợp nhiều từ ngẫu nhiên cùng chữ hoa, chữ thường, số và ký tự đặc biệt có độ phức tạp cao, chống lại tấn công vét cạn và từ điển hiệu quả."
  },
  {
    "id": 1109,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Xác thực đa yếu tố (MFA)",
    "question": "Yếu tố xác thực \"Something you have\" (Điều bạn có) trong xác thực đa yếu tố (MFA) được minh họa bằng trường hợp nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mật khẩu đăng nhập tài khoản",
      "B. Dấu vân tay của ngón tay trỏ",
      "C. Khóa bảo mật phần cứng USB (Security Key) hoặc mã OTP sinh ra từ điện thoại của bạn",
      "D. Câu trả lời cho câu hỏi bảo mật \"Tên trường tiểu học đầu tiên của bạn\""
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Khóa phần cứng (FIDO key), thẻ thông minh (smartcard), hoặc điện thoại nhận OTP là những vật thể vật lý mà bạn đang sở hữu (something you have)."
  },
  {
    "id": 1110,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Xác thực đa yếu tố (MFA)",
    "question": "Yếu tố xác thực \"Something you are\" (Điều bạn là) trong hệ thống an ninh bao gồm:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mã PIN 6 chữ số",
      "B. Dữ liệu sinh trắc học như quét mống mắt, nhận diện khuôn mặt hoặc vân tay",
      "C. Thẻ nhân viên công ty",
      "D. Tên đăng nhập tài khoản"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "\"Something you are\" là các đặc điểm sinh học độc nhất của cơ thể con người (vân tay, khuôn mặt, mống mắt, giọng nói)."
  },
  {
    "id": 1111,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Xác thực đa yếu tố (MFA)",
    "question": "Một công ty áp dụng xác thực hai yếu tố (2FA) bằng cách yêu cầu nhân viên nhập mật khẩu máy tính và sau đó nhập mã PIN 4 số. Hệ thống này có thực sự đạt chuẩn 2FA hay không?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Có, vì có 2 bước nhập mã riêng biệt.",
      "B. Không, vì cả mật khẩu và mã PIN đều thuộc cùng một nhóm yếu tố xác thực là \"Something you know\" (Điều bạn biết).",
      "C. Có, vì mã PIN ngắn hơn mật khẩu.",
      "D. Có, nếu nhân viên đổi mã PIN mỗi ngày."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Xác thực hai yếu tố thực thụ bắt buộc phải kết hợp hai nhóm yếu tố KHÁC NHAU (ví dụ: Something you know kết hợp với Something you have). Hai yếu tố cùng là \"Điều bạn biết\" không phải là 2FA chuẩn."
  },
  {
    "id": 1112,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mật mã học (Cryptography)",
    "question": "Tính năng mã hóa toàn bộ ổ đĩa tích hợp sẵn trên hệ điều hành Windows có tên là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. FileVault",
      "B. BitLocker",
      "C. Defender",
      "D. TrueCrypt"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "BitLocker là giải pháp mã hóa toàn bộ ổ đĩa (Full Disk Encryption) được tích hợp trong các phiên bản Pro/Enterprise của Windows."
  },
  {
    "id": 1113,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mật mã học (Cryptography)",
    "question": "Tính năng mã hóa toàn bộ ổ đĩa tích hợp sẵn trên hệ điều hành macOS của Apple có tên là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. BitLocker",
      "B. FileVault",
      "C. Time Machine",
      "D. Keychain"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "FileVault là công cụ mã hóa ổ đĩa tích hợp sẵn trên hệ điều hành macOS."
  },
  {
    "id": 1114,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tại sao việc chỉ nhấn phím \"Delete\" và làm trống thùng rác (Empty Recycle Bin/Trash) lại KHÔNG an toàn khi bạn muốn vứt bỏ ổ cứng cũ chứa dữ liệu nhạy cảm?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì thùng rác sẽ tự động gửi file qua email cho người khác.",
      "B. Vì thao tác đó chỉ xóa con trỏ quản lý tệp tin, dữ liệu thực tế vẫn còn nguyên vẹn trên đĩa từ và có thể phục hồi dễ dàng bằng phần mềm khôi phục dữ liệu.",
      "C. Vì máy tính sẽ bị cháy chip xử lý.",
      "D. Vì ổ cứng sẽ không thể tái sử dụng được nữa."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Xóa thông thường chỉ đánh dấu khoảng trống là sẵn sàng ghi đè, dữ liệu gốc vẫn tồn tại trên bề mặt từ tính cho đến khi bị ghi đè hoàn toàn."
  },
  {
    "id": 1115,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Phương pháp nào sau đây đảm bảo dữ liệu trên ổ đĩa từ (HDD) bị tiêu hủy hoàn toàn mà không thể khôi phục lại được bằng bất kỳ phần mềm nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đổi tên toàn bộ thư mục",
      "B. Sử dụng máy khử từ chuyên dụng (Degaussing) hoặc máy nghiền nát vật lý (Physical Shredding)",
      "C. Đặt ổ cứng trong tủ lạnh 24 giờ",
      "D. Khởi động lại máy tính 10 lần liên tục"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khử từ (Degaussing) phá hủy từ tính chứa dữ liệu hoặc nghiền nát vật lý ổ đĩa là các biện pháp tiêu hủy dữ liệu triệt để nhất được khuyến nghị."
  },
  {
    "id": 1116,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Khi cấu hình một Router Wi-Fi gia đình mới mua, hành động quan trọng hàng đầu cần thực hiện ngay là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đổi màu đèn LED trên vỏ thiết bị",
      "B. Thay đổi ngay tên tài khoản và mật khẩu quản trị (admin password) mặc định của nhà sản xuất",
      "C. Cắt bớt độ dài dây ăng-ten phát sóng",
      "D. Cắm dây mạng vào tất cả các cổng còn trống"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mật khẩu mặc định của router (như admin/admin) được công khai trên Internet; nếu không đổi, bất kỳ ai kết nối vào mạng đều có thể chiếm quyền điều khiển router."
  },
  {
    "id": 1117,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mật mã học (Cryptography)",
    "question": "Chuẩn mã hóa bảo mật không dây nào được khuyến nghị sử dụng hiện nay trên các mạng Wi-Fi gia đình và doanh nghiệp?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. WEP",
      "B. WPA-TKIP",
      "C. WPA2-AES hoặc WPA3",
      "D. Không đặt mật khẩu để tốc độ nhanh hơn"
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "WPA2 với thuật toán AES và WPA3 là các chuẩn mã hóa Wi-Fi mạnh mẽ, có khả năng chống lại các cuộc tấn công bẻ khóa mật mã hiện đại."
  },
  {
    "id": 1118,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Lợi ích chính của việc thiết lập mạng khách (Guest Network) trên Router Wi-Fi gia đình là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giúp khách có tốc độ Internet nhanh gấp đôi chủ nhà",
      "B. Cách ly các thiết bị của khách và các thiết bị IoT kém an toàn khỏi mạng nội bộ chính, bảo vệ máy tính và dữ liệu quan trọng của gia đình",
      "C. Tự động xóa dữ liệu trên điện thoại của khách",
      "D. Giúp router tiết kiệm điện năng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Guest Network tách biệt lưu lượng mạng, ngăn không cho khách hoặc các thiết bị thông minh bị hack có thể quét và thâm nhập vào máy tính cá nhân của chủ nhà."
  },
  {
    "id": 1119,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tại sao bạn nên thận trọng khi cấp quyền truy cập vị trí địa lý (GPS) cho các ứng dụng trò chơi hoặc chỉnh sửa ảnh trên điện thoại?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì GPS làm màn hình điện thoại bị tối đi",
      "B. Vì việc theo dõi vị trí liên tục làm lộ thông tin thói quen di chuyển, địa chỉ nhà ở và nơi làm việc, xâm phạm quyền riêng tư nghiêm trọng",
      "C. Vì ứng dụng sẽ tự động chụp ảnh bạn",
      "D. Vì điện thoại sẽ bị mất sóng 4G"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dữ liệu định vị phản ánh cuộc sống thực tế của bạn; việc chia sẻ dữ liệu vị trí không cần thiết tạo cơ hội cho kẻ xấu theo dõi hoặc bên thứ ba thu thập dữ liệu bất chính."
  },
  {
    "id": 1120,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mạng riêng ảo (VPN & IPsec)",
    "question": "Công nghệ Mạng riêng ảo (VPN - Virtual Private Network) bảo vệ người dùng khi sử dụng Wi-Fi công cộng bằng cách nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động diệt sạch virus trên máy chủ quán cà phê",
      "B. Tạo ra một đường hầm mã hóa an toàn (Encrypted Tunnel) cho toàn bộ dữ liệu truyền giữa thiết bị của người dùng và máy chủ VPN",
      "C. Ngăn không cho người khác nhìn vào màn hình máy tính của bạn",
      "D. Tăng dung lượng pin cho máy tính xách tay"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "VPN mã hóa toàn bộ dữ liệu ra vào thiết bị, khiến bất kỳ kẻ nào nghe lén trên cùng mạng Wi-Fi công cộng chỉ thấy được các gói tin mã hóa vô nghĩa."
  },
  {
    "id": 1121,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Phần mềm quản lý mật khẩu (Password Manager) mang lại lợi ích bảo mật nào nổi bật nhất?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động gửi mật khẩu của bạn lên diễn đàn để sao lưu",
      "B. Giúp tạo và lưu trữ an toàn các mật khẩu dài, phức tạp, duy nhất cho từng trang web mà người dùng chỉ cần nhớ một Mật khẩu chủ (Master Password) duy nhất",
      "C. Cho phép bạn không cần dùng mật khẩu nữa",
      "D. Giúp tăng tốc độ đánh máy văn bản"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Password Manager loại bỏ thói quen dùng chung một mật khẩu đơn giản, lưu trữ tất cả mật khẩu phức tạp trong kho mã hóa an toàn."
  },
  {
    "id": 1122,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "\"Dấu chân số thụ động\" (Passive Digital Footprint) được tạo ra khi nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Khi bạn chủ động đăng bài viết hoặc tải video lên trang cá nhân",
      "B. Khi thông tin về bạn được thu thập mà bạn không trực tiếp chủ ý thực hiện (ví dụ: máy chủ ghi nhận địa chỉ IP của bạn khi bạn ghé thăm một trang web)",
      "C. Khi bạn tắt máy tính đi ngủ",
      "D. Khi bạn mua bàn phím mới"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dấu chân số thụ động được ghi lại âm thầm trong nền (địa chỉ IP, cookies, lịch sử click chuột, thời gian dừng trên trang) mà người dùng không chủ động gửi."
  },
  {
    "id": 1123,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Cookie của trình duyệt web là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một loại bánh ăn vặt khi làm việc với máy tính",
      "B. Tệp văn bản nhỏ do trang web lưu trên máy tính người dùng để ghi nhớ thông tin phiên đăng nhập, tùy chọn cá nhân và theo dõi hành vi duyệt web",
      "C. Một loại virus máy tính chuyên phá hoại tệp văn bản",
      "D. Phần mềm tăng tốc card đồ họa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cookie lưu trữ thông tin trạng thái duyệt web. Dù tiện lợi cho đăng nhập, cookie của bên thứ ba (Third-party cookies) thường bị lợi dụng để theo dõi người dùng xuyên suốt các website."
  },
  {
    "id": 1124,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Khi một trang web hỏi: \"Bạn có muốn lưu thông tin thẻ tín dụng cho lần mua sắm tiếp theo không?\", lựa chọn an toàn nhất xét theo góc độ an ninh dữ liệu là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đồng ý lưu để tiện lợi lần sau",
      "B. Không lưu thông tin thẻ trên trang web đó",
      "C. Gửi thêm cả mật khẩu thẻ cho trang web",
      "D. Chụp ảnh hai mặt thẻ gửi qua hộp thư hỗ trợ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Không lưu thông tin thanh toán giúp bảo vệ bạn nếu cơ sở dữ liệu của trang web thương mại điện tử đó bị tin tặc tấn công trong tương lai."
  },
  {
    "id": 1125,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Tại sao việc tự động kết nối (Auto-Connect) vào các mạng Wi-Fi mở không có mật khẩu lại là một thói quen nguy hiểm trên điện thoại?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì điện thoại sẽ bị hao pin rất nhanh",
      "B. Vì điện thoại có thể tự động kết nối vào các điểm phát sóng độc hại (Evil Twin) do tin tặc dựng sẵn mà người dùng không hề hay biết",
      "C. Vì màn hình điện thoại sẽ bị đơ cảm ứng",
      "D. Vì danh bạ điện thoại sẽ tự động bị xóa sạch"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ xấu có thể tạo Wi-Fi giả trùng tên với các điểm công cộng phổ biến (như \"Free Airport WiFi\"), điện thoại có tính năng tự kết nối sẽ vô tình nhảy vào bẫy nghe lén."
  },
  {
    "id": 1126,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Điều nào sau đây là rủi ro bảo mật chính khi thực hiện \"Jailbreak\" (trên iOS) hoặc \"Root\" (trên Android) thiết bị di động?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bạn không thể thay đổi hình nền điện thoại nữa",
      "B. Gỡ bỏ các cơ chế kiểm soát bảo mật và phân vùng an toàn (Sandbox) của hệ điều hành, khiến mã độc dễ dàng chiếm toàn quyền điều khiển thiết bị",
      "C. Bàn phím gõ tiếng Việt bị lỗi",
      "D. Không thể gọi điện thoại được nữa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Jailbreak/Root phá vỡ mô hình hộp cát (Sandboxing) của hệ điều hành, cho phép ứng dụng độc hại vượt rào kiểm soát để đọc trộm dữ liệu của mọi ứng dụng khác."
  },
  {
    "id": 1127,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Khi duyệt web, nếu bạn thấy trình duyệt cảnh báo \"Kết nối của bạn không phải là kết nối riêng tư\" (Your connection is not private / SSL Certificate Error), bạn nên làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tiếp tục truy cập bất chấp cảnh báo vì cảnh báo đó luôn là giả",
      "B. Dừng truy cập ngay lập tức, vì trang web có thể đang bị giả mạo hoặc có kẻ đang cố gắng thực hiện cuộc tấn công Man-in-the-Middle nghe lén thông tin",
      "C. Tắt phần mềm diệt virus rồi tải lại trang",
      "D. Nhập ngay số thẻ ngân hàng để kiểm tra tính năng bảo mật"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lỗi chứng chỉ SSL cho thấy kết nối không được xác thực hoặc đang bị giải mã bởi bên thứ ba trên đường truyền, không an toàn để tiếp tục."
  },
  {
    "id": 1128,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mật mã học (Cryptography)",
    "question": "Thuật toán mã hóa đối xứng (Symmetric Encryption) có đặc điểm nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Sử dụng hai khóa hoàn toàn khác nhau để mã hóa và giải mã",
      "B. Sử dụng cùng một khóa bí mật duy nhất cho cả quá trình mã hóa và giải mã dữ liệu",
      "C. Không bao giờ cần đến khóa",
      "D. Chỉ có thể mã hóa các tệp có dung lượng dưới 1 MB"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã hóa đối xứng (như AES, DES) dùng chung một khóa (Secret Key) để khóa và mở dữ liệu. Ưu điểm là tốc độ xử lý rất nhanh."
  },
  {
    "id": 1129,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mật mã học (Cryptography)",
    "question": "Thuật toán mã hóa bất đối xứng (Asymmetric Encryption) sử dụng cặp khóa nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Khóa vàng và Khóa bạc",
      "B. Khóa công khai (Public Key) và Khóa bí mật (Private Key)",
      "C. Khóa phần cứng và Khóa phần mềm",
      "D. Khóa nội bộ và Khóa bên ngoài"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã hóa bất đối xứng (như RSA) sử dụng Public Key để mã hóa (ai cũng có thể biết) và Private Key để giải mã (chỉ chủ sở hữu giữ bí mật)."
  },
  {
    "id": 1130,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Một bức ảnh kỹ thuật số chụp bằng điện thoại thông minh thường chứa siêu dữ liệu ẩn (EXIF Metadata). Dữ liệu này có thể làm lộ thông tin nhạy cảm nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tọa độ vị trí địa lý GPS chính xác nơi chụp bức ảnh, ngày giờ chụp và dòng máy ảnh",
      "B. Mật khẩu tài khoản ngân hàng của người chụp",
      "C. Danh bạ điện thoại của người chụp",
      "D. Số dư tài khoản điện thoại"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dữ liệu EXIF nhúng trong tệp ảnh chứa vị trí GPS, thời gian và thông số thiết bị, có thể làm lộ địa chỉ nhà riêng nếu đăng tải ảnh gốc lên mạng công cộng."
  },
  {
    "id": 1131,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Phương pháp \"Over-the-Air\" (OTA) Update trên điện thoại di động đề cập đến việc gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cập nhật qua sóng phát thanh radio AM",
      "B. Cập nhật hệ điều hành và các bản vá bảo mật trực tiếp thông qua kết nối mạng không dây (Wi-Fi/4G/5G) mà không cần cắm cáp vào máy tính",
      "C. Cập nhật phần mềm bằng cách mang ra cửa hàng sửa chữa",
      "D. Cập nhật mật khẩu qua tin nhắn SMS"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cập nhật OTA cho phép người dùng tải và cài đặt bản vá bảo mật từ máy chủ nhà sản xuất trực tiếp qua kết nối không dây."
  },
  {
    "id": 1132,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Đâu là một hành vi sử dụng mạng xã hội AN TOÀN để bảo vệ sự an toàn cá nhân và gia đình?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. \"Check-in\" địa điểm trực tiếp theo thời gian thực và thông báo cả nhà đang đi nghỉ mát vắng nhà 2 tuần",
      "B. Không chia sẻ lịch trình đi lại, chỉ đăng ảnh sau khi đã kết thúc chuyến du lịch và thiết lập chế độ bài viết chỉ bạn bè thân thiết xem được",
      "C. Kết bạn với tất cả người lạ trên mạng xã hội để tăng tương tác",
      "D. Công khai số điện thoại và địa chỉ nhà trên phần giới thiệu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thông báo vắng nhà trên mạng xã hội tạo điều kiện cho kẻ trộm đột nhập; bảo vệ quyền riêng tư đòi hỏi giới hạn đối tượng xem và không lộ lịch trình thời gian thực."
  },
  {
    "id": 1133,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tùy chọn \"Do Not Track\" (Không theo dõi) trong cài đặt trình duyệt web có ý nghĩa gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chặn hoàn toàn 100% tất cả các trang web không cho người dùng lướt web",
      "B. Gửi yêu cầu đến các trang web đề nghị họ không theo dõi hoặc thu thập dữ liệu hành vi của người dùng (tuy nhiên việc tuân thủ phụ thuộc vào chính sách của từng website)",
      "C. Xóa sạch ổ đĩa cứng khi đóng trình duyệt",
      "D. Làm cho chuột máy tính không di chuyển được"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tùy chọn \"Do Not Track\" gửi một tín hiệu HTTP header yêu cầu máy chủ web không theo dõi người dùng, mặc dù không phải website nào cũng bắt buộc tuân theo."
  },
  {
    "id": 1134,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Tại sao bạn không nên dùng cổng sạc USB công cộng tại sân bay hoặc trung tâm thương mại mà không có thiết bị bảo vệ?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì cổng sạc có thể làm nổ pin điện thoại",
      "B. Nguy cơ bị tấn công \"Juice Jacking\" - kẻ xấu có thể lợi dụng các đường dây truyền dữ liệu trong cổng USB để truyền mã độc vào điện thoại hoặc sao chép dữ liệu ngầm",
      "C. Vì cổng USB đó chỉ dành cho máy tính xách tay",
      "D. Vì điện áp ở sân bay quá yếu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cáp USB truyền cả điện năng lẫn dữ liệu. Cuộc tấn công \"Juice Jacking\" lợi dụng cổng sạc giả mạo để xâm nhập vào bộ nhớ điện thoại khi nạn nhân cắm sạc."
  },
  {
    "id": 1135,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Thiết bị bảo vệ \"USB Data Blocker\" (còn gọi là USB Condom) có tác dụng gì khi sạc điện thoại nơi công cộng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ngăn điện thoại bị quá nhiệt",
      "B. Ngắt vật lý các chân truyền dữ liệu trong đầu nối USB, chỉ cho phép dòng điện chạy qua để sạc pin, ngăn chặn triệt để nguy cơ đánh cắp dữ liệu",
      "C. Tăng tốc độ sạc pin gấp 10 lần",
      "D. Tự động sao lưu tin nhắn vào đám mây"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "USB Data Blocker vô hiệu hóa các chân pin truyền dữ liệu (D+ và D-), biến cổng kết nối thành đường sạc nguồn điện thuần túy an toàn."
  },
  {
    "id": 1136,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Khi một ứng dụng đèn pin (Flashlight) đơn giản trên điện thoại yêu cầu quyền truy cập vào: Danh bạ, Vị trí GPS, và Micro ghi âm, bạn nên phản ứng như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cấp tất cả các quyền vì ứng dụng nào cũng cần như vậy",
      "B. Từ chối cấp các quyền vô lý này và gỡ cài đặt ứng dụng ngay lập tức, vì đó là dấu hiệu rõ ràng của phần mềm gián điệp thu thập dữ liệu bất chính",
      "C. Nạp thêm tiền cho ứng dụng",
      "D. Chia sẻ ứng dụng cho bạn bè"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nguyên tắc đặc quyền tối thiểu (Least Privilege): Một ứng dụng đèn pin chỉ cần quyền điều khiển đèn flash camera, việc đòi hỏi danh bạ hay micro là hành vi bất thường của phần mềm độc hại."
  },
  {
    "id": 1137,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Ứng dụng xác thực độc lập (Authenticator App như Google Authenticator, Microsoft Authenticator) an toàn hơn nhận mã OTP qua tin nhắn SMS truyền thống vì lý do nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì SMS có thể bị kẻ tấn công chiếm đoạt thông qua tấn công tráo SIM (SIM Swapping) hoặc nghe lén mạng viễn thông SS7",
      "B. Vì điện thoại không thể nhận tin nhắn SMS khi đi ngủ",
      "C. Vì tin nhắn SMS luôn tốn phí 10 USD mỗi tin",
      "D. Vì ứng dụng Authenticator không cần màn hình hiển thị"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kỹ thuật SIM Swapping (lừa nhà mạng cấp lại SIM) cho phép tin tặc chuyển hướng tin nhắn SMS OTP của nạn nhân sang máy của chúng. Ứng dụng Authenticator sinh mã trực tiếp trên thiết bị (TOTP) nên an toàn hơn nhiều."
  },
  {
    "id": 1138,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Phương thức tấn công \"SIM Swapping\" (Tráo SIM) diễn ra như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kẻ trộm giật điện thoại của nạn nhân trên đường phố",
      "B. Kẻ tấn công thu thập thông tin cá nhân của nạn nhân, sau đó mạo danh nạn nhân liên hệ với nhà mạng viễn thông để yêu cầu chuyển số điện thoại sang một thẻ SIM mới nằm trong tay kẻ tấn công",
      "C. Kẻ tấn công cắm hai thẻ SIM vào cùng một máy",
      "D. Kẻ tấn công bẻ gãy thẻ SIM của nạn nhân"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SIM Swapping sử dụng kỹ thuật Social Engineering nhắm vào nhân viên nhà mạng viễn thông để chiếm đoạt số điện thoại nạn nhân nhằm vượt qua các lớp bảo mật OTP SMS."
  },
  {
    "id": 1139,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Điều nào sau đây mô tả đúng nhất về \"Cụm mật khẩu\" (Passphrase)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một từ tiếng Anh dài 4 chữ cái",
      "B. Một chuỗi gồm nhiều từ có nghĩa ghép lại với nhau (ví dụ: \"MatTroiMocOPhuongDong#2026\"), tạo nên độ dài lớn và cực kỳ khó bị máy tính bẻ khóa nhưng lại rất dễ nhớ đối với con người",
      "C. Mật mã chỉ dùng chữ số từ 0 đến 9",
      "D. Mật khẩu do hệ điều hành tự động đặt ngẫu nhiên và không cho phép thay đổi"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Passphrase là phương pháp đặt mật khẩu hiện đại kết hợp nhiều từ ngữ, vừa đảm bảo độ dài an toàn vượt trội, vừa giúp người dùng dễ ghi nhớ."
  },
  {
    "id": 1140,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tại sao việc sử dụng câu trả lời thật cho các câu hỏi bảo mật phổ biến (ví dụ: \"Tên thời con gái của mẹ bạn là gì?\") lại tiềm ẩn rủi ro lớn?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì ngân hàng không thích các câu trả lời thật",
      "B. Vì những thông tin này thường có thể dễ dàng tìm kiếm được trên mạng xã hội (Facebook) hoặc các hồ sơ công khai của bạn và gia đình",
      "C. Vì bộ nhớ máy tính không lưu được chữ tiếng Việt",
      "D. Vì mẹ bạn có thể quên tên thời con gái"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ tấn công có thể nghiên cứu trang cá nhân của bạn để tìm ra ngày sinh, trường học cũ, tên thú cưng hoặc gia đình nhằm bẻ khóa các câu hỏi bảo mật."
  },
  {
    "id": 1141,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Khi sử dụng mạng Wi-Fi tại một khách sạn, bạn thấy có hai mạng có tên gần giống nhau: \"Hotel_Guest\" và \"Hotel_Guest_FREE\". Bạn nên làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chọn mạng \"Hotel_Guest_FREE\" vì nó có thêm chữ FREE",
      "B. Hỏi trực tiếp quầy lễ tân khách sạn để xác nhận chính xác tên mạng và mật khẩu chính thức của khách sạn",
      "C. Kết nối thử cả hai mạng cùng lúc",
      "D. Tắt máy tính ngay lập tức và trả phòng khách sạn"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sự xuất hiện của hai tên mạng tương tự là dấu hiệu cảnh báo mạng Wi-Fi giả mạo (Evil Twin). Luôn xác nhận với nhân viên quản lý địa điểm trước khi kết nối."
  },
  {
    "id": 1142,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Khái niệm \"Data at Rest Encryption\" có nghĩa là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mã hóa dữ liệu khi người dùng đang ngủ",
      "B. Mã hóa dữ liệu khi nó đang được lưu trữ tĩnh trên các phương tiện lưu trữ như ổ cứng, thẻ nhớ, cơ sở dữ liệu hoặc máy chủ đám mây",
      "C. Mã hóa dữ liệu truyền qua cáp mạng",
      "D. Xóa dữ liệu sau giờ làm việc"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Data at Rest là dữ liệu đang nằm yên trên phương tiện lưu trữ; mã hóa Data at Rest bảo vệ dữ liệu nếu thiết bị lưu trữ bị đánh cắp vật lý."
  },
  {
    "id": 1143,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Hành động nào sau đây giúp giảm thiểu việc để lại dấu chân số (Digital Footprint) không cần thiết?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đăng ký tài khoản trên tất cả các diễn đàn trực tuyến",
      "B. Thường xuyên rà soát và xóa các tài khoản trực tuyến cũ không còn sử dụng, hủy đăng ký nhận email rác và xóa lịch sử duyệt web",
      "C. Đăng mọi hoạt động hàng ngày lên mạng xã hội",
      "D. Điền khảo sát nhận quà ở mọi trang web"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Xóa các tài khoản trực tuyến không dùng giúp thu hẹp phạm vi dữ liệu cá nhân bị phân tán và giảm nguy cơ bị lộ khi các dịch vụ cũ đó bị rò rỉ dữ liệu."
  },
  {
    "id": 1144,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Phần mềm chống phần mềm độc hại (Anti-malware) sử dụng phương pháp \"Phân tích hành vi\" (Heuristic Analysis) để làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đo nhịp tim của người sử dụng máy tính",
      "B. Phát hiện các biến thể mã độc mới chưa từng biết đến trước đây dựa trên các đặc điểm cấu trúc và hành vi đáng ngờ của tập tin",
      "C. Tự động gửi thư chúc mừng sinh nhật",
      "D. Xếp loại hành vi đạo đức của nhân viên"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khác với quét mẫu chữ ký cố định (Signature-based), phân tích Heuristic tìm kiếm các mẫu hành vi bất thường giúp phát hiện cả những mã độc mới xuất hiện (Zero-day)."
  },
  {
    "id": 1145,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Mã độc Ransomware",
    "question": "Tại sao việc sao lưu dữ liệu lên đám mây (Cloud) lại an toàn hơn trước các cuộc tấn công của mã độc tống tiền (Ransomware) so với việc cắm thường trực một ổ cứng di động vào máy tính?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì Ransomware không biết Internet là gì",
      "B. Vì nếu ổ cứng di động cắm liên tục vào máy, Ransomware sẽ mã hóa luôn cả dữ liệu trên ổ sao lưu đó; trong khi dịch vụ đám mây có cơ chế phân tách và lưu trữ phiên bản lịch sử (Versioning)",
      "C. Vì đám mây không thể bị mất điện",
      "D. Vì ổ cứng di động luôn bị nóng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ransomware sẽ quét và mã hóa tất cả các ổ đĩa đang kết nối vật lý với máy tính. Bản sao lưu đám mây hỗ trợ tính năng Versioning cho phép khôi phục lại thời điểm trước khi bị nhiễm mã độc."
  },
  {
    "id": 1146,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo vệ quyền riêng tư & Dữ liệu PII",
    "question": "Điều khoản dịch vụ (Terms of Service) và Chính sách quyền riêng tư (Privacy Policy) của một website thông báo cho người dùng điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảng giá linh kiện máy tính",
      "B. Cách thức tổ chức đó thu thập, lưu trữ, sử dụng và chia sẻ thông tin cá nhân của người dùng với các bên thứ ba",
      "C. Dự báo thời tiết ngày mai",
      "D. Mẹo chơi trò chơi điện tử"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách quyền riêng tư là văn bản pháp lý quy định rõ dữ liệu nào của bạn sẽ bị thu thập và được xử lý ra sao khi bạn sử dụng dịch vụ."
  },
  {
    "id": 1147,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Điều nào sau đây là một dấu hiệu rõ ràng cho thấy máy tính của bạn có thể đã bị nhiễm phần mềm gián điệp hoặc mã độc?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Máy tính hoạt động rất mượt mà và mát mẻ",
      "B. Trang chủ trình duyệt tự động bị đổi sang trang web lạ, quảng cáo pop-up xuất hiện liên tục ngay cả khi không mở trình duyệt, máy chạy rất chậm bất thường",
      "C. Pin máy tính dùng được lâu hơn",
      "D. Tốc độ gõ phím nhanh hơn"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các hiện tượng máy tính chậm đột ngột, quạt chạy tối đa, trang chủ bị đổi hướng và pop-up quảng cáo là dấu hiệu điển hình của việc bị nhiễm Adware/Spyware."
  },
  {
    "id": 1148,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Trong trình duyệt web, tính năng \"Chặn phần tử theo dõi của bên thứ ba\" (Block Third-Party Tracking Cookies) giúp ích gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ngăn các công ty quảng cáo theo dõi hành vi lướt web của bạn trên nhiều trang web khác nhau",
      "B. Làm cho hình ảnh trên trang web bị biến mất hoàn toàn",
      "C. Ngăn cản việc xem video trực tuyến",
      "D. Tắt âm thanh của loa máy tính"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chặn cookie bên thứ ba giúp bảo vệ quyền riêng tư bằng cách ngăn các mạng lưới quảng cáo thu thập hồ sơ sở thích của bạn qua nhiều website liên kết."
  },
  {
    "id": 1149,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư",
    "question": "Tại sao việc sử dụng cùng một mật khẩu cho cả tài khoản email cá nhân, tài khoản ngân hàng và các diễn đàn mạng xã hội là hành vi cực kỳ rủi ro?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì bạn sẽ rất nhanh quên mật khẩu",
      "B. Nếu một diễn đàn nhỏ có bảo mật kém bị tin tặc tấn công làm lộ mật khẩu, kẻ tấn công sẽ dùng chính mật khẩu đó để thử đăng nhập và chiếm đoạt luôn tài khoản email và ngân hàng của bạn (Credential Stuffing)",
      "C. Vì các trang web sẽ từ chối mật khẩu trùng lặp",
      "D. Vì bàn phím sẽ bị mòn các phím bấm đó"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cuộc tấn công Credential Stuffing lợi dụng thói quen dùng chung mật khẩu: tin tặc lấy thông tin rò rỉ từ một trang web yếu để chiếm đoạt các tài khoản quan trọng khác của nạn nhân."
  },
  {
    "id": 1150,
    "chapter": "Chương 3: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư (Cryptography & Privacy)",
    "chapterId": 3,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Hành vi nào sau đây giúp bạn bảo vệ sự riêng tư tốt nhất khi sử dụng webcam hoặc micro tích hợp trên máy tính xách tay?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mở webcam 24/7 để giám sát phòng ngủ",
      "B. Sử dụng nắp trượt che webcam vật lý (Webcam Cover) khi không dùng và kiểm tra quyền truy cập camera/micro trong cài đặt quyền riêng tư của hệ điều hành",
      "C. Dán băng keo trong suốt lên webcam",
      "D. Tắt màn hình máy tính nhưng vẫn cắm sạc"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nắp che webcam vật lý là giải pháp phòng vệ chắc chắn nhất ngăn chặn phần mềm độc hại chụp ảnh hoặc quay lén người dùng mà không cần phụ thuộc vào đèn báo tín hiệu phần mềm."
  },
  {
    "id": 1151,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Hệ thống IDS / IPS",
    "question": "Điểm khác biệt căn bản nhất giữa Hệ thống Phát hiện Xâm nhập (IDS) và Hệ thống Ngăn ngừa Xâm nhập (IPS) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. IDS hoạt động trên hệ điều hành Windows, còn IPS chạy trên Linux.",
      "B. IDS là hệ thống giám sát thụ động gửi cảnh báo (Alert) cho quản trị viên, trong khi IPS được đặt trực tiếp trên đường truyền (Inline) và chủ động chặn hoặc loại bỏ (Drop/Block) lưu lượng độc hại theo thời gian thực.",
      "C. IDS chặn được virus, còn IPS chỉ chặn được thư rác.",
      "D. IDS đắt hơn IPS rất nhiều."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco NetAcad phân biệt rõ: IDS là giải pháp thụ động (out-of-band), phát hiện và cảnh báo nhưng không can thiệp luồng gói tin; trong khi IPS là giải pháp chủ động (inline), có khả năng chặn đứng các gói tin tấn công ngay lập tức."
  },
  {
    "id": 1152,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Tường lửa lọc gói tin truyền thống (Packet-Filtering Firewall) kiểm tra lưu lượng mạng dựa trên các thông tin nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tên và họ của người đang gửi email",
      "B. Địa chỉ IP nguồn/đích, số cổng (Port) nguồn/đích và giao thức mạng (TCP, UDP, ICMP) ở Tầng 3 và Tầng 4",
      "C. Toàn bộ nội dung văn bản bên trong tệp tài liệu đính kèm",
      "D. Tốc độ quay của quạt tản nhiệt máy chủ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tường lửa lọc gói đơn giản kiểm tra tiêu đề gói tin ở Layer 3 (IP) và Layer 4 (Port, Protocol) để quyết định cho qua (allow) hoặc từ chối (deny) theo bảng Access Control List (ACL)."
  },
  {
    "id": 1153,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Tường lửa kiểm tra trạng thái (Stateful Inspection Firewall) có ưu điểm vượt trội nào so với tường lửa lọc gói không trạng thái (Stateless)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Có khả năng tự động sửa chữa phần cứng bị hỏng",
      "B. Theo dõi trạng thái của toàn bộ phiên kết nối đang hoạt động trong bảng trạng thái (State Table), cho phép các gói tin phản hồi hợp lệ tự động đi qua mà không cần mở cổng thủ công",
      "C. Tăng gấp đôi băng thông đường truyền Internet của công ty",
      "D. Tự động mã hóa màn hình máy tính của nhân viên"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tường lửa Stateful theo dõi ngữ cảnh phiên kết nối; nếu một máy trạm nội bộ khởi tạo kết nối ra ngoài, tường lửa sẽ tự động cho phép gói tin trả lời tương ứng từ Internet quay lại."
  },
  {
    "id": 1154,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Tường lửa thế hệ mới (NGFW - Next-Generation Firewall) có khả năng thực hiện điều gì mà tường lửa truyền thống không làm được?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Thay thế nguồn điện của phòng máy chủ khi mất điện",
      "B. Kiểm tra sâu gói tin (DPI - Deep Packet Inspection) ở Tầng ứng dụng (Layer 7), nhận diện chính xác ứng dụng và người dùng, tích hợp IPS và kiểm soát phần mềm độc hại",
      "C. Tự động in các báo cáo tài chính cuối tháng",
      "D. Kết nối trực tiếp vào vệ tinh không gian"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NGFW phân tích đến tầng ứng dụng (L7), có thể phân biệt lưu lượng mạng cụ thể (như cho phép dùng Skype nhắn tin nhưng chặn gọi video) và tích hợp các tính năng phòng thủ nâng cao."
  },
  {
    "id": 1155,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thiết bị Quản lý Mối đe dọa Hợp nhất (UTM - Unified Threat Management) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một máy in đa chức năng có kết nối Wi-Fi",
      "B. Một thiết bị bảo mật tất cả trong một (All-in-One), tích hợp nhiều chức năng như tường lửa, VPN, IDS/IPS, chống virus mạng, lọc nội dung web và chống spam vào một thiết bị duy nhất",
      "C. Một phần mềm quản lý chấm công nhân viên",
      "D. Một loại cáp mạng có gắn chip bảo mật"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thiết bị UTM kết hợp toàn bộ các giải pháp an ninh mạng cơ bản vào một nền tảng phần cứng duy nhất, rất phổ biến ở các doanh nghiệp vừa và nhỏ (SMB) vì tính tiện lợi và tiết kiệm chi phí."
  },
  {
    "id": 1156,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Phân đoạn mạng & Vùng DMZ",
    "question": "Trong kiến trúc mạng an toàn, vùng DMZ (Demilitarized Zone - Vùng phi quân sự) được dùng để làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nơi đặt bàn làm việc của nhân viên bảo vệ",
      "B. Phân đoạn mạng cô lập nằm giữa Internet và mạng nội bộ tin cậy (LAN), dùng để đặt các máy chủ cung cấp dịch vụ công khai ra ngoài (Web, Mail, DNS) nhằm ngăn kẻ tấn công xâm nhập trực tiếp vào mạng nội bộ nếu máy chủ công cộng bị chiếm quyền",
      "C. Khu vực cất giữ tiền mặt của công ty",
      "D. Nơi lưu trữ toàn bộ bản sao lưu mật của giám đốc"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Vùng DMZ cho phép người dùng Internet truy cập các dịch vụ công cộng mà không được phép đi sâu vào mạng LAN nội bộ, hạn chế thiệt hại nếu máy chủ web bị xâm nhập."
  },
  {
    "id": 1157,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Phòng thủ theo chiều sâu (Defense-in-Depth)",
    "question": "Chiến lược \"Phòng thủ theo chiều sâu\" (Defense-in-Depth) trong an ninh tổ chức có nghĩa là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Xây dựng phòng máy chủ thật sâu dưới lòng đất để tránh động đất",
      "B. Triển khai nhiều lớp bảo mật độc lập và bổ trợ lẫn nhau (vật lý, mạng, máy chủ, ứng dụng, dữ liệu), đảm bảo nếu một lớp phòng thủ bị chọc thủng thì các lớp tiếp theo vẫn bảo vệ được hệ thống",
      "C. Mua thiết bị mạng đắt tiền nhất từ một nhà cung cấp duy nhất",
      "D. Cài đặt 10 phần mềm diệt virus khác nhau trên cùng một máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Defense-in-Depth là nguyên lý phòng thủ nhiều lớp: không phụ thuộc vào bất kỳ một cơ chế bảo vệ duy nhất nào; kẻ tấn công phải vượt qua nhiều rào cản liên tiếp mới tiếp cận được tài sản lõi."
  },
  {
    "id": 1158,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Kiến trúc Zero Trust",
    "question": "Mô hình kiến trúc \"Zero Trust\" dựa trên nguyên tắc cốt lõi nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Luôn tin tưởng tất cả các thiết bị nằm bên trong mạng nội bộ",
      "B. \"Never trust, always verify\" (Không bao giờ tin tưởng, luôn luôn xác minh) - mọi yêu cầu truy cập từ bên trong hay bên ngoài mạng đều phải được xác thực, phân quyền và mã hóa nghiêm ngặt",
      "C. Tin tưởng tuyệt đối nhân viên lâu năm của công ty",
      "D. Không sử dụng mật khẩu trên bất kỳ máy chủ nào"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Zero Trust giả định rằng mối đe dọa luôn tồn tại cả bên trong lẫn bên ngoài ranh giới mạng, do đó mọi thiết bị và người dùng đều phải được kiểm tra danh tính và phân quyền liên tục."
  },
  {
    "id": 1159,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Honeypot (Máy chủ mồi nhử) được triển khai trong mạng doanh nghiệp nhằm mục đích gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cung cấp mạng Wi-Fi miễn phí cho khách hàng",
      "B. Đóng vai trò là hệ thống có chủ ý để lộ các điểm yếu nhằm thu hút, đánh lạc hướng kẻ tấn công khỏi các hệ thống thật, đồng thời nghiên cứu hành vi và phương thức tấn công của chúng",
      "C. Tăng tốc độ download phim cho nhân viên",
      "D. Thay thế máy chủ cơ sở dữ liệu chính khi bị hỏng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Honeypot là chiếc bẫy được giăng ra để đánh lừa tin tặc; bất kỳ lưu lượng nào kết nối vào Honeypot đều mặc nhiên bị coi là đáng ngờ và được ghi lại để phân tích tình báo."
  },
  {
    "id": 1160,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tổ chức Cisco Talos là gì và đóng vai trò gì trong hệ sinh thái an ninh mạng của Cisco?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một trường đào tạo chứng chỉ mạng của Cisco tại Châu Á",
      "B. Một trong những tổ chức nghiên cứu và tình báo mối đe dọa thương mại lớn nhất thế giới, liên tục phân tích mã độc toàn cầu và cung cấp cập nhật bảo vệ theo thời gian thực cho các sản phẩm an ninh của Cisco",
      "C. Tên của dòng máy chủ định tuyến cũ đã ngừng sản xuất",
      "D. Một nhóm tin tặc mũ đen chuyên tấn công các đối thủ của Cisco"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco Talos quy tụ hàng trăm chuyên gia an ninh và phân tích hàng tỷ yêu cầu web/email mỗi ngày, cung cấp nguồn dữ liệu tình báo mối đe dọa (Threat Intelligence) cho hệ sinh thái Cisco."
  },
  {
    "id": 1161,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo mật điện toán đám mây (Cloud Security)",
    "question": "Giải pháp Cisco Umbrella bảo vệ các thiết bị của tổ chức ở tầng mạng nào thông qua dịch vụ đám mây?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tầng vật lý (Cáp quang)",
      "B. Tầng phân giải tên miền (DNS Layer)",
      "C. Tầng liên kết dữ liệu (Data Link Layer)",
      "D. Tầng âm thanh"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco Umbrella chặn các kết nối độc hại ngay ở tầng DNS trước khi phiên kết nối IP thực sự được thiết lập, ngăn chặn người dùng truy cập trang web lừa đảo hoặc máy chủ điều khiển botnet (C2)."
  },
  {
    "id": 1162,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thiết bị kiểm soát chính sách truy cập mạng Cisco ISE (Identity Services Engine) cung cấp khả năng nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động chấm công và tính lương cho nhân viên",
      "B. Quản lý danh tính, xác thực tập trung (AAA - Authentication, Authorization, Accounting) và thực thi chính sách bảo mật dựa trên danh tính người dùng và tình trạng thiết bị (Posture Assessment)",
      "C. Tự động in tài liệu từ xa",
      "D. Thay thế dây cáp mạng bằng sóng Bluetooth"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco ISE là nền tảng quản trị truy cập toàn diện, xác định rõ ai (who), thiết bị gì (what), ở đâu (where) và cấp quyền truy cập mạng tương ứng (Network Access Control)."
  },
  {
    "id": 1163,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Khung tiêu chuẩn NIST & ISO/IEC",
    "question": "Năm chức năng cốt lõi trong Khung An ninh mạng NIST (NIST Cybersecurity Framework - CSF) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Plan, Do, Check, Act, Repeat",
      "B. Identify, Protect, Detect, Respond, Recover",
      "C. Scan, Attack, Exploit, Report, Clear",
      "D. Firewall, Antivirus, Backup, VPN, Password"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khung NIST CSF gồm 5 hàm chức năng tuần hoàn: Identify (Nhận diện), Protect (Bảo vệ), Detect (Phát hiện), Respond (Ứng phó) và Recover (Khôi phục)."
  },
  {
    "id": 1164,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Khung tiêu chuẩn NIST & ISO/IEC",
    "question": "Trong Khung NIST CSF, hoạt động sao lưu dữ liệu và lập kế hoạch phục hồi hoạt động sau thảm họa thuộc chức năng nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Detect",
      "B. Recover",
      "C. Identify",
      "D. Attack"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chức năng Recover (Khôi phục) tập trung vào việc khôi phục các khả năng hoặc dịch vụ bị suy giảm do sự cố an ninh mạng để duy trì tính bền vững của tổ chức."
  },
  {
    "id": 1165,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Chính sách sử dụng chấp nhận được (AUP - Acceptable Use Policy) trong doanh nghiệp quy định điều gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảng lương chi tiết của từng phòng ban",
      "B. Các quy định và giới hạn rõ ràng về những hành vi được phép và không được phép khi nhân viên sử dụng tài sản CNTT, máy tính, email và mạng Internet của tổ chức",
      "C. Lịch nghỉ mát hàng năm của công ty",
      "D. Danh sách các món ăn tại căn tin công ty"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AUP là văn bản pháp lý nội bộ mà nhân viên phải ký cam kết khi gia nhập công ty, xác định rõ việc sử dụng thiết bị và mạng công ty đúng mục đích công việc."
  },
  {
    "id": 1166,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tại sao chương trình \"Đào tạo nâng cao nhận thức bảo mật\" (Security Awareness Training) định kỳ cho toàn thể nhân viên lại là yếu tố sống còn đối với an ninh tổ chức?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Để công ty tiêu hết ngân sách đào tạo cuối năm",
      "B. Vì con người là mắt xích yếu nhất trong chuỗi bảo mật; hầu hết các vụ tấn công nghiêm trọng bắt đầu từ việc nhân viên nhấp vào email lừa đảo (phishing) hoặc mật khẩu yếu. Đào tạo giúp biến nhân viên thành \"Tường lửa con người\" (Human Firewall)",
      "C. Để nhân viên biết cách tự sửa chữa màn hình máy tính",
      "D. Để chuẩn bị cho các kỳ thi đại học"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Công nghệ tường lửa hiện đại nhất cũng vô hiệu nếu nhân viên tự tay cung cấp mật khẩu cho kẻ lừa đảo; do đó nâng cao nhận thức là tuyến phòng thủ then chốt của tổ chức."
  },
  {
    "id": 1167,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thiết bị kiểm soát vật lý nào sau đây được thiết kế đặc biệt gồm hai cửa liên động, nhằm ngăn chặn triệt để hành vi đi bám sát (Tailgating / Piggybacking) vào khu vực máy chủ nhạy cảm?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cửa kính tự động trượt",
      "B. Mantrap (Cổng bẫy kiểm soát hai cửa liên động)",
      "C. Rèm cửa cuốn",
      "D. Hàng rào dây thép gai"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mantrap (Air lock) gồm 2 cửa nối tiếp: cửa thứ nhất mở ra người bước vào, cửa thứ nhất đóng kín hoàn toàn thì cửa thứ hai mới cho phép quẹt thẻ sinh trắc học để mở ra, ngăn tuyệt đối người thứ hai bám theo."
  },
  {
    "id": 1168,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Đội ứng cứu sự cố an ninh máy tính trong tổ chức thường được viết tắt là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. FBI",
      "B. CSIRT (Computer Security Incident Response Team) hoặc CERT (Computer Emergency Response Team)",
      "C. NATO",
      "D. HR Team"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CSIRT hoặc CERT là nhóm chuyên gia chịu trách nhiệm tiếp nhận báo cáo, điều tra, ngăn chặn và khắc phục các sự cố an ninh mạng trong tổ chức."
  },
  {
    "id": 1169,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thứ tự 6 giai đoạn chuẩn trong Quy trình Ứng phó Sự cố An ninh mạng (Incident Response Process) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tấn công -> Báo công an -> Họp báo -> Trả tiền chuộc -> Xóa máy -> Nghỉ việc",
      "B. Chuẩn bị (Preparation) -> Phát hiện & Phân tích (Detection & Analysis) -> Ngăn chặn (Containment) -> Loại bỏ (Eradication) -> Khôi phục (Recovery) -> Bài học kinh nghiệm (Lessons Learned)",
      "C. Phát hiện -> Đổi mật khẩu -> Khôi phục -> Quét virus -> Xong",
      "D. Mua máy chủ mới -> Cài đặt lại -> Mời chuyên gia -> Phạt nhân viên"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đây là quy trình 6 bước chuẩn mực quốc tế (NIST SP 800-61 / SANS) được giảng dạy trong chương trình Cisco NetAcad."
  },
  {
    "id": 1170,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Mã độc Ransomware",
    "question": "Khi một máy tính trong mạng nội bộ bị phát hiện nhiễm mã độc tống tiền (Ransomware) đang bắt đầu mã hóa dữ liệu, hành động cô lập khẩn cấp nào thuộc bước \"Containment\" cần làm ngay lập tức?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tắt màn hình máy tính",
      "B. Ngắt ngay lập tức kết nối mạng (rút cáp mạng LAN hoặc ngắt kết nối Wi-Fi) của máy tính đó để ngăn mã độc lây lan sang các máy chủ và máy tính khác trong mạng",
      "C. Khởi động lại máy tính liên tục 5 lần",
      "D. Mở trình duyệt tìm kiếm trên Google cách giải mã"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bước Ngăn chặn (Containment) ưu tiên cô lập vật lý hoặc logic thiết bị nhiễm bệnh khỏi mạng để ngăn mã độc phát tán theo chiều ngang (lateral movement)."
  },
  {
    "id": 1171,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Mục tiêu của bước \"Lessons Learned\" (Bài học kinh nghiệm) ở cuối quy trình ứng phó sự cố là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tìm ra một nhân viên cấp dưới để sa thải và đổ lỗi",
      "B. Họp đánh giá lại toàn bộ diễn biến sự cố: cuộc tấn công diễn ra thế nào, quy trình xử lý có chỗ nào chậm trễ hoặc thiếu sót, từ đó cập nhật chính sách và nâng cao năng lực phòng thủ trong tương lai",
      "C. Xóa sạch mọi tài liệu ghi chép về sự cố để không ai biết",
      "D. Yêu cầu bồi thường tiền từ công ty bảo hiểm"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lessons Learned không phải là cuộc họp chỉ trích cá nhân mà là cơ hội cải tiến hệ thống, khắc phục lỗ hổng quy trình để sự cố tương tự không tái diễn."
  },
  {
    "id": 1172,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Phân đoạn mạng & Vùng DMZ",
    "question": "Phân đoạn mạng (Network Segmentation) bằng công nghệ VLAN (Virtual LAN) mang lại lợi ích bảo mật nào cho tổ chức?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giúp tăng độ sáng của đèn tín hiệu trên Switch",
      "B. Chia nhỏ mạng lớn thành các vùng logic độc lập (ví dụ tách riêng mạng Kế toán, mạng Khách, mạng Máy chủ), giới hạn lưu lượng phát tán và cô lập sự cố lây nhiễm mã độc trong một vùng nhất định",
      "C. Giúp máy tính không cần cài hệ điều hành",
      "D. Tự động tăng tốc độ xử lý của CPU"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phân đoạn mạng ngăn cản mã độc hoặc tin tặc khi đã xâm nhập được một máy trạm ở phòng ban này có thể tự do quét và tấn công trực tiếp sang các máy chủ dữ liệu ở phân vùng khác."
  },
  {
    "id": 1173,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Kế hoạch Duy trì hoạt động kinh doanh (BCP - Business Continuity Plan) khác với Kế hoạch Phục hồi sau thảm họa (DRP - Disaster Recovery Plan) ở điểm nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. BCP chỉ dành cho công ty nhỏ, DRP dành cho công ty lớn",
      "B. BCP tập trung vào việc duy trì các hoạt động kinh doanh cốt lõi của tổ chức tiếp tục vận hành trong và ngay sau sự cố; trong khi DRP tập trung cụ thể vào các quy trình kỹ thuật để khôi phục lại hạ tầng CNTT và dữ liệu",
      "C. BCP là kế hoạch nghỉ mát, DRP là kế hoạch phòng cháy",
      "D. BCP không liên quan gì đến bảo mật"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "BCP có phạm vi toàn diện cho toàn bộ hoạt động kinh doanh của doanh nghiệp, còn DRP là một phần kỹ thuật của BCP tập trung vào phục hồi hệ thống công nghệ thông tin."
  },
  {
    "id": 1174,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thiết bị Lọc nội dung Web (Web Content Filtering / Proxy) trong doanh nghiệp giúp ngăn chặn rủi ro nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chặn nhân viên ăn uống tại bàn làm việc",
      "B. Chặn người dùng truy cập vào các trang web độc hại, trang web lừa đảo (phishing), hoặc các trang web giải trí/cờ bạc vi phạm chính sách của công ty",
      "C. Tự động tắt máy tính lúc 17h00",
      "D. Chặn tín hiệu sóng điện thoại di động trong phòng họp"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Web Content Filter kiểm soát lưu lượng HTTP/HTTPS đi ra ngoài, đối chiếu URL với cơ sở dữ liệu danh tiếng độc hại để bảo vệ người dùng không bị tải mã độc."
  },
  {
    "id": 1175,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Thiết bị Cổng bảo mật Email (Secure Email Gateway - SEG) thực hiện những nhiệm vụ bảo vệ nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Quét virus, lọc thư rác (Anti-spam), phát hiện email lừa đảo (Anti-phishing), và kiểm tra tệp đính kèm độc hại trước khi thư đến hòm thư của nhân viên",
      "B. Tự động trả lời thư khen ngợi từ khách hàng",
      "C. Xóa toàn bộ email của nhân viên sau mỗi ngày",
      "D. Thay đổi phông chữ của email cho đẹp hơn"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Email là vector tấn công số 1; hệ thống Email Gateway đứng ở tuyến đầu để lọc sạch các thư rác, tệp đính kèm mã độc và liên kết lừa đảo trước khi nhân viên tiếp cận."
  },
  {
    "id": 1176,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Công nghệ Chống thất thoát dữ liệu (DLP - Data Loss Prevention) trong tổ chức được thiết kế để làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giúp tìm lại chìa khóa xe của nhân viên",
      "B. Giám sát, phát hiện và ngăn chặn các hành vi truyền dữ liệu nhạy cảm hoặc bí mật (như mã số thẻ tín dụng, tài liệu mật, mã nguồn) ra bên ngoài mạng công ty trái phép",
      "C. Tự động sao chép toàn bộ dữ liệu máy tính cá nhân lên mạng xã hội",
      "D. Tăng dung lượng lưu trữ của ổ đĩa cứng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hệ thống DLP kiểm tra nội dung dữ liệu truyền qua mạng (email, upload web) hoặc sao chép ra USB; nếu phát hiện dữ liệu mật theo từ khóa hoặc định dạng, nó sẽ tự động chặn và cảnh báo."
  },
  {
    "id": 1177,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tiêu chuẩn quốc tế nào quy định các yêu cầu về việc thiết lập, triển khai, duy trì và cải tiến liên tục Hệ thống Quản lý An toàn Thông tin (ISMS)?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. ISO 9001",
      "B. ISO/IEC 27001",
      "C. IEEE 802.11",
      "D. RFC 1918"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ISO/IEC 27001 là tiêu chuẩn vàng quốc tế về quản lý an toàn thông tin doanh nghiệp, bao gồm các chính sách quản trị rủi ro và các biện pháp kiểm soát bảo mật toàn diện."
  },
  {
    "id": 1178,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Trung tâm Điều hành An ninh mạng (SOC - Security Operations Center) trong một tổ chức là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phòng tập thể dục cho nhân viên an ninh",
      "B. Đơn vị tập trung các chuyên gia, quy trình và công nghệ chịu trách nhiệm giám sát liên tục 24/7/365, phát hiện, phân tích và phản ứng với các mối đe dọa an ninh mạng trên toàn bộ hệ thống của tổ chức",
      "C. Nơi sửa chữa điện thoại bị vỡ màn hình",
      "D. Phòng họp hội đồng quản trị"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SOC là đầu não phòng thủ của doanh nghiệp, nơi các chuyên gia an ninh liên tục giám sát bảng điều khiển SIEM, xử lý các cảnh báo và ngăn chặn tấn công tức thì."
  },
  {
    "id": 1179,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Hệ thống SIEM (Security Information and Event Management) đóng vai trò gì trong Trung tâm điều hành an ninh SOC?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Quản lý việc gửi thư chúc mừng sinh nhật",
      "B. Thu thập, tổng hợp và tương quan hóa các tệp nhật ký (Logs) và sự kiện an ninh từ hàng ngàn thiết bị trong toàn bộ mạng để phát hiện các dấu hiệu tấn công bất thường",
      "C. Điều khiển điều hòa nhiệt độ phòng máy chủ",
      "D. Tính toán chi phí lương thưởng cho nhân viên IT"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SIEM là công cụ cốt lõi của SOC, thu thập nhật ký từ tường lửa, máy chủ, máy trạm, ứng dụng và dùng thuật toán tương quan để chỉ ra các chuỗi hành vi xâm nhập đáng ngờ."
  },
  {
    "id": 1180,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Một cuộc kiểm thử thâm nhập \"Black Box\" (Hộp đen) có nghĩa là gì đối với đội kiểm thử?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Người kiểm thử được cung cấp sẵn toàn bộ sơ đồ mạng, mã nguồn và tài khoản quản trị",
      "B. Người kiểm thử hoàn toàn không được cung cấp bất kỳ thông tin nội bộ nào trước về hệ thống mục tiêu, mô phỏng góc nhìn của một kẻ tấn công từ bên ngoài Internet",
      "C. Kiểm thử trong phòng tối không bật đèn",
      "D. Kiểm thử hộp kim loại đựng máy chủ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Black Box Testing: Người kiểm thử bắt đầu từ con số không, tự thu thập thông tin và tìm cách đột nhập giống hệt kẻ tấn công thực tế bên ngoài."
  },
  {
    "id": 1181,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Khái niệm \"White Box\" (Hộp trắng) trong kiểm thử thâm nhập là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Người kiểm thử mặc áo sơ mi màu trắng",
      "B. Người kiểm thử được cung cấp đầy đủ thông tin chi tiết về kiến trúc hệ thống, mã nguồn, cấu hình mạng và quyền truy cập để đánh giá an ninh một cách toàn diện từ bên trong",
      "C. Chỉ kiểm tra các máy tính sơn màu trắng",
      "D. Kiểm thử các tài liệu in trên giấy trắng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "White Box Testing (kiểm thử nội bộ toàn diện): Đội bảo mật có toàn quyền tiếp cận mã nguồn và sơ đồ thiết kế để tìm các lỗ hổng sâu nhất trong ứng dụng."
  },
  {
    "id": 1182,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Thuật ngữ \"NetFlow\" hoặc \"IPFIX\" trong giám sát mạng của Cisco được sử dụng để làm gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động tải video tốc độ cao",
      "B. Thu thập dữ liệu thống kê siêu dữ liệu (Metadata) về lưu lượng IP qua các giao diện bộ định tuyến, bao gồm IP nguồn/đích, Port, giao thức và khối lượng dữ liệu truyền qua, hỗ trợ phát hiện hành vi bất thường",
      "C. Đo áp suất nước làm mát máy chủ",
      "D. Đổi địa chỉ IP tự động mỗi 5 giây"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NetFlow giám sát \"ai nói chuyện với ai, bằng giao thức nào, trong bao lâu và bao nhiêu dữ liệu\", giúp phát hiện lưu lượng bất thường hoặc rò rỉ dữ liệu mà không cần xem trộm nội dung gói tin."
  },
  {
    "id": 1183,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tấn công leo thang đặc quyền (Privilege Escalation) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kẻ tấn công dùng thang trèo lên nóc tòa nhà công ty",
      "B. Kẻ tấn công lợi dụng lỗ hổng phần mềm hoặc sai sót cấu hình để nâng quyền từ một tài khoản người dùng bình thường lên quyền quản trị viên cao cấp (Admin/Root)",
      "C. Đi thang máy lên tầng làm việc của ban giám đốc",
      "D. Nâng cấp bộ nhớ RAM cho máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khi đã xâm nhập vào hệ thống bằng tài khoản quyền hạn thấp, kẻ tấn công sẽ tìm cách leo thang đặc quyền (Privilege Escalation) để kiểm soát toàn bộ máy chủ."
  },
  {
    "id": 1184,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Nguyên tắc \"Đặc quyền tối thiểu\" (Principle of Least Privilege) trong quản trị an ninh yêu cầu điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cấp quyền quản trị viên cao nhất cho tất cả nhân viên để họ làm việc thuận tiện",
      "B. Mỗi người dùng, tiến trình hoặc chương trình chỉ được cấp đúng những quyền hạn tối thiểu cần thiết để hoàn thành nhiệm vụ công việc của họ, không cấp thừa",
      "C. Không cấp bất kỳ quyền hạn nào cho nhân viên mới",
      "D. Đổi quyền hạn của nhân viên mỗi giờ một lần"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Least Privilege là nguyên tắc nền tảng: Nhân viên kế toán chỉ được truy cập dữ liệu kế toán, không được cấp quyền xem dữ liệu nhân sự hay quyền quản trị hệ thống."
  },
  {
    "id": 1185,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Trong bảo mật dữ liệu tổ chức, việc phân loại dữ liệu (Data Classification) thường được chia thành các cấp bậc nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dễ, Trung bình, Khó",
      "B. Công khai (Public), Nội bộ (Internal), Bí mật (Confidential), Tuyệt mật (Top Secret / Restricted)",
      "C. Mới, Cũ, Đã xóa",
      "D. Đỏ, Vàng, Xanh"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phân loại dữ liệu giúp tổ chức định hình cấp độ bảo vệ tương ứng: dữ liệu Public có thể công khai, còn tài liệu Confidential/Secret phải áp dụng mã hóa và kiểm soát truy cập nghiêm ngặt."
  },
  {
    "id": 1186,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tại sao các bản ghi nhật ký hệ thống (Logs) cần phải được bảo vệ tính toàn vẹn và lưu trữ trên một máy chủ quản lý Log tập trung (như Syslog Server)?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Để máy chủ chạy nhanh hơn",
      "B. Ngăn chặn kẻ tấn công khi đã đột nhập vào hệ thống có thể sửa đổi hoặc xóa sạch dấu vết vết tích tấn công của chúng trên máy tính nạn nhân",
      "C. Để tiết kiệm giấy in báo cáo",
      "D. Vì quy định cấm lưu log trên máy cục bộ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ xâm nhập luôn cố gắng xóa log cục bộ để che giấu hành vi. Đẩy log tức thời về máy chủ lưu trữ chuyên dụng (viết một lần - WORM) giúp bảo toàn bằng chứng pháp lý số."
  },
  {
    "id": 1187,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Kiểm soát truy cập dựa trên vai trò (RBAC - Role-Based Access Control) hoạt động như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cấp quyền dựa trên tuổi tác của nhân viên",
      "B. Gán quyền truy cập vào các vai trò công việc cụ thể (ví dụ: vai trò Kế toán, vai trò Bác sĩ, vai trò Quản trị viên), sau đó gán nhân viên vào vai trò tương ứng với vị trí của họ",
      "C. Cho phép nhân viên tự bầu chọn quyền hạn của mình",
      "D. Cấp quyền dựa trên chiều cao của nhân viên"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "RBAC đơn giản hóa việc quản trị: Thay vì phân quyền lẻ tẻ cho từng người, hệ thống gán quyền cho chức danh/vai trò, giúp tránh tình trạng cấp thừa quyền hạn."
  },
  {
    "id": 1188,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Cơ chế Kiểm soát Truy cập Mạng (NAC - Network Access Control) làm nhiệm vụ gì khi một máy tính cắm dây mạng vào cổng mạng của công ty?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đo tốc độ sạc pin của máy tính",
      "B. Kiểm tra danh tính người dùng và đánh giá tình trạng an toàn của máy tính (đã bật tường lửa chưa, bản vá OS cập nhật chưa, có phần mềm diệt virus không) trước khi quyết định cấp quyền vào mạng",
      "C. Tự động xóa các trò chơi trên máy tính",
      "D. Đổi tên máy tính thành tên của công ty"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NAC đảm bảo các thiết bị không tuân thủ chính sách bảo mật (chưa cập nhật, không có antivirus) sẽ bị cách ly vào vùng cách ly (Remediation VLAN) để khắc phục trước khi được truy cập mạng nội bộ."
  },
  {
    "id": 1189,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Trong kiểm thử xâm nhập, hoạt động của \"Blue Team\" là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đóng vai kẻ tấn công tìm cách đột nhập vào hệ thống",
      "B. Đóng vai đội phòng thủ, chịu trách nhiệm giám sát, phát hiện, phân tích và ngăn chặn các cuộc tấn công của Red Team theo thời gian thực",
      "C. Mua sắm máy tính mới cho công ty",
      "D. Tiếp thị sản phẩm cho khách hàng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trong diễn tập an ninh mạng: Red Team đóng vai trò tấn công, còn Blue Team đóng vai trò phòng thủ và bảo vệ hệ thống."
  },
  {
    "id": 1190,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "\"Purple Team\" trong các cuộc diễn tập an ninh mạng đóng vai trò gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đội trọng tài chấm điểm",
      "B. Đóng vai trò cầu nối phối hợp chặt chẽ giữa Red Team và Blue Team, chia sẻ kinh nghiệm và kỹ thuật để tối ưu hóa hiệu quả phòng thủ và vá lỗ hổng nhanh nhất",
      "C. Đội chuẩn bị đồ ăn cho các kỹ sư",
      "D. Nhóm chuyên viên thiết kế đồ họa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Purple Team kết hợp tinh thần tấn công và phòng thủ, giúp Blue Team hiểu rõ các kỹ thuật mới của Red Team để kịp thời gia cố rào chắn an ninh."
  },
  {
    "id": 1191,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Khái niệm \"Air-Gapping\" (Cách ly vật lý) trong thiết kế an ninh mạng là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Sử dụng quạt gió cực mạnh để làm mát phòng máy chủ",
      "B. Biện pháp bảo mật cách ly hoàn toàn một máy tính hoặc mạng nhạy cảm khỏi mạng Internet công cộng và tất cả các mạng không an toàn khác",
      "C. Đặt máy tính trong phòng chân không không có không khí",
      "D. Sử dụng ăng-ten phát sóng Wi-Fi tầm xa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mạng Air-gap không có bất kỳ kết nối vật lý hay không dây nào với thế giới bên ngoài (thường dùng cho hệ thống kiểm soát vũ khí quân sự hoặc nhà máy điện hạt nhân)."
  },
  {
    "id": 1192,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tại sao một mạng dù đã được Air-Gapping vẫn có thể bị xâm nhập và lây nhiễm mã độc?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì sóng vô tuyến của lò vi sóng",
      "B. Do con người mang các phương tiện lưu trữ di động bị nhiễm độc (như thẻ nhớ USB) từ bên ngoài cắm trực tiếp vào hệ thống cách ly (như trường hợp sâu Stuxnet)",
      "C. Do chim bồ câu bay qua nóc nhà",
      "D. Mạng Air-gap không thể bị xâm nhập dưới bất kỳ hình thức nào"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Yếu tố con người và các thiết bị ngoại vi di động (USB, ổ cứng di động, laptop kỹ thuật viên) là cầu nối mang mã độc vượt qua rào cản cách ly vật lý."
  },
  {
    "id": 1193,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Việc kiểm tra đánh giá lỗ hổng bảo mật (Vulnerability Assessment) định kỳ khác với Kiểm thử thâm nhập (Penetration Testing) ở điểm nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đánh giá lỗ hổng chỉ sử dụng công cụ quét tự động để liệt kê danh sách các điểm yếu tiềm ẩn mà không tiến hành khai thác; trong khi Kiểm thử thâm nhập chủ động khai thác các lỗ hổng đó để xem có thể đột nhập sâu đến đâu",
      "B. Đánh giá lỗ hổng tốn kém hơn nhiều",
      "C. Kiểm thử thâm nhập do máy tính tự làm, đánh giá lỗ hổng do con người làm",
      "D. Hai khái niệm này hoàn toàn giống hệt nhau"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quét lỗ hổng (Vulnerability Assessment) chỉ lập danh mục rủi ro; còn Pentest thực sự kích hoạt các đoạn mã exploit để chứng minh khả năng thâm nhập của kẻ tấn công."
  },
  {
    "id": 1194,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Điểm yếu bảo mật nào sau đây là nguyên nhân phổ biến nhất dẫn đến các vụ tấn công leo thang trong mạng nội bộ công ty?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dùng màn hình quá to",
      "B. Sử dụng mật khẩu tài khoản quản trị viên cục bộ (Local Administrator) giống hệt nhau trên hàng loạt máy tính trạm trong công ty",
      "C. Chuột máy tính bị hết pin",
      "D. Công ty có quá nhiều cửa sổ kính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nếu tất cả các máy trạm dùng chung mật khẩu Local Admin, kẻ tấn công chiếm được một máy sẽ dễ dàng dùng mã băm mật khẩu đó để chiếm toàn bộ các máy còn lại trong mạng (Pass-the-Hash)."
  },
  {
    "id": 1195,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Một giải pháp EDR (Endpoint Detection and Response) được cài đặt trên các máy trạm có chức năng gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động soạn thảo văn bản Word",
      "B. Liên tục giám sát hành vi, ghi nhận tiến trình, phát hiện các mối đe dọa nâng cao trên thiết bị đầu cuối và cho phép chuyên viên an ninh cô lập thiết bị hoặc điều tra sự cố từ xa",
      "C. Tăng độ phân giải màn hình máy tính",
      "D. Tắt quạt tản nhiệt của máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "EDR vượt xa antivirus truyền thống, cung cấp khả năng phát hiện hành vi bất thường, truy vết nguồn gốc tấn công và phản ứng nhanh ngay trên thiết bị đầu cuối."
  },
  {
    "id": 1196,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Hàm băm một chiều (Hash Function)",
    "question": "Khái niệm \"Shadow IT\" (Công nghệ thông tin bóng tối) trong tổ chức đề cập đến hiện tượng gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Máy tính hoạt động trong phòng không bật đèn",
      "B. Việc nhân viên hoặc các phòng ban tự ý sử dụng các phần mềm, thiết bị hoặc dịch vụ đám mây bên ngoài để làm việc mà không thông qua sự phê duyệt hoặc quản lý của bộ phận IT",
      "C. Nhân viên làm việc ca đêm",
      "D. Sử dụng phần mềm diệt virus lậu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Shadow IT (như dùng tài khoản Google Drive cá nhân để gửi tài liệu nội bộ) tạo ra nguy cơ rò rỉ dữ liệu khổng lồ do nằm ngoài tầm kiểm soát và chính sách bảo mật của doanh nghiệp."
  },
  {
    "id": 1197,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Điều nào sau đây là một biện pháp kiểm soát an ninh vật lý (Physical Security Control)?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tường lửa lọc gói tin IP",
      "B. Camera quan sát CCTV, nhân viên bảo vệ và khóa từ cửa ra vào",
      "C. Thuật toán mã hóa AES",
      "D. Khóa bảo mật vân tay trên trang web"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kiểm soát vật lý là các rào cản hữu hình nhằm ngăn chặn sự tiếp cận cơ học trái phép vào các cơ sở, tòa nhà và trung tâm dữ liệu của tổ chức."
  },
  {
    "id": 1198,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Mật mã học (Cryptography)",
    "question": "Chính sách \"Bàn làm việc sạch và Màn hình sạch\" (Clean Desk and Clear Screen Policy) yêu cầu nhân viên làm gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lau bàn bằng cồn sát khuẩn mỗi sáng",
      "B. Thu dọn toàn bộ tài liệu nhạy cảm vào tủ khóa khi rời bàn làm việc và luôn khóa màn hình máy tính (Windows + L / Cmd + Ctrl + Q) khi không ngồi ở vị trí",
      "C. Không được để đồ ăn trên bàn làm việc",
      "D. Đổi màn hình máy tính mới hàng tuần"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chính sách này ngăn chặn việc người đi ngang qua nhìn thấy thông tin mật trên bàn (Clean Desk) hoặc đọc trộm dữ liệu trên màn hình khi nhân viên vắng mặt (Clear Screen)."
  },
  {
    "id": 1199,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tại sao việc cấp quyền truy cập từ xa (Remote Access) qua giao thức Telnet lại bị nghiêm cấm trong mạng doanh nghiệp hiện đại?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì Telnet chạy quá chậm",
      "B. Vì Telnet truyền toàn bộ thông tin đăng nhập và dữ liệu dưới dạng văn bản rõ (Plaintext) không mã hóa, cho phép bất kỳ ai nghe lén mạng đều có thể đọc được mật khẩu dễ dàng",
      "C. Vì Telnet chỉ hỗ trợ bàn phím tiếng Pháp",
      "D. Vì Telnet làm nóng bộ định tuyến"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giao thức Telnet không có cơ chế mã hóa; nó bắt buộc phải được thay thế hoàn toàn bằng SSH (Secure Shell) để mã hóa toàn bộ phiên quản trị từ xa."
  },
  {
    "id": 1200,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật",
    "question": "Tổ chức cần làm gì ngay lập tức khi một nhân viên chủ chốt nắm giữ nhiều mật khẩu quản trị hệ thống nộp đơn xin thôi việc?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chúc mừng và tặng quà lưu niệm",
      "B. Thu hồi ngay toàn bộ quyền truy cập tài khoản, thẻ từ ra vào, đổi các mật khẩu dùng chung mà nhân viên đó từng nắm giữ và khóa các tài khoản cá nhân của họ trên toàn hệ thống",
      "C. Xóa sạch toàn bộ máy chủ công ty",
      "D. Đóng cửa công ty 1 tháng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Quy trình cho nhân viên thôi việc (Offboarding) chuẩn mực đòi hỏi vô hiệu hóa tài khoản và đổi ngay các khóa/mật khẩu quản trị chung để loại trừ nguy cơ bị trả thù hoặc truy cập trái phép sau khi rời công ty."
  },
  {
    "id": 1201,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo đức nghề nghiệp & Pháp lý ATTT",
    "question": "Sự khác biệt cơ bản nhất giữa \"Luật pháp\" (Laws) và \"Đạo đức\" (Ethics) trong lĩnh vực an ninh mạng là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Luật pháp chỉ áp dụng cho người lớn, đạo đức áp dụng cho trẻ em.",
      "B. Luật pháp là các quy tắc bắt buộc do nhà nước ban hành và có chế tài xử phạt pháp lý (phạt tiền, tù tội); trong khi đạo đức là hệ thống các nguyên tắc luân lý hướng dẫn hành vi đúng đắn được cộng đồng nghề nghiệp tự nguyện tuân thủ.",
      "C. Đạo đức có thể khiến bạn phải đi tù, còn luật pháp thì không.",
      "D. Luật pháp và đạo đức là hai từ đồng nghĩa hoàn toàn."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cisco NetAcad nhấn mạnh: Luật pháp có tính cưỡng chế và chế tài xử lý của nhà nước, còn đạo đức là chuẩn mực hành vi định hướng lương tâm và trách nhiệm nghề nghiệp."
  },
  {
    "id": 1202,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Một chuyên gia bảo mật phát hiện một lỗ hổng nghiêm trọng trên website của một ngân hàng mà không có sự cho phép trước của ngân hàng đó. Mặc dù chuyên gia không phá hoại dữ liệu, hành vi tự ý quét và xâm nhập này được coi là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Hoàn toàn hợp pháp vì mục đích tốt",
      "B. Vi phạm pháp luật về an ninh mạng (truy cập trái phép vào hệ thống thông tin mà không được ủy quyền)",
      "C. Được chính phủ trao huân chương ngay lập tức",
      "D. Một kỹ năng bắt buộc của tất cả nhân viên ngân hàng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dù động cơ tốt hay xấu, hành vi xâm nhập vào hệ thống mạng của người khác mà không có sự đồng ý bằng văn bản là hành vi vi phạm pháp luật."
  },
  {
    "id": 1203,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Khái niệm \"Tiết lộ có trách nhiệm\" (Responsible Disclosure) trong việc phát hiện lỗ hổng phần mềm có nghĩa là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đăng ngay mã khai thác lỗ hổng lên mạng xã hội Facebook để cảnh báo cộng đồng",
      "B. Báo cáo bí mật thông tin chi tiết về lỗ hổng cho nhà phát triển phần mềm và cho họ một khoảng thời gian hợp lý để tạo và phát hành bản vá trước khi công khai thông tin ra công chúng",
      "C. Bán lỗ hổng đó cho các nhóm tội phạm mạng trên chợ đen",
      "D. Giữ bí mật vĩnh viễn và không bao giờ nói cho ai biết"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Responsible Disclosure là quy chuẩn đạo đức trong an ninh mạng: thông báo riêng cho nhà sản xuất để họ vá lỗi nhằm bảo vệ người dùng, tránh tạo cơ hội cho kẻ xấu lợi dụng khai thác trước khi có bản vá."
  },
  {
    "id": 1204,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Quy tắc tham gia (Rules of Engagement - ROE) trong một hợp đồng Kiểm thử thâm nhập (Penetration Testing) xác định điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Danh sách các bài hát mà đội kiểm thử được nghe trong giờ làm việc",
      "B. Thỏa thuận pháp lý bằng văn bản xác định rõ phạm vi hệ thống được phép kiểm thử, các phương thức tấn công được phép/cấm sử dụng, khung thời gian và đầu mối liên hệ khẩn cấp",
      "C. Số tiền thưởng cá nhân của từng thành viên",
      "D. Quy định về trang phục của chuyên gia kiểm thử"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Rules of Engagement (ROE) là ranh giới pháp lý tối quan trọng; đội ngũ kiểm thử đạo đức tuyệt đối không được vượt ra ngoài phạm vi đã được thỏa thuận trong văn bản này."
  },
  {
    "id": 1205,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo đức nghề nghiệp & Pháp lý ATTT",
    "question": "Đạo luật GDPR (General Data Protection Regulation) của Liên minh Châu Âu (EU) tập trung vào vấn đề gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bảo vệ quyền riêng tư và dữ liệu cá nhân của các cá nhân trong EU, trao cho người dùng quyền kiểm soát dữ liệu của họ (như quyền được xóa bỏ dữ liệu - Right to be Forgotten) và áp dụng mức phạt rất nặng đối với các vi phạm",
      "B. Quản lý việc sản xuất xe ô tô điện tại Châu Âu",
      "C. Cấm người dân sử dụng điện thoại thông minh sau 22h00",
      "D. Thống nhất tiền tệ đồng Euro"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "GDPR là đạo luật bảo vệ quyền riêng tư và dữ liệu cá nhân nghiêm ngặt bậc nhất thế giới, có tầm ảnh hưởng toàn cầu đối với mọi doanh nghiệp xử lý dữ liệu của công dân Châu Âu."
  },
  {
    "id": 1206,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tiêu chuẩn PCI-DSS (Payment Card Industry Data Security Standard) bắt buộc áp dụng cho các đối tượng nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tất cả các trường đại học giảng dạy môn toán học",
      "B. Mọi tổ chức, doanh nghiệp tham gia vào việc lưu trữ, xử lý hoặc truyền tải dữ liệu thẻ thanh toán (thẻ tín dụng/thẻ ghi nợ như Visa, MasterCard)",
      "C. Các nhà máy sản xuất giấy in tiền",
      "D. Các tài xế taxi công nghệ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "PCI-DSS là bộ quy chuẩn an toàn kỹ thuật do các tổ chức phát hành thẻ quốc tế thiết lập nhằm bảo vệ thông tin chủ thẻ chống lại nạn trộm cắp và gian lận tài chính."
  },
  {
    "id": 1207,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Đạo luật HIPAA (Health Insurance Portability and Accountability Act) của Mỹ được thiết kế để bảo vệ loại dữ liệu nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dữ liệu thời tiết khí hậu",
      "B. Thông tin sức khỏe cá nhân (PHI - Protected Health Information) và hồ sơ bệnh án y tế điện tử của bệnh nhân",
      "C. Dữ liệu cổ phiếu thị trường chứng khoán",
      "D. Dữ liệu đăng kiểm phương tiện giao thông"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "HIPAA đặt ra các tiêu chuẩn bảo mật và quyền riêng tư nghiêm ngặt đối với việc lưu trữ và chia sẻ hồ sơ bệnh án y tế điện tử của bệnh nhân."
  },
  {
    "id": 1208,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo đức nghề nghiệp & Pháp lý ATTT",
    "question": "Đạo luật CFAA (Computer Fraud and Abuse Act) của Hoa Kỳ là đạo luật về vấn đề gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Luật thuế thu nhập doanh nghiệp",
      "B. Luật liên bang chính nhằm truy tố các hành vi phạm tội máy tính, bao gồm việc truy cập trái phép vào các hệ thống máy tính được bảo vệ",
      "C. Luật bảo vệ môi trường nước",
      "D. Luật bản quyền phim ảnh Hollywood"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CFAA là công cụ pháp lý cốt lõi của Mỹ để kết tội các hành vi tấn công mạng, xâm nhập hệ thống trái phép, cài cắm mã độc và gian lận máy tính."
  },
  {
    "id": 1209,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Nguyên nhân chính dẫn đến sự thiếu hụt nhân lực an ninh mạng trầm trọng (Cybersecurity Skills Gap) trên toàn cầu hiện nay là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mức lương trong ngành an ninh mạng quá thấp so với các ngành khác",
      "B. Sự bùng nổ của chuyển đổi số, sự gia tăng nhanh chóng về số lượng và mức độ tinh vi của các mối đe dọa mạng, trong khi số lượng chuyên gia được đào tạo bài bản không đáp ứng kịp nhu cầu",
      "C. Các trường đại học đã ngừng đào tạo ngành công nghệ thông tin",
      "D. Các công ty không còn quan tâm đến việc bảo vệ dữ liệu nữa"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Không gian số mở rộng với tốc độ chóng mặt cùng các cuộc tấn công mạng diễn ra liên tục khiến nhu cầu tuyển dụng chuyên gia bảo mật vượt xa nguồn cung nhân lực hiện có."
  },
  {
    "id": 1210,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Vai trò của một chuyên viên phân tích SOC Cấp 1 (Tier 1 SOC Analyst / Triage) tại Trung tâm điều hành an ninh là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Viết mã nguồn cho hệ điều hành mới",
      "B. Giám sát liên tục các cảnh báo an ninh từ hệ thống SIEM theo thời gian thực, thực hiện sàng lọc ban đầu để phân biệt cảnh báo thật và cảnh báo giả, và chuyển tiếp các sự cố nghiêm trọng lên cấp cao hơn",
      "C. Trực tiếp đi bắt tội phạm mạng ngoài đời thực",
      "D. Quản lý việc mua bán linh kiện máy tính cho văn phòng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tier 1 Analyst là tuyến đầu của SOC, liên tục theo dõi hàng ngàn cảnh báo, lọc các báo động giả (False Positives) và phân loại sự cố (Triage)."
  },
  {
    "id": 1211,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Vai trò của một chuyên viên phân tích SOC Cấp 2 (Tier 2 Incident Responder) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lau dọn phòng máy chủ",
      "B. Nhận sự cố được leo thang từ Tier 1, tiến hành điều tra chuyên sâu phạm vi ảnh hưởng của cuộc tấn công, xác định nguồn gốc và trực tiếp thực thi các biện pháp ngăn chặn, khắc phục sự cố",
      "C. Sửa chữa máy in văn phòng",
      "D. Đặt đồ ăn trưa cho toàn bộ đội SOC"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tier 2 Analyst là những chuyên gia ứng cứu sự cố dày dạn kinh nghiệm, trực tiếp điều tra nguyên nhân gốc rễ và xử lý triệt để các vụ xâm nhập nguy hiểm."
  },
  {
    "id": 1212,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Vai trò của một chuyên viên SOC Cấp 3 (Tier 3 Threat Hunter / Senior Analyst) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cài đặt lại hệ điều hành Windows cho nhân viên mới",
      "B. Chủ động truy lùng các mối đe dọa và mã độc tinh vi đang ẩn náu sâu trong mạng mà hệ thống tự động không phát hiện được, phân tích mã độc nâng cao và cải tiến quy tắc bảo vệ",
      "C. Lập hóa đơn thanh toán tiền điện cho công ty",
      "D. Thay dây cáp mạng bị đứt"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tier 3 đóng vai trò \"thợ săn mối đe dọa\" (Threat Hunter), chủ động tìm kiếm các dấu hiệu bất thường tinh vi (như các chiến dịch APT) mà các công cụ tự động đã bỏ lọt."
  },
  {
    "id": 1213,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Vị trí Giám đốc An ninh Thông tin (CISO - Chief Information Security Officer) trong doanh nghiệp chịu trách nhiệm chính về điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Sửa chữa bàn phím và chuột máy tính cho giám đốc",
      "B. Chịu trách nhiệm lãnh đạo cao nhất về toàn bộ chiến lược an ninh mạng, quản trị rủi ro, chính sách bảo vệ thông tin và sự tuân thủ pháp lý của tổ chức",
      "C. Viết các bài đăng quảng cáo trên mạng xã hội",
      "D. Trông coi cổng ra vào công ty vào ban đêm"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CISO là vị trí quản lý cấp cao (C-suite), cầu nối giữa kỹ thuật an ninh mạng và ban lãnh đạo điều hành doanh nghiệp để hoạch định chiến lược bảo vệ tài sản số."
  },
  {
    "id": 1214,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Công việc của một Chuyên gia kiểm thử thâm nhập (Penetration Tester / Ethical Hacker) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Viết virus tống tiền các công ty đối thủ",
      "B. Được sự cho phép hợp pháp của tổ chức để mô phỏng các cuộc tấn công mạng thực tế, nhằm phát hiện ra các lỗ hổng bảo mật trước khi kẻ xấu kịp khai thác",
      "C. Bán phần mềm diệt virus rong ngoài phố",
      "D. Cấm tất cả nhân viên sử dụng máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pentester dùng tư duy và công cụ của tin tặc nhưng với mục đích cao đẹp: tìm ra lỗ hổng để giúp doanh nghiệp vá lại trước khi bị tấn công thật."
  },
  {
    "id": 1215,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Công việc của một Chuyên gia Điều tra số (Digital Forensics Examiner) bao gồm những nhiệm vụ nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bán điện thoại cũ qua mạng",
      "B. Thu thập, bảo tồn tính nguyên vẹn theo chuỗi hành trình (Chain of Custody), phân tích và trình bày các bằng chứng số từ máy tính và thiết bị mạng phục vụ công tác điều tra sự cố hoặc khởi tố pháp lý",
      "C. Cài đặt mạng Wi-Fi gia đình",
      "D. Dạy nhân viên cách gõ bàn phím nhanh"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chuyên gia khám nghiệm số điều tra dấu vết tội phạm mạng, bảo đảm chứng cứ số không bị can thiệp để có giá trị bằng chứng pháp lý trước tòa án."
  },
  {
    "id": 1216,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "\"Chuỗi hành trình chứng cứ\" (Chain of Custody) trong điều tra tội phạm số là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một sợi dây chuyền vàng đeo trên cổ điều tra viên",
      "B. Tài liệu lưu giữ hồ sơ chi tiết theo thứ tự thời gian ghi lại ai đã thu thập bằng chứng, ai tiếp cận, phân tích, chuyển giao và bằng chứng được lưu giữ ở đâu, đảm bảo bằng chứng không bị tráo đổi hay làm giả",
      "C. Chuỗi các máy chủ kết nối với nhau bằng cáp quang",
      "D. Lịch làm việc hàng tuần của đội bảo vệ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chain of Custody là quy trình pháp lý bắt buộc: nếu bằng chứng số bị gián đoạn ghi chép hoặc nghi ngờ bị chỉnh sửa, nó sẽ bị tòa án bác bỏ hoàn toàn."
  },
  {
    "id": 1217,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Chứng chỉ nhập môn về an ninh mạng của Cisco Networking Academy dành cho những người bắt đầu bước vào ngành là chứng chỉ nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cisco CCIE Security",
      "B. Cisco Certified Support Technician (CCST) Cybersecurity",
      "C. Cisco CCDE",
      "D. Cisco CCNA Routing & Switching cũ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CCST Cybersecurity là chứng chỉ nền tảng mới nhất của Cisco, chứng nhận kiến thức cơ bản về an ninh mạng, các mối đe dọa và biện pháp phòng vệ ban đầu."
  },
  {
    "id": 1218,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Chứng chỉ nào của Cisco tập trung đào tạo chuyên sâu các kỹ năng thực tế cần thiết cho vị trí Chuyên viên phân tích tại Trung tâm điều hành an ninh SOC (SOC Analyst)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cisco Certified CyberOps Associate",
      "B. Cisco CCNP Enterprise",
      "C. Cisco CCST IT Support",
      "D. Cisco DevNet Expert"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cisco CyberOps Associate trang bị kiến thức phân tích nhật ký, giám sát mạng, xử lý mã độc và quy trình ứng phó sự cố dành riêng cho kỹ sư SOC."
  },
  {
    "id": 1219,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Chứng chỉ CompTIA Security+ được biết đến trong ngành an ninh mạng như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một chứng chỉ chứng nhận kỹ năng chơi trò chơi điện tử",
      "B. Chứng chỉ an ninh mạng trung lập (Vendor-neutral) phổ biến và được công nhận rộng rãi nhất trên toàn cầu cho các kỹ sư mới bắt đầu sự nghiệp an ninh thông tin",
      "C. Chứng chỉ chỉ dành riêng cho các lập trình viên Python",
      "D. Chứng chỉ chỉ có giá trị trong vòng 1 tháng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CompTIA Security+ là chứng chỉ độc lập với nhà sản xuất (vendor-neutral), là bước đệm tiêu chuẩn được rất nhiều doanh nghiệp và tổ chức chính phủ yêu cầu."
  },
  {
    "id": 1220,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Chứng chỉ CISSP (Certified Information Systems Security Professional) của tổ chức (ISC)² thường hướng tới đối tượng nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Học sinh tiểu học",
      "B. Các chuyên gia bảo mật, nhà quản lý và kiến trúc sư an ninh mạng dày dạn kinh nghiệm (yêu cầu tối thiểu 5 năm kinh nghiệm làm việc thực tế trong ngành)",
      "C. Những người chưa từng sử dụng máy tính",
      "D. Thợ sửa chữa dây điện"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CISSP được xem là \"tiêu chuẩn vàng\" trong ngành bảo mật thông tin, yêu cầu kinh nghiệm thực chiến sâu rộng và bao quát 8 miền kiến thức an ninh mạng."
  },
  {
    "id": 1221,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Chứng chỉ CEH (Certified Ethical Hacker) do tổ chức nào cấp?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cisco Systems",
      "B. EC-Council",
      "C. Microsoft",
      "D. Google"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chứng chỉ CEH nổi tiếng về kỹ thuật tấn công có đạo đức do tổ chức quốc tế EC-Council xây dựng và cấp chứng nhận."
  },
  {
    "id": 1222,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Chứng chỉ OSCP (Offensive Security Certified Professional) nổi tiếng trong cộng đồng bảo mật vì lý do gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kỳ thi chỉ có 10 câu hỏi trắc nghiệm dễ",
      "B. Kỳ thi thực hành thực chiến khắc nghiệt kéo dài 24 giờ liên tục, yêu cầu thí sinh phải trực tiếp tấn công chiếm quyền điều khiển (root/admin) các máy chủ mục tiêu trong phòng thí nghiệm",
      "C. Chứng chỉ được cấp miễn phí cho tất cả mọi người",
      "D. Không cần sử dụng máy tính khi thi"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "OSCP được đánh giá rất cao nhờ tính thực hành 100%: thí sinh phải chứng minh năng lực khai thác lỗ hổng thực tế dưới áp lực thời gian chứ không chỉ học lý thuyết suông."
  },
  {
    "id": 1223,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tổ chức OWASP (Open Worldwide Application Security Project) nổi tiếng nhất với đóng góp nào cho cộng đồng an ninh mạng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chế tạo thiết bị định tuyến mạng",
      "B. Danh sách \"OWASP Top 10\" - tổng hợp 10 lỗ hổng bảo mật ứng dụng web phổ biến và nguy hiểm nhất hiện nay (như Injection, Broken Access Control, Cryptographic Failures)",
      "C. Cung cấp dịch vụ Internet vệ tinh",
      "D. Sản xuất card đồ họa cho máy tính"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "OWASP Top 10 là tài liệu tham khảo tiêu chuẩn của các nhà phát triển phần mềm và chuyên gia bảo mật trên toàn thế giới để đảm bảo an toàn cho ứng dụng web."
  },
  {
    "id": 1224,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Đấu trường \"Capture The Flag\" (CTF) trong lĩnh vực an ninh mạng là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Trò chơi cướp cờ ngoài sân vận động thể thao",
      "B. Các cuộc thi tranh tài kỹ năng an ninh mạng thực hành, nơi các thí sinh giải quyết các thử thách về dịch ngược mã độc, khai thác lỗ hổng web, mật mã học và khám nghiệm số để tìm ra một chuỗi bí mật (Flag)",
      "C. Trò chơi cờ tướng trực tuyến",
      "D. Cuộc đua xe trực tuyến"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CTF là sân chơi rèn luyện kỹ năng thực chiến tuyệt vời cho sinh viên và chuyên gia an ninh mạng, rèn luyện tư duy phân tích và giải quyết sự cố."
  },
  {
    "id": 1225,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Nền tảng thực hành trực tuyến TryHackMe hoặc Hack The Box cung cấp môi trường gì cho người học an ninh mạng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mua sắm quần áo thời trang giá rẻ",
      "B. Các phòng thí nghiệm ảo (Labs) an toàn và hợp pháp, cho phép người học thực hành các kỹ thuật tấn công và phòng thủ mạng trên các máy ảo mô phỏng thực tế mà không vi phạm pháp luật",
      "C. Xem phim trực tuyến miễn phí",
      "D. Đặt vé máy bay du lịch"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các nền tảng lab ảo giúp người học thực hành tấn công vào các mục tiêu giả lập một cách hợp pháp, an toàn và rèn luyện kỹ năng thực tế nhanh chóng."
  },
  {
    "id": 1226,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Phần mềm Cisco Packet Tracer được sử dụng phổ biến trong việc học an ninh mạng nhằm mục đích gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chỉnh sửa video ca nhạc",
      "B. Mô phỏng trực quan cấu hình thiết bị mạng (Router, Switch, Firewall, PC), thiết kế hệ thống mạng an toàn và kiểm tra luồng gói tin đi qua mạng",
      "C. Chơi trò chơi bắn súng",
      "D. Quét và diệt virus trên điện thoại di động"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Packet Tracer là công cụ mô phỏng mạng mạnh mẽ của Cisco, giúp người học thỏa sức thiết kế, thử nghiệm các chính sách tường lửa và phân đoạn mạng mà không cần mua phần cứng đắt tiền."
  },
  {
    "id": 1227,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Tổ chức FIRST (Forum of Incident Response and Security Teams) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Một hãng hàng không vũ trụ",
      "B. Diễn đàn quốc tế kết nối các đội ứng cứu sự cố an ninh mạng (CSIRT/CERT) từ các chính phủ, tổ chức thương mại và học thuật trên toàn thế giới để chia sẻ thông tin về mối đe dọa",
      "C. Một giải đấu bóng đá quốc tế",
      "D. Một hiệp hội các nhà văn viết truyện trinh thám"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "FIRST là diễn đàn toàn cầu hàng đầu quy tụ các đội CERT/CSIRT, tạo điều kiện chia sẻ thông tin tình báo và phản ứng phối hợp trước các mối đe dọa mạng xuyên biên giới."
  },
  {
    "id": 1228,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Tổ chức (ISC)² là chữ viết tắt của tổ chức bảo mật uy tín nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Internet Society Community Club",
      "B. International Information System Security Certification Consortium",
      "C. International Software Company Corporation",
      "D. Internal Security Council Center"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "(ISC)² là hiệp hội phi lợi nhuận quốc tế hàng đầu chuyên chứng nhận và đào tạo các chuyên gia an ninh thông tin trên toàn thế giới."
  },
  {
    "id": 1229,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tổ chức ISACA nổi tiếng với các chứng chỉ chuyên nghiệp nào trong ngành công nghệ thông tin?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. CCNA và CCNP",
      "B. CISA (Kiểm toán hệ thống thông tin) và CISM (Quản lý an ninh thông tin)",
      "C. Photoshop và AutoCAD",
      "D. MCSE và MCP"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ISACA là tổ chức toàn cầu danh tiếng chuyên về quản trị CNTT, kiểm toán bảo mật (CISA) và quản trị rủi ro an toàn thông tin (CISM/CRISC)."
  },
  {
    "id": 1230,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Viện Nghiên cứu SANS (SANS Institute) đóng góp gì lớn cho ngành đào tạo an ninh mạng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cung cấp các khóa đào tạo an ninh mạng chuyên sâu thực chiến chất lượng cao hàng đầu thế giới và vận hành hệ thống chứng chỉ GIAC uy tín",
      "B. Sản xuất cáp mạng LAN tốc độ cao",
      "C. Chế tạo linh kiện màn hình máy tính",
      "D. Cung cấp dịch vụ giao hàng tận nhà"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "SANS Institute là học viện an ninh mạng uy tín bậc nhất thế giới, nổi tiếng với các khóa huấn luyện chuyên sâu và hệ thống chứng chỉ GIAC được các cơ quan an ninh đánh giá rất cao."
  },
  {
    "id": 1231,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Khái niệm \"Bug Bounty\" (Săn tiền thưởng lỗ hổng) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đi săn bắt côn trùng trong rừng",
      "B. Chương trình do các công ty công nghệ (như Google, Facebook, Apple) hoặc tổ chức phát động, trao tiền thưởng cho các nhà nghiên cứu bảo mật bên ngoài khi họ phát hiện và báo cáo lỗ hổng bảo mật hợp pháp",
      "C. Mua phần mềm lậu với giá rẻ",
      "D. Tặng phiếu mua hàng cho nhân viên chăm chỉ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chương trình Bug Bounty tạo cầu nối đôi bên cùng có lợi: khuyến khích các hacker mũ trắng giúp doanh nghiệp tìm lỗ hổng để nhận thù lao xứng đáng thay vì bán cho tội phạm mạng."
  },
  {
    "id": 1232,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Bảo vệ quyền riêng tư & Dữ liệu PII",
    "question": "Đạo luật COPPA (Children's Online Privacy Protection Act) của Mỹ được ban hành nhằm mục đích gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Quản lý việc nhập khẩu đồ chơi trẻ em",
      "B. Bảo vệ quyền riêng tư trực tuyến của trẻ em dưới 13 tuổi, yêu cầu các trang web và dịch vụ trực tuyến phải có sự đồng ý của cha mẹ trước khi thu thập thông tin cá nhân của trẻ",
      "C. Khuyến khích trẻ em xem tivi nhiều hơn",
      "D. Cấm trẻ em học tin học"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "COPPA bảo vệ đối tượng trẻ em dễ bị tổn thương trên không gian mạng bằng cách cấm các nền tảng tự ý khai thác dữ liệu của trẻ em dưới 13 tuổi khi chưa có sự cho phép của phụ huynh."
  },
  {
    "id": 1233,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Một lập trình viên sao chép mã nguồn độc quyền của công ty cũ sang công ty mới để sử dụng trong sản phẩm mới. Hành vi này vi phạm điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vi phạm bản quyền và sở hữu trí tuệ (Intellectual Property Theft), có thể bị kiện dân sự bồi thường thiệt hại và truy cứu trách nhiệm hình sự",
      "B. Chỉ là sự trao đổi kinh nghiệm bình thường",
      "C. Được chính phủ khuyến khích để tăng tính cạnh tranh",
      "D. Không vi phạm bất kỳ quy định nào"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mã nguồn độc quyền do công ty trả lương tạo ra thuộc sở hữu trí tuệ của tổ chức đó; tự ý chiếm đoạt hoặc chuyển giao là hành vi ăn cắp tài sản trí tuệ nghiêm trọng."
  },
  {
    "id": 1234,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Khi được tuyển dụng vào làm việc tại bộ phận an ninh mạng của một công ty, bạn thường phải ký thỏa thuận bảo mật thông tin nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giấy cam kết đi làm đúng giờ",
      "B. Thỏa thuận không tiết lộ thông tin (NDA - Non-Disclosure Agreement)",
      "C. Hợp đồng mua bán thiết bị máy tính",
      "D. Giấy vay tiền ngân hàng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thỏa thuận NDA ràng buộc mặt pháp lý: nghiêm cấm chuyên gia an ninh tiết lộ bất kỳ thông tin nội bộ, lỗ hổng hệ thống hay dữ liệu khách hàng nào cho bên thứ ba."
  },
  {
    "id": 1235,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Tại sao việc học tập liên tục (Lifelong Learning) lại là yêu cầu bắt buộc đối với bất kỳ ai theo đuổi sự nghiệp an ninh mạng?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì các bài thi chứng chỉ không bao giờ cho người thi đỗ",
      "B. Vì bối cảnh công nghệ, phần cứng, phần mềm và kỹ thuật tấn công của tin tặc luôn biến đổi và phát triển từng ngày; kiến thức không được cập nhật sẽ nhanh chóng bị lỗi thời",
      "C. Vì luật pháp yêu cầu mỗi tuần phải đọc 1 cuốn sách",
      "D. Vì máy tính sẽ tự động khóa nếu không học bài mới"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An ninh mạng là một cuộc chạy đua vũ trang công nghệ không hồi kết giữa kẻ tấn công và người phòng thủ; ngừng cập nhật kiến thức đồng nghĩa với việc tự đào thải."
  },
  {
    "id": 1236,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Kỹ năng mềm (Soft Skills) nào sau đây được các nhà tuyển dụng an ninh mạng đánh giá cao ngang ngửa kỹ năng kỹ thuật?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kỹ năng giao tiếp và truyền đạt (giải thích rủi ro kỹ thuật phức tạp cho ban lãnh đạo hiểu), tư duy phản biện và khả năng làm việc nhóm",
      "B. Kỹ năng hát karaoke",
      "C. Kỹ năng chơi trò chơi điện tử trực tuyến",
      "D. Kỹ năng vẽ tranh biếm họa"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chuyên gia an ninh mạng giỏi phải biết thuyết phục ban giám đốc đầu tư cho bảo mật và hướng dẫn người dùng cuối; kỹ năng giao tiếp và tư duy phân tích là chìa khóa thăng tiến."
  },
  {
    "id": 1237,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Khái niệm \"Dark Web\" (Web tối) thường được hiểu là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Các trang web có hình nền màu đen",
      "B. Phần không gian web chỉ có thể truy cập được thông qua các trình duyệt và phần mềm định tuyến ẩn danh đặc biệt (như Tor), nơi lưu lượng được mã hóa nhiều lớp và thường là nơi trao đổi của các chợ đen ngầm",
      "C. Các trang web bị mất điện máy chủ",
      "D. Các trang web tin tức vào ban đêm"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dark Web nằm trong mạng ngầm (Deep Web), đòi hỏi cấu hình ẩn danh (mạng Tor/.onion) để truy cập, nơi các loại dữ liệu đánh cắp, vũ khí và công cụ mã độc thường bị rao bán trái phép."
  },
  {
    "id": 1238,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Mạng Tor (The Onion Router) hoạt động theo nguyên lý nào để bảo vệ tính ẩn danh của người dùng?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động xóa lịch sử cuộc gọi điện thoại",
      "B. Định tuyến lưu lượng mạng qua chuỗi nhiều máy chủ chuyển tiếp (Relays) phân tán ngẫu nhiên và bọc dữ liệu trong nhiều lớp mã hóa liên tiếp giống như các lớp của củ hành tây",
      "C. Cắt dây mạng Internet của máy tính",
      "D. Đổi địa chỉ nhà ở của người dùng trên bản đồ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mạng Tor mã hóa nhiều lớp (Onion routing); mỗi nút chuyển tiếp chỉ biết nút trước và nút sau nó, không nút nào biết đồng thời cả nguồn gốc và đích đến cuối cùng của dữ liệu."
  },
  {
    "id": 1239,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Mật mã học (Cryptography)",
    "question": "Vai trò của một Kỹ sư Mật mã học (Cryptographer) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đóng gói các hộp máy tính vào thùng các-tông",
      "B. Nghiên cứu, thiết kế và phát triển các thuật toán toán học, giao thức và hệ thống mã hóa bảo mật nhằm bảo vệ dữ liệu chống lại sự can thiệp và giải mã trái phép",
      "C. Đi vẽ tranh tường trang trí văn phòng",
      "D. Đếm số lượng máy tính trong kho"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nhà mật mã học là các chuyên gia toán học và máy tính chuyên sáng tạo ra các thuật toán mã hóa (như AES, RSA, ECC, hay mật mã hậu lượng tử) bảo vệ dữ liệu toàn cầu."
  },
  {
    "id": 1240,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Một sinh viên an ninh mạng muốn kiểm tra kỹ năng tấn công Wi-Fi. Hành động nào sau đây là HỢP PHÁP và ĐẠO ĐỨC?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dò mật khẩu Wi-Fi của nhà hàng xóm bên cạnh",
      "B. Dựng một phòng thực hành (Lab) riêng tại nhà bằng thiết bị router của chính mình hoặc thực hành trên môi trường mô phỏng không gây ảnh hưởng đến bất kỳ ai",
      "C. Tấn công làm sập mạng Wi-Fi của trường đại học vào ngày thi",
      "D. Bẻ khóa mạng Wi-Fi của quán cà phê gần nhà"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nguyên tắc đạo đức và pháp lý cơ bản: Chỉ thử nghiệm trên các hệ thống mà bạn sở hữu hoặc đã nhận được sự đồng ý bằng văn bản của chủ sở hữu hệ thống đó."
  },
  {
    "id": 1241,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Nhóm tấn công APT28 hoặc Lazarus Group thường được các nhà phân tích bảo mật xếp vào loại nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Script Kiddies (Hacker nghiệp dư)",
      "B. State-Sponsored Attackers (Nhóm tấn công mạng được nhà nước/chính phủ tài trợ)",
      "C. Các hội sinh viên công nghệ thông tin tự phát",
      "D. Các công ty sản xuất phần mềm kế toán"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các nhóm APT như Lazarus (liên kết Triều Tiên) hay APT28/Fancy Bear (liên kết Nga) là các nhóm tin tặc cấp cao được chính phủ tài trợ để thực hiện gián điệp và phá hoại mạng."
  },
  {
    "id": 1242,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Tại sao việc tham gia vào các hiệp hội chuyên môn như ISACA hoặc (ISC)² lại có lợi cho sự nghiệp an ninh mạng của bạn?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Để được mua vé máy bay miễn phí",
      "B. Mở rộng mạng lưới quan hệ đồng nghiệp chuyên môn (Networking), tiếp cận các nghiên cứu công nghệ mới nhất, tham gia hội thảo và tích lũy điểm duy trì chứng chỉ (CPE points)",
      "C. Để không cần phải đi làm hàng ngày nữa",
      "D. Để được công nhận là công dân danh dự của Mỹ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Các hiệp hội nghề nghiệp tạo cơ hội kết nối với các chuyên gia đầu ngành, cập nhật xu hướng công nghệ mới và hỗ trợ phát triển lộ trình sự nghiệp vững chắc."
  },
  {
    "id": 1243,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo đức nghề nghiệp & Pháp lý ATTT",
    "question": "Khi một trang web bị rò rỉ dữ liệu (Data Breach) làm lộ hàng triệu mật khẩu người dùng, hành động đạo đức đầu tiên mà ban quản trị trang web phải làm là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giấu kín sự việc và giả vờ như không có chuyện gì xảy ra",
      "B. Nhanh chóng thông báo công khai cho toàn thể người dùng bị ảnh hưởng, yêu cầu đặt lại mật khẩu và hỗ trợ các biện pháp giảm thiểu thiệt hại theo quy định pháp luật",
      "C. Đổ lỗi hoàn toàn cho người dùng tự làm lộ mật khẩu",
      "D. Tăng giá dịch vụ lên gấp đôi"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Đạo đức nghề nghiệp và các điều luật như GDPR yêu cầu doanh nghiệp phải thông báo kịp thời cho nạn nhân và cơ quan quản lý khi xảy ra sự cố lộ dữ liệu."
  },
  {
    "id": 1244,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Để chuẩn bị hồ sơ ứng tuyển (CV) vào vị trí thực tập sinh an ninh mạng (Cybersecurity Intern), bạn nên thể hiện điều gì nổi bật?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Danh sách các tài khoản mạng xã hội có nhiều người theo dõi",
      "B. Các chứng chỉ cơ bản (như Cisco CCST, CyberOps), các dự án lab thực hành (Packet Tracer), thành tích giải các bài thi CTF trên TryHackMe/Hack The Box và niềm đam mê học hỏi",
      "C. Khả năng thức khuya chơi trò chơi điện tử",
      "D. Số lượng bạn bè trên Facebook"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Nhà tuyển dụng tìm kiếm ứng viên có nền tảng lý thuyết vững chắc (qua chứng chỉ uy tín) kết hợp với kỹ năng thực hành chủ động (qua các lab và sân chơi CTF thực tế)."
  },
  {
    "id": 1245,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Một chuyên gia bảo mật ký hợp đồng kiểm thử thâm nhập hệ thống ứng dụng web của công ty X. Trong quá trình kiểm thử, chuyên gia vô tình nhìn thấy dữ liệu tài khoản ngân hàng và đời tư của khách hàng. Hành vi đúng đắn là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tải dữ liệu đó về máy cá nhân để làm kỷ niệm",
      "B. Tôn trọng quyền riêng tư, tuyệt đối không sao chép hay phát tán dữ liệu, dừng khai thác sâu vào dữ liệu cá nhân đó và ghi nhận lỗ hổng vào báo cáo kỹ thuật gửi riêng cho ban lãnh đạo công ty X",
      "C. Khoe hình ảnh chụp màn hình dữ liệu lên diễn đàn công cộng",
      "D. Gửi tin nhắn tống tiền các khách hàng bị lộ thông tin"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Chuẩn mực đạo đức tối thượng của chuyên gia kiểm thử là giữ bí mật tuyệt đối dữ liệu khách hàng và không được phép lạm dụng lỗ hổng để xâm phạm quyền riêng tư."
  },
  {
    "id": 1246,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Công nghệ Điện toán lượng tử (Quantum Computing) đặt ra thách thức lớn nào đối với an ninh mạng trong tương lai gần?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Làm cho màn hình máy tính không thể hiển thị màu sắc",
      "B. Sức mạnh tính toán lượng tử vượt trội có thể dễ dàng bẻ gãy các thuật toán mã hóa khóa công khai truyền thống (như RSA, ECC), đòi hỏi thế giới phải chuyển sang Mật mã học hậu lượng tử (Post-Quantum Cryptography)",
      "C. Làm cho mạng cáp quang bị nóng chảy",
      "D. Thay thế hoàn toàn con người trong mọi công việc"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Thuật toán Shor chạy trên máy tính lượng tử có thể phân tích thừa số nguyên cực nhanh, đe dọa vô hiệu hóa mã hóa RSA/ECC hiện nay, thúc đẩy ngành an ninh chuyển đổi sang mật mã hậu lượng tử."
  },
  {
    "id": 1247,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Khái niệm \"IoT Forensics\" trong điều tra kỹ thuật số là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Việc sửa chữa các thiết bị điện tử gia dụng bị hỏng",
      "B. Lĩnh vực chuyên biệt của điều tra số nhằm thu thập, giải mã và phân tích dữ liệu chứng cứ số từ các thiết bị thông minh (Smart TV, camera thông minh, thiết bị đeo theo dõi sức khỏe)",
      "C. Bán các thiết bị cảm biến thông minh",
      "D. Tắt kết nối Internet của các thiết bị trong nhà"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Với sự phổ biến của thiết bị IoT, dữ liệu cảm biến (như dữ liệu GPS của đồng hồ thông minh, nhật ký bật đèn của nhà thông minh) ngày càng trở thành chứng cứ số quan trọng trong các vụ án hình sự."
  },
  {
    "id": 1248,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "question": "Nền tảng \"GitHub\" hoặc \"GitLab\" hỗ trợ cộng đồng an ninh mạng như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nơi chia sẻ các bài hát miễn phí",
      "B. Nơi lưu trữ, chia sẻ mã nguồn mở của các công cụ bảo mật, các kịch bản kiểm thử, các danh mục lỗ hổng và tài liệu học tập hợp tác toàn cầu",
      "C. Một trang mạng xã hội dành riêng cho người mẫu ảnh",
      "D. Sàn giao dịch tiền ảo bất hợp pháp"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "GitHub là kho tài nguyên khổng lồ nơi các chuyên gia an ninh chia sẻ các công cụ phân tích mã nguồn mở, kịch bản tự động hóa và các mẫu quy tắc phát hiện tấn công."
  },
  {
    "id": 1249,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Thuật ngữ \"Ethical Hacker\" còn được gọi bằng một tên gọi quen thuộc nào trong ngành an ninh mạng?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Black Hat Hacker",
      "B. White Hat Hacker (Tin tặc mũ trắng)",
      "C. Cracker",
      "D. Phisher"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "White Hat Hacker chính là Ethical Hacker - những người sử dụng tài năng bảo mật phục vụ mục đích xây dựng, bảo vệ hệ thống và tuân thủ đạo đức pháp luật."
  },
  {
    "id": 1250,
    "chapter": "Chương 6: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng",
    "chapterId": 6,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Sau khi hoàn thành khóa học \"Introduction to Cybersecurity\" của Cisco Networking Academy, bước đi tiếp theo lý tưởng nhất cho người học muốn theo đuổi nghề nghiệp chuyên nghiệp là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ngừng học vì kiến thức đã đủ để làm chuyên gia hàng đầu thế giới",
      "B. Tiếp tục học các khóa chuyên sâu tiếp theo như Cisco CyberOps Associate hoặc CCNA Security, thực hành lab trên Packet Tracer, tham gia cộng đồng CTF và ôn thi các chứng chỉ nghề nghiệp quốc tế",
      "C. Đi tìm các trang web để thử tấn công bất hợp pháp",
      "D. Xóa tài khoản NetAcad của mình"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Khóa học \"Introduction to Cybersecurity\" là nền móng nhập môn. Để xây dựng sự nghiệp vững vàng, người học cần tiếp tục nâng cao kiến thức chuyên sâu (CyberOps, CCNA), rèn luyện kỹ năng thực chiến và tích lũy chứng chỉ ngành."
  },
  {
    "id": 1251,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức mạng & Bảo mật Wi-Fi",
    "question": "Khi một người dùng mở trình duyệt web và truy cập vào địa chỉ `yummyrecipesforme.org`, thứ tự và vai trò của 4 giao thức mạng nào sau đây được thực thi đồng thời?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. FTP tải file $\\rightarrow$ Telnet kết nối $\\rightarrow$ SMTP gửi thư $\\rightarrow$ ICMP báo lỗi.",
      "B. DNS dịch tên miền sang IP $\\rightarrow$ ARP tìm địa chỉ MAC $\\rightarrow$ TCP bắt tay 3 bước $\\rightarrow$ HTTPS truyền tải trang web an toàn.",
      "C. DHCP cấp IP $\\rightarrow$ SNMP quản lý $\\rightarrow$ HTTP truyền trang web $\\rightarrow$ SFTP mã hóa.",
      "D. BGP định tuyến $\\rightarrow$ OSPF tìm đường $\\rightarrow$ POP3 tải thư $\\rightarrow$ UDP gửi dữ liệu."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giáo trình Coursera minh họa ví dụ điển hình: Để truy cập 1 website, thiết bị dùng DNS để lấy IP, ARP để biết MAC của router tiếp theo, TCP để thiết lập kết nối tin cậy và HTTPS để trao đổi nội dung mã hóa an toàn."
  },
  {
    "id": 1252,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức mạng & Bảo mật Wi-Fi",
    "question": "Ba nhóm giao thức mạng chính bao gồm:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giao thức cục bộ, giao thức toàn cầu, giao thức không dây.",
      "B. Communication (Giao tiếp), Management (Quản lý), Security (Bảo mật).",
      "C. Hardware, Software, Firmware protocols.",
      "D. Input, Process, Output protocols."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ba nhóm giao thức mạng cốt lõi: Giao tiếp (Communication - như TCP, UDP), Quản lý (Management - như SNMP, ICMP) và Bảo mật (Security - như HTTPS, SFTP, SSH)."
  },
  {
    "id": 1253,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Giao thức TCP khác với giao thức UDP ở đặc điểm cơ bản nào sau đây?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. TCP là giao thức không kết nối, trong khi UDP có kết nối.",
      "B. TCP thiết lập kết nối tin cậy thông qua quá trình bắt tay 3 bước (SYN $\\rightarrow$ SYN/ACK $\\rightarrow$ ACK), đảm bảo dữ liệu đến đúng thứ tự; còn UDP không kết nối, truyền tải nhanh nhưng không đảm bảo độ tin cậy.",
      "C. UDP hoạt động ở Tầng Ứng dụng, còn TCP hoạt động ở Tầng Internet.",
      "D. TCP chỉ truyền tải được âm thanh, còn UDP truyền tải văn bản."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "TCP là giao thức hướng kết nối (Connection-oriented) đảm bảo truyền tin cậy qua 3-way handshake; UDP là giao thức không hướng kết nối (Connectionless) tối ưu cho tốc độ và thời gian thực."
  },
  {
    "id": 1254,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Một chuyên viên an ninh mạng bắt các gói tin HTTPS (Port 443) và SFTP (Port 22) trên mạng nội bộ. Nhận định nào sau đây là ĐÚNG về khả năng quan sát của chuyên viên này?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chuyên viên có thể đọc được toàn bộ nội dung văn bản truyền tải.",
      "B. Các giao thức này mã hóa nội dung tải trọng (payload) nên không đọc được nội dung, nhưng KHÔNG che giấu địa chỉ IP nguồn và IP đích trong tiêu đề gói tin.",
      "C. Toàn bộ gói tin từ IP nguồn đến IP đích đều bị biến thành chuỗi rỗng không thể đọc được.",
      "D. Giao thức HTTPS tự động đổi địa chỉ MAC của máy tính liên tục."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giáo trình Course 2 nhấn mạnh: Các giao thức mã hóa (HTTPS, SFTP) bảo vệ payload nhưng không mã hóa tiêu đề IP; người nghe lén vẫn thấy rõ IP nguồn và IP đích."
  },
  {
    "id": 1255,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Quá trình Network Address Translation (NAT) thực hiện nhiệm vụ gì trên Router/Firewall?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chuyển đổi mã nguồn phần mềm sang mã máy.",
      "B. Chuyển đổi địa chỉ IP riêng (Private IP) trong mạng nội bộ thành địa chỉ IP công khai (Public IP) khi gói tin đi ra Internet và ngược lại khi nhận phản hồi.",
      "C. Đổi mật khẩu Wi-Fi tự động theo chu kỳ 1 giờ.",
      "D. Tăng độ dài của cáp mạng LAN."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NAT ánh xạ các địa chỉ IP riêng (không thể định tuyến trên Internet) sang một hoặc nhiều địa chỉ IP công khai hợp lệ để giao tiếp với thế giới bên ngoài."
  },
  {
    "id": 1256,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức mạng & Bảo mật Wi-Fi",
    "question": "Dải địa chỉ IP nào sau đây thuộc khối địa chỉ IP riêng (Private IP Address) theo chuẩn RFC 1918?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. `8.8.8.0` đến `8.8.8.255`",
      "B. `192.168.0.0` đến `192.168.255.255`",
      "C. `1.1.1.0` đến `1.1.1.255`",
      "D. `203.162.0.0` đến `203.162.255.255`"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "3 dải Private IP chuẩn: Lớp A (`10.0.0.0/8`), Lớp B (`172.16.0.0/12`), Lớp C (`192.168.0.0/16`)."
  },
  {
    "id": 1257,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Giao thức DHCP hoạt động trên các cổng (Port) UDP nào cho Server và Client?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Server: Port 80; Client: Port 443",
      "B. Server: UDP Port 67; Client: UDP Port 68",
      "C. Server: TCP Port 20; Client: TCP Port 21",
      "D. Server: UDP Port 53; Client: UDP Port 53"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DHCP Server lắng nghe trên UDP port 67, DHCP Client gửi và nhận phản hồi trên UDP port 68."
  },
  {
    "id": 1258,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Giao thức Phân giải Địa chỉ (ARP) hoạt động ở tầng nào của mô hình TCP/IP và có số hiệu cổng (Port) là bao nhiêu?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tầng Ứng dụng, sử dụng TCP Port 25",
      "B. Tầng Truy cập Mạng (Network Access / Lớp 2), KHÔNG sử dụng số hiệu cổng",
      "C. Tầng Giao vận, sử dụng UDP Port 69",
      "D. Tầng Internet, sử dụng TCP Port 80"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ARP ánh xạ IP sang MAC ở tầng Data Link (Lớp 2); vì nằm dưới Tầng Giao vận (Lớp 4) nên ARP không có khái niệm số cổng (Port)."
  },
  {
    "id": 1259,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức truyền thông & Cổng dịch vụ",
    "question": "Tại sao giao thức SSH (Port 22) được khuyến nghị sử dụng để thay thế hoàn toàn giao thức Telnet (Port 23)?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì Telnet chạy chậm hơn SSH 10 lần.",
      "B. Vì Telnet truyền toàn bộ dữ liệu đăng nhập và mật khẩu dưới dạng văn bản rõ (cleartext), trong khi SSH cung cấp xác thực và mã hóa toàn bộ phiên truyền tải.",
      "C. Vì Telnet chỉ chạy được trên điện thoại di động.",
      "D. Vì SSH là phần mềm miễn phí còn Telnet phải mua bản quyền đắt tiền."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Telnet không có cơ chế mã hóa, kẻ nghe lén trên mạng có thể đọc được thông tin đăng nhập dễ dàng; SSH thay thế Telnet bằng mã hóa an toàn."
  },
  {
    "id": 1260,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giao thức mạng & Bảo mật Wi-Fi",
    "question": "Điểm khác biệt quan trọng giữa hai giao thức nhận email POP3 và IMAP là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. POP3 chỉ dùng cho điện thoại, IMAP dùng cho máy tính.",
      "B. POP3 tải toàn bộ email về máy cục bộ và thường xóa trên server (khó đồng bộ đa thiết bị); trong khi IMAP lưu trữ email trên server và cho phép đồng bộ trạng thái trên nhiều thiết bị.",
      "C. POP3 có mã hóa còn IMAP không có mã hóa.",
      "D. IMAP dùng để gửi email, POP3 dùng để nhận email."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "POP3 (Port 110/995) tải về máy cục bộ, còn IMAP (Port 143/993) giữ thư trên server, cho phép người dùng đồng bộ trạng thái đọc/xóa trên nhiều thiết bị cùng lúc."
  },
  {
    "id": 1261,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Mật mã học (Cryptography)",
    "question": "Cổng nào sau đây được sử dụng để gửi email an toàn qua giao thức SMTP có hỗ trợ mã hóa TLS?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Port 23",
      "B. Port 587",
      "C. Port 80",
      "D. Port 53"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cổng gửi email truyền thống là TCP 25 (không mã hóa), trong khi cổng chuẩn hiện đại có mã hóa TLS/STARTTLS là Port 587 (hoặc 465)."
  },
  {
    "id": 1262,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Tiêu chuẩn kỹ thuật nền tảng cho mạng cục bộ không dây (Wi-Fi) do tổ chức nào xác định?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. IETF RFC 791",
      "B. IEEE họ tiêu chuẩn 802.11",
      "C. ISO 9001",
      "D. ANSI C"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "IEEE 802.11 là họ tiêu chuẩn kỹ thuật giao tiếp không dây do Viện Kỹ sư Điện và Điện tử (IEEE) ban hành."
  },
  {
    "id": 1263,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Chuẩn bảo mật Wi-Fi nào sau đây là lâu đời nhất (ra mắt năm 1999) và hiện nay bị coi là cực kỳ nguy hiểm, không bao giờ được sử dụng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. WPA3",
      "B. WEP (Wired Equivalent Privacy)",
      "C. WPA2-Enterprise",
      "D. WPA-TKIP"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "WEP (1999) sử dụng thuật toán RC4 với vector khởi tạo yếu, có thể bị tin tặc thu thập gói tin và giải mã khóa trong vòng vài phút."
  },
  {
    "id": 1264,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Mật mã học (Cryptography)",
    "question": "Chuẩn bảo mật Wi-Fi WPA2 (2004) sử dụng thuật toán mã hóa mạnh nào và giao thức đóng gói nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. DES và TKIP",
      "B. Thuật toán mã hóa AES và giao thức CCMP",
      "C. MD5 và SHA-1",
      "D. RC4 và WEP"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "WPA2 nâng cấp vượt bậc so với WPA nhờ tích hợp thuật toán mã hóa khối chuẩn cao cấp AES cùng giao thức toàn vẹn CCMP."
  },
  {
    "id": 1265,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Bảo mật mạng không dây Wi-Fi",
    "question": "Chuẩn bảo mật Wi-Fi mới nhất WPA3 (2018) mang lại cải tiến đột phá nào so với WPA2?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giảm tốc độ truyền tải mạng Wi-Fi xuống 50%.",
      "B. Khắc phục triệt để lỗ hổng bắt tay KRACK và sử dụng giao thức xác thực SAE (Simultaneous Authentication of Equals) chống tấn công từ điển ngoại tuyến.",
      "C. Cho phép mọi người kết nối mà không cần mật khẩu.",
      "D. Tự động tắt sóng Wi-Fi khi trời mưa."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "WPA3 sử dụng SAE (thay cho WPA2-PSK) để bảo vệ bắt tay, ngăn tin tặc lưu gói tin về máy để thử mật khẩu từ điển ngoại tuyến (offline dictionary attack), đồng thời loại bỏ nguy cơ từ lỗ hổng KRACK."
  },
  {
    "id": 1266,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Một cuộc xâm nhập mạng (Network Intrusion) thành công thường gây ra những hậu quả nào cho tổ chức?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tổn thất tài chính (Financial loss)",
      "B. Gián đoạn vận hành (Operational downtime)",
      "C. Hủy hoại danh tiếng và niềm tin khách hàng (Reputational damage)",
      "D. Tất cả các phương án trên"
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Giáo trình Course 3 nêu rõ 3 nhóm hậu quả chính của một cuộc xâm nhập: tài chính, vận hành và danh tiếng."
  },
  {
    "id": 1267,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Trong bài học về sự cố rò rỉ dữ liệu của tập đoàn Home Depot năm 2014, kẻ tấn công đã xâm nhập ban đầu thông qua con đường nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Dò mật khẩu Wi-Fi của cửa hàng bán lẻ.",
      "B. Sử dụng thông tin đăng nhập bị đánh cắp của một nhà cung cấp bên thứ ba (Third-party vendor) để vào mạng nội bộ, sau đó cài mã độc lên các máy POS.",
      "C. Bẻ gãy khóa cửa sổ của trung tâm dữ liệu.",
      "D. Tấn công DDoS làm sập trang web bán lẻ."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Home Depot là bài học kinh điển về rủi ro từ chuỗi cung ứng: kẻ xấu đánh cắp tài khoản của nhà thầu phụ để xâm nhập mạng và cài mã độc lên hệ thống máy tính tiền (Point-of-Sale)."
  },
  {
    "id": 1268,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Sự khác biệt cơ bản giữa \"Interception Attack\" (Tấn công đánh chặn) và \"Backdoor\" (Cửa sau) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Interception là phần cứng, Backdoor là phần mềm.",
      "B. Interception tập trung vào việc chặn bắt hoặc can thiệp dữ liệu đang truyền trên đường truyền; trong khi Backdoor là cơ chế giúp kẻ tấn công duy trì và mở rộng quyền truy cập bền bỉ vào hệ thống mà bỏ qua xác thực thông thường.",
      "C. Interception chỉ xảy ra trên điện thoại, Backdoor trên máy chủ.",
      "D. Hai khái niệm này hoàn toàn giống nhau."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Interception can thiệp dữ liệu đang lưu chuyển (in transit), còn Backdoor dùng để duy trì quyền kiểm soát hệ thống lâu dài (persistence)."
  },
  {
    "id": 1269,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Cuộc tấn công SYN Flood làm cạn kiệt tài nguyên máy chủ bằng cách khai thác giai đoạn nào của quy trình bắt tay 3 bước TCP?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kẻ tấn công gửi liên tục gói tin ACK mà không gửi SYN.",
      "B. Kẻ tấn công gửi hàng loạt gói tin SYN với IP nguồn giả mạo, máy chủ phản hồi SYN/ACK và chờ đợi, nhưng kẻ tấn công không bao giờ gửi lại gói tin ACK cuối cùng, làm tràn bộ đệm kết nối nửa mở (half-open).",
      "C. Kẻ tấn công gửi gói tin FIN để đóng kết nối ngay lập tức.",
      "D. Kẻ tấn công ngắt nguồn điện máy chủ."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "SYN Flood tạo ra hàng ngàn kết nối nửa mở (half-open connection states), khiến máy chủ hết dung lượng bộ nhớ dành cho bảng quản lý kết nối TCP."
  },
  {
    "id": 1270,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Tấn công \"Ping of Death\" là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Gửi gói tin ICMP có chứa chất độc hóa học.",
      "B. Gửi gói tin ICMP bị phân mảnh có kích thước tổng thể vượt quá giới hạn tối đa của giao thức IPv4 (65,535 bytes), gây tràn bộ nhớ đệm và làm sập hệ điều hành đích khi tái lắp ráp gói tin.",
      "C. Tắt dịch vụ Ping trên toàn bộ mạng Internet.",
      "D. Gửi 1 gói tin Ping duy nhất vào ban đêm."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Gói tin IPv4 hợp lệ tối đa là 65,535 bytes; Ping of Death cố tình gửi gói phân mảnh vượt quá kích thước này làm hệ điều hành nạn nhân bị crash khi ghép lại."
  },
  {
    "id": 1271,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Cuộc tấn công DDoS vào nhà cung cấp dịch vụ Dyn DNS năm 2016 đã sử dụng lực lượng thiết bị nào để tạo ra lưu lượng tấn công kỷ lục?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Các siêu máy tính của các trường đại học hàng đầu",
      "B. Mạng botnet Mirai bao gồm hàng triệu thiết bị IoT (camera giám sát, đầu ghi DVR, router gia đình) bị nhiễm mã độc do dùng mật khẩu mặc định",
      "C. Các máy chủ đám mây của Google",
      "D. Các vệ tinh quỹ đạo thấp"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Vụ tấn công Dyn DNS năm 2016 là minh chứng lịch sử về việc botnet Mirai biến các thiết bị IoT gia đình thành vũ khí DDoS khổng lồ làm tê liệt hệ thống phân giải tên miền Internet."
  },
  {
    "id": 1272,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Chế độ \"Promiscuous Mode\" (Chế độ hỗn tạp) trên card mạng (NIC) có ý nghĩa gì đối với hoạt động bắt gói tin (Packet Sniffing)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cho phép card mạng chỉ nhận các gói tin có địa chỉ MAC đích là chính nó.",
      "B. Cho phép card mạng bỏ qua bộ lọc địa chỉ MAC phần cứng và tiếp nhận toàn bộ các gói tin truyền qua môi trường mạng vật lý, bất kể gói tin gửi cho ai.",
      "C. Làm cho card mạng phát sóng Wi-Fi mạnh hơn.",
      "D. Ngắt kết nối card mạng khỏi máy tính."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bình thường NIC chỉ nhận gói tin gửi riêng cho MAC của nó hoặc broadcast; ở chế độ Promiscuous, NIC nhận mọi gói tin di chuyển qua dây cáp/sóng mạng."
  },
  {
    "id": 1273,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Phân biệt giữa \"Passive Sniffing\" (Nghe lén thụ động) và \"Active Sniffing\" (Nghe lén chủ động)?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Passive sniffing đắt tiền hơn Active sniffing.",
      "B. Passive sniffing chỉ lắng nghe thụ động trên môi trường chia sẻ (như Hub hoặc Wi-Fi không mã hóa); trong khi Active sniffing chủ động can thiệp vào Switch (như dùng ARP Poisoning hoặc làm tràn bảng MAC/CAM) để ép lưu lượng đi qua máy kẻ tấn công.",
      "C. Active sniffing không bao giờ bị phát hiện.",
      "D. Passive sniffing chỉ bắt được tín hiệu Bluetooth."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trong mạng Switch phân đoạn, lưu lượng chỉ đi đến cổng đích; do đó kẻ nghe lén phải dùng kỹ thuật chủ động (Active Sniffing) như đầu độc ARP để chuyển hướng gói tin về máy mình."
  },
  {
    "id": 1274,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Kỹ thuật giả mạo địa chỉ IP (IP Spoofing) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đổi địa chỉ nhà ở trên hóa đơn Internet.",
      "B. Kẻ tấn công thay đổi thông tin địa chỉ IP nguồn trong tiêu đề gói tin IP thành địa chỉ IP của một máy tính khác nhằm che giấu danh tính hoặc mạo danh hệ thống được tin cậy.",
      "C. Tắt dịch vụ cấp phát IP trên mạng.",
      "D. Cài đặt thêm card mạng mới cho máy chủ."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tiêu đề gói tin IP không có cơ chế tự xác thực; kẻ tấn công có thể ghi đè bất kỳ địa chỉ IP nào vào trường Source IP để mạo danh máy khác."
  },
  {
    "id": 1275,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công Man-in-the-Middle (On-Path)",
    "question": "Tấn công \"On-Path Attack\" (trước đây thường gọi là Man-in-the-Middle) diễn ra như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Kẻ tấn công đứng chặn trên đường đi làm của chuyên viên bảo mật.",
      "B. Kẻ tấn công chèn mình vào giữa luồng truyền thông tin của hai bên tin cậy, cho phép chúng nghe lén, chặn bắt hoặc chỉnh sửa dữ liệu mà các bên không hề hay biết.",
      "C. Kẻ tấn công gửi email xin việc vào công ty.",
      "D. Kẻ tấn công cắt đứt cáp quang ngầm."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "On-path attack đánh vào luồng giao tiếp giữa 2 thiết bị (thường qua kỹ thuật ARP spoofing hoặc rogue gateway) để kiểm soát dữ liệu qua lại."
  },
  {
    "id": 1276,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Cuộc tấn công phát lại (Replay Attack) hoạt động theo nguyên lý nào?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mở lại một video bài giảng trên YouTube nhiều lần.",
      "B. Kẻ tấn công chặn bắt một gói tin chứa dữ liệu xác thực hợp lệ trên mạng, sau đó gửi lại nguyên vẹn gói tin đó vào một thời điểm khác để vượt qua cơ chế đăng nhập.",
      "C. Khởi động lại router mạng liên tục.",
      "D. Gửi thư rác quảng cáo lặp đi lặp lại."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ tấn công không cần giải mã mật khẩu; chúng chỉ cần bắt gói tin xác thực đã được mã hóa và phát lại (replay) cho máy chủ để mạo danh phiên đăng nhập."
  },
  {
    "id": 1277,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Xâm nhập mạng & Kỹ thuật tấn công",
    "question": "Biện pháp kỹ thuật nào sau đây giúp chống lại cuộc tấn công Replay Attack hiệu quả nhất?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tăng dung lượng bộ nhớ RAM máy tính",
      "B. Sử dụng dấu thời gian (Timestamps), số thứ tự gói tin (Sequence numbers) và giá trị ngẫu nhiên dùng một lần (Nonce) trong quá trình xác thực",
      "C. Sử dụng chuột máy tính có dây",
      "D. Đổi tên tệp tài liệu"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giá trị ngẫu nhiên dùng một lần (Nonce) và Timestamp đảm bảo gói tin chỉ có hiệu lực trong một khoảnh khắc duy nhất; nếu kẻ tấn công gửi lại sau đó, gói tin sẽ bị từ chối ngay."
  },
  {
    "id": 1278,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tấn công DoS & DDoS",
    "question": "Tấn công \"Smurf Attack\" là sự kết hợp nguy hiểm giữa hai yếu tố nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Virus máy tính và Trojan Horse",
      "B. Giả mạo địa chỉ IP nguồn (IP Spoofing) và khuếch đại lưu lượng ICMP Echo Request gửi tới địa chỉ Broadcast của mạng",
      "C. Mạng xã hội và tin nhắn lừa đảo",
      "D. Phần mềm độc hại và USB nhiễm virus"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Smurf attack gửi ICMP ping tới địa chỉ broadcast với IP nguồn là nạn nhân, khiến hàng trăm máy tính trong mạng cùng trả lời về một địa chỉ IP duy nhất của nạn nhân."
  },
  {
    "id": 1279,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Cơ chế lọc gói tin Ingress Filtering và Egress Filtering trên tường lửa biên giúp ngăn chặn mối đe dọa nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Ngăn máy tính bị bám bụi bẩn",
      "B. Phát hiện và loại bỏ các gói tin có địa chỉ IP nguồn \"không thể hợp lệ\" (ví dụ: gói tin từ ngoài Internet đi vào nhưng lại mang IP nguồn là dải IP nội bộ), ngăn chặn IP Spoofing",
      "C. Tự động tắt máy tính khi hết giờ làm việc",
      "D. Tăng độ sáng màn hình"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ingress/Egress filtering kiểm tra tính hợp lý của địa chỉ IP nguồn: Chặn các gói tin từ Internet vào nhưng mạo danh IP mạng nội bộ, triệt tiêu tấn công IP Spoofing."
  },
  {
    "id": 1280,
    "chapter": "Chương 2: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc (Attacks & Malware)",
    "chapterId": 2,
    "topic": "Phòng thủ theo chiều sâu (Defense-in-Depth)",
    "question": "Nguyên tắc \"Defense-in-Depth\" (Phòng thủ theo chiều sâu) trong an ninh mạng khẳng định điều gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Chỉ cần mua một thiết bị tường lửa đắt tiền nhất là đủ an toàn tuyệt đối.",
      "B. Không có một biện pháp bảo mật đơn lẻ nào là hoàn hảo; phải kết hợp nhiều lớp phòng vệ (tường lửa, phân đoạn mạng, mã hóa, giám sát, con người) để bảo vệ hệ thống.",
      "C. Đào hào sâu xung quanh tòa nhà văn phòng.",
      "D. Cài đặt 5 phần mềm diệt virus trên cùng một máy tính."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Defense-in-depth là triết lý phòng thủ đa tầng: nếu một tầng bảo mật bị chọc thủng, các tầng bảo vệ tiếp theo vẫn duy trì khả năng ngăn chặn kẻ tấn công."
  },
  {
    "id": 1281,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Khái niệm \"Security Hardening\" được định nghĩa chính xác nhất là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Việc lắp thêm vỏ thép bảo vệ bên ngoài máy chủ vật lý.",
      "B. Quá trình chủ động cấu hình, loại bỏ các thành phần không cần thiết và vá các điểm yếu nhằm làm cho hệ thống trở nên kiên cố và khó bị xâm nhập hơn.",
      "C. Việc tăng gấp đôi dung lượng ổ đĩa cứng của máy chủ.",
      "D. Mua thêm các gói bảo hiểm tài chính cho hệ thống mạng."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Hardening là tập hợp các thao tác kỹ thuật chủ động nhằm giảm thiểu rủi ro, đóng các cổng không dùng, gỡ bỏ dịch vụ thừa và gia cố cấu hình bảo mật."
  },
  {
    "id": 1282,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Mối quan hệ giữa \"Security Hardening\" và \"Attack Surface\" (Bề mặt tấn công) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Hardening làm tăng kích thước của Attack Surface.",
      "B. Mục tiêu cốt lõi của Security Hardening là thu hẹp tối đa Attack Surface bằng cách vô hiệu hóa hoặc loại bỏ các điểm vào, cổng, dịch vụ thừa mà kẻ tấn công có thể lợi dụng.",
      "C. Attack Surface không liên quan gì đến Hardening.",
      "D. Hardening chỉ áp dụng khi Attack Surface bằng 0."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Càng ít dịch vụ chạy, ít cổng mở, ít phần mềm thừa thì bề mặt tấn công càng nhỏ, kẻ tấn công càng có ít cơ hội tìm ra lỗ hổng để khai thác."
  },
  {
    "id": 1283,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Bốn bước trong vòng lặp cải tiến liên tục của quy trình Hardening bao gồm:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mua sắm $\\rightarrow$ Lắp đặt $\\rightarrow$ Bật nguồn $\\rightarrow$ Bỏ quên.",
      "B. Giảm bề mặt tấn công $\\rightarrow$ Thiết lập Baseline an toàn $\\rightarrow$ Giám sát sai lệch $\\rightarrow$ Cải tiến và vá lỗi liên tục.",
      "C. Tấn công $\\rightarrow$ Trả tiền chuộc $\\rightarrow$ Cài lại máy $\\rightarrow$ Nghỉ việc.",
      "D. Quét virus $\\rightarrow$ Xóa file $\\rightarrow$ Khởi động lại $\\rightarrow$ Tắt máy."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Course 4 mô tả chu trình 4 bước: 1. Giảm bề mặt; 2. Chuẩn hóa baseline; 3. Giám sát so sánh sai lệch; 4. Cải tiến liên tục."
  },
  {
    "id": 1284,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Biện pháp nào sau đây là một phần quan trọng của \"OS Hardening\" (Tăng cường bảo mật Hệ điều hành)?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giữ nguyên mật khẩu mặc định của hệ thống",
      "B. Áp dụng quy trình quản lý bản vá (Patch Management), vô hiệu hóa tài khoản Guest, cấu hình Security Baseline và áp dụng MFA",
      "C. Bật toàn bộ các dịch vụ chia sẻ file qua mạng",
      "D. Tắt tính năng tự động cập nhật của hệ điều hành"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "OS Hardening bao gồm việc cập nhật vá lỗi kịp thời, cấu hình tài khoản nghiêm ngặt, tắt dịch vụ không cần thiết và thực thi baseline an toàn."
  },
  {
    "id": 1285,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Thuật ngữ \"Security Baseline\" trong quản trị hệ điều hành có ý nghĩa gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Mức lương tối thiểu của nhân viên bảo mật",
      "B. Cấu hình bảo mật tiêu chuẩn tối thiểu, được văn bản hóa và bắt buộc áp dụng đồng bộ trên tất cả các thiết bị trong tổ chức",
      "C. Tốc độ đường truyền Internet tối thiểu",
      "D. Số lượng nhân viên tối thiểu trong một ca trực"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Baseline là bộ tiêu chuẩn cấu hình an toàn mẫu (ví dụ chuẩn CIS Benchmarks) được áp dụng đồng bộ cho mọi máy trạm và máy chủ trong doanh nghiệp."
  },
  {
    "id": 1286,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Kỹ thuật \"Sandboxing\" (Hộp cát) bảo vệ hệ điều hành như thế nào?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đổ cát xung quanh máy tính để chống cháy nổ",
      "B. Chạy ứng dụng hoặc tệp tin đáng ngờ trong một môi trường ảo hóa bị cô lập nghiêm ngặt, ngăn chặn mã độc can thiệp hoặc lây lan vào hệ điều hành thật",
      "C. Tự động xóa ứng dụng sau khi cài đặt",
      "D. Tăng độ phân giải đồ họa của ứng dụng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sandboxing tạo ra môi trường cách ly an toàn: nếu tệp đính kèm chứa mã độc bùng phát trong sandbox, nó cũng không thể gây hại cho hệ thống chủ."
  },
  {
    "id": 1287,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tường lửa mạng (Firewalls)",
    "question": "Trong quy trình Network Hardening, chính sách \"Implicit Deny\" (Ngầm định từ chối) trên tường lửa có nghĩa là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cho phép tất cả lưu lượng đi qua mạng trừ khi có lệnh cấm cụ thể.",
      "B. Tự động từ chối và chặn tất cả các lưu lượng truy cập mạng, NGOẠI TRỪ những lưu lượng được chỉ định cho phép rõ ràng trong danh sách quy tắc.",
      "C. Không bao giờ trả lời tin nhắn của người dùng.",
      "D. Tắt tường lửa vào ban đêm."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Implicit Deny là nguyên tắc vàng của tường lửa: chỉ mở những cổng và dịch vụ thực sự cần thiết, còn lại tất cả lưu lượng khác đều bị chặn mặc định ở cuối danh sách luật."
  },
  {
    "id": 1288,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Phân đoạn mạng & Vùng DMZ",
    "question": "Lợi ích của việc phân đoạn mạng (Network Segmentation) đối với bảo mật tổ chức là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Giúp tiết kiệm chi phí mua dây mạng",
      "B. Giới hạn phạm vi ảnh hưởng (Blast Radius); nếu một máy tính trong phân đoạn này bị nhiễm mã độc, kẻ tấn công không thể tự do quét và lan truyền sang các phân đoạn quan trọng khác",
      "C. Cho phép mọi người truy cập dữ liệu tài chính tự do",
      "D. Giúp tăng tốc độ quạt gió của switch"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Phân đoạn mạng cô lập các vùng chức năng, ngăn chặn kỹ thuật di chuyển ngang (Lateral Movement) của tin tặc khi đã xâm nhập được một máy trạm."
  },
  {
    "id": 1289,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Hàm băm một chiều (Hash Function)",
    "question": "Theo Mô hình Trách nhiệm Chung (Shared Responsibility Model) trong điện toán đám mây, với mô hình IaaS (Hạ tầng như một dịch vụ), khách hàng chịu trách nhiệm bảo mật những thành phần nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phần cứng máy chủ vật lý và hệ thống điện của trung tâm dữ liệu",
      "B. Hệ điều hành khách, các bản vá bảo mật, cấu hình mạng ảo, ứng dụng, phân quyền IAM và dữ liệu của khách hàng",
      "C. Khách hàng không chịu bất kỳ trách nhiệm nào",
      "D. Chỉ chịu trách nhiệm trả tiền hàng tháng"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Với IaaS (như AWS EC2), nhà cung cấp đám mây chỉ chịu trách nhiệm từ lớp ảo hóa vật lý trở xuống; khách hàng toàn quyền và chịu trách nhiệm cấu hình an toàn cho OS, ứng dụng và dữ liệu."
  },
  {
    "id": 1290,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo mật điện toán đám mây (Cloud Security)",
    "question": "Với mô hình dịch vụ SaaS (Phần mềm như một dịch vụ, ví dụ Google Workspace, Microsoft 365), trách nhiệm chính của khách hàng là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Sửa chữa máy chủ vật lý khi bị hỏng ổ cứng",
      "B. Quản lý danh tính người dùng, cấu hình quyền truy cập và bảo vệ dữ liệu được đưa lên dịch vụ",
      "C. Tự viết mã nguồn cho ứng dụng SaaS",
      "D. Cập nhật bản vá hệ điều hành máy chủ của nhà cung cấp"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trong SaaS, nhà cung cấp lo toàn bộ hạ tầng và phần mềm; khách hàng chỉ chịu trách nhiệm bảo vệ tài khoản người dùng, cấu hình truy cập và dữ liệu lưu trữ."
  },
  {
    "id": 1291,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo mật điện toán đám mây (Cloud Security)",
    "question": "Lỗi cấu hình sai trên đám mây (Cloud Misconfiguration) phổ biến và nguy hiểm nhất từng dẫn đến hàng loạt vụ rò rỉ dữ liệu quy mô lớn là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Đặt tên máy chủ quá dài",
      "B. Để các kho lưu trữ dữ liệu đám mây (như AWS S3 Buckets hoặc Azure Blobs) ở chế độ công khai (Publicly Accessible) cho bất kỳ ai trên Internet đều đọc được",
      "C. Sử dụng giao diện đám mây bằng tiếng Anh",
      "D. Chọn trung tâm dữ liệu ở quá xa trụ sở công ty"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cấu hình sai quyền truy cập bucket S3 công khai là nguyên nhân của hàng trăm vụ lộ dữ liệu nhạy cảm trên toàn cầu; hardening đám mây đòi hỏi phải chặn public access mặc định."
  },
  {
    "id": 1292,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo mật điện toán đám mây (Cloud Security)",
    "question": "Nguyên tắc \"Đặc quyền tối thiểu\" (Principle of Least Privilege) trong Quản lý Danh tính và Quyền truy cập (IAM) trên đám mây yêu cầu điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cấp quyền Root / Admin cho tất cả các lập trình viên để tiện làm việc",
      "B. Chỉ cấp cho mỗi người dùng, ứng dụng hoặc dịch vụ đúng những quyền hạn tối thiểu cần thiết để thực hiện công việc của họ trong một khoảng thời gian nhất định",
      "C. Không bao giờ cho phép nhân viên đổi mật khẩu",
      "D. Cấp quyền ngẫu nhiên mỗi tuần"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Least Privilege hạn chế rủi ro: nếu một tài khoản hoặc khóa API bị lộ, kẻ tấn công chỉ có quyền hạn tối thiểu trong phạm vi hẹp thay vì chiếm toàn bộ hạ tầng đám mây."
  },
  {
    "id": 1293,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Tại sao việc nhúng trực tiếp khóa bí mật API (Hardcoded API Keys) vào mã nguồn ứng dụng được lưu trên GitHub lại là hành vi cực kỳ nguy hiểm?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vì mã nguồn sẽ bị tăng dung lượng",
      "B. Kẻ tấn công liên tục quét các kho mã nguồn công khai; khóa API bị lộ sẽ cho phép chúng chiếm quyền điều khiển tài nguyên đám mây ngay lập tức và gây thiệt hại tài chính nặng nề",
      "C. Vì GitHub sẽ từ chối lưu file mã nguồn",
      "D. Vì trình biên dịch sẽ báo lỗi cú pháp"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Bot tự động của tin tặc quét GitHub từng giây để tìm API key bị lộ; lập trình viên phải dùng biến môi trường (Environment variables) hoặc dịch vụ Secret Manager/KMS."
  },
  {
    "id": 1294,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Bảo mật điện toán đám mây (Cloud Security)",
    "question": "Dịch vụ Quản lý Khóa (KMS - Key Management Service) trong môi trường đám mây có vai trò gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Quản lý chìa khóa cửa phòng làm việc",
      "B. Tạo, lưu trữ an toàn, kiểm soát truy cập và tự động xoay vòng (Rotate) các khóa mật mã dùng để mã hóa dữ liệu độc lập với ứng dụng",
      "C. Tự động đăng nhập vào các trang mạng xã hội",
      "D. Khóa màn hình máy tính khi nhân viên rời vị trí"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "KMS quản lý vòng đời của khóa mật mã tập trung, đảm bảo dữ liệu được mã hóa an toàn và khóa không bị lưu trữ dưới dạng văn bản rõ cùng với dữ liệu."
  },
  {
    "id": 1295,
    "chapter": "Chương 4: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật (Firewalls & Hardening)",
    "chapterId": 4,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Phương pháp nào sau đây giúp loại bỏ hoàn toàn dữ liệu nhạy cảm khỏi ổ cứng cơ học (HDD) trước khi đem thanh lý mà không làm hỏng ổ cứng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Nhấn tổ hợp phím Shift + Delete",
      "B. Sử dụng phần mềm xóa dữ liệu chuyên dụng ghi đè dữ liệu ngẫu nhiên nhiều lần (Data Wiping / Overwriting theo chuẩn DoD hoặc NIST SP 800-88)",
      "C. Ngâm ổ cứng vào nước ấm 10 phút",
      "D. Đổi tên ổ cứng thành \"O_Trong\""
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ghi đè nhiều lượt (Wiping) ghi đè các bit 0, 1 hoặc ngẫu nhiên lên toàn bộ bề mặt đĩa từ, đảm bảo các phần mềm khôi phục dữ liệu chuyên sâu không thể khôi phục lại dữ liệu cũ."
  },
  {
    "id": 1296,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Tăng cường bảo mật (Security Hardening)",
    "question": "Trong giám sát an ninh mạng, \"Network Baseline\" (Mốc tham chiếu hành vi bình thường) là gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bản vẽ kỹ thuật của hệ thống cáp mạng",
      "B. Tập hợp các số liệu đo lường hành vi hoạt động mạng điển hình trong điều kiện bình thường (lưu lượng, cổng, giao thức, khung thời gian), dùng làm căn cứ để phát hiện các hoạt động bất thường",
      "C. Giới hạn tốc độ tải file của nhân viên",
      "D. Danh sách các máy tính đắt tiền nhất trong công ty"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Không thể biết cái gì là \"bất thường\" nếu không biết cái gì là \"bình thường\". Baseline cung cấp mốc tham chiếu để các hệ thống IDS/SIEM kích hoạt cảnh báo khi có sai lệch."
  },
  {
    "id": 1297,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Khái niệm \"Temporal Pattern\" (Mẫu hình thời gian) trong phân tích lưu lượng mạng giúp chuyên viên phát hiện điều gì?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Thời tiết bên ngoài trung tâm dữ liệu",
      "B. Các hoạt động mạng xảy ra vào những khung thời gian bất thường (ví dụ: máy chủ truyền tải một lượng lớn dữ liệu ra ngoài Internet vào lúc 3 giờ sáng ngày Chủ nhật)",
      "C. Tuổi thọ của bóng đèn phòng máy chủ",
      "D. Thời gian nhân viên đi làm muộn"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Temporal pattern phân tích thời điểm xảy ra sự kiện; các lưu lượng truyền dữ liệu dung lượng lớn ngoài giờ hành chính là dấu hiệu chỉ điểm kinh điển của tấn công đánh cắp dữ liệu."
  },
  {
    "id": 1298,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giám sát lưu lượng & Wireshark/Tcpdump",
    "question": "Hoạt động \"C2 Beaconing\" (Command and Control Beaconing) của phần mềm độc hại có đặc điểm nhận dạng nào trong lưu lượng mạng?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phát ra tiếng bíp trên loa máy tính",
      "B. Gửi các gói tin kết nối ra một địa chỉ IP/domain bên ngoài Internet theo một chu kỳ thời gian đều đặn hoặc có quy luật lặp lại để xin chỉ thị từ máy chủ của tin tặc",
      "C. Tự động gửi email xin lỗi ban giám đốc",
      "D. Làm cho màn hình máy tính nhấp nháy liên tục"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mã độc sau khi xâm nhập sẽ gửi tín hiệu \"nhịp tim\" (beacon) định kỳ về máy chủ C2 để báo cáo tình trạng và nhận lệnh mới."
  },
  {
    "id": 1299,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giám sát lưu lượng & Wireshark/Tcpdump",
    "question": "Dấu hiệu nào sau đây là chỉ số rõ ràng của hành vi \"Data Exfiltration\" (Đánh cắp/Trích xuất dữ liệu trái phép)?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Lưu lượng tải về (Download) tăng nhẹ trong giờ làm việc",
      "B. Lưu lượng truyền đi ra ngoài (Outbound traffic) tăng đột biến bất thường, đặc biệt là các kết nối mã hóa tới các địa chỉ IP hoặc máy chủ đám mây lạ ngoài giờ làm việc",
      "C. Máy in văn phòng hết giấy in",
      "D. Màn hình máy tính hiển thị ảnh phong cảnh"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Kẻ tấn công sau khi thu thập tài liệu nội bộ sẽ nén, mã hóa và đẩy ra ngoài; sự tăng vọt đột ngột của lưu lượng ra (outbound spike) là dấu hiệu cảnh báo exfiltration."
  },
  {
    "id": 1300,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Vai trò & Nghề nghiệp An ninh mạng",
    "question": "Sự khác biệt cơ bản giữa Trung tâm Vận hành Mạng (NOC) và Trung tâm Điều hành An ninh (SOC) là gì?",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. NOC chỉ làm việc ban ngày, SOC chỉ làm việc ban đêm.",
      "B. NOC tập trung vào hiệu năng mạng, tính khả dụng và khắc phục sự cố đường truyền mạng; trong khi SOC tập trung vào việc giám sát các mối đe dọa an ninh, phát hiện xâm nhập và ứng phó sự cố an toàn thông tin.",
      "C. NOC là của chính phủ, SOC là của doanh nghiệp tư nhân.",
      "D. NOC sử dụng Linux, SOC sử dụng Windows."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giáo trình Course 6 phân biệt: NOC trả lời câu hỏi \"Mạng có đang chạy nhanh và ổn định không?\", còn SOC trả lời câu hỏi \"Mạng có đang bị tấn công hoặc xâm nhập không?\"."
  },
  {
    "id": 1301,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Khi triển khai cảm biến thu thập gói tin (Packet Capture Sensor), điểm khác nhau giữa thiết bị \"Network TAP\" và tính năng \"SPAN / Port Mirroring\" là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Network TAP là phần mềm miễn phí, SPAN là phần cứng đắt tiền.",
      "B. Network TAP là thiết bị phần cứng chèn trực tiếp vào đường truyền vật lý để sao chép 100% tín hiệu mà không làm ảnh hưởng đến hiệu năng switch; trong khi SPAN sử dụng tài nguyên CPU của Switch để nhân bản cổng, có thể bị rớt gói (drop packets) khi tải mạng quá cao.",
      "C. SPAN không bao giờ bị mất gói tin.",
      "D. Network TAP chỉ hoạt động với mạng không dây Wi-Fi."
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network TAP sao chép ở mức vật lý không gây tải cho switch; còn Port Mirroring (SPAN) phụ thuộc vào năng lực xử lý của switch, dễ bị bỏ sót gói tin khi switch bị quá tải."
  },
  {
    "id": 1302,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Giám sát lưu lượng & Wireshark/Tcpdump",
    "question": "Trong tiêu đề gói tin IPv4 (IPv4 Header), trường TTL (Time to Live) có tác dụng gì và giúp ích gì cho điều tra an ninh mạng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cho biết thời gian bảo hành của máy tính",
      "B. Ngăn chặn gói tin bị lặp vô tận trên mạng bằng cách giảm 1 đơn vị qua mỗi router; giá trị TTL ban đầu còn giúp nhà phân tích phỏng đoán hệ điều hành của nguồn phát (ví dụ Linux thường là 64, Windows thường là 128)",
      "C. Đo nhiệt độ của dây cáp mạng",
      "D. Đếm số lượng người đang xem trang web"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "TTL giảm dần qua mỗi bước nhảy (hop); giá trị TTL ban đầu giúp nhận diện hệ điều hành nguồn (OS Fingerprinting) và phát hiện các kỹ thuật mạo danh mạng."
  },
  {
    "id": 1303,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Hàm băm một chiều (Hash Function)",
    "question": "Giao diện đồ họa của phần mềm Wireshark được chia thành 3 vùng hiển thị chính nào?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Vùng màn hình chính, Vùng bàn phím, Vùng chuột",
      "B. Packet List (Danh sách gói tin), Packet Details (Chi tiết các tầng tiêu đề), Packet Bytes (Dữ liệu thô dạng Hex và ASCII)",
      "C. Vùng âm thanh, Vùng hình ảnh, Vùng văn bản",
      "D. Tầng 1, Tầng 2, Tầng 3 của tòa nhà"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Ba ngăn chuẩn của Wireshark: Ngăn trên là Packet List, ngăn giữa là Packet Details (phân rã cây giao thức), ngăn dưới cùng là Packet Bytes (mã hex/ascii thô)."
  },
  {
    "id": 1304,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Hàm băm một chiều (Hash Function)",
    "question": "Để lọc tất cả các gói tin có liên quan đến địa chỉ IP `192.168.1.100` trong Wireshark, cú pháp Display Filter nào sau đây là ĐÚNG?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. `filter: 192.168.1.100`",
      "B. `ip.addr == 192.168.1.100`",
      "C. `show ip 192.168.1.100`",
      "D. `ip = 192.168.1.100`"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cú pháp Wireshark display filter chuẩn: `ip.addr == 192.168.1.100` (khớp cả khi IP là source hoặc destination)."
  },
  {
    "id": 1305,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Hàm băm một chiều (Hash Function)",
    "question": "Tính năng \"Follow TCP Stream\" trong Wireshark giúp ích gì cho chuyên viên phân tích an ninh mạng?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Tự động vẽ sơ đồ vị trí địa lý của kẻ tấn công",
      "B. Tập hợp và tái hiện toàn bộ nội dung dữ liệu của cuộc hội thoại trao đổi qua lại giữa client và server theo đúng thứ tự luồng dưới dạng văn bản liên tục",
      "C. Tăng tốc độ đường truyền mạng lên gấp đôi",
      "D. Tự động xóa gói tin độc hại khỏi máy chủ"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Follow TCP Stream loại bỏ sự phức tạp của việc đọc từng gói tin rời rạc, ghép nối toàn bộ payload thành một trang văn bản liền mạch (rất hữu ích khi đọc nội dung HTTP, SMTP, FTP)."
  },
  {
    "id": 1306,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Phân tích gói tin (Wireshark & Tcpdump)",
    "question": "Khi sử dụng công cụ dòng lệnh `tcpdump`, tùy chọn `-n` và `-nn` có tác dụng gì quan trọng?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Bật chế độ hiển thị ban đêm",
      "B. `-n` ngăn tcpdump phân giải địa chỉ IP thành tên máy chủ (Hostname), `-nn` ngăn phân giải cả địa chỉ IP và số cổng (Port), giúp hiển thị nhanh và tránh tạo ra các lưu lượng DNS truy vấn phụ ngoài ý muốn",
      "C. Tự động xóa các gói tin bị lỗi",
      "D. Khởi động lại máy tính sau khi bắt gói"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Mặc định tcpdump cố gắng phân giải tên miền (DNS reverse lookup); dùng `-nn` ngăn chặn điều này, giữ nguyên định dạng số (IP và Port) giúp phân tích chính xác và không làm ô nhiễm file bắt gói."
  },
  {
    "id": 1307,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Chữ ký số & Hạ tầng PKI",
    "question": "Trong lệnh `tcpdump`, tùy chọn nào được dùng để lưu các gói tin bắt được vào một tệp tin PCAP và tùy chọn nào dùng để đọc lại tệp đó?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. `-save` để lưu và `-open` để đọc",
      "B. `-w <tệp.pcap>` để ghi (write) và `-r <tệp.pcap>` để đọc (read)",
      "C. `-in` để ghi và `-out` để đọc",
      "D. `-copy` để ghi và `-paste` để đọc"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "`-w filename.pcap` (write raw packets) để ghi file; `-r filename.pcap` (read packets from file) để đọc lại dữ liệu đã lưu."
  },
  {
    "id": 1308,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Phân tích gói tin (Wireshark & Tcpdump)",
    "question": "Cú pháp bộ lọc BPF (Berkeley Packet Filter) nào trong `tcpdump` dùng để chỉ bắt các gói tin web HTTP (Port 80) xuất phát từ máy chủ có IP `10.0.0.5`?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. `src host 10.0.0.5 and port 80`",
      "B. `ip == 10.0.0.5 && http`",
      "C. `find 10.0.0.5:80`",
      "D. `filter src 10.0.0.5 port 80`"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cú pháp BPF chuẩn của tcpdump: `src host 10.0.0.5 and port 80` (lưu ý: Wireshark display filter dùng `ip.src == ...`, còn tcpdump dùng cú pháp BPF)."
  },
  {
    "id": 1309,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Phân tích gói tin (Wireshark & Tcpdump)",
    "question": "Khi phân tích kết quả xuất ra của lệnh `tcpdump`, ký hiệu cờ `[S]` và cờ `[.]` trong một dòng log TCP đại diện cho điều gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. `[S]` là Stop, `[.]` là Continue",
      "B. `[S]` là cờ SYN (yêu cầu khởi tạo kết nối), `[.]` là cờ ACK (xác nhận gói tin)",
      "C. `[S]` là Secure, `[.]` là Insecure",
      "D. `[S]` là Spam, `[.]` là Clean"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Trong tcpdump: `[S]` = SYN, `[.]` = ACK, `[S.]` = SYN-ACK, `[F]` = FIN, `[R]` = RST, `[P]` = PUSH."
  },
  {
    "id": 1310,
    "chapter": "Chương 5: Giao Thức Mạng & Phân Tích Lưu Lượng Wireshark (Protocols & Traffic)",
    "chapterId": 5,
    "topic": "Phân tích gói tin (Wireshark & Tcpdump)",
    "question": "Khi chạy `tcpdump` trên máy tính trạm, chuyên viên quan sát thấy nhiều gói tin có thông báo lỗi `cksum incorrect` (Checksum không chính xác). Nguyên nhân phổ biến và đúng đắn nhất là gì?",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. Cáp mạng bị đứt ngầm làm hỏng gói tin.",
      "B. Do tính năng \"TCP Checksum Offloading\" của card mạng phần cứng (NIC) tự động tính toán checksum sau khi gói tin rời khỏi nhân hệ điều hành, khiến tcpdump bắt gói tin trước khi checksum được card mạng điền vào",
      "C. Toàn bộ máy tính đã bị nhiễm mã độc tống tiền",
      "D. Máy chủ mục tiêu đã bị sập nguồn"
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Giáo trình Course 6 giải thích rõ: Phần cứng NIC hiện đại đảm nhận việc tính checksum để giảm tải CPU (Hardware Offloading); khi tcpdump bắt gói tin đi ra tại kernel thì checksum chưa được ghi nên báo \"incorrect\", đây là hiện tượng bình thường chứ không phải lỗi mạng."
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
],
    toan9: [
  {
    "id": 4001,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Rút gọn biểu thức số",
    "question": "Rút gọn biểu thức A = √(12) - √(27) + (1/2)√(48) ta được kết quả là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. √3",
      "B. 3√3",
      "C. -√3",
      "D. 2√3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ta có:\n√(12) = √(4 · 3) = 2√3\n√(27) = √(9 · 3) = 3√3\n(1/2)√(48) = (1/2) · √(16 · 3) = (1/2) · 4√3 = 2√3.\nDo đó: A = 2√3 - 3√3 + 2√3 = (2 - 3 + 2)√3 = √3."
  },
  {
    "id": 4002,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Trục căn thức ở mẫu",
    "question": "Rút gọn biểu thức C = 2/(√3 - 1) - 2/(√3 + 1) ta được kết quả là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 2",
      "B. 2√3",
      "C. 4",
      "D. -2"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quy đồng mẫu thức với mẫu chung là (√3 - 1)(√3 + 1) = 3 - 1 = 2:\nC = [2(√3 + 1) - 2(√3 - 1)] / [(√3 - 1)(√3 + 1)]\n  = (2√3 + 2 - 2√3 + 2) / 2 = 4 / 2 = 2."
  },
  {
    "id": 4003,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Hằng đẳng thức căn thức",
    "question": "Rút gọn biểu thức E = √(7 + 4√3) - √(7 - 4√3) ta được kết quả là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 2√3",
      "B. 4",
      "C. 0",
      "D. -2√3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ta có: 7 ± 4√3 = 4 ± 2 · 2 · √3 + 3 = (2 ± √3)².\nDo đó: E = √((2 + √3)²) - √((2 - √3)²)\n  = |2 + √3| - |2 - √3|.\nVì 2 > √3 nên 2 - √3 > 0, do đó |2 - √3| = 2 - √3.\nE = (2 + √3) - (2 - √3) = 2√3."
  },
  {
    "id": 4004,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Trục căn thức ở mẫu",
    "question": "Trục căn thức ở mẫu của phân thức D = (2 - √3)/(2 + √3) ta được:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 7 - 4√3",
      "B. 7 + 4√3",
      "C. 1 - √3",
      "D. 4 - 2√3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhân cả tử và mẫu với lượng liên hợp của mẫu là (2 - √3):\nD = (2 - √3)² / [(2 + √3)(2 - √3)]\n  = (4 - 4√3 + 3) / (4 - 3) = 7 - 4√3."
  },
  {
    "id": 4005,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Rút gọn biểu thức chứa biến",
    "question": "Rút gọn biểu thức A = (√x + 1)/(√x - 2) + 2√x/(√x + 2) + (2 + 5√x)/(4 - x) với x ≥ 0, x ≠ 4:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. 3√x / (√x + 2)",
      "B. 3 / (√x + 2)",
      "C. √x / (√x + 2)",
      "D. 3√x / (√x - 2)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đổi dấu phân thức thứ ba: (2 + 5√x)/(4 - x) = -(2 + 5√x)/(x - 4) = -(2 + 5√x)/[(√x - 2)(√x + 2)].\nQuy đồng với mẫu chung (√x - 2)(√x + 2):\nTử = (√x + 1)(√x + 2) + 2√x(√x - 2) - (2 + 5√x)\n   = (x + 3√x + 2) + (2x - 4√x) - 2 - 5√x\n   = 3x - 6√x = 3√x(√x - 2).\nRút gọn với mẫu: A = 3√x(√x - 2) / [(√x - 2)(√x + 2)] = 3√x / (√x + 2)."
  },
  {
    "id": 4006,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Rút gọn biểu thức tổng hợp",
    "question": "Cho biểu thức P = [1/(√x + 1) - (2√x - 2)/(x√x - √x + x - 1)] : [1/(√x - 1) - 2/(x - 1)] với x ≥ 0, x ≠ 1. Biểu thức rút gọn của P là:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. (√x - 1)/(√x + 1)",
      "B. (√x + 1)/(√x - 1)",
      "C. (√x - 2)/(√x + 1)",
      "D. 1/(√x + 1)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phân tích mẫu: x√x - √x + x - 1 = √x(x - 1) + (x - 1) = (x - 1)(√x + 1) = (√x - 1)(√x + 1)².\nNgoặc thứ nhất:\n1/(√x + 1) - 2(√x - 1)/[(√x - 1)(√x + 1)²] = 1/(√x + 1) - 2/(√x + 1)² = (√x + 1 - 2)/(√x + 1)² = (√x - 1)/(√x + 1)².\nNgoặc thứ hai:\n1/(√x - 1) - 2/[(√x - 1)(√x + 1)] = (√x + 1 - 2)/[(√x - 1)(√x + 1)] = (√x - 1)/[(√x - 1)(√x + 1)] = 1/(√x + 1).\nThực hiện phép chia: P = [(√x - 1)/(√x + 1)²] : [1/(√x + 1)] = (√x - 1)/(√x + 1)."
  },
  {
    "id": 4007,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Tính giá trị biểu thức",
    "question": "Với P = (√x - 1)/(√x + 1), tính giá trị của P khi x = 4 - 2√3:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 1 - (2√3)/3",
      "B. (√3 - 1)/2",
      "C. √3 - 1",
      "D. 2 - √3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ta có x = 4 - 2√3 = (√3 - 1)² > 0.\nDo đó √x = √((√3 - 1)²) = |√3 - 1| = √3 - 1 (vì √3 > 1).\nThay vào biểu thức P:\nP = [(√3 - 1) - 1] / [(√3 - 1) + 1] = (√3 - 2)/√3 = 1 - 2/√3 = 1 - (2√3)/3."
  },
  {
    "id": 4008,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Bất phương trình chứa biểu thức căn",
    "question": "Cho P = (√x - 1)/(√x + 1) với x ≥ 0, x ≠ 1. Tìm tất cả các giá trị của x để P < 1/2:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. 0 ≤ x < 9 và x ≠ 1",
      "B. x < 9",
      "C. 1 < x < 9",
      "D. 0 ≤ x < 3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Xét bất phương trình P < 1/2:\n(√x - 1)/(√x + 1) - 1/2 < 0\n⇔ [2(√x - 1) - (√x + 1)] / [2(√x + 1)] < 0\n⇔ (√x - 3) / [2(√x + 1)] < 0.\nVì x ≥ 0 nên 2(√x + 1) > 0 với mọi x. Do đó:\n√x - 3 < 0 ⇔ √x < 3 ⇔ 0 ≤ x < 9.\nKết hợp điều kiện xác định x ≥ 0, x ≠ 1 ta được: 0 ≤ x < 9 và x ≠ 1."
  },
  {
    "id": 4009,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Cực trị biểu thức",
    "question": "Tìm giá trị nhỏ nhất (GTNN) của biểu thức P = (√x - 1)/(√x + 1) với x ≥ 0, x ≠ 1:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. -1 (đạt được tại x = 0)",
      "B. 0 (đạt được tại x = 1)",
      "C. -1/2 (đạt được tại x = 4)",
      "D. Không tồn tại GTNN"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Biến đổi: P = (√x + 1 - 2)/(√x + 1) = 1 - 2/(√x + 1).\nVì x ≥ 0 nên √x ≥ 0 ⇒ √x + 1 ≥ 1.\nDo đó: 2/(√x + 1) ≤ 2/1 = 2.\nSuy ra: P = 1 - 2/(√x + 1) ≥ 1 - 2 = -1.\nDấu \"=\" xảy ra khi √x = 0 ⇔ x = 0 (thỏa mãn ĐKXĐ).\nVậy GTNN của P là -1 khi x = 0."
  },
  {
    "id": 4010,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Bài toán giá trị nguyên",
    "question": "Tìm các số nguyên x để biểu thức P = (√x - 1)/(√x + 1) nhận giá trị nguyên:",
    "level": "Vận dụng cao",
    "score": 1,
    "type": "single",
    "options": [
      "A. x = 0",
      "B. x ∈ {0; 1}",
      "C. x ∈ {0; 4}",
      "D. x = 4"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ta có: P = 1 - 2/(√x + 1).\nĐể P nhận giá trị nguyên thì 2/(√x + 1) phải là số nguyên, tức là (√x + 1) là ước của 2.\nVì x ≥ 0 nên √x + 1 ≥ 1, do đó các ước nguyên dương của 2 là 1 và 2:\n- TH1: √x + 1 = 1 ⇔ √x = 0 ⇔ x = 0 (nhận, thỏa mãn x nguyên và x ≠ 1).\n- TH2: √x + 1 = 2 ⇔ √x = 1 ⇔ x = 1 (loại vì không thỏa mãn ĐKXĐ x ≠ 1).\nVậy chỉ có duy nhất x = 0."
  },
  {
    "id": 4011,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Giải phương trình bậc hai",
    "question": "Tập nghiệm của phương trình bậc hai 2x² + 3x - 5 = 0 là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. S = {1; -5/2}",
      "B. S = {-1; 5/2}",
      "C. S = {1; 5}",
      "D. S = {2; -5/2}"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phương trình có các hệ số: a = 2, b = 3, c = -5.\nNhận thấy: a + b + c = 2 + 3 + (-5) = 0.\nTheo tính chất nhẩm nghiệm phương trình bậc hai:\nx₁ = 1\nx₂ = c/a = -5/2.\nVậy tập nghiệm của phương trình là S = {1; -5/2}."
  },
  {
    "id": 4012,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Số nghiệm phương trình bậc hai",
    "question": "Số nghiệm của phương trình bậc hai x² - 4x + 5 = 0 là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. 0 (Vô nghiệm)",
      "B. 1 (Nghiệm kép)",
      "C. 2 (Hai nghiệm phân biệt)",
      "D. Vô số nghiệm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Biến đổi: x² - 4x + 5 = (x² - 4x + 4) + 1 = (x - 2)² + 1.\nVì (x - 2)² ≥ 0 với mọi x nên (x - 2)² + 1 ≥ 1 > 0 với mọi x.\nHoặc tính biệt thức: Δ' = (-2)² - 1 · 5 = 4 - 5 = -1 < 0.\nVậy phương trình đã cho vô nghiệm (0 nghiệm)."
  },
  {
    "id": 4013,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình trùng phương",
    "question": "Tập nghiệm của phương trình trùng phương x⁴ - 13x² + 36 = 0 là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. S = {-3; -2; 2; 3}",
      "B. S = {2; 3}",
      "C. S = {-9; -4; 4; 9}",
      "D. S = {±4; ±9}"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Đặt t = x² (điều kiện t ≥ 0).\nPhương trình trở thành: t² - 13t + 36 = 0.\nΔ = (-13)² - 4 · 1 · 36 = 169 - 144 = 25 > 0 ⇒ √Δ = 5.\nt₁ = (13 + 5)/2 = 9 (nhận)\nt₂ = (13 - 5)/2 = 4 (nhận).\n- Với t = 9 ⇒ x² = 9 ⇔ x = ±3.\n- Với t = 4 ⇒ x² = 4 ⇔ x = ±2.\nVậy tập nghiệm S = {-3; -2; 2; 3}."
  },
  {
    "id": 4014,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình chứa ẩn ở mẫu",
    "question": "Nghiệm của phương trình x/(x - 2) + (x + 2)/(x - 1) = 2 là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. x = 8/5",
      "B. x = 5/8",
      "C. x = 2",
      "D. Phương trình vô nghiệm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện xác định: x ≠ 2 và x ≠ 1.\nQuy đồng mẫu thức hai vế:\n[x(x - 1) + (x + 2)(x - 2)] / [(x - 2)(x - 1)] = [2(x - 2)(x - 1)] / [(x - 2)(x - 1)]\nKhử mẫu ta được:\nx² - x + x² - 4 = 2(x² - 3x + 2)\n⇔ 2x² - x - 4 = 2x² - 6x + 4\n⇔ -x + 6x = 4 + 4\n⇔ 5x = 8 ⇔ x = 8/5 (thỏa mãn ĐKXĐ)."
  },
  {
    "id": 4015,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình vô tỷ",
    "question": "Nghiệm của phương trình vô tỷ √(2x - 3) = 5 là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. x = 14",
      "B. x = 11",
      "C. x = 16",
      "D. x = 7"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện xác định: 2x - 3 ≥ 0 ⇔ x ≥ 3/2.\nBình phương hai vế:\n2x - 3 = 5² = 25\n⇔ 2x = 28 ⇔ x = 14.\nĐối chiếu điều kiện x = 14 ≥ 3/2 (thỏa mãn). Vậy nghiệm là x = 14."
  },
  {
    "id": 4016,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình vô tỷ",
    "question": "Tập nghiệm của phương trình √(x² - 4x + 4) = 3 là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. S = {-1; 5}",
      "B. S = {5}",
      "C. S = {-5; 1}",
      "D. S = {1; 5}"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ta có x² - 4x + 4 = (x - 2)².\nPhương trình tương đương: √((x - 2)²) = 3 ⇔ |x - 2| = 3.\n- Trường hợp 1: x - 2 = 3 ⇔ x = 5.\n- Trường hợp 2: x - 2 = -3 ⇔ x = -1.\nVậy phương trình có hai nghiệm: S = {-1; 5}."
  },
  {
    "id": 4017,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình vô tỷ",
    "question": "Giải phương trình √(x + 3) + √(4x + 12) - √(9x + 27) = 2:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. Phương trình vô nghiệm",
      "B. x = 1",
      "C. x = -3",
      "D. x = 2"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện: x + 3 ≥ 0 ⇔ x ≥ -3.\nTa biến đổi:\n√(4x + 12) = √(4(x + 3)) = 2√(x + 3)\n√(9x + 27) = √(9(x + 3)) = 3√(x + 3).\nPhương trình trở thành:\n√(x + 3) + 2√(x + 3) - 3√(x + 3) = 2\n⇔ (1 + 2 - 3)√(x + 3) = 2\n⇔ 0 · √(x + 3) = 2 (vô lý).\nVậy phương trình vô nghiệm."
  },
  {
    "id": 4018,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Phương trình chứa tham số",
    "question": "Cho phương trình x² - 2(m + 1)x + m² - 3 = 0. Tìm tất cả các giá trị của m để phương trình có hai nghiệm phân biệt:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. m > -2",
      "B. m ≥ -2",
      "C. m < -2",
      "D. m ≠ -2"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tính biệt thức thu gọn Δ':\nΔ' = [-(m + 1)]² - 1 · (m² - 3)\n   = m² + 2m + 1 - m² + 3 = 2m + 4.\nĐể phương trình có hai nghiệm phân biệt thì:\nΔ' > 0 ⇔ 2m + 4 > 0 ⇔ 2m > -4 ⇔ m > -2."
  },
  {
    "id": 4019,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Định lý Vi-et",
    "question": "Cho phương trình x² - 2(m + 1)x + m² - 3 = 0. Tìm m để phương trình có hai nghiệm x₁, x₂ thỏa mãn x₁ + x₂ = 10:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. m = 4",
      "B. m = 5",
      "C. m = 3",
      "D. m = -4"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện để phương trình có nghiệm là Δ' = 2m + 4 ≥ 0 ⇔ m ≥ -2.\nTheo định lý Vi-et: x₁ + x₂ = -b/a = 2(m + 1).\nTheo đề bài: x₁ + x₂ = 10 ⇔ 2(m + 1) = 10 ⇔ m + 1 = 5 ⇔ m = 4.\nKiểm tra điều kiện m = 4 ≥ -2 (thỏa mãn). Vậy m = 4."
  },
  {
    "id": 4020,
    "chapter": "Chương 4: Hàm số y = ax² & Phương trình bậc hai",
    "chapterId": 4,
    "topic": "Định lý Vi-et",
    "question": "Cho phương trình x² - 2(m - 1)x + m² - 1 = 0. Tìm tất cả giá trị của m để phương trình có hai nghiệm trái dấu:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. -1 < m < 1",
      "B. m > 1",
      "C. m < -1",
      "D. m ≤ 1"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Phương trình bậc hai ax² + bx + c = 0 có hai nghiệm trái dấu khi và chỉ khi:\na · c < 0 ⇔ 1 · (m² - 1) < 0 ⇔ m² < 1 ⇔ -1 < m < 1.\n(Khi ac < 0 thì biệt thức Δ luôn dương nên phương trình luôn có 2 nghiệm phân biệt)."
  },
  {
    "id": 4021,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Giải hệ phương trình bậc nhất",
    "question": "Nghiệm (x; y) của hệ phương trình { 4x + 3y = 6 ; 2x + y = 4 } là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. (3; -2)",
      "B. (-2; 3)",
      "C. (1; 2)",
      "D. (2; 0)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Nhân phương trình thứ hai với 2:\n{ 4x + 3y = 6\n{ 4x + 2y = 8\nLấy phương trình trên trừ phương trình dưới:\n(4x - 4x) + (3y - 2y) = 6 - 8 ⇒ y = -2.\nThay y = -2 vào 2x + y = 4:\n2x + (-2) = 4 ⇔ 2x = 6 ⇔ x = 3.\nVậy hệ có nghiệm duy nhất (x; y) = (3; -2)."
  },
  {
    "id": 4022,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Số nghiệm hệ phương trình",
    "question": "Cho hệ phương trình { x - 2y = 3 ; -2x + 4y = -6 }. Khẳng định nào sau đây là đúng?",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. Hệ phương trình có vô số nghiệm",
      "B. Hệ phương trình vô nghiệm",
      "C. Hệ có nghiệm duy nhất (3; 0)",
      "D. Hệ có đúng 2 nghiệm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Xét tỉ số các hệ số:\na₁/a₂ = 1/(-2) = -1/2\nb₁/b₂ = (-2)/4 = -1/2\nc₁/c₂ = 3/(-6) = -1/2.\nVì a₁/a₂ = b₁/b₂ = c₁/c₂ nên hai đường thẳng biểu diễn hai phương trình trùng nhau.\nVậy hệ phương trình có vô số nghiệm."
  },
  {
    "id": 4023,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Hệ đặt ẩn phụ",
    "question": "Giải hệ phương trình { 1/x + 1/y = 1/4 ; 2/x - 3/y = -1/3 }, nghiệm (x; y) là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. (12; 6)",
      "B. (6; 12)",
      "C. (4; 3)",
      "D. (8; 4)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện: x ≠ 0, y ≠ 0. Đặt u = 1/x, v = 1/y.\nHệ trở thành: { u + v = 1/4 ; 2u - 3v = -1/3 }.\nNhân PT đầu với 3: 3u + 3v = 3/4.\nCộng với PT thứ hai: 5u = 3/4 - 1/3 = 5/12 ⇒ u = 1/12.\nThay vào u + v = 1/4: v = 1/4 - 1/12 = 2/12 = 1/6.\nSuy ra: 1/x = 1/12 ⇒ x = 12; 1/y = 1/6 ⇒ y = 6.\nVậy hệ có nghiệm (x; y) = (12; 6)."
  },
  {
    "id": 4024,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Hệ phương trình chứa căn thức",
    "question": "Giải hệ phương trình { √(x - 1) + 2y = 5 ; 2√(x - 1) - y = 0 } (với x ≥ 1):",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. (2; 2)",
      "B. (1; 0)",
      "C. (5; 2)",
      "D. (3; 1)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Từ phương trình thứ hai: y = 2√(x - 1).\nThế vào phương trình thứ nhất:\n√(x - 1) + 2 · [2√(x - 1)] = 5\n⇔ 5√(x - 1) = 5 ⇔ √(x - 1) = 1 ⇔ x - 1 = 1 ⇔ x = 2.\nKhi x = 2 ⇒ y = 2 · 1 = 2.\nKiểm tra x = 2 ≥ 1 (thỏa mãn). Vậy nghiệm là (x; y) = (2; 2)."
  },
  {
    "id": 4025,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Hệ chứa tham số",
    "question": "Cho hệ phương trình { mx + y = 3 ; 4x + my = 6 }. Tìm điều kiện của m để hệ có nghiệm duy nhất:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. m ≠ 2 và m ≠ -2",
      "B. m = 2",
      "C. m = -2",
      "D. m ≠ 4"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Định thức D của hệ phương trình:\nD = m · m - 4 · 1 = m² - 4.\nHệ phương trình bậc nhất hai ẩn có nghiệm duy nhất khi và chỉ khi:\nD ≠ 0 ⇔ m² - 4 ≠ 0 ⇔ m² ≠ 4 ⇔ m ≠ 2 và m ≠ -2."
  },
  {
    "id": 4026,
    "chapter": "Chương 3: Hệ hai phương trình bậc nhất hai ẩn",
    "chapterId": 3,
    "topic": "Giao điểm hai đường thẳng",
    "question": "Tọa độ giao điểm của hai đường thẳng (d₁): 2x - 3y = 1 và (d₂): x + 2y = 4 là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. (2; 1)",
      "B. (1; 2)",
      "C. (3; 0)",
      "D. (-1; -1)"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tọa độ giao điểm là nghiệm của hệ:\n{ 2x - 3y = 1\n{ x + 2y = 4\nTừ PT(2): x = 4 - 2y. Thế vào PT(1):\n2(4 - 2y) - 3y = 1 ⇔ 8 - 4y - 3y = 1 ⇔ -7y = -7 ⇔ y = 1.\nSuy ra: x = 4 - 2(1) = 2.\nVậy tọa độ giao điểm là (2; 1)."
  },
  {
    "id": 4027,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình bậc nhất",
    "question": "Tập nghiệm của bất phương trình bậc nhất một ẩn -3x + 12 ≤ 0 là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. x ≥ 4",
      "B. x ≤ 4",
      "C. x > 4",
      "D. x ≤ -4"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Chuyển vế hạng tử tự do:\n-3x ≤ -12.\nChia cả hai vế cho -3 (là số âm, quy tắc đổi chiều bất phương trình):\nx ≥ (-12) / (-3) ⇔ x ≥ 4.\nVậy tập nghiệm là x ≥ 4."
  },
  {
    "id": 4028,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình quy đồng",
    "question": "Giải bất phương trình (x - 3)/2 ≥ (2x + 1)/3, tập nghiệm là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. x ≤ -11",
      "B. x ≥ -11",
      "C. x ≤ 11",
      "D. x ≥ 7"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Quy đồng mẫu số hai vế với mẫu số chung dương là 6:\n3(x - 3) ≥ 2(2x + 1)\n⇔ 3x - 9 ≥ 4x + 2\n⇔ 3x - 4x ≥ 2 + 9\n⇔ -x ≥ 11\n⇔ x ≤ -11 (đổi chiều khi nhân hai vế với -1).\nVậy tập nghiệm là x ≤ -11."
  },
  {
    "id": 4029,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Hệ bất phương trình",
    "question": "Tập nghiệm của hệ bất phương trình { 2x - 3 > 0 ; 5x + 1 ≤ 16 } là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 3/2 < x ≤ 3",
      "B. x ≤ 3",
      "C. x > 3/2",
      "D. 2 ≤ x ≤ 3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Giải từng bất phương trình trong hệ:\n- BPT(1): 2x - 3 > 0 ⇔ 2x > 3 ⇔ x > 3/2.\n- BPT(2): 5x + 1 ≤ 16 ⇔ 5x ≤ 15 ⇔ x ≤ 3.\nKết hợp nghiệm: 3/2 < x ≤ 3."
  },
  {
    "id": 4030,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình chứa tham số",
    "question": "Tìm tất cả các giá trị của tham số m để bất phương trình (m - 2)x > 3 vô nghiệm:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. m = 2",
      "B. m > 2",
      "C. m < 2",
      "D. m ≠ 2"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bất phương trình có dạng a · x > b với a = m - 2, b = 3.\nĐể bất phương trình ax > b vô nghiệm khi b > 0 thì hệ số a phải bằng 0:\na = 0 ⇔ m - 2 = 0 ⇔ m = 2.\n(Khi m = 2, BPT trở thành 0x > 3, luôn sai với mọi x ∈ ℝ)."
  },
  {
    "id": 4031,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình tích",
    "question": "Tập nghiệm của bất phương trình tích (x - 2)(x + 3) > 0 là:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. x > 2 hoặc x < -3",
      "B. -3 < x < 2",
      "C. x ≥ 2",
      "D. x < -3"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Tích hai thừa số dương khi hai thừa số cùng dấu:\n- TH1 (Cùng dương): { x - 2 > 0 ; x + 3 > 0 } ⇔ { x > 2 ; x > -3 } ⇔ x > 2.\n- TH2 (Cùng âm): { x - 2 < 0 ; x + 3 < 0 } ⇔ { x < 2 ; x < -3 } ⇔ x < -3.\nVậy nghiệm của bất phương trình là x > 2 hoặc x < -3."
  },
  {
    "id": 4032,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình thương",
    "question": "Tập nghiệm của bất phương trình (2x - 1)/(3 - x) ≤ 0 là:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. x ≤ 1/2 hoặc x > 3",
      "B. 1/2 ≤ x < 3",
      "C. x < 3",
      "D. x ≥ 1/2"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện mẫu: 3 - x ≠ 0 ⇔ x ≠ 3.\nPhân thức nhỏ hơn hoặc bằng 0 khi tử và mẫu trái dấu:\n- TH1: { 2x - 1 ≥ 0 ; 3 - x < 0 } ⇔ { x ≥ 1/2 ; x > 3 } ⇔ x > 3.\n- TH2: { 2x - 1 ≤ 0 ; 3 - x > 0 } ⇔ { x ≤ 1/2 ; x < 3 } ⇔ x ≤ 1/2.\nVậy tập nghiệm là x ≤ 1/2 hoặc x > 3."
  },
  {
    "id": 4033,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình chứa giá trị tuyệt đối",
    "question": "Giải bất phương trình chứa giá trị tuyệt đối |2x - 3| < 5:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. -1 < x < 4",
      "B. x < 4",
      "C. x > -1",
      "D. x < -1 hoặc x > 4"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Áp dụng quy tắc: |A| < B (với B > 0) ⇔ -B < A < B.\nTa có: -5 < 2x - 3 < 5\nCộng 3 vào cả ba vế:\n-5 + 3 < 2x < 5 + 3 ⇔ -2 < 2x < 8\nChia cho 2:\n-1 < x < 4.\nVậy tập nghiệm là -1 < x < 4."
  },
  {
    "id": 4034,
    "chapter": "Chương 1: Căn bậc hai & Căn bậc ba",
    "chapterId": 1,
    "topic": "Bất phương trình chứa căn thức",
    "question": "Giải bất phương trình chứa căn thức √(x - 2) < 3:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 2 ≤ x < 11",
      "B. x < 11",
      "C. x ≥ 2",
      "D. 2 < x < 11"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Điều kiện xác định: x - 2 ≥ 0 ⇔ x ≥ 2.\nVì hai vế đều không âm, bình phương hai vế:\nx - 2 < 3² = 9 ⇔ x < 11.\nKết hợp với điều kiện xác định: 2 ≤ x < 11."
  },
  {
    "id": 4035,
    "chapter": "Chương 2: Hàm số bậc nhất & Bất phương trình",
    "chapterId": 2,
    "topic": "Bất phương trình chứa tham số",
    "question": "Tìm tham số m để bất phương trình (m + 1)x ≤ m² - 1 nghiệm đúng với mọi x ∈ ℝ:",
    "level": "Vận dụng",
    "score": 1,
    "type": "single",
    "options": [
      "A. m = -1",
      "B. m = 1",
      "C. m ≠ -1",
      "D. Không có giá trị m nào thỏa mãn"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bất phương trình có dạng a · x ≤ b với a = m + 1 và b = m² - 1.\nĐể bất phương trình ax ≤ b nghiệm đúng với mọi x ∈ ℝ thì:\n{ a = 0\n{ b ≥ 0\n⇔ { m + 1 = 0\n   { m² - 1 ≥ 0\nTừ m + 1 = 0 ⇒ m = -1.\nThay m = -1 vào m² - 1: (-1)² - 1 = 0 ≥ 0 (thỏa mãn).\nVậy m = -1."
  },
  {
    "id": 4036,
    "chapter": "Chương 5: Hệ thức lượng trong tam giác vuông",
    "chapterId": 5,
    "topic": "Hệ thức lượng tam giác vuông",
    "question": "Cho tam giác ABC vuông tại A, đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài đường cao AH bằng:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. 6 cm",
      "B. 5 cm",
      "C. 36 cm",
      "D. 6.5 cm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Áp dụng hệ thức lượng trong tam giác vuông: Bình phương đường cao ứng với cạnh huyền bằng tích hai hình chiếu của hai cạnh góc vuông trên cạnh huyền:\nAH² = BH · CH\nAH² = 4 · 9 = 36\n⇒ AH = √36 = 6 (cm)."
  },
  {
    "id": 4037,
    "chapter": "Chương 5: Hệ thức lượng trong tam giác vuông",
    "chapterId": 5,
    "topic": "Tỉ số lượng giác góc nhọn",
    "question": "Cho tam giác ABC vuông tại A có cạnh AB = 6 cm và cạnh huyền BC = 10 cm. Giá trị của sin B bằng:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 0.8",
      "B. 0.6",
      "C. 0.75",
      "D. 1.33"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Áp dụng định lý Pytago trong tam giác vuông ABC:\nAC² = BC² - AB² = 10² - 6² = 100 - 36 = 64\n⇒ AC = √64 = 8 (cm).\nTỉ số lượng giác sin của góc B trong tam giác vuông là tỉ số giữa cạnh đối và cạnh huyền:\nsin B = AC / BC = 8 / 10 = 0.8."
  },
  {
    "id": 4038,
    "chapter": "Chương 6: Đường tròn & Góc với đường tròn",
    "chapterId": 6,
    "topic": "Đường kính và dây của đường tròn",
    "question": "Cho đường tròn (O; 5 cm) và dây cung AB = 8 cm. Khoảng cách từ tâm O đến dây AB bằng:",
    "level": "Thông hiểu",
    "score": 1,
    "type": "single",
    "options": [
      "A. 3 cm",
      "B. 4 cm",
      "C. √41 cm",
      "D. 2 cm"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Kẻ OH vuông góc với AB tại H (H là trung điểm của AB theo định lý đường kính vuông góc với dây).\nTa có: AH = AB / 2 = 8 / 2 = 4 (cm).\nXét tam giác OAH vuông tại H, với OA = R = 5 cm:\nÁp dụng định lý Pytago:\nOH² = OA² - AH² = 5² - 4² = 25 - 16 = 9\n⇒ OH = √9 = 3 (cm).\nVậy khoảng cách từ tâm O đến dây AB là 3 cm."
  },
  {
    "id": 4039,
    "chapter": "Chương 6: Đường tròn & Góc với đường tròn",
    "chapterId": 6,
    "topic": "Góc nội tiếp và góc ở tâm",
    "question": "Cho tam giác ABC nội tiếp đường tròn (O). Biết góc BAC = 60°. Số đo của góc ở tâm BOC (chắn cung nhỏ BC) là:",
    "level": "Nhận biết",
    "score": 1,
    "type": "single",
    "options": [
      "A. 120°",
      "B. 60°",
      "C. 30°",
      "D. 90°"
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Trong một đường tròn, góc nội tiếp có số đo bằng một nửa số đo của góc ở tâm cùng chắn một cung:\nGóc BAC là góc nội tiếp chắn cung nhỏ BC.\nGóc BOC là góc ở tâm chắn cung nhỏ BC.\nDo đó: số đo góc BOC = 2 × (số đo góc BAC) = 2 × 60° = 120°."
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
        const DATA_VERSION = '2026.11.16.anm310_v4';
        const savedVersion = localStorage.getItem('netlab_data_version');
        const forceRefresh = (savedVersion !== DATA_VERSION);

        // 1. Load subjects metadata
        const savedSubs = localStorage.getItem(this.STORAGE_KEY_SUBJECTS);
        if (savedSubs && !forceRefresh) {
            try {
                this.subjects = JSON.parse(savedSubs);
                let needsSave = false;
                // Merge any newly introduced default subjects or refresh chapters
                Object.keys(window.DEFAULT_SUBJECTS_METADATA).forEach(k => {
                    if (!this.subjects[k]) {
                        this.subjects[k] = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA[k]));
                        needsSave = true;
                    } else if (window.DEFAULT_SUBJECTS_METADATA[k].chapters && 
                               (!this.subjects[k].chapters || this.subjects[k].chapters.length < window.DEFAULT_SUBJECTS_METADATA[k].chapters.length)) {
                        this.subjects[k].chapters = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA[k].chapters));
                        needsSave = true;
                    }
                });
                if (needsSave) this.saveSubjects();
            } catch (e) {
                this.subjects = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA));
                this.saveSubjects();
            }
        } else {
            this.subjects = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS_METADATA));
            this.saveSubjects();
        }

        // 2. Load questions map
        const savedQ = localStorage.getItem(this.STORAGE_KEY_QUESTIONS);
        if (savedQ && !forceRefresh) {
            try {
                this.questionsMap = JSON.parse(savedQ);
                let needsSave = false;
                // Merge any newly introduced default questions or update if more questions available
                Object.keys(window.DEFAULT_EXTRA_QUESTIONS).forEach(k => {
                    if (!this.questionsMap[k] || this.questionsMap[k].length < (window.DEFAULT_EXTRA_QUESTIONS[k] || []).length) {
                        this.questionsMap[k] = JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS[k] || []));
                        needsSave = true;
                    }
                });
                if (needsSave) this.saveQuestions();
            } catch (e) {
                this.initDefaultQuestions();
            }
        } else {
            this.initDefaultQuestions();
        }

        // Ensure MMT questions are populated from window.QUIZ_DATA if empty
        if (!this.questionsMap.mmt || this.questionsMap.mmt.length === 0) {
            this.questionsMap.mmt = (window.QUIZ_DATA && window.QUIZ_DATA.length > 0) ? window.QUIZ_DATA : [];
            this.saveQuestions();
        }

        // 3. Load active subject: check URL query param first (?sub=anm or ?subject=anm or #anm)
        let active = null;
        if (typeof window !== 'undefined' && window.location) {
            try {
                let querySub = null;
                if (typeof URLSearchParams !== 'undefined' && window.location.search) {
                    const urlParams = new URLSearchParams(window.location.search);
                    querySub = urlParams.get('sub') || urlParams.get('subject');
                }
                if (!querySub && window.location.search) {
                    const m = window.location.search.match(/[?&](?:sub|subject)=([^&#]+)/);
                    if (m) querySub = decodeURIComponent(m[1]);
                }
                if (!querySub && window.location.hash) {
                    querySub = window.location.hash.replace(/^#\/?/, '');
                }
                if (querySub && this.subjects[querySub]) {
                    active = querySub;
                }
            } catch (e) {}
        }
        if (!active) {
            active = localStorage.getItem(this.STORAGE_KEY_ACTIVE);
        }
        if (active && this.subjects[active]) {
            this.activeSubjectId = active;
        } else {
            this.activeSubjectId = 'mmt';
        }

        localStorage.setItem('netlab_data_version', DATA_VERSION);
    }

    initDefaultQuestions() {
        this.questionsMap = {
            mmt: (window.QUIZ_DATA && window.QUIZ_DATA.length > 0) ? window.QUIZ_DATA : [],
            anm: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.anm || [])),
            toan: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.toan || [])),
            toan9: JSON.parse(JSON.stringify(window.DEFAULT_EXTRA_QUESTIONS.toan9 || [])),
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
        const all = Object.values(this.subjects);
        if (this.allowedSubjectIds && Array.isArray(this.allowedSubjectIds)) {
            return all.filter(s => this.allowedSubjectIds.includes(s.id));
        }
        return all;
    }

    filterAllowedSubjects(allowedIds) {
        if (allowedIds && Array.isArray(allowedIds) && allowedIds.length > 0) {
            this.allowedSubjectIds = allowedIds;
            if (!this.allowedSubjectIds.includes(this.activeSubjectId)) {
                this.activeSubjectId = this.allowedSubjectIds[0] || 'mmt';
            }
        } else {
            this.allowedSubjectIds = null;
        }
        this.notifyChange();
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


window.ANM_SAMPLE_TEXT = "Câu 1: An ninh mạng (Cybersecurity) được định nghĩa chính xác nhất là gì?\nA. Việc cài đặt phần mềm diệt virus trên máy tính cá nhân.\nB. Nỗ lực liên tục nhằm bảo vệ các hệ thống mạng, thiết bị, chương trình và dữ liệu khỏi bị hư hại, truy cập hoặc tấn công trái phép.\nC. Việc cấu hình mật khẩu phức tạp cho các thiết bị định tuyến và chuyển mạch.\nD. Luật pháp ngăn cấm các hành vi sử dụng máy tính sai mục đích.\nĐáp án: B\nLời giải: Cisco NetAcad định nghĩa an ninh mạng là nỗ lực liên tục để bảo vệ các hệ thống kết nối mạng và toàn bộ dữ liệu khỏi bị truy cập hoặc hủy hoại trái phép.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 2: Ba thành phần cốt lõi của tam giác bảo mật CIA Triad là gì?\nA. Confidentiality, Internet, Authentication\nB. Control, Integrity, Authorization\nC. Confidentiality, Integrity, Availability\nD. Cryptography, Inspection, Accountability\nĐáp án: C\nLời giải: Tam giác bảo mật CIA bao gồm: Confidentiality (Tính bảo mật), Integrity (Tính toàn vẹn) và Availability (Tính khả dụng).\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 3: Thuật ngữ nào đồng nghĩa với \"Confidentiality\" (Tính bảo mật) trong ngữ cảnh dữ liệu cá nhân?\nA. Consistency (Tính nhất quán)\nB. Privacy (Quyền riêng tư)\nC. Redundancy (Tính dự phòng)\nD. Accessibility (Tính tiếp cận)\nĐáp án: B\nLời giải: Tính bảo mật thông tin cá nhân thường được gọi là quyền riêng tư (Privacy), đảm bảo chỉ những người được ủy quyền mới có thể xem dữ liệu.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 4: Phương pháp hoặc kỹ thuật nào thường được sử dụng nhất để đảm bảo tính toàn vẹn (Integrity) của dữ liệu trong quá trình truyền tải?\nA. Đặt mật khẩu mở file\nB. Sử dụng hàm băm (Hash / Checksum)\nC. Lưu trữ file trên thẻ nhớ USB\nD. Tăng băng thông đường truyền mạng\nĐáp án: B\nLời giải: Hàm băm (Cryptographic Hash / Checksum như MD5, SHA-256) tạo ra một chuỗi giá trị cố định đại diện cho dữ liệu. Nếu dữ liệu bị sửa đổi dù chỉ 1 bit, giá trị băm sẽ thay đổi hoàn toàn, giúp phát hiện dữ liệu bị can thiệp.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 5: Thuật ngữ nào mô tả sự sẵn sàng của hệ thống và dữ liệu để người dùng được ủy quyền truy cập bất cứ khi nào cần?\nA. Confidentiality\nB. Integrity\nC. Availability\nD. Scalability\nĐáp án: C\nLời giải: Availability (Tính khả dụng) đảm bảo hệ thống dịch vụ, mạng và dữ liệu luôn hoạt động và sẵn sàng phục vụ khi cần thiết.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 6: Biện pháp nào sau đây giúp đảm bảo tính khả dụng (Availability) của hệ thống?\nA. Triển khai hệ thống nguồn điện liên tục (UPS) và máy chủ dự phòng (Redundancy)\nB. Sử dụng thuật toán mã hóa AES-256 cho ổ đĩa\nC. Buộc người dùng đổi mật khẩu mỗi ngày\nD. Đặt tên file ở dạng ẩn\nĐáp án: A\nLời giải: Nguồn điện dự phòng (UPS), liên kết mạng dự phòng và hệ thống lưu trữ dự phòng (RAID/Cluster) giúp ngăn chặn gián đoạn hoạt động, đảm bảo tính khả dụng.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 7: Ví dụ nào sau đây thể hiện sự vi phạm tính toàn vẹn (Integrity)?\nA. Hacker đánh cắp cơ sở dữ liệu số thẻ tín dụng nhưng không sửa đổi gì.\nB. Một kẻ tấn công chặn gói tin chuyển khoản ngân hàng và sửa đổi số tiền từ 100 USD thành 10,000 USD.\nC. Một trang web bị tấn công DDoS làm tê liệt máy chủ trong 4 giờ.\nD. Nhân viên để lộ mật khẩu máy tính cho bạn đồng nghiệp.\nĐáp án: B\nLời giải: Việc sửa đổi dữ liệu trái phép (thay đổi số tiền) là hành vi xâm phạm tính toàn vẹn của dữ liệu.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 8: Ví dụ nào sau đây là sự vi phạm tính khả dụng (Availability)?\nA. Một nhân viên sao chép tài liệu mật của công ty về máy cá nhân.\nB. Kẻ tấn công làm tràn ngập lưu lượng truy cập khiến máy chủ web bán hàng bị sập.\nC. Dữ liệu bảng điểm học sinh bị sửa đổi điểm từ 5 lên 9.\nD. Email bị kẻ nghe lén đọc trộm nội dung trên mạng Wi-Fi công cộng.\nĐáp án: B\nLời giải: Làm sập máy chủ web ngăn cản người dùng truy cập dịch vụ, đây là hành vi phá hoại tính khả dụng.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 9: Thuật ngữ PII trong an ninh mạng là viết tắt của cụm từ nào?\nA. Private Internet Information\nB. Personally Identifiable Information\nC. Protected Internal Infrastructure\nD. Public Identification Interface\nĐáp án: B\nLời giải: PII là viết tắt của Personally Identifiable Information (Thông tin nhận dạng cá nhân).\nChương: 1\nChủ đề: Bảo vệ quyền riêng tư & Dữ liệu PII\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 10: Dữ liệu nào sau đây KHÔNG PHẢI là một ví dụ về PII (Personally Identifiable Information)?\nA. Số Căn cước công dân / Mã số An sinh xã hội (SSN)\nB. Số hiệu phiên bản của hệ điều hành Windows đang cài đặt\nC. Dữ liệu quét sinh trắc học vân tay của nhân viên\nD. Hồ sơ bệnh án y tế cá nhân\nĐáp án: B\nLời giải: Số phiên bản hệ điều hành là thông tin kỹ thuật chung của máy tính, không thể dùng độc lập để xác định danh tính cụ thể của một cá nhân.\nChương: 1\nChủ đề: Bảo vệ quyền riêng tư & Dữ liệu PII\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 11: Một hồ sơ người dùng trên mạng xã hội bao gồm ảnh, bài viết, sở thích được gọi là gì?\nA. Online Identity (Danh tính trực tuyến)\nB. Virtual Memory\nC. Proxy Identity\nD. Digital Certificate\nĐáp án: A\nLời giải: Hồ sơ cá nhân trên các trang mạng xã hội đại diện cho danh tính trực tuyến (Online Identity) của người dùng trên không gian mạng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 12: Dấu vết dữ liệu mà bạn để lại khi duyệt web, đăng bài viết, tìm kiếm thông tin trên Internet được gọi là gì?\nA. Digital Footprint (Dấu chân số)\nB. Digital Token\nC. Cyber Trail\nD. Virtual Footmark\nĐáp án: A\nLời giải: Dấu chân số (Digital footprint) là tất cả các dấu vết dữ liệu do một cá nhân để lại trên Internet qua các hoạt động trực tuyến.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 13: Đâu là đặc điểm phân biệt dữ liệu truyền thống với dữ liệu lớn (Big Data)?\nA. Dữ liệu lớn không bao giờ cần bảo mật.\nB. Dữ liệu lớn đặc trưng bởi khối lượng khổng lồ (Volume), tốc độ gia tăng nhanh (Velocity) và tính đa dạng định dạng (Variety).\nC. Dữ liệu lớn chỉ bao gồm các bảng tính Excel của công ty.\nD. Dữ liệu truyền thống chỉ được lưu trên đám mây.\nĐáp án: B\nLời giải: Big Data thường được định nghĩa bởi các đặc trưng cốt lõi (3V): Volume (Khối lượng lớn), Velocity (Tốc độ sinh dữ liệu cực nhanh), và Variety (Đa dạng thể loại dữ liệu).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 14: Kẻ tấn công mạng thuộc nhóm \"Script Kiddies\" (Amateurs) là ai?\nA. Những lập trình viên chuyên nghiệp chuyên viết các ngôn ngữ kịch bản như Python.\nB. Những kẻ tấn công thiếu kỹ năng chuyên sâu, sử dụng các công cụ hoặc kịch bản có sẵn trên Internet để tấn công.\nC. Các điệp viên mạng do chính phủ tài trợ.\nD. Các chuyên gia bảo mật hàng đầu thế giới.\nĐáp án: B\nLời giải: Script Kiddies là thuật ngữ chỉ những kẻ tấn công nghiệp dư, sử dụng công cụ hoặc mã độc do người khác viết mà không hiểu rõ bản chất bên dưới.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 15: Tin tặc mũ trắng (White Hat Hacker) khác biệt cơ bản với tin tặc mũ đen (Black Hat Hacker) ở điểm nào?\nA. Tin tặc mũ trắng sử dụng hệ điều hành Windows, mũ đen dùng Linux.\nB. Tin tặc mũ trắng có sự cho phép bằng văn bản của chủ sở hữu hệ thống để kiểm tra bảo mật nhằm khắc phục lỗ hổng.\nC. Tin tặc mũ trắng không biết cách tấn công hệ thống.\nD. Tin tặc mũ trắng luôn làm việc cho các tổ chức tình báo quân sự.\nĐáp án: B\nLời giải: White Hat Hacker (Ethical Hacker) được cấp quyền hợp pháp để kiểm thử thâm nhập nhằm mục đích tìm và vá lỗ hổng, nâng cao an ninh.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 16: Động cơ chính của một \"Tin tặc mũ đen\" (Black Hat Hacker) thường là gì?\nA. Bảo vệ an ninh quốc gia\nB. Tìm kiếm lỗ hổng để báo cáo miễn phí cho nhà sản xuất\nC. Đạt được lợi ích tài chính cá nhân, phá hoại hoặc thỏa mãn sự ác ý\nD. Nâng cao văn hóa tuân thủ đạo đức mạng\nĐáp án: C\nLời giải: Black Hat Hacker tấn công hệ thống trái phép nhằm trục lợi tài chính, tống tiền, đánh cắp thông tin hoặc phá hoại.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 17: Một tin tặc phát hiện lỗ hổng trên website của một ngân hàng, không phá hoại nhưng tự ý xâm nhập và yêu cầu ngân hàng trả tiền thưởng thì mới chỉ cách khắc phục. Tin tặc này thuộc nhóm nào?\nA. White Hat Hacker\nB. Gray Hat Hacker\nC. Script Kiddie\nD. State-sponsored Hacker\nĐáp án: B\nLời giải: Gray Hat Hacker xâm nhập không xin phép (hành vi bất hợp pháp) nhưng không có ý định phá hoại độc hại, thường đòi hỏi thù lao để sửa lỗi hoặc công khai lỗ hổng nếu không được trả thưởng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 18: Nhóm đối tượng nào thực hiện tấn công mạng với động cơ chính trị, xã hội hoặc bảo vệ môi trường?\nA. Cybercriminals (Tội phạm mạng)\nB. Hacktivists (Nhà hoạt động tin tặc)\nC. Script Kiddies\nD. System Administrators\nĐáp án: B\nLời giải: Hacktivists là những cá nhân hoặc nhóm sử dụng kỹ năng tin tặc để truyền tải thông điệp chính trị, xã hội, môi trường hoặc tôn giáo.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 19: Ví dụ nào sau đây minh họa rõ nhất cho hành vi \"Hacktivism\"?\nA. Một nhóm tin tặc mã hóa cơ sở dữ liệu bệnh viện đòi 2 triệu USD tiền chuộc.\nB. Một nhóm tấn công từ chối dịch vụ (DoS) vào trang web của tập đoàn khai khoáng để phản đối việc hủy hoại rừng nguyên sinh.\nC. Một học sinh tải phần mềm quét cổng mạng về thử quét máy tính bạn cùng lớp.\nD. Một chuyên gia bảo mật gửi báo cáo lỗ hổng cho Microsoft.\nĐáp án: B\nLời giải: Tấn công vào công ty để biểu tình phản đối vấn đề xã hội/môi trường là hành vi kinh điển của Hacktivist.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 20: Chiến tranh mạng (Cyberwarfare) là gì?\nA. Cuộc thi đấu an ninh mạng giữa các sinh viên đại học.\nB. Xung đột trên không gian mạng có chủ đích giữa các quốc gia nhằm xâm nhập và phá hoại hệ thống thông tin, cơ sở hạ tầng trọng yếu của đối phương.\nC. Việc một cá nhân cài đặt virus vào máy tính của một người khác cùng công ty.\nD. Các cuộc thảo luận tranh cãi gay gắt trên mạng xã hội.\nĐáp án: B\nLời giải: Cyberwarfare là hoạt động xung đột cấp quốc gia, sử dụng công nghệ số để tấn công các mục tiêu quốc phòng, kinh tế và cơ sở hạ tầng của quốc gia khác.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 21: Mã độc nổi tiếng nào được coi là vũ khí mạng cấp quốc gia đầu tiên trên thế giới, được tạo ra để phá hủy cơ sở làm giàu hạt nhân Natanz của Iran?\nA. WannaCry\nB. ILOVEYOU\nC. Stuxnet\nD. Melissa\nĐáp án: C\nLời giải: Sâu máy tính Stuxnet được phát hiện năm 2010 là ví dụ điển hình về chiến tranh mạng (State-sponsored), nhắm vào hệ thống điều khiển công nghiệp SCADA/PLC để phá hỏng máy ly tâm hạt nhân.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 22: Cơ sở hạ tầng trọng yếu (Critical Infrastructure) thường là mục tiêu hàng đầu của chiến tranh mạng bao gồm những gì?\nA. Các trang web thương mại điện tử nhỏ\nB. Hệ thống lưới điện, mạng lưới cấp nước, bệnh viện, viễn thông và giao thông vận tải\nC. Các diễn đàn chia sẻ phim ảnh trực tuyến\nD. Các phòng máy chơi game công cộng\nĐáp án: B\nLời giải: Cơ sở hạ tầng trọng yếu là các hệ thống thiết yếu đối với an ninh, kinh tế và đời sống của một quốc gia (điện lực, nước, y tế, giao thông).\nChương: 1\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 23: Lưới điện thông minh (Smart Grid) mang lại nhiều tiện ích nhưng cũng tạo ra rủi ro an ninh mạng nào lớn nhất?\nA. Giảm tuổi thọ bóng đèn trong gia đình\nB. Kẻ tấn công có thể từ xa ngắt nguồn cấp điện diện rộng, gây hỗn loạn kinh tế và xã hội\nC. Tăng chi phí hóa đơn tiền điện tự động\nD. Làm chậm tốc độ kết nối Internet của hộ gia đình\nĐáp án: B\nLời giải: Việc số hóa và kết nối lưới điện vào mạng máy tính mở ra nguy cơ bị tin tặc tấn công ngắt nguồn cấp điện quy mô lớn.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 24: Một người đăng tải ảnh thẻ căn cước công dân và vé máy bay có mã QR lên trang Facebook công khai. Hành vi này có nguy cơ gì lớn nhất?\nA. Máy ảnh điện thoại bị hỏng\nB. Bị lộ lọt PII, dẫn đến nguy cơ bị đánh cắp danh tính (Identity Theft) và làm giả giấy tờ\nC. Facebook sẽ khóa tài khoản ngay lập tức\nD. Điện thoại sẽ bị nhiễm virus tự động\nĐáp án: B\nLời giải: Thẻ CCCD và mã QR trên vé máy bay chứa các thông tin PII nhạy cảm, kẻ xấu có thể dùng để mạo danh, mở tài khoản vay nợ hoặc lừa đảo.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 25: Tội phạm mạng (Cybercriminals) thường có xu hướng cấu kết thành các mạng lưới như thế nào trong thời đại hiện nay?\nA. Hoạt động độc lập và không bao giờ trao đổi với nhau\nB. Hoạt động giống như các doanh nghiệp hợp pháp, cung cấp dịch vụ mã độc cho thuê (MaaS, RaaS) và rửa tiền qua tiền điện tử\nC. Chỉ hoạt động vào ban đêm\nD. Toàn bộ đều là nhân viên của các cơ quan chính phủ\nĐáp án: B\nLời giải: Tội phạm mạng ngày nay hoạt động chuyên nghiệp hóa, tổ chức thành các tổ chức ngầm cung cấp dịch vụ như Ransomware-as-a-Service (RaaS).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 26: Tại sao các thiết bị y tế được kết nối mạng (như máy tạo nhịp tim, máy truyền dịch thông minh) lại cần được bảo vệ an ninh mạng nghiêm ngặt?\nA. Vì chúng tiêu thụ quá nhiều băng thông Internet của bệnh viện.\nB. Vì việc bị xâm nhập hoặc thay đổi thông số hoạt động có thể đe dọa trực tiếp đến tính mạng của bệnh nhân.\nC. Vì bệnh nhân muốn tải ứng dụng nghe nhạc lên thiết bị.\nD. Vì thiết bị y tế không thể sử dụng mật khẩu.\nĐáp án: B\nLời giải: Can thiệp trái phép vào thiết bị y tế có thể gây tử vong cho bệnh nhân, do đó an ninh mạng ở đây gắn liền với sinh mạng con người.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 27: Khi mua hàng trực tuyến, trình duyệt hiển thị biểu tượng ổ khóa màu xanh lá/xám cùng tiền tố \"https://\". Điều này giúp đảm bảo yếu tố nào trong CIA Triad đối với thông tin thẻ ngân hàng?\nA. Availability\nB. Confidentiality và Integrity\nC. Non-repudiation\nD. Redundancy\nĐáp án: B\nLời giải: Giao thức HTTPS sử dụng SSL/TLS để mã hóa dữ liệu truyền tải (bảo vệ tính bí mật - Confidentiality) và kiểm tra tính toàn vẹn (Integrity) để dữ liệu không bị thay đổi trên đường truyền.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 28: Một nhân viên vô tình gửi nhầm danh sách lương thưởng của toàn bộ công ty vào hòm thư chung của tất cả nhân viên. Đây là sự cố an ninh mạng thuộc loại nào?\nA. Vi phạm tính toàn vẹn (Integrity Breach)\nB. Vi phạm tính bảo mật (Confidentiality Breach do lỗi con người)\nC. Tấn công từ chối dịch vụ (DoS)\nD. Vi phạm tính khả dụng (Availability Breach)\nĐáp án: B\nLời giải: Danh sách lương là dữ liệu bí mật; việc người không có thẩm quyền đọc được là sự cố vi phạm tính bảo mật (Confidentiality).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 29: Bản sao lưu dữ liệu (Data Backup) đóng vai trò chính trong việc bảo vệ yếu tố nào của tam giác CIA khi xảy ra sự cố hỏng ổ cứng?\nA. Confidentiality\nB. Availability\nC. Accountability\nD. Authorization\nĐáp án: B\nLời giải: Bản sao lưu cho phép phục hồi dữ liệu khi ổ cứng bị hỏng hoặc dữ liệu bị mã hóa, đảm bảo tính khả dụng (Availability) của dữ liệu.\nChương: 1\nChủ đề: Mô hình CIA Triad\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 30: Chữ ký số (Digital Signature) cung cấp những đặc tính bảo mật nào sau đây?\nA. Chỉ cung cấp khả năng nén dung lượng file\nB. Xác thực nguồn gốc người gửi, đảm bảo tính toàn vẹn và chống chối bỏ (Non-repudiation)\nC. Tăng tốc độ truyền dữ liệu qua Internet\nD. Tự động xóa file sau khi đọc xong\nĐáp án: B\nLời giải: Chữ ký số kết hợp mã hóa bất đối xứng và hàm băm, giúp chứng minh ai đã gửi tài liệu, tài liệu không bị chỉnh sửa và người gửi không thể phủ nhận việc đã ký.\nChương: 1\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 31: Khái niệm \"Attack Surface\" (Bề mặt tấn công) trong an ninh mạng có nghĩa là gì?\nA. Kích thước màn hình của máy tính bị tấn công.\nB. Tổng số tất cả các điểm yếu, cổng mở, dịch vụ hoặc lỗ hổng có thể bị kẻ tấn công tiếp cận và khai thác trong một hệ thống.\nC. Vỏ bề mặt bên ngoài của máy chủ.\nD. Khu vực địa lý nơi kẻ tấn công sinh sống.\nĐáp án: B\nLời giải: Attack Surface là toàn bộ các điểm tiếp xúc trên hệ thống (phần mềm, cổng mạng, con người, cấu hình) mà kẻ tấn công có thể lợi dụng để đột nhập.\nChương: 1\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 32: Thuật ngữ nào mô tả các chuyên gia bảo mật được thuê để tìm cách đột nhập vào hệ thống của chính công ty mình nhằm phát hiện lỗ hổng trước khi kẻ xấu tìm ra?\nA. Black Hat Hackers\nB. Blue Team / Red Team (Penetration Testers)\nC. Script Kiddies\nD. Spammers\nĐáp án: B\nLời giải: Red Team đóng vai trò kẻ tấn công (kiểm thử thâm nhập) có đạo đức để phát hiện điểm yếu của hệ thống.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 33: Tấn công mạng nhắm vào chuỗi cung ứng (Supply Chain Attack) là gì?\nA. Tấn công vào xe tải vận chuyển hàng hóa của siêu thị.\nB. Tấn công vào một nhà cung cấp bên thứ ba kém an toàn hơn để từ đó gián tiếp xâm nhập vào tổ chức mục tiêu chính.\nC. Tấn công vào cửa hàng bán lẻ máy tính.\nD. Chặn đường truyền cáp quang ngầm dưới biển.\nĐáp án: B\nLời giải: Chuỗi cung ứng thường liên quan đến các nhà cung cấp phần mềm hoặc dịch vụ bên thứ ba. Nếu đối tác này bị xâm nhập, kẻ tấn công có thể mượn đường này để tấn công mục tiêu lớn hơn (ví dụ vụ SolarWinds).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 34: Tại sao mật khẩu một chữ số hoặc mật khẩu như \"123456\" lại là mối nguy hại lớn đối với tính bảo mật?\nA. Vì máy tính không cho phép nhập số.\nB. Vì kẻ tấn công có thể dễ dàng đoán được hoặc dùng phần mềm bẻ khóa trong vòng chưa đến một giây.\nC. Vì nó làm hỏng bàn phím máy tính.\nD. Vì hệ thống mạng không hiểu được ký tự số.\nĐáp án: B\nLời giải: Mật khẩu ngắn và phổ biến là mục tiêu hàng đầu của các cuộc tấn công vét cạn (Brute-force) hoặc tấn công từ điển (Dictionary attack).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 35: Khi nói về dữ liệu tổ chức, \"Sở hữu trí tuệ\" (Intellectual Property) bao gồm những tài sản nào?\nA. Máy tính bàn và bàn ghế văn phòng\nB. Bằng sáng chế, bí mật công thức sản phẩm, mã nguồn phần mềm, thiết kế sản phẩm mới\nC. Bãi đỗ xe và tòa nhà trụ sở\nD. Hóa đơn tiền điện tháng trước\nĐáp án: B\nLời giải: Sở hữu trí tuệ là các tài sản vô hình do trí tuệ tạo ra, như phát minh, sáng chế, mã nguồn, công thức độc quyền.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 36: Hậu quả tài chính của một vụ vi phạm dữ liệu (Data Breach) đối với doanh nghiệp thường bao gồm những gì?\nA. Tiền phạt từ các cơ quan quản lý nhà nước (như vi phạm GDPR).\nB. Chi phí khắc phục, điều tra sự cố số và bồi thường khách hàng.\nC. Tổn hại uy tín thương hiệu dẫn đến sụt giảm doanh thu.\nD. Tất cả các phương án trên đều đúng.\nĐáp án: D\nLời giải: Một vụ lộ lọt dữ liệu gây tổn thất toàn diện: tiền phạt pháp lý, chi phí kỹ thuật điều tra khắc phục, bồi thường và mất niềm tin từ khách hàng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 37: Thuật ngữ nào chỉ tình trạng kẻ tấn công chiếm quyền kiểm soát máy tính của người dùng nhưng máy tính đó vẫn hoạt động bình thường và người dùng không hề hay biết?\nA. Supercomputer\nB. Zombie (hoặc Bot)\nC. Master Server\nD. Proxy Server\nĐáp án: B\nLời giải: Một máy tính bị nhiễm mã độc và bị điều khiển từ xa bởi kẻ tấn công được gọi là Zombie (hoặc Bot). Nhiều Zombie kết hợp lại tạo thành Botnet.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 38: Mối đe dọa nội bộ (Insider Threat) đến từ đối tượng nào?\nA. Một hacker nước ngoài không có tài khoản công ty\nB. Một nhân viên, cựu nhân viên hoặc nhà thầu phụ hiện có hoặc từng có quyền truy cập hợp pháp vào mạng lưới của tổ chức\nC. Một chương trình diệt virus được mua từ nhà phân phối chính thức\nD. Khách vãng lai đi ngang qua trụ sở công ty\nĐáp án: B\nLời giải: Insider Threat là mối đe dọa xuất phát từ những người bên trong tổ chức, những người đã có sẵn quyền truy cập hợp lệ vào hệ thống.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 39: Điều nào sau đây là động cơ thường thấy của một nhân viên gây ra mối đe dọa nội bộ (Insider Threat)?\nA. Bất mãn với công ty, muốn trả thù sếp\nB. Bị lôi kéo, mua chuộc bởi đối thủ cạnh tranh vì tiền\nC. Thiếu kiến thức bảo mật dẫn đến thao tác sai lầm vô tình\nD. Tất cả các phương án trên\nĐáp án: D\nLời giải: Mối đe dọa nội bộ có thể do cố ý (bất mãn, tham lam tiền bạc) hoặc do vô ý (bất cẩn, thiếu kiến thức).\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 40: Để chứng minh tính xác thực (Authentication), hệ thống thường yêu cầu người dùng cung cấp điều gì?\nA. Thông tin nhận dạng như tài khoản và mật khẩu, mã OTP hoặc vân tay\nB. Chỉ cần địa chỉ IP máy tính\nC. Bằng khen học tập\nD. Tên nhà cung cấp dịch vụ Internet\nĐáp án: A\nLời giải: Authentication là quá trình xác minh danh tính người dùng thông qua các bằng chứng xác thực (yếu tố biết, có hoặc là).\nChương: 1\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 41: Khái niệm \"Non-repudiation\" (Chống chối bỏ) trong an ninh mạng có nghĩa là gì?\nA. Ngăn chặn virus lây vào USB.\nB. Đảm bảo rằng một cá nhân không thể phủ nhận tính hợp lệ của một hành động hoặc giao dịch mà họ đã thực hiện.\nC. Cho phép người dùng từ chối nhận email rác.\nD. Xóa toàn bộ lịch sử trò chuyện sau 24 giờ.\nĐáp án: B\nLời giải: Chống chối bỏ là khả năng chứng minh chắc chắn một hành động (như gửi email, ký hợp đồng, chuyển khoản) được thực hiện bởi người đó, khiến họ không thể chối cãi.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 42: Tại sao an ninh mạng được mô tả là \"một quá trình liên tục\" chứ không phải \"một trạng thái tĩnh hoàn chỉnh\"?\nA. Vì các nhà phát triển phần mềm muốn bán bản cập nhật liên tục để kiếm tiền.\nB. Vì các lỗ hổng mới liên tục xuất hiện, công nghệ thay đổi và kẻ tấn công không ngừng phát triển các kỹ thuật tấn công tinh vi hơn.\nC. Vì luật an ninh mạng thay đổi theo từng ngày.\nD. Vì phần cứng máy tính luôn bị hao mòn cơ học.\nĐáp án: B\nLời giải: Môi trường mạng luôn biến động; khi lỗ hổng cũ được vá thì lỗ hổng mới lại xuất hiện, đòi hỏi việc phòng vệ phải là nỗ lực liên tục không ngừng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 43: Điều nào sau đây là một ví dụ về dữ liệu không có cấu trúc (Unstructured Data) trong Big Data?\nA. Bảng lương cơ sở dữ liệu SQL có các cột định sẵn\nB. Các video, hình ảnh, bài đăng văn bản tự do và tệp ghi âm cuộc gọi\nC. Bảng điểm học sinh lưu trong cơ sở dữ liệu quan hệ\nD. Mã số nhân viên định dạng số nguyên\nĐáp án: B\nLời giải: Dữ liệu phi cấu trúc không tuân theo mô hình hàng cột cố định, ví dụ như hình ảnh, âm thanh, video, văn bản tự do trên mạng xã hội.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 44: Điểm khác nhau giữa \"Data at Rest\" (Dữ liệu tĩnh) và \"Data in Transit\" (Dữ liệu truyền tải) là gì?\nA. Data at Rest là dữ liệu đang được lưu trữ trên ổ cứng/thiết bị lưu trữ, còn Data in Transit là dữ liệu đang di chuyển qua mạng.\nB. Data at Rest không bao giờ bị hack, còn Data in Transit luôn bị hack.\nC. Data at Rest là dữ liệu video, Data in Transit là dữ liệu văn bản.\nD. Data at Rest chỉ tồn tại trong bộ nhớ RAM tạm thời.\nĐáp án: A\nLời giải: Data at Rest: Dữ liệu lưu tĩnh trên đĩa/băng từ; Data in Transit (hoặc Data in Motion): Dữ liệu đang truyền qua mạng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 45: Phương pháp bảo vệ phổ biến nhất đối với \"Data in Transit\" là gì?\nA. Cất ổ cứng vào tủ sắt chống cháy\nB. Mã hóa đường truyền bằng giao thức như TLS/HTTPS, IPsec hoặc VPN\nC. Ngắt hoàn toàn dây mạng Internet\nD. Sử dụng mật khẩu màn hình máy tính\nĐáp án: B\nLời giải: Mã hóa dữ liệu trên đường truyền (Transport Encryption) ngăn chặn việc nghe lén hoặc sửa đổi gói tin giữa chừng.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 46: Một cuộc tấn công mạng nhằm làm thay đổi kết quả kiểm phiếu trong cuộc bầu cử quốc gia là mối đe dọa trực tiếp vào yếu tố nào?\nA. Tính toàn vẹn (Integrity) và An ninh quốc gia\nB. Băng thông đường truyền quốc tế\nC. Tốc độ quay của đĩa cứng máy chủ\nD. Tính thẩm mỹ của website kiểm phiếu\nĐáp án: A\nLời giải: Việc gian lận hoặc can thiệp sửa đổi kết quả bầu cử là hành vi xâm phạm tính toàn vẹn của dữ liệu và đe dọa chủ quyền an ninh quốc gia.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 47: Khái niệm \"Cyber Espionage\" (Gián điệp mạng) dùng để chỉ hành vi nào?\nA. Tấn công làm hỏng phần cứng màn hình máy tính của đối phương\nB. Sử dụng mạng máy tính để bí mật thâm nhập và đánh cắp thông tin tình báo kinh tế, công nghệ hoặc quân sự từ chính phủ hoặc doanh nghiệp đối thủ\nC. Gửi tin nhắn quảng cáo khuyến mãi bán hàng\nD. Chơi trò chơi điện tử trực tuyến đóng vai thám tử\nĐáp án: B\nLời giải: Gián điệp mạng là hoạt động thu thập trái phép thông tin bí mật chiến lược của quốc gia hoặc đối thủ thương mại thông qua mạng máy tính.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 48: Đâu là một thách thức lớn đối với việc thực thi pháp luật khi xử lý các vụ án tội phạm mạng xuyên quốc gia?\nA. Kẻ tấn công luôn để lại địa chỉ nhà ở thật trong email\nB. Vấn đề ranh giới quyền tài phán (Jurisdiction), sự khác biệt luật pháp giữa các quốc gia và việc kẻ tấn công sử dụng công nghệ ẩn danh\nC. Cảnh sát không được phép sử dụng máy tính\nD. Không có luật pháp quốc tế nào đề cập đến an ninh mạng\nĐáp án: B\nLời giải: Không gian mạng không có biên giới địa lý, kẻ tấn công ở quốc gia này có thể tấn công nạn nhân ở quốc gia khác khiến việc phối hợp dẫn độ và khởi tố gặp muôn vàn khó khăn về quyền tài phán.\nChương: 1\nChủ đề: Đạo đức nghề nghiệp & Pháp lý ATTT\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 49: Thuật ngữ \"DDoS\" viết tắt của cụm từ nào?\nA. Direct Denial of Service\nB. Distributed Denial of Service\nC. Digital Detection of Security\nD. Data Destruction Operating System\nĐáp án: B\nLời giải: DDoS là viết tắt của Distributed Denial of Service (Tấn công từ chối dịch vụ phân tán).\nChương: 1\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 50: Theo bạn, yếu tố nào thường được coi là mắt xích yếu nhất trong chuỗi bảo mật an ninh mạng của một tổ chức?\nA. Thiết bị tường lửa phần cứng cao cấp\nB. Con người (nhân viên và người dùng cuối)\nC. Thuật toán mã hóa AES-256\nD. Cáp quang truyền dẫn dữ liệu\nĐáp án: B\nLời giải: Con người thường là mắt xích yếu nhất (The weakest link) do dễ bị thao túng tâm lý (Social Engineering), bất cẩn hoặc thiếu kiến thức an ninh thông tin.\nChương: 1\nChủ đề: Nhu Cầu An Ninh Mạng & Mô Hình Tam Giác CIA\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 51: Hai đặc điểm nổi bật nào mô tả chính xác nhất một Sâu máy tính (Worm)? (Chọn hai đáp án)\nA. Nó cần một tệp chương trình chủ hợp pháp để gắn vào.\nB. Nó có khả năng tự nhân bản (self-duplicates).\nC. Nó tự lan truyền sang các máy tính khác qua mạng mà không cần sự can thiệp hoặc nhận biết của người dùng.\nD. Nó luôn ngụy trang dưới dạng một trò chơi máy tính miễn phí.\nĐáp án: B, C\nLời giải: Khác với Virus, Worm là chương trình độc lập, có khả năng tự nhân bản và tự động quét, khai thác mạng để lây lan sang các máy tính khác mà không cần sự tương tác của con người hay tệp chủ.\nChương: 2\nChủ đề: Sâu máy tính (Worm)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 52: Điểm khác biệt cơ bản nhất giữa Virus máy tính và Sâu máy tính (Worm) là gì?\nA. Virus chỉ tấn công hệ điều hành Linux, còn Worm chỉ tấn công Windows.\nB. Virus cần gắn vào một chương trình/tệp chủ và cần con người kích hoạt để lây lan, trong khi Worm tự động lây lan độc lập qua mạng.\nC. Worm không bao giờ gây hại cho hệ thống, chỉ có Virus mới phá hoại.\nD. Virus lây qua mạng, còn Worm chỉ lây qua cổng USB.\nĐáp án: B\nLời giải: Virus cần tệp vật chủ (host file) và hành động thực thi của người dùng (như mở file đính kèm), còn Worm là phần mềm độc lập tự nhân bản qua mạng.\nChương: 2\nChủ đề: Sâu máy tính (Worm)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 53: Mục tiêu chính của một cuộc tấn công Từ chối Dịch vụ (DoS - Denial of Service) là gì?\nA. Đánh cắp mã nguồn phần mềm của máy chủ.\nB. Ngăn chặn máy chủ mục tiêu xử lý và đáp ứng các yêu cầu hợp lệ của người dùng.\nC. Bí mật cài đặt phần mềm gián điệp để theo dõi bàn phím.\nD. Sửa đổi số dư tài khoản ngân hàng của nạn nhân.\nĐáp án: B\nLời giải: Tấn công DoS nhằm mục đích làm tràn ngập hoặc làm cạn kiệt tài nguyên (CPU, RAM, băng thông) của hệ thống mục tiêu, khiến dịch vụ bị tê liệt hoặc từ chối phục vụ người dùng hợp pháp.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 54: Một chương trình độc hại nằm im lìm trong hệ thống và chỉ kích hoạt hành vi phá hoại khi có một sự kiện hoặc thời điểm cụ thể xảy ra được gọi là gì?\nA. Trojan Horse\nB. Logic Bomb (Bom logic)\nC. Adware\nD. Macro Virus\nĐáp án: B\nLời giải: Logic Bomb là đoạn mã độc được gài sẵn, chờ đợi điều kiện logic thỏa mãn (ví dụ: ngày giờ cụ thể, hoặc khi một tài khoản nhân viên bị xóa) mới kích hoạt.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 55: Chức năng chính của một \"Rootkit\" là gì?\nA. Tự động hiển thị các biểu ngữ quảng cáo kiếm tiền.\nB. Giành quyền truy cập đặc quyền cấp quản trị cao nhất (root/kernel) và chủ động che giấu sự hiện diện của mình khỏi sự phát hiện của hệ điều hành.\nC. Tăng tốc độ quạt tản nhiệt của máy tính.\nD. Quét và diệt các phần mềm gián điệp khác.\nĐáp án: B\nLời giải: Rootkit can thiệp sâu vào nhân hệ điều hành để trao quyền kiểm soát tối cao cho tin tặc và che giấu các tiến trình, tệp và khóa registry độc hại.\nChương: 2\nChủ đề: Mã độc Rootkit & Bootkit\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 56: \"SEO Poisoning\" (Đầu độc công cụ tìm kiếm) là kỹ thuật gì?\nA. Gửi chất độc hóa học vào các trung tâm dữ liệu của Google.\nB. Thao túng thuật toán của các công cụ tìm kiếm nhằm đưa các trang web độc hại lên vị trí cao trong kết quả tìm kiếm, lừa người dùng nhấp vào.\nC. Xóa sạch cơ sở dữ liệu của các công cụ tìm kiếm.\nD. Tấn công DDoS làm sập máy chủ tìm kiếm Yahoo.\nĐáp án: B\nLời giải: Kẻ tấn công lợi dụng các kỹ thuật SEO để đẩy đường link chứa mã độc hoặc lừa đảo lên top kết quả tìm kiếm của các từ khóa hot.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 57: Khái niệm \"Zombie\" trong an ninh mạng dùng để chỉ đối tượng nào?\nA. Một nhân viên an ninh mạng làm việc ca đêm.\nB. Một máy tính bị nhiễm mã độc và bị kẻ tấn công điều khiển từ xa, thường là một phần của mạng botnet.\nC. Một máy tính cũ đã bị hỏng ổ cứng hoàn toàn.\nD. Một loại virus đã bị tiêu diệt bởi phần mềm diệt virus.\nĐáp án: B\nLời giải: Zombie (hoặc Bot) là máy tính bị chiếm quyền điều khiển ngầm, phục vụ cho các chiến dịch tấn công quy mô lớn theo lệnh của Botmaster.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 58: Một cuộc tấn công Brute-Force (vét cạn) vào mật khẩu là gì?\nA. Tấn công đập phá phần cứng bàn phím của nạn nhân.\nB. Cuộc tấn công sử dụng phần mềm tự động thử tất cả các tổ hợp ký tự có thể cho đến khi tìm thấy mật khẩu chính xác.\nC. Gọi điện thoại đe dọa người dùng để lấy mật khẩu.\nD. Tìm mật khẩu được viết trên giấy ghi chú dán ở màn hình.\nĐáp án: B\nLời giải: Brute-Force là phương pháp thử - sai toàn diện, lần lượt thử từng khả năng ký tự có thể có để bẻ khóa mật khẩu.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 59: Loại phần mềm độc hại nào mã hóa toàn bộ dữ liệu của nạn nhân và yêu cầu thanh toán tiền chuộc bằng tiền điện tử để nhận chìa khóa giải mã?\nA. Spyware\nB. Ransomware\nC. Adware\nD. Scareware\nĐáp án: B\nLời giải: Ransomware (mã độc tống tiền) tước quyền truy cập dữ liệu của nạn nhân bằng mật mã học và tống tiền chuộc (như vụ WannaCry).\nChương: 2\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 60: Phần mềm độc hại giả dạng một ứng dụng hữu ích hoặc vô hại (như ứng dụng dọn rác, trò chơi) để lừa người dùng cài đặt được gọi là gì?\nA. Worm\nB. Trojan Horse\nC. Rootkit\nD. Keylogger\nĐáp án: B\nLời giải: Lấy cảm hứng từ con ngựa thành Troy trong thần thoại Hy Lạp, Trojan Horse đánh lừa người dùng bằng vẻ ngoài hợp pháp nhưng bên trong chứa mã độc mở cửa hậu (Backdoor).\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 61: Một nhân viên nhận được email thông báo từ \"Bộ phận IT\" yêu cầu nhấp vào liên kết để đổi mật khẩu khẩn cấp do hệ thống bị lỗi, nhưng liên kết dẫn đến một trang web giả mạo. Đây là hình thức tấn công nào?\nA. Phishing\nB. Man-in-the-Middle\nC. DDoS\nD. SQL Injection\nĐáp án: A\nLời giải: Phishing (lừa đảo giả mạo) sử dụng email mạo danh tổ chức uy tín để dụ nạn nhân cung cấp thông tin đăng nhập hoặc tải tệp độc hại.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 62: Hình thức lừa đảo Phishing được thiết kế nhắm riêng vào các lãnh đạo cấp cao trong tổ chức (như CEO, CFO) được gọi là gì?\nA. Spear Phishing\nB. Whaling\nC. Vishing\nD. Smishing\nĐáp án: B\nLời giải: Whaling (săn cá voi) là biến thể đặc biệt của Phishing nhắm trực tiếp vào các nhân vật cấp cao (C-suite) nhằm chiếm đoạt số tiền lớn hoặc dữ liệu tối mật.\nChương: 2\nChủ đề: Tấn công Social Engineering & Phishing\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 63: Kỹ thuật lừa đảo qua tin nhắn văn bản SMS trên điện thoại di động được gọi là gì?\nA. Vishing\nB. Smishing\nC. Pharming\nD. Spimming\nĐáp án: B\nLời giải: Smishing là sự kết hợp giữa SMS và Phishing, gửi tin nhắn SMS chứa liên kết độc hại để lừa đảo.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 64: Hình thức lừa đảo qua cuộc gọi thoại điện thoại trực tiếp mạo danh nhân viên ngân hàng hoặc cơ quan công an được gọi là gì?\nA. Vishing (Voice Phishing)\nB. Smishing\nC. Phishing\nD. Whaling\nĐáp án: A\nLời giải: Vishing sử dụng cuộc gọi thoại (Voice) để thao túng tâm lý nạn nhân qua điện thoại.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 65: Kẻ tấn công đứng phía sau một người đang rút tiền tại cây ATM hoặc đăng nhập máy tính để nhìn lén mã PIN/mật khẩu. Hành vi này được gọi là gì?\nA. Dumpster Diving\nB. Shoulder Surfing\nC. Tailgating\nD. Pretexting\nĐáp án: B\nLời giải: Shoulder Surfing (nhìn qua vai) là hành vi quan sát trực tiếp màn hình hoặc bàn phím của người khác để đánh cắp thông tin bí mật.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 66: Hành vi lục lọi các thùng rác của công ty để tìm kiếm các bản in tài liệu, danh bạ nội bộ, mật khẩu ghi trên giấy được gọi là gì?\nA. Shoulder Surfing\nB. Dumpster Diving\nC. Social Networking\nD. Piggybacking\nĐáp án: B\nLời giải: Dumpster Diving (lục thùng rác) là kỹ thuật phi kỹ thuật nhằm thu thập thông tin nhạy cảm bị vứt bỏ bất cẩn trong thùng rác.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 67: Một người lạ không có thẻ từ đi sát ngay sau lưng một nhân viên công ty khi người này quẹt thẻ mở cửa an ninh để lọt vào trong tòa nhà. Hành vi này gọi là gì?\nA. Shoulder Surfing\nB. Tailgating (hoặc Piggybacking)\nC. Pretexting\nD. Phishing\nĐáp án: B\nLời giải: Tailgating là hành vi đi theo sát người có quyền truy cập hợp lệ để vượt qua cửa kiểm soát vật lý.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 68: Một cửa sổ trình duyệt bất ngờ xuất hiện với thông báo nhấp nháy đỏ: \"CẢNH BÁO: Máy tính của bạn đã nhiễm 32 virus cực kỳ nguy hiểm! Nhấp vào đây để mua phần mềm quét sạch ngay lập tức!\". Đây là ví dụ của:\nA. Ransomware\nB. Scareware\nC. Spyware\nD. Firmware\nĐáp án: B\nLời giải: Scareware sử dụng các cảnh báo virus giả mạo để làm nạn nhân hoảng sợ và trả tiền mua phần mềm độc hại hoặc vô dụng.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 69: Loại phần mềm độc hại nào bí mật ghi lại mọi thao tác bàn phím của người dùng nhằm thu thập tên đăng nhập, mật khẩu và số thẻ tín dụng?\nA. Keylogger\nB. Adware\nC. Rootkit\nD. Worm\nĐáp án: A\nLời giải: Keylogger là công cụ chuyên ghi lại nhật ký phím bấm (keystrokes) của người dùng để đánh cắp dữ liệu nhạy cảm.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 70: Tấn công Man-in-the-Middle (MitM) là gì?\nA. Cuộc tấn công phá hỏng bộ định tuyến nằm ở giữa phòng máy chủ.\nB. Kẻ tấn công bí mật chặn và chuyển tiếp liên lạc giữa hai bên tin rằng họ đang liên lạc trực tiếp với nhau, cho phép kẻ tấn công nghe lén hoặc sửa đổi dữ liệu.\nC. Tấn công vào máy chủ web bằng cách gửi nhiều bình luận spam.\nD. Tranh chấp giữa hai kỹ sư quản trị mạng.\nĐáp án: B\nLời giải: Trong MitM, kẻ tấn công chèn mình vào giữa luồng truyền thông giữa hai bên (ví dụ client và server) để đánh cắp hoặc thay đổi dữ liệu mà các bên không hề hay biết.\nChương: 2\nChủ đề: Tấn công Man-in-the-Middle (On-Path)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 71: Kỹ thuật kẻ tấn công tạo ra một điểm phát sóng Wi-Fi giả mạo có cùng tên (SSID) với mạng Wi-Fi hợp pháp của quán cà phê hoặc sân bay để lừa người dùng kết nối vào được gọi là gì?\nA. Man-in-the-Middle\nB. Evil Twin\nC. Botnet\nD. Logic Bomb\nĐáp án: B\nLời giải: Evil Twin (Bản sao ác quỷ) là điểm truy cập không dây giả mạo bắt chước hoàn toàn tên mạng Wi-Fi hợp pháp nhằm đánh cắp thông tin người dùng kết nối vào.\nChương: 2\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 72: Điểm truy cập không dây bất hợp pháp (Rogue Access Point) trong mạng doanh nghiệp là gì?\nA. Một trạm phát Wi-Fi chính hãng của Cisco.\nB. Một điểm phát Wi-Fi do nhân viên hoặc kẻ tấn công tự ý gắn vào mạng nội bộ của công ty mà không được phép của bộ phận IT.\nC. Một ăng-ten thu sóng vệ tinh.\nD. Thiết bị chia cổng mạng Switch.\nĐáp án: B\nLời giải: Rogue AP là thiết bị phát sóng không dây gắn trái phép vào mạng có dây của tổ chức, tạo ra lỗ hổng bỏ qua các rào chắn bảo mật của công ty.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 73: Tấn công DNS Poisoning (Nhiễm độc DNS) dẫn đến hậu quả gì?\nA. Làm sập máy in trong văn phòng.\nB. Thay đổi bản ghi phân giải tên miền của máy chủ DNS, khiến người dùng gõ địa chỉ trang web hợp pháp nhưng bị chuyển hướng sang trang web độc hại của tin tặc.\nC. Làm chậm chuột máy tính.\nD. Xóa toàn bộ file trên máy tính của người dùng.\nĐáp án: B\nLời giải: DNS Poisoning chèn dữ liệu IP sai lệch vào bộ nhớ đệm máy chủ DNS, khiến người dùng truy cập trang web ngân hàng hợp pháp nhưng thực chất bị đưa đến máy chủ giả mạo.\nChương: 2\nChủ đề: Giả mạo DNS (DNS Poisoning)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 74: Kỹ thuật \"IP Spoofing\" là gì?\nA. Đổi màu địa chỉ IP trên giao diện đồ họa.\nB. Kẻ tấn công giả mạo địa chỉ IP nguồn trong tiêu đề gói tin để che giấu danh tính thật hoặc mạo danh một máy tính đáng tin cậy.\nC. Cắt dây mạng kết nối IP.\nD. Mua thêm nhiều dải địa chỉ IP công cộng.\nĐáp án: B\nLời giải: IP Spoofing là việc tạo ra các gói tin IP với địa chỉ nguồn giả mạo nhằm lừa hệ thống đích chấp nhận gói tin hoặc chuyển hướng lưu lượng phản hồi.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 75: Lỗ hổng bảo mật Zero-Day (Ngày 0) là gì?\nA. Lỗ hổng đã được phát hiện cách đây 10 năm.\nB. Lỗ hổng phần mềm chưa được nhà phát triển biết đến hoặc chưa có bản vá bảo mật nào được phát hành khi cuộc tấn công xảy ra.\nC. Lỗi màn hình xanh xuất hiện vào ngày chủ nhật.\nD. Lỗ hổng chỉ tồn tại trong vòng 0 giây.\nĐáp án: B\nLời giải: Zero-day ngụ ý các nhà phát triển có \"0 ngày\" để sửa lỗi vì nó đang bị khai thác trước khi kịp tạo ra bản vá.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 76: Điều nào sau đây mô tả chính xác nhất một cuộc tấn công Dictionary Attack (Tấn công từ điển)?\nA. Ném cuốn từ điển vào màn hình máy tính.\nB. Sử dụng một danh sách các từ phổ biến và mật khẩu thường dùng có sẵn để thử đăng nhập tự động.\nC. Tìm kiếm định nghĩa của từ trong từ điển Oxford.\nD. Thay đổi ngôn ngữ hiển thị của bàn phím.\nĐáp án: B\nLời giải: Tấn công từ điển sử dụng danh sách từ ngữ, cụm từ phổ biến (dictionary wordlist) để bẻ khóa mật khẩu nhanh hơn nhiều so với vét cạn mọi ký tự.\nChương: 2\nChủ đề: Kỹ thuật bẻ khóa mật khẩu\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 77: Rainbow Table được sử dụng cho mục đích gì trong an ninh mạng?\nA. Tạo hiệu ứng màu cầu vồng cho giao diện website.\nB. Tra cứu nhanh mật khẩu gốc từ các giá trị băm (hash) đã được tính toán sẵn, giúp bẻ khóa mật khẩu nhanh chóng.\nC. Lọc các gói tin mạng không hợp lệ.\nD. Sao lưu dữ liệu lên đám mây.\nĐáp án: B\nLời giải: Rainbow Table là bảng dữ liệu tính toán sẵn các cặp (Mật khẩu văn bản rõ - Giá trị băm) để tra cứu ngược tìm mật khẩu gốc từ mã băm.\nChương: 2\nChủ đề: Kỹ thuật bẻ khóa mật khẩu\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 78: Kỹ thuật Salting (Thêm muối) trong việc lưu trữ mật khẩu có tác dụng gì?\nA. Làm cho mật khẩu có vị mặn hơn.\nB. Thêm một chuỗi ký tự ngẫu nhiên vào mật khẩu trước khi băm, giúp vô hiệu hóa các cuộc tấn công bằng Rainbow Table.\nC. Xóa sạch mật khẩu khỏi cơ sở dữ liệu.\nD. Giảm kích thước file chứa mật khẩu.\nĐáp án: B\nLời giải: Thêm Salt (chuỗi ngẫu nhiên) làm cho cùng một mật khẩu có giá trị băm hoàn toàn khác nhau, khiến Rainbow Table tính sẵn trở nên vô dụng.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 79: Một cuộc tấn công SYN Flood lợi dụng cơ chế bắt tay nào của giao thức mạng?\nA. Bắt tay 2 bước của UDP\nB. Bắt tay 3 bước (Three-way Handshake: SYN, SYN-ACK, ACK) của giao thức TCP\nC. Giao thức truyền file FTP\nD. Giao thức phân giải địa chỉ ARP\nĐáp án: B\nLời giải: SYN Flood gửi liên tục các gói tin SYN nhưng không bao giờ phản hồi ACK cuối cùng, khiến máy chủ phải giữ hàng ngàn phiên kết nối nửa mở (half-open) làm cạn kiệt tài nguyên bộ nhớ.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 80: Một cuộc tấn công Smurf Attack sử dụng loại lưu lượng mạng nào để làm tràn ngập nạn nhân?\nA. Gói tin ICMP Echo Request (Ping) gửi đến địa chỉ Broadcast với địa chỉ nguồn giả mạo là máy nạn nhân\nB. Email quảng cáo spam\nC. Lưu lượng cuộc gọi video Skype\nD. Các truy vấn cơ sở dữ liệu SQL\nĐáp án: A\nLời giải: Smurf Attack gửi gói tin ICMP Ping đến địa chỉ quảng bá mạng với IP nguồn là nạn nhân, khiến tất cả máy tính trong mạng đồng loạt gửi phản hồi ICMP Reply về làm nghẽn máy nạn nhân.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 81: Kỹ thuật Pretexting trong Social Engineering là gì?\nA. Gửi email hàng loạt cho 1 triệu người cùng lúc.\nB. Kẻ tấn công tạo ra một kịch bản hoặc lý do giả hợp lý (ví dụ đóng giả nhân viên hỗ trợ kỹ thuật hoặc kiểm toán viên) để lừa nạn nhân cung cấp thông tin bí mật.\nC. Chèn mã độc vào file ảnh JPG.\nD. Tấn công vét cạn mật khẩu Wi-Fi.\nĐáp án: B\nLời giải: Pretexting là nghệ thuật tạo dựng câu chuyện, bối cảnh giả mạo đầy thuyết phục để dẫn dắt nạn nhân làm theo yêu cầu của kẻ xấu.\nChương: 2\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 82: Kỹ thuật Baiting (Gài bẫy) trong an ninh mạng thường được tiến hành như thế nào?\nA. Nhắn tin tán tỉnh trên mạng xã hội.\nB. Kẻ tấn công để lại một chiếc thẻ nhớ USB hoặc ổ cứng có dán nhãn hấp dẫn (như \"Bảng lương quý 4\", \"Hồ sơ mật\") ở nơi công cộng như bãi giữ xe hoặc hành lang công ty để kích thích sự tò mò của nạn nhân cắm vào máy tính.\nC. Mời nạn nhân đi ăn trưa.\nD. Gửi tặng máy in mới cho văn phòng.\nĐáp án: B\nLời giải: Baiting đánh vào tính tò mò hoặc lòng tham; khi nạn nhân cắm USB độc hại vào máy tính công ty, mã độc tự động chạy và lây nhiễm mạng nội bộ.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 83: Tấn công Cross-Site Scripting (XSS) nhắm vào đối tượng nào?\nA. Dây cáp mạng Internet ngầm\nB. Ứng dụng web, bằng cách chèn các đoạn mã kịch bản độc hại (thường là JavaScript) vào trang web để thực thi trên trình duyệt của người dùng khác\nC. Nguồn điện cấp cho phòng máy chủ\nD. Card đồ họa của máy tính\nĐáp án: B\nLời giải: XSS là lỗ hổng ứng dụng web cho phép kẻ tấn công đưa mã script độc hại vào trình duyệt của người dùng xem trang web đó để đánh cắp session cookie hoặc token.\nChương: 2\nChủ đề: Tấn công Cross-Site Scripting (XSS)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 84: Tấn công SQL Injection (SQLi) cho phép kẻ tấn công làm gì?\nA. Làm đứt kết nối mạng nội bộ\nB. Can thiệp vào các câu lệnh truy vấn cơ sở dữ liệu để xem, sửa đổi hoặc xóa dữ liệu nhạy cảm mà không cần quyền truy cập hợp lệ\nC. Tăng tốc độ truy vấn cơ sở dữ liệu\nD. Tắt màn hình máy chủ từ xa\nĐáp án: B\nLời giải: SQL Injection khai thác lỗi không kiểm tra dữ liệu đầu vào (Input Validation) của ứng dụng web, cho phép kẻ tấn công thực thi các lệnh SQL trái phép trên cơ sở dữ liệu.\nChương: 2\nChủ đề: Tấn công SQL Injection\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 85: Lỗ hổng tràn bộ đệm (Buffer Overflow) xảy ra khi nào?\nA. Khi máy tính bị mất điện đột ngột\nB. Khi chương trình ghi dữ liệu vượt quá giới hạn dung lượng được phân bổ của vùng đệm bộ nhớ, dẫn đến ghi đè lên các vùng nhớ liền kề và có thể thực thi mã tùy ý\nC. Khi dung lượng ổ đĩa cứng bị đầy 100%\nD. Khi có quá nhiều người cùng kết nối vào một máy chủ\nĐáp án: B\nLời giải: Buffer Overflow xảy ra khi ứng dụng ghi dữ liệu vượt quá kích thước bộ đệm, làm tràn sang các vùng nhớ khác, tạo điều kiện cho tin tặc chèn mã máy thực thi.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 86: Tấn công Replay Attack (Tấn công phát lại) là gì?\nA. Phát lại một video ca nhạc trên YouTube nhiều lần\nB. Kẻ tấn công chặn bắt một gói tin xác thực hợp lệ trên mạng và phát lại gói tin đó sau đó để giả mạo phiên đăng nhập của người dùng\nC. Khởi động lại máy tính liên tục\nD. Gửi lại cùng một email nhiều lần\nĐáp án: B\nLời giải: Replay Attack đánh cắp các gói tin xác thực hợp pháp trên đường truyền và gửi lại nguyên vẹn cho máy chủ để đánh lừa hệ thống cấp quyền truy cập.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 87: Thuật ngữ APT (Advanced Persistent Threat) thường liên quan đến đối tượng tấn công nào?\nA. Học sinh trung học mới học lập trình\nB. Các nhóm gián điệp mạng có trình độ kỹ thuật cao, được các chính phủ hoặc tổ chức tội phạm quy mô lớn tài trợ ngân sách dồi dào\nC. Người vô tình làm hỏng máy tính cá nhân\nD. Những người bán hàng rong qua mạng\nĐáp án: B\nLời giải: APT là các chiến dịch tấn công kéo dài, tinh vi, nhắm vào các mục tiêu giá trị cao của chính phủ hoặc tập đoàn lớn, đòi hỏi nguồn lực và ngân sách khổng lồ.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 88: Phương thức tấn công nào sau đây KHÔNG thuộc nhóm tấn công Social Engineering (Phi kỹ thuật)?\nA. Phishing\nB. Pretexting\nC. Buffer Overflow\nD. Dumpster Diving\nĐáp án: C\nLời giải: Buffer Overflow là lỗ hổng kỹ thuật phần mềm; trong khi Phishing, Pretexting và Dumpster Diving là các kỹ thuật tấn công phi kỹ thuật nhắm vào con người.\nChương: 2\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 89: Trong cuộc tấn công Phishing, dấu hiệu nhận biết email lừa đảo thường là gì?\nA. Lỗi chính tả, ngữ pháp bất thường trong nội dung email\nB. Địa chỉ email người gửi có tên miền gần giống nhưng không chính xác (ví dụ support@paypa1.com thay vì paypal.com)\nC. Lời lẽ khẩn cấp, đe dọa khóa tài khoản ngay lập tức nếu không hành động\nD. Tất cả các phương án trên\nĐáp án: D\nLời giải: Kẻ lừa đảo thường dùng tên miền gần giống (typosquatting), thúc ép tâm lý khẩn trương và thường có sai sót về ngữ pháp.\nChương: 2\nChủ đề: Tấn công Social Engineering & Phishing\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 90: Kỹ thuật Port Scanning (Quét cổng) được kẻ tấn công sử dụng trong giai đoạn nào của cuộc tấn công?\nA. Giai đoạn thu thập thông tin và trinh sát (Reconnaissance) nhằm tìm kiếm các dịch vụ đang mở và có khả năng bị tấn công\nB. Giai đoạn tống tiền nạn nhân\nC. Giai đoạn khôi phục dữ liệu\nD. Giai đoạn rút tiền từ tài khoản nạn nhân\nĐáp án: A\nLời giải: Quét cổng (dùng công cụ như Nmap) là bước trinh sát ban đầu giúp kẻ tấn công phát hiện các cổng mở và phiên bản dịch vụ đang chạy trên hệ thống mục tiêu.\nChương: 2\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 91: Khái niệm \"Botnet\" là gì?\nA. Một mạng xã hội dành cho robot\nB. Mạng lưới các thiết bị kết nối Internet bị nhiễm mã độc và bị kiểm soát từ xa bởi một kẻ tấn công (Botmaster)\nC. Một trò chơi điện tử trực tuyến nhiều người chơi\nD. Một loại cáp mạng có tốc độ cao\nĐáp án: B\nLời giải: Botnet là mạng lưới máy tính ma quái (Zombies) bị kẻ tấn công chỉ huy đồng loạt để thực hiện tấn công DDoS, gửi thư rác hoặc đào tiền ảo.\nChương: 2\nChủ đề: Mạng máy tính ma (Botnet)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 92: Tại sao các thiết bị nhà thông minh (IoT) thường bị tin tặc biến thành Botnet tấn công DDoS?\nA. Vì thiết bị IoT có màn hình quá nhỏ\nB. Vì thiết bị IoT thường có bảo mật kém, ít khi cập nhật phần mềm và người dùng thường để nguyên mật khẩu mặc định của nhà máy\nC. Vì thiết bị IoT tiêu tốn ít điện năng\nD. Vì thiết bị IoT chỉ chạy hệ điều hành macOS\nĐáp án: B\nLời giải: Thiết bị IoT (camera, router gia đình) thường thiếu cơ chế cập nhật tự động và người dùng không đổi thông tin đăng nhập mặc định (admin/admin), biến chúng thành mồi ngon cho mã độc như Mirai.\nChương: 2\nChủ đề: Mạng máy tính ma (Botnet)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 93: Chuẩn mã hóa Wi-Fi nào sau đây bị coi là cực kỳ lỗi thời, mất an toàn và có thể bị tin tặc bẻ khóa trong vài phút bằng công cụ dò sóng?\nA. WPA3-Enterprise\nB. WEP (Wired Equivalent Privacy)\nC. WPA2-AES\nD. IPsec\nĐáp án: B\nLời giải: WEP sử dụng thuật toán mã hóa RC4 với vector khởi tạo (IV) quá ngắn và lặp lại, khiến tin tặc có thể thu thập đủ gói tin và bẻ khóa mật khẩu chỉ trong vài phút.\nChương: 2\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 94: Phần mềm gián điệp (Spyware) thường thâm nhập vào máy tính người dùng qua con đường nào phổ biến nhất?\nA. Được cài đặt sẵn từ nhà máy của các thương hiệu máy tính lớn\nB. Đi kèm (bundle) với các phần mềm tải lậu, phần mềm bẻ khóa (crack) hoặc trò chơi miễn phí từ các trang web không rõ nguồn gốc\nC. Do hệ thống cáp mạng tự động sinh ra\nD. Tự động lây qua sóng radio FM\nĐáp án: B\nLời giải: Spyware thường được đính kèm ngầm trong các bộ cài đặt phần mềm bẻ khóa (crack/keygen) hoặc tiện ích miễn phí trôi nổi trên mạng.\nChương: 2\nChủ đề: Phần mềm gián điệp & Quảng cáo\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 95: Điều nào sau đây là hành vi đúng đắn khi nhận được một email từ ngân hàng yêu cầu nhấp vào link để cập nhật thông tin tài khoản?\nA. Nhấp vào link ngay lập tức và nhập thông tin để tránh bị khóa tài khoản\nB. Chuyển tiếp email đó cho tất cả bạn bè để cảnh báo\nC. Không nhấp vào link trong email, mở trình duyệt và tự gõ địa chỉ website chính thức của ngân hàng hoặc gọi số hotline tổng đài ngân hàng để kiểm tra\nD. Trả lời email gửi kèm mật khẩu hiện tại\nĐáp án: C\nLời giải: Ngân hàng không bao giờ yêu cầu khách hàng cung cấp mật khẩu qua liên kết email; cách an toàn nhất là chủ động truy cập website chính thức độc lập.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 96: Một cuộc tấn công Man-in-the-Middle có thể bị ngăn chặn hiệu quả nhất bằng biện pháp kỹ thuật nào sau đây?\nA. Tắt màn hình khi không sử dụng\nB. Sử dụng mã hóa đầu cuối (End-to-End Encryption) và xác thực chứng chỉ số SSL/TLS (HTTPS) hợp lệ\nC. Tăng độ sáng màn hình máy tính\nD. Đổi tên máy tính cá nhân\nĐáp án: B\nLời giải: Mã hóa SSL/TLS ngăn kẻ đứng giữa đọc được dữ liệu rõ, và chứng chỉ số (Digital Certificate) giúp người dùng phát hiện ngay nếu đang bị một kẻ giả mạo chặn đường truyền.\nChương: 2\nChủ đề: Tấn công Man-in-the-Middle (On-Path)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 97: Khái niệm \"Backdoor\" (Cổng sau) trong an ninh phần mềm là gì?\nA. Cửa thoát hiểm phía sau của phòng đặt máy chủ\nB. Cơ chế bí mật được cài cắm vào phần mềm cho phép kẻ tấn công bỏ qua các bước xác thực thông thường để truy cập hệ thống từ xa\nC. Cổng kết nối cáp mạng ở mặt sau của máy tính\nD. Lỗ thông gió của thùng máy tính\nĐáp án: B\nLời giải: Backdoor là lối vào bí mật do lập trình viên cố ý để lại hoặc do mã độc tạo ra để kẻ tấn công dễ dàng quay lại kiểm soát hệ thống bất cứ lúc nào.\nChương: 2\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 98: Tấn công từ chối dịch vụ phân tán (DDoS) khác với tấn công từ chối dịch vụ (DoS) thông thường ở điểm nào?\nA. DoS nguy hiểm hơn DDoS\nB. DoS xuất phát từ một máy tính duy nhất, trong khi DDoS xuất phát đồng thời từ hàng ngàn, hàng triệu máy tính khác nhau phân tán trên toàn cầu\nC. DDoS chỉ tấn công các trang web bán hoa\nD. DoS sử dụng botnet còn DDoS thì không\nĐáp án: B\nLời giải: Tấn công DoS chỉ dùng 1 nguồn duy nhất (dễ bị chặn IP), còn DDoS huy động hàng ngàn thiết bị zombie phân tán khắp thế giới, khiến việc phòng thủ và lọc lưu lượng khó khăn hơn gấp bội.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 99: Kỹ thuật lừa đảo mạo danh địa chỉ email người gửi (Email Spoofing) có thể thực hiện được là do giao thức gửi thư nào ban đầu vốn không có cơ chế xác thực nguồn gốc tích hợp?\nA. POP3\nB. IMAP\nC. SMTP (Simple Mail Transfer Protocol)\nD. HTTP\nĐáp án: C\nLời giải: Giao thức SMTP truyền thống không có cơ chế xác minh tính xác thực của người gửi, dẫn đến việc kẻ tấn công có thể dễ dàng điền bất kỳ địa chỉ nào vào trường \"From:\".\nChương: 2\nChủ đề: Xác thực đa yếu tố (MFA)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 100: Nhận định nào sau đây là ĐÚNG khi nói về phần mềm diệt virus (Antivirus)?\nA. Khi đã cài phần mềm diệt virus thì máy tính an toàn 100% trước mọi cuộc tấn công mạng.\nB. Phần mềm diệt virus chỉ là một lớp bảo vệ trong mô hình phòng thủ nhiều lớp, cần kết hợp với cập nhật hệ điều hành và ý thức cảnh giác của người dùng.\nC. Phần mềm diệt virus không bao giờ cần cập nhật cơ sở dữ liệu.\nD. Phần mềm diệt virus có thể ngăn chặn được kẻ trộm lấy cắp máy tính vật lý.\nĐáp án: B\nLời giải: Không có công cụ nào bảo vệ an toàn tuyệt đối 100%. Phần mềm diệt virus là lớp phòng thủ cần thiết nhưng cần cập nhật liên tục và kết hợp với hành vi sử dụng an toàn của con người.\nChương: 2\nChủ đề: Các Cuộc Tấn Công, Kỹ Thuật & Mã Độc\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 101: Công nghệ nào giúp loại bỏ trực tiếp chi phí mua sắm thiết bị phần cứng và bảo trì hạ tầng sao lưu dữ liệu cho người dùng cá nhân?\nA. Mạng cục bộ có dây (LAN)\nB. Dịch vụ lưu trữ đám mây (Cloud Service / Cloud Backup)\nC. Ổ cứng gắn ngoài USB\nD. Băng từ sao lưu (Tape Backup)\nĐáp án: B\nLời giải: Sử dụng dịch vụ lưu trữ đám mây (Cloud Service) chuyển gánh nặng chi phí mua sắm phần cứng lưu trữ và bảo trì hệ thống sang nhà cung cấp dịch vụ đám mây.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 102: Một người dùng đang sử dụng máy tính xách tay kết nối vào mạng Wi-Fi công cộng tại một quán cà phê. Điều gì nên được kiểm tra và tắt đầu tiên trên máy tính?\nA. Tắt độ sáng màn hình máy tính\nB. Kiểm tra và tắt tính năng chia sẻ tệp và máy in (File and Media / Printer Sharing)\nC. Rút dây nguồn sạc pin máy tính\nD. Tắt chuột không dây\nĐáp án: B\nLời giải: Khi kết nối vào Wi-Fi công cộng không tin cậy, việc bật tính năng chia sẻ tệp/thư mục có thể khiến người khác cùng kết nối trong mạng nhìn thấy hoặc truy cập trái phép vào tài liệu cá nhân của bạn.\nChương: 3\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 103: Làm thế nào để một nhân viên sử dụng máy tính dùng chung tại văn phòng giữ cho lịch sử duyệt web cá nhân không bị người dùng tiếp theo nhìn thấy?\nA. Bật chế độ duyệt web toàn màn hình (F11)\nB. Sử dụng chế độ duyệt web riêng tư (Private / Incognito Mode)\nC. Đổi ảnh nền máy tính sang màu đen\nD. Ngắt dây cáp mạng trước khi mở trình duyệt\nĐáp án: B\nLời giải: Chế độ duyệt web riêng tư (Incognito / InPrivate) tự động xóa lịch sử duyệt web, bộ nhớ cache và cookie ngay khi người dùng đóng tất cả các cửa sổ trình duyệt.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 104: Tại sao các thiết bị nhà thông minh (IoT) lại tạo ra rủi ro an ninh mạng lớn hơn so với máy tính cá nhân hoặc điện thoại thông minh?\nA. Vì thiết bị IoT luôn có kích thước quá nhỏ.\nB. Hầu hết các thiết bị IoT không nhận được các bản cập nhật firmware định kỳ và thường giữ nguyên cấu hình bảo mật mặc định yếu.\nC. Vì thiết bị IoT sử dụng dòng điện một chiều DC.\nD. Vì thiết bị IoT không có khả năng kết nối mạng Internet.\nĐáp án: B\nLời giải: Thiết bị IoT thường bị bỏ quên khâu cập nhật phần mềm/firmware và người dùng ít khi đổi mật khẩu mặc định của nhà máy, khiến chúng dễ bị tấn công và biến thành botnet.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 105: Một khách hàng muốn in các bức ảnh lưu trên tài khoản đám mây bằng một dịch vụ in ảnh trực tuyến của bên thứ ba. Sau khi đăng nhập vào tài khoản đám mây và cấp phép, dịch vụ in ảnh tự động có quyền truy cập vào kho ảnh mà không cần biết mật khẩu tài khoản đám mây của khách hàng. Điều gì đã cho phép xác thực này diễn ra?\nA. Dịch vụ in ảnh đã bẻ khóa mật khẩu đám mây của người dùng.\nB. Dịch vụ lưu trữ đám mây xem dịch vụ in ảnh là một ứng dụng được phê duyệt (Approved Application qua cơ chế OAuth).\nC. Máy tính của người dùng bị nhiễm mã độc Trojan.\nD. Hai dịch vụ này có chung cơ sở dữ liệu nhân viên.\nĐáp án: B\nLời giải: Đây là cơ chế ủy quyền OAuth (Delegated Authorization), trong đó dịch vụ đám mây xem dịch vụ bên thứ ba là ứng dụng được phê duyệt (approved application) và cấp access token giới hạn mà không cần lộ mật khẩu chính.\nChương: 3\nChủ đề: Xác thực đa yếu tố (MFA)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 106: Biện pháp thực hành tốt nhất để bảo vệ kết nối Bluetooth trên thiết bị di động cá nhân là gì?\nA. Luôn để Bluetooth ở chế độ phát hiện công khai (Discoverable).\nB. Luôn tắt Bluetooth khi không có nhu cầu sử dụng tích cực.\nC. Đặt tên Bluetooth là số điện thoại cá nhân.\nD. Kết nối Bluetooth với bất kỳ thiết bị nào xuất hiện xung quanh.\nĐáp án: B\nLời giải: Tắt Bluetooth khi không sử dụng giúp ngăn chặn các hình thức tấn công không dây như Bluejacking, Bluesnarfing hoặc theo dõi vị trí thiết bị.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 107: Quy tắc sao lưu dữ liệu kinh điển \"3-2-1\" bao gồm những yêu cầu nào?\nA. Giữ 3 bản sao dữ liệu, trên 2 phương tiện lưu trữ khác nhau, với ít nhất 1 bản lưu tại địa điểm khác bên ngoài (Offsite / Cloud).\nB. Sao lưu 3 lần một ngày, trong 2 giờ, lưu trên 1 ổ cứng duy nhất.\nC. Giữ 3 mật khẩu, đổi sau 2 tháng, cho 1 tài khoản.\nD. Sao lưu dữ liệu của 3 nhân viên, chia thành 2 thư mục, lưu 1 file nén.\nĐáp án: A\nLời giải: Nguyên tắc sao lưu 3-2-1: 3 bản sao dữ liệu (1 chính, 2 phụ), trên 2 loại thiết bị lưu trữ khác nhau, và 1 bản đặt ở vị trí địa lý khác (offsite/cloud) để tránh mất dữ liệu khi gặp thiên tai, hỏa hoạn.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 108: Mật khẩu nào sau đây được coi là có độ an toàn và độ mạnh cao nhất theo tiêu chuẩn bảo mật hiện đại?\nA. Password123\nB. NguyenVanA_1995\nC. Blue#Horse!Running$2026Fast\nD. 1234567890!@#$\nĐáp án: C\nLời giải: Cụm mật khẩu (Passphrase) dài trên 20 ký tự, kết hợp nhiều từ ngẫu nhiên cùng chữ hoa, chữ thường, số và ký tự đặc biệt có độ phức tạp cao, chống lại tấn công vét cạn và từ điển hiệu quả.\nChương: 3\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 109: Yếu tố xác thực \"Something you have\" (Điều bạn có) trong xác thực đa yếu tố (MFA) được minh họa bằng trường hợp nào sau đây?\nA. Mật khẩu đăng nhập tài khoản\nB. Dấu vân tay của ngón tay trỏ\nC. Khóa bảo mật phần cứng USB (Security Key) hoặc mã OTP sinh ra từ điện thoại của bạn\nD. Câu trả lời cho câu hỏi bảo mật \"Tên trường tiểu học đầu tiên của bạn\"\nĐáp án: C\nLời giải: Khóa phần cứng (FIDO key), thẻ thông minh (smartcard), hoặc điện thoại nhận OTP là những vật thể vật lý mà bạn đang sở hữu (something you have).\nChương: 3\nChủ đề: Xác thực đa yếu tố (MFA)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 110: Yếu tố xác thực \"Something you are\" (Điều bạn là) trong hệ thống an ninh bao gồm:\nA. Mã PIN 6 chữ số\nB. Dữ liệu sinh trắc học như quét mống mắt, nhận diện khuôn mặt hoặc vân tay\nC. Thẻ nhân viên công ty\nD. Tên đăng nhập tài khoản\nĐáp án: B\nLời giải: \"Something you are\" là các đặc điểm sinh học độc nhất của cơ thể con người (vân tay, khuôn mặt, mống mắt, giọng nói).\nChương: 3\nChủ đề: Xác thực đa yếu tố (MFA)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 111: Một công ty áp dụng xác thực hai yếu tố (2FA) bằng cách yêu cầu nhân viên nhập mật khẩu máy tính và sau đó nhập mã PIN 4 số. Hệ thống này có thực sự đạt chuẩn 2FA hay không?\nA. Có, vì có 2 bước nhập mã riêng biệt.\nB. Không, vì cả mật khẩu và mã PIN đều thuộc cùng một nhóm yếu tố xác thực là \"Something you know\" (Điều bạn biết).\nC. Có, vì mã PIN ngắn hơn mật khẩu.\nD. Có, nếu nhân viên đổi mã PIN mỗi ngày.\nĐáp án: B\nLời giải: Xác thực hai yếu tố thực thụ bắt buộc phải kết hợp hai nhóm yếu tố KHÁC NHAU (ví dụ: Something you know kết hợp với Something you have). Hai yếu tố cùng là \"Điều bạn biết\" không phải là 2FA chuẩn.\nChương: 3\nChủ đề: Xác thực đa yếu tố (MFA)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 112: Tính năng mã hóa toàn bộ ổ đĩa tích hợp sẵn trên hệ điều hành Windows có tên là gì?\nA. FileVault\nB. BitLocker\nC. Defender\nD. TrueCrypt\nĐáp án: B\nLời giải: BitLocker là giải pháp mã hóa toàn bộ ổ đĩa (Full Disk Encryption) được tích hợp trong các phiên bản Pro/Enterprise của Windows.\nChương: 3\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 113: Tính năng mã hóa toàn bộ ổ đĩa tích hợp sẵn trên hệ điều hành macOS của Apple có tên là gì?\nA. BitLocker\nB. FileVault\nC. Time Machine\nD. Keychain\nĐáp án: B\nLời giải: FileVault là công cụ mã hóa ổ đĩa tích hợp sẵn trên hệ điều hành macOS.\nChương: 3\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 114: Tại sao việc chỉ nhấn phím \"Delete\" và làm trống thùng rác (Empty Recycle Bin/Trash) lại KHÔNG an toàn khi bạn muốn vứt bỏ ổ cứng cũ chứa dữ liệu nhạy cảm?\nA. Vì thùng rác sẽ tự động gửi file qua email cho người khác.\nB. Vì thao tác đó chỉ xóa con trỏ quản lý tệp tin, dữ liệu thực tế vẫn còn nguyên vẹn trên đĩa từ và có thể phục hồi dễ dàng bằng phần mềm khôi phục dữ liệu.\nC. Vì máy tính sẽ bị cháy chip xử lý.\nD. Vì ổ cứng sẽ không thể tái sử dụng được nữa.\nĐáp án: B\nLời giải: Xóa thông thường chỉ đánh dấu khoảng trống là sẵn sàng ghi đè, dữ liệu gốc vẫn tồn tại trên bề mặt từ tính cho đến khi bị ghi đè hoàn toàn.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 115: Phương pháp nào sau đây đảm bảo dữ liệu trên ổ đĩa từ (HDD) bị tiêu hủy hoàn toàn mà không thể khôi phục lại được bằng bất kỳ phần mềm nào?\nA. Đổi tên toàn bộ thư mục\nB. Sử dụng máy khử từ chuyên dụng (Degaussing) hoặc máy nghiền nát vật lý (Physical Shredding)\nC. Đặt ổ cứng trong tủ lạnh 24 giờ\nD. Khởi động lại máy tính 10 lần liên tục\nĐáp án: B\nLời giải: Khử từ (Degaussing) phá hủy từ tính chứa dữ liệu hoặc nghiền nát vật lý ổ đĩa là các biện pháp tiêu hủy dữ liệu triệt để nhất được khuyến nghị.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 116: Khi cấu hình một Router Wi-Fi gia đình mới mua, hành động quan trọng hàng đầu cần thực hiện ngay là gì?\nA. Đổi màu đèn LED trên vỏ thiết bị\nB. Thay đổi ngay tên tài khoản và mật khẩu quản trị (admin password) mặc định của nhà sản xuất\nC. Cắt bớt độ dài dây ăng-ten phát sóng\nD. Cắm dây mạng vào tất cả các cổng còn trống\nĐáp án: B\nLời giải: Mật khẩu mặc định của router (như admin/admin) được công khai trên Internet; nếu không đổi, bất kỳ ai kết nối vào mạng đều có thể chiếm quyền điều khiển router.\nChương: 3\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 117: Chuẩn mã hóa bảo mật không dây nào được khuyến nghị sử dụng hiện nay trên các mạng Wi-Fi gia đình và doanh nghiệp?\nA. WEP\nB. WPA-TKIP\nC. WPA2-AES hoặc WPA3\nD. Không đặt mật khẩu để tốc độ nhanh hơn\nĐáp án: C\nLời giải: WPA2 với thuật toán AES và WPA3 là các chuẩn mã hóa Wi-Fi mạnh mẽ, có khả năng chống lại các cuộc tấn công bẻ khóa mật mã hiện đại.\nChương: 3\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 118: Lợi ích chính của việc thiết lập mạng khách (Guest Network) trên Router Wi-Fi gia đình là gì?\nA. Giúp khách có tốc độ Internet nhanh gấp đôi chủ nhà\nB. Cách ly các thiết bị của khách và các thiết bị IoT kém an toàn khỏi mạng nội bộ chính, bảo vệ máy tính và dữ liệu quan trọng của gia đình\nC. Tự động xóa dữ liệu trên điện thoại của khách\nD. Giúp router tiết kiệm điện năng\nĐáp án: B\nLời giải: Guest Network tách biệt lưu lượng mạng, ngăn không cho khách hoặc các thiết bị thông minh bị hack có thể quét và thâm nhập vào máy tính cá nhân của chủ nhà.\nChương: 3\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 119: Tại sao bạn nên thận trọng khi cấp quyền truy cập vị trí địa lý (GPS) cho các ứng dụng trò chơi hoặc chỉnh sửa ảnh trên điện thoại?\nA. Vì GPS làm màn hình điện thoại bị tối đi\nB. Vì việc theo dõi vị trí liên tục làm lộ thông tin thói quen di chuyển, địa chỉ nhà ở và nơi làm việc, xâm phạm quyền riêng tư nghiêm trọng\nC. Vì ứng dụng sẽ tự động chụp ảnh bạn\nD. Vì điện thoại sẽ bị mất sóng 4G\nĐáp án: B\nLời giải: Dữ liệu định vị phản ánh cuộc sống thực tế của bạn; việc chia sẻ dữ liệu vị trí không cần thiết tạo cơ hội cho kẻ xấu theo dõi hoặc bên thứ ba thu thập dữ liệu bất chính.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 120: Công nghệ Mạng riêng ảo (VPN - Virtual Private Network) bảo vệ người dùng khi sử dụng Wi-Fi công cộng bằng cách nào?\nA. Tự động diệt sạch virus trên máy chủ quán cà phê\nB. Tạo ra một đường hầm mã hóa an toàn (Encrypted Tunnel) cho toàn bộ dữ liệu truyền giữa thiết bị của người dùng và máy chủ VPN\nC. Ngăn không cho người khác nhìn vào màn hình máy tính của bạn\nD. Tăng dung lượng pin cho máy tính xách tay\nĐáp án: B\nLời giải: VPN mã hóa toàn bộ dữ liệu ra vào thiết bị, khiến bất kỳ kẻ nào nghe lén trên cùng mạng Wi-Fi công cộng chỉ thấy được các gói tin mã hóa vô nghĩa.\nChương: 3\nChủ đề: Mạng riêng ảo (VPN & IPsec)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 121: Phần mềm quản lý mật khẩu (Password Manager) mang lại lợi ích bảo mật nào nổi bật nhất?\nA. Tự động gửi mật khẩu của bạn lên diễn đàn để sao lưu\nB. Giúp tạo và lưu trữ an toàn các mật khẩu dài, phức tạp, duy nhất cho từng trang web mà người dùng chỉ cần nhớ một Mật khẩu chủ (Master Password) duy nhất\nC. Cho phép bạn không cần dùng mật khẩu nữa\nD. Giúp tăng tốc độ đánh máy văn bản\nĐáp án: B\nLời giải: Password Manager loại bỏ thói quen dùng chung một mật khẩu đơn giản, lưu trữ tất cả mật khẩu phức tạp trong kho mã hóa an toàn.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 122: \"Dấu chân số thụ động\" (Passive Digital Footprint) được tạo ra khi nào?\nA. Khi bạn chủ động đăng bài viết hoặc tải video lên trang cá nhân\nB. Khi thông tin về bạn được thu thập mà bạn không trực tiếp chủ ý thực hiện (ví dụ: máy chủ ghi nhận địa chỉ IP của bạn khi bạn ghé thăm một trang web)\nC. Khi bạn tắt máy tính đi ngủ\nD. Khi bạn mua bàn phím mới\nĐáp án: B\nLời giải: Dấu chân số thụ động được ghi lại âm thầm trong nền (địa chỉ IP, cookies, lịch sử click chuột, thời gian dừng trên trang) mà người dùng không chủ động gửi.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 123: Cookie của trình duyệt web là gì?\nA. Một loại bánh ăn vặt khi làm việc với máy tính\nB. Tệp văn bản nhỏ do trang web lưu trên máy tính người dùng để ghi nhớ thông tin phiên đăng nhập, tùy chọn cá nhân và theo dõi hành vi duyệt web\nC. Một loại virus máy tính chuyên phá hoại tệp văn bản\nD. Phần mềm tăng tốc card đồ họa\nĐáp án: B\nLời giải: Cookie lưu trữ thông tin trạng thái duyệt web. Dù tiện lợi cho đăng nhập, cookie của bên thứ ba (Third-party cookies) thường bị lợi dụng để theo dõi người dùng xuyên suốt các website.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 124: Khi một trang web hỏi: \"Bạn có muốn lưu thông tin thẻ tín dụng cho lần mua sắm tiếp theo không?\", lựa chọn an toàn nhất xét theo góc độ an ninh dữ liệu là gì?\nA. Đồng ý lưu để tiện lợi lần sau\nB. Không lưu thông tin thẻ trên trang web đó\nC. Gửi thêm cả mật khẩu thẻ cho trang web\nD. Chụp ảnh hai mặt thẻ gửi qua hộp thư hỗ trợ\nĐáp án: B\nLời giải: Không lưu thông tin thanh toán giúp bảo vệ bạn nếu cơ sở dữ liệu của trang web thương mại điện tử đó bị tin tặc tấn công trong tương lai.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 125: Tại sao việc tự động kết nối (Auto-Connect) vào các mạng Wi-Fi mở không có mật khẩu lại là một thói quen nguy hiểm trên điện thoại?\nA. Vì điện thoại sẽ bị hao pin rất nhanh\nB. Vì điện thoại có thể tự động kết nối vào các điểm phát sóng độc hại (Evil Twin) do tin tặc dựng sẵn mà người dùng không hề hay biết\nC. Vì màn hình điện thoại sẽ bị đơ cảm ứng\nD. Vì danh bạ điện thoại sẽ tự động bị xóa sạch\nĐáp án: B\nLời giải: Kẻ xấu có thể tạo Wi-Fi giả trùng tên với các điểm công cộng phổ biến (như \"Free Airport WiFi\"), điện thoại có tính năng tự kết nối sẽ vô tình nhảy vào bẫy nghe lén.\nChương: 3\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 126: Điều nào sau đây là rủi ro bảo mật chính khi thực hiện \"Jailbreak\" (trên iOS) hoặc \"Root\" (trên Android) thiết bị di động?\nA. Bạn không thể thay đổi hình nền điện thoại nữa\nB. Gỡ bỏ các cơ chế kiểm soát bảo mật và phân vùng an toàn (Sandbox) của hệ điều hành, khiến mã độc dễ dàng chiếm toàn quyền điều khiển thiết bị\nC. Bàn phím gõ tiếng Việt bị lỗi\nD. Không thể gọi điện thoại được nữa\nĐáp án: B\nLời giải: Jailbreak/Root phá vỡ mô hình hộp cát (Sandboxing) của hệ điều hành, cho phép ứng dụng độc hại vượt rào kiểm soát để đọc trộm dữ liệu của mọi ứng dụng khác.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 127: Khi duyệt web, nếu bạn thấy trình duyệt cảnh báo \"Kết nối của bạn không phải là kết nối riêng tư\" (Your connection is not private / SSL Certificate Error), bạn nên làm gì?\nA. Tiếp tục truy cập bất chấp cảnh báo vì cảnh báo đó luôn là giả\nB. Dừng truy cập ngay lập tức, vì trang web có thể đang bị giả mạo hoặc có kẻ đang cố gắng thực hiện cuộc tấn công Man-in-the-Middle nghe lén thông tin\nC. Tắt phần mềm diệt virus rồi tải lại trang\nD. Nhập ngay số thẻ ngân hàng để kiểm tra tính năng bảo mật\nĐáp án: B\nLời giải: Lỗi chứng chỉ SSL cho thấy kết nối không được xác thực hoặc đang bị giải mã bởi bên thứ ba trên đường truyền, không an toàn để tiếp tục.\nChương: 3\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 128: Thuật toán mã hóa đối xứng (Symmetric Encryption) có đặc điểm nào sau đây?\nA. Sử dụng hai khóa hoàn toàn khác nhau để mã hóa và giải mã\nB. Sử dụng cùng một khóa bí mật duy nhất cho cả quá trình mã hóa và giải mã dữ liệu\nC. Không bao giờ cần đến khóa\nD. Chỉ có thể mã hóa các tệp có dung lượng dưới 1 MB\nĐáp án: B\nLời giải: Mã hóa đối xứng (như AES, DES) dùng chung một khóa (Secret Key) để khóa và mở dữ liệu. Ưu điểm là tốc độ xử lý rất nhanh.\nChương: 3\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 129: Thuật toán mã hóa bất đối xứng (Asymmetric Encryption) sử dụng cặp khóa nào?\nA. Khóa vàng và Khóa bạc\nB. Khóa công khai (Public Key) và Khóa bí mật (Private Key)\nC. Khóa phần cứng và Khóa phần mềm\nD. Khóa nội bộ và Khóa bên ngoài\nĐáp án: B\nLời giải: Mã hóa bất đối xứng (như RSA) sử dụng Public Key để mã hóa (ai cũng có thể biết) và Private Key để giải mã (chỉ chủ sở hữu giữ bí mật).\nChương: 3\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 130: Một bức ảnh kỹ thuật số chụp bằng điện thoại thông minh thường chứa siêu dữ liệu ẩn (EXIF Metadata). Dữ liệu này có thể làm lộ thông tin nhạy cảm nào sau đây?\nA. Tọa độ vị trí địa lý GPS chính xác nơi chụp bức ảnh, ngày giờ chụp và dòng máy ảnh\nB. Mật khẩu tài khoản ngân hàng của người chụp\nC. Danh bạ điện thoại của người chụp\nD. Số dư tài khoản điện thoại\nĐáp án: A\nLời giải: Dữ liệu EXIF nhúng trong tệp ảnh chứa vị trí GPS, thời gian và thông số thiết bị, có thể làm lộ địa chỉ nhà riêng nếu đăng tải ảnh gốc lên mạng công cộng.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 131: Phương pháp \"Over-the-Air\" (OTA) Update trên điện thoại di động đề cập đến việc gì?\nA. Cập nhật qua sóng phát thanh radio AM\nB. Cập nhật hệ điều hành và các bản vá bảo mật trực tiếp thông qua kết nối mạng không dây (Wi-Fi/4G/5G) mà không cần cắm cáp vào máy tính\nC. Cập nhật phần mềm bằng cách mang ra cửa hàng sửa chữa\nD. Cập nhật mật khẩu qua tin nhắn SMS\nĐáp án: B\nLời giải: Cập nhật OTA cho phép người dùng tải và cài đặt bản vá bảo mật từ máy chủ nhà sản xuất trực tiếp qua kết nối không dây.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 132: Đâu là một hành vi sử dụng mạng xã hội AN TOÀN để bảo vệ sự an toàn cá nhân và gia đình?\nA. \"Check-in\" địa điểm trực tiếp theo thời gian thực và thông báo cả nhà đang đi nghỉ mát vắng nhà 2 tuần\nB. Không chia sẻ lịch trình đi lại, chỉ đăng ảnh sau khi đã kết thúc chuyến du lịch và thiết lập chế độ bài viết chỉ bạn bè thân thiết xem được\nC. Kết bạn với tất cả người lạ trên mạng xã hội để tăng tương tác\nD. Công khai số điện thoại và địa chỉ nhà trên phần giới thiệu\nĐáp án: B\nLời giải: Thông báo vắng nhà trên mạng xã hội tạo điều kiện cho kẻ trộm đột nhập; bảo vệ quyền riêng tư đòi hỏi giới hạn đối tượng xem và không lộ lịch trình thời gian thực.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 133: Tùy chọn \"Do Not Track\" (Không theo dõi) trong cài đặt trình duyệt web có ý nghĩa gì?\nA. Chặn hoàn toàn 100% tất cả các trang web không cho người dùng lướt web\nB. Gửi yêu cầu đến các trang web đề nghị họ không theo dõi hoặc thu thập dữ liệu hành vi của người dùng (tuy nhiên việc tuân thủ phụ thuộc vào chính sách của từng website)\nC. Xóa sạch ổ đĩa cứng khi đóng trình duyệt\nD. Làm cho chuột máy tính không di chuyển được\nĐáp án: B\nLời giải: Tùy chọn \"Do Not Track\" gửi một tín hiệu HTTP header yêu cầu máy chủ web không theo dõi người dùng, mặc dù không phải website nào cũng bắt buộc tuân theo.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 134: Tại sao bạn không nên dùng cổng sạc USB công cộng tại sân bay hoặc trung tâm thương mại mà không có thiết bị bảo vệ?\nA. Vì cổng sạc có thể làm nổ pin điện thoại\nB. Nguy cơ bị tấn công \"Juice Jacking\" - kẻ xấu có thể lợi dụng các đường dây truyền dữ liệu trong cổng USB để truyền mã độc vào điện thoại hoặc sao chép dữ liệu ngầm\nC. Vì cổng USB đó chỉ dành cho máy tính xách tay\nD. Vì điện áp ở sân bay quá yếu\nĐáp án: B\nLời giải: Cáp USB truyền cả điện năng lẫn dữ liệu. Cuộc tấn công \"Juice Jacking\" lợi dụng cổng sạc giả mạo để xâm nhập vào bộ nhớ điện thoại khi nạn nhân cắm sạc.\nChương: 3\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 135: Thiết bị bảo vệ \"USB Data Blocker\" (còn gọi là USB Condom) có tác dụng gì khi sạc điện thoại nơi công cộng?\nA. Ngăn điện thoại bị quá nhiệt\nB. Ngắt vật lý các chân truyền dữ liệu trong đầu nối USB, chỉ cho phép dòng điện chạy qua để sạc pin, ngăn chặn triệt để nguy cơ đánh cắp dữ liệu\nC. Tăng tốc độ sạc pin gấp 10 lần\nD. Tự động sao lưu tin nhắn vào đám mây\nĐáp án: B\nLời giải: USB Data Blocker vô hiệu hóa các chân pin truyền dữ liệu (D+ và D-), biến cổng kết nối thành đường sạc nguồn điện thuần túy an toàn.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 136: Khi một ứng dụng đèn pin (Flashlight) đơn giản trên điện thoại yêu cầu quyền truy cập vào: Danh bạ, Vị trí GPS, và Micro ghi âm, bạn nên phản ứng như thế nào?\nA. Cấp tất cả các quyền vì ứng dụng nào cũng cần như vậy\nB. Từ chối cấp các quyền vô lý này và gỡ cài đặt ứng dụng ngay lập tức, vì đó là dấu hiệu rõ ràng của phần mềm gián điệp thu thập dữ liệu bất chính\nC. Nạp thêm tiền cho ứng dụng\nD. Chia sẻ ứng dụng cho bạn bè\nĐáp án: B\nLời giải: Nguyên tắc đặc quyền tối thiểu (Least Privilege): Một ứng dụng đèn pin chỉ cần quyền điều khiển đèn flash camera, việc đòi hỏi danh bạ hay micro là hành vi bất thường của phần mềm độc hại.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 137: Ứng dụng xác thực độc lập (Authenticator App như Google Authenticator, Microsoft Authenticator) an toàn hơn nhận mã OTP qua tin nhắn SMS truyền thống vì lý do nào sau đây?\nA. Vì SMS có thể bị kẻ tấn công chiếm đoạt thông qua tấn công tráo SIM (SIM Swapping) hoặc nghe lén mạng viễn thông SS7\nB. Vì điện thoại không thể nhận tin nhắn SMS khi đi ngủ\nC. Vì tin nhắn SMS luôn tốn phí 10 USD mỗi tin\nD. Vì ứng dụng Authenticator không cần màn hình hiển thị\nĐáp án: A\nLời giải: Kỹ thuật SIM Swapping (lừa nhà mạng cấp lại SIM) cho phép tin tặc chuyển hướng tin nhắn SMS OTP của nạn nhân sang máy của chúng. Ứng dụng Authenticator sinh mã trực tiếp trên thiết bị (TOTP) nên an toàn hơn nhiều.\nChương: 3\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 138: Phương thức tấn công \"SIM Swapping\" (Tráo SIM) diễn ra như thế nào?\nA. Kẻ trộm giật điện thoại của nạn nhân trên đường phố\nB. Kẻ tấn công thu thập thông tin cá nhân của nạn nhân, sau đó mạo danh nạn nhân liên hệ với nhà mạng viễn thông để yêu cầu chuyển số điện thoại sang một thẻ SIM mới nằm trong tay kẻ tấn công\nC. Kẻ tấn công cắm hai thẻ SIM vào cùng một máy\nD. Kẻ tấn công bẻ gãy thẻ SIM của nạn nhân\nĐáp án: B\nLời giải: SIM Swapping sử dụng kỹ thuật Social Engineering nhắm vào nhân viên nhà mạng viễn thông để chiếm đoạt số điện thoại nạn nhân nhằm vượt qua các lớp bảo mật OTP SMS.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 139: Điều nào sau đây mô tả đúng nhất về \"Cụm mật khẩu\" (Passphrase)?\nA. Một từ tiếng Anh dài 4 chữ cái\nB. Một chuỗi gồm nhiều từ có nghĩa ghép lại với nhau (ví dụ: \"MatTroiMocOPhuongDong#2026\"), tạo nên độ dài lớn và cực kỳ khó bị máy tính bẻ khóa nhưng lại rất dễ nhớ đối với con người\nC. Mật mã chỉ dùng chữ số từ 0 đến 9\nD. Mật khẩu do hệ điều hành tự động đặt ngẫu nhiên và không cho phép thay đổi\nĐáp án: B\nLời giải: Passphrase là phương pháp đặt mật khẩu hiện đại kết hợp nhiều từ ngữ, vừa đảm bảo độ dài an toàn vượt trội, vừa giúp người dùng dễ ghi nhớ.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 140: Tại sao việc sử dụng câu trả lời thật cho các câu hỏi bảo mật phổ biến (ví dụ: \"Tên thời con gái của mẹ bạn là gì?\") lại tiềm ẩn rủi ro lớn?\nA. Vì ngân hàng không thích các câu trả lời thật\nB. Vì những thông tin này thường có thể dễ dàng tìm kiếm được trên mạng xã hội (Facebook) hoặc các hồ sơ công khai của bạn và gia đình\nC. Vì bộ nhớ máy tính không lưu được chữ tiếng Việt\nD. Vì mẹ bạn có thể quên tên thời con gái\nĐáp án: B\nLời giải: Kẻ tấn công có thể nghiên cứu trang cá nhân của bạn để tìm ra ngày sinh, trường học cũ, tên thú cưng hoặc gia đình nhằm bẻ khóa các câu hỏi bảo mật.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 141: Khi sử dụng mạng Wi-Fi tại một khách sạn, bạn thấy có hai mạng có tên gần giống nhau: \"Hotel_Guest\" và \"Hotel_Guest_FREE\". Bạn nên làm gì?\nA. Chọn mạng \"Hotel_Guest_FREE\" vì nó có thêm chữ FREE\nB. Hỏi trực tiếp quầy lễ tân khách sạn để xác nhận chính xác tên mạng và mật khẩu chính thức của khách sạn\nC. Kết nối thử cả hai mạng cùng lúc\nD. Tắt máy tính ngay lập tức và trả phòng khách sạn\nĐáp án: B\nLời giải: Sự xuất hiện của hai tên mạng tương tự là dấu hiệu cảnh báo mạng Wi-Fi giả mạo (Evil Twin). Luôn xác nhận với nhân viên quản lý địa điểm trước khi kết nối.\nChương: 3\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 142: Khái niệm \"Data at Rest Encryption\" có nghĩa là gì?\nA. Mã hóa dữ liệu khi người dùng đang ngủ\nB. Mã hóa dữ liệu khi nó đang được lưu trữ tĩnh trên các phương tiện lưu trữ như ổ cứng, thẻ nhớ, cơ sở dữ liệu hoặc máy chủ đám mây\nC. Mã hóa dữ liệu truyền qua cáp mạng\nD. Xóa dữ liệu sau giờ làm việc\nĐáp án: B\nLời giải: Data at Rest là dữ liệu đang nằm yên trên phương tiện lưu trữ; mã hóa Data at Rest bảo vệ dữ liệu nếu thiết bị lưu trữ bị đánh cắp vật lý.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 143: Hành động nào sau đây giúp giảm thiểu việc để lại dấu chân số (Digital Footprint) không cần thiết?\nA. Đăng ký tài khoản trên tất cả các diễn đàn trực tuyến\nB. Thường xuyên rà soát và xóa các tài khoản trực tuyến cũ không còn sử dụng, hủy đăng ký nhận email rác và xóa lịch sử duyệt web\nC. Đăng mọi hoạt động hàng ngày lên mạng xã hội\nD. Điền khảo sát nhận quà ở mọi trang web\nĐáp án: B\nLời giải: Xóa các tài khoản trực tuyến không dùng giúp thu hẹp phạm vi dữ liệu cá nhân bị phân tán và giảm nguy cơ bị lộ khi các dịch vụ cũ đó bị rò rỉ dữ liệu.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 144: Phần mềm chống phần mềm độc hại (Anti-malware) sử dụng phương pháp \"Phân tích hành vi\" (Heuristic Analysis) để làm gì?\nA. Đo nhịp tim của người sử dụng máy tính\nB. Phát hiện các biến thể mã độc mới chưa từng biết đến trước đây dựa trên các đặc điểm cấu trúc và hành vi đáng ngờ của tập tin\nC. Tự động gửi thư chúc mừng sinh nhật\nD. Xếp loại hành vi đạo đức của nhân viên\nĐáp án: B\nLời giải: Khác với quét mẫu chữ ký cố định (Signature-based), phân tích Heuristic tìm kiếm các mẫu hành vi bất thường giúp phát hiện cả những mã độc mới xuất hiện (Zero-day).\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 145: Tại sao việc sao lưu dữ liệu lên đám mây (Cloud) lại an toàn hơn trước các cuộc tấn công của mã độc tống tiền (Ransomware) so với việc cắm thường trực một ổ cứng di động vào máy tính?\nA. Vì Ransomware không biết Internet là gì\nB. Vì nếu ổ cứng di động cắm liên tục vào máy, Ransomware sẽ mã hóa luôn cả dữ liệu trên ổ sao lưu đó; trong khi dịch vụ đám mây có cơ chế phân tách và lưu trữ phiên bản lịch sử (Versioning)\nC. Vì đám mây không thể bị mất điện\nD. Vì ổ cứng di động luôn bị nóng\nĐáp án: B\nLời giải: Ransomware sẽ quét và mã hóa tất cả các ổ đĩa đang kết nối vật lý với máy tính. Bản sao lưu đám mây hỗ trợ tính năng Versioning cho phép khôi phục lại thời điểm trước khi bị nhiễm mã độc.\nChương: 3\nChủ đề: Mã độc Ransomware\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 146: Điều khoản dịch vụ (Terms of Service) và Chính sách quyền riêng tư (Privacy Policy) của một website thông báo cho người dùng điều gì?\nA. Bảng giá linh kiện máy tính\nB. Cách thức tổ chức đó thu thập, lưu trữ, sử dụng và chia sẻ thông tin cá nhân của người dùng với các bên thứ ba\nC. Dự báo thời tiết ngày mai\nD. Mẹo chơi trò chơi điện tử\nĐáp án: B\nLời giải: Chính sách quyền riêng tư là văn bản pháp lý quy định rõ dữ liệu nào của bạn sẽ bị thu thập và được xử lý ra sao khi bạn sử dụng dịch vụ.\nChương: 3\nChủ đề: Bảo vệ quyền riêng tư & Dữ liệu PII\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 147: Điều nào sau đây là một dấu hiệu rõ ràng cho thấy máy tính của bạn có thể đã bị nhiễm phần mềm gián điệp hoặc mã độc?\nA. Máy tính hoạt động rất mượt mà và mát mẻ\nB. Trang chủ trình duyệt tự động bị đổi sang trang web lạ, quảng cáo pop-up xuất hiện liên tục ngay cả khi không mở trình duyệt, máy chạy rất chậm bất thường\nC. Pin máy tính dùng được lâu hơn\nD. Tốc độ gõ phím nhanh hơn\nĐáp án: B\nLời giải: Các hiện tượng máy tính chậm đột ngột, quạt chạy tối đa, trang chủ bị đổi hướng và pop-up quảng cáo là dấu hiệu điển hình của việc bị nhiễm Adware/Spyware.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 148: Trong trình duyệt web, tính năng \"Chặn phần tử theo dõi của bên thứ ba\" (Block Third-Party Tracking Cookies) giúp ích gì?\nA. Ngăn các công ty quảng cáo theo dõi hành vi lướt web của bạn trên nhiều trang web khác nhau\nB. Làm cho hình ảnh trên trang web bị biến mất hoàn toàn\nC. Ngăn cản việc xem video trực tuyến\nD. Tắt âm thanh của loa máy tính\nĐáp án: A\nLời giải: Chặn cookie bên thứ ba giúp bảo vệ quyền riêng tư bằng cách ngăn các mạng lưới quảng cáo thu thập hồ sơ sở thích của bạn qua nhiều website liên kết.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 149: Tại sao việc sử dụng cùng một mật khẩu cho cả tài khoản email cá nhân, tài khoản ngân hàng và các diễn đàn mạng xã hội là hành vi cực kỳ rủi ro?\nA. Vì bạn sẽ rất nhanh quên mật khẩu\nB. Nếu một diễn đàn nhỏ có bảo mật kém bị tin tặc tấn công làm lộ mật khẩu, kẻ tấn công sẽ dùng chính mật khẩu đó để thử đăng nhập và chiếm đoạt luôn tài khoản email và ngân hàng của bạn (Credential Stuffing)\nC. Vì các trang web sẽ từ chối mật khẩu trùng lặp\nD. Vì bàn phím sẽ bị mòn các phím bấm đó\nĐáp án: B\nLời giải: Cuộc tấn công Credential Stuffing lợi dụng thói quen dùng chung mật khẩu: tin tặc lấy thông tin rò rỉ từ một trang web yếu để chiếm đoạt các tài khoản quan trọng khác của nạn nhân.\nChương: 3\nChủ đề: Bảo Vệ Dữ Liệu, Mật Mã Học & Quyền Riêng Tư\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 150: Hành vi nào sau đây giúp bạn bảo vệ sự riêng tư tốt nhất khi sử dụng webcam hoặc micro tích hợp trên máy tính xách tay?\nA. Mở webcam 24/7 để giám sát phòng ngủ\nB. Sử dụng nắp trượt che webcam vật lý (Webcam Cover) khi không dùng và kiểm tra quyền truy cập camera/micro trong cài đặt quyền riêng tư của hệ điều hành\nC. Dán băng keo trong suốt lên webcam\nD. Tắt màn hình máy tính nhưng vẫn cắm sạc\nĐáp án: B\nLời giải: Nắp che webcam vật lý là giải pháp phòng vệ chắc chắn nhất ngăn chặn phần mềm độc hại chụp ảnh hoặc quay lén người dùng mà không cần phụ thuộc vào đèn báo tín hiệu phần mềm.\nChương: 3\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 151: Điểm khác biệt căn bản nhất giữa Hệ thống Phát hiện Xâm nhập (IDS) và Hệ thống Ngăn ngừa Xâm nhập (IPS) là gì?\nA. IDS hoạt động trên hệ điều hành Windows, còn IPS chạy trên Linux.\nB. IDS là hệ thống giám sát thụ động gửi cảnh báo (Alert) cho quản trị viên, trong khi IPS được đặt trực tiếp trên đường truyền (Inline) và chủ động chặn hoặc loại bỏ (Drop/Block) lưu lượng độc hại theo thời gian thực.\nC. IDS chặn được virus, còn IPS chỉ chặn được thư rác.\nD. IDS đắt hơn IPS rất nhiều.\nĐáp án: B\nLời giải: Cisco NetAcad phân biệt rõ: IDS là giải pháp thụ động (out-of-band), phát hiện và cảnh báo nhưng không can thiệp luồng gói tin; trong khi IPS là giải pháp chủ động (inline), có khả năng chặn đứng các gói tin tấn công ngay lập tức.\nChương: 4\nChủ đề: Hệ thống IDS / IPS\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 152: Tường lửa lọc gói tin truyền thống (Packet-Filtering Firewall) kiểm tra lưu lượng mạng dựa trên các thông tin nào?\nA. Tên và họ của người đang gửi email\nB. Địa chỉ IP nguồn/đích, số cổng (Port) nguồn/đích và giao thức mạng (TCP, UDP, ICMP) ở Tầng 3 và Tầng 4\nC. Toàn bộ nội dung văn bản bên trong tệp tài liệu đính kèm\nD. Tốc độ quay của quạt tản nhiệt máy chủ\nĐáp án: B\nLời giải: Tường lửa lọc gói đơn giản kiểm tra tiêu đề gói tin ở Layer 3 (IP) và Layer 4 (Port, Protocol) để quyết định cho qua (allow) hoặc từ chối (deny) theo bảng Access Control List (ACL).\nChương: 4\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 153: Tường lửa kiểm tra trạng thái (Stateful Inspection Firewall) có ưu điểm vượt trội nào so với tường lửa lọc gói không trạng thái (Stateless)?\nA. Có khả năng tự động sửa chữa phần cứng bị hỏng\nB. Theo dõi trạng thái của toàn bộ phiên kết nối đang hoạt động trong bảng trạng thái (State Table), cho phép các gói tin phản hồi hợp lệ tự động đi qua mà không cần mở cổng thủ công\nC. Tăng gấp đôi băng thông đường truyền Internet của công ty\nD. Tự động mã hóa màn hình máy tính của nhân viên\nĐáp án: B\nLời giải: Tường lửa Stateful theo dõi ngữ cảnh phiên kết nối; nếu một máy trạm nội bộ khởi tạo kết nối ra ngoài, tường lửa sẽ tự động cho phép gói tin trả lời tương ứng từ Internet quay lại.\nChương: 4\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 154: Tường lửa thế hệ mới (NGFW - Next-Generation Firewall) có khả năng thực hiện điều gì mà tường lửa truyền thống không làm được?\nA. Thay thế nguồn điện của phòng máy chủ khi mất điện\nB. Kiểm tra sâu gói tin (DPI - Deep Packet Inspection) ở Tầng ứng dụng (Layer 7), nhận diện chính xác ứng dụng và người dùng, tích hợp IPS và kiểm soát phần mềm độc hại\nC. Tự động in các báo cáo tài chính cuối tháng\nD. Kết nối trực tiếp vào vệ tinh không gian\nĐáp án: B\nLời giải: NGFW phân tích đến tầng ứng dụng (L7), có thể phân biệt lưu lượng mạng cụ thể (như cho phép dùng Skype nhắn tin nhưng chặn gọi video) và tích hợp các tính năng phòng thủ nâng cao.\nChương: 4\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 155: Thiết bị Quản lý Mối đe dọa Hợp nhất (UTM - Unified Threat Management) là gì?\nA. Một máy in đa chức năng có kết nối Wi-Fi\nB. Một thiết bị bảo mật tất cả trong một (All-in-One), tích hợp nhiều chức năng như tường lửa, VPN, IDS/IPS, chống virus mạng, lọc nội dung web và chống spam vào một thiết bị duy nhất\nC. Một phần mềm quản lý chấm công nhân viên\nD. Một loại cáp mạng có gắn chip bảo mật\nĐáp án: B\nLời giải: Thiết bị UTM kết hợp toàn bộ các giải pháp an ninh mạng cơ bản vào một nền tảng phần cứng duy nhất, rất phổ biến ở các doanh nghiệp vừa và nhỏ (SMB) vì tính tiện lợi và tiết kiệm chi phí.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 156: Trong kiến trúc mạng an toàn, vùng DMZ (Demilitarized Zone - Vùng phi quân sự) được dùng để làm gì?\nA. Nơi đặt bàn làm việc của nhân viên bảo vệ\nB. Phân đoạn mạng cô lập nằm giữa Internet và mạng nội bộ tin cậy (LAN), dùng để đặt các máy chủ cung cấp dịch vụ công khai ra ngoài (Web, Mail, DNS) nhằm ngăn kẻ tấn công xâm nhập trực tiếp vào mạng nội bộ nếu máy chủ công cộng bị chiếm quyền\nC. Khu vực cất giữ tiền mặt của công ty\nD. Nơi lưu trữ toàn bộ bản sao lưu mật của giám đốc\nĐáp án: B\nLời giải: Vùng DMZ cho phép người dùng Internet truy cập các dịch vụ công cộng mà không được phép đi sâu vào mạng LAN nội bộ, hạn chế thiệt hại nếu máy chủ web bị xâm nhập.\nChương: 4\nChủ đề: Phân đoạn mạng & Vùng DMZ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 157: Chiến lược \"Phòng thủ theo chiều sâu\" (Defense-in-Depth) trong an ninh tổ chức có nghĩa là gì?\nA. Xây dựng phòng máy chủ thật sâu dưới lòng đất để tránh động đất\nB. Triển khai nhiều lớp bảo mật độc lập và bổ trợ lẫn nhau (vật lý, mạng, máy chủ, ứng dụng, dữ liệu), đảm bảo nếu một lớp phòng thủ bị chọc thủng thì các lớp tiếp theo vẫn bảo vệ được hệ thống\nC. Mua thiết bị mạng đắt tiền nhất từ một nhà cung cấp duy nhất\nD. Cài đặt 10 phần mềm diệt virus khác nhau trên cùng một máy tính\nĐáp án: B\nLời giải: Defense-in-Depth là nguyên lý phòng thủ nhiều lớp: không phụ thuộc vào bất kỳ một cơ chế bảo vệ duy nhất nào; kẻ tấn công phải vượt qua nhiều rào cản liên tiếp mới tiếp cận được tài sản lõi.\nChương: 4\nChủ đề: Phòng thủ theo chiều sâu (Defense-in-Depth)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 158: Mô hình kiến trúc \"Zero Trust\" dựa trên nguyên tắc cốt lõi nào sau đây?\nA. Luôn tin tưởng tất cả các thiết bị nằm bên trong mạng nội bộ\nB. \"Never trust, always verify\" (Không bao giờ tin tưởng, luôn luôn xác minh) - mọi yêu cầu truy cập từ bên trong hay bên ngoài mạng đều phải được xác thực, phân quyền và mã hóa nghiêm ngặt\nC. Tin tưởng tuyệt đối nhân viên lâu năm của công ty\nD. Không sử dụng mật khẩu trên bất kỳ máy chủ nào\nĐáp án: B\nLời giải: Zero Trust giả định rằng mối đe dọa luôn tồn tại cả bên trong lẫn bên ngoài ranh giới mạng, do đó mọi thiết bị và người dùng đều phải được kiểm tra danh tính và phân quyền liên tục.\nChương: 4\nChủ đề: Kiến trúc Zero Trust\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 159: Honeypot (Máy chủ mồi nhử) được triển khai trong mạng doanh nghiệp nhằm mục đích gì?\nA. Cung cấp mạng Wi-Fi miễn phí cho khách hàng\nB. Đóng vai trò là hệ thống có chủ ý để lộ các điểm yếu nhằm thu hút, đánh lạc hướng kẻ tấn công khỏi các hệ thống thật, đồng thời nghiên cứu hành vi và phương thức tấn công của chúng\nC. Tăng tốc độ download phim cho nhân viên\nD. Thay thế máy chủ cơ sở dữ liệu chính khi bị hỏng\nĐáp án: B\nLời giải: Honeypot là chiếc bẫy được giăng ra để đánh lừa tin tặc; bất kỳ lưu lượng nào kết nối vào Honeypot đều mặc nhiên bị coi là đáng ngờ và được ghi lại để phân tích tình báo.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 160: Tổ chức Cisco Talos là gì và đóng vai trò gì trong hệ sinh thái an ninh mạng của Cisco?\nA. Một trường đào tạo chứng chỉ mạng của Cisco tại Châu Á\nB. Một trong những tổ chức nghiên cứu và tình báo mối đe dọa thương mại lớn nhất thế giới, liên tục phân tích mã độc toàn cầu và cung cấp cập nhật bảo vệ theo thời gian thực cho các sản phẩm an ninh của Cisco\nC. Tên của dòng máy chủ định tuyến cũ đã ngừng sản xuất\nD. Một nhóm tin tặc mũ đen chuyên tấn công các đối thủ của Cisco\nĐáp án: B\nLời giải: Cisco Talos quy tụ hàng trăm chuyên gia an ninh và phân tích hàng tỷ yêu cầu web/email mỗi ngày, cung cấp nguồn dữ liệu tình báo mối đe dọa (Threat Intelligence) cho hệ sinh thái Cisco.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 161: Giải pháp Cisco Umbrella bảo vệ các thiết bị của tổ chức ở tầng mạng nào thông qua dịch vụ đám mây?\nA. Tầng vật lý (Cáp quang)\nB. Tầng phân giải tên miền (DNS Layer)\nC. Tầng liên kết dữ liệu (Data Link Layer)\nD. Tầng âm thanh\nĐáp án: B\nLời giải: Cisco Umbrella chặn các kết nối độc hại ngay ở tầng DNS trước khi phiên kết nối IP thực sự được thiết lập, ngăn chặn người dùng truy cập trang web lừa đảo hoặc máy chủ điều khiển botnet (C2).\nChương: 4\nChủ đề: Bảo mật điện toán đám mây (Cloud Security)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 162: Thiết bị kiểm soát chính sách truy cập mạng Cisco ISE (Identity Services Engine) cung cấp khả năng nào?\nA. Tự động chấm công và tính lương cho nhân viên\nB. Quản lý danh tính, xác thực tập trung (AAA - Authentication, Authorization, Accounting) và thực thi chính sách bảo mật dựa trên danh tính người dùng và tình trạng thiết bị (Posture Assessment)\nC. Tự động in tài liệu từ xa\nD. Thay thế dây cáp mạng bằng sóng Bluetooth\nĐáp án: B\nLời giải: Cisco ISE là nền tảng quản trị truy cập toàn diện, xác định rõ ai (who), thiết bị gì (what), ở đâu (where) và cấp quyền truy cập mạng tương ứng (Network Access Control).\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 163: Năm chức năng cốt lõi trong Khung An ninh mạng NIST (NIST Cybersecurity Framework - CSF) là gì?\nA. Plan, Do, Check, Act, Repeat\nB. Identify, Protect, Detect, Respond, Recover\nC. Scan, Attack, Exploit, Report, Clear\nD. Firewall, Antivirus, Backup, VPN, Password\nĐáp án: B\nLời giải: Khung NIST CSF gồm 5 hàm chức năng tuần hoàn: Identify (Nhận diện), Protect (Bảo vệ), Detect (Phát hiện), Respond (Ứng phó) và Recover (Khôi phục).\nChương: 4\nChủ đề: Khung tiêu chuẩn NIST & ISO/IEC\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 164: Trong Khung NIST CSF, hoạt động sao lưu dữ liệu và lập kế hoạch phục hồi hoạt động sau thảm họa thuộc chức năng nào?\nA. Detect\nB. Recover\nC. Identify\nD. Attack\nĐáp án: B\nLời giải: Chức năng Recover (Khôi phục) tập trung vào việc khôi phục các khả năng hoặc dịch vụ bị suy giảm do sự cố an ninh mạng để duy trì tính bền vững của tổ chức.\nChương: 4\nChủ đề: Khung tiêu chuẩn NIST & ISO/IEC\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 165: Chính sách sử dụng chấp nhận được (AUP - Acceptable Use Policy) trong doanh nghiệp quy định điều gì?\nA. Bảng lương chi tiết của từng phòng ban\nB. Các quy định và giới hạn rõ ràng về những hành vi được phép và không được phép khi nhân viên sử dụng tài sản CNTT, máy tính, email và mạng Internet của tổ chức\nC. Lịch nghỉ mát hàng năm của công ty\nD. Danh sách các món ăn tại căn tin công ty\nĐáp án: B\nLời giải: AUP là văn bản pháp lý nội bộ mà nhân viên phải ký cam kết khi gia nhập công ty, xác định rõ việc sử dụng thiết bị và mạng công ty đúng mục đích công việc.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 166: Tại sao chương trình \"Đào tạo nâng cao nhận thức bảo mật\" (Security Awareness Training) định kỳ cho toàn thể nhân viên lại là yếu tố sống còn đối với an ninh tổ chức?\nA. Để công ty tiêu hết ngân sách đào tạo cuối năm\nB. Vì con người là mắt xích yếu nhất trong chuỗi bảo mật; hầu hết các vụ tấn công nghiêm trọng bắt đầu từ việc nhân viên nhấp vào email lừa đảo (phishing) hoặc mật khẩu yếu. Đào tạo giúp biến nhân viên thành \"Tường lửa con người\" (Human Firewall)\nC. Để nhân viên biết cách tự sửa chữa màn hình máy tính\nD. Để chuẩn bị cho các kỳ thi đại học\nĐáp án: B\nLời giải: Công nghệ tường lửa hiện đại nhất cũng vô hiệu nếu nhân viên tự tay cung cấp mật khẩu cho kẻ lừa đảo; do đó nâng cao nhận thức là tuyến phòng thủ then chốt của tổ chức.\nChương: 4\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 167: Thiết bị kiểm soát vật lý nào sau đây được thiết kế đặc biệt gồm hai cửa liên động, nhằm ngăn chặn triệt để hành vi đi bám sát (Tailgating / Piggybacking) vào khu vực máy chủ nhạy cảm?\nA. Cửa kính tự động trượt\nB. Mantrap (Cổng bẫy kiểm soát hai cửa liên động)\nC. Rèm cửa cuốn\nD. Hàng rào dây thép gai\nĐáp án: B\nLời giải: Mantrap (Air lock) gồm 2 cửa nối tiếp: cửa thứ nhất mở ra người bước vào, cửa thứ nhất đóng kín hoàn toàn thì cửa thứ hai mới cho phép quẹt thẻ sinh trắc học để mở ra, ngăn tuyệt đối người thứ hai bám theo.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 168: Đội ứng cứu sự cố an ninh máy tính trong tổ chức thường được viết tắt là gì?\nA. FBI\nB. CSIRT (Computer Security Incident Response Team) hoặc CERT (Computer Emergency Response Team)\nC. NATO\nD. HR Team\nĐáp án: B\nLời giải: CSIRT hoặc CERT là nhóm chuyên gia chịu trách nhiệm tiếp nhận báo cáo, điều tra, ngăn chặn và khắc phục các sự cố an ninh mạng trong tổ chức.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 169: Thứ tự 6 giai đoạn chuẩn trong Quy trình Ứng phó Sự cố An ninh mạng (Incident Response Process) là gì?\nA. Tấn công -> Báo công an -> Họp báo -> Trả tiền chuộc -> Xóa máy -> Nghỉ việc\nB. Chuẩn bị (Preparation) -> Phát hiện & Phân tích (Detection & Analysis) -> Ngăn chặn (Containment) -> Loại bỏ (Eradication) -> Khôi phục (Recovery) -> Bài học kinh nghiệm (Lessons Learned)\nC. Phát hiện -> Đổi mật khẩu -> Khôi phục -> Quét virus -> Xong\nD. Mua máy chủ mới -> Cài đặt lại -> Mời chuyên gia -> Phạt nhân viên\nĐáp án: B\nLời giải: Đây là quy trình 6 bước chuẩn mực quốc tế (NIST SP 800-61 / SANS) được giảng dạy trong chương trình Cisco NetAcad.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 170: Khi một máy tính trong mạng nội bộ bị phát hiện nhiễm mã độc tống tiền (Ransomware) đang bắt đầu mã hóa dữ liệu, hành động cô lập khẩn cấp nào thuộc bước \"Containment\" cần làm ngay lập tức?\nA. Tắt màn hình máy tính\nB. Ngắt ngay lập tức kết nối mạng (rút cáp mạng LAN hoặc ngắt kết nối Wi-Fi) của máy tính đó để ngăn mã độc lây lan sang các máy chủ và máy tính khác trong mạng\nC. Khởi động lại máy tính liên tục 5 lần\nD. Mở trình duyệt tìm kiếm trên Google cách giải mã\nĐáp án: B\nLời giải: Bước Ngăn chặn (Containment) ưu tiên cô lập vật lý hoặc logic thiết bị nhiễm bệnh khỏi mạng để ngăn mã độc phát tán theo chiều ngang (lateral movement).\nChương: 4\nChủ đề: Mã độc Ransomware\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 171: Mục tiêu của bước \"Lessons Learned\" (Bài học kinh nghiệm) ở cuối quy trình ứng phó sự cố là gì?\nA. Tìm ra một nhân viên cấp dưới để sa thải và đổ lỗi\nB. Họp đánh giá lại toàn bộ diễn biến sự cố: cuộc tấn công diễn ra thế nào, quy trình xử lý có chỗ nào chậm trễ hoặc thiếu sót, từ đó cập nhật chính sách và nâng cao năng lực phòng thủ trong tương lai\nC. Xóa sạch mọi tài liệu ghi chép về sự cố để không ai biết\nD. Yêu cầu bồi thường tiền từ công ty bảo hiểm\nĐáp án: B\nLời giải: Lessons Learned không phải là cuộc họp chỉ trích cá nhân mà là cơ hội cải tiến hệ thống, khắc phục lỗ hổng quy trình để sự cố tương tự không tái diễn.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 172: Phân đoạn mạng (Network Segmentation) bằng công nghệ VLAN (Virtual LAN) mang lại lợi ích bảo mật nào cho tổ chức?\nA. Giúp tăng độ sáng của đèn tín hiệu trên Switch\nB. Chia nhỏ mạng lớn thành các vùng logic độc lập (ví dụ tách riêng mạng Kế toán, mạng Khách, mạng Máy chủ), giới hạn lưu lượng phát tán và cô lập sự cố lây nhiễm mã độc trong một vùng nhất định\nC. Giúp máy tính không cần cài hệ điều hành\nD. Tự động tăng tốc độ xử lý của CPU\nĐáp án: B\nLời giải: Phân đoạn mạng ngăn cản mã độc hoặc tin tặc khi đã xâm nhập được một máy trạm ở phòng ban này có thể tự do quét và tấn công trực tiếp sang các máy chủ dữ liệu ở phân vùng khác.\nChương: 4\nChủ đề: Phân đoạn mạng & Vùng DMZ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 173: Kế hoạch Duy trì hoạt động kinh doanh (BCP - Business Continuity Plan) khác với Kế hoạch Phục hồi sau thảm họa (DRP - Disaster Recovery Plan) ở điểm nào?\nA. BCP chỉ dành cho công ty nhỏ, DRP dành cho công ty lớn\nB. BCP tập trung vào việc duy trì các hoạt động kinh doanh cốt lõi của tổ chức tiếp tục vận hành trong và ngay sau sự cố; trong khi DRP tập trung cụ thể vào các quy trình kỹ thuật để khôi phục lại hạ tầng CNTT và dữ liệu\nC. BCP là kế hoạch nghỉ mát, DRP là kế hoạch phòng cháy\nD. BCP không liên quan gì đến bảo mật\nĐáp án: B\nLời giải: BCP có phạm vi toàn diện cho toàn bộ hoạt động kinh doanh của doanh nghiệp, còn DRP là một phần kỹ thuật của BCP tập trung vào phục hồi hệ thống công nghệ thông tin.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 174: Thiết bị Lọc nội dung Web (Web Content Filtering / Proxy) trong doanh nghiệp giúp ngăn chặn rủi ro nào?\nA. Chặn nhân viên ăn uống tại bàn làm việc\nB. Chặn người dùng truy cập vào các trang web độc hại, trang web lừa đảo (phishing), hoặc các trang web giải trí/cờ bạc vi phạm chính sách của công ty\nC. Tự động tắt máy tính lúc 17h00\nD. Chặn tín hiệu sóng điện thoại di động trong phòng họp\nĐáp án: B\nLời giải: Web Content Filter kiểm soát lưu lượng HTTP/HTTPS đi ra ngoài, đối chiếu URL với cơ sở dữ liệu danh tiếng độc hại để bảo vệ người dùng không bị tải mã độc.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 175: Thiết bị Cổng bảo mật Email (Secure Email Gateway - SEG) thực hiện những nhiệm vụ bảo vệ nào sau đây?\nA. Quét virus, lọc thư rác (Anti-spam), phát hiện email lừa đảo (Anti-phishing), và kiểm tra tệp đính kèm độc hại trước khi thư đến hòm thư của nhân viên\nB. Tự động trả lời thư khen ngợi từ khách hàng\nC. Xóa toàn bộ email của nhân viên sau mỗi ngày\nD. Thay đổi phông chữ của email cho đẹp hơn\nĐáp án: A\nLời giải: Email là vector tấn công số 1; hệ thống Email Gateway đứng ở tuyến đầu để lọc sạch các thư rác, tệp đính kèm mã độc và liên kết lừa đảo trước khi nhân viên tiếp cận.\nChương: 4\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 176: Công nghệ Chống thất thoát dữ liệu (DLP - Data Loss Prevention) trong tổ chức được thiết kế để làm gì?\nA. Giúp tìm lại chìa khóa xe của nhân viên\nB. Giám sát, phát hiện và ngăn chặn các hành vi truyền dữ liệu nhạy cảm hoặc bí mật (như mã số thẻ tín dụng, tài liệu mật, mã nguồn) ra bên ngoài mạng công ty trái phép\nC. Tự động sao chép toàn bộ dữ liệu máy tính cá nhân lên mạng xã hội\nD. Tăng dung lượng lưu trữ của ổ đĩa cứng\nĐáp án: B\nLời giải: Hệ thống DLP kiểm tra nội dung dữ liệu truyền qua mạng (email, upload web) hoặc sao chép ra USB; nếu phát hiện dữ liệu mật theo từ khóa hoặc định dạng, nó sẽ tự động chặn và cảnh báo.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 177: Tiêu chuẩn quốc tế nào quy định các yêu cầu về việc thiết lập, triển khai, duy trì và cải tiến liên tục Hệ thống Quản lý An toàn Thông tin (ISMS)?\nA. ISO 9001\nB. ISO/IEC 27001\nC. IEEE 802.11\nD. RFC 1918\nĐáp án: B\nLời giải: ISO/IEC 27001 là tiêu chuẩn vàng quốc tế về quản lý an toàn thông tin doanh nghiệp, bao gồm các chính sách quản trị rủi ro và các biện pháp kiểm soát bảo mật toàn diện.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 178: Trung tâm Điều hành An ninh mạng (SOC - Security Operations Center) trong một tổ chức là gì?\nA. Phòng tập thể dục cho nhân viên an ninh\nB. Đơn vị tập trung các chuyên gia, quy trình và công nghệ chịu trách nhiệm giám sát liên tục 24/7/365, phát hiện, phân tích và phản ứng với các mối đe dọa an ninh mạng trên toàn bộ hệ thống của tổ chức\nC. Nơi sửa chữa điện thoại bị vỡ màn hình\nD. Phòng họp hội đồng quản trị\nĐáp án: B\nLời giải: SOC là đầu não phòng thủ của doanh nghiệp, nơi các chuyên gia an ninh liên tục giám sát bảng điều khiển SIEM, xử lý các cảnh báo và ngăn chặn tấn công tức thì.\nChương: 4\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 179: Hệ thống SIEM (Security Information and Event Management) đóng vai trò gì trong Trung tâm điều hành an ninh SOC?\nA. Quản lý việc gửi thư chúc mừng sinh nhật\nB. Thu thập, tổng hợp và tương quan hóa các tệp nhật ký (Logs) và sự kiện an ninh từ hàng ngàn thiết bị trong toàn bộ mạng để phát hiện các dấu hiệu tấn công bất thường\nC. Điều khiển điều hòa nhiệt độ phòng máy chủ\nD. Tính toán chi phí lương thưởng cho nhân viên IT\nĐáp án: B\nLời giải: SIEM là công cụ cốt lõi của SOC, thu thập nhật ký từ tường lửa, máy chủ, máy trạm, ứng dụng và dùng thuật toán tương quan để chỉ ra các chuỗi hành vi xâm nhập đáng ngờ.\nChương: 4\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 180: Một cuộc kiểm thử thâm nhập \"Black Box\" (Hộp đen) có nghĩa là gì đối với đội kiểm thử?\nA. Người kiểm thử được cung cấp sẵn toàn bộ sơ đồ mạng, mã nguồn và tài khoản quản trị\nB. Người kiểm thử hoàn toàn không được cung cấp bất kỳ thông tin nội bộ nào trước về hệ thống mục tiêu, mô phỏng góc nhìn của một kẻ tấn công từ bên ngoài Internet\nC. Kiểm thử trong phòng tối không bật đèn\nD. Kiểm thử hộp kim loại đựng máy chủ\nĐáp án: B\nLời giải: Black Box Testing: Người kiểm thử bắt đầu từ con số không, tự thu thập thông tin và tìm cách đột nhập giống hệt kẻ tấn công thực tế bên ngoài.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 181: Khái niệm \"White Box\" (Hộp trắng) trong kiểm thử thâm nhập là gì?\nA. Người kiểm thử mặc áo sơ mi màu trắng\nB. Người kiểm thử được cung cấp đầy đủ thông tin chi tiết về kiến trúc hệ thống, mã nguồn, cấu hình mạng và quyền truy cập để đánh giá an ninh một cách toàn diện từ bên trong\nC. Chỉ kiểm tra các máy tính sơn màu trắng\nD. Kiểm thử các tài liệu in trên giấy trắng\nĐáp án: B\nLời giải: White Box Testing (kiểm thử nội bộ toàn diện): Đội bảo mật có toàn quyền tiếp cận mã nguồn và sơ đồ thiết kế để tìm các lỗ hổng sâu nhất trong ứng dụng.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 182: Thuật ngữ \"NetFlow\" hoặc \"IPFIX\" trong giám sát mạng của Cisco được sử dụng để làm gì?\nA. Tự động tải video tốc độ cao\nB. Thu thập dữ liệu thống kê siêu dữ liệu (Metadata) về lưu lượng IP qua các giao diện bộ định tuyến, bao gồm IP nguồn/đích, Port, giao thức và khối lượng dữ liệu truyền qua, hỗ trợ phát hiện hành vi bất thường\nC. Đo áp suất nước làm mát máy chủ\nD. Đổi địa chỉ IP tự động mỗi 5 giây\nĐáp án: B\nLời giải: NetFlow giám sát \"ai nói chuyện với ai, bằng giao thức nào, trong bao lâu và bao nhiêu dữ liệu\", giúp phát hiện lưu lượng bất thường hoặc rò rỉ dữ liệu mà không cần xem trộm nội dung gói tin.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 183: Tấn công leo thang đặc quyền (Privilege Escalation) là gì?\nA. Kẻ tấn công dùng thang trèo lên nóc tòa nhà công ty\nB. Kẻ tấn công lợi dụng lỗ hổng phần mềm hoặc sai sót cấu hình để nâng quyền từ một tài khoản người dùng bình thường lên quyền quản trị viên cao cấp (Admin/Root)\nC. Đi thang máy lên tầng làm việc của ban giám đốc\nD. Nâng cấp bộ nhớ RAM cho máy tính\nĐáp án: B\nLời giải: Khi đã xâm nhập vào hệ thống bằng tài khoản quyền hạn thấp, kẻ tấn công sẽ tìm cách leo thang đặc quyền (Privilege Escalation) để kiểm soát toàn bộ máy chủ.\nChương: 4\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 184: Nguyên tắc \"Đặc quyền tối thiểu\" (Principle of Least Privilege) trong quản trị an ninh yêu cầu điều gì?\nA. Cấp quyền quản trị viên cao nhất cho tất cả nhân viên để họ làm việc thuận tiện\nB. Mỗi người dùng, tiến trình hoặc chương trình chỉ được cấp đúng những quyền hạn tối thiểu cần thiết để hoàn thành nhiệm vụ công việc của họ, không cấp thừa\nC. Không cấp bất kỳ quyền hạn nào cho nhân viên mới\nD. Đổi quyền hạn của nhân viên mỗi giờ một lần\nĐáp án: B\nLời giải: Least Privilege là nguyên tắc nền tảng: Nhân viên kế toán chỉ được truy cập dữ liệu kế toán, không được cấp quyền xem dữ liệu nhân sự hay quyền quản trị hệ thống.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 185: Trong bảo mật dữ liệu tổ chức, việc phân loại dữ liệu (Data Classification) thường được chia thành các cấp bậc nào?\nA. Dễ, Trung bình, Khó\nB. Công khai (Public), Nội bộ (Internal), Bí mật (Confidential), Tuyệt mật (Top Secret / Restricted)\nC. Mới, Cũ, Đã xóa\nD. Đỏ, Vàng, Xanh\nĐáp án: B\nLời giải: Phân loại dữ liệu giúp tổ chức định hình cấp độ bảo vệ tương ứng: dữ liệu Public có thể công khai, còn tài liệu Confidential/Secret phải áp dụng mã hóa và kiểm soát truy cập nghiêm ngặt.\nChương: 4\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 186: Tại sao các bản ghi nhật ký hệ thống (Logs) cần phải được bảo vệ tính toàn vẹn và lưu trữ trên một máy chủ quản lý Log tập trung (như Syslog Server)?\nA. Để máy chủ chạy nhanh hơn\nB. Ngăn chặn kẻ tấn công khi đã đột nhập vào hệ thống có thể sửa đổi hoặc xóa sạch dấu vết vết tích tấn công của chúng trên máy tính nạn nhân\nC. Để tiết kiệm giấy in báo cáo\nD. Vì quy định cấm lưu log trên máy cục bộ\nĐáp án: B\nLời giải: Kẻ xâm nhập luôn cố gắng xóa log cục bộ để che giấu hành vi. Đẩy log tức thời về máy chủ lưu trữ chuyên dụng (viết một lần - WORM) giúp bảo toàn bằng chứng pháp lý số.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 187: Kiểm soát truy cập dựa trên vai trò (RBAC - Role-Based Access Control) hoạt động như thế nào?\nA. Cấp quyền dựa trên tuổi tác của nhân viên\nB. Gán quyền truy cập vào các vai trò công việc cụ thể (ví dụ: vai trò Kế toán, vai trò Bác sĩ, vai trò Quản trị viên), sau đó gán nhân viên vào vai trò tương ứng với vị trí của họ\nC. Cho phép nhân viên tự bầu chọn quyền hạn của mình\nD. Cấp quyền dựa trên chiều cao của nhân viên\nĐáp án: B\nLời giải: RBAC đơn giản hóa việc quản trị: Thay vì phân quyền lẻ tẻ cho từng người, hệ thống gán quyền cho chức danh/vai trò, giúp tránh tình trạng cấp thừa quyền hạn.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 188: Cơ chế Kiểm soát Truy cập Mạng (NAC - Network Access Control) làm nhiệm vụ gì khi một máy tính cắm dây mạng vào cổng mạng của công ty?\nA. Đo tốc độ sạc pin của máy tính\nB. Kiểm tra danh tính người dùng và đánh giá tình trạng an toàn của máy tính (đã bật tường lửa chưa, bản vá OS cập nhật chưa, có phần mềm diệt virus không) trước khi quyết định cấp quyền vào mạng\nC. Tự động xóa các trò chơi trên máy tính\nD. Đổi tên máy tính thành tên của công ty\nĐáp án: B\nLời giải: NAC đảm bảo các thiết bị không tuân thủ chính sách bảo mật (chưa cập nhật, không có antivirus) sẽ bị cách ly vào vùng cách ly (Remediation VLAN) để khắc phục trước khi được truy cập mạng nội bộ.\nChương: 4\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 189: Trong kiểm thử xâm nhập, hoạt động của \"Blue Team\" là gì?\nA. Đóng vai kẻ tấn công tìm cách đột nhập vào hệ thống\nB. Đóng vai đội phòng thủ, chịu trách nhiệm giám sát, phát hiện, phân tích và ngăn chặn các cuộc tấn công của Red Team theo thời gian thực\nC. Mua sắm máy tính mới cho công ty\nD. Tiếp thị sản phẩm cho khách hàng\nĐáp án: B\nLời giải: Trong diễn tập an ninh mạng: Red Team đóng vai trò tấn công, còn Blue Team đóng vai trò phòng thủ và bảo vệ hệ thống.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 190: \"Purple Team\" trong các cuộc diễn tập an ninh mạng đóng vai trò gì?\nA. Đội trọng tài chấm điểm\nB. Đóng vai trò cầu nối phối hợp chặt chẽ giữa Red Team và Blue Team, chia sẻ kinh nghiệm và kỹ thuật để tối ưu hóa hiệu quả phòng thủ và vá lỗ hổng nhanh nhất\nC. Đội chuẩn bị đồ ăn cho các kỹ sư\nD. Nhóm chuyên viên thiết kế đồ họa\nĐáp án: B\nLời giải: Purple Team kết hợp tinh thần tấn công và phòng thủ, giúp Blue Team hiểu rõ các kỹ thuật mới của Red Team để kịp thời gia cố rào chắn an ninh.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 191: Khái niệm \"Air-Gapping\" (Cách ly vật lý) trong thiết kế an ninh mạng là gì?\nA. Sử dụng quạt gió cực mạnh để làm mát phòng máy chủ\nB. Biện pháp bảo mật cách ly hoàn toàn một máy tính hoặc mạng nhạy cảm khỏi mạng Internet công cộng và tất cả các mạng không an toàn khác\nC. Đặt máy tính trong phòng chân không không có không khí\nD. Sử dụng ăng-ten phát sóng Wi-Fi tầm xa\nĐáp án: B\nLời giải: Mạng Air-gap không có bất kỳ kết nối vật lý hay không dây nào với thế giới bên ngoài (thường dùng cho hệ thống kiểm soát vũ khí quân sự hoặc nhà máy điện hạt nhân).\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 192: Tại sao một mạng dù đã được Air-Gapping vẫn có thể bị xâm nhập và lây nhiễm mã độc?\nA. Vì sóng vô tuyến của lò vi sóng\nB. Do con người mang các phương tiện lưu trữ di động bị nhiễm độc (như thẻ nhớ USB) từ bên ngoài cắm trực tiếp vào hệ thống cách ly (như trường hợp sâu Stuxnet)\nC. Do chim bồ câu bay qua nóc nhà\nD. Mạng Air-gap không thể bị xâm nhập dưới bất kỳ hình thức nào\nĐáp án: B\nLời giải: Yếu tố con người và các thiết bị ngoại vi di động (USB, ổ cứng di động, laptop kỹ thuật viên) là cầu nối mang mã độc vượt qua rào cản cách ly vật lý.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 193: Việc kiểm tra đánh giá lỗ hổng bảo mật (Vulnerability Assessment) định kỳ khác với Kiểm thử thâm nhập (Penetration Testing) ở điểm nào?\nA. Đánh giá lỗ hổng chỉ sử dụng công cụ quét tự động để liệt kê danh sách các điểm yếu tiềm ẩn mà không tiến hành khai thác; trong khi Kiểm thử thâm nhập chủ động khai thác các lỗ hổng đó để xem có thể đột nhập sâu đến đâu\nB. Đánh giá lỗ hổng tốn kém hơn nhiều\nC. Kiểm thử thâm nhập do máy tính tự làm, đánh giá lỗ hổng do con người làm\nD. Hai khái niệm này hoàn toàn giống hệt nhau\nĐáp án: A\nLời giải: Quét lỗ hổng (Vulnerability Assessment) chỉ lập danh mục rủi ro; còn Pentest thực sự kích hoạt các đoạn mã exploit để chứng minh khả năng thâm nhập của kẻ tấn công.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 194: Điểm yếu bảo mật nào sau đây là nguyên nhân phổ biến nhất dẫn đến các vụ tấn công leo thang trong mạng nội bộ công ty?\nA. Dùng màn hình quá to\nB. Sử dụng mật khẩu tài khoản quản trị viên cục bộ (Local Administrator) giống hệt nhau trên hàng loạt máy tính trạm trong công ty\nC. Chuột máy tính bị hết pin\nD. Công ty có quá nhiều cửa sổ kính\nĐáp án: B\nLời giải: Nếu tất cả các máy trạm dùng chung mật khẩu Local Admin, kẻ tấn công chiếm được một máy sẽ dễ dàng dùng mã băm mật khẩu đó để chiếm toàn bộ các máy còn lại trong mạng (Pass-the-Hash).\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 195: Một giải pháp EDR (Endpoint Detection and Response) được cài đặt trên các máy trạm có chức năng gì?\nA. Tự động soạn thảo văn bản Word\nB. Liên tục giám sát hành vi, ghi nhận tiến trình, phát hiện các mối đe dọa nâng cao trên thiết bị đầu cuối và cho phép chuyên viên an ninh cô lập thiết bị hoặc điều tra sự cố từ xa\nC. Tăng độ phân giải màn hình máy tính\nD. Tắt quạt tản nhiệt của máy tính\nĐáp án: B\nLời giải: EDR vượt xa antivirus truyền thống, cung cấp khả năng phát hiện hành vi bất thường, truy vết nguồn gốc tấn công và phản ứng nhanh ngay trên thiết bị đầu cuối.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 196: Khái niệm \"Shadow IT\" (Công nghệ thông tin bóng tối) trong tổ chức đề cập đến hiện tượng gì?\nA. Máy tính hoạt động trong phòng không bật đèn\nB. Việc nhân viên hoặc các phòng ban tự ý sử dụng các phần mềm, thiết bị hoặc dịch vụ đám mây bên ngoài để làm việc mà không thông qua sự phê duyệt hoặc quản lý của bộ phận IT\nC. Nhân viên làm việc ca đêm\nD. Sử dụng phần mềm diệt virus lậu\nĐáp án: B\nLời giải: Shadow IT (như dùng tài khoản Google Drive cá nhân để gửi tài liệu nội bộ) tạo ra nguy cơ rò rỉ dữ liệu khổng lồ do nằm ngoài tầm kiểm soát và chính sách bảo mật của doanh nghiệp.\nChương: 4\nChủ đề: Hàm băm một chiều (Hash Function)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 197: Điều nào sau đây là một biện pháp kiểm soát an ninh vật lý (Physical Security Control)?\nA. Tường lửa lọc gói tin IP\nB. Camera quan sát CCTV, nhân viên bảo vệ và khóa từ cửa ra vào\nC. Thuật toán mã hóa AES\nD. Khóa bảo mật vân tay trên trang web\nĐáp án: B\nLời giải: Kiểm soát vật lý là các rào cản hữu hình nhằm ngăn chặn sự tiếp cận cơ học trái phép vào các cơ sở, tòa nhà và trung tâm dữ liệu của tổ chức.\nChương: 4\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 198: Chính sách \"Bàn làm việc sạch và Màn hình sạch\" (Clean Desk and Clear Screen Policy) yêu cầu nhân viên làm gì?\nA. Lau bàn bằng cồn sát khuẩn mỗi sáng\nB. Thu dọn toàn bộ tài liệu nhạy cảm vào tủ khóa khi rời bàn làm việc và luôn khóa màn hình máy tính (Windows + L / Cmd + Ctrl + Q) khi không ngồi ở vị trí\nC. Không được để đồ ăn trên bàn làm việc\nD. Đổi màn hình máy tính mới hàng tuần\nĐáp án: B\nLời giải: Chính sách này ngăn chặn việc người đi ngang qua nhìn thấy thông tin mật trên bàn (Clean Desk) hoặc đọc trộm dữ liệu trên màn hình khi nhân viên vắng mặt (Clear Screen).\nChương: 4\nChủ đề: Mật mã học (Cryptography)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 199: Tại sao việc cấp quyền truy cập từ xa (Remote Access) qua giao thức Telnet lại bị nghiêm cấm trong mạng doanh nghiệp hiện đại?\nA. Vì Telnet chạy quá chậm\nB. Vì Telnet truyền toàn bộ thông tin đăng nhập và dữ liệu dưới dạng văn bản rõ (Plaintext) không mã hóa, cho phép bất kỳ ai nghe lén mạng đều có thể đọc được mật khẩu dễ dàng\nC. Vì Telnet chỉ hỗ trợ bàn phím tiếng Pháp\nD. Vì Telnet làm nóng bộ định tuyến\nĐáp án: B\nLời giải: Giao thức Telnet không có cơ chế mã hóa; nó bắt buộc phải được thay thế hoàn toàn bằng SSH (Secure Shell) để mã hóa toàn bộ phiên quản trị từ xa.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 200: Tổ chức cần làm gì ngay lập tức khi một nhân viên chủ chốt nắm giữ nhiều mật khẩu quản trị hệ thống nộp đơn xin thôi việc?\nA. Chúc mừng và tặng quà lưu niệm\nB. Thu hồi ngay toàn bộ quyền truy cập tài khoản, thẻ từ ra vào, đổi các mật khẩu dùng chung mà nhân viên đó từng nắm giữ và khóa các tài khoản cá nhân của họ trên toàn hệ thống\nC. Xóa sạch toàn bộ máy chủ công ty\nD. Đóng cửa công ty 1 tháng\nĐáp án: B\nLời giải: Quy trình cho nhân viên thôi việc (Offboarding) chuẩn mực đòi hỏi vô hiệu hóa tài khoản và đổi ngay các khóa/mật khẩu quản trị chung để loại trừ nguy cơ bị trả thù hoặc truy cập trái phép sau khi rời công ty.\nChương: 4\nChủ đề: Bảo Vệ Tổ Chức & Tăng Cường Bảo Mật\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 201: Sự khác biệt cơ bản nhất giữa \"Luật pháp\" (Laws) và \"Đạo đức\" (Ethics) trong lĩnh vực an ninh mạng là gì?\nA. Luật pháp chỉ áp dụng cho người lớn, đạo đức áp dụng cho trẻ em.\nB. Luật pháp là các quy tắc bắt buộc do nhà nước ban hành và có chế tài xử phạt pháp lý (phạt tiền, tù tội); trong khi đạo đức là hệ thống các nguyên tắc luân lý hướng dẫn hành vi đúng đắn được cộng đồng nghề nghiệp tự nguyện tuân thủ.\nC. Đạo đức có thể khiến bạn phải đi tù, còn luật pháp thì không.\nD. Luật pháp và đạo đức là hai từ đồng nghĩa hoàn toàn.\nĐáp án: B\nLời giải: Cisco NetAcad nhấn mạnh: Luật pháp có tính cưỡng chế và chế tài xử lý của nhà nước, còn đạo đức là chuẩn mực hành vi định hướng lương tâm và trách nhiệm nghề nghiệp.\nChương: 6\nChủ đề: Đạo đức nghề nghiệp & Pháp lý ATTT\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 202: Một chuyên gia bảo mật phát hiện một lỗ hổng nghiêm trọng trên website của một ngân hàng mà không có sự cho phép trước của ngân hàng đó. Mặc dù chuyên gia không phá hoại dữ liệu, hành vi tự ý quét và xâm nhập này được coi là gì?\nA. Hoàn toàn hợp pháp vì mục đích tốt\nB. Vi phạm pháp luật về an ninh mạng (truy cập trái phép vào hệ thống thông tin mà không được ủy quyền)\nC. Được chính phủ trao huân chương ngay lập tức\nD. Một kỹ năng bắt buộc của tất cả nhân viên ngân hàng\nĐáp án: B\nLời giải: Dù động cơ tốt hay xấu, hành vi xâm nhập vào hệ thống mạng của người khác mà không có sự đồng ý bằng văn bản là hành vi vi phạm pháp luật.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 203: Khái niệm \"Tiết lộ có trách nhiệm\" (Responsible Disclosure) trong việc phát hiện lỗ hổng phần mềm có nghĩa là gì?\nA. Đăng ngay mã khai thác lỗ hổng lên mạng xã hội Facebook để cảnh báo cộng đồng\nB. Báo cáo bí mật thông tin chi tiết về lỗ hổng cho nhà phát triển phần mềm và cho họ một khoảng thời gian hợp lý để tạo và phát hành bản vá trước khi công khai thông tin ra công chúng\nC. Bán lỗ hổng đó cho các nhóm tội phạm mạng trên chợ đen\nD. Giữ bí mật vĩnh viễn và không bao giờ nói cho ai biết\nĐáp án: B\nLời giải: Responsible Disclosure là quy chuẩn đạo đức trong an ninh mạng: thông báo riêng cho nhà sản xuất để họ vá lỗi nhằm bảo vệ người dùng, tránh tạo cơ hội cho kẻ xấu lợi dụng khai thác trước khi có bản vá.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 204: Quy tắc tham gia (Rules of Engagement - ROE) trong một hợp đồng Kiểm thử thâm nhập (Penetration Testing) xác định điều gì?\nA. Danh sách các bài hát mà đội kiểm thử được nghe trong giờ làm việc\nB. Thỏa thuận pháp lý bằng văn bản xác định rõ phạm vi hệ thống được phép kiểm thử, các phương thức tấn công được phép/cấm sử dụng, khung thời gian và đầu mối liên hệ khẩn cấp\nC. Số tiền thưởng cá nhân của từng thành viên\nD. Quy định về trang phục của chuyên gia kiểm thử\nĐáp án: B\nLời giải: Rules of Engagement (ROE) là ranh giới pháp lý tối quan trọng; đội ngũ kiểm thử đạo đức tuyệt đối không được vượt ra ngoài phạm vi đã được thỏa thuận trong văn bản này.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 205: Đạo luật GDPR (General Data Protection Regulation) của Liên minh Châu Âu (EU) tập trung vào vấn đề gì?\nA. Bảo vệ quyền riêng tư và dữ liệu cá nhân của các cá nhân trong EU, trao cho người dùng quyền kiểm soát dữ liệu của họ (như quyền được xóa bỏ dữ liệu - Right to be Forgotten) và áp dụng mức phạt rất nặng đối với các vi phạm\nB. Quản lý việc sản xuất xe ô tô điện tại Châu Âu\nC. Cấm người dân sử dụng điện thoại thông minh sau 22h00\nD. Thống nhất tiền tệ đồng Euro\nĐáp án: A\nLời giải: GDPR là đạo luật bảo vệ quyền riêng tư và dữ liệu cá nhân nghiêm ngặt bậc nhất thế giới, có tầm ảnh hưởng toàn cầu đối với mọi doanh nghiệp xử lý dữ liệu của công dân Châu Âu.\nChương: 6\nChủ đề: Đạo đức nghề nghiệp & Pháp lý ATTT\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 206: Tiêu chuẩn PCI-DSS (Payment Card Industry Data Security Standard) bắt buộc áp dụng cho các đối tượng nào?\nA. Tất cả các trường đại học giảng dạy môn toán học\nB. Mọi tổ chức, doanh nghiệp tham gia vào việc lưu trữ, xử lý hoặc truyền tải dữ liệu thẻ thanh toán (thẻ tín dụng/thẻ ghi nợ như Visa, MasterCard)\nC. Các nhà máy sản xuất giấy in tiền\nD. Các tài xế taxi công nghệ\nĐáp án: B\nLời giải: PCI-DSS là bộ quy chuẩn an toàn kỹ thuật do các tổ chức phát hành thẻ quốc tế thiết lập nhằm bảo vệ thông tin chủ thẻ chống lại nạn trộm cắp và gian lận tài chính.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 207: Đạo luật HIPAA (Health Insurance Portability and Accountability Act) của Mỹ được thiết kế để bảo vệ loại dữ liệu nào?\nA. Dữ liệu thời tiết khí hậu\nB. Thông tin sức khỏe cá nhân (PHI - Protected Health Information) và hồ sơ bệnh án y tế điện tử của bệnh nhân\nC. Dữ liệu cổ phiếu thị trường chứng khoán\nD. Dữ liệu đăng kiểm phương tiện giao thông\nĐáp án: B\nLời giải: HIPAA đặt ra các tiêu chuẩn bảo mật và quyền riêng tư nghiêm ngặt đối với việc lưu trữ và chia sẻ hồ sơ bệnh án y tế điện tử của bệnh nhân.\nChương: 6\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 208: Đạo luật CFAA (Computer Fraud and Abuse Act) của Hoa Kỳ là đạo luật về vấn đề gì?\nA. Luật thuế thu nhập doanh nghiệp\nB. Luật liên bang chính nhằm truy tố các hành vi phạm tội máy tính, bao gồm việc truy cập trái phép vào các hệ thống máy tính được bảo vệ\nC. Luật bảo vệ môi trường nước\nD. Luật bản quyền phim ảnh Hollywood\nĐáp án: B\nLời giải: CFAA là công cụ pháp lý cốt lõi của Mỹ để kết tội các hành vi tấn công mạng, xâm nhập hệ thống trái phép, cài cắm mã độc và gian lận máy tính.\nChương: 6\nChủ đề: Đạo đức nghề nghiệp & Pháp lý ATTT\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 209: Nguyên nhân chính dẫn đến sự thiếu hụt nhân lực an ninh mạng trầm trọng (Cybersecurity Skills Gap) trên toàn cầu hiện nay là gì?\nA. Mức lương trong ngành an ninh mạng quá thấp so với các ngành khác\nB. Sự bùng nổ của chuyển đổi số, sự gia tăng nhanh chóng về số lượng và mức độ tinh vi của các mối đe dọa mạng, trong khi số lượng chuyên gia được đào tạo bài bản không đáp ứng kịp nhu cầu\nC. Các trường đại học đã ngừng đào tạo ngành công nghệ thông tin\nD. Các công ty không còn quan tâm đến việc bảo vệ dữ liệu nữa\nĐáp án: B\nLời giải: Không gian số mở rộng với tốc độ chóng mặt cùng các cuộc tấn công mạng diễn ra liên tục khiến nhu cầu tuyển dụng chuyên gia bảo mật vượt xa nguồn cung nhân lực hiện có.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 210: Vai trò của một chuyên viên phân tích SOC Cấp 1 (Tier 1 SOC Analyst / Triage) tại Trung tâm điều hành an ninh là gì?\nA. Viết mã nguồn cho hệ điều hành mới\nB. Giám sát liên tục các cảnh báo an ninh từ hệ thống SIEM theo thời gian thực, thực hiện sàng lọc ban đầu để phân biệt cảnh báo thật và cảnh báo giả, và chuyển tiếp các sự cố nghiêm trọng lên cấp cao hơn\nC. Trực tiếp đi bắt tội phạm mạng ngoài đời thực\nD. Quản lý việc mua bán linh kiện máy tính cho văn phòng\nĐáp án: B\nLời giải: Tier 1 Analyst là tuyến đầu của SOC, liên tục theo dõi hàng ngàn cảnh báo, lọc các báo động giả (False Positives) và phân loại sự cố (Triage).\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 211: Vai trò của một chuyên viên phân tích SOC Cấp 2 (Tier 2 Incident Responder) là gì?\nA. Lau dọn phòng máy chủ\nB. Nhận sự cố được leo thang từ Tier 1, tiến hành điều tra chuyên sâu phạm vi ảnh hưởng của cuộc tấn công, xác định nguồn gốc và trực tiếp thực thi các biện pháp ngăn chặn, khắc phục sự cố\nC. Sửa chữa máy in văn phòng\nD. Đặt đồ ăn trưa cho toàn bộ đội SOC\nĐáp án: B\nLời giải: Tier 2 Analyst là những chuyên gia ứng cứu sự cố dày dạn kinh nghiệm, trực tiếp điều tra nguyên nhân gốc rễ và xử lý triệt để các vụ xâm nhập nguy hiểm.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 212: Vai trò của một chuyên viên SOC Cấp 3 (Tier 3 Threat Hunter / Senior Analyst) là gì?\nA. Cài đặt lại hệ điều hành Windows cho nhân viên mới\nB. Chủ động truy lùng các mối đe dọa và mã độc tinh vi đang ẩn náu sâu trong mạng mà hệ thống tự động không phát hiện được, phân tích mã độc nâng cao và cải tiến quy tắc bảo vệ\nC. Lập hóa đơn thanh toán tiền điện cho công ty\nD. Thay dây cáp mạng bị đứt\nĐáp án: B\nLời giải: Tier 3 đóng vai trò \"thợ săn mối đe dọa\" (Threat Hunter), chủ động tìm kiếm các dấu hiệu bất thường tinh vi (như các chiến dịch APT) mà các công cụ tự động đã bỏ lọt.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 213: Vị trí Giám đốc An ninh Thông tin (CISO - Chief Information Security Officer) trong doanh nghiệp chịu trách nhiệm chính về điều gì?\nA. Sửa chữa bàn phím và chuột máy tính cho giám đốc\nB. Chịu trách nhiệm lãnh đạo cao nhất về toàn bộ chiến lược an ninh mạng, quản trị rủi ro, chính sách bảo vệ thông tin và sự tuân thủ pháp lý của tổ chức\nC. Viết các bài đăng quảng cáo trên mạng xã hội\nD. Trông coi cổng ra vào công ty vào ban đêm\nĐáp án: B\nLời giải: CISO là vị trí quản lý cấp cao (C-suite), cầu nối giữa kỹ thuật an ninh mạng và ban lãnh đạo điều hành doanh nghiệp để hoạch định chiến lược bảo vệ tài sản số.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 214: Công việc của một Chuyên gia kiểm thử thâm nhập (Penetration Tester / Ethical Hacker) là gì?\nA. Viết virus tống tiền các công ty đối thủ\nB. Được sự cho phép hợp pháp của tổ chức để mô phỏng các cuộc tấn công mạng thực tế, nhằm phát hiện ra các lỗ hổng bảo mật trước khi kẻ xấu kịp khai thác\nC. Bán phần mềm diệt virus rong ngoài phố\nD. Cấm tất cả nhân viên sử dụng máy tính\nĐáp án: B\nLời giải: Pentester dùng tư duy và công cụ của tin tặc nhưng với mục đích cao đẹp: tìm ra lỗ hổng để giúp doanh nghiệp vá lại trước khi bị tấn công thật.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 215: Công việc của một Chuyên gia Điều tra số (Digital Forensics Examiner) bao gồm những nhiệm vụ nào?\nA. Bán điện thoại cũ qua mạng\nB. Thu thập, bảo tồn tính nguyên vẹn theo chuỗi hành trình (Chain of Custody), phân tích và trình bày các bằng chứng số từ máy tính và thiết bị mạng phục vụ công tác điều tra sự cố hoặc khởi tố pháp lý\nC. Cài đặt mạng Wi-Fi gia đình\nD. Dạy nhân viên cách gõ bàn phím nhanh\nĐáp án: B\nLời giải: Chuyên gia khám nghiệm số điều tra dấu vết tội phạm mạng, bảo đảm chứng cứ số không bị can thiệp để có giá trị bằng chứng pháp lý trước tòa án.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 216: \"Chuỗi hành trình chứng cứ\" (Chain of Custody) trong điều tra tội phạm số là gì?\nA. Một sợi dây chuyền vàng đeo trên cổ điều tra viên\nB. Tài liệu lưu giữ hồ sơ chi tiết theo thứ tự thời gian ghi lại ai đã thu thập bằng chứng, ai tiếp cận, phân tích, chuyển giao và bằng chứng được lưu giữ ở đâu, đảm bảo bằng chứng không bị tráo đổi hay làm giả\nC. Chuỗi các máy chủ kết nối với nhau bằng cáp quang\nD. Lịch làm việc hàng tuần của đội bảo vệ\nĐáp án: B\nLời giải: Chain of Custody là quy trình pháp lý bắt buộc: nếu bằng chứng số bị gián đoạn ghi chép hoặc nghi ngờ bị chỉnh sửa, nó sẽ bị tòa án bác bỏ hoàn toàn.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 217: Chứng chỉ nhập môn về an ninh mạng của Cisco Networking Academy dành cho những người bắt đầu bước vào ngành là chứng chỉ nào?\nA. Cisco CCIE Security\nB. Cisco Certified Support Technician (CCST) Cybersecurity\nC. Cisco CCDE\nD. Cisco CCNA Routing & Switching cũ\nĐáp án: B\nLời giải: CCST Cybersecurity là chứng chỉ nền tảng mới nhất của Cisco, chứng nhận kiến thức cơ bản về an ninh mạng, các mối đe dọa và biện pháp phòng vệ ban đầu.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 218: Chứng chỉ nào của Cisco tập trung đào tạo chuyên sâu các kỹ năng thực tế cần thiết cho vị trí Chuyên viên phân tích tại Trung tâm điều hành an ninh SOC (SOC Analyst)?\nA. Cisco Certified CyberOps Associate\nB. Cisco CCNP Enterprise\nC. Cisco CCST IT Support\nD. Cisco DevNet Expert\nĐáp án: A\nLời giải: Cisco CyberOps Associate trang bị kiến thức phân tích nhật ký, giám sát mạng, xử lý mã độc và quy trình ứng phó sự cố dành riêng cho kỹ sư SOC.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 219: Chứng chỉ CompTIA Security+ được biết đến trong ngành an ninh mạng như thế nào?\nA. Một chứng chỉ chứng nhận kỹ năng chơi trò chơi điện tử\nB. Chứng chỉ an ninh mạng trung lập (Vendor-neutral) phổ biến và được công nhận rộng rãi nhất trên toàn cầu cho các kỹ sư mới bắt đầu sự nghiệp an ninh thông tin\nC. Chứng chỉ chỉ dành riêng cho các lập trình viên Python\nD. Chứng chỉ chỉ có giá trị trong vòng 1 tháng\nĐáp án: B\nLời giải: CompTIA Security+ là chứng chỉ độc lập với nhà sản xuất (vendor-neutral), là bước đệm tiêu chuẩn được rất nhiều doanh nghiệp và tổ chức chính phủ yêu cầu.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 220: Chứng chỉ CISSP (Certified Information Systems Security Professional) của tổ chức (ISC)² thường hướng tới đối tượng nào?\nA. Học sinh tiểu học\nB. Các chuyên gia bảo mật, nhà quản lý và kiến trúc sư an ninh mạng dày dạn kinh nghiệm (yêu cầu tối thiểu 5 năm kinh nghiệm làm việc thực tế trong ngành)\nC. Những người chưa từng sử dụng máy tính\nD. Thợ sửa chữa dây điện\nĐáp án: B\nLời giải: CISSP được xem là \"tiêu chuẩn vàng\" trong ngành bảo mật thông tin, yêu cầu kinh nghiệm thực chiến sâu rộng và bao quát 8 miền kiến thức an ninh mạng.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 221: Chứng chỉ CEH (Certified Ethical Hacker) do tổ chức nào cấp?\nA. Cisco Systems\nB. EC-Council\nC. Microsoft\nD. Google\nĐáp án: B\nLời giải: Chứng chỉ CEH nổi tiếng về kỹ thuật tấn công có đạo đức do tổ chức quốc tế EC-Council xây dựng và cấp chứng nhận.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 222: Chứng chỉ OSCP (Offensive Security Certified Professional) nổi tiếng trong cộng đồng bảo mật vì lý do gì?\nA. Kỳ thi chỉ có 10 câu hỏi trắc nghiệm dễ\nB. Kỳ thi thực hành thực chiến khắc nghiệt kéo dài 24 giờ liên tục, yêu cầu thí sinh phải trực tiếp tấn công chiếm quyền điều khiển (root/admin) các máy chủ mục tiêu trong phòng thí nghiệm\nC. Chứng chỉ được cấp miễn phí cho tất cả mọi người\nD. Không cần sử dụng máy tính khi thi\nĐáp án: B\nLời giải: OSCP được đánh giá rất cao nhờ tính thực hành 100%: thí sinh phải chứng minh năng lực khai thác lỗ hổng thực tế dưới áp lực thời gian chứ không chỉ học lý thuyết suông.\nChương: 6\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 223: Tổ chức OWASP (Open Worldwide Application Security Project) nổi tiếng nhất với đóng góp nào cho cộng đồng an ninh mạng?\nA. Chế tạo thiết bị định tuyến mạng\nB. Danh sách \"OWASP Top 10\" - tổng hợp 10 lỗ hổng bảo mật ứng dụng web phổ biến và nguy hiểm nhất hiện nay (như Injection, Broken Access Control, Cryptographic Failures)\nC. Cung cấp dịch vụ Internet vệ tinh\nD. Sản xuất card đồ họa cho máy tính\nĐáp án: B\nLời giải: OWASP Top 10 là tài liệu tham khảo tiêu chuẩn của các nhà phát triển phần mềm và chuyên gia bảo mật trên toàn thế giới để đảm bảo an toàn cho ứng dụng web.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 224: Đấu trường \"Capture The Flag\" (CTF) trong lĩnh vực an ninh mạng là gì?\nA. Trò chơi cướp cờ ngoài sân vận động thể thao\nB. Các cuộc thi tranh tài kỹ năng an ninh mạng thực hành, nơi các thí sinh giải quyết các thử thách về dịch ngược mã độc, khai thác lỗ hổng web, mật mã học và khám nghiệm số để tìm ra một chuỗi bí mật (Flag)\nC. Trò chơi cờ tướng trực tuyến\nD. Cuộc đua xe trực tuyến\nĐáp án: B\nLời giải: CTF là sân chơi rèn luyện kỹ năng thực chiến tuyệt vời cho sinh viên và chuyên gia an ninh mạng, rèn luyện tư duy phân tích và giải quyết sự cố.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 225: Nền tảng thực hành trực tuyến TryHackMe hoặc Hack The Box cung cấp môi trường gì cho người học an ninh mạng?\nA. Mua sắm quần áo thời trang giá rẻ\nB. Các phòng thí nghiệm ảo (Labs) an toàn và hợp pháp, cho phép người học thực hành các kỹ thuật tấn công và phòng thủ mạng trên các máy ảo mô phỏng thực tế mà không vi phạm pháp luật\nC. Xem phim trực tuyến miễn phí\nD. Đặt vé máy bay du lịch\nĐáp án: B\nLời giải: Các nền tảng lab ảo giúp người học thực hành tấn công vào các mục tiêu giả lập một cách hợp pháp, an toàn và rèn luyện kỹ năng thực tế nhanh chóng.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 226: Phần mềm Cisco Packet Tracer được sử dụng phổ biến trong việc học an ninh mạng nhằm mục đích gì?\nA. Chỉnh sửa video ca nhạc\nB. Mô phỏng trực quan cấu hình thiết bị mạng (Router, Switch, Firewall, PC), thiết kế hệ thống mạng an toàn và kiểm tra luồng gói tin đi qua mạng\nC. Chơi trò chơi bắn súng\nD. Quét và diệt virus trên điện thoại di động\nĐáp án: B\nLời giải: Packet Tracer là công cụ mô phỏng mạng mạnh mẽ của Cisco, giúp người học thỏa sức thiết kế, thử nghiệm các chính sách tường lửa và phân đoạn mạng mà không cần mua phần cứng đắt tiền.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 227: Tổ chức FIRST (Forum of Incident Response and Security Teams) là gì?\nA. Một hãng hàng không vũ trụ\nB. Diễn đàn quốc tế kết nối các đội ứng cứu sự cố an ninh mạng (CSIRT/CERT) từ các chính phủ, tổ chức thương mại và học thuật trên toàn thế giới để chia sẻ thông tin về mối đe dọa\nC. Một giải đấu bóng đá quốc tế\nD. Một hiệp hội các nhà văn viết truyện trinh thám\nĐáp án: B\nLời giải: FIRST là diễn đàn toàn cầu hàng đầu quy tụ các đội CERT/CSIRT, tạo điều kiện chia sẻ thông tin tình báo và phản ứng phối hợp trước các mối đe dọa mạng xuyên biên giới.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 228: Tổ chức (ISC)² là chữ viết tắt của tổ chức bảo mật uy tín nào?\nA. Internet Society Community Club\nB. International Information System Security Certification Consortium\nC. International Software Company Corporation\nD. Internal Security Council Center\nĐáp án: B\nLời giải: (ISC)² là hiệp hội phi lợi nhuận quốc tế hàng đầu chuyên chứng nhận và đào tạo các chuyên gia an ninh thông tin trên toàn thế giới.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 229: Tổ chức ISACA nổi tiếng với các chứng chỉ chuyên nghiệp nào trong ngành công nghệ thông tin?\nA. CCNA và CCNP\nB. CISA (Kiểm toán hệ thống thông tin) và CISM (Quản lý an ninh thông tin)\nC. Photoshop và AutoCAD\nD. MCSE và MCP\nĐáp án: B\nLời giải: ISACA là tổ chức toàn cầu danh tiếng chuyên về quản trị CNTT, kiểm toán bảo mật (CISA) và quản trị rủi ro an toàn thông tin (CISM/CRISC).\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 230: Viện Nghiên cứu SANS (SANS Institute) đóng góp gì lớn cho ngành đào tạo an ninh mạng?\nA. Cung cấp các khóa đào tạo an ninh mạng chuyên sâu thực chiến chất lượng cao hàng đầu thế giới và vận hành hệ thống chứng chỉ GIAC uy tín\nB. Sản xuất cáp mạng LAN tốc độ cao\nC. Chế tạo linh kiện màn hình máy tính\nD. Cung cấp dịch vụ giao hàng tận nhà\nĐáp án: A\nLời giải: SANS Institute là học viện an ninh mạng uy tín bậc nhất thế giới, nổi tiếng với các khóa huấn luyện chuyên sâu và hệ thống chứng chỉ GIAC được các cơ quan an ninh đánh giá rất cao.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 231: Khái niệm \"Bug Bounty\" (Săn tiền thưởng lỗ hổng) là gì?\nA. Đi săn bắt côn trùng trong rừng\nB. Chương trình do các công ty công nghệ (như Google, Facebook, Apple) hoặc tổ chức phát động, trao tiền thưởng cho các nhà nghiên cứu bảo mật bên ngoài khi họ phát hiện và báo cáo lỗ hổng bảo mật hợp pháp\nC. Mua phần mềm lậu với giá rẻ\nD. Tặng phiếu mua hàng cho nhân viên chăm chỉ\nĐáp án: B\nLời giải: Chương trình Bug Bounty tạo cầu nối đôi bên cùng có lợi: khuyến khích các hacker mũ trắng giúp doanh nghiệp tìm lỗ hổng để nhận thù lao xứng đáng thay vì bán cho tội phạm mạng.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 232: Đạo luật COPPA (Children's Online Privacy Protection Act) của Mỹ được ban hành nhằm mục đích gì?\nA. Quản lý việc nhập khẩu đồ chơi trẻ em\nB. Bảo vệ quyền riêng tư trực tuyến của trẻ em dưới 13 tuổi, yêu cầu các trang web và dịch vụ trực tuyến phải có sự đồng ý của cha mẹ trước khi thu thập thông tin cá nhân của trẻ\nC. Khuyến khích trẻ em xem tivi nhiều hơn\nD. Cấm trẻ em học tin học\nĐáp án: B\nLời giải: COPPA bảo vệ đối tượng trẻ em dễ bị tổn thương trên không gian mạng bằng cách cấm các nền tảng tự ý khai thác dữ liệu của trẻ em dưới 13 tuổi khi chưa có sự cho phép của phụ huynh.\nChương: 6\nChủ đề: Bảo vệ quyền riêng tư & Dữ liệu PII\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 233: Một lập trình viên sao chép mã nguồn độc quyền của công ty cũ sang công ty mới để sử dụng trong sản phẩm mới. Hành vi này vi phạm điều gì?\nA. Vi phạm bản quyền và sở hữu trí tuệ (Intellectual Property Theft), có thể bị kiện dân sự bồi thường thiệt hại và truy cứu trách nhiệm hình sự\nB. Chỉ là sự trao đổi kinh nghiệm bình thường\nC. Được chính phủ khuyến khích để tăng tính cạnh tranh\nD. Không vi phạm bất kỳ quy định nào\nĐáp án: A\nLời giải: Mã nguồn độc quyền do công ty trả lương tạo ra thuộc sở hữu trí tuệ của tổ chức đó; tự ý chiếm đoạt hoặc chuyển giao là hành vi ăn cắp tài sản trí tuệ nghiêm trọng.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 234: Khi được tuyển dụng vào làm việc tại bộ phận an ninh mạng của một công ty, bạn thường phải ký thỏa thuận bảo mật thông tin nào?\nA. Giấy cam kết đi làm đúng giờ\nB. Thỏa thuận không tiết lộ thông tin (NDA - Non-Disclosure Agreement)\nC. Hợp đồng mua bán thiết bị máy tính\nD. Giấy vay tiền ngân hàng\nĐáp án: B\nLời giải: Thỏa thuận NDA ràng buộc mặt pháp lý: nghiêm cấm chuyên gia an ninh tiết lộ bất kỳ thông tin nội bộ, lỗ hổng hệ thống hay dữ liệu khách hàng nào cho bên thứ ba.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 235: Tại sao việc học tập liên tục (Lifelong Learning) lại là yêu cầu bắt buộc đối với bất kỳ ai theo đuổi sự nghiệp an ninh mạng?\nA. Vì các bài thi chứng chỉ không bao giờ cho người thi đỗ\nB. Vì bối cảnh công nghệ, phần cứng, phần mềm và kỹ thuật tấn công của tin tặc luôn biến đổi và phát triển từng ngày; kiến thức không được cập nhật sẽ nhanh chóng bị lỗi thời\nC. Vì luật pháp yêu cầu mỗi tuần phải đọc 1 cuốn sách\nD. Vì máy tính sẽ tự động khóa nếu không học bài mới\nĐáp án: B\nLời giải: An ninh mạng là một cuộc chạy đua vũ trang công nghệ không hồi kết giữa kẻ tấn công và người phòng thủ; ngừng cập nhật kiến thức đồng nghĩa với việc tự đào thải.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 236: Kỹ năng mềm (Soft Skills) nào sau đây được các nhà tuyển dụng an ninh mạng đánh giá cao ngang ngửa kỹ năng kỹ thuật?\nA. Kỹ năng giao tiếp và truyền đạt (giải thích rủi ro kỹ thuật phức tạp cho ban lãnh đạo hiểu), tư duy phản biện và khả năng làm việc nhóm\nB. Kỹ năng hát karaoke\nC. Kỹ năng chơi trò chơi điện tử trực tuyến\nD. Kỹ năng vẽ tranh biếm họa\nĐáp án: A\nLời giải: Chuyên gia an ninh mạng giỏi phải biết thuyết phục ban giám đốc đầu tư cho bảo mật và hướng dẫn người dùng cuối; kỹ năng giao tiếp và tư duy phân tích là chìa khóa thăng tiến.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 237: Khái niệm \"Dark Web\" (Web tối) thường được hiểu là gì?\nA. Các trang web có hình nền màu đen\nB. Phần không gian web chỉ có thể truy cập được thông qua các trình duyệt và phần mềm định tuyến ẩn danh đặc biệt (như Tor), nơi lưu lượng được mã hóa nhiều lớp và thường là nơi trao đổi của các chợ đen ngầm\nC. Các trang web bị mất điện máy chủ\nD. Các trang web tin tức vào ban đêm\nĐáp án: B\nLời giải: Dark Web nằm trong mạng ngầm (Deep Web), đòi hỏi cấu hình ẩn danh (mạng Tor/.onion) để truy cập, nơi các loại dữ liệu đánh cắp, vũ khí và công cụ mã độc thường bị rao bán trái phép.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 238: Mạng Tor (The Onion Router) hoạt động theo nguyên lý nào để bảo vệ tính ẩn danh của người dùng?\nA. Tự động xóa lịch sử cuộc gọi điện thoại\nB. Định tuyến lưu lượng mạng qua chuỗi nhiều máy chủ chuyển tiếp (Relays) phân tán ngẫu nhiên và bọc dữ liệu trong nhiều lớp mã hóa liên tiếp giống như các lớp của củ hành tây\nC. Cắt dây mạng Internet của máy tính\nD. Đổi địa chỉ nhà ở của người dùng trên bản đồ\nĐáp án: B\nLời giải: Mạng Tor mã hóa nhiều lớp (Onion routing); mỗi nút chuyển tiếp chỉ biết nút trước và nút sau nó, không nút nào biết đồng thời cả nguồn gốc và đích đến cuối cùng của dữ liệu.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 239: Vai trò của một Kỹ sư Mật mã học (Cryptographer) là gì?\nA. Đóng gói các hộp máy tính vào thùng các-tông\nB. Nghiên cứu, thiết kế và phát triển các thuật toán toán học, giao thức và hệ thống mã hóa bảo mật nhằm bảo vệ dữ liệu chống lại sự can thiệp và giải mã trái phép\nC. Đi vẽ tranh tường trang trí văn phòng\nD. Đếm số lượng máy tính trong kho\nĐáp án: B\nLời giải: Nhà mật mã học là các chuyên gia toán học và máy tính chuyên sáng tạo ra các thuật toán mã hóa (như AES, RSA, ECC, hay mật mã hậu lượng tử) bảo vệ dữ liệu toàn cầu.\nChương: 6\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 240: Một sinh viên an ninh mạng muốn kiểm tra kỹ năng tấn công Wi-Fi. Hành động nào sau đây là HỢP PHÁP và ĐẠO ĐỨC?\nA. Dò mật khẩu Wi-Fi của nhà hàng xóm bên cạnh\nB. Dựng một phòng thực hành (Lab) riêng tại nhà bằng thiết bị router của chính mình hoặc thực hành trên môi trường mô phỏng không gây ảnh hưởng đến bất kỳ ai\nC. Tấn công làm sập mạng Wi-Fi của trường đại học vào ngày thi\nD. Bẻ khóa mạng Wi-Fi của quán cà phê gần nhà\nĐáp án: B\nLời giải: Nguyên tắc đạo đức và pháp lý cơ bản: Chỉ thử nghiệm trên các hệ thống mà bạn sở hữu hoặc đã nhận được sự đồng ý bằng văn bản của chủ sở hữu hệ thống đó.\nChương: 6\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 241: Nhóm tấn công APT28 hoặc Lazarus Group thường được các nhà phân tích bảo mật xếp vào loại nào?\nA. Script Kiddies (Hacker nghiệp dư)\nB. State-Sponsored Attackers (Nhóm tấn công mạng được nhà nước/chính phủ tài trợ)\nC. Các hội sinh viên công nghệ thông tin tự phát\nD. Các công ty sản xuất phần mềm kế toán\nĐáp án: B\nLời giải: Các nhóm APT như Lazarus (liên kết Triều Tiên) hay APT28/Fancy Bear (liên kết Nga) là các nhóm tin tặc cấp cao được chính phủ tài trợ để thực hiện gián điệp và phá hoại mạng.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 242: Tại sao việc tham gia vào các hiệp hội chuyên môn như ISACA hoặc (ISC)² lại có lợi cho sự nghiệp an ninh mạng của bạn?\nA. Để được mua vé máy bay miễn phí\nB. Mở rộng mạng lưới quan hệ đồng nghiệp chuyên môn (Networking), tiếp cận các nghiên cứu công nghệ mới nhất, tham gia hội thảo và tích lũy điểm duy trì chứng chỉ (CPE points)\nC. Để không cần phải đi làm hàng ngày nữa\nD. Để được công nhận là công dân danh dự của Mỹ\nĐáp án: B\nLời giải: Các hiệp hội nghề nghiệp tạo cơ hội kết nối với các chuyên gia đầu ngành, cập nhật xu hướng công nghệ mới và hỗ trợ phát triển lộ trình sự nghiệp vững chắc.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 243: Khi một trang web bị rò rỉ dữ liệu (Data Breach) làm lộ hàng triệu mật khẩu người dùng, hành động đạo đức đầu tiên mà ban quản trị trang web phải làm là gì?\nA. Giấu kín sự việc và giả vờ như không có chuyện gì xảy ra\nB. Nhanh chóng thông báo công khai cho toàn thể người dùng bị ảnh hưởng, yêu cầu đặt lại mật khẩu và hỗ trợ các biện pháp giảm thiểu thiệt hại theo quy định pháp luật\nC. Đổ lỗi hoàn toàn cho người dùng tự làm lộ mật khẩu\nD. Tăng giá dịch vụ lên gấp đôi\nĐáp án: B\nLời giải: Đạo đức nghề nghiệp và các điều luật như GDPR yêu cầu doanh nghiệp phải thông báo kịp thời cho nạn nhân và cơ quan quản lý khi xảy ra sự cố lộ dữ liệu.\nChương: 6\nChủ đề: Đạo đức nghề nghiệp & Pháp lý ATTT\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 244: Để chuẩn bị hồ sơ ứng tuyển (CV) vào vị trí thực tập sinh an ninh mạng (Cybersecurity Intern), bạn nên thể hiện điều gì nổi bật?\nA. Danh sách các tài khoản mạng xã hội có nhiều người theo dõi\nB. Các chứng chỉ cơ bản (như Cisco CCST, CyberOps), các dự án lab thực hành (Packet Tracer), thành tích giải các bài thi CTF trên TryHackMe/Hack The Box và niềm đam mê học hỏi\nC. Khả năng thức khuya chơi trò chơi điện tử\nD. Số lượng bạn bè trên Facebook\nĐáp án: B\nLời giải: Nhà tuyển dụng tìm kiếm ứng viên có nền tảng lý thuyết vững chắc (qua chứng chỉ uy tín) kết hợp với kỹ năng thực hành chủ động (qua các lab và sân chơi CTF thực tế).\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 245: Một chuyên gia bảo mật ký hợp đồng kiểm thử thâm nhập hệ thống ứng dụng web của công ty X. Trong quá trình kiểm thử, chuyên gia vô tình nhìn thấy dữ liệu tài khoản ngân hàng và đời tư của khách hàng. Hành vi đúng đắn là gì?\nA. Tải dữ liệu đó về máy cá nhân để làm kỷ niệm\nB. Tôn trọng quyền riêng tư, tuyệt đối không sao chép hay phát tán dữ liệu, dừng khai thác sâu vào dữ liệu cá nhân đó và ghi nhận lỗ hổng vào báo cáo kỹ thuật gửi riêng cho ban lãnh đạo công ty X\nC. Khoe hình ảnh chụp màn hình dữ liệu lên diễn đàn công cộng\nD. Gửi tin nhắn tống tiền các khách hàng bị lộ thông tin\nĐáp án: B\nLời giải: Chuẩn mực đạo đức tối thượng của chuyên gia kiểm thử là giữ bí mật tuyệt đối dữ liệu khách hàng và không được phép lạm dụng lỗ hổng để xâm phạm quyền riêng tư.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 246: Công nghệ Điện toán lượng tử (Quantum Computing) đặt ra thách thức lớn nào đối với an ninh mạng trong tương lai gần?\nA. Làm cho màn hình máy tính không thể hiển thị màu sắc\nB. Sức mạnh tính toán lượng tử vượt trội có thể dễ dàng bẻ gãy các thuật toán mã hóa khóa công khai truyền thống (như RSA, ECC), đòi hỏi thế giới phải chuyển sang Mật mã học hậu lượng tử (Post-Quantum Cryptography)\nC. Làm cho mạng cáp quang bị nóng chảy\nD. Thay thế hoàn toàn con người trong mọi công việc\nĐáp án: B\nLời giải: Thuật toán Shor chạy trên máy tính lượng tử có thể phân tích thừa số nguyên cực nhanh, đe dọa vô hiệu hóa mã hóa RSA/ECC hiện nay, thúc đẩy ngành an ninh chuyển đổi sang mật mã hậu lượng tử.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 247: Khái niệm \"IoT Forensics\" trong điều tra kỹ thuật số là gì?\nA. Việc sửa chữa các thiết bị điện tử gia dụng bị hỏng\nB. Lĩnh vực chuyên biệt của điều tra số nhằm thu thập, giải mã và phân tích dữ liệu chứng cứ số từ các thiết bị thông minh (Smart TV, camera thông minh, thiết bị đeo theo dõi sức khỏe)\nC. Bán các thiết bị cảm biến thông minh\nD. Tắt kết nối Internet của các thiết bị trong nhà\nĐáp án: B\nLời giải: Với sự phổ biến của thiết bị IoT, dữ liệu cảm biến (như dữ liệu GPS của đồng hồ thông minh, nhật ký bật đèn của nhà thông minh) ngày càng trở thành chứng cứ số quan trọng trong các vụ án hình sự.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 248: Nền tảng \"GitHub\" hoặc \"GitLab\" hỗ trợ cộng đồng an ninh mạng như thế nào?\nA. Nơi chia sẻ các bài hát miễn phí\nB. Nơi lưu trữ, chia sẻ mã nguồn mở của các công cụ bảo mật, các kịch bản kiểm thử, các danh mục lỗ hổng và tài liệu học tập hợp tác toàn cầu\nC. Một trang mạng xã hội dành riêng cho người mẫu ảnh\nD. Sàn giao dịch tiền ảo bất hợp pháp\nĐáp án: B\nLời giải: GitHub là kho tài nguyên khổng lồ nơi các chuyên gia an ninh chia sẻ các công cụ phân tích mã nguồn mở, kịch bản tự động hóa và các mẫu quy tắc phát hiện tấn công.\nChương: 6\nChủ đề: Đạo Đức Nghề Nghiệp, Pháp Lý & Sự Nghiệp An Ninh Mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 249: Thuật ngữ \"Ethical Hacker\" còn được gọi bằng một tên gọi quen thuộc nào trong ngành an ninh mạng?\nA. Black Hat Hacker\nB. White Hat Hacker (Tin tặc mũ trắng)\nC. Cracker\nD. Phisher\nĐáp án: B\nLời giải: White Hat Hacker chính là Ethical Hacker - những người sử dụng tài năng bảo mật phục vụ mục đích xây dựng, bảo vệ hệ thống và tuân thủ đạo đức pháp luật.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 250: Sau khi hoàn thành khóa học \"Introduction to Cybersecurity\" của Cisco Networking Academy, bước đi tiếp theo lý tưởng nhất cho người học muốn theo đuổi nghề nghiệp chuyên nghiệp là gì?\nA. Ngừng học vì kiến thức đã đủ để làm chuyên gia hàng đầu thế giới\nB. Tiếp tục học các khóa chuyên sâu tiếp theo như Cisco CyberOps Associate hoặc CCNA Security, thực hành lab trên Packet Tracer, tham gia cộng đồng CTF và ôn thi các chứng chỉ nghề nghiệp quốc tế\nC. Đi tìm các trang web để thử tấn công bất hợp pháp\nD. Xóa tài khoản NetAcad của mình\nĐáp án: B\nLời giải: Khóa học \"Introduction to Cybersecurity\" là nền móng nhập môn. Để xây dựng sự nghiệp vững vàng, người học cần tiếp tục nâng cao kiến thức chuyên sâu (CyberOps, CCNA), rèn luyện kỹ năng thực chiến và tích lũy chứng chỉ ngành.\nChương: 6\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 251: Khi một người dùng mở trình duyệt web và truy cập vào địa chỉ `yummyrecipesforme.org`, thứ tự và vai trò của 4 giao thức mạng nào sau đây được thực thi đồng thời?\nA. FTP tải file $\\rightarrow$ Telnet kết nối $\\rightarrow$ SMTP gửi thư $\\rightarrow$ ICMP báo lỗi.\nB. DNS dịch tên miền sang IP $\\rightarrow$ ARP tìm địa chỉ MAC $\\rightarrow$ TCP bắt tay 3 bước $\\rightarrow$ HTTPS truyền tải trang web an toàn.\nC. DHCP cấp IP $\\rightarrow$ SNMP quản lý $\\rightarrow$ HTTP truyền trang web $\\rightarrow$ SFTP mã hóa.\nD. BGP định tuyến $\\rightarrow$ OSPF tìm đường $\\rightarrow$ POP3 tải thư $\\rightarrow$ UDP gửi dữ liệu.\nĐáp án: B\nLời giải: Giáo trình Coursera minh họa ví dụ điển hình: Để truy cập 1 website, thiết bị dùng DNS để lấy IP, ARP để biết MAC của router tiếp theo, TCP để thiết lập kết nối tin cậy và HTTPS để trao đổi nội dung mã hóa an toàn.\nChương: 5\nChủ đề: Giao thức mạng & Bảo mật Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 252: Ba nhóm giao thức mạng chính bao gồm:\nA. Giao thức cục bộ, giao thức toàn cầu, giao thức không dây.\nB. Communication (Giao tiếp), Management (Quản lý), Security (Bảo mật).\nC. Hardware, Software, Firmware protocols.\nD. Input, Process, Output protocols.\nĐáp án: B\nLời giải: Ba nhóm giao thức mạng cốt lõi: Giao tiếp (Communication - như TCP, UDP), Quản lý (Management - như SNMP, ICMP) và Bảo mật (Security - như HTTPS, SFTP, SSH).\nChương: 5\nChủ đề: Giao thức mạng & Bảo mật Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 253: Giao thức TCP khác với giao thức UDP ở đặc điểm cơ bản nào sau đây?\nA. TCP là giao thức không kết nối, trong khi UDP có kết nối.\nB. TCP thiết lập kết nối tin cậy thông qua quá trình bắt tay 3 bước (SYN $\\rightarrow$ SYN/ACK $\\rightarrow$ ACK), đảm bảo dữ liệu đến đúng thứ tự; còn UDP không kết nối, truyền tải nhanh nhưng không đảm bảo độ tin cậy.\nC. UDP hoạt động ở Tầng Ứng dụng, còn TCP hoạt động ở Tầng Internet.\nD. TCP chỉ truyền tải được âm thanh, còn UDP truyền tải văn bản.\nĐáp án: B\nLời giải: TCP là giao thức hướng kết nối (Connection-oriented) đảm bảo truyền tin cậy qua 3-way handshake; UDP là giao thức không hướng kết nối (Connectionless) tối ưu cho tốc độ và thời gian thực.\nChương: 5\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 254: Một chuyên viên an ninh mạng bắt các gói tin HTTPS (Port 443) và SFTP (Port 22) trên mạng nội bộ. Nhận định nào sau đây là ĐÚNG về khả năng quan sát của chuyên viên này?\nA. Chuyên viên có thể đọc được toàn bộ nội dung văn bản truyền tải.\nB. Các giao thức này mã hóa nội dung tải trọng (payload) nên không đọc được nội dung, nhưng KHÔNG che giấu địa chỉ IP nguồn và IP đích trong tiêu đề gói tin.\nC. Toàn bộ gói tin từ IP nguồn đến IP đích đều bị biến thành chuỗi rỗng không thể đọc được.\nD. Giao thức HTTPS tự động đổi địa chỉ MAC của máy tính liên tục.\nĐáp án: B\nLời giải: Giáo trình Course 2 nhấn mạnh: Các giao thức mã hóa (HTTPS, SFTP) bảo vệ payload nhưng không mã hóa tiêu đề IP; người nghe lén vẫn thấy rõ IP nguồn và IP đích.\nChương: 5\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 255: Quá trình Network Address Translation (NAT) thực hiện nhiệm vụ gì trên Router/Firewall?\nA. Chuyển đổi mã nguồn phần mềm sang mã máy.\nB. Chuyển đổi địa chỉ IP riêng (Private IP) trong mạng nội bộ thành địa chỉ IP công khai (Public IP) khi gói tin đi ra Internet và ngược lại khi nhận phản hồi.\nC. Đổi mật khẩu Wi-Fi tự động theo chu kỳ 1 giờ.\nD. Tăng độ dài của cáp mạng LAN.\nĐáp án: B\nLời giải: NAT ánh xạ các địa chỉ IP riêng (không thể định tuyến trên Internet) sang một hoặc nhiều địa chỉ IP công khai hợp lệ để giao tiếp với thế giới bên ngoài.\nChương: 5\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 256: Dải địa chỉ IP nào sau đây thuộc khối địa chỉ IP riêng (Private IP Address) theo chuẩn RFC 1918?\nA. `8.8.8.0` đến `8.8.8.255`\nB. `192.168.0.0` đến `192.168.255.255`\nC. `1.1.1.0` đến `1.1.1.255`\nD. `203.162.0.0` đến `203.162.255.255`\nĐáp án: B\nLời giải: 3 dải Private IP chuẩn: Lớp A (`10.0.0.0/8`), Lớp B (`172.16.0.0/12`), Lớp C (`192.168.0.0/16`).\nChương: 5\nChủ đề: Giao thức mạng & Bảo mật Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 257: Giao thức DHCP hoạt động trên các cổng (Port) UDP nào cho Server và Client?\nA. Server: Port 80; Client: Port 443\nB. Server: UDP Port 67; Client: UDP Port 68\nC. Server: TCP Port 20; Client: TCP Port 21\nD. Server: UDP Port 53; Client: UDP Port 53\nĐáp án: B\nLời giải: DHCP Server lắng nghe trên UDP port 67, DHCP Client gửi và nhận phản hồi trên UDP port 68.\nChương: 5\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 258: Giao thức Phân giải Địa chỉ (ARP) hoạt động ở tầng nào của mô hình TCP/IP và có số hiệu cổng (Port) là bao nhiêu?\nA. Tầng Ứng dụng, sử dụng TCP Port 25\nB. Tầng Truy cập Mạng (Network Access / Lớp 2), KHÔNG sử dụng số hiệu cổng\nC. Tầng Giao vận, sử dụng UDP Port 69\nD. Tầng Internet, sử dụng TCP Port 80\nĐáp án: B\nLời giải: ARP ánh xạ IP sang MAC ở tầng Data Link (Lớp 2); vì nằm dưới Tầng Giao vận (Lớp 4) nên ARP không có khái niệm số cổng (Port).\nChương: 5\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 259: Tại sao giao thức SSH (Port 22) được khuyến nghị sử dụng để thay thế hoàn toàn giao thức Telnet (Port 23)?\nA. Vì Telnet chạy chậm hơn SSH 10 lần.\nB. Vì Telnet truyền toàn bộ dữ liệu đăng nhập và mật khẩu dưới dạng văn bản rõ (cleartext), trong khi SSH cung cấp xác thực và mã hóa toàn bộ phiên truyền tải.\nC. Vì Telnet chỉ chạy được trên điện thoại di động.\nD. Vì SSH là phần mềm miễn phí còn Telnet phải mua bản quyền đắt tiền.\nĐáp án: B\nLời giải: Telnet không có cơ chế mã hóa, kẻ nghe lén trên mạng có thể đọc được thông tin đăng nhập dễ dàng; SSH thay thế Telnet bằng mã hóa an toàn.\nChương: 5\nChủ đề: Giao thức truyền thông & Cổng dịch vụ\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 260: Điểm khác biệt quan trọng giữa hai giao thức nhận email POP3 và IMAP là gì?\nA. POP3 chỉ dùng cho điện thoại, IMAP dùng cho máy tính.\nB. POP3 tải toàn bộ email về máy cục bộ và thường xóa trên server (khó đồng bộ đa thiết bị); trong khi IMAP lưu trữ email trên server và cho phép đồng bộ trạng thái trên nhiều thiết bị.\nC. POP3 có mã hóa còn IMAP không có mã hóa.\nD. IMAP dùng để gửi email, POP3 dùng để nhận email.\nĐáp án: B\nLời giải: POP3 (Port 110/995) tải về máy cục bộ, còn IMAP (Port 143/993) giữ thư trên server, cho phép người dùng đồng bộ trạng thái đọc/xóa trên nhiều thiết bị cùng lúc.\nChương: 5\nChủ đề: Giao thức mạng & Bảo mật Wi-Fi\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 261: Cổng nào sau đây được sử dụng để gửi email an toàn qua giao thức SMTP có hỗ trợ mã hóa TLS?\nA. Port 23\nB. Port 587\nC. Port 80\nD. Port 53\nĐáp án: B\nLời giải: Cổng gửi email truyền thống là TCP 25 (không mã hóa), trong khi cổng chuẩn hiện đại có mã hóa TLS/STARTTLS là Port 587 (hoặc 465).\nChương: 5\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 262: Tiêu chuẩn kỹ thuật nền tảng cho mạng cục bộ không dây (Wi-Fi) do tổ chức nào xác định?\nA. IETF RFC 791\nB. IEEE họ tiêu chuẩn 802.11\nC. ISO 9001\nD. ANSI C\nĐáp án: B\nLời giải: IEEE 802.11 là họ tiêu chuẩn kỹ thuật giao tiếp không dây do Viện Kỹ sư Điện và Điện tử (IEEE) ban hành.\nChương: 5\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 263: Chuẩn bảo mật Wi-Fi nào sau đây là lâu đời nhất (ra mắt năm 1999) và hiện nay bị coi là cực kỳ nguy hiểm, không bao giờ được sử dụng?\nA. WPA3\nB. WEP (Wired Equivalent Privacy)\nC. WPA2-Enterprise\nD. WPA-TKIP\nĐáp án: B\nLời giải: WEP (1999) sử dụng thuật toán RC4 với vector khởi tạo yếu, có thể bị tin tặc thu thập gói tin và giải mã khóa trong vòng vài phút.\nChương: 5\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 264: Chuẩn bảo mật Wi-Fi WPA2 (2004) sử dụng thuật toán mã hóa mạnh nào và giao thức đóng gói nào?\nA. DES và TKIP\nB. Thuật toán mã hóa AES và giao thức CCMP\nC. MD5 và SHA-1\nD. RC4 và WEP\nĐáp án: B\nLời giải: WPA2 nâng cấp vượt bậc so với WPA nhờ tích hợp thuật toán mã hóa khối chuẩn cao cấp AES cùng giao thức toàn vẹn CCMP.\nChương: 5\nChủ đề: Mật mã học (Cryptography)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 265: Chuẩn bảo mật Wi-Fi mới nhất WPA3 (2018) mang lại cải tiến đột phá nào so với WPA2?\nA. Giảm tốc độ truyền tải mạng Wi-Fi xuống 50%.\nB. Khắc phục triệt để lỗ hổng bắt tay KRACK và sử dụng giao thức xác thực SAE (Simultaneous Authentication of Equals) chống tấn công từ điển ngoại tuyến.\nC. Cho phép mọi người kết nối mà không cần mật khẩu.\nD. Tự động tắt sóng Wi-Fi khi trời mưa.\nĐáp án: B\nLời giải: WPA3 sử dụng SAE (thay cho WPA2-PSK) để bảo vệ bắt tay, ngăn tin tặc lưu gói tin về máy để thử mật khẩu từ điển ngoại tuyến (offline dictionary attack), đồng thời loại bỏ nguy cơ từ lỗ hổng KRACK.\nChương: 5\nChủ đề: Bảo mật mạng không dây Wi-Fi\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 266: Một cuộc xâm nhập mạng (Network Intrusion) thành công thường gây ra những hậu quả nào cho tổ chức?\nA. Tổn thất tài chính (Financial loss)\nB. Gián đoạn vận hành (Operational downtime)\nC. Hủy hoại danh tiếng và niềm tin khách hàng (Reputational damage)\nD. Tất cả các phương án trên\nĐáp án: D\nLời giải: Giáo trình Course 3 nêu rõ 3 nhóm hậu quả chính của một cuộc xâm nhập: tài chính, vận hành và danh tiếng.\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 267: Trong bài học về sự cố rò rỉ dữ liệu của tập đoàn Home Depot năm 2014, kẻ tấn công đã xâm nhập ban đầu thông qua con đường nào?\nA. Dò mật khẩu Wi-Fi của cửa hàng bán lẻ.\nB. Sử dụng thông tin đăng nhập bị đánh cắp của một nhà cung cấp bên thứ ba (Third-party vendor) để vào mạng nội bộ, sau đó cài mã độc lên các máy POS.\nC. Bẻ gãy khóa cửa sổ của trung tâm dữ liệu.\nD. Tấn công DDoS làm sập trang web bán lẻ.\nĐáp án: B\nLời giải: Home Depot là bài học kinh điển về rủi ro từ chuỗi cung ứng: kẻ xấu đánh cắp tài khoản của nhà thầu phụ để xâm nhập mạng và cài mã độc lên hệ thống máy tính tiền (Point-of-Sale).\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 268: Sự khác biệt cơ bản giữa \"Interception Attack\" (Tấn công đánh chặn) và \"Backdoor\" (Cửa sau) là gì?\nA. Interception là phần cứng, Backdoor là phần mềm.\nB. Interception tập trung vào việc chặn bắt hoặc can thiệp dữ liệu đang truyền trên đường truyền; trong khi Backdoor là cơ chế giúp kẻ tấn công duy trì và mở rộng quyền truy cập bền bỉ vào hệ thống mà bỏ qua xác thực thông thường.\nC. Interception chỉ xảy ra trên điện thoại, Backdoor trên máy chủ.\nD. Hai khái niệm này hoàn toàn giống nhau.\nĐáp án: B\nLời giải: Interception can thiệp dữ liệu đang lưu chuyển (in transit), còn Backdoor dùng để duy trì quyền kiểm soát hệ thống lâu dài (persistence).\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 269: Cuộc tấn công SYN Flood làm cạn kiệt tài nguyên máy chủ bằng cách khai thác giai đoạn nào của quy trình bắt tay 3 bước TCP?\nA. Kẻ tấn công gửi liên tục gói tin ACK mà không gửi SYN.\nB. Kẻ tấn công gửi hàng loạt gói tin SYN với IP nguồn giả mạo, máy chủ phản hồi SYN/ACK và chờ đợi, nhưng kẻ tấn công không bao giờ gửi lại gói tin ACK cuối cùng, làm tràn bộ đệm kết nối nửa mở (half-open).\nC. Kẻ tấn công gửi gói tin FIN để đóng kết nối ngay lập tức.\nD. Kẻ tấn công ngắt nguồn điện máy chủ.\nĐáp án: B\nLời giải: SYN Flood tạo ra hàng ngàn kết nối nửa mở (half-open connection states), khiến máy chủ hết dung lượng bộ nhớ dành cho bảng quản lý kết nối TCP.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 270: Tấn công \"Ping of Death\" là gì?\nA. Gửi gói tin ICMP có chứa chất độc hóa học.\nB. Gửi gói tin ICMP bị phân mảnh có kích thước tổng thể vượt quá giới hạn tối đa của giao thức IPv4 (65,535 bytes), gây tràn bộ nhớ đệm và làm sập hệ điều hành đích khi tái lắp ráp gói tin.\nC. Tắt dịch vụ Ping trên toàn bộ mạng Internet.\nD. Gửi 1 gói tin Ping duy nhất vào ban đêm.\nĐáp án: B\nLời giải: Gói tin IPv4 hợp lệ tối đa là 65,535 bytes; Ping of Death cố tình gửi gói phân mảnh vượt quá kích thước này làm hệ điều hành nạn nhân bị crash khi ghép lại.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 271: Cuộc tấn công DDoS vào nhà cung cấp dịch vụ Dyn DNS năm 2016 đã sử dụng lực lượng thiết bị nào để tạo ra lưu lượng tấn công kỷ lục?\nA. Các siêu máy tính của các trường đại học hàng đầu\nB. Mạng botnet Mirai bao gồm hàng triệu thiết bị IoT (camera giám sát, đầu ghi DVR, router gia đình) bị nhiễm mã độc do dùng mật khẩu mặc định\nC. Các máy chủ đám mây của Google\nD. Các vệ tinh quỹ đạo thấp\nĐáp án: B\nLời giải: Vụ tấn công Dyn DNS năm 2016 là minh chứng lịch sử về việc botnet Mirai biến các thiết bị IoT gia đình thành vũ khí DDoS khổng lồ làm tê liệt hệ thống phân giải tên miền Internet.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 272: Chế độ \"Promiscuous Mode\" (Chế độ hỗn tạp) trên card mạng (NIC) có ý nghĩa gì đối với hoạt động bắt gói tin (Packet Sniffing)?\nA. Cho phép card mạng chỉ nhận các gói tin có địa chỉ MAC đích là chính nó.\nB. Cho phép card mạng bỏ qua bộ lọc địa chỉ MAC phần cứng và tiếp nhận toàn bộ các gói tin truyền qua môi trường mạng vật lý, bất kể gói tin gửi cho ai.\nC. Làm cho card mạng phát sóng Wi-Fi mạnh hơn.\nD. Ngắt kết nối card mạng khỏi máy tính.\nĐáp án: B\nLời giải: Bình thường NIC chỉ nhận gói tin gửi riêng cho MAC của nó hoặc broadcast; ở chế độ Promiscuous, NIC nhận mọi gói tin di chuyển qua dây cáp/sóng mạng.\nChương: 2\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 273: Phân biệt giữa \"Passive Sniffing\" (Nghe lén thụ động) và \"Active Sniffing\" (Nghe lén chủ động)?\nA. Passive sniffing đắt tiền hơn Active sniffing.\nB. Passive sniffing chỉ lắng nghe thụ động trên môi trường chia sẻ (như Hub hoặc Wi-Fi không mã hóa); trong khi Active sniffing chủ động can thiệp vào Switch (như dùng ARP Poisoning hoặc làm tràn bảng MAC/CAM) để ép lưu lượng đi qua máy kẻ tấn công.\nC. Active sniffing không bao giờ bị phát hiện.\nD. Passive sniffing chỉ bắt được tín hiệu Bluetooth.\nĐáp án: B\nLời giải: Trong mạng Switch phân đoạn, lưu lượng chỉ đi đến cổng đích; do đó kẻ nghe lén phải dùng kỹ thuật chủ động (Active Sniffing) như đầu độc ARP để chuyển hướng gói tin về máy mình.\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 274: Kỹ thuật giả mạo địa chỉ IP (IP Spoofing) là gì?\nA. Đổi địa chỉ nhà ở trên hóa đơn Internet.\nB. Kẻ tấn công thay đổi thông tin địa chỉ IP nguồn trong tiêu đề gói tin IP thành địa chỉ IP của một máy tính khác nhằm che giấu danh tính hoặc mạo danh hệ thống được tin cậy.\nC. Tắt dịch vụ cấp phát IP trên mạng.\nD. Cài đặt thêm card mạng mới cho máy chủ.\nĐáp án: B\nLời giải: Tiêu đề gói tin IP không có cơ chế tự xác thực; kẻ tấn công có thể ghi đè bất kỳ địa chỉ IP nào vào trường Source IP để mạo danh máy khác.\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 275: Tấn công \"On-Path Attack\" (trước đây thường gọi là Man-in-the-Middle) diễn ra như thế nào?\nA. Kẻ tấn công đứng chặn trên đường đi làm của chuyên viên bảo mật.\nB. Kẻ tấn công chèn mình vào giữa luồng truyền thông tin của hai bên tin cậy, cho phép chúng nghe lén, chặn bắt hoặc chỉnh sửa dữ liệu mà các bên không hề hay biết.\nC. Kẻ tấn công gửi email xin việc vào công ty.\nD. Kẻ tấn công cắt đứt cáp quang ngầm.\nĐáp án: B\nLời giải: On-path attack đánh vào luồng giao tiếp giữa 2 thiết bị (thường qua kỹ thuật ARP spoofing hoặc rogue gateway) để kiểm soát dữ liệu qua lại.\nChương: 2\nChủ đề: Tấn công Man-in-the-Middle (On-Path)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 276: Cuộc tấn công phát lại (Replay Attack) hoạt động theo nguyên lý nào?\nA. Mở lại một video bài giảng trên YouTube nhiều lần.\nB. Kẻ tấn công chặn bắt một gói tin chứa dữ liệu xác thực hợp lệ trên mạng, sau đó gửi lại nguyên vẹn gói tin đó vào một thời điểm khác để vượt qua cơ chế đăng nhập.\nC. Khởi động lại router mạng liên tục.\nD. Gửi thư rác quảng cáo lặp đi lặp lại.\nĐáp án: B\nLời giải: Kẻ tấn công không cần giải mã mật khẩu; chúng chỉ cần bắt gói tin xác thực đã được mã hóa và phát lại (replay) cho máy chủ để mạo danh phiên đăng nhập.\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 277: Biện pháp kỹ thuật nào sau đây giúp chống lại cuộc tấn công Replay Attack hiệu quả nhất?\nA. Tăng dung lượng bộ nhớ RAM máy tính\nB. Sử dụng dấu thời gian (Timestamps), số thứ tự gói tin (Sequence numbers) và giá trị ngẫu nhiên dùng một lần (Nonce) trong quá trình xác thực\nC. Sử dụng chuột máy tính có dây\nD. Đổi tên tệp tài liệu\nĐáp án: B\nLời giải: Giá trị ngẫu nhiên dùng một lần (Nonce) và Timestamp đảm bảo gói tin chỉ có hiệu lực trong một khoảnh khắc duy nhất; nếu kẻ tấn công gửi lại sau đó, gói tin sẽ bị từ chối ngay.\nChương: 2\nChủ đề: Xâm nhập mạng & Kỹ thuật tấn công\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 278: Tấn công \"Smurf Attack\" là sự kết hợp nguy hiểm giữa hai yếu tố nào?\nA. Virus máy tính và Trojan Horse\nB. Giả mạo địa chỉ IP nguồn (IP Spoofing) và khuếch đại lưu lượng ICMP Echo Request gửi tới địa chỉ Broadcast của mạng\nC. Mạng xã hội và tin nhắn lừa đảo\nD. Phần mềm độc hại và USB nhiễm virus\nĐáp án: B\nLời giải: Smurf attack gửi ICMP ping tới địa chỉ broadcast với IP nguồn là nạn nhân, khiến hàng trăm máy tính trong mạng cùng trả lời về một địa chỉ IP duy nhất của nạn nhân.\nChương: 2\nChủ đề: Tấn công DoS & DDoS\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 279: Cơ chế lọc gói tin Ingress Filtering và Egress Filtering trên tường lửa biên giúp ngăn chặn mối đe dọa nào?\nA. Ngăn máy tính bị bám bụi bẩn\nB. Phát hiện và loại bỏ các gói tin có địa chỉ IP nguồn \"không thể hợp lệ\" (ví dụ: gói tin từ ngoài Internet đi vào nhưng lại mang IP nguồn là dải IP nội bộ), ngăn chặn IP Spoofing\nC. Tự động tắt máy tính khi hết giờ làm việc\nD. Tăng độ sáng màn hình\nĐáp án: B\nLời giải: Ingress/Egress filtering kiểm tra tính hợp lý của địa chỉ IP nguồn: Chặn các gói tin từ Internet vào nhưng mạo danh IP mạng nội bộ, triệt tiêu tấn công IP Spoofing.\nChương: 2\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 280: Nguyên tắc \"Defense-in-Depth\" (Phòng thủ theo chiều sâu) trong an ninh mạng khẳng định điều gì?\nA. Chỉ cần mua một thiết bị tường lửa đắt tiền nhất là đủ an toàn tuyệt đối.\nB. Không có một biện pháp bảo mật đơn lẻ nào là hoàn hảo; phải kết hợp nhiều lớp phòng vệ (tường lửa, phân đoạn mạng, mã hóa, giám sát, con người) để bảo vệ hệ thống.\nC. Đào hào sâu xung quanh tòa nhà văn phòng.\nD. Cài đặt 5 phần mềm diệt virus trên cùng một máy tính.\nĐáp án: B\nLời giải: Defense-in-depth là triết lý phòng thủ đa tầng: nếu một tầng bảo mật bị chọc thủng, các tầng bảo vệ tiếp theo vẫn duy trì khả năng ngăn chặn kẻ tấn công.\nChương: 2\nChủ đề: Phòng thủ theo chiều sâu (Defense-in-Depth)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 281: Khái niệm \"Security Hardening\" được định nghĩa chính xác nhất là gì?\nA. Việc lắp thêm vỏ thép bảo vệ bên ngoài máy chủ vật lý.\nB. Quá trình chủ động cấu hình, loại bỏ các thành phần không cần thiết và vá các điểm yếu nhằm làm cho hệ thống trở nên kiên cố và khó bị xâm nhập hơn.\nC. Việc tăng gấp đôi dung lượng ổ đĩa cứng của máy chủ.\nD. Mua thêm các gói bảo hiểm tài chính cho hệ thống mạng.\nĐáp án: B\nLời giải: Hardening là tập hợp các thao tác kỹ thuật chủ động nhằm giảm thiểu rủi ro, đóng các cổng không dùng, gỡ bỏ dịch vụ thừa và gia cố cấu hình bảo mật.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 282: Mối quan hệ giữa \"Security Hardening\" và \"Attack Surface\" (Bề mặt tấn công) là gì?\nA. Hardening làm tăng kích thước của Attack Surface.\nB. Mục tiêu cốt lõi của Security Hardening là thu hẹp tối đa Attack Surface bằng cách vô hiệu hóa hoặc loại bỏ các điểm vào, cổng, dịch vụ thừa mà kẻ tấn công có thể lợi dụng.\nC. Attack Surface không liên quan gì đến Hardening.\nD. Hardening chỉ áp dụng khi Attack Surface bằng 0.\nĐáp án: B\nLời giải: Càng ít dịch vụ chạy, ít cổng mở, ít phần mềm thừa thì bề mặt tấn công càng nhỏ, kẻ tấn công càng có ít cơ hội tìm ra lỗ hổng để khai thác.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 283: Bốn bước trong vòng lặp cải tiến liên tục của quy trình Hardening bao gồm:\nA. Mua sắm $\\rightarrow$ Lắp đặt $\\rightarrow$ Bật nguồn $\\rightarrow$ Bỏ quên.\nB. Giảm bề mặt tấn công $\\rightarrow$ Thiết lập Baseline an toàn $\\rightarrow$ Giám sát sai lệch $\\rightarrow$ Cải tiến và vá lỗi liên tục.\nC. Tấn công $\\rightarrow$ Trả tiền chuộc $\\rightarrow$ Cài lại máy $\\rightarrow$ Nghỉ việc.\nD. Quét virus $\\rightarrow$ Xóa file $\\rightarrow$ Khởi động lại $\\rightarrow$ Tắt máy.\nĐáp án: B\nLời giải: Course 4 mô tả chu trình 4 bước: 1. Giảm bề mặt; 2. Chuẩn hóa baseline; 3. Giám sát so sánh sai lệch; 4. Cải tiến liên tục.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 284: Biện pháp nào sau đây là một phần quan trọng của \"OS Hardening\" (Tăng cường bảo mật Hệ điều hành)?\nA. Giữ nguyên mật khẩu mặc định của hệ thống\nB. Áp dụng quy trình quản lý bản vá (Patch Management), vô hiệu hóa tài khoản Guest, cấu hình Security Baseline và áp dụng MFA\nC. Bật toàn bộ các dịch vụ chia sẻ file qua mạng\nD. Tắt tính năng tự động cập nhật của hệ điều hành\nĐáp án: B\nLời giải: OS Hardening bao gồm việc cập nhật vá lỗi kịp thời, cấu hình tài khoản nghiêm ngặt, tắt dịch vụ không cần thiết và thực thi baseline an toàn.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 285: Thuật ngữ \"Security Baseline\" trong quản trị hệ điều hành có ý nghĩa gì?\nA. Mức lương tối thiểu của nhân viên bảo mật\nB. Cấu hình bảo mật tiêu chuẩn tối thiểu, được văn bản hóa và bắt buộc áp dụng đồng bộ trên tất cả các thiết bị trong tổ chức\nC. Tốc độ đường truyền Internet tối thiểu\nD. Số lượng nhân viên tối thiểu trong một ca trực\nĐáp án: B\nLời giải: Baseline là bộ tiêu chuẩn cấu hình an toàn mẫu (ví dụ chuẩn CIS Benchmarks) được áp dụng đồng bộ cho mọi máy trạm và máy chủ trong doanh nghiệp.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 286: Kỹ thuật \"Sandboxing\" (Hộp cát) bảo vệ hệ điều hành như thế nào?\nA. Đổ cát xung quanh máy tính để chống cháy nổ\nB. Chạy ứng dụng hoặc tệp tin đáng ngờ trong một môi trường ảo hóa bị cô lập nghiêm ngặt, ngăn chặn mã độc can thiệp hoặc lây lan vào hệ điều hành thật\nC. Tự động xóa ứng dụng sau khi cài đặt\nD. Tăng độ phân giải đồ họa của ứng dụng\nĐáp án: B\nLời giải: Sandboxing tạo ra môi trường cách ly an toàn: nếu tệp đính kèm chứa mã độc bùng phát trong sandbox, nó cũng không thể gây hại cho hệ thống chủ.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 287: Trong quy trình Network Hardening, chính sách \"Implicit Deny\" (Ngầm định từ chối) trên tường lửa có nghĩa là gì?\nA. Cho phép tất cả lưu lượng đi qua mạng trừ khi có lệnh cấm cụ thể.\nB. Tự động từ chối và chặn tất cả các lưu lượng truy cập mạng, NGOẠI TRỪ những lưu lượng được chỉ định cho phép rõ ràng trong danh sách quy tắc.\nC. Không bao giờ trả lời tin nhắn của người dùng.\nD. Tắt tường lửa vào ban đêm.\nĐáp án: B\nLời giải: Implicit Deny là nguyên tắc vàng của tường lửa: chỉ mở những cổng và dịch vụ thực sự cần thiết, còn lại tất cả lưu lượng khác đều bị chặn mặc định ở cuối danh sách luật.\nChương: 4\nChủ đề: Tường lửa mạng (Firewalls)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 288: Lợi ích của việc phân đoạn mạng (Network Segmentation) đối với bảo mật tổ chức là gì?\nA. Giúp tiết kiệm chi phí mua dây mạng\nB. Giới hạn phạm vi ảnh hưởng (Blast Radius); nếu một máy tính trong phân đoạn này bị nhiễm mã độc, kẻ tấn công không thể tự do quét và lan truyền sang các phân đoạn quan trọng khác\nC. Cho phép mọi người truy cập dữ liệu tài chính tự do\nD. Giúp tăng tốc độ quạt gió của switch\nĐáp án: B\nLời giải: Phân đoạn mạng cô lập các vùng chức năng, ngăn chặn kỹ thuật di chuyển ngang (Lateral Movement) của tin tặc khi đã xâm nhập được một máy trạm.\nChương: 4\nChủ đề: Phân đoạn mạng & Vùng DMZ\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 289: Theo Mô hình Trách nhiệm Chung (Shared Responsibility Model) trong điện toán đám mây, với mô hình IaaS (Hạ tầng như một dịch vụ), khách hàng chịu trách nhiệm bảo mật những thành phần nào?\nA. Phần cứng máy chủ vật lý và hệ thống điện của trung tâm dữ liệu\nB. Hệ điều hành khách, các bản vá bảo mật, cấu hình mạng ảo, ứng dụng, phân quyền IAM và dữ liệu của khách hàng\nC. Khách hàng không chịu bất kỳ trách nhiệm nào\nD. Chỉ chịu trách nhiệm trả tiền hàng tháng\nĐáp án: B\nLời giải: Với IaaS (như AWS EC2), nhà cung cấp đám mây chỉ chịu trách nhiệm từ lớp ảo hóa vật lý trở xuống; khách hàng toàn quyền và chịu trách nhiệm cấu hình an toàn cho OS, ứng dụng và dữ liệu.\nChương: 4\nChủ đề: Hàm băm một chiều (Hash Function)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 290: Với mô hình dịch vụ SaaS (Phần mềm như một dịch vụ, ví dụ Google Workspace, Microsoft 365), trách nhiệm chính của khách hàng là gì?\nA. Sửa chữa máy chủ vật lý khi bị hỏng ổ cứng\nB. Quản lý danh tính người dùng, cấu hình quyền truy cập và bảo vệ dữ liệu được đưa lên dịch vụ\nC. Tự viết mã nguồn cho ứng dụng SaaS\nD. Cập nhật bản vá hệ điều hành máy chủ của nhà cung cấp\nĐáp án: B\nLời giải: Trong SaaS, nhà cung cấp lo toàn bộ hạ tầng và phần mềm; khách hàng chỉ chịu trách nhiệm bảo vệ tài khoản người dùng, cấu hình truy cập và dữ liệu lưu trữ.\nChương: 4\nChủ đề: Bảo mật điện toán đám mây (Cloud Security)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 291: Lỗi cấu hình sai trên đám mây (Cloud Misconfiguration) phổ biến và nguy hiểm nhất từng dẫn đến hàng loạt vụ rò rỉ dữ liệu quy mô lớn là gì?\nA. Đặt tên máy chủ quá dài\nB. Để các kho lưu trữ dữ liệu đám mây (như AWS S3 Buckets hoặc Azure Blobs) ở chế độ công khai (Publicly Accessible) cho bất kỳ ai trên Internet đều đọc được\nC. Sử dụng giao diện đám mây bằng tiếng Anh\nD. Chọn trung tâm dữ liệu ở quá xa trụ sở công ty\nĐáp án: B\nLời giải: Cấu hình sai quyền truy cập bucket S3 công khai là nguyên nhân của hàng trăm vụ lộ dữ liệu nhạy cảm trên toàn cầu; hardening đám mây đòi hỏi phải chặn public access mặc định.\nChương: 4\nChủ đề: Bảo mật điện toán đám mây (Cloud Security)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 292: Nguyên tắc \"Đặc quyền tối thiểu\" (Principle of Least Privilege) trong Quản lý Danh tính và Quyền truy cập (IAM) trên đám mây yêu cầu điều gì?\nA. Cấp quyền Root / Admin cho tất cả các lập trình viên để tiện làm việc\nB. Chỉ cấp cho mỗi người dùng, ứng dụng hoặc dịch vụ đúng những quyền hạn tối thiểu cần thiết để thực hiện công việc của họ trong một khoảng thời gian nhất định\nC. Không bao giờ cho phép nhân viên đổi mật khẩu\nD. Cấp quyền ngẫu nhiên mỗi tuần\nĐáp án: B\nLời giải: Least Privilege hạn chế rủi ro: nếu một tài khoản hoặc khóa API bị lộ, kẻ tấn công chỉ có quyền hạn tối thiểu trong phạm vi hẹp thay vì chiếm toàn bộ hạ tầng đám mây.\nChương: 4\nChủ đề: Bảo mật điện toán đám mây (Cloud Security)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 293: Tại sao việc nhúng trực tiếp khóa bí mật API (Hardcoded API Keys) vào mã nguồn ứng dụng được lưu trên GitHub lại là hành vi cực kỳ nguy hiểm?\nA. Vì mã nguồn sẽ bị tăng dung lượng\nB. Kẻ tấn công liên tục quét các kho mã nguồn công khai; khóa API bị lộ sẽ cho phép chúng chiếm quyền điều khiển tài nguyên đám mây ngay lập tức và gây thiệt hại tài chính nặng nề\nC. Vì GitHub sẽ từ chối lưu file mã nguồn\nD. Vì trình biên dịch sẽ báo lỗi cú pháp\nĐáp án: B\nLời giải: Bot tự động của tin tặc quét GitHub từng giây để tìm API key bị lộ; lập trình viên phải dùng biến môi trường (Environment variables) hoặc dịch vụ Secret Manager/KMS.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 294: Dịch vụ Quản lý Khóa (KMS - Key Management Service) trong môi trường đám mây có vai trò gì?\nA. Quản lý chìa khóa cửa phòng làm việc\nB. Tạo, lưu trữ an toàn, kiểm soát truy cập và tự động xoay vòng (Rotate) các khóa mật mã dùng để mã hóa dữ liệu độc lập với ứng dụng\nC. Tự động đăng nhập vào các trang mạng xã hội\nD. Khóa màn hình máy tính khi nhân viên rời vị trí\nĐáp án: B\nLời giải: KMS quản lý vòng đời của khóa mật mã tập trung, đảm bảo dữ liệu được mã hóa an toàn và khóa không bị lưu trữ dưới dạng văn bản rõ cùng với dữ liệu.\nChương: 4\nChủ đề: Bảo mật điện toán đám mây (Cloud Security)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 295: Phương pháp nào sau đây giúp loại bỏ hoàn toàn dữ liệu nhạy cảm khỏi ổ cứng cơ học (HDD) trước khi đem thanh lý mà không làm hỏng ổ cứng?\nA. Nhấn tổ hợp phím Shift + Delete\nB. Sử dụng phần mềm xóa dữ liệu chuyên dụng ghi đè dữ liệu ngẫu nhiên nhiều lần (Data Wiping / Overwriting theo chuẩn DoD hoặc NIST SP 800-88)\nC. Ngâm ổ cứng vào nước ấm 10 phút\nD. Đổi tên ổ cứng thành \"O_Trong\"\nĐáp án: B\nLời giải: Ghi đè nhiều lượt (Wiping) ghi đè các bit 0, 1 hoặc ngẫu nhiên lên toàn bộ bề mặt đĩa từ, đảm bảo các phần mềm khôi phục dữ liệu chuyên sâu không thể khôi phục lại dữ liệu cũ.\nChương: 4\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 296: Trong giám sát an ninh mạng, \"Network Baseline\" (Mốc tham chiếu hành vi bình thường) là gì?\nA. Bản vẽ kỹ thuật của hệ thống cáp mạng\nB. Tập hợp các số liệu đo lường hành vi hoạt động mạng điển hình trong điều kiện bình thường (lưu lượng, cổng, giao thức, khung thời gian), dùng làm căn cứ để phát hiện các hoạt động bất thường\nC. Giới hạn tốc độ tải file của nhân viên\nD. Danh sách các máy tính đắt tiền nhất trong công ty\nĐáp án: B\nLời giải: Không thể biết cái gì là \"bất thường\" nếu không biết cái gì là \"bình thường\". Baseline cung cấp mốc tham chiếu để các hệ thống IDS/SIEM kích hoạt cảnh báo khi có sai lệch.\nChương: 5\nChủ đề: Tăng cường bảo mật (Security Hardening)\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 297: Khái niệm \"Temporal Pattern\" (Mẫu hình thời gian) trong phân tích lưu lượng mạng giúp chuyên viên phát hiện điều gì?\nA. Thời tiết bên ngoài trung tâm dữ liệu\nB. Các hoạt động mạng xảy ra vào những khung thời gian bất thường (ví dụ: máy chủ truyền tải một lượng lớn dữ liệu ra ngoài Internet vào lúc 3 giờ sáng ngày Chủ nhật)\nC. Tuổi thọ của bóng đèn phòng máy chủ\nD. Thời gian nhân viên đi làm muộn\nĐáp án: B\nLời giải: Temporal pattern phân tích thời điểm xảy ra sự kiện; các lưu lượng truyền dữ liệu dung lượng lớn ngoài giờ hành chính là dấu hiệu chỉ điểm kinh điển của tấn công đánh cắp dữ liệu.\nChương: 5\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 298: Hoạt động \"C2 Beaconing\" (Command and Control Beaconing) của phần mềm độc hại có đặc điểm nhận dạng nào trong lưu lượng mạng?\nA. Phát ra tiếng bíp trên loa máy tính\nB. Gửi các gói tin kết nối ra một địa chỉ IP/domain bên ngoài Internet theo một chu kỳ thời gian đều đặn hoặc có quy luật lặp lại để xin chỉ thị từ máy chủ của tin tặc\nC. Tự động gửi email xin lỗi ban giám đốc\nD. Làm cho màn hình máy tính nhấp nháy liên tục\nĐáp án: B\nLời giải: Mã độc sau khi xâm nhập sẽ gửi tín hiệu \"nhịp tim\" (beacon) định kỳ về máy chủ C2 để báo cáo tình trạng và nhận lệnh mới.\nChương: 5\nChủ đề: Giám sát lưu lượng & Wireshark/Tcpdump\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 299: Dấu hiệu nào sau đây là chỉ số rõ ràng của hành vi \"Data Exfiltration\" (Đánh cắp/Trích xuất dữ liệu trái phép)?\nA. Lưu lượng tải về (Download) tăng nhẹ trong giờ làm việc\nB. Lưu lượng truyền đi ra ngoài (Outbound traffic) tăng đột biến bất thường, đặc biệt là các kết nối mã hóa tới các địa chỉ IP hoặc máy chủ đám mây lạ ngoài giờ làm việc\nC. Máy in văn phòng hết giấy in\nD. Màn hình máy tính hiển thị ảnh phong cảnh\nĐáp án: B\nLời giải: Kẻ tấn công sau khi thu thập tài liệu nội bộ sẽ nén, mã hóa và đẩy ra ngoài; sự tăng vọt đột ngột của lưu lượng ra (outbound spike) là dấu hiệu cảnh báo exfiltration.\nChương: 5\nChủ đề: Giám sát lưu lượng & Wireshark/Tcpdump\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 300: Sự khác biệt cơ bản giữa Trung tâm Vận hành Mạng (NOC) và Trung tâm Điều hành An ninh (SOC) là gì?\nA. NOC chỉ làm việc ban ngày, SOC chỉ làm việc ban đêm.\nB. NOC tập trung vào hiệu năng mạng, tính khả dụng và khắc phục sự cố đường truyền mạng; trong khi SOC tập trung vào việc giám sát các mối đe dọa an ninh, phát hiện xâm nhập và ứng phó sự cố an toàn thông tin.\nC. NOC là của chính phủ, SOC là của doanh nghiệp tư nhân.\nD. NOC sử dụng Linux, SOC sử dụng Windows.\nĐáp án: B\nLời giải: Giáo trình Course 6 phân biệt: NOC trả lời câu hỏi \"Mạng có đang chạy nhanh và ổn định không?\", còn SOC trả lời câu hỏi \"Mạng có đang bị tấn công hoặc xâm nhập không?\".\nChương: 5\nChủ đề: Vai trò & Nghề nghiệp An ninh mạng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 301: Khi triển khai cảm biến thu thập gói tin (Packet Capture Sensor), điểm khác nhau giữa thiết bị \"Network TAP\" và tính năng \"SPAN / Port Mirroring\" là gì?\nA. Network TAP là phần mềm miễn phí, SPAN là phần cứng đắt tiền.\nB. Network TAP là thiết bị phần cứng chèn trực tiếp vào đường truyền vật lý để sao chép 100% tín hiệu mà không làm ảnh hưởng đến hiệu năng switch; trong khi SPAN sử dụng tài nguyên CPU của Switch để nhân bản cổng, có thể bị rớt gói (drop packets) khi tải mạng quá cao.\nC. SPAN không bao giờ bị mất gói tin.\nD. Network TAP chỉ hoạt động với mạng không dây Wi-Fi.\nĐáp án: B\nLời giải: Network TAP sao chép ở mức vật lý không gây tải cho switch; còn Port Mirroring (SPAN) phụ thuộc vào năng lực xử lý của switch, dễ bị bỏ sót gói tin khi switch bị quá tải.\nChương: 5\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 302: Trong tiêu đề gói tin IPv4 (IPv4 Header), trường TTL (Time to Live) có tác dụng gì và giúp ích gì cho điều tra an ninh mạng?\nA. Cho biết thời gian bảo hành của máy tính\nB. Ngăn chặn gói tin bị lặp vô tận trên mạng bằng cách giảm 1 đơn vị qua mỗi router; giá trị TTL ban đầu còn giúp nhà phân tích phỏng đoán hệ điều hành của nguồn phát (ví dụ Linux thường là 64, Windows thường là 128)\nC. Đo nhiệt độ của dây cáp mạng\nD. Đếm số lượng người đang xem trang web\nĐáp án: B\nLời giải: TTL giảm dần qua mỗi bước nhảy (hop); giá trị TTL ban đầu giúp nhận diện hệ điều hành nguồn (OS Fingerprinting) và phát hiện các kỹ thuật mạo danh mạng.\nChương: 5\nChủ đề: Giám sát lưu lượng & Wireshark/Tcpdump\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 303: Giao diện đồ họa của phần mềm Wireshark được chia thành 3 vùng hiển thị chính nào?\nA. Vùng màn hình chính, Vùng bàn phím, Vùng chuột\nB. Packet List (Danh sách gói tin), Packet Details (Chi tiết các tầng tiêu đề), Packet Bytes (Dữ liệu thô dạng Hex và ASCII)\nC. Vùng âm thanh, Vùng hình ảnh, Vùng văn bản\nD. Tầng 1, Tầng 2, Tầng 3 của tòa nhà\nĐáp án: B\nLời giải: Ba ngăn chuẩn của Wireshark: Ngăn trên là Packet List, ngăn giữa là Packet Details (phân rã cây giao thức), ngăn dưới cùng là Packet Bytes (mã hex/ascii thô).\nChương: 5\nChủ đề: Hàm băm một chiều (Hash Function)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 304: Để lọc tất cả các gói tin có liên quan đến địa chỉ IP `192.168.1.100` trong Wireshark, cú pháp Display Filter nào sau đây là ĐÚNG?\nA. `filter: 192.168.1.100`\nB. `ip.addr == 192.168.1.100`\nC. `show ip 192.168.1.100`\nD. `ip = 192.168.1.100`\nĐáp án: B\nLời giải: Cú pháp Wireshark display filter chuẩn: `ip.addr == 192.168.1.100` (khớp cả khi IP là source hoặc destination).\nChương: 5\nChủ đề: Hàm băm một chiều (Hash Function)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 305: Tính năng \"Follow TCP Stream\" trong Wireshark giúp ích gì cho chuyên viên phân tích an ninh mạng?\nA. Tự động vẽ sơ đồ vị trí địa lý của kẻ tấn công\nB. Tập hợp và tái hiện toàn bộ nội dung dữ liệu của cuộc hội thoại trao đổi qua lại giữa client và server theo đúng thứ tự luồng dưới dạng văn bản liên tục\nC. Tăng tốc độ đường truyền mạng lên gấp đôi\nD. Tự động xóa gói tin độc hại khỏi máy chủ\nĐáp án: B\nLời giải: Follow TCP Stream loại bỏ sự phức tạp của việc đọc từng gói tin rời rạc, ghép nối toàn bộ payload thành một trang văn bản liền mạch (rất hữu ích khi đọc nội dung HTTP, SMTP, FTP).\nChương: 5\nChủ đề: Hàm băm một chiều (Hash Function)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 306: Khi sử dụng công cụ dòng lệnh `tcpdump`, tùy chọn `-n` và `-nn` có tác dụng gì quan trọng?\nA. Bật chế độ hiển thị ban đêm\nB. `-n` ngăn tcpdump phân giải địa chỉ IP thành tên máy chủ (Hostname), `-nn` ngăn phân giải cả địa chỉ IP và số cổng (Port), giúp hiển thị nhanh và tránh tạo ra các lưu lượng DNS truy vấn phụ ngoài ý muốn\nC. Tự động xóa các gói tin bị lỗi\nD. Khởi động lại máy tính sau khi bắt gói\nĐáp án: B\nLời giải: Mặc định tcpdump cố gắng phân giải tên miền (DNS reverse lookup); dùng `-nn` ngăn chặn điều này, giữ nguyên định dạng số (IP và Port) giúp phân tích chính xác và không làm ô nhiễm file bắt gói.\nChương: 5\nChủ đề: Phân tích gói tin (Wireshark & Tcpdump)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 307: Trong lệnh `tcpdump`, tùy chọn nào được dùng để lưu các gói tin bắt được vào một tệp tin PCAP và tùy chọn nào dùng để đọc lại tệp đó?\nA. `-save` để lưu và `-open` để đọc\nB. `-w <tệp.pcap>` để ghi (write) và `-r <tệp.pcap>` để đọc (read)\nC. `-in` để ghi và `-out` để đọc\nD. `-copy` để ghi và `-paste` để đọc\nĐáp án: B\nLời giải: `-w filename.pcap` (write raw packets) để ghi file; `-r filename.pcap` (read packets from file) để đọc lại dữ liệu đã lưu.\nChương: 5\nChủ đề: Chữ ký số & Hạ tầng PKI\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 308: Cú pháp bộ lọc BPF (Berkeley Packet Filter) nào trong `tcpdump` dùng để chỉ bắt các gói tin web HTTP (Port 80) xuất phát từ máy chủ có IP `10.0.0.5`?\nA. `src host 10.0.0.5 and port 80`\nB. `ip == 10.0.0.5 && http`\nC. `find 10.0.0.5:80`\nD. `filter src 10.0.0.5 port 80`\nĐáp án: A\nLời giải: Cú pháp BPF chuẩn của tcpdump: `src host 10.0.0.5 and port 80` (lưu ý: Wireshark display filter dùng `ip.src == ...`, còn tcpdump dùng cú pháp BPF).\nChương: 5\nChủ đề: Phân tích gói tin (Wireshark & Tcpdump)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 309: Khi phân tích kết quả xuất ra của lệnh `tcpdump`, ký hiệu cờ `[S]` và cờ `[.]` trong một dòng log TCP đại diện cho điều gì?\nA. `[S]` là Stop, `[.]` là Continue\nB. `[S]` là cờ SYN (yêu cầu khởi tạo kết nối), `[.]` là cờ ACK (xác nhận gói tin)\nC. `[S]` là Secure, `[.]` là Insecure\nD. `[S]` là Spam, `[.]` là Clean\nĐáp án: B\nLời giải: Trong tcpdump: `[S]` = SYN, `[.]` = ACK, `[S.]` = SYN-ACK, `[F]` = FIN, `[R]` = RST, `[P]` = PUSH.\nChương: 5\nChủ đề: Phân tích gói tin (Wireshark & Tcpdump)\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 310: Khi chạy `tcpdump` trên máy tính trạm, chuyên viên quan sát thấy nhiều gói tin có thông báo lỗi `cksum incorrect` (Checksum không chính xác). Nguyên nhân phổ biến và đúng đắn nhất là gì?\nA. Cáp mạng bị đứt ngầm làm hỏng gói tin.\nB. Do tính năng \"TCP Checksum Offloading\" của card mạng phần cứng (NIC) tự động tính toán checksum sau khi gói tin rời khỏi nhân hệ điều hành, khiến tcpdump bắt gói tin trước khi checksum được card mạng điền vào\nC. Toàn bộ máy tính đã bị nhiễm mã độc tống tiền\nD. Máy chủ mục tiêu đã bị sập nguồn\nĐáp án: B\nLời giải: Giáo trình Course 6 giải thích rõ: Phần cứng NIC hiện đại đảm nhận việc tính checksum để giảm tải CPU (Hardware Offloading); khi tcpdump bắt gói tin đi ra tại kernel thì checksum chưa được ghi nên báo \"incorrect\", đây là hiện tượng bình thường chứ không phải lỗi mạng.\nChương: 5\nChủ đề: Phân tích gói tin (Wireshark & Tcpdump)\nMức độ: Vận dụng\nĐiểm: 1";

window.TOAN9_SAMPLE_TEXT = "Câu 1: Rút gọn biểu thức A = √(12) - √(27) + (1/2)√(48) ta được kết quả là:\nA. √3\nB. 3√3\nC. -√3\nD. 2√3\nĐáp án: A\nLời giải: Ta có:\n√(12) = √(4 · 3) = 2√3\n√(27) = √(9 · 3) = 3√3\n(1/2)√(48) = (1/2) · √(16 · 3) = (1/2) · 4√3 = 2√3.\nDo đó: A = 2√3 - 3√3 + 2√3 = (2 - 3 + 2)√3 = √3.\nChương: 1\nChủ đề: Rút gọn biểu thức số\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 2: Rút gọn biểu thức C = 2/(√3 - 1) - 2/(√3 + 1) ta được kết quả là:\nA. 2\nB. 2√3\nC. 4\nD. -2\nĐáp án: A\nLời giải: Quy đồng mẫu thức với mẫu chung là (√3 - 1)(√3 + 1) = 3 - 1 = 2:\nC = [2(√3 + 1) - 2(√3 - 1)] / [(√3 - 1)(√3 + 1)]\n  = (2√3 + 2 - 2√3 + 2) / 2 = 4 / 2 = 2.\nChương: 1\nChủ đề: Trục căn thức ở mẫu\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 3: Rút gọn biểu thức E = √(7 + 4√3) - √(7 - 4√3) ta được kết quả là:\nA. 2√3\nB. 4\nC. 0\nD. -2√3\nĐáp án: A\nLời giải: Ta có: 7 ± 4√3 = 4 ± 2 · 2 · √3 + 3 = (2 ± √3)².\nDo đó: E = √((2 + √3)²) - √((2 - √3)²)\n  = |2 + √3| - |2 - √3|.\nVì 2 > √3 nên 2 - √3 > 0, do đó |2 - √3| = 2 - √3.\nE = (2 + √3) - (2 - √3) = 2√3.\nChương: 1\nChủ đề: Hằng đẳng thức căn thức\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 4: Trục căn thức ở mẫu của phân thức D = (2 - √3)/(2 + √3) ta được:\nA. 7 - 4√3\nB. 7 + 4√3\nC. 1 - √3\nD. 4 - 2√3\nĐáp án: A\nLời giải: Nhân cả tử và mẫu với lượng liên hợp của mẫu là (2 - √3):\nD = (2 - √3)² / [(2 + √3)(2 - √3)]\n  = (4 - 4√3 + 3) / (4 - 3) = 7 - 4√3.\nChương: 1\nChủ đề: Trục căn thức ở mẫu\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 5: Rút gọn biểu thức A = (√x + 1)/(√x - 2) + 2√x/(√x + 2) + (2 + 5√x)/(4 - x) với x ≥ 0, x ≠ 4:\nA. 3√x / (√x + 2)\nB. 3 / (√x + 2)\nC. √x / (√x + 2)\nD. 3√x / (√x - 2)\nĐáp án: A\nLời giải: Đổi dấu phân thức thứ ba: (2 + 5√x)/(4 - x) = -(2 + 5√x)/(x - 4) = -(2 + 5√x)/[(√x - 2)(√x + 2)].\nQuy đồng với mẫu chung (√x - 2)(√x + 2):\nTử = (√x + 1)(√x + 2) + 2√x(√x - 2) - (2 + 5√x)\n   = (x + 3√x + 2) + (2x - 4√x) - 2 - 5√x\n   = 3x - 6√x = 3√x(√x - 2).\nRút gọn với mẫu: A = 3√x(√x - 2) / [(√x - 2)(√x + 2)] = 3√x / (√x + 2).\nChương: 1\nChủ đề: Rút gọn biểu thức chứa biến\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 6: Cho biểu thức P = [1/(√x + 1) - (2√x - 2)/(x√x - √x + x - 1)] : [1/(√x - 1) - 2/(x - 1)] với x ≥ 0, x ≠ 1. Biểu thức rút gọn của P là:\nA. (√x - 1)/(√x + 1)\nB. (√x + 1)/(√x - 1)\nC. (√x - 2)/(√x + 1)\nD. 1/(√x + 1)\nĐáp án: A\nLời giải: Phân tích mẫu: x√x - √x + x - 1 = √x(x - 1) + (x - 1) = (x - 1)(√x + 1) = (√x - 1)(√x + 1)².\nNgoặc thứ nhất:\n1/(√x + 1) - 2(√x - 1)/[(√x - 1)(√x + 1)²] = 1/(√x + 1) - 2/(√x + 1)² = (√x + 1 - 2)/(√x + 1)² = (√x - 1)/(√x + 1)².\nNgoặc thứ hai:\n1/(√x - 1) - 2/[(√x - 1)(√x + 1)] = (√x + 1 - 2)/[(√x - 1)(√x + 1)] = (√x - 1)/[(√x - 1)(√x + 1)] = 1/(√x + 1).\nThực hiện phép chia: P = [(√x - 1)/(√x + 1)²] : [1/(√x + 1)] = (√x - 1)/(√x + 1).\nChương: 1\nChủ đề: Rút gọn biểu thức tổng hợp\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 7: Với P = (√x - 1)/(√x + 1), tính giá trị của P khi x = 4 - 2√3:\nA. 1 - (2√3)/3\nB. (√3 - 1)/2\nC. √3 - 1\nD. 2 - √3\nĐáp án: A\nLời giải: Ta có x = 4 - 2√3 = (√3 - 1)² > 0.\nDo đó √x = √((√3 - 1)²) = |√3 - 1| = √3 - 1 (vì √3 > 1).\nThay vào biểu thức P:\nP = [(√3 - 1) - 1] / [(√3 - 1) + 1] = (√3 - 2)/√3 = 1 - 2/√3 = 1 - (2√3)/3.\nChương: 1\nChủ đề: Tính giá trị biểu thức\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 8: Cho P = (√x - 1)/(√x + 1) với x ≥ 0, x ≠ 1. Tìm tất cả các giá trị của x để P < 1/2:\nA. 0 ≤ x < 9 và x ≠ 1\nB. x < 9\nC. 1 < x < 9\nD. 0 ≤ x < 3\nĐáp án: A\nLời giải: Xét bất phương trình P < 1/2:\n(√x - 1)/(√x + 1) - 1/2 < 0\n⇔ [2(√x - 1) - (√x + 1)] / [2(√x + 1)] < 0\n⇔ (√x - 3) / [2(√x + 1)] < 0.\nVì x ≥ 0 nên 2(√x + 1) > 0 với mọi x. Do đó:\n√x - 3 < 0 ⇔ √x < 3 ⇔ 0 ≤ x < 9.\nKết hợp điều kiện xác định x ≥ 0, x ≠ 1 ta được: 0 ≤ x < 9 và x ≠ 1.\nChương: 1\nChủ đề: Bất phương trình chứa biểu thức căn\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 9: Tìm giá trị nhỏ nhất (GTNN) của biểu thức P = (√x - 1)/(√x + 1) với x ≥ 0, x ≠ 1:\nA. -1 (đạt được tại x = 0)\nB. 0 (đạt được tại x = 1)\nC. -1/2 (đạt được tại x = 4)\nD. Không tồn tại GTNN\nĐáp án: A\nLời giải: Biến đổi: P = (√x + 1 - 2)/(√x + 1) = 1 - 2/(√x + 1).\nVì x ≥ 0 nên √x ≥ 0 ⇒ √x + 1 ≥ 1.\nDo đó: 2/(√x + 1) ≤ 2/1 = 2.\nSuy ra: P = 1 - 2/(√x + 1) ≥ 1 - 2 = -1.\nDấu \"=\" xảy ra khi √x = 0 ⇔ x = 0 (thỏa mãn ĐKXĐ).\nVậy GTNN của P là -1 khi x = 0.\nChương: 1\nChủ đề: Cực trị biểu thức\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 10: Tìm các số nguyên x để biểu thức P = (√x - 1)/(√x + 1) nhận giá trị nguyên:\nA. x = 0\nB. x ∈ {0; 1}\nC. x ∈ {0; 4}\nD. x = 4\nĐáp án: A\nLời giải: Ta có: P = 1 - 2/(√x + 1).\nĐể P nhận giá trị nguyên thì 2/(√x + 1) phải là số nguyên, tức là (√x + 1) là ước của 2.\nVì x ≥ 0 nên √x + 1 ≥ 1, do đó các ước nguyên dương của 2 là 1 và 2:\n- TH1: √x + 1 = 1 ⇔ √x = 0 ⇔ x = 0 (nhận, thỏa mãn x nguyên và x ≠ 1).\n- TH2: √x + 1 = 2 ⇔ √x = 1 ⇔ x = 1 (loại vì không thỏa mãn ĐKXĐ x ≠ 1).\nVậy chỉ có duy nhất x = 0.\nChương: 1\nChủ đề: Bài toán giá trị nguyên\nMức độ: Vận dụng cao\nĐiểm: 1\n\nCâu 11: Tập nghiệm của phương trình bậc hai 2x² + 3x - 5 = 0 là:\nA. S = {1; -5/2}\nB. S = {-1; 5/2}\nC. S = {1; 5}\nD. S = {2; -5/2}\nĐáp án: A\nLời giải: Phương trình có các hệ số: a = 2, b = 3, c = -5.\nNhận thấy: a + b + c = 2 + 3 + (-5) = 0.\nTheo tính chất nhẩm nghiệm phương trình bậc hai:\nx₁ = 1\nx₂ = c/a = -5/2.\nVậy tập nghiệm của phương trình là S = {1; -5/2}.\nChương: 4\nChủ đề: Giải phương trình bậc hai\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 12: Số nghiệm của phương trình bậc hai x² - 4x + 5 = 0 là:\nA. 0 (Vô nghiệm)\nB. 1 (Nghiệm kép)\nC. 2 (Hai nghiệm phân biệt)\nD. Vô số nghiệm\nĐáp án: A\nLời giải: Biến đổi: x² - 4x + 5 = (x² - 4x + 4) + 1 = (x - 2)² + 1.\nVì (x - 2)² ≥ 0 với mọi x nên (x - 2)² + 1 ≥ 1 > 0 với mọi x.\nHoặc tính biệt thức: Δ' = (-2)² - 1 · 5 = 4 - 5 = -1 < 0.\nVậy phương trình đã cho vô nghiệm (0 nghiệm).\nChương: 4\nChủ đề: Số nghiệm phương trình bậc hai\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 13: Tập nghiệm của phương trình trùng phương x⁴ - 13x² + 36 = 0 là:\nA. S = {-3; -2; 2; 3}\nB. S = {2; 3}\nC. S = {-9; -4; 4; 9}\nD. S = {±4; ±9}\nĐáp án: A\nLời giải: Đặt t = x² (điều kiện t ≥ 0).\nPhương trình trở thành: t² - 13t + 36 = 0.\nΔ = (-13)² - 4 · 1 · 36 = 169 - 144 = 25 > 0 ⇒ √Δ = 5.\nt₁ = (13 + 5)/2 = 9 (nhận)\nt₂ = (13 - 5)/2 = 4 (nhận).\n- Với t = 9 ⇒ x² = 9 ⇔ x = ±3.\n- Với t = 4 ⇒ x² = 4 ⇔ x = ±2.\nVậy tập nghiệm S = {-3; -2; 2; 3}.\nChương: 4\nChủ đề: Phương trình trùng phương\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 14: Nghiệm của phương trình x/(x - 2) + (x + 2)/(x - 1) = 2 là:\nA. x = 8/5\nB. x = 5/8\nC. x = 2\nD. Phương trình vô nghiệm\nĐáp án: A\nLời giải: Điều kiện xác định: x ≠ 2 và x ≠ 1.\nQuy đồng mẫu thức hai vế:\n[x(x - 1) + (x + 2)(x - 2)] / [(x - 2)(x - 1)] = [2(x - 2)(x - 1)] / [(x - 2)(x - 1)]\nKhử mẫu ta được:\nx² - x + x² - 4 = 2(x² - 3x + 2)\n⇔ 2x² - x - 4 = 2x² - 6x + 4\n⇔ -x + 6x = 4 + 4\n⇔ 5x = 8 ⇔ x = 8/5 (thỏa mãn ĐKXĐ).\nChương: 4\nChủ đề: Phương trình chứa ẩn ở mẫu\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 15: Nghiệm của phương trình vô tỷ √(2x - 3) = 5 là:\nA. x = 14\nB. x = 11\nC. x = 16\nD. x = 7\nĐáp án: A\nLời giải: Điều kiện xác định: 2x - 3 ≥ 0 ⇔ x ≥ 3/2.\nBình phương hai vế:\n2x - 3 = 5² = 25\n⇔ 2x = 28 ⇔ x = 14.\nĐối chiếu điều kiện x = 14 ≥ 3/2 (thỏa mãn). Vậy nghiệm là x = 14.\nChương: 4\nChủ đề: Phương trình vô tỷ\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 16: Tập nghiệm của phương trình √(x² - 4x + 4) = 3 là:\nA. S = {-1; 5}\nB. S = {5}\nC. S = {-5; 1}\nD. S = {1; 5}\nĐáp án: A\nLời giải: Ta có x² - 4x + 4 = (x - 2)².\nPhương trình tương đương: √((x - 2)²) = 3 ⇔ |x - 2| = 3.\n- Trường hợp 1: x - 2 = 3 ⇔ x = 5.\n- Trường hợp 2: x - 2 = -3 ⇔ x = -1.\nVậy phương trình có hai nghiệm: S = {-1; 5}.\nChương: 4\nChủ đề: Phương trình vô tỷ\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 17: Giải phương trình √(x + 3) + √(4x + 12) - √(9x + 27) = 2:\nA. Phương trình vô nghiệm\nB. x = 1\nC. x = -3\nD. x = 2\nĐáp án: A\nLời giải: Điều kiện: x + 3 ≥ 0 ⇔ x ≥ -3.\nTa biến đổi:\n√(4x + 12) = √(4(x + 3)) = 2√(x + 3)\n√(9x + 27) = √(9(x + 3)) = 3√(x + 3).\nPhương trình trở thành:\n√(x + 3) + 2√(x + 3) - 3√(x + 3) = 2\n⇔ (1 + 2 - 3)√(x + 3) = 2\n⇔ 0 · √(x + 3) = 2 (vô lý).\nVậy phương trình vô nghiệm.\nChương: 4\nChủ đề: Phương trình vô tỷ\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 18: Cho phương trình x² - 2(m + 1)x + m² - 3 = 0. Tìm tất cả các giá trị của m để phương trình có hai nghiệm phân biệt:\nA. m > -2\nB. m ≥ -2\nC. m < -2\nD. m ≠ -2\nĐáp án: A\nLời giải: Tính biệt thức thu gọn Δ':\nΔ' = [-(m + 1)]² - 1 · (m² - 3)\n   = m² + 2m + 1 - m² + 3 = 2m + 4.\nĐể phương trình có hai nghiệm phân biệt thì:\nΔ' > 0 ⇔ 2m + 4 > 0 ⇔ 2m > -4 ⇔ m > -2.\nChương: 4\nChủ đề: Phương trình chứa tham số\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 19: Cho phương trình x² - 2(m + 1)x + m² - 3 = 0. Tìm m để phương trình có hai nghiệm x₁, x₂ thỏa mãn x₁ + x₂ = 10:\nA. m = 4\nB. m = 5\nC. m = 3\nD. m = -4\nĐáp án: A\nLời giải: Điều kiện để phương trình có nghiệm là Δ' = 2m + 4 ≥ 0 ⇔ m ≥ -2.\nTheo định lý Vi-et: x₁ + x₂ = -b/a = 2(m + 1).\nTheo đề bài: x₁ + x₂ = 10 ⇔ 2(m + 1) = 10 ⇔ m + 1 = 5 ⇔ m = 4.\nKiểm tra điều kiện m = 4 ≥ -2 (thỏa mãn). Vậy m = 4.\nChương: 4\nChủ đề: Định lý Vi-et\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 20: Cho phương trình x² - 2(m - 1)x + m² - 1 = 0. Tìm tất cả giá trị của m để phương trình có hai nghiệm trái dấu:\nA. -1 < m < 1\nB. m > 1\nC. m < -1\nD. m ≤ 1\nĐáp án: A\nLời giải: Phương trình bậc hai ax² + bx + c = 0 có hai nghiệm trái dấu khi và chỉ khi:\na · c < 0 ⇔ 1 · (m² - 1) < 0 ⇔ m² < 1 ⇔ -1 < m < 1.\n(Khi ac < 0 thì biệt thức Δ luôn dương nên phương trình luôn có 2 nghiệm phân biệt).\nChương: 4\nChủ đề: Định lý Vi-et\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 21: Nghiệm (x; y) của hệ phương trình { 4x + 3y = 6 ; 2x + y = 4 } là:\nA. (3; -2)\nB. (-2; 3)\nC. (1; 2)\nD. (2; 0)\nĐáp án: A\nLời giải: Nhân phương trình thứ hai với 2:\n{ 4x + 3y = 6\n{ 4x + 2y = 8\nLấy phương trình trên trừ phương trình dưới:\n(4x - 4x) + (3y - 2y) = 6 - 8 ⇒ y = -2.\nThay y = -2 vào 2x + y = 4:\n2x + (-2) = 4 ⇔ 2x = 6 ⇔ x = 3.\nVậy hệ có nghiệm duy nhất (x; y) = (3; -2).\nChương: 3\nChủ đề: Giải hệ phương trình bậc nhất\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 22: Cho hệ phương trình { x - 2y = 3 ; -2x + 4y = -6 }. Khẳng định nào sau đây là đúng?\nA. Hệ phương trình có vô số nghiệm\nB. Hệ phương trình vô nghiệm\nC. Hệ có nghiệm duy nhất (3; 0)\nD. Hệ có đúng 2 nghiệm\nĐáp án: A\nLời giải: Xét tỉ số các hệ số:\na₁/a₂ = 1/(-2) = -1/2\nb₁/b₂ = (-2)/4 = -1/2\nc₁/c₂ = 3/(-6) = -1/2.\nVì a₁/a₂ = b₁/b₂ = c₁/c₂ nên hai đường thẳng biểu diễn hai phương trình trùng nhau.\nVậy hệ phương trình có vô số nghiệm.\nChương: 3\nChủ đề: Số nghiệm hệ phương trình\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 23: Giải hệ phương trình { 1/x + 1/y = 1/4 ; 2/x - 3/y = -1/3 }, nghiệm (x; y) là:\nA. (12; 6)\nB. (6; 12)\nC. (4; 3)\nD. (8; 4)\nĐáp án: A\nLời giải: Điều kiện: x ≠ 0, y ≠ 0. Đặt u = 1/x, v = 1/y.\nHệ trở thành: { u + v = 1/4 ; 2u - 3v = -1/3 }.\nNhân PT đầu với 3: 3u + 3v = 3/4.\nCộng với PT thứ hai: 5u = 3/4 - 1/3 = 5/12 ⇒ u = 1/12.\nThay vào u + v = 1/4: v = 1/4 - 1/12 = 2/12 = 1/6.\nSuy ra: 1/x = 1/12 ⇒ x = 12; 1/y = 1/6 ⇒ y = 6.\nVậy hệ có nghiệm (x; y) = (12; 6).\nChương: 3\nChủ đề: Hệ đặt ẩn phụ\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 24: Giải hệ phương trình { √(x - 1) + 2y = 5 ; 2√(x - 1) - y = 0 } (với x ≥ 1):\nA. (2; 2)\nB. (1; 0)\nC. (5; 2)\nD. (3; 1)\nĐáp án: A\nLời giải: Từ phương trình thứ hai: y = 2√(x - 1).\nThế vào phương trình thứ nhất:\n√(x - 1) + 2 · [2√(x - 1)] = 5\n⇔ 5√(x - 1) = 5 ⇔ √(x - 1) = 1 ⇔ x - 1 = 1 ⇔ x = 2.\nKhi x = 2 ⇒ y = 2 · 1 = 2.\nKiểm tra x = 2 ≥ 1 (thỏa mãn). Vậy nghiệm là (x; y) = (2; 2).\nChương: 3\nChủ đề: Hệ phương trình chứa căn thức\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 25: Cho hệ phương trình { mx + y = 3 ; 4x + my = 6 }. Tìm điều kiện của m để hệ có nghiệm duy nhất:\nA. m ≠ 2 và m ≠ -2\nB. m = 2\nC. m = -2\nD. m ≠ 4\nĐáp án: A\nLời giải: Định thức D của hệ phương trình:\nD = m · m - 4 · 1 = m² - 4.\nHệ phương trình bậc nhất hai ẩn có nghiệm duy nhất khi và chỉ khi:\nD ≠ 0 ⇔ m² - 4 ≠ 0 ⇔ m² ≠ 4 ⇔ m ≠ 2 và m ≠ -2.\nChương: 3\nChủ đề: Hệ chứa tham số\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 26: Tọa độ giao điểm của hai đường thẳng (d₁): 2x - 3y = 1 và (d₂): x + 2y = 4 là:\nA. (2; 1)\nB. (1; 2)\nC. (3; 0)\nD. (-1; -1)\nĐáp án: A\nLời giải: Tọa độ giao điểm là nghiệm của hệ:\n{ 2x - 3y = 1\n{ x + 2y = 4\nTừ PT(2): x = 4 - 2y. Thế vào PT(1):\n2(4 - 2y) - 3y = 1 ⇔ 8 - 4y - 3y = 1 ⇔ -7y = -7 ⇔ y = 1.\nSuy ra: x = 4 - 2(1) = 2.\nVậy tọa độ giao điểm là (2; 1).\nChương: 3\nChủ đề: Giao điểm hai đường thẳng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 27: Tập nghiệm của bất phương trình bậc nhất một ẩn -3x + 12 ≤ 0 là:\nA. x ≥ 4\nB. x ≤ 4\nC. x > 4\nD. x ≤ -4\nĐáp án: A\nLời giải: Chuyển vế hạng tử tự do:\n-3x ≤ -12.\nChia cả hai vế cho -3 (là số âm, quy tắc đổi chiều bất phương trình):\nx ≥ (-12) / (-3) ⇔ x ≥ 4.\nVậy tập nghiệm là x ≥ 4.\nChương: 2\nChủ đề: Bất phương trình bậc nhất\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 28: Giải bất phương trình (x - 3)/2 ≥ (2x + 1)/3, tập nghiệm là:\nA. x ≤ -11\nB. x ≥ -11\nC. x ≤ 11\nD. x ≥ 7\nĐáp án: A\nLời giải: Quy đồng mẫu số hai vế với mẫu số chung dương là 6:\n3(x - 3) ≥ 2(2x + 1)\n⇔ 3x - 9 ≥ 4x + 2\n⇔ 3x - 4x ≥ 2 + 9\n⇔ -x ≥ 11\n⇔ x ≤ -11 (đổi chiều khi nhân hai vế với -1).\nVậy tập nghiệm là x ≤ -11.\nChương: 2\nChủ đề: Bất phương trình quy đồng\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 29: Tập nghiệm của hệ bất phương trình { 2x - 3 > 0 ; 5x + 1 ≤ 16 } là:\nA. 3/2 < x ≤ 3\nB. x ≤ 3\nC. x > 3/2\nD. 2 ≤ x ≤ 3\nĐáp án: A\nLời giải: Giải từng bất phương trình trong hệ:\n- BPT(1): 2x - 3 > 0 ⇔ 2x > 3 ⇔ x > 3/2.\n- BPT(2): 5x + 1 ≤ 16 ⇔ 5x ≤ 15 ⇔ x ≤ 3.\nKết hợp nghiệm: 3/2 < x ≤ 3.\nChương: 2\nChủ đề: Hệ bất phương trình\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 30: Tìm tất cả các giá trị của tham số m để bất phương trình (m - 2)x > 3 vô nghiệm:\nA. m = 2\nB. m > 2\nC. m < 2\nD. m ≠ 2\nĐáp án: A\nLời giải: Bất phương trình có dạng a · x > b với a = m - 2, b = 3.\nĐể bất phương trình ax > b vô nghiệm khi b > 0 thì hệ số a phải bằng 0:\na = 0 ⇔ m - 2 = 0 ⇔ m = 2.\n(Khi m = 2, BPT trở thành 0x > 3, luôn sai với mọi x ∈ ℝ).\nChương: 2\nChủ đề: Bất phương trình chứa tham số\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 31: Tập nghiệm của bất phương trình tích (x - 2)(x + 3) > 0 là:\nA. x > 2 hoặc x < -3\nB. -3 < x < 2\nC. x ≥ 2\nD. x < -3\nĐáp án: A\nLời giải: Tích hai thừa số dương khi hai thừa số cùng dấu:\n- TH1 (Cùng dương): { x - 2 > 0 ; x + 3 > 0 } ⇔ { x > 2 ; x > -3 } ⇔ x > 2.\n- TH2 (Cùng âm): { x - 2 < 0 ; x + 3 < 0 } ⇔ { x < 2 ; x < -3 } ⇔ x < -3.\nVậy nghiệm của bất phương trình là x > 2 hoặc x < -3.\nChương: 2\nChủ đề: Bất phương trình tích\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 32: Tập nghiệm của bất phương trình (2x - 1)/(3 - x) ≤ 0 là:\nA. x ≤ 1/2 hoặc x > 3\nB. 1/2 ≤ x < 3\nC. x < 3\nD. x ≥ 1/2\nĐáp án: A\nLời giải: Điều kiện mẫu: 3 - x ≠ 0 ⇔ x ≠ 3.\nPhân thức nhỏ hơn hoặc bằng 0 khi tử và mẫu trái dấu:\n- TH1: { 2x - 1 ≥ 0 ; 3 - x < 0 } ⇔ { x ≥ 1/2 ; x > 3 } ⇔ x > 3.\n- TH2: { 2x - 1 ≤ 0 ; 3 - x > 0 } ⇔ { x ≤ 1/2 ; x < 3 } ⇔ x ≤ 1/2.\nVậy tập nghiệm là x ≤ 1/2 hoặc x > 3.\nChương: 2\nChủ đề: Bất phương trình thương\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 33: Giải bất phương trình chứa giá trị tuyệt đối |2x - 3| < 5:\nA. -1 < x < 4\nB. x < 4\nC. x > -1\nD. x < -1 hoặc x > 4\nĐáp án: A\nLời giải: Áp dụng quy tắc: |A| < B (với B > 0) ⇔ -B < A < B.\nTa có: -5 < 2x - 3 < 5\nCộng 3 vào cả ba vế:\n-5 + 3 < 2x < 5 + 3 ⇔ -2 < 2x < 8\nChia cho 2:\n-1 < x < 4.\nVậy tập nghiệm là -1 < x < 4.\nChương: 2\nChủ đề: Bất phương trình chứa giá trị tuyệt đối\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 34: Giải bất phương trình chứa căn thức √(x - 2) < 3:\nA. 2 ≤ x < 11\nB. x < 11\nC. x ≥ 2\nD. 2 < x < 11\nĐáp án: A\nLời giải: Điều kiện xác định: x - 2 ≥ 0 ⇔ x ≥ 2.\nVì hai vế đều không âm, bình phương hai vế:\nx - 2 < 3² = 9 ⇔ x < 11.\nKết hợp với điều kiện xác định: 2 ≤ x < 11.\nChương: 1\nChủ đề: Bất phương trình chứa căn thức\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 35: Tìm tham số m để bất phương trình (m + 1)x ≤ m² - 1 nghiệm đúng với mọi x ∈ ℝ:\nA. m = -1\nB. m = 1\nC. m ≠ -1\nD. Không có giá trị m nào thỏa mãn\nĐáp án: A\nLời giải: Bất phương trình có dạng a · x ≤ b với a = m + 1 và b = m² - 1.\nĐể bất phương trình ax ≤ b nghiệm đúng với mọi x ∈ ℝ thì:\n{ a = 0\n{ b ≥ 0\n⇔ { m + 1 = 0\n   { m² - 1 ≥ 0\nTừ m + 1 = 0 ⇒ m = -1.\nThay m = -1 vào m² - 1: (-1)² - 1 = 0 ≥ 0 (thỏa mãn).\nVậy m = -1.\nChương: 2\nChủ đề: Bất phương trình chứa tham số\nMức độ: Vận dụng\nĐiểm: 1\n\nCâu 36: Cho tam giác ABC vuông tại A, đường cao AH. Biết BH = 4 cm, CH = 9 cm. Độ dài đường cao AH bằng:\nA. 6 cm\nB. 5 cm\nC. 36 cm\nD. 6.5 cm\nĐáp án: A\nLời giải: Áp dụng hệ thức lượng trong tam giác vuông: Bình phương đường cao ứng với cạnh huyền bằng tích hai hình chiếu của hai cạnh góc vuông trên cạnh huyền:\nAH² = BH · CH\nAH² = 4 · 9 = 36\n⇒ AH = √36 = 6 (cm).\nChương: 5\nChủ đề: Hệ thức lượng tam giác vuông\nMức độ: Nhận biết\nĐiểm: 1\n\nCâu 37: Cho tam giác ABC vuông tại A có cạnh AB = 6 cm và cạnh huyền BC = 10 cm. Giá trị của sin B bằng:\nA. 0.8\nB. 0.6\nC. 0.75\nD. 1.33\nĐáp án: A\nLời giải: Áp dụng định lý Pytago trong tam giác vuông ABC:\nAC² = BC² - AB² = 10² - 6² = 100 - 36 = 64\n⇒ AC = √64 = 8 (cm).\nTỉ số lượng giác sin của góc B trong tam giác vuông là tỉ số giữa cạnh đối và cạnh huyền:\nsin B = AC / BC = 8 / 10 = 0.8.\nChương: 5\nChủ đề: Tỉ số lượng giác góc nhọn\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 38: Cho đường tròn (O; 5 cm) và dây cung AB = 8 cm. Khoảng cách từ tâm O đến dây AB bằng:\nA. 3 cm\nB. 4 cm\nC. √41 cm\nD. 2 cm\nĐáp án: A\nLời giải: Kẻ OH vuông góc với AB tại H (H là trung điểm của AB theo định lý đường kính vuông góc với dây).\nTa có: AH = AB / 2 = 8 / 2 = 4 (cm).\nXét tam giác OAH vuông tại H, với OA = R = 5 cm:\nÁp dụng định lý Pytago:\nOH² = OA² - AH² = 5² - 4² = 25 - 16 = 9\n⇒ OH = √9 = 3 (cm).\nVậy khoảng cách từ tâm O đến dây AB là 3 cm.\nChương: 6\nChủ đề: Đường kính và dây của đường tròn\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 39: Cho tam giác ABC nội tiếp đường tròn (O). Biết góc BAC = 60°. Số đo của góc ở tâm BOC (chắn cung nhỏ BC) là:\nA. 120°\nB. 60°\nC. 30°\nD. 90°\nĐáp án: A\nLời giải: Trong một đường tròn, góc nội tiếp có số đo bằng một nửa số đo của góc ở tâm cùng chắn một cung:\nGóc BAC là góc nội tiếp chắn cung nhỏ BC.\nGóc BOC là góc ở tâm chắn cung nhỏ BC.\nDo đó: số đo góc BOC = 2 × (số đo góc BAC) = 2 × 60° = 120°.\nChương: 6\nChủ đề: Góc nội tiếp và góc ở tâm\nMức độ: Nhận biết\nĐiểm: 1";

window.BLANK_SAMPLE_TEXT = "Câu 1: [Nhập nội dung câu hỏi số 1 vào đây]\nA. [Nội dung phương án A]\nB. [Nội dung phương án B]\nC. [Nội dung phương án C]\nD. [Nội dung phương án D]\nĐáp án: A\nLời giải: [Nhập các bước giải chi tiết hoặc giải thích lý thuyết tại đây]\nChương: 1\nChủ đề: [Tên chủ đề]\nMức độ: Thông hiểu\nĐiểm: 1\n\nCâu 2: [Nhập nội dung câu hỏi số 2 vào đây]\nA. [Nội dung phương án A]\nB. [Nội dung phương án B]\nC. [Nội dung phương án C]\nD. [Nội dung phương án D]\nĐáp án: B\nLời giải: [Nhập các bước giải chi tiết hoặc giải thích lý thuyết tại đây]\nChương: 1\nChủ đề: [Tên chủ đề]\nMức độ: Vận dụng\nĐiểm: 1";
