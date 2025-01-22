---
title: "2. Thành phần của Spark"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

<style>body {text-align: justify}</style>
\
![Spark Components](images/spark-components.png)

Spark bao gồm 5 thành phần chính: Spark Core, Spark SQL, Spark Streaming, MLlib và GraphX.

### Spark SQL
- Như tên gọi của nó, thì mô-đun này làm việc tốt với structured data.
- Có thể đọc được dữ liệu lưu trữ trong bảng RDBMS hay các file có định dạng lưu trữ có cấu trúc như (csv, text, JSON, Avro, ORC, Parquet, ...).
- Khi sử dụng Spark qua API bằng Java, Python, Scala hay R. Bạn có thể sử dụng lệnh SQL để truy vấn dữ liệu.

Ví dụ: Bạn có thể đọc file JSON lưu trữ trong Amazon S3, tạo một bảng tạm thời, và sử dụng lệnh SQL để đọc dữ liệu.

``` scala
// In Scala
// Đọc dữ liệu từ S3 Bucket vào Spark DataFrame
spark.read.json("s3://apache_spark/data/committers.json")
   .createOrReplaceTempView("committers")
// Sử dụng SQL để trả về kết quả là một Spark DataFrame
val results = spark.sql("""SELECT name, org, module, release, num_commits
    FROM committers WHERE module = 'mllib' AND num_commits > 10
    ORDER BY num_commits DESC""")
```
Bạn có thể viết một đoạn code như vậy với Python, R hay Java. Các mã byte sẽ được tạo giống hệt nhau, trả ra kết quả với hiệu suất tương tự.

### Spark MLlib
Spark mang đến một thư viện các thuật toán Machine Learning phổ biến gọi là MLlib.
Với hiệu suất được cải thiện đáng kể từ khi lần đầu ra mắt thư viện này.
\
\
API này cho phép trích xuất hay chuyển đổi tính năng, xây dựng pipelines (cho việc huấn luyện và đánh giá), và persist models (cho việc saving và reloading models) trong quá trình triển khai.
\
\
Thêm vào đó, có các tiện ích bổ sung bao gồm sử dụng các phép toán đại số tuyến tính và thống kê phổ biến.
\
\
**Ví dụ:** Dưới đây là một đoạn code python bao gồm những hoạt động cơ bản của một data scientist sẽ làm khi xây một mô hình:
```python
# In Python
from pyspark.ml.classification import LogisticRegression
...
training = spark.read.csv("s3://...")
test = spark.read.csv("s3://...")

# Load training data
lr = LogisticRegression(maxIter=10, regParam=0.3, elasticNetParam=0.8)

# Fit the model
lrModel = lr.fit(training)

# Predict
lrModel.transform(test)
...
```

### Spark Structured Streaming
Được xây dựng dựa trên Spark SQL engine và DataFrame-based APIs. Từ phiên bản Spark 2.2, Structured Straming có thể được sử dụng cả trên môi trường production.
\
\
Spark Structured Streaming cần thiết cho Big Data Developers để kết hợp và phản ứng với dữ liệu tại thời gian thực từ các nguồn như Apache Kafka, hay các nguồn khác.
Developers có thể coi như đây là một bảng dữ liệu có cấu trúc và xử lý, truy vấn như một bảng tĩnh.
\
\
**Ví dụ:** Dưới đây là một đoạn code mẫu về Spark Structured Streaming
```python
# In Python
# Đọc luồng dữ liệu từ local host
from pyspark.sql.functions import explode, split
lines = (spark
         .readStream
         .format("socket")
         .option("host", "localhost")
         .option("port", 9999)
         .load())

# Thực hiện việc chuyển đổi
# Chia các dòng thành các từ
words = lines.select(explode(split(lines.value, " "))).alias("word")

# Tạo bộ đếm từ
word_counts = words.groupBy("word").count()

# Ghi vào Kafka
query = (word_counts
         .writeStream
         .format("kafka")
         .option("topic", "output"))
```

### GraphX
Như tên gọi, GraphX là một thư viện để thao tác với đồ thị (ví dụ: đồ thị mạng xã hội, đồ thị network,...).
GraphX cung cấp thuật toán đồ thị tiêu chuẩn cho việc phân tích, kết nối và truyền tải được đóng góp bởi cộng đồng như:
PageRank, Connected Components và Triangle Counting.
\
\
**Ví dụ:** Đoạn code dưới đây là một ví dụ về việc join 2 graph sử dụng GraphX APIs.
```scala
// In Scala
val graph = Graph(verticles, edges)
messages = spark.textFile("hdfs://...")
val graph2 = graph.joinVertices(messages) {
    (id, vertex, msg) => ...
}
```