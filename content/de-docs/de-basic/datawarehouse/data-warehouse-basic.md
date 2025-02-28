---
title: "Data Warehouse cơ bản"
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

Một **Enterprise Data Warehouse (EDW)** là một kho lưu trữ tập trung bao gồm những tài sản dữ liệu có cấu trúc, được chọn lọc, nhất quán và đáng tin cậy.

Tài sản dữ liệu này được lấy từ nguồn thông tin từ lĩnh vực kinh doanh chính của công ty và được tích hợp từ nhiều nguồn dữ liệu như:
- Các ứng dụng giao dịch điều hành doanh nghiệp (ERP, CRM và các ứng dụng trong kinh doanh) hỗ trợ tất cả các lĩnh vực chính của doanh nghiệp.
- Các nguồn dữ liệu bên ngoài như dữ liệu từ đối tác, bên thứ 3.

Một EDW cung cấp khả năng đưa ra quyết định, để đo lường hiệu suất của doanh nghiệp hay tìm các xu hướng hiện tại hay quá khứ của doanh nghiệp, tìm những cơ hội kinh doanh và tìm ra hành vi người dùng.

Thông thường, một kiến data warehouse bao gồm:
- Nguồn dữ liệu từ doanh nghiệp đi vào DW thông qua quá trình **Extract, Transform, Load (ETL)** hay **Extract, Load, Transform (ELT)**
- Một hoặc nhiều data warehouses (thường là nhiều chủ đề tập trung vào nhiều data marts)
- Người dùng cuối tiêu thụ dữ liệu từ DW như là (Analytic tools và BI visualize)

![image](/dw-archi.png)

### Dimensional modeling trong Data Warehouses
Dữ liệu trong data warehouse thường được lưu trữ thành các relational tables được tổ chức thành các dimensional models được sử dụng rộng rãi:
- **star schema**
- **snowflake schema**

Việc sử dụng dimensional modeling khiến cho việc dễ dàng lọc, thu thập dữ liệu và khiến cho các câu truy vấn linh hoạt, dễ dàng và hiệu suất cao.

Trong data warehouse, các bảng thường được tách biệt làm **fact tables** và **dimenion tables**.
- **Fact table** thường lưu trữ các phép đo/số liệu chi tiết dạng số cho một lĩnh vực cụ thể (VD: sales)
- **Dimension table** lưu trữ bối cảnh mà các phép đo lường thực tế (fact measurements) được ghi lại.
  - Ví dụ: thông tin cửa hàng, sản phẩm,...

1. **Star schema**

{{< img src="star-schema.png" alt="" >}}

Các bảng dữ liệu được tổ chức thành như một ngôi sao, với bảng sales fact nằm ở giữa của ngôi sao và các dimension table nằm ở các góc.

Ưu điểm:
- Dễ dàng phân tích dữ liệu với ít lần JOIN 
- Dễ nhìn, tổng hợp, tính toán
Nhược điểm:
- Thường là denormalized (không chuẩn hóa) nên với lượng lớn dữ liệu dimension thì dẫn đến việc data duplacation và inconsistencies trong bảng dimension.
- Với lượng denormalized lớn thì có thể khiến việc update dữ liệu chậm chạp.

2. **Snowflake schema**

{{< img src="snowflake-schema.png" alt="" >}}

Các bảng dữ liệu được tổ chức như bông tuyết.

Ưu điểm:
- Được normalization tránh việc inconsistencies và duplication.
- Giảm thiểu dung lượng phải lưu trữ.

Nhược điểm:
- Các truy vấn JOIN phức tạp khiến truy vấn có thể chậm hơn.

---
> **_NOTE:_** Để chọn được việc sử dụng star schema hay snowflake schema bạn nên xem xét loại câu truy vấn được thực hiện trong dataset.
> Lựa chọn giữa việc câu truy vấn phức tạp hơn hay việc update bảng sẽ chậm hơn.
---

### Data Marts

Data Warehouse bao gồm tất cả các dữ liệu liên quan đến lĩnh vực kinh doanh và một lược đồ phức tạp. Được dùng để phân tích chéo nhau giữa các lĩnh vực, cung cấp thông tin cho các chiến lược kinh doanh.

**Data mart là kho lưu trữ của một lĩnh vực duy nhất** (ví dụ: marketing, bán hàng hoặc tài chính). Phục vụ một nhóm nhỏ người dùng doanh nghiệp, như một phòng ban với **lược đồ dễ dàng nắm bắt** và **chỉ chứa những dữ liệu liên quan**.

Data mart thường có một tập hợp bảng denormalized fact được tổ chức dễ dàng hơn EDW. Giảm thiểu khối lượng dữ liệu khiến data mart dễ xây dựng, dễ hiểu và dễ sử dụng.

Data mart có thể được tạo:
- **Top-down**: Dữ liệu được lấy từ data warehouse có sẵn, tập trung vào các khía cạnh cụ thể của doanh nghiệp.
{{< img src="data-mart-top-down.png" alt="" >}}
- **Bottom-up**: Dữ liệu có nguồn góc trực tiếp từ transactional databases của lĩnh vực củ thể.
{{< img src="data-mart-bottom-up.png" alt="" >}}

