---
title: Don't use yesterday's database to develop tomorrow's solutions
date: '2016-04-03T00:26:37.873Z'
categories: []
keywords: []
---

We are in a midst of drastic shift in application development landscape. Developers entering the market today use different tools and follow different patterns.

One of the core patterns of on-line application development today is cloud scale design. While traditionally architectures would rely on more powerful servers, today, that approach simply does not scale. We have reached that point where, in many cases, there are no powerful enough servers, or their cost would be prohibitive. Considering the unpredictable usage patterns today’s on-line applications also must be flexible to address demand spikes and assure efficient service during low utilization.

Increasingly, organizations are comfortable scaling their capability that way on the Web and App Server layers. However, as the number of application instances increases to accommodate the growing demand, many times their data layer is simply unable to keep up.

> The overall performance of any solution is only as good as its lowest common denominator. Increasingly, that lowest common denominator of today’s on-line applications is the database.

The time for one-size-fits-all database has expired. When faced with today’s performance requirements, we must consider the most appropriate data solutions for each specific use case. To assure the necessary scale out architecture, we must choose database that is actually optimized for the type of workload your application requires.

Now, some believe that these data characteristics are unique to the dotcom space. I would argue however that, right now, enterprise itself is in a midst of data renaissance. Due to the rapid proliferation of new data sources, enterprise applications require longer storage, faster delivery, and higher availability than ever before. The lines between public and enterprise application architectures are blurring.

Any organization developing applications today should have a well-thought through approach for managing data in three specific categories:

*   Big data sets of infrequently changing content persisted in many kinds of formats
*   Volatile data to support fast delivery in on-line transactional applications
*   Flexible data platform capable of adapting to ever-changing development requirements

So, the next time someone recommends that “uber” database that does everything, don’t buy it. There simply is no solution on the market today that addresses all of these needs well.