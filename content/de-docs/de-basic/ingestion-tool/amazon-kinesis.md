---
title: "Amazon Kinesis for streaming data ingestion"
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

**Amazon Kinesis** là một dịch vụ được quản lý để đơn giản hóa quy trình ingesting và xử lý streaming data trong thời gian thực, hoặc gần thực.
Có nhiều trường hợp Kinesis có thể sử dụng, bao gồm ingestion dữ liệu streaming (như log files, website clickstreams, hay IoT data), cũng như là video và audio streams.

Dựa vào từng trường hợp cụ thể, có nhiều dịch vụ khác nhau bạn có thể chọn là một phần của dịch vụ Kinesis. Dưới đây là một số cái nhìn chung về các dịch vụ có trong Amazon Kinesis:
1. **Kinesis Data Firehose:** Ingests streaming data, buffers (vùng nhớ tạm thời để lưu trữ dữ liệu trong quá trình truyền tải giữa các thành phần khác nhau của hệ thống) cho 1 khoảng thời gian có thể cấu hình, sau đó truyền tải dữ liệu đến một số đích nhất định (như **S3, Redshift, OpenSearch Service, Splunk, ...**)
2. **Kinesis Data Streams:** Ingests real-time data streams, xử lý dữ liệu đến với custom application và low latency.
3. **Kinesis Data Analytics:** Đọc dữ liệu từ streaming source và sử dụng SQL hay **Apache Flink** code để thực hiện phân tích trực tiếp trong luồng dữ liệu đó.
4. **Kinesis Video Streams:** Xử lý streaming video hoặc audio streams, cũng như là dữ liệu được sắp xếp theo thời gian như hình ảnh nhiệt và dữ liệu RADAR.

### Amazon Kinesis Agent

AWS cung cấp Kinesis Agent để dễ dàng tiêu thụ dữ liệu từ một hệ thống và ghi dữ liệu đó vào 1 luồng stream hoặc Kinesis Data Streams hoặc Kinesis Data Firehose.

Agent có thể cấu hình để giám sát một nhóm các tệp, khi dữ liệu mới được ghi vào file, Agent sẽ lưu trữ dữ liệu trong buffers - bộ nhớ đệm (thời gian lưu trữ có thể tùy chỉnh trong khoảng 1s đến 15m) và ghi dữ liệu vào Kinesis Data Streams hoặc Kinesis Data Firehose. Agent tự động xử lý việc thử lại khi gặp lỗi truyền dữ liệu, đồng thời quản lý xoay vòng tệp và thực hiện kiểm tra điểm để đảm bảo tính toàn vẹn dữ liệu.

Một hoàn cảnh sử dụng thường thấy là khi bạn muốn phân tích sự kiện xảy ra trên website của bạn với gần thời gian thực. Kinesis Agent có thể cấu hình để giám sát Apache web server log files trên website của bạn, chuyển nó thành JSON format và ghi các bản ghi phản ánh hoạt động của trang web mỗi 30s vào Kinesis, nơi Kinesis Data Analytics có thể được sử dụng để phân tích các sự kiện và tạo ra số liệu tùy chỉnh dựa trên cửa sổ trượt 5 phút (có nghĩa là dữ liệu được phân tích theo các khoảng thời gian 5 phút liên tiếp, không chồng chéo. Ví dụ: 0-5 phút, 5-10 phút, 10-15 phút, v.v.) 

---
> **_When to use:_** Khi bạn muốn truyền dữ liệu luồng đến Kinesis mà dữ liệu đó đang được ghi vào một tệp trong một quy trình riêng biệt (vd: log files)
> 
> **_When not to use:_** Nếu bạn có ứng dụng phát ra luồng dữ liệu trực tuyến (vd mobile application hay IoT device), bạn nên xem xét sử dụng **Amazon Kinesis Producer Library (KPL)**, hoặc **AWS SDK**, để tích hợp việc gửi thẳng dữ liệu trực tiếp từ ứng dụng của bạn.
---

### Amazon Kinesis Firehose

**Amazon Kinesis Firehose** được thiết kế để cho phép bạn dễ dàng tích họ dữ liệu gần thời gian thực từ nguồn streaming và ghi vào target, bao gồm Amazon S3, Redshift, OpenSearch Service, cũng như là nhiều dịch vụ third-party (như Splunk, Datadog và New Relic).

Một trường hợp thường thấy cho mục đích data engineering là tích hơ webiste clickstream từ Apache web logs trên web server và ghi vào S3 data lake (hoặc Redshift data warehouse).
Trong trường hợp này, bạn có thể cài đặt Kinesis Agent trên web server và cấu hình nó để giám sát Apache web server log files. Dựa trên cấu hình agent, theo lịch trình thường xuyên, agent sẽ ghi các record từ log files vào Kinesis Firehose endpoint.

Kinesis Firehose endpoint lưu các record trong bọ nhớ đệm, và sau khoảng thời gian cụ thể (1-15 phút) hoặc dựa trên kích thước của record (1MB - 128MB), nó sẽ ghi lại dữ liệu vào target cụ thể. Kinesis Firehose yêu cầu bạn xác định cụ thể size và time limit, và khi đạt được điều kiện đầu tin thỏa mãn sẽ kích hoạt việc ghi file.

Khi ghi file vào Amazon S3, bạn có thể chọn data được chuyển đổi dưới dạng **Parquet** hoặc **ORC** hoặc chuyển đổi tùy chỉnh sử dụng hàm Amazon Lambda. 
Kinesis Data Firehouse cũng hỗ trợ **dynamic partitioning**, cho phép bạn xác định, cấu hình phân vùng tùy chọn.

---
> **_When to use:_** Lý tưởng khi bạn muốn nhận luồng dữ liệu trực tiếp, lưu lại bộ đệm trong một khoảng thời gian, và ghi dữ liệu vào target hỗ trợ bởi Kinesis Firehose.
> 
> **_When not to use:_** Nếu trường hợp bạn cần độ trễ rất thấp cho luồng dữ liệu trực tiếp hoặc bạn muốn sử dụng ứng dụng tùy chỉnh để xử lý dữ liệu đến hoặc chuyên giao record không được hỗ trợ bởi Kinesis Firehose, bạn có thể xem xét sử dụng **Amazon Kinesis Data Streams** hoặc **Amazon Managed Streaming for Apache Kafka (MSK)**
---

Xem thêm tại: [https://aws.amazon.com/firehose/](https://aws.amazon.com/firehose/)

### Amazon Kinesis Data Streams

**Kinesis Data Streams** cung cấp tính linh hoạt cao cho cách dữ liệu được tiêu thụ và làm cho data đến có sẵn trong ứng dụng streaming của bạn với độ trễ cực thấp (AWS chỉ ra dữ liệu có thể được tiêu thụ trong phạm vi chỉ trong 70 mili giây dữ liệu được ghi vào kinesis) 

Bạn có thể ghi vào Kinesis Data Streams sử dụng Kinesis Agent, hoặc bạn có thể phát triển ứng dụng của bạn sử dụng AWS SDK hoặc Amazon KPL, thư viện đơn giản hóa việc ghi lại dữ liệu với thông lượng cao vào Kinesis data stream.

Có nhiều cách để tạo ứng dụng đọc dữ liệu từ Kinesis data stream, bao gồm:
- Sử dụng dịch vụ Kinesis khác (như Kinesis Firehose hay Kinesis Data Analytics)
- Chạy code tùy chỉnh sử dụng AWS Lambda (môi trường serverless để chạy code không cần cung cấp và quản lý server)
- Cài đặt cụm Amazon EC2 servers để xử lý luồng của bạn. Bạn có thể sử dụng KCL để xử lý nhiệm vụ phức tạp liên kết với nhiều servers để xử lý, như load balancing, phản hồi khi lỗi, checkpointing records đã được dữ lý, và phản ứng với resharding - phân đoạn lại (tăng hoặc giảm số lượng phân đoạn để xử lý streaming data).

