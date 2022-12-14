---
title: 'Gradual skill sharing at community scale — Grant for the Web Grant Report
  #2'
author: Gunnar de Jong
description: Read about the progress we've made as part of the Grant for the Web cohort
  in this final report.
imageSrc: "/uploads/gradual-gftw-banner.webp"
datePublished: 2022-12-13T23:00:00Z

---
# Gradual skill sharing at community scale — Grant Report #2

## Project Update

Hello everyone!

It has been our aim to make it easy and fun for communities, companies and organizations to see what feels most alive and take action on shared interests. Our time as part of the Grant for the Web cohort has taught us many valuable lessons on how to achieve that goal as we empower members of the Web Monetization community with a safe and accessible space to learn with others as we grow into a healthy, social and connected ecosystem.

During the first months of the project, we’ve done [important work to equip the current GftW cohort with tooling for peer2peer skill sharing](https://community.interledger.org/phivk/gradual-skill-sharing-at-community-scale-grant-report-1-2417). We launched a dedicated skill sharing space where community members share their know-how and learning intentions, from which matches with other members emerged. Since launch, we have released several improvements to the tool, more on that later.

This year’s MozFest provided a first opportunity to [meet many members of the GftW community](https://community.interledger.org/gradual/enhancing-p2p-learning-with-p2p-payments-lf1) and we built on that momentum during the Community Call we hosted in March. These encounters have been vital in getting to know the learning needs of the Web Monetization community.

We have learned that the community’s strongest motivations to come together and exchange are based around:

* showcasing work and gaining new traction for your project


* incentivization to boost open, fair, and inclusive standards and innovation related to web monetization
* networking and or partnering with other cohort members

Our approach to learn from the behavior of members of this community has informed us about how to best serve the community and adjust our product design accordingly. We have been able to streamline user input by adding an important extension to the Gradual tooling in the form of a flexible database and authentication solution called Supabase.

Thanks to an extension and scope change to our project, we’ve also enabled Web Monetization on each of the designated skill sharing session pages on the [GftW community hub](http://gftw.gradu.al/). Furthermore, we built on what we learned about intrinsic motivations in the community and have invited facilitators of skill shares and community calls to add their payment pointer and monetize their work. We believe this will ultimately help the web monetization ecosystem to become more wide-spread and also help people outside the community to better understand the value of an inclusive and innovative design strategy.

## Progress on objectives

Central to our goals as part of the GftW cohort, was to provide the community with a space for skill sharing, help facilitate exchanges between members, learn about the needs that people have and develop new features based on this information.

Based on community input from community members, the Gradual tooling has been extended in several ways (see the Key Activities section for details):

* Streamlining of data input and storage, leveraging SupaBase
* Web Monetization of individual session pages
* UI Improvements to the way topics and skills are made visible
* Ability to easily embed video recordings via Google Drive

While writing our original proposal we decided to also include in our timeline two types of engagement metrics: Number of sessions & community members reached. These were mostly meant to give our team ambitious goals to aim for during the cohort.

**_Number of sessions_**: Our original milestone of achieving 12 sessions within the 6 months has changed to 6 sessions:

1. [Session on Decentralized learning at Mozfest](https://gftw.gradu.al/sessions/current/gradual-session-on-decentralized-learning-at-mozfest)
2. [Gftw - gradual community call](https://gftw.gradu.al/sessions/current/gradual-community-call)
3. [Lessons Learned from past and current gftw projects](https://gftw.gradu.al/sessions/current/lessons-learned-from-past-and-current-gftw-projects-test)
4. [Web Monetization earning with tutorials on gFam Learn](https://gftw.gradu.al/sessions/current/web-monetization-earning-with-tutorials-on-gfam-learn)
5. [Community Call around Digital Gardening](https://gftw.gradu.al/sessions/current/digital-gardening-with-tani-olhanoski-and-the-mysillio-team)
6. [Ways to web monetize your work: examples from the community](https://gftw.gradu.al/sessions/current/ways-to-web-monetize-your-work-examples-from-the-community)

And this does not even include some of the other community calls that have been hosted by and for the community - you can watch the recordings back on the dedicated session pages!

![](https://community.interledger.org/remoteimages/uploads/articles/m0p32t0h9e7pi1nd1f3d.png)

**_Number of community members reached_**: Our original milestone of at least half of current GftW cohort grantees having engaged with Gradual skill sharing app has changed to at least 17 members having engaged with it.

Though initially this seemed to us like a significant decrease in the quantity of engagement, we are very happy with the quality of the sessions that were hosted - in the calls we noticed true connections and it was great to see how many of you were keen on sharing your learnings and continuing momentum together! It was great when people told us that it wouldn’t have happened had the Gradual tooling not identified those similar interests.

However, it was still important to us to identify some of the circumstances that may have led to us needing to change the scope of our project. We came down to two important circumstantial reasons.

##### Different patterns of user behavior than expected based on previous experiments

Based on our previous use-cases and community skill sharing initiatives we set out with a set of expectations for specific types of engagement: regular calls with the community as a primary driver of interpersonal skill sharing offers and demands. Throughout the 6 months of the cohort we have seen a different type of commitment to either host or attend an informal “bottom-up” gathering despite the registered interest on the Gradual community page. This has meant that active ambassadorship throughout has not achieved the same results in the context of a remote community for a duration of 6 months as it had done within shorter, more event-based communities where regularly attending synchronous sessions has been more ingrained. This was significant for us to rethink our approach.

##### Technical needs and features turned out different than originally expected

First, our original intention was to tap into the technical infrastructure already in place for the community which meant making use of the community.interledger.org forum as primary mode for community member interaction. We quickly learned that there was no direct messaging feature available for us to reach out to members which has been a necessity for us to realize our third step of the Gradual (map, match, meet) formula. Eventually we focused on using the Interledger Slack - however this space also didn’t quite have the traction and engagement yet to continue on momentum for the community, despite the active ambassadorship on community channels and through DM’s sent.

Second, our intention to integrate Cinnamon as a platform for adding session recordings to Gradual’s session pages, shifted when we learned that the GftW team did not expect long term support of Cinnamon and the community relied on Google Drive for video hosting.

## Key activities

Besides hosting six workshops in the Web Monetization community and showcasing the community call recordings on the community hub, we have been working on the further development of the Gradual tooling, based on feedback from the community.

##### Streamlining of data input and storage

A major extension of the Gradual tooling we worked on, is the way user input is gathered and stored, thanks to the integration of the  flexible database solution Supabase. Previously, Gradual used Typeform for both gathering and storing user input data. While this has served us well so far, it was not flexible enough for our needs around providing more direct ways to add new input and visualize previously submitted data.

After researching alternative approaches, we’ve chosen to integrate [SupaBase](https://supabase.com/): an open source Firebase alternative offering Database and Authentication via easily configurable APIs in a way that neatly fits our lightweight [Jamstack](https://jamstack.org/) approach.

As we wrap up our project, we are proud to release an upgraded GftW community hub, featuring flexible data input that automatically offers existing topics to choose from and directly visualizes new input in the overviews on the main page!

As future work after this project, we will be releasing this new architecture to other Gradual instances and are looking forward to building on other Supabase features such as user authentication as well as extending the integration to also cover session content via a custom CMS.

![](https://community.interledger.org/remoteimages/uploads/articles/a42y66p2kniwbou4t0i7.png)

##### Web Monetization of individual session pages

One of the great things we've learned is that having your online content web monetized can act as a stimulus for sharing it with others in the community and beyond. Additionally, the ability to publish content in a web monetized space can also motivate people to produce new content in the first place.

By implementing the option of adding a custom payment pointer on individual Gradual Session pages, we are enabling content creators to share their skills (e.g. in the form of a video/call recording or written post) and attract micro payments from their audience. This means that any previous community calls on the community hub, can now have a custom payment pointer allocated. Since [asking you a month ago](https://community.interledger.org/gradual/web-monetization-on-gradual-3pno), many of you have since shared your payment pointers and are now receiving micro payments for previously held sessions!

Technically, adding payment pointer support has been relatively straightforward. We’ve added logic to our session pages that renders a web monetization meta tag depending on three possible scenarios:

1. A custom Payment Pointer is provided for the respective session page: render the web monetization meta tag with this custom payment pointer.
2. A default Payment Pointer is provided for the community instance: render the web monetization meta tag with this default payment pointer,
3. No Payment Pointer is provided: don’t render the web monetization meta tag.

Payment Pointers can be easily added to session pages via the Gradual CMS.

##### ![](https://community.interledger.org/remoteimages/uploads/articles/80mdbk0wl1gc6xsorhwl.png) UI Improvements

Since launch we've released several new features to the [GftW Gradual instance](https://gftw.gradu.al/), including:

* an improved list view of learning intentions, with search functionality and learners & sharers visualized
* a way to filter the graph view of learning intentions by amount of connections
* a more direct way to add a new skill or high-five an existing one

![](https://community.interledger.org/remoteimages/uploads/articles/r2gd3h1y0pgle1xmo340.png)

##### Ability to easily embed video recordings via Google Drive

While our original proposal was to build in support for the web-monetized [Cinnamon](https://cinnamon.video/) as a video hosting provider, we learned in our initial conversations with GftW staff that long term support would not be guaranteed and that Google Drive is used to store and share video recordings. We added support for video embeds from Google Drive to display session recordings on their respective session pages, along with the ability to easily add these videos via the Gradual CMS.

## Communications and marketing

As we said in our previous progress report, Our MozFest session [Enhancing p2p learning with p2p payments](https://community.webmonetization.org/gradual/enhancing-p2p-learning-with-p2p-payments-lf1) served as both an exchange of ideas around the social learning ideas we’ve been exploring with Gradual, as well as an introduction to the ideas and tools behind Web Monetization.

Our primary focus during this cohort was to keep communal activity internally between past and present GftW members. Nearing the end of our project we have also come to realize the value of more direct routes for communication between community members, which has informed our product roadmap. In fact, with the focus on a flexible database and authentication integration during the final months of the cohort we have taken an important first step towards making the process of getting people to come together much simpler and quicker.

As the [community hub](https://gftw.gradu.al/) is open to the public and session pages can now be web monetized we’d love to see this spread around in your own circles!

## What’s next?

We are currently preparing for our next phase in our partnership with Mozilla for next year’s MozFest - we’d love to see you there! We’ve now been involved in the past three editions and it has been incredible to see how our involvement has evolved over the years.

We would also love to see the [community hub](https://gftw.gradu.al/) continue to remain active within this community so new community calls and recorded skill shares can continue to be uploaded for your convenience.

## What community support would benefit your project?

Sharing a presentation on your project over a zoom call, your own pre-recorded video or even just on a google doc? Or if you are inspired by any of the 15+ sessions on the community hub and see something you’d like to share or learn yourself? The [community hub](https://gftw.gradu.al/) will remain open and you can continue to engage with it.

In the end, we believe we will continue to have a lot to learn from you!

Stay _curious_,

Philo and Gunnar