---
layout: dataset
title: Primary school temporal network data
slug: primary-school-temporal-network-data
date: '2015-09-30'
data_terms_html: 'The data are distributed to the public under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike license</a>. When this data is used in published research or for visualization purposes, please cite the following papers: <a href="https://link.springer.com/article/10.1186/s12879-014-0695-9">"Mitigation of infectious disease at school: targeted class closure vs school closure", BMC Infectious Diseases 14:695  (2014)</a>, <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0023176">"High-Resolution Measurements of Face-to-Face Contact Patterns in a Primary School", PLoS ONE 6(8), e23176 (2011)</a>. Please also acknowledge the <strong>SocioPatterns</strong> collaboration and provide a link to <a href="https://www.sociopatterns.org">www.sociopatterns.org</a>.</p>'
files:
- label: Dynamical contact list, tab separated, 476KB
  path: /assets/data/primaryschool.csv.gz
- label: Metadata (class and gender), tab separated, 4KB
  path: /assets/data/primaryschool_metadata.txt
---

This data set contains the temporal network of contacts between the children and teachers used in the study published in <a href="https://link.springer.com/article/10.1186/s12879-014-0695-9">V. Gemmetto et al., BMC Infectious Diseases 2014, 14:695</a>. The file contains a tab-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j Ci Cj”, where i and j are the anonymous IDs of the persons in contact, Ci and Cj are their classes, and the interval during which this contact was active is [ t - 20s, t ]. If multiple contacts are active in a given interval, you will see multiple lines starting with the same value of t. Time is measured in seconds.
