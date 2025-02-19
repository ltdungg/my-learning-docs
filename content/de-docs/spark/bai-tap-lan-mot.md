---
title: "7. Bài tập DataFrame lần 1"
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

### Đề bài
Hãy sử dụng data set San Francisco Fire Department và sử dụng Spark để thực hiện các yêu cầu sau:
1. What were all the different types of fire call in 2018?
2. What months within the year 2018 saw the highest number of fire calls?
3. Which neighborhoods had the worst response times to ffire calls in 2018?
4. Which week in the year in 2018 had the most fire calls?
5. Is there a correlation between neighborhood, zip code, and number of fire calls?
6. How can we use Parquet file or SQL tables to store this data and read it back?

### Lời giải
Khuyến khích thực hiện những bài tập trên trước khi đọc lời giải, hãy chỉ lấy lời giải làm  tham khảo, nếu chỉ đọc lời giải mà không thực hành sẽ không thể nhớ lâu được.
\
\
Lời giải của sẽ được làm trên ngôn ngữ Python thông qua thư viện PySpark.
