---
layout: dataset
title: Hypertext 2009 dynamic contact network
slug: hypertext-2009-dynamic-contact-network
date: '2011-10-28'
data_terms_html: 'The data are distributed to the public under a <a title="CC BY-NC-SA 3.0" href="http://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike</a> license. If you use these data for research or visualization purposes, please cite <a href="https://www.sciencedirect.com/science/article/abs/pii/S0022519310006284">L. Isella et al., "What’s in a crowd? Analysis of face-to-face behavioral networks", Journal of Theoretical Biology 271, 166 (2011).</a> Please also acknowledge the <strong>SocioPatterns </strong>collaboration and provide a link to <a href="https://www.sociopatterns.org">www.sociopatterns.org</a>.'
files:
- label: Contact list, TSV (tab-separated values) format, 70 KB
  path: /assets/data/ht2009_contact_list.dat.gz
- label: Contact intervals, JSON format, 53 KB
  path: /assets/data/ht2009_contact_intervals.json.gz
- label: Contact network 15 min. intervals, GEXF format, 160 KB
  path: /assets/data/ht2009_15min.gexf.gz
- label: Contact network 20 sec. intervals, GEXF format, 209 KB
  path: /assets/data/ht2009_20sec.gexf.gz
---

This dataset was collected during the <a href="http://www.ht2009.org" target="_blank">ACM Hypertext 2009</a> conference, where the SocioPatterns project deployed the <a href="/deployment/live-social-semantics/" target="_blank">Live Social Semantics</a> application. Conference attendees volunteered to wear radio badges that monitored their face-to-face proximity. The dataset published here represents the dynamical network of face-to-face proximity of ~110 conference attendees over about 2.5 days. <em>No personal data are released here, and no metadata collected by the Live Social Semantics application are exposed.</em> We provide two data files, described below.

<strong>Contact List.</strong> This is a tab-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form "<em>t i j</em>", where <em>i</em> and <em>j</em> are the anonymous IDs of the persons in contact, and <em></em>the interval during which this contact was active is [ <em>t </em>- 20s, <em>t </em>]. If multiple contacts are active in a given interval, you will see multiple lines starting with the same value of <em>t</em>. Time is measured in seconds since 8am on Jun 29th 2009 (UNIX ctime 1246255200).

<strong>Contact Intervals.</strong> This file is in JSON format and contains a dictionary. Each key is a person ID and the corresponding value is a dictionary of neighbors of that person in the contact network. This dictionary of neighbors has person IDs as keys and, for each key, the value gives the list of time intervals during which the corresponding contact was active. Time is measured as above.
