---
title: "Columnar Data Storage And Data Compression"
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
### Columnar Data Storage
Một modern data warehouse còn được tăng hiệu suất thông qua việc lưu trữ **column-oriented (hướng cột)** và **data compression (nén dữ liệu)**.

Một ứng dụng OLTP thường làm việc với tất cả các hàng, bao gồm tất cả các cột (để đọc ghi nhanh chóng) thì backend database phải đọc và ghi tất cả các hàng trong ổ đĩa.
OLTP database sử dụng **row-oriented** để lưu trữ các hàng của bảng trong ổ đĩa.

{{< img src="row-oriented.png" alt="" >}}

Nhưng trong phân tích dữ liệu, người phân tích thường sử dụng những câu hỏi về nhóm (grouping) và tổng hợp (aggregations) trên một lượng hàng lớn.
Điều này khiến câu truy vấn phải quét toàn bộ các hàng nhưng dữ liệu chúng ta cần chỉ trong những cột cụ thể. Khiến cho việc câu truy vấn cần lượng disk I/O operations nhiều hơn cần thiết.

Modern data warehouses lưu trữ dữ liệu trong disk dưới dạng **column-oriented**. Phù hợp với những câu truy vấn phân tích chỉ cần một phần cột nhỏ trong bảng.
Khi lưu trữ dữ liệu dưới dạng **column-oriented**, data warehouse sẽ chia nhỏ bảng thành các nhóm rows, gọi là row chunk/groups. Nó lưu trữ trong disk như sau:

{{< img src="column-oriented.png" alt="" >}}

Data warehouse cũng đồng thời giám sát địa chỉ của những chunk này trong bộ nhớ. Modern data warehouse sử dụng những địa chỉ này để xác định vị trí của cột trên đĩa và đọc các giá trị vị trí vật lý của cột.
Bằng cách này, disk I/O được giảm thiểu đáng kể khi so sánh cùng câu truy vấn so với row-oriented.

### Data Compression
Ngoài ra, modern data warehouse còn triển khai nhiều **thuật toán nén (compression algorithms)** cho một bảng. Data warehouse có thể **kết hợp các cột** với thuật toán nén phù hợp với kiểu dữ liệu và đặc điểm của cột đó.
Thuật toán nén hoạt động hiệu quả khi các giá trị được nén có cùng kiểu dữ liệu và tỉ lệ trùng lặp cao.

Mục đích: Nén dữ liệu giúp **giảm dung lượng lưu trữ** cần thiết và **giảm thiểu số lượng thao tác đọc ghi đĩa (disk I/O)**. Làm tăng tốc độ truy vấn và giảm thiểu chi phí.

Đồng thời viết kết hợp với column-oriented, sắp xếp các giá trị của cùng một cột (cùng kiểu dữ liệu) với nhau, data warehouse đạt được **tỉ lệ nén tốt hơn**
, dẫn đến đọc ghi nhanh hơn và giảm thiểu dung lượng lưu trữ.
