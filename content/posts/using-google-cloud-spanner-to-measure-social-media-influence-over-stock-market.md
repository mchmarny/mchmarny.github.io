---
title: Using Google Cloud Spanner to measure social media influence over stock market
date: '2017-05-16T15:51:12.061Z'
categories: []
keywords: []
---

I wanted to use the [now generally available Cloud Spanner](https://cloudplatform.googleblog.com/2017/05/Cloud-Spanner-is-now-production-ready-let-the-migrations-begin.html) database to write an app that would track stock prices and social media sentiment to identify potential correlation.

![](/images/1__xGWhGM____d__LluxeXMRBpmg.png)

To test even the validity of this approach I put together a Go app that subscribes to Twitter stream for all companies defined in the `Stocks` table and scores each event against the [Google NLP API](https://cloud.google.com/natural-language/) while comparing the user sentiment against the stock ask price against Yahoo API.

![](/images/1__KoAeJf5QAV__pC2i6Tn3kBA.png)

The app uses event author’s (tweet in case of Twitter) follower and post counts to define the weights of influence and “credits” them for positive influence when stock price moves up or negative stock when the stock moves down within an hour of their post.

Overall great experience, a couple of things I had to work around that may be helpful to others.

## DDL

Loading well-formed DDL into spanner instance through the [gcloud](https://cloud.google.com/sdk/downloads) CLI was little of a challenge. Looks like you have to send one continuous string for each DLL command. I wanted to maintain the DB schema in a human readable format and minimize the amount of “stitching” I would have to do to recreate the environment so I put together [this script](https://github.com/mchmarny/tsignal/blob/master/scripts/setup.sh). It parses through the DDL above and executes schema create scripts in the way that gcloud CLI likes.

![](/images/1__abph6Y2peKec5gn5tx6WyQ.png)

## Reports

Ideally my app would come with some UI but in the mean time I needed to run some queries to understand the different correlations. The [JDBC Drivers for Cloud Spanner](https://cloud.google.com/spanner/docs/partners/drivers) works great from Java but it took me a while to find a DB Explorer/Query type of tool that would be able to load the driver and connect using GCloud credential file.

![](/images/1__NGQheSx0VcZ8bLCs0Lc9fQ.png)

It didn’t take me too long to find [DBeaver](http://dbeaver.jkiss.org/). it loaded the 4.2 JDBC compatible version of Spanner driver and connect to my Spanner instance… including schema discovery!. Make sure you have the GOOGLE\_APPLICATION\_CREDENTIALS environment variable defined with path to your service account credential file.

![](/images/1__onXRSbsuS5ILkQy33IoYzg.png)

The app code along with the docker/GKE deployment scripts are available in [GitHub repo](https://github.com/mchmarny/tsignal).