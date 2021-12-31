---
title: Data Scientists are developers; their tools just suck
date: '2016-01-27T03:05:18.456Z'
categories: []
keywords: []
---

Data science is not a new discipline. In some sense it even pre-dates application development. You wouldn’t know that by looking at the average enterprise nowadays.

The popular perception is that enterprises today struggle to deliver any tangible value from Big Data. But if you look closer at the time required to adopt essential technologies and extend it into a custom analytics solution, I’m frankly surprised we get any value from these processes.

## Friction

![Friction](/images/0__1CUcooBK5zHwLY93.png)

Take for example this flow. When the data scientist is presented with a problem, they must first extract a representative data set from a live system. This exposes the very first element of friction around access, data scale and the “art” of identifying the necessary subset of data.

When the data scientist gets the representative set, she or he can finally start building their model, but they must to do it off-line. The second element of friction is when they try to productize their model. In most cases, the data scientist doesn’t have access to the production systems, which means they need to throw their work over the wall to the ops team.

The systems, skills and processes on the other side of the wall are often very different and in many cases the data scientist’s work will be re-written before it can be implemented.

This is where we come across the third and final friction related to data science in today’s enterprise. When a model is finally applied, it often exposes issues related either to the vastly larger data set or issues related to the “productization phase” of this process. The resolution to these issues and subsequent tests can go for a while.

Imagine if application developers had to work within these kind of constraints. Wait, you don’t have to imagine, that was the case some 20–30 years ago. Before DevOps and Application Platforms. So why do we expect data scientists to still abide by these archaic rules.

## Solutions

These frictions can be greatly elevated when we consider data scientists as developers and provide them with a shared environment to collaborate.

Trusted Analytics Platform (TAP), being announced at this week’s Strata Conference, is an open source project that aims to accelerate the development of analytics applications over big data and solve these friction points.

![Solution](/images/0__tsdCrUY5JPBkEgGs.png)

It brings together many of the proven open-source projects used by data scientists and integrates them together into one, consolidated and fully managed platform. And, because TAP has also been optimized from ground up for performance and security, it can be used not only by data scientists during model development, but also a run time platform for Cloud-native applications where predictive models become full-fletched microservices. At last, application developers and data scientists in the enterprise will collaborate on one shared, flexible and secure platform.

For more information about TAP, the underlying code and documentation, see [trustedanalytics.org](https://download.intel.com/newsroom/kits/iot/pdfs/TAP_FactSheet.pdf).
