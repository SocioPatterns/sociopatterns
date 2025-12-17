---
layout: news_item
title: New firmware for contact detection
date: '2008-09-04 13:30:05'
slug: new-firmware-for-contact-detection
wp_permalink: /news/2008/09/new-firmware-for-contact-detection/
---

Detecting contacts between persons, in a reliable and accurate way, is a crucial requirement to achieve the scientific goals of SocioPatterns. In a variety of contexts, spatial proximity is a good proxy for social interaction. Spatial proximity of persons wearing an active RFID tag can be <em>inferred</em> by tracking the location of RFID tags, and by using the position information to decide whether two tags are nearby. Locating OpenBeacon tags in space, however, requires several receiving station and is subject to uncontrollable errors that limit both the spatial and temporal accuracy of contact detection. Because of this, we decided to move from contact <em>inference</em> to direct contact <em>detection</em>.

We rewrote the firmware of the OpenBeacon tags specifically targeting  contact detection. We are now able to detect contacts between persons with a very good spatial (~ 1 m) and temporal (~ 10 s) resolution. We achieve this by operating the RFID devices in a bi-directional fashion, over multiple radio channels. Tags no longer act as simple beacons, emitting signals for the receiving infrastructure. They exchange messages in a peer-to-peer fashion, to sense their neighborhood and assess contact with other tags. The contact events detected by the RFID network are then relayed to the monitoring infrastructure. On suitably tuning the system parameters, we can easily discriminate who is talking with whom, in a small crowded room, with just one receiving station.

As an example, the figure below displays the results of a simple table-top contact detection experiment.  We arranged 5 tags in different configurations, over three desks in a small room (5x3 m). Only one receiving station was used to collect the packets sent by the RFID tags. For each spatial arrangement of tags (described below each panel), the detected contact network is shown.

We are currently performing experiments with small groups of people (20-50) at the ISI Foundation and at the ENS in Lyon, to tune the system parameters and evaluate the performance of this new contact detection scheme. We will soon move to large-scale experiments.

We would like to point out that the open nature of the <a href="http://openbeacon.org">OpenBeacon project</a> was crucial in allowing us to reprogram the tags. We also acknowledge help from Milosch Meriac.

<figure class="sp-figure">
  <img
    src="/assets/img/beacon_configurations1.png"
    alt="contact patterns"
      loading="lazy"
    />
</figure>

