---
title: "Data Lake cơ bản"
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

### Khái niệm

Với việc sử dụng Data Warehouse cho những công việc phân tích các bảng có cấu trúc cao nhưng lại không phù hợp khi lưu trữ những dữ liệu semi-structured và unstructured.
Mặc dù nó tốt trong công việc xử lý dựa trên SQL nhưng việc xử lý dữ liệu không chỉ dừng lại ở SQL. Ví dụ như trích xuất metadata từ dữ liệu unstructured, như audio hay images, phù hợp với các công cụ machine learning.

Một cloud data lake là trung tâm dữ liệu có khả năng mở rộng cao khi cần, bao gồm:
- Structured Data (row-column based tables)
- Semi-structured data (như JSON và XML file, log records, và sensor data streams)
- Unstructured data (như audio, video streams, Word/PDF và email)

Dữ liệu từ nhiều nguồn có thể load nhanh chóng vào data lake giữ nguyên format và cấu trúc. Khác với data warehouse, data lake không cần phải tiêu chuẩn thành một cấu trúc trước khi đưa vào sử dụng.

Một cloud data lake cũng tích hợp nhiều công cụ phân tích phong phú, bao gồm **SQL**, code-based tool (như **Apache Spark**), đc biệt là **machine learning tool** và **BI visualization tools**

### Kiến trúc logic của Data Lake

{{< img src="datalake-archi.png" alt="" >}}

Hình dưới đây mô tả một tập các thành phần đc lập với nhau tổ chức thành 5 lớp logic, có thể phát triển qua thời gian cùng với sự đổi mới của data management và phương pháp analytics với các công cụ mới.


### The storage layer and storage zones

Như trong hình phần storage layer được xây dựng trên cloud object store là Amazon S3. Cung cấp kho lưu trữ không giới hạn, chi phí thấp có thể lưu trữ đa dạng loại dữ liệu.
Phần storage layer được tổ chức thành nhiều **zones**, mỗi zone có một mục đích cụ thể. Không có luật nào giới hạn số zone trong một data lake, hay là tên zone, nhưng ta sẽ thường thấy:
- **Landing/raw zone**: Đây là khu vực mà Ingestion Layer ghi dữ liệu vào từ nguồn. Trực tiếp lưu trữ dữ liệu thô từ nguồn.
- **Clean/transform zone**: Đây là khu vực để lưu trữ sau khi được xử lý như là xác thực, làm sạch, và tối ưu dataset. Dữ liệu ở khu vực này thường được lưu dưới dạng tối ưu như là **Parquet** và nó thường được phân vùng để tăng tốc thực thi truy vấn và các downstream processing. Dữ liệu PII Information (dữ liệu cá nhân) có thể được xóa, che giấu hoặc thay thế với tokens.
- **Curated/enrich zone**: Dữ liệu trong khu vực clean/transform có thể được tinh chỉnh và làm phong phú hơn với từng mục đích cụ thể. Dữ liệu ở đây thường được phân vùng, phân loại và tối ưu cho consumption layer.

Dựa vào từng yêu cầu business cụ thể, vài data lake sẽ có nhiều hơn hoặc ít hơn số zone. Ví dụ là một data lake cơ bản có thể chỉ cần có 2 zone (raw và curated zone), nhưng có vài data lake sẽ có đến hơn 5 zones để xử lý giai đoạn trung gian hay yêu cầu cụ thể nào đó.

### Catalog and search layers

Một Data Lake thường chứa một lướng lớn datasets, từ nhiều nguồn từ bên trong lẫn bên ngoài. Những datasets này hữu ích với nhiều teams trong tổ chức nên cần phải có khả năng để tìm kiếm dataset và xem các lược đồ hay metadata của dataset.

Một **technical catalog** được dùng để ánh xạ nhiều file lưu trong storage layer dưới dạng cơ sử dữ liệu và bảng.
 
Một **business catalog** tập trung vào metadata quan trọng với business. Có thể bao gồm các thuộc tính như: chủ data, lần cuối dữ liệu của dataset được update, tóm tắt mục đích của bảng, định nghĩa các cột,...
Hỗ trợ khả năng tìm kiếm nâng cao, hỗ trợ các team tìm thấy data họ muốn tùy use case.

### Ingestion Layer

**Ingestion layer** chịu trách nhiệm cho việc kết nối với các dữ liệu nguồn và mang data vào landing/raw zone trong storage layer. Có thể bao gồm đa dạng các tools khác nhau, mỗi tools có thể connect với các loại data source khác nhau:
- Data Structured (structured, semi-structured, hay unstructured)
- Data delivery type (table rows, data stream, data file)
- Data production cadence (batch hay streaming)

Cách tiếp cận này giúp việc thêm tool và data source mới dễ dàng và linh hoạt.

### Processing layer

**Processing layer** là nơi transforms dữ liệu thông qua nhiều bước khác nhau: làm sạch, tiêu chuẩn hóa và làm giàu dữ liệu.
Processing layer lưu trữ transformed data vào các zones khác nhau, ghi nó vào clean zone và curated zone, rồi đảm bảo rằng technical catalog được cập nhật.
Các công cụ trong AWS thường được sử dụng cho việc này bao gồm: **AWS Glue** và **Amazon EMR**

### Consumption layer 

Khi dữ liệu đã sẵn sàng để được tiêu thụ, nó có thể được phân tích bằng nhiều công cụ, Để thực hiện phân tích dữ liệu trong data lake, consumption layer cung cấp công cụ có mục đích truy cập dữ liệu từ storage layer và đọc schema từ catalog layer.

