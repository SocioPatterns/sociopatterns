---
layout: dataset
title: High school dynamic contact networks
slug: high-school-dynamic-contact-networks
date: '2014-08-24'
data_terms_html: 'The data are distributed to the public under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike license</a>. When these data are used in published research or for visualization purposes, please cite <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0107878">J. Fournet and A. Barrat, PLoS ONE 9(9), e107878 (2014)</a>. Please also acknowledge the <strong>SocioPatterns</strong>
  collaboration and provide a link to <a href="https://www.sociopatterns.org/">www.sociopatterns.org</a>.'
files:
- label: Contact list (year 2011), tab separated, 90KB
  path: /assets/data/highschool_2011.csv.gz
- label: Metadata (year 2011), tab separated, 1KB
  path: /assets/data/highschool_2011_metadata.txt
- label: Contact list (year 2012), tab separated, 150KB
  path: /assets/data/highschool_2012.csv.gz
- label: Metadata (year 2012), tab separated, 2KB
  path: /assets/data/highschool_2012_metadata.txt
---

These datasets contain the temporal network of contacts between students in a high school in Marseilles, France. The first dataset gives the contacts of the students of three classes during 4 days in Dec. 2011, and the second corresponds to the contacts of the students of 5 classes during 7 days (from a Monday to the Tuesday of the following week) in Nov. 2012.

Each Contact list file contains a tab-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j Ci Cj“, where i and j are the anonymous IDs of the persons in contact, Ci and Cj are their classes, and the interval during which this contact was active is [ t - 20s, t ]. If multiple contacts are active in a given interval, you will see multiple lines starting with the same value of t. Time is measured in seconds (for the 2012 data, it is expressed in UNIX ctime).

Each metadata file contains a tab-separated list in which each line of the form "i Ci Gi" gives class Ci and gender Gi of the person having ID i.
