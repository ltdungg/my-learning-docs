---
title: "2. Data Management Architectures"
description: ""
summary: ""
date: 2023-09-07T16:06:50+02:00
lastmod: 2023-09-07T16:06:50+02:00
draft: false
weight: 800
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>

### Databases và Data Warehouses
Có 2 loại hệ thống cơ sở dữ liệu, và cả 2 đều được sử dụng cho rất nhiều năm:
- **Online Transaction Processing (OLTP)**: Là hệ thống được sử dụng với mục đích chính là lưu trữ và cập nhật những **transactional data** (Dữ liệu giao dịch) với khối lượng lớn. 
  - Ví dụ: Loại OLTP databases thường được sử dụng để lưu trữ customer records (hồ sơ khách hàng), bao gồm chi tiết giao dịch như việc mua hàng, trả hàng, hoàn tiền,...
- **Online Analytical Processing (OLAP)**: Là hệ thống được sử dụng với mục đích chính là xây dựng báo cáo trên khối lượng lớn dữ liệu. Ta thường thấy hệ thống OLAP sẽ lấy dữ liệu từ các OLTP databases, và cung cấp một kho lưu trữ chung cho thể sử dụng cho mục đích báo cáo.

Vào những năm 90s, các công ty lớn có hàng chục hay hàng trăm databases thường là OLTP, và khả năng để phân tích thông qua các hệ thống đó hạn chế.

Sau đó kết quả là, Data Warehouses (OLAP systems) được phổ biến là hệ thống có thể tích hợp nhiều database systems vào một kho lưu trữ chung, tập trung vào việc phân tích.

Data Warehouse được thiết kế để lưu trữ **dữ liệu được tích hợp, quản lý và độ tin cậy cao**, rất có cấu trúc (well-defined schema)

### Dealing with big, unstructured data

Trong khi Data Warehouses truyền thống tốt trong việc lưu trữ và quản lý dữ liệu cấu trúc dạng bảng, tổ chức dưới các lược đồ quan hệ.
Nhưng nó lại không phù hợp để xử lý một lượng lớn semi-structured và unstructured data đang dẫn trở nên phổ biến.

Sau đó, vào năm 2010, một công cụ xử lý dữ liệu lớn trở nên phổ biến. **Hadoop** là một framework mã nguồn mở để xử lý lượng lớn datasets trên các cụm máy tính, đi đầu trong việc xử lý big data.
Các cụm bao gồm hằng chục, hàng trăm máy móc được gắn với ổ cứng có thể lưu trữ hàng ngàn terabytes dữ liệu được quản lý dưới một distributed filesystem hay còn gọi là **Hadoop Distributed File System (HDFS)**.

Nhưng để cài đặt Hadoop clusters thường cần lượng lớn tiền đầu tư ban đầu cho máy móc và ổ cứng. Và cần các team chuyên biệt để xử lý những yêu cầu bao gồm:
- Hadoop administrators specialized cho cụm, phần cứng và phần mềm
- Data Engineer specialized trong việc dùng các framework xử lý dữ liệu lớn như Spark, Hive, và Presto

### Cloud-based solutions for big data analytic

Dựa vào những yêu cầu cao đó, nhiều tổ chức đã sử dụng cloud là một giải pháp để xử lý big data, với các lợi ích:
- On-demand capacity (Năng lực theo yêu cầu)
- Limitless and elastic scaling (Không hạn chế và mở rộng tùy ý)
- Global footprint (Có thể đặt trên toàn cầu)
- Usage-based cost models (Mô hình chi phí theo những gì sử dụng)
- Freedom from managing hardware (Tự do quản lý phần cứng)

Các công ty lớn như **Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Snowflake và Databricks** cung cấp rất nhiều giải pháp để tích hợp, lưu trữ và phân tích lượng lớn dữ liệu trên cloud.

Với việc lưu trữ trên cloud objects stores đã cho phép tổ chức xây dựng một cách quản lý data mới có thể lưu trữ mọi data (structured, semi-structured, unstructured) và có thể scale mọi kích cỡ, được gọi là **data lake**.
Với phương pháp này, tất cả dữ liệu được tích hợp vào, xử lý và lưu trữ trong data lake, sau đó những dữ liệu cần độ trễ thấp (lower-latency) sẽ được load vào cloud data warehouse.

Trong những năm gần đây, một khai niệm mới được được đặt ra có thể tích hợp được tối ưu khả năng của cả data lakes và data warehousing, được gọi là **data lakehouse**, đã có những giải pháp từ các công ty như (AWS, GCP, Snowflake và Databricks), cũng như là các công cụ mã nguồn mở (Apache Hudi và Apache Iceberg) cũng đề cập đến data lakehouse.
Với các khả năng:
- Tích hợp nhanh chóng mọi loại dữ liêu.
- Lưu trữ và xử lý nhiều petabytes cho dữ liệu unstructured, semi-structured và structured
- Hỗ trợ **ACID** (đề cập đến 4 thuộc tính của một giao dịch - là atomicity (tính nguyên tử), consistency (tính nhất quán), isolation (tính độc lập) và durability (độ bền cao) cho phép nhiều người dùng đồng thời read, insert, update, và delete các hàng được quản lý bởi data lakehouse)
- Độ trễ truy cập dữ liệu thấp.
- Khả năng tiêu thụ dữ liệu với nhiều tool, bao gồm SQL, Spark, machine learning và BI tools.