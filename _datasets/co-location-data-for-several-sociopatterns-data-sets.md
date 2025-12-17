---
layout: dataset
title: Co-location data for several SocioPatterns data sets
slug: co-location-data-for-several-sociopatterns-data-sets
date: '2018-12-04'
data_terms_html: 'The data are distributed to the public under a <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication license</a>. When these data are used in published research or for visualization purposes, please <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">M. Génois and A. Barrat, EPJ Data Science 7, 11 (2018)</a>.'
files:
- label: Co-location data, series of files in list format (space-separated values),
    60 MB
  path: /assets/data/colocation.tar.gz
- label: Metadata, series of files in list format, 4 KB
  path: /assests/data/colocation_metadata.tar
---

We are releasing complementary data with respect to the face-to-face contact data released previously. For a series of cases, we consider, as described in the publication <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">Can co-location be used as a proxy for face-to-face contacts?</a>, the information on which RFID readers received information from the RFID tags. Namely, we define two individuals to be in co-presence if the same exact set of readers have received signals from both individuals during a 20s time window.

We release here 6 co-presence data sets. The contexts in which these data were collected are: a workplace, with data collected in two different years (InVS13, InVS15), a hospital (LH10), a primary school (LyonSchool), a scientific conference (SFHH) and a high school (Thiers13). In each case, the data on face-to-face contacts during the same timeframe has already been released. In all cases except SFHH, metadata is also available concerning the department, class or status of each individual.

All the data are also in Supplementary Material of the publication <a href="https://link.springer.com/article/10.1140/epjds/s13688-018-0140-1">Can co-location be used as a proxy for face-to-face contacts?</a>.

<h4>File format</h4>
<ul>
<li><em>colocation.tar.gz</em> contains all six co-presence networks. Both contacts and co-presence data are formatted as <em>tij</em>, <em>i.e.</em> each line represents a contact occurring at a time <em>t</em> between two nodes <em>i</em> and <em>j</em>.</li>
<li><em>colocation_metadata.tar</em> contains the lists of nodes, with the first column being the node identifier and the second the group affiliation, when available.</li>
</ul>