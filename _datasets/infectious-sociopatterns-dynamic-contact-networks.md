---
layout: dataset
title: '"Infectious" exhibition dynamic contact networks'
slug: infectious-exhibition-dynamic-contact-networks
date: '2011-11-28'
data_terms_html: 'The data are distributed to the public under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike license</a>. When these data are used in published research or for visualization purposes, please cite <a title="What’s in a crowd?" href="https://www.sciencedirect.com/science/article/abs/pii/S0022519310006284">L. Isella et al., "What’s in a crowd? Analysis of face-to-face behavioral networks", Journal of Theoretical Biology 271, 166 (2011)</a>. Please also acknowledge the <strong>SocioPatterns</strong> collaboration and provide a link to <a href="https://www.sociopatterns.org/">www.sociopatterns.org</a>.'
files:
- label: Contact list, TSV (tab-separated values) format, 1.4 MB
  path: /assets/data/sciencegallery_infectious_contacts.tgz
---

This dataset contains the daily dynamic contact networks collected during the <a href="/deployments/infectious-sociopatterns/">Infectious SocioPatterns</a> event that took place at the <a href="http://www.sciencegallery.com/">Science Gallery</a> in Dublin, Ireland, during the art-science exhibition <a href="https://web.archive.org/web/20090417152242/http://www.sciencegallery.com/infectious/">INFECTIOUS: STAY AWAY</a>. Each file in the downloadable package contains a tab-separated list representing the active contacts during 20-second intervals of one day of data collection.  Each line has the form “t i j“, where i and j are the anonymous IDs of the persons in contact, and the interval during which this contact was active is [ t - 20s, t ]. If multiple contacts are active in a given interval, you will see multiple lines starting with the same value of t. Time is measured in seconds and expressed in UNIX ctime.
