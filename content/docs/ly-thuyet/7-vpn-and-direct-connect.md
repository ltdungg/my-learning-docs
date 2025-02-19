---
title: "7. VPN - Direct Connect - LoadBalancer - ExtraResources"
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

### VPN Site to Site

- <span style="color: orange; font-weight:bold;">VPN Site to Site</span> dùng trong mô hình hybird để thiết lập kết nối liên tục giữa môi trường trung tâm dữ liệu truyền thống tới môi trường VPC của AWS. Việc thiết lập kết nối sẽ cần 2 đầu endpoint ở phía AWS và phía khách hàng:
  - <span style="color: orange; font-weight:bold;">Virtual Private Gateway</span>: Được quản lý hoàn toàn bởi AWS (chia 2 endpoints ở 2 đầu ra AZ).
  - <span style="color: orange; font-weight:bold;">Customer Gateway</span>: Đầu enpoint phía khách hàng, có thể là thiết bị phần cứng hoặc software appliance.

### VPN Client to Site
- VPN Client to Site: Cho phép một host truy cập tới tài nguyên trong VPC.
- Khuyến kích sử dụng VPN Client to Site trong AWS Market Place

### AWS Direct Connect
- <span style="color: orange; font-weight:bold;">AWS Direct Connect</span> là dịch vụ cho phép tạo kết nối riêng từ trung tâm dữ liệu truyền thống tới AWS..
- Độ trễ khoảng 20ms - 30ms.
- AWS Direct Connect ở Việt Nam hiện tại sẽ thông qua AWS Direct Connect partners và hoạt động dưới dạng Hosted Connections. (Nếu trực tiếp tới AWS là Đeicated Connections).
  - Băng thông Direct Connect có thể thay đổi lên / xuống tùy nhu cầu.

### Elastic Load Balancing
- Elastic Load Balancing (ELB) là một dịch vụ cân bằng tải được quản lý bởi AWS, có chức năng phân phối lưu lượng cho nhiều EC2 Instance hoặc Container.
- Sử dụng giao thức HTTP, HTTPS, TCP và SSL (TCP bảo mật).
- Có thể nằm ở public hoặc private subnet.
- Mỗi ELB sẽ được cấp tên DNS và kt nối thông qua DNS. Chỉ có Network Load Balancer hỗ trợ gắn IP tĩnh.
- ELB có tính năng health check, không gửi lưu lượng đến các Instance không đạt health check.
- Bao gồm 4 loại:
  - Application Load Balancer
  - Network Load Balancer
  - Classic Load Balancer
  - Gateway Load Balancer
- <span style="color: orange; font-weight:bold;">Sticky session (sesion afinity)</span>: Tính năng cho phép các kết nối được gán vào một target nhất định. Việc này đảm bảo các requests từ một user trong một session sẽ được gửi tới cùng một target.
Sticky session là cần thiết trong trường hợp các máy chủ ứng dụng lưu trữ thông tin trạng thái người dùng tại server.
  - Hoạt động trên Network Load Balancer, Application Load Balancer, Classic Load Balancer
- ELB cung cấp tính năng lưu trữ logs truy cập (access logs) chúng ta có thể sử dụng access logs để phân tiích truy cập, trouble shoot. Log truy cập sẽ đựược lưu trữ vào một dịch vụ lưu trữ đối tượng là Amazon S3 (Simple Storage Service)

#### Elastic Load Balancer - Application Load Balancer
- <span style="color: orange; font-weight:bold;">Application Load Balancer (ALB)</span> là một dịch vụ cân bằng tải được quản lý bởi AWS, hoạt động ở Layer 7.
- Sử dụng giao thức HTTP, HTTPS.
- Hỗ trợ tính năng <span style="color: orange; font-weight:bold;">path-based routing.</span> (/mobile /desktop sẽ được route tới 2 target group khác nhau)
- Cho phép route traffic tới cả target nằm ngoài VPC (IP Address), EC2, Lambda, Container (ECS, EKS).

#### Elastic Load Balancer - Network Load Balancer
- <span style="color: orange; font-weight:bold;">Network Load Balancer (NLB)</span> là một dịch vụ cân bằng tải được quản lý bởi AWS, hoạt động ở layer 4.
- Sử dụng giao thức TCP, TLS.
- <span style="color: orange; font-weight:bold;">Hỗ trợ tính năng set IP tĩnh</span>
- Hỗ trợ <span style="color: orange; font-weight:bold;">hiệu năng cao nhất trong các loại Load Balancer</span> có khả năng xử lý đến hàng triệu request.
- Cho phép route traffic tới cả target nằm ngoài VPC (IP Address), EC2, Container (ECS, EKS).

#### Elastic Load Balancer - Classic Load Balancer
- <span style="color: orange; font-weight:bold;">Classic Load Balancer (CLB)</span> là một dịch vụ cân bằng tải được quản lý bởi AWS, hoạt động ở Layer 4, và Layer 7
  - Sử dụng giao thức HTTP, HTTPS, TCP, TLS
  - Chi phí cao hơn so với ALB và NLB.
  - Ít tính năng cao cấp hơn ALB và NLB, hiện tại rất ít được sử dụng.
  - Cho phép route traffic tơởi EC2.

#### Elastic Load Balancer - Gateway Load Balancer
- <span style="color: orange; font-weight:bold;">Gateway Load Balancer (GLB)</span> là một dịch vụ cân bằng tải được quản lý bởi AWS, hoạt động ở Layer 3. Gateway Load Balancer lắng nghe toàn bộ IP packets và forward tới target group được chỉ định.
- Sử dụng GENEVE protocol trên port 6081.
- Cho phép route traffic tới các virtual appliance được AWS hỗ trợ.
- Danh sách các vendor hỗ trợ:
  - [https://aws.amazon.com/vi/elasticloadbalancing/partners/](https://aws.amazon.com/vi/elasticloadbalancing/partners/)