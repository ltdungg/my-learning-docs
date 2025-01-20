---
title: "3. Công cụ quản lý AWS Services"
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

### AWS Management Console - Root Login


Chúng ta có thể login bằng tài khoản root hoặc bằng tài khoản IAM User (tài khoản con giúp quản lý truy xuất các tài nguyên của AWS)
 <br> [Link AWS Console](https://aws.amazon.com/console/)

<img src="/aws-console.png">

### AWS Management Console - IAM Login

Khi login bằng IAM User chúng ta cần cung cấp thêm thông tin **Account ID** (Chuỗi 12 chữ số) để xác định account AWS

### AWS Management Console - Service Search
- Sau khi login có thể tìm kiếm và sử dụng các dịch vụ của AWS

### AWS Management Console - Support Center
Tạo support case để yêu cầu trợ giúp

### AWS Command Line Interface (CLI)
- Open source, cho phép tương tác với các dịch vụ AWS bằng command.
- Chức năng **tương đương** với chức năng được cung cấp bởi AWS Management Console dựa trên trình duyệt
- Sử dụng **Access key / Secret Access Key** để sử dụng CLI.

### AWS SDK
- Đơn giản hóa việc sử dụng AWS bằng cách cung cấp một bộ thư viện nhất quán và 
quen thuộc cho đội ngũ phát triển ứng dụng.
- Sử dụng **Access key / Secret Access Key** để sử dụng SDK.
- Phát triển ứng dụng sử dụng AWS dễ dàng.