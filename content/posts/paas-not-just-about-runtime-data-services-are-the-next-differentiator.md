---
title: PaaS not just about runtime, data services are the next differentiator
date: '2015-01-05T00:30:56.682Z'
categories: []
keywords: []
---

In general, Platform as a Service ([PaaS](http://en.wikipedia.org/wiki/Platform_as_a_service&t=YzdiYWU1Yjc0MTdkMzZiMzM3N2NjN2I0MTNmMDk0ZDhlYTBiNzk1YixZY0ltODJRaQ%3D%3D)) is developed by developers for developers. Of course [they’re going to love it](http://www.informationweek.com/cloud-computing/platform/vmwares-cloud-foundry-ranked-top-develop/232200211&t=ZTE3MjQyYzA0ODc4ZTQ2M2ExZjRmZGYwODJiNWJlN2M3OGY1ZWE1YyxZY0ltODJRaQ%3D%3D).

> It enables them to focus on the nuances of their applications — not on the day-to-day pointless activities that so often take their time away from solving real problems.

The non-developers point to the abstraction of underlining infrastructure and dynamic resource allocation as some of the core benefits of PaaS. In short, we often view PaaS as a runtime execution engine that trivialize the complex aspects of application development and deployment.

The problem with that kind of view however is that it focus primarily on the run-time aspects of the platform. This may be a result of some vendors treating data services as an external concern, strapped onto the platform as an add-on, almost as an afterthought. Heroku, for example, provides only Postgres as their one “native” data service, while OpenShift does slightly better, adds MySQL and a community supported edition of MongoDB.

Everyone would agree that add-ons play an important role in the extendibility of any PaaS solution. I would argue, however, that as the “open” and “polyglot” aspects of PaaS become the de facto standard, a more holistic view of the entire application platform, including a diverse selection of native data services is quickly becoming a major differentiator.

Today, for example, you would not choose PaaS without its support for most common development frameworks, or its ability to run unmodified in public cloud and in private data centers.

The very same way, you should not choose a PaaS solution without an integrated, native and diversified data service support. As many of you know, I work for VMware, which initiated open source PaaS solution called [Cloud Foundry](http://www.cloudfoundry.com/&t=MjlkMDUzMzM1OWI2NjBmMDY4NGRkYTU5ZjYxYTkzNjFiMjdlYzZmMSxZY0ltODJRaQ%3D%3D).

> Right now, Cloud Foundry delivers the richest selection of native data services on the market, including MySQL, PostgreSQL, MongoDB, RabitMQ and a couple different versions of Redis.

These services deliver predictable, low-latency connectivity to your data whether your application is deployed to the public instance of Cloud Foundry operated by VMware, AWS instance operated by one of our ecosystem partners like AppFog, or to a private instance running out of your own data center. Whichever Cloud Foundry instance your application targets, that data service provisioned by Cloud Foundry will behave exactly the same.

However, it would be naïve to expect all necessary data services to always be available natively. Just for these kinds of situations, Cloud Foundry provides an open source [Service Broker](https://github.com/cloudfoundry/vcap-services/tree/master/service_broker&t=ZWE1YWIwZjcxZjA5NTVkZjM3NmM1ZWRlMDE1M2M5NDcxZTM4Y2I1YixZY0ltODJRaQ%3D%3D) (yes, service extending a service), which delivers the very same provisioning characteristics to external or legacy services, which are currently not offered by Cloud Foundry. The best part is that these services can be managed through the [same API](http://apidocs.cloudfoundry.com/&t=MTgxMmQ3YzhhZTcyMjk1M2EwNjA2YzdmZTRkNzhlY2VkOGUwYjcxZCxZY0ltODJRaQ%3D%3D) and benefit from the very same native integration into your application.

> In short, if application mobility is important to you, please view data services as an intrinsic part of your PaaS strategy.

Add-ons are great and certainly appropriate in many cases; just make sure they don’t become your gateway drug locking your application to specific provider.