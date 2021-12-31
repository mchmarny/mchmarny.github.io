---
title: Using Flick buttons with Cloud Run on GCP
date: '2019-06-03T12:41:23.730Z'
categories: []
keywords: []
---

A co-worker recently told me about [flic.io](https://flic.io/) buttons. These button caught my attention because they can include triggers for single, double, or hold click and can be easily wired up to all kinds of actions.

![](/images/0__WvQeJZhg4DXXDHKw.png)

I instantly thought of of a few really interesting applications. To start with though, I wanted to create a simple service that would allow me to push the custom data defined on each button over HTTP to Cloud PubSub. That in turn would then connect me to the many more actuation options through GCP APIs and services that connect to Cloud PugSub.

I went ahead and ordered [4-pack](https://flic.io/shop/flic-4pack) of Flic buttons and chose [Cloud Run](https://cloud.google.com/run/) to implement my `buttons` service. Here is a [short demo](https://github.com/mchmarny/buttons) on to:

*   Deploy Cloud Run service that will persist sent data to Cloud PubSub
*   and, how to configure Flic buttons to send data to Cloud Run service

[https://github.com/mchmarny/buttons](https://github.com/mchmarny/buttons)