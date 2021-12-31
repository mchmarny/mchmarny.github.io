---
title: How I learned Dapr building tweet sentiment processing pipeline
date: '2020-05-10T00:05:16.797Z'
categories: []
keywords: []
---

I recently joined the Office of CTO in Azure at Microsoft and wanted to ramp up on one of the open source projects the team has built there called Dapr. Dapr [describes itself](https://dapr.io/) as:

> A portable, event-driven runtime that makes it easy for developers to build resilient, microservice stateless and stateful applications that run on the cloud and edge and embraces the diversity of languages and developer frameworks.

I learn technology best by using it, so I decided to build a simple tweet sentiment processing pipeline and see how _easy_ and portable it _really_ is. The resulting project with source code, which you can run both locally and on Kubernetes, is available [here](https://github.com/mchmarny/dapr-pipeline).

![](/images/1__d5nC0J0S8bnWvnSUq2t__fA.png)

A few takeaways from my experience:

*   Dapr was easy to start with, thanks mainly to the very [thorough documentation](https://github.com/dapr/docs) and its dead simple CLI. The local development experience in Dapr also felt natural. I was able to use my existing skills and get something going within 10–15 minutes.
*   I did like that Dapr didn’t have any “invasive” libraries or required SDKs. There are client libraries in most languages, but its API is well structured and has feature parity in both HTTP and gRPC. I, actually, ended up writing my own HTTP client ([godapr](https://github.com/mchmarny/godapr)), just to get a better “feel” for the API.
*   The opt-in abstractions for state and pub/sub enable easy portability. I used Redis for both during local development and then swapped for Azure Storage Table and Azure Service Bus when deploying to Kubernetes without any code changes.
*   The growing list of [bindings](https://github.com/dapr/docs/tree/master/concepts/bindings#supported-bindings-and-specs) allow developers to quickly integrate backing services with minimal effort. Everything from generic ones like [Kafka](https://github.com/dapr/docs/blob/master/reference/specs/bindings/kafka.md) or [MQTT](https://github.com/dapr/docs/blob/master/reference/specs/bindings/mqtt.md) to Cloud-provider specific ones like [DynamoDB](https://github.com/dapr/docs/blob/master/reference/specs/bindings/dynamodb.md) or [S3](https://github.com/dapr/docs/blob/master/reference/specs/bindings/s3.md) for AWS, [Cloud Pub/Sub](https://github.com/dapr/docs/blob/master/reference/specs/bindings/gcppubsub.md) and [GCS](https://github.com/dapr/docs/blob/master/reference/specs/bindings/gcpbucket.md) for GCP, or [EventGrid](https://github.com/dapr/docs/blob/master/reference/specs/bindings/eventgrid.md) and [EventHubs](https://github.com/dapr/docs/blob/master/reference/specs/bindings/eventhubs.md) for Azure. Building these extensions is pretty easy too. I contributed the Twitter input binding, which went out in the recent Dapr v0.7 release.
*   When building apps based on multiple microservices like my pipeline, Dapr provides a consistent service discovery and invocation mechanism, whether locally or on Kubernetes.

Dapr seems to strike the right balance between helping developers with primitives, like persisting state or eventing though pub/sub, without being too overbearing.

![](/images/1__DfulAF3I2MdE0AYo__m04Xw.png)

I look forward to working on Dapr, contributing to the project, and yes, developing with on Dapr myself.