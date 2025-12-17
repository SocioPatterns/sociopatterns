---
layout: dataset
title: Contacts in a workplace, 2nd deployment
slug: test
date: '2018-12-03'
data_terms_html: 'The data are distributed to the public under a <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication license</a>. When this data is used in published research or for visualization purposes, please cite <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">M. Génois and Alain Barrat, EPJ Data Science 7, 11 (2018)</a>.'
files:
- label: Contact list, (space-separated values) format, 235kB
  path: /assets/data/workplace_InVS15_tij.dat.gz
- label: Department list, 2KB
  path: /assets/data/workplace_InVS15_metadata.txt
---

This data set contains the temporal network of contacts between individuals measured in an office building in France in 2015. This network was described and analyzed in the publication <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">Can co-location be used as a proxy for face-to-face contacts?</a>

The data set comprises two files. The first one contains a space-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j”, where i and j are the anonymous IDs of the persons in contact, and the interval during which this contact was active is [ t – 20s, t ] (t is expressed in seconds).
The second file contains a list of the form “i Di” where i is the anonymous ID of an individual and Di the name of his/her department in the workplace.
