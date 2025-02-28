---
title: "Kho dữ liệu phân tán và xử lý dữ liệu song song"
description: ""
summary: ""
date: 2023-09-07T16:06:50+02:00
lastmod: 2023-09-07T16:06:50+02:00
draft: false
weight: 2
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>

Chúng ta sẽ tìm hiểu kiến trúc của cụm **Amazon Redshift**. Có rất nhiều loại node khác nhau trong Redshift, trong hình duới đây sẽ là cụm dựa trên **RA3 nodes**.

{{< img src="redshift-archi.png" alt="" >}}

Như hình trên, cụm Amazon Redshift bao gồm leader node và một hay nhiều compute node:
- **leader node** giao tiếp với ứng dụng client, nhận và phân tích truy vấn, và điều phối thực thi câu truy vấn đến compute node.
- Các **computer nodes** có hiệu suất cao để lưu trữ một phần con của Data Warehouse và thực thi câu truy vấn song song trên dữ liệu mà nó chứa.
- Đối với các RA3 node, Amazon S3 được sử dụng như là Redshift Managed Storage (RMS) cho dữ liệu warehouse, và local storage của compute node được dùng để lưu trữ cache cho "hot" data.

Mỗi compute node có tài nguyên riêng như processors, memory, và high-performance storage tách biệt với các compute node khác, còn được gọi là shared-nothing architecture.

Và data warehouse trên cloud triển khai cấu trúc truy vấn phân tán song song hay còn gọi là **Massively Parallel Processing (MPP)**.