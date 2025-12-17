---
layout: dataset
title: Contacts in a workplace
slug: contacts-in-a-workplace
date: '2016-06-23'
data_terms_html: 'The data are distributed to the public under a <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication license</a>. When this data is used in published research or for visualization purposes, please cite <a href="https://www.cambridge.org/core/journals/network-science/article/abs/data-on-facetoface-contacts-in-an-office-building-suggest-a-lowcost-vaccination-strategy-based-on-community-linkers/18AB49AB4F2AEA33CE7501F06ADBC8E8">M. Génois et al., Network Science 3, 326 (2015)</a>.'
files:
- label: Contact list, (tab-separated values) format, 153KB
  path: /assets/data/workplace_InVS_tij.dat.zip
- label: Department list, 0.8KB
  path: /assets/data/workplace_InVS_metadata.txt
---

This data set contains the temporal network of contacts between individuals measured in an office building in France, from June 24 to July 3, 2013. This network was described and analyzed in the publication <a href="https://www.cambridge.org/core/journals/network-science/article/abs/data-on-facetoface-contacts-in-an-office-building-suggest-a-lowcost-vaccination-strategy-based-on-community-linkers/18AB49AB4F2AEA33CE7501F06ADBC8E8">"Data on face-to-face contacts in an office building suggest a low-cost vaccination strategy based on community linkers"</a> by M. Génois et al., published in Network Science 3, 326 (2015).
The data set comprises two files. The first one contains a tab-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j”, where i and j are the anonymous IDs of the persons in contact, and the interval during which this contact was active is [ t – 20s, t ] (t is expressed in seconds since the time origin taken as 0:00 on June 24, 2013).
The second file contains a list of the form "i Di" where i is the anonymous ID of an individual and Di the name of his/her department in the workplace.
