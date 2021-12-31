---
title: Data Opportunities, 3 Areas to Focus Innovation
date: '2015-02-21T00:33:24.239Z'
categories: []
keywords: []
---

About a year and a half ago, I wrote about [Big Data Opportunities](/posts/3-killer-big-data-app-opportunities.md), focusing primarily on Leveraging Unused Data, Driving New Value From Summary Data and Harnessing Heterogeneous Data Sensors (more recently known as [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things)).

![](/images/0__FnPtGrT0LSmX6DBG.jpg)

Since that post, data space has exploded with numerous solutions addressing many of these areas. These solutions while mostly based on batch operations and limited to serial MapReduce jobs against frequently off-line, inadequately secured, Hadoop cluster, they do allow access to previously inaccessible data.

While attending recently Hadoop Summit I got a glimpse of the upcoming trends and I decided to outline three new areas of opportunities in data management space:

## Complex Event Processing During Ingestion

As we are often reminded, Hadoop, in its original architecture, was not built for low-latency access. Over the last year, a few point-solutions came to market to address this very issue, but now, with the introduction of [YARN](http://hortonworks.com/blog/category/apache-hadoop/yarn/&t=NTQwNDc2OTZlYmRhY2NmNDlkN2NlNzEzNjFiM2FiZDA2ZmE5YmFkZixsS3dhQXVaTA%3D%3D) as part of the upcoming [Hadoop 2.0](http://hadoop.apache.org/docs/current/&t=YTg2NzlhMjc2ZDI5NzcyYWFiMmVjOGViOTAxMjY2ZDhiNTRlMmNjYSxsS3dhQXVaTA%3D%3D) release, I think we finally have a platform to build an open support for processing ingestion listeners.

> I envision these implemented as a set of native Hadoop components capable of eventing on ingested data without impacting the throughout (inability to throttle the data) or the format in which the data is persisted in HDFS (proprietary formats).

So, why is all this dynamic capability important? Many companies already decided to use HDFS as a global data repository. But, the luck of low-latency access prevents any kind of dynamic analytic on that data. I suspect in the near future, projects like Tez and Spar, besides enabling real-time validation, Id generation and cleansing, will greatly expedite the time it takes to derive actionable insight from ingested data. Perhaps someone finally comes up with a solution for “continuous query” on top of HDFS (yes, little [GemFire](http://www.vmware.com/products/application-platform/vfabric-gemfire/overview.html&t=NTk5Y2Y2MjJkM2ViZTE1ZGY2YmEyOWIwYzA4ZDM3MDhjMGUwNzUyNSxsS3dhQXVaTA%3D%3D) nostalgia here from my [VMware days](http://blogs.vmware.com/vfabric/author/mark_chmarny&t=ODU5M2IwMDYxYmFmYjNjNTk1ZTcxYTU2ZmIxZDEzNzAxNjdiYmJjMCxsS3dhQXVaTA%3D%3D)).

On the other hand, if Hortonworks, as part of its Stinger initiative, does deliver on its challenge to make [Hive 100x faster](http://hortonworks.com/blog/100x-faster-hive/&t=MTNiZDhlZmRjZTRlY2UwZDVjNGM2ZjA1ODc2ODViNzc5ZTI0Y2ZhOSxsS3dhQXVaTA%3D%3D), low-latency access to newly ingested data in HDFS through SQL interface may be sufficient.

## Upgrade Compliance Approach

In many cases, the traditional compliance rules have not caught up with the new data management patterns of Hadoop. Most of the clusters I have ever seen not only don’t have comprehensive security layer, they even lack a good data access audit. Some initiatives like [Apache Accumulo](http://accumulo.apache.org/&t=ODIyOGQ2NGRjMTA1ODczMTY0NjczZWM2N2U1NTFiYjMwYmUxMGEwMSxsS3dhQXVaTA%3D%3D) are introducing cell-level access management extension on top of Hadoop, but as more and more data is loaded into HDFS, there is an increasing opportunity for [comprehensive monitoring solution](http://accumulo.apache.org/screenshots.html&t=ZWVhYThkYWVlMDA3M2FjMGQ2YmJkNDBlZmRlMzgxYmViYzlhZTdmYSxsS3dhQXVaTA%3D%3D), especially as it relates to large distributed enterprise data pipelines.

This is not only a technology problem.

> Many of the traditional data compliance approaches don’t fit well in the new data access paradigms._

Especially when you consider the the traditional regulations on data in rest and their implementation on distributed data grids with data partitioning and query sharing during access.

## Heterogeneous Data Management

Traditional Relational Database Management Systems (RDBMS) relied on the SQL interface to extend its functionality and manage it state (e.g. grant privileges on object to user;). However with the growing number of hybrid data systems there is now a need to read, write and update data in multiple systems. For example, document stored in [Cassandra](http://cassandra.apache.org/&t=NTQwMWNlZWJlMWE5NmM1MzEyNmQwOTU0ZGE5NzYzZTdiMTQ3ZTA1NCxsS3dhQXVaTA%3D%3D) are often indexed in [ElasticSearch](http://www.elasticsearch.org/&t=ZDE3OWRjMzRmNzM1Y2RkN2RiODU2MjY1Njc1NDBmYjEwZWNhOTg5MixsS3dhQXVaTA%3D%3D); data persisted in HDFS is cataloged in [HCatalog](http://incubator.apache.org/hcatalog/&t=Nzg0ZDJlYjA0OThjNjdkNDk5OGVkMDVmYzBmYjE2NTJlZjRlZTBhOCxsS3dhQXVaTA%3D%3D) and cached in [Memcached](http://memcached.org/&t=MGE3ZTIzZjA3ODFkNmRmZWIyMTEzYjQ2Nzg5NTg3NjY1Yzg1MGEwZixsS3dhQXVaTA%3D%3D).

> The goal here is to Instead of directly programming applications to these underlying technologies, there needs to be a more transparent and centralized “abstraction layer” that could simplify this effort for developers, and enable easier upgrade/replacement path for infrastructure architects (API).

There you have it, my three areas of opportunity for innovative data solutions. If last year taught me anything though, by the time I write next year’s version of this post, it will likely include technologies and challenges we have not even heard about today.