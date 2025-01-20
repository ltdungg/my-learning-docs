---
title: "2. Hạ tầng toàn cầu của AWS"
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

[//]: # (<span style="color: orange; font-weight:bold;"></span>)

### Trung tâm dữ liệu của AWS (Data Center)
- Một trung tâm dữ liệu có thể chứa hàng chục ngàn máy chủ.
- Tất cả trung tâm dữ liệu của AWS đều sử dụng các <span style="color: orange; font-weight:bold;">thiết bị được tối ưu hóa dành riêng cho hoạt động của AWS</span>
    
  [More Info](https://aws.amazon.com/about-aws/global-infrastructure/)

### Availability Zone
- Một <span style="color: orange; font-weight:bold;">Availability Zone</span> (AZ) bao gồm một hoặc nhiều trung tâm dữ liệu, các (AZ) được thiết kế để không
xảy ra sự cố ảnh hưởng đồng thời 2 AZ một lúc (<span style="color: orange; font-weight:bold;">fault isolation</span>)

![region](images/az.png)
<br> <br>

- Giữa 2 AZ là đường kết nối riêng tốc độ cao
- <span style="color: orange; font-weight:bold;">AWS khuyến nghị nên triển khai ứng dụng tối thiểu trên 2 AZ</span>

### Region
- Một AWS <span style="color: orange; font-weight:bold;">Region</span> bao gồm <span style="color: orange; font-weight:bold;">tối thiểu 3 Availability Zone</span>. Hiện tại có hơn 25 Region trên toàn cầu.
- Các Region được kết ối với nhau bởi mạng backbone của AWS.
- Mặc định dữ liệu và dịch vụ ở các Region độc ập với nhau. (Trừ một số dịch vụ quy mô Global)

![region](images/region.png)
<br>

### Edge Locations
- Là mạng lưới trung tâm dữ liệu AWS được thiết kế để cung cấp dịch vụ với độ trễ thấp nhất có thể.
- Các dịch vụ AWS hoạt động tại Edge Locations (POP) bao gồm
  - CloudFront (CDN)
  - Web Application Firewall (WAF)
  - Route 53 (DNS Service)
