---
title: Vision of smarter thingz; project in adaptive metric flow modeling
date: '2016-04-03T00:43:24.538Z'
categories: []
keywords: []
---

Over the holidays, as many of us do, I embarked on a little extra-curriculum development effort I called [thingz.io](http://thingz.io). I was driven by the pattern I’d observed in Data Center (DC) monitoring products; although that pattern also exists in many of today’s Internet of Things (IoT) solutions.

I refer to this pattern as Forensic Understanding. In simplest terms it implies that in order to understand (derive any value) out of monitoring data we must first persist that data; load it into a priory-defined model, probably in some kind of database. This approach is often driven by the use of traditional BI tools to “understand” these metric in a context of an entire volume.

There are two fundamental weaknesses in this approach though:

1.  It requires design-time model definition (understanding of the questions one will be asking) and designing the underlining persistence to optimize for that usage model
2.  and, it often requires interactive analysis. As the number of “things” we monitor grows the volume of data that needs to be analyzed increases

![](/images/0__1nV8o5g5__Ofsz73h.png)

> Addressing these weaknesses requires a fundamental shift from reports and forensic queries to more adaptive models and dynamic rules.

As a result of the after-the-fact nature of this approach, the value of the analyzed data is often realized too late to make any significant impact.

## Thingz Understood

To experiment with an idea I created a couple of GitHub projects: [thingz-agent](https://github.com/mchmarny/thingz-agent) where thingz are measured and [thingz-server](https://github.com/mchmarny/thingz-server) where thingz are understood.

![](/images/0__zBA9IFF892B4yRi__.png)

### [thingz-agent](https://github.com/mchmarny/thingz-agent)

Generates streams of system metrics from variety of devices (cpu, memory, swap, load, processes, etc.) based on configurable strategies: report CPU every second but system load every 10 and so forth. To accommodate different deployment scales, thingz-agent also supports multiple publishers:

*   **kafka** — queues messages in Kafka
*   **influxdb** — publishes to REST or UDP endpoint
*   **stdout** — output to console

### [thingz-server](https://github.com/mchmarny/thingz-server)

Processes the inbound streams and builds dynamic models which identifies portent data (signal) and filter it from the noise. The thingz-server can actually close the loop and provide this guidance to the agents to pre-filter that data right at the edge.

Yes, the thingz-server also supports forensic queries. And, because it is generic in nature, it doesn’t require priory model definition which in turn enables data discovery with fair amount of analytical capabilities while supporting down-sampling to any arbitrary level (e.g. deviation, mean and percentile for all records from specific sources over last hour down-sampled to one minute).

## Actuation Guidance

To support schedulers and other type of actuators, the thingz-server also exposes a flexible REST API designed to identify availability across all monitored resources. Here is an example of a query for least utilized resources based on standard deviation in memory over last 10 min.

```shell
[GET] — /api/v1.0/util/mem/used/10
```

All in all this was an interesting exercise in understanding the challenges related to dynamic models… even if it got me the occasional look from my wife for “working” over holidays;)