---
title: Complexity can be learned but abstractions come at a long-term cost
date: '2021-03-30T19:35:48.769Z'
categories: []
keywords: []
---

All complexity needs to be abstracted, right? This reductionist statements misses nuance around the inherent cost/benefit tradeoffs, especially when you consider these over time.

![](images/1__KoAeJf5QAV__pC2i6Tn3kBA.png)

Don’t get me wrong, there often are good reasons for additional layers to make things simpler (grow adoption, lowering toil, removing friction, etc.). Still, these layers come at the long-term cost that’s often is not a part of the evaluation process.

Take for example the complexity around Kubernetes (it seems to be an [easy target](https://twitter.com/jbeda/status/993978918196531200) nowadays).

> While improving the user experience in specific use-case there, you are de-facto taking on the responsibility for maintenance of that abstraction over time.

Is that value (ease of use for your specific use-case) higher than that responsibility? If your use-case is more common, you may be thinking about open-sourcing that abstraction to offset that cost. Just ask those who created OSS projects before, that cost is usually multiple of that associated with managing your own “custom solution”.

> More importantly, perhaps, you have to ask yourself if that compounded cost is lower than the cognitive load required to learn how to use the current implementation.

Is that a one time cost that users, once learn, apply over time? Or is that just replacement of one thing the user has to learn with another? The Kubernetes landscape is full of carcasses of well-intended projects aiming to solve its complexity. Their relevance usually ends by either being outpaced by the community, or acquiring an even higher cognitive load.

Another cost which perhaps is not always consider when hiding complexity is the potential for decreased portability. This can be due to the fact that the resulting implementation, lacking broad adoption, is simply not available in the target platform. Or, the decreased portability may also be related to the implementation “leaking” into the user space, making that application now dependent on that abstraction.

Again, there are many examples where abstractions of complexity delivers a lot of value. Often that value is broadly recognized, and it becomes either upstreamed to address the root complexity (e.g. [kustomize](https://kustomize.io/) in [kubectl](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/)), or it becomes part fo the broader community cannon (e.g. [CNCF projects](https://www.cncf.io/projects/)) around the project.

The points I’m trying to make here is this:

*   Evaluate the broader and long-term cost/value trade-offs of abstracting complexity
*   Consider addressing that complexity at its root, rather than abstraction
*   And, most importantly, don’t underestimate users’ ability to learn!