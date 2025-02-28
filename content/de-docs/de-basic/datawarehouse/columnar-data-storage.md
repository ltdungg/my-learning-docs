---
title: "Columnar Data Storage"
description: ""
summary: ""
date: 2023-09-07T16:06:50+02:00
lastmod: 2023-09-07T16:06:50+02:00
draft: false
weight: 3
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>

Một modern data warehouse còn được tăng hiệu suất thông qua việc lưu trữ **column-oriented (hướng cột)** và **data compression (nén dữ liệu)**.

Một ứng dụng OLTP thường làm việc với tất cả các hàng, bao gồm tất cả các cột (để đọc ghi nhanh chóng) thì backend database phải đọc và ghi tất cả các hàng trong ổ đĩa.
OLTP database sử dụng **row-oriented** để lưu trữ các hàng của bảng trong ổ đĩa.

{{< img src="row-oriented.png" alt="" >}}

Nhưng trong phân tích dữ liệu, người phân tích thường sử dụng những câu hỏi về nhóm (grouping) và tổng hợp (aggregations) trên một lượng hàng lớn.
Điều này khiến câu truy vấn phải quét toàn bộ các hàng nhưng dữ liệu chúng ta cần chỉ trong những cột cụ thể. Khiến cho việc câu truy vấn cần lượng disk I/O operations nhiều hơn cần thiết.

Modern data warehouses lưu trữ dữ liệu trong disk dưới dạng **column-oriented**. Phù hợp với những câu truy vấn phân tích chỉ cần một phần cột nhỏ trong bảng.
Khi lưu trữ dữ liệu dưới dạng **column-oriented**, data warehouse sẽ chia nhỏ bảng thành các nhóm rows, gọi là row chunk/groups. Nó lưu trữ trong disk như sau:

{{< img src="column-oriented.png" alt="" >}}

