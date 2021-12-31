---
title: Twitter Sentiment Analysis in Go using Google NLP API
date: '2017-05-12T17:26:11.183Z'
categories: []
keywords: []
---

As part of my ramp up on Google APIs I wanted to create a [project](https://github.com/mchmarny/tfeel) that would allow me some practical exercise in a context of a real application.

![](/images/1__MV8vPEMdz5obDiBmZDECIg.png)

TFeel (short for Twitter Feeling) is a simple sentiment analyses over tweeter data for specific Twitter search terms using Google Cloud services:

*   [Google Container Engine](https://cloud.google.com/container-engine/)
*   [Google NLP API](https://cloud.google.com/natural-language/)
*   [Google Dataflow](https://cloud.google.com/dataflow/)
*   [Google Pub/Sub](https://cloud.google.com/pubsub/)

All GCP services used in this example can be run under the GCP Free Tier plan. More more information see [https://cloud.google.com/free/](https://cloud.google.com/free/)

The Go code, docs, and setup scripts are located in [my GitHub repo](https://github.com/mchmarny/tfeel).