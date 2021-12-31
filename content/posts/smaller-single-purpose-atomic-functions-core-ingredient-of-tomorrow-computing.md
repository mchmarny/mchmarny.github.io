---
title: Smaller, single-purpose, atomic functions core ingredient of tomorrow’s computing
date: '2016-04-03T00:40:14.890Z'
categories: []
keywords: []
---

![](/images/0__9zzjADwBjmYqiTnp.png)

Last week I had a chance to attend the 3rd AWS re:invent conference in Vegas. I’m not a big fan of that city myself, but, as in previous years, re:invent has not disappointed.

Much coverage has been dedicated to the newly introduced services; I won’t bore you with that. Instead, I wanted to share with you a few higher-level thoughts I captured at the event.

> AWS Lambda and the fundamental shift away from monolithic apps to increasingly smaller and (more?) atomic services that it represents.

I fully expected the AWS Container as a Service announcement based on their partnership with Docker, the release of AWS Lambda has actually surprised me. At its most basic, it is a compute service, which simply executes code. Yes, nothing-new there. Lambda is also able to respond to event triggers, also nothing special there… Xively was able to do that in IoT context for years.

The part that sets Lambda apart is its ability to automatically manage compute resources; making this “simple function execution engine” into an independent components of powerful event processing pipeline with scale only limited by the amount of money you are willing to spend.

While we are on the subject of money, Lambda charge model is exactly what we came to expect from AWS: pay for what you use: $0.20 per million requests with the first million being free. At larger volumes its $0.0000002/request plus the compute time metered in increments of 100ms! That means that while many of us probably could build an event processing pipeline using some combination of Kafka, AKKA, Flume and Storm, instrumenting comparably elastic service capable to respond to the unpredictable usage patterns at Lambda price-point would actually be pretty hard.

Yes, Lambda itself is a proprietary service. While some will use that fact as a show-stopping argument, it is hard to deny that Lambda represents a fundamental shift in service delivery. It decomposes monolithic processes into their lowest programmable level: function.

> Lambda’s atomic function is a preview of next-generation Compute-as-a-Service offerings. It represents the core ingredient of tomorrow’s computing.