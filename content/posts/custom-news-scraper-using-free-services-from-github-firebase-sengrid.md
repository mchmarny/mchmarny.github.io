---
title: Custom news scraper using free services from GitHub, Firebase, and Sengrid
date: '2021-04-05T01:09:03.159Z'
categories: []
keywords: []
---

Increasing large amount of technical news I read come from the posts shared on Hacker News or on Twitter. While both of these services have [search options](https://help.twitter.com/en/using-twitter/twitter-advanced-search), neither of these seem to be advanced enough to narrow my searches at the desired level or to setup automatic delivery.

I decided to write my own using a few of the on-line services that come with generous free-tier option:

* First, **the runtime**. I’ve been impressed with the flexibility of [GitHub Actions](https://github.com/features/actions). While actions are normally written in JavaScript, with its support for pre-built Docker images, I decided to write my service in Go.
* To **persist the state** between each execution (GitHub Actions are ephemeral by nature) I’ve used [Firestore](https://firebase.google.com/docs/firestore/) (part of Firebase service), which has been my goto serverless “database” for a while now due to its easy API, schema-less design, and generous [free plan](https://firebase.google.com/pricing/) (1GB, 50K reads and 20K writes per day).
* Finally, to deliver the matching results, I’ve chosen the **e-mail sending service** offered by [SendGrid](https://sendgrid.com). Again, simple API and super easy configuration with up to [100 free emails](https://sendgrid.com/pricing/) per day.

With the services selected, I wrote a [simple application](https://github.com/mchmarny/gaw) that builds the desired queries against the Hacker News and Twitter API, filters out results based on provided criteria, and captures the final state of each query for subsequent queries. The application builds into a Docker image using, you guest it, GitHub Actions. The entire source code and the automation around the project are located [here](https://github.com/mchmarny/gaw).

## Delivery schedule

You can setup your searches in a private repository, this keeps the topics to which you subscribe and your email address hidden. Start by [creating an action](https://docs.github.com/en/actions/quickstart) with `on` schedule matching your desired delivery times. For example (15 min after noon, 5 and 11PM GMT):

```yaml
on:  
  schedule:  
  - cron: "15 12,17,23 \* \* \*"
```

Next, define any number of steps in your `job`, each with the source type parameter and the query which you want to schedule. For example, to search for most recent not retweets in English on Kubernetes, DevOps, or CI/CD that have links, were shared by people who themselves posted more than 200 tweets, have at least 500 followers, and have a low following (friend) to follower ratio the schedule would look something like this:

```yaml
- name: Twitter Search  
  uses: docker://ghcr.io/mchmarny/gaw:v0.2.9  
  with:  
    source: twitter  
    query: kubernetes OR devops OR ci/cd  
    to: you@your-domain.com  
    subject: Tweets about k8s, devops, or ci/cd  
    email-config: ${{ secrets.EMAIL\_CONFIG }}  
    state-config: ${{ secrets.FIRESTORE\_CONFIG }}  
    twitter-config: ${{ secrets.TWITTER\_CONFIG }}  
    lang: en # language (en == English)  
    latest: true # most recent popular  
    links: true # must have links  
    followers: 500 # min number of followers  
    retweets: false # Include retweets  
    posts: 200 # min number of posts  
    ratio: 0.1 # number of friends/number of followers
```

Notice that the API tokens and other secrets are using encrypted environment variables provided by [GitHub secrets](https://docs.github.com/en/actions/reference/encrypted-secrets). The instructions on how to configure these are located [here](https://github.com/mchmarny/gaw#setup).

The full examples of schedules are available in the repo:

*   [Hacker News search example](https://github.com/mchmarny/gaw/blob/main/.github/workflows/schedule-hn.yaml)
*   [Twitter search example](https://github.com/mchmarny/gaw/blob/main/.github/workflows/schedule-tw.yaml)

#### Delivery dispatch

In addition to scheduled queries, you can also set up on-demand searches for specific topic. In this case we combine the Twitter and Hacker News sources into a single workflow with an `on` action set to repo dispatch:

```yaml
on:  
  repository_dispatch:  
    types: [search]
```

The full example of this workflow is available [here](https://github.com/mchmarny/gaw/blob/main/.github/workflows/dispatch-on-topic.yaml). When configured, the specific topic (e.g. golang) for which you want to search can be defined in a command line:

```shell
curl -H "Accept: application/vnd.github.v3+json" \\  
     -H "Authorization: token ${GITHUB\_TOKEN}" \\  
     https://api.github.com/repos/<username>/<repo>/dispatches \\  
     -d '{ "event\_type": "search", "client\_payload": { "topic":"golang" }}'
```

To execute the dispatches using HTTP API you will need GitHub personal access token. The instructions how to create one are located [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

## Email Notifications

Whether you executed the workflow on schedule or using the HTTP dispatch, the delivered email looks something like this:

![Workflow Notification](/images/1__hXVNbQCMeQ__u1Ue3zueplA.png)

Hope you found this helpful,