---
title: "4. Tối ưu hóa chi phí trên AWS và Làm việc với AWS Support"
summary: ""
date: 2023-09-07T16:13:18+02:00
lastmod: 2023-09-07T16:13:18+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>
[//]: # (<span style="color: orange; font-weight:bold;"></span>)

### Tối ưu hóa chi phí trên AWS
- Lựa chọn cấu hình tài nguyên tính toán và nơi lưu trữ dữ liệu phù hợp.
- Tận dụng các phương thức thanh toán giảm giá như <span style="color: orange; font-weight:bold;">reserved instance</span>
, <span style="color: orange; font-weight:bold;">saving plan</span>, <span style="color: orange; font-weight:bold;">spot</span>.
- Xoá các tài nguyên không sử dụng, bật tắt tự động các tài nguyên không cần chạy 24/7.
- Tận dụng các dịch vụ <span style="color: orange; font-weight:bold;">serverless</span>.

### Thiết kế kiến trúc tối ưu
- Cài đặt và sử dụng <span style="color: orange; font-weight:bold;">AWS Budget</span>.
- Quản lý chi phí theo phòng ban / ứng dụng với <span style="color: orange; font-weight:bold;">cost allocation tag</span>.
- <span style="color: orange; font-weight:bold;">Liên tục</span> theo dõi và tối ưu hóa chi phí.

### Công cụ tính toán chi phí

[https://calculator.aws/#/](https://calculator.aws/#/)
- Cho phép tạo các estimate các dịch vụ thông dụng.
- Có thể chia sẻ ca estimate cho nguười khác.
- Chi phí sẽ khác biệt theo từng Region

### Làm việc với AWS Support
- AWS có 4 gói hỗ trợ chính:
  - Basic (Explore)
  - Developer (Dev/Test)
  - Business (Production)
  - Enterprise (Large Enterprise)
- Có thể nâng cấp gói hỗ trợ  trong thời gian ngắn để đẩy nhanh tốc độ hỗ trợ khi có sự
cố quan trọng cần xử lý nhanh.
