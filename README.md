# JMAGRI - Profile Công Ty Nông Sản & Gạo (Static Web App)

Dự án Website Profile Công ty dạng Web Tĩnh (Static Site) cho thương hiệu sản xuất & chế biến Nông sản / Gạo **JMAGRI**, tối ưu sẵn sàng cho việc deploy lên **Cloudflare Pages**.

---

## 🌟 Tính Năng & Điểm Nổi Bật Giao Diện

1. **Hero Section (Giới thiệu thương hiệu & Thông điệp):**
   - Tiêu đề thương hiệu chuẩn xuất khẩu.
   - Thống kê năng lực cốt lõi (50.000+ tấn/năm, 5.000 ha vùng trồng VietGAP, xuất khẩu 30+ quốc gia).
   - Tích hợp dải ticker chứng nhận quốc tế (ISO 22000, HACCP, Halal, FDA).

2. **Về Chúng Tôi (Năng lực sản xuất & Tầm nhìn):**
   - Giới thiệu chuỗi giá trị từ cánh đồng mẫu lớn đến nhà máy chế biến công nghệ Thụy Sĩ (Buhler quang học).
   - Thẻ thống kê năng lực 4 trụ cột (Diện tích, công suất xát lau bóng, năng lực đóng gói, thị trường).

3. **Sản Phẩm & Quy Cách Đóng Gói (Grid + Mẫu bao bì):**
   - **Lưới sản phẩm (Product Grid):** Gạo ST25 Top World Best Rice, Gạo Jasmine 85, Gạo Lứt Huyết Rồng Organic, Gạo Nếp Nương Điện Biên, Gạo KDM Export, Gạo Tấm Thơm.
   - **Bộ lọc danh mục tab (Filter Tabs):** Tất cả | Gạo Thơm | Gạo Xuất Khẩu | Gạo Dinh Dưỡng | Gạo Nếp.
   - **Modal xem thông số chi tiết (Spec Modal):** Xem độ ẩm, tỉ lệ tấm, độ thuần chủng & chứng nhận.
   - **Khu vực trình bày các mẫu thiết kế bao bì (Packaging Showcase):** Túi Zip Vacuum 1-5kg, Bao PP/BOPP 10-25kg, Bao Jumbo Big Bag 500-1000kg, Hộp quà biếu cao cấp.
   - **Bảng đối chiếu quy cách đóng gói chi tiết (Specification Matrix).**

4. **Liên Hệ & Báo Giá (Contact Form & FAQ):**
   - Thông tin văn phòng trụ sở, nhà máy chế biến, Hotline/Zalo, Email xuất khẩu.
   - Form đăng ký báo giá & gửi mẫu thử có xử lý phản hồi tương tác bằng JavaScript.
   - Hệ thống FAQ dạng Accordion giải đáp MOQ, phương thức thanh toán L/C / T/T và lead-time.

---

## 🛠 Công Nghệ Sử Dụng

- **HTML5 Semantic & SEO:** Chuẩn SEO, thẻ Meta Open Graph đầy đủ.
- **Tailwind CSS (qua CDN):** Tùy biến bảng màu nông sản (Agri Green `#1b4332`, Accent Gold `#d4af37`, Emerald, Cream background).
- **FontAwesome 6 Icons:** Biểu tượng chất lượng cao.
- **Google Fonts:** Outfit (Headings) & Be Vietnam Pro (Thân văn bản tiếng Việt chuẩn sắc nét).
- **Vanilla JavaScript:** Mobile navbar, tab filter, modal popup, FAQ accordion, form handler.

---

## 🚀 Hướng Dẫn Deploy Lên Cloudflare Pages

### Cách 1: Deploy qua Cloudflare Dashboard (Giao diện web)
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Chọn **Workers & Pages** -> **Create application** -> tab **Pages**.
3. Chọn **Upload assets** (hoặc kết nối GitHub Repository).
4. Đặt tên project (ví dụ: `jmagri-profile`).
5. Kéo thả toàn bộ thư mục dự án này hoặc chọn thư mục chứa `index.html`.
6. Nhấn **Deploy site** -> Hoàn tất! Trang web sẽ hoạt động ngay tức thì.

### Cách 2: Deploy bằng Wrangler CLI (Dòng lệnh)
```bash
# 1. Cài đặt Wrangler nếu chưa có
npm install -g wrangler

# 2. Đăng nhập vào tài khoản Cloudflare
npx wrangler login

# 3. Deploy thư mục hiện tại lên Cloudflare Pages
npx wrangler pages deploy . --project-name=jmagri-profile
```

---

## 📁 Cấu Trúc Thư Mục

```text
jmagri/
├── index.html              # Trang chủ HTML5 chính
├── README.md               # Hướng dẫn sử dụng & deploy
└── assets/
    ├── css/
    │   └── custom.css      # Styling tùy chỉnh, hiệu ứng glassmorphic & scrollbar
    ├── js/
    │   └── main.js         # JavaScript tương tác tab, modal, faq, form
    └── images/
        ├── hero_banner.png # Ảnh banner cánh đồng nông sản JMAGRI
        ├── factory_about.png # Ảnh nhà máy chế biến hiện đại
        └── rice_st25.png   # Ảnh sản phẩm gạo mẫu
```
