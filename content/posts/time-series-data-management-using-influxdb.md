---
title: Time series data management using InfluxDB
date: '2016-04-03T00:41:49.893Z'
categories: []
keywords: []
---

After a pretty positive experience with [influxdb](http://influxdb.com&t=MDNmNjA2NmIwNTkxYjUzNDg0YzY2NTUwNmJmMjAzNjkzOGY0ZjFjNCxjclJsVjdENA%3D%3D) I wanted to create a super simple telemetry producer (this one in Node.js) to spotlight a few types of time series data query supported in influxdb. (Source code available on [GitHub](https://github.com/mchmarny/timeseries-samples&t=Nzk1NjkzYWI3ZDU1OGUzYTg3YmY4MjBkMzE5ZDlmNjk2ODc2NmMzYixjclJsVjdENA%3D%3D))

![](/images/0__bqylsNDJDNtWuTyx.png)

To get live data for this demo, I created a simple script that generates metric data for CPU Utilization and Free Memory on your local machine at 1 sec resolution.

## Sample queries

Select of values based on arbitrary time window.

```sql
select sample\_value from cpu\_series where time > ‘2013–08–12 23:32:01.232’ and time < 2013–08–12 23:22:055.134
```

On the fly 90th percentile of value in 5 second intervals. No windowing or period tables required.

```sql
select percentile(sample\_value, 90) from mem\_series group by time(5s);
```

Standard deviation of value in 5 second intervals. Again, all ad-hoc, downsampling with no priori declarations.

```sql
select stddev(sample\_value) from cpu\_series group by time(1m);
```

## Why influxdb

Having done a few time series systems in Cassandra, HBase and yes, even Mongo, I was looking for something that would be already optimized for that specific data type. Furthermore, I wanted clean API as well as support for many of common telemetry aggregate functions:

```shell
count(), min(), max(), mean(), mode(), median(), distinct(), percentile(), histogram(), derivative(), sum(), stddev(), first(), last()
```

Additionally:

*   Open source (MIT), hosted on [GitHub](https://github.com/influxdb/influxdb/&t=MzIyMmRlZjc3NTk3ZTAwYjM2OTFhMGM2YzA1MTU1MzQ5OTMyNDg4ZCxjclJsVjdENA%3D%3D)
*   No external dependancies (nope, no zookeeper)
*   SQL-like query and built-in UI
*   On the fly, downsample aggregate (no need to define windows, just record it and query by ad-hoc period: e.g. 1s, 4s, 2m etc.)
*   Clustering support (there is currently a limit of 2M writes per second in 0.9 release, which suppose to be removed in 1.0)
*   Pure Golang since 0.9 (plus for me, may not be for others)