---
title: My preso on Knative - Serverless on Your Own Terms at Cloud Conf 2019
date: '2019-03-29T02:42:02.505Z'
categories: []
keywords: []
---

![](/images/0__O8Yt__gd0EuJHpWXB.jpg)

That was a lot of fun. The conference has double its audience from last year, had a spectacular venue, and large selection of topics.

![](/images/1__iZuNv1AgYlcywzs6kOudfA.png)

I spoke in the #serverless track on using Knative as a means to serverless where you want it and on your own terms. Stressing the importance of portability and demonstrating the key features that the Kantive community has already delivered.

## Serving

[Knative Serving](https://github.com/knative/serving) provides higher level abstraction for Kubernetes and, by extension, the underlying infrastructure, so that the developers can focus on writing code.

![](/images/1__nqNMpWexualc22ONruhAZg.png)

It exposes easy to reason about object model and enables seamless autoscaling based on requests. It also integrates networking and service mesh automatically so devs can gradually rollout new revisions or label some services as internal only so that they can’t be access directly in a microservice based solution.

## Build

[Knative Build](https://github.com/knative/build) provides configurable and flexible approach to building source code into containers.

![](/images/1__tkWzPLKKWoalBC22yEKIgw.png)

It can leverage Dockerfiles or built templates in case of building directly from sources without the developers needing to worry about cross-compiling or even installing the build tools locally. And because the build happens on cluster, it support artifact caching for faster builds

## Eventing

Knative Universal provides a subscription, delivery, and management framework for events both on and off the cluster.

![](/images/1__lNcuNh4gCOKgbwH__VPEViw.png)

It allows developer to create a declarative binding between event producers and event consuming services. And, because it integrates with serving, it’s scalable from just a few events to live event streams. And it’s flexible, so you can build simple trigger to one service binding or custom event pipelines to connect with your existing systems.

## Serverless on your own terms

So, yes, there is Kubernetes, yes there are containers, and yes, there are even servers underneath it all… but you do you, developer. You write code and the Knative operators do their job well, you don’t have care about none of it… until you want to.

![](/images/1__fOISrYHY5lzYWflggE5biw.png)