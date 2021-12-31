---
title: How to run containerized workloads in GCE VM
date: '2019-08-21T22:10:24.158Z'
categories: []
keywords: []
---

While the idea of a serverless platform and long running workloads does seem somewhat “unnatural” at first, smart people are already working on that (looking at you [@Knative](http://twitter.com/KnativeProject) community). In the meantime, a simple approach is sometimes all you may need.

![](/images/1__eJqGDbm4PmQSNL4yf67ewg.png)

In this post I will illustrating how to use Google Compute Engine (GCE) container execution option to run variable duration jobs. This approach supports custom VMs, GPU/TPU accelerators and VPC networks… so may be handy alternative to other compute options on GCP. I’ll also demo how to auto-terminate the created VM on container completion, so you won’t have to pay for idle VM time.

Finally, in this example I’ll parses small gzip file from Google Cloud Storage (GCS), but since this approach is not limited by client timeouts you can use it to do pretty much anything… transformations on bigger files, lightweight ETL, or media format encoding. You can even combine it with [GCP Task Queue](https://cloud.google.com/appengine/docs/standard/python/taskqueue/) for more complex pipelines.

## Pre-requirements

If you don’t have one already, create new GCP project and configuring [Google Cloud SDK](https://cloud.google.com/sdk/docs/).

## Setup

To start, clone this repo, and navigate into that directory:

```shell
git clone [https://github.com/mchmarny/long-running-job.git](https://github.com/mchmarny/long-running-job.git)  
cd long-running-job
```

Also, to streamline the subsequent commands, we are going to export a few variables:

```shell
export PROJECT=$(gcloud config get-value project)  
export APP\_NAME="my-long-job"  
export SA\_NAME="${APP\_NAME}@${PROJECT}.iam.gserviceaccount.com"
```

## Service Account

To execute this sample you will need a [GCP service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts). You can do that either in UI or using `**gcloud**` SDK.

```shell
gcloud iam service-accounts create **$APP\_NAME** \\  
  --display-name "Service Invoker Account for **${APP\_NAME}**"
```

We also will have to assign this account the necessary IAM roles:

```shell
gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/logging.logWriter**

gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/cloudtrace.agent**

gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/monitoring.metricWriter**

gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/storage.objectViewer**

gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/pubsub.editor**

gcloud projects add-iam-policy-binding $PROJECT \\  
  --member "serviceAccount:${SA\_NAME}" \\  
  --role **roles/compute.instanceAdmin**
```

Finally, to enable our demo to impersonate that account, we will need to provision a key for that account which will be saved in your home directory. **You should protect that key or just delete it after this demo.**

```shell
gcloud iam service-accounts keys create \\  
  --iam-account $SA\_NAME **"${HOME}/.${APP\_NAME}-sa.json"**
```

## Container Image

The unit of workload in this example is container image. To create an image from the source code in this demo, first vendor all the go dependancies:

```shell
go mod tidy  
go mod vendor
```

And then submit the image build request to Cloud Build:

```shell
gcloud builds submit --tag **"gcr.io/${PROJECT}/${APP\_NAME}:0.0.1"**
```

If successful, you should see a confirmation with the fully qualified URI to the created image.

## Deploy Container to VM

Now to start a new VM and configure it to run the above built image. This sample will use gzipped CSV file (100-Sales-Records.csv.gz) located in publicly available GCS bucket (long-running-job-src-files). If you want you can replace these with your own files.

```shell
gcloud compute instances create-with-container **$APP\_NAME** \\  
  --container-image=**"gcr.io/${PROJECT}/${APP\_NAME}:0.0.1"** \\  
  --machine-type=**n1-standard-1** \\  
  --zone=**us-central1-c** \\  
  --image-family=cos-stable \\  
  --image-project=cos-cloud \\  
  --maintenance-policy=MIGRATE \\  
  --scopes=cloud-platform \\  
  --container-privileged \\  
  --container-env=**"GOOGLE\_APPLICATION\_CREDENTIALS=/tmp/sa.pem,BUCKET=long-running-job-src-files,OBJECT=100-Sales-Records.csv.gz,TOPIC=${APP\_NAME}"** \\  
  --container-mount-host-path=**mount-path=/tmp,host-path=/tmp,mode=rw**
```

There is no way right now to upload files in the same command, so right after, you need copy the service account key created above to the new VM. The container is set to restart on failure so it will automatically use the key when it becomes available in the mounted volume attached to our VM.

```shell
gcloud compute scp **"${HOME}/.${APP\_NAME}-sa.json"** \\  
  **"${APP\_NAME}:/tmp/sa.pem"** --zone=**us-central1-c**
```

## Container Logs

Once the VM has started you can monitor the logs output from the container to [Stackdriver](https://cloud.google.com/stackdriver/). To do that we need to first capture the VM instance Id:

```shell
export VM\_INSTANCE\_ID=$(gcloud compute instances describe \\  
  **$APP\_NAME** --zone=**us-central1-c** --format="value(id)")
```

Once we have captured the VM instance ID we can now query the [Stackdriver](https://cloud.google.com/stackdriver/) for logs output by the container:

```shell
gcloud logging read "resource.type=gce\_instance AND \\  
  logName=projects/${PROJECT}/logs/cos\_containers AND \\  
  resource.labels.instance\_id=**${VM\_INSTANCE\_ID}** AND \\  
  **jsonPayload.message:\\"\[LRJ\]\\""** \\  
  --order="asc"
```

> Note, this command will print only the logs that are output by the user code in the container (the logger inside prefixes all log entries with “\[LRJ\]”). You can see the complete list of log entries by removing the_`_jsonPayload.message:"[LRJ]"_` filter.

After the container exists, the VM will automatically shutdown but the logs should still be still available in Stackdriver for forensic analyses.

## Conclusion

I hope you find this helpful addition to your GCP compute toolbox. You can find the source code along with scripts for easier execution at [https://github.com/mchmarny/long-running-job](https://github.com/mchmarny/long-running-job)