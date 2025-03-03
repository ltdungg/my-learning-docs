---
title: "Amazon Database Migration Service"
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

{{< img src="aws-dms.png" alt="" class="center-image" >}}

Một trong những trường hợp ingestion phổ biến là đồng bộ dữ liệu từ hệ thống database vào trong một analytic pipeline, hoặc đặt dữ liệu trong Amazon S3-based data lake hay trong data warehouse system như **Amazon Redshift**.

**AWS DMS** là công cụ linh hoạt có thể sử dụng để di chuyển cơ sở dữ liệu hiện có sang một cơ sở dữ liệu mới, ví dụ như di chuyển từ **Oracle** database hiện có sang **Amazon Aurora PostgreSQL** database. Thêm vào đó, Amazon DMS có thể sử dụng để tạo bản sao giữa 2 database engine giống nhau.

Khi di chuyển đến cùng một engines, DMS sử dụng database engine gốc để khiến việc di chuyên dẽ dàng và hiệu suất. Từ góc độ phân tích, AWS DMS còn có thể sử dụng để chạy replication liên tục từ nhiều database engines phổ biến vào **Amazon S3 data lake**.

Trong trường hợp sử dụng của tôi, tôi muốn _đồng bộ_ sản xuất _customer_, _products_, và _order_ databases vào data lake. Sử dụng DMS, ta có thể thực hiện tải dữ liệu từ đầu từ databases vào S3, xác định format mà file được ghi (như là CSV hay Parquet), và xác định nơi ingestion trong S3. Cùng thời điểm đó, tta có thể cài 1 DMS task để sao chép liên tục từ source databases vào S3 sau khi tải xong hết dữ liệu.

Với transactional databases, các rows thường xuyên được updated, như là khách hàng muốn thay đổi địa chỉ hay số điện thoại. Khi truy vấn bằng **SQL**, ta có thể thấy thông tin updated, nhưng trong hầu hết các trường hợp, không có một phương pháp nào thực tế để theo dõi sự thay đổi của database bằng SQL. Do đó, DMS sử dụng database transaction log file từ database để theo dõi các bản cập nhật lên rows trong database và ghi nó vào file đích trong S3 với một số cột được thêm vào cho biết thao tác nào được phản ánh trong hàng đó - insert, update hay deletion. Quy trình theo dõi và ghi lại sự thay đổi này thường được gọi là **Change Data Capture (CDC)**.

Hình dùng với một tình hoáng cụ thể là bạn có một lược đồ với các cột **custid, lastname, firstname, address** và **phone**, và các sự kiện liên tiếp xảy ra:
- Một khách hàng mới được thêm vào với tất cả các cột đầy đủ.
- Số điện thoại nhập vào không đúng, nên cột có số điện thoại được updated.
- Hồ sơ khách hàng sau đó xóa khỏi database.

Ta có thể thấy CDC file được tạo ra bởi DMS:
{{< img src="dms-cdc.png" alt="" >}}

Hàng đầu tiên thể hiện một hàng mới được thêm vào trong bảng (thể hiện bởi chữ I trong cột đầu tiên).
Hàng thứ 2 thể hiện là một record được cập nhật (thể hiện bởi chữ U trong cột đầu tiên). Cuối cùng, dòng thứ 3 thể hiện rằng record này đã bị xóa khỏi bảng (chữ D trong cột đầu tiên).

Sau đó ta sẽ có một quy trình cập nhật riêng biệt để đọc và áp dụng những bản updates vào full load, tạo một point-in-time snapshot mới của cơ sở dữ liệu nguồn. 
Quy trình cập nhật này sẽ được lên lịch để chạy thường xuyên, và mỗi khi nó chạy, nó apply lần cập nhật cuối cùng thành các record bởi DMS đến các snapshot trước, tạo một point-in-time.

Amazon DMS có sẵn ở provisioned mode (trong đó bạn chọn size của replication instance sử dụng để kết nối với source database, làm mọi transformation, và ghi vào đích)
hay chế độ serverless (trong đó DMS sẽ tự động cấu hình, mổ rộng và quản lý tài nguyên cần thiết cho việc migration dựa theo yêu cầu)

---
> **_When to use:_** Amazon DMS đơn giản hóa việc migrating từ một database engine này đến database engine khác hoặc đồng bộ dữ liệu từ database có sẵn tới Amazon S3 trên cơ sở liên tục.
> 
> **_When not to use:_** Amazon DMS gây ra một số tải cho production database trong quá trình migrations, vì vậy bạn cần lưu ý điều này

> Xem thêm ở: [https://aws.amazon.com/dms/](https://aws.amazon.com/dms/)
---
