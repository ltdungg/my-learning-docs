---
title: "ETL and ELT pipelines"
description: ""
summary: ""
date: 2023-09-07T16:06:50+02:00
lastmod: 2023-09-07T16:06:50+02:00
draft: false
weight: 4
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
<style>body {text-align: justify}</style>

Các tổ chức thường xây dựng data pipelines của họ như sau:
- Trích xuất dữ liệu từ các hệ thống nguồn.
- Chuyển đổi dữ liệu bằng cách kiểm tra, làm sạch, tiêu chuẩn hóa, và chọn lọc nó.
- Tải những dữ liệu được chuyển đổi đến lược đồ của enterprise data warehouse, và thường có cả data marts.

Trong pipeline này, bước đầu tiên là **Extract** dữ liệu từ nguồn, nhưng 2 bước tiếp theo có thể là **Transform**-**Load** hoặc là **Load-Transform** được gọi là **ETL** hoặc **ELT**.

Việc lựa chọn xây dựng ETL hay ELT dựa trên những nguyên nhân:
- Độ phức tạp của công việc data transformations.
- Các kỹ năng và công cụ mà tổ chức có để xây dựng bước data transformations.
- Tốc độ mà dữ liệu nguồn có thể được phân tích trong data warehouse sau khi mà dữ liệu được sản xuất.

{{< img src="etl.png" alt="" >}}

Với **ETL pipeline**, công đoạn transformations được thực hiện bên ngài data warehouse sử dụng đonạ code tùy chỉnh, sử dụng ETL service từ cloud như AWS Glue, hoặc ETL tool từ các nhà cung cấp thương mại như Informatica, Talend, DataStage, Microsoft hay Pentaho.

Ví dụ một ETL pipeline có thể bao gồm các công đoạn:
- Một hay nhiều hệ thống trích xuất dữ liệu từ nhiều nguồn (databases, SaaS solutions, file storage,...) và ghi dữ liệu vào khu vực raw/staging storage.
- Một hay nhiều transformations đọc dữ liệu từ khu vực raw/staging storage, chuyển đổi dữ liệu, và ghi nó vào trong khu vực transformed storage.
- Và hệ thống đọc các dữ liệu từ khu vực transformed storage và tải nó vào trong data warehouse.

Một cách tiếp cận xây dựng ETL pipeline thường sử dụng khi thỏa mãn những điều kiện dưới:
- Source databases và formats khác với data warehouse.
- Engineering team muốn thực hiện transformations sử dụng ngôn ngữ lập trình (vd: PySpark) hơn là SQL thông thường.
- Data Transformations phức tạp và tính toán chuyên sâu.

Ngược lại, một **ELT pipeline** lấy dữ liệu (thường là có cấu trúc cao) từ nhiều nguồn và load vào staging area của data warehouse. Và sau đó hoạt động transformations được lấy từ staging và ghi vào khực production (sẵn sàng để sử dụng)

{{< img src="elt.png" alt="" >}}

Cách tiếp cận này cho phép tải nhanh chóng số lượng lớn data từ source vào data warehouse. Hơn nữa, kiến trúc MPP có thể cải thiện đáng kế tốc độ thực hiện transformations trong ELT pipelines. Cách tiếp cận này thường được tận dụng khi thỏa mãn các điều kiện sau:
- Nguồn data và warehouse có cùng công nghệ database, khiến nó dễ dàng load trực tiếp từ source vào khu vực staging trong warehouse.
- Một lượng lớn dữ liệu cần được load nhanh chóng vào warehouse
- Tất cả các yêu cầu về transformations có thể thực hiện bằng cách thực thi những cầu lệnh SQL trong engine của warehouse's database

Sự khác biệt chính giữa ETL và ELT, nằm ở công đoạn transformations. Với ELT, dữ liệu được load trực tiếp vào warehouse, và cần phải sử dụng data warehouse engine để thực hiện transformation (thường là SQL). Còn với ETL, một engine bên ngoài data warehouse sẽ transformations dữ liệu rồi mới load vào data warehouse.
