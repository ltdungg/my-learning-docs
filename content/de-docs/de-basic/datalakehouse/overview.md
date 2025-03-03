---
title: "Data lakehouse cơ bản"
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

### Sự kết hợp tốt nhất của data warehouses và data lakes

Một data lake phù hợp cho việc lưu trữ tất cả các loại data không tốn kém và cung cấp nhiều tools để làm việc và tiêu thụ data.
Bao gồm việc transform data với framework như **Apache Spark**, train model machine learning như **Amazon SageMaker**, truy vấn dữ liệu bằng SQL như **Amazon Athena, Presto** hay **Trino**

Tuy nhiên, có vài hạn chế với data lake truyền thống. Ví dụ, data lake không hỗ trợ **ACID** (tính nguyên tử, tính nhất quán, tính độc lập và độ bền) là thuộc tính thông thường của hầu hết databases. Cũng như là với việc lưu trữ giá rẻ, hiệu suất truy vấn cũng cao bằng nó có thể thực hiện trên data warehouse.

Với những hạn chế đó gây ra độ phức tạp khi làm việc với nhiều team cùng một dataset, với một team update dữ liệu và một team truy vấn dữ liệu cùng lúc thì có thể dẫn đến data **không nhất quán**, cũng như là bạn có nhiều dashboard và báo cáo với các công cụ **Business Intelligence**, hiệu suất truy vấn trong data lake không phù hợp với requirements.

Những khó khăn này thường được xử lý bằng cách tải một phần data từ data lake vào data warehouse, như **Amazon Redshift** hay **Snowflake**. Đã cung cấp hiệu suất và tính nhất quán theo yêu cầu khi các team cùng làm việc trên cùng một dataset. Tuy nhiên, kho lưu trữ data warehouse đắt đỏ và với một số trường hợp cần kết hợp nhiều dữ liệu từ nhiều nguồn khác nhau, việc này **không kinh tế** khi tải tất cả dữ liệu vào trong data warehouse.

Để đối mặt với những thách thức này, một định dạng bảng mới được ra đời có thể đơn giản hóa quy trình updating data lake tables với một cách an toàn, cho phép các truy vấn được liên kết (kết hợp data từ nhiều storage engines khác nhau) và phương pháp này được gọi với cái tên **data lakehouse**

Đã có nhiều blogs, bài báo về các cách tiếp cận data lakehouse khác nhau từ nhiều doanh nghiệp: AWS, Azure, Google, Snowflake, Databricks, Dremio và Starburst.
Cuối cùng, không có định nghĩa tiêu chuẩn nào về data lakehouse, các nhà cung cấp dịch vụ này thường cung cấp sự kết hợp tốt nhất về data lake và data warehouse với bộ công cụ của riêng họ.

Tuy nhiên, có một số công nghệ và phương pháp được áp dụng rộng rãi cho phép làm mờ ranh giói giữa data warehouse và datalake.

### New data lake table formats

Vài năm qua, một lượng các table formats mới được đề xuất là thế hệ mới của định dạng ban đầu Hive - một định dạng ra đời bởi Facebook hơn một thập kỷ trước.
Hiện tại, có 3 định dạng mới cạnh tranh chính với nhau để phát triển modern data lakes.

Mỗi table formats có thế mạnh và điểm yếu riêng, tất cả đều nhằm mục đích cho phép các bản cập nhật nhất quán và đọc dữ liệu đơn giản hơn, cũng như là hiệu suất cao hơn và khả năng truy vấn tại một điểm thời gian nhất định. Các table formats mới này cung cấp chức năng làm việc với dữ liệu trong data lake đơn giản hơn và tương tự những gì chỉ có ở data warehouse và databases thông thường. Ba table formats chính được coi là thế hệ mới là:
- **Delta Lake**: Được tạo bởi Databricks, cung cấp cả phiên bản trả phí và open-source. Một số các công cụ thương mại và open-source có thể làm việc với Delta Lake files, bao gồm Apache Spark, Presto, Snowflake, Redshift và nhiều công cụ khác.
- **Apache Hudi**: Được tạo bởi Uber, và đã ủng hộ cho Apache Sofware Foundation, và giờ nó là công cụ open-source. Hudi đã được áp dụng rộng rãi và các blog bài viết/case studies đề cập đến sử dụng Apache Hudi từ nhiều công ty như Amazon Transportation Service, Walmart, Robinhood và GE Aviation.
- **Apache Iceberg**: Được tạo bởi 2 engineers từ Netflix và sau đó cũng ủng hộ cho Apache Software Foundation, khiến nó thành công cụ open-source. Các công ty đã tham khảo công khai sử dụng Apache Iceberge, và có đóng góp cho dự án open-source này, bao gồm: Airbnb, Expedia, Adobe, Apple và Lyft 

### Federated queries across database engines

Một cách tiếp cận khác cũng trở nên phổ biến cùng với câu hỏi kết hợp tốt nhất của data warehouse và data lake. Đó là chức năng có thể truy vấn thông qua nhiều databases engines hay storage platforms. 
Ví dụ, cloud data warehouse như Amazon Redshift và Snowflake có thể truy vấn dữ liệu và load vào data warehouse, cũng như là dữ liệu từ trong data lake (như dựa trên Amazon S3).

Với cách này, ta có thể load 12 tháng gần nhất vào data warehouse trong khi 4 năm trước vẫn có thể lưu trong data lake. Vì hầu hết truy vấn chỉ truy vấn 12 tháng gần nhất của dữ liệu và lưu nó trong kho có hiệu suất cao trong data warehouse. Tuy nhiên, với các câu truy vấn cần truy cập đến dữ liệu lịch sử, data warehouse có thể join với tables trong S3 data lake với dữ liệu gần nhất trong data warehouse.

Với những câu truy vấn liên kết này, yêu cầu copy dữ liệu giữa nhiều hệ thống data thông qua ETL pipelines được giảm thiểu. Tuy nhiên, truy vấn trên nhiều các hệ thống khác nhau không thực hiện tốt như truy vấn dữ liệu local-only. Tuy nhiên, khả năng truy vấn trên nhiều hệ thống hữu dụng trong nhiều tình hoáng và giúp tạo ra hệ sinh thái big data tích hợp hơn. 