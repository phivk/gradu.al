---
title: 'Gradual skill sharing at community scale — Grant for the Web Progress Report
  #1 '
author: Philo van Kemenade
description: Read about the progress we've made so far as part of the Grant for the
  Web cohort in this mid way report.
imageSrc: "/uploads/gradual-gftw-banner.webp"
datePublished: 2022-05-17T22:00:00Z

---
This post was originally published on the [GftW Community Forum](https://community.webmonetization.org/phivk/gradual-skill-sharing-at-community-scale-grant-report-1-2417).

## Project Update

Our project's goal is to empower members of the Web Monetization community with a safe and accessible space to learn with others as we grow into a healthy, social and connected ecosystem.

During the first months of the project, we've done important  work to equip the current GftW cohort with tooling for peer2peer skill sharing. We've launched [a dedicated GftW skill sharing space](https://gftw.gradu.al/) where members can share their learning intentions. Since launch we have released several improvements to the tool.

We've had the pleasure to engage with many community members, both at MozFest and at the GftW Community call we hosted in March. These encounters have been vital in getting to know the learning needs of the Web Monetization community, as well as in finding connections between members around their shared interests. This input has informed the direction of our next developments.

## Progress on objectives

We've hosted two workshops around peer2peer learning in the Web Monetization community. The first was a session at Mozilla Festival early March and was titled [Enhancing p2p learning with p2p payments](https://community.webmonetization.org/gradual/enhancing-p2p-learning-with-p2p-payments-lf1). The second was [the March GftW Community Call](https://www.eventbrite.com/e/grant-for-the-web-community-call-tickets-298309781587), where we gathered lots of input from community members and made meaningful connections based on shared interests ([see the recording here](https://drive.google.com/file/d/1abAMXZGKGeh8tDxJKBcEiuPK84OqTTfX/view)).

These meetings with members of the Web Monetization community, are helping us to inform our product development going forward in several ways. Some insights helped us realize we've had to adjust the objectives as we framed them at the time of writing our proposal.:

* We are no longer aiming to integrate [Cinnamon](https://cinnamon.video/) as a way to host GftW session recordings, since we learned from conversation with the GftW community managers that this platform is not actively used by the community and isn't likely to be in the future.
* While we were originally thinking of using the community forum for communication with learners and sharers, we learned that Forem doesn't support direct messaging. While we saw this as a slight setback initially, on second thought it has provided us with an interesting use case for adding additional features. This has informed our decision to start working on a database and authentication layer which will enable us to better serve the needs of the GftW community as well as others who don’t rely on direct messaging communication. More on this in the next section.

We are very happy with the skill sharing input we’ve gathered from community members so far. In total, 16 members have added 39 skills!

![Network of GftW community skills](https://community.webmonetization.org/remoteimages/uploads/articles/o5eo5j41xmeoryz8p6no.png)

We originally aimed for the first few skill sharing sessions to have taken place by now. The lack of direct communication with community members has meant a bit of a delay and might mean we have to be more conservative with the final number of sessions we are aiming for. The good news is that as a community, we have identified a rich and promising set of shared interests and, with the help of the GftW team, we have started taking steps to get the first three sessions off the ground!

## Key activities

Besides **hosting two workshops in the Web Monetization community**, we have been working on the **further development of the Gradual tooling**, based on what we’ve heard back from the community so far.

Since launch we've released several new features to the [GftW Gradual instance](https://gftw.gradu.al/), including:

* an improved **list view** of learning intentions, with search functionality and learners & sharers visualized
* a way to filter the **graph view** of learning intentions by amount of connections
* a more direct way to **add a new skill** or **high-five an existing one**

![Searchable list of GftW community skills](https://community.webmonetization.org/remoteimages/uploads/articles/87oaminbucdgmo11rs7y.png)

Besides these improvements to the interface components, the use case of the GftW community mostly using the community forum for communication has made us feel the need to add a way to communicate more directly with users. To this end, we have started dedicating development time to a larger project with the goal to add a database and authentication solution to our technical infrastructure. We’ve chosen to integrate [SupaBase](https://supabase.com/): an open source Firebase alternative offering Database and Authentication via easily configurable APIs in a way that neatly fits our lightweight [Jamstack](https://jamstack.org/) approach.

In this new architecture, we are replacing our dependency on [Typeform](https://www.typeform.com/) (which has served us very well so far) with our own custom forms and database for handling learn & share data more flexibly. In the scope of this grant project we aim to release a first version and at a later stage will be adding improvements as well as extending the integration to also cover session content via a custom CMS.

![Next version of the Gradual information architecture](https://community.webmonetization.org/remoteimages/uploads/articles/y8bkl72apf8e0hif2kq2.png)

## Communications

Our MozFest session [Enhancing p2p learning with p2p payments](https://community.webmonetization.org/gradual/enhancing-p2p-learning-with-p2p-payments-lf1) served as both an exchange of ideas around the social learning ideas we’ve been exploring with Gradual, as well as an introduction to the ideas and tools behind Web Monetization.

## What’s next?

We are keen to put the learn & share data we have gathered so far into action in the form of community skills sharing sessions. We have identified the three most promising topics, and will be reaching out to potential facilitators soon. Watch this space!

Meanwhile we are continuing our work on integrating the SupaBase database functionality  and aim to have a first version released by the time we write our final report.