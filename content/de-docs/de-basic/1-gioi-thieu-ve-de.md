---
title: "Giới thiệu về Data Engineer"
description: ""
summary: ""
date: 2023-09-07T16:06:50+02:00
lastmod: 2023-09-07T16:06:50+02:00
draft: false
weight: 1
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>

### Vai trò của một Data Engineer.

Vai trò của một **data engineer** bao gồm:
- Thiết kế, triển khai và giám sát pipelines có khả năng tích hợp những dữ liệu thô vào một kho lưu trữ.
- Chuyển đổi data để tối ưu cho việc phân tích, dựa trên **yêu cầu** của người tiêu thụ data (**Ví dụ: Data Analysis**)
- Khiến dữ liệu luôn sẵn sàng cho nhiều data consumers sử dụng các tool mà họ chọn.

Đồng thời DE cũng phải tuân thủ với tất cả những yêu cầu về bảo mật và pháp luật khi thực hiện các nhiệm vụ trên.

Đầu tiên, để có thể thiết kế, và triển khai một pipelines. DE sử dụng nhiều tools khác nhau, dựa trên source system và 
cách dữ liệu được thực hiện theo **batch ingestion** hay **near real-time streaming ingestion**.

Tiếp theo, DE cũng phải chịu trách nhiệm cho việc đảm bảo chất lượng của data, thêm vào các metadata cho vào data catalog, quản lý vòng đời của code khi thực hiện việc **transformation**.

Cuối cùng, DE cần phải tích hợp với các công cụ tiêu thụ data cho phép Data Analysts và Data Scientists có thể sử dụng tool họ thích để tìm ra Insight từ dữ liệu.

### Lợi ích của việc sử dụng Cloud khi xây dựng giải pháp Big Data

Trước đây, các tổ chức dựa vào các hệ thống phức tạp trong data center của riêng họ, giúp họ nắm bắt, lưu trữ và xử lý một lượng lớn dữ liệu. Nhưng trong thập kỷ qua, một lượng dữ liệu khổng lồ mà tổ chức muốn lưu trữ và phan tích, 
và họ đã gặp khó khăn khi scale up hệ thống on-premise theo nhu cầu. Scale up khiến những công cụ truyền thống đẻ quản lý dữ liệu ngày càng lớn khiến nó càng phức tạp, đắt đỏ và tốn rất nhiều thời gian. Họ đã phải tìm kiếm một giải pháp thay đổi để phù hợp với khối lượng dữ liệu ngày càng lớn này.

Và khi AWS được chạy vào 2006, các tổ chức đã nhận ra lợi ích khi chạy khối lượng công việc của họ trên cloud về:
- Khả năng mở rộng
- Hiệu quả chi phí
- Bảo mật
- Tự động hóa

Một trong những dịch vụ đầu tiên của AWS, Amazon Simple Storage Service (Amazon S3) đã mang lại hiệu quả, giá thành thấp cho hàng nghìn dự án lớn cho tới ngày nay.
