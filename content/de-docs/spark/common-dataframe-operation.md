---
title: "6. Một số thao tác với DataFrame"
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

### DataFrameReader và DataFrame Writer
**DataFrameReader** cho phép bạn đọc data từ nhiều nguồn khác nhau vào DataFrame, ví dụ JSON, CSV, Parquet, Text, Arvo, ORC, ...
\
**DataFrameWriter** cho phép bạn ghi DataFrame vào nguồn data dưới một định dạng cụ thể.
\
\
Cùng bắt đầu với một ví dụ, chúng ta sẽ đọc một file CSV lớn chứa dữ liệu từ San Franciso Fire Department calls. Bao gồm 28 cột và 4,380,660 records.
Dữ liệu bạn có thể tải [tại đây](https://github.com/databricks/LearningSparkV2/tree/master). Với một lượng dữ liệu lớn thì việc tự định nghĩa schema mang lại hiệu quả tốt hơn so với Spark tự xác định schema.
\
\
Cùng xem cách để làm ví dụ này:
```python
# In Python
from pyspark.sql import SparkSession
from pyspark.sql.types import *

# Định nghĩa schema theo cách lập trình
fire_schema = StructType([StructField('CallNumber', IntegerType(), True),
                StructField('UnitID', StringType(), True),
                StructField('IncidentNumber', IntegerType(), True),
                StructField('CallType', StringType(), True),
                StructField('CallDate', StringType(), True),
                StructField('WatchDate', StringType(), True),
                StructField('CallFinalDisposition', StringType(), True),
                StructField('AvailableDtTm', StringType(), True),
                StructField('Address', StringType(), True),
                StructField('City', StringType(), True),
                StructField('Zipcode', IntegerType(), True),
                StructField('Battalion', StringType(), True),
                StructField('StationArea', StringType(), True),
                StructField('Box', StringType(), True),
                StructField('OriginalPriority', StringType(), True),
                StructField('Priority', StringType(), True),
                StructField('FinalPriority', IntegerType(), True),
                StructField('ALSUnit', BooleanType(), True),
                StructField('CallTypeGroup', StringType(), True),
                StructField('NumAlarms', IntegerType(), True),
                StructField('UnitType', StringType(), True),
                StructField('UnitSequenceInCallDispatch', IntegerType(), True),
                StructField('FirePreventionDistrict', StringType(), True),
                StructField('SupervisorDistrict', StringType(), True),
                StructField('Neighborhood', StringType(), True),
                StructField('Location', StringType(), True),
                StructField('RowID', StringType(), True),
                StructField('Delay', FloatType(), True)])

# Khởi tạo Spark Session
spark = (SparkSession
         .builder
         .appName('Common_DataFrame_Operations')
         .getOrCreate())

# Sử dụng DataFrameReader để đọc CSV file.
sf_fire_file = "/databricks-datasets/learning-spark-v2/sf-fire/sf-fire-calls.csv"
fire_df = spark.read.csv(sf_fire_file, header=True, schema=fire_schema)
```
Câu lệnh spark.read.csv() đọc CSV file và trả về DataFrame với các hàng và tên cột được định nghĩa từ schema đã làm.
Bây giờ, chúng ta sẽ cùng ghi dữ liệu vào nguồn data với định dạng tùy bạn chọn với DataFrameWriter. Parquet là một định dạng kiểu columnar-format khá phổ biến, sử dụng linh hoạt để nén dữ liệu, schema sẽ được lưu như metadata trong file Parquet này, vì vậy khi sử dụng Spark sẽ không cần thủ công định nghĩa schema.
\
\
**Lưu DataFrame dưới dạng Parquet hoặc bảng SQL.**
```python
# In Python và cũng tương tự với Scala
parquetPath = ...
fire_df.write.format("parquet").save(parquetPath)
```
Hoặc bạn có thể lưu dưới dạng bảng, sẽ được đăng ký metadata với Hive metastore (Sẽ được tìm hiểu sâu hơn vào phần sau).
```python
# In Python
parquet_table = ... # Tên table
fire_df.write.format("parquet").saveAsTable(parquet_table)
```
### Transformations và Actions

##### 1. Truy vấn dữ liệu
Trong Spark, sử dụng select() để truy vấn, đồng thời có thể sử dụng filter() hoặc where() để thực hiện các điều kiện truy vấn.
Ví dụ:
```python
# In Python
few_fire_df = (fire_df
               .select("IncidentNumber", "AvaiableDtTm", "CallType")
               .where(col("CallType") != "Medical Incident"))
few_fire_df.show(5, truncate=False)

Output:
+--------------+----------------------+--------------+
|IncidentNumber|AvailableDtTm         |CallType      |
+--------------+----------------------+--------------+
|2003235       |01/11/2002 01:47:00 AM|Structure Fire|
|2003235       |01/11/2002 01:51:54 AM|Structure Fire|
|2003235       |01/11/2002 01:47:00 AM|Structure Fire|
|2003235       |01/11/2002 01:47:00 AM|Structure Fire|
|2003235       |01/11/2002 01:51:17 AM|Structure Fire|
+--------------+----------------------+--------------+
only showing top 5 rows
```
Một số lệnh khác như _isNotNull()_, _countDistinct()_, _distinct()_.
```python
# In Python, trả về số lượng các loại cuộc gọi (Call of types) khác nhau sử dụng countDistinct()

from pyspark.sql.functions import *
(fire_df
 .select("CallType")
 .where(col(CallType).isNotNull())
 .agg(countDistinct("CallType").alias("DistinctCallTypes"))
 .show())

Output:
+-----------------+
|DistinctCallTypes|
+-----------------+
|               32|
+-----------------+
```
Chúng ta có thể hiện các loại cuộc gọi khác nhau sử dụng câu lệnh sau:
```python
# In Python
(fire_df
 .select("CallType")
 .where(col("CallType").isNotNull())
 .distinct()
 .show(10, False))

Output: 32
+-----------------------------------+
|CallType                           |
+-----------------------------------+
|Elevator / Escalator Rescue        |
|Marine Fire                        |
|Aircraft Emergency                 |
|Confined Space / Structure Collapse|
|Administrative                     |
|Alarms                             |
|Odor (Strange / Unknown)           |
|Lightning Strike (Investigation)   |
|Citizen Assist / Service Call      |
|HazMat                             |
+-----------------------------------+
only showing top 10 rows
```
##### 2. Đổi tên, thêm và xóa cột
Để đổi tên cột, ta có thể sử dụng _withColumnRenamed()_.
```python
# In Python
new_fire_df = fire_df.withColumnRenamed("Delay", "ResponseDelayedInMins")
```
Trong nhiều trường hợp, dữ liệu raw và không thể sử dụng được khi phân tích như dữ liệu ngày tháng là String thay vì Timestamp. 
Vì vậy, chúng ta có thể thay đổi bằng cách thêm cột mới với dữ liệu mong muốn và xóa đi cột. Thật may vì trong Spark cũng hỗ trợ việc này với _withColumn()_ để có thể thêm cột, _drop()_ để xóa cột và _to_timestamp()_ hay _to_date()_ để chuyển từ kiểu dữ liệu string sang date hay timestamp như sau:
```python 
# In Python
fire_ts_df = (new_fire_df
              .withColumn("IncidentDate", to_timestamp(col("CallDate"), "MM/dd/yyyy"))
              .drop("CallDate")
              .withColumn("OnWatchDate"), to_timestamp(col("WatchDate"), "MM/dd/yyyy")
              .drop("WatchDate")
              .withColumn("AvailableDtTS"), to_timestamp(col("AvailableDtTm"), "MM/dd/yyyy hh:mm:ss a")
              .drop("AvailableDtTm"))
```
Spark cũng hỗ trợ nhiều phương thức xử lý dữ liệu từ _spark.sql.functions_ như _month()_, _year()_ và _day()_.

##### 3. Tổng hợp dữ liệu
Một số phương thức thực hiện tổng hợp dữ liệu như: _groupBy()_, _orderBy()_, _count()_.
\
\
Cùng thực hiện với một câu hỏi: Đâu là loại cuộc gọi cứu hóa nhiều nhất?
```python
# In Python
(fire_ts_df
 .select("CallType")
 .where(col("CallType").isNotNull())
 .groupBy("CallType")
 .count()
 .orderBy("count", ascending=False)
 .show(n=10, truncate=False))

Output:
+-------------------------------+-------+
|CallType                       |count  |
+-------------------------------+-------+
|Medical Incident               |2843475|
|Structure Fire                 |578998 |
|Alarms                         |483518 |
|Traffic Collision              |175507 |
|Citizen Assist / Service Call  |65360  |
|Other                          |56961  |
|Outside Fire                   |51603  |
|Vehicle Fire                   |20939  |
|Water Rescue                   |20037  |
|Gas Leak (Natural and LP Gases)|17284  |
+-------------------------------+-------+
```
Vậy câu trả lời là: **Medical Incident**.

##### 4. Một số thao tác với DataFrame khác
DataFrame API cũng cung cấp một số phương thức thống kê như: _min()_, _max()_, _sum()_ và _avg()_.
\
\
Một cách import Pythonic để không gây xung đột giữa các built-in Python function như sau:
```python
# In Python
import pyspark.sql.functions as F
(fire_ts_df
 .select(F.sum("NumAlarms"), F.avg("ResponseDelayedInMins"),
         F.min("ResponseDelayedInMins"), F.max("ResponseDelayedInMins"))
 .show())

Output:
+--------------+--------------------------+--------------------------+---------+
|sum(NumAlarms)|avg(ResponseDelayedInMins)|min(ResponseDelayedInMins)|max(...) |
+--------------+--------------------------+--------------------------+---------+
|       4403441|         3.902170335891614|               0.016666668|1879.6167|
+--------------+--------------------------+--------------------------+---------+
```
Các phương thức thống kê nâng cao thường gặp cho công việc khoa học dữ liệu như: stat(), describe(), correlation(),
covariance(), sampleBy(), approxQuantile(), frequentItems(), ... 

