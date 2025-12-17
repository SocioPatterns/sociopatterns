---
layout: dataset
title: SFHH conference data set
slug: sfhh-conference-data-set
date: '2018-12-03'
data_terms_html: 'The data are distributed to the public under a <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication license</a>. When this data is used in published research or for visualization purposes, please cite <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">M. Génois and Alain Barrat, EPJ Data Science 7, 11 (2018)</a>'
files:
- label: Contact list, (space-separated values) format, 224 KB
  path: /assets/data/SFHH_tij.dat.gz
---

This data set describes the face-to-face interactions of 405 participants to the 2009 SFHH conference in Nice, France (June 4-5, 2009). It was first described in the publications <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0011596">Dynamics of Person-to-Person Interactions from Distributed RFID Sensor Networks</a> and <a href="https://link.springer.com/article/10.1186/1741-7015-9-87">Simulation of an SEIR Infectious Disease Model on the Dynamic Contact Network of Conference Attendees</a>. It was released as supplementary data set of the publication <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">Can co-location be used as a proxy for face-to-face contacts?</a>

The data file is in the usual format representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j”, where i and j are the anonymous IDs of the persons in contact, and the interval during which this contact was active is [ t – 20s, t ] (t is expressed in seconds).
