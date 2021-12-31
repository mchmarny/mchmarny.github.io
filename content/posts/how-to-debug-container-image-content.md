---
title: How to debug container image content
date: '2019-08-27T22:20:44.576Z'
categories: []
keywords: []
---

When dealing with file permissions in a non-root image or building apps that include static content (like css or templates), I sometime get an error resulting from the final image content mismatch with my expectations.

Most of the time the errors are pretty obvious, simple fix and rebuild will do. Sometimes though, you want to take a look into the image and understand what the actual layout looks like in there.

> I’m sure there is a few valid ways of doing this, here are the simplest steps I found to be consistently reliable for me

Let's assume I build my app (myapp) locally using this command:

```shell
docker build -t myapp .
```

To start, I first need to save the image into an archive:

```shell
docker save -o myapp.tar myapp
```

Now I can list the archive layers by piping the image manifest to some pretty json tool like jQuery:

```shell
tar xf myapp.tar -O manifest.json | jq "."
```

![](/images/1__IKk1Jxj8kxkCVcvOoTHiKw.png)

To peek into a specific layer, I can output its content using one of the layer’s ID. (Unless you are doing something creative, the content of your app will be the last item in “Layers”):

tar xf myapp.tar -O 093015edb4b7f6f64a3bcb3a4646146d0476fe59b4f47924700b66b779cb7330/layer.tar | tar tv

![](/images/1__EHFf8MYNV7BnGFT7ShAmyQ.png)

> Don’t @ me for .DS\_Store files or file permissions in the above image ;)

Hope this helps.

PS. Massive thanks to [mattomata@](https://twitter.com/mattomata) for clarifying some of these things for me.