---
layout: dataset
title: Hospital ward dynamic contact network
slug: hospital-ward-dynamic-contact-network
date: '2013-09-14'
data_terms_html: 'The data are distributed to the public under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution-NonCommercial-ShareAlike license</a>. When these data are used in published research or for visualization purposes, please cite <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0073970">"Estimating
  Potential Infection Transmission Routes in Hospital Wards Using Wearable Proximity Sensors", PLoS ONE 8(9), e73970 (2013)</a>. Please also acknowledge the <strong>SocioPatterns</strong> collaboration and provide a link to <a href="https://www.sociopatterns.org/">www.sociopatterns.org</a>.'
files:
- label: Contact list, TSV (tab-separated values) format, 110KB
  path: /assets/data/hospital_lyon_contacts.dat.gz
---

This dataset contains the temporal network of contacts between patients, patients and health-care workers (HCWs) and among HCWs in a hospital ward in Lyon, France, from Monday, December 6, 2010 at 1:00 pm to Friday, December 10, 2010 at 2:00 pm. The study included 46 HCWs and 29 patients.

The file contains a tab-separated list representing the active contacts during 20-second intervals of the data collection. Each line has the form “t i j Si Sj“, where i and j are the anonymous IDs of the persons in contact, Si and Sj are their statuses (NUR=paramedical staff, i.e. nurses and nurses’ aides; PAT=Patient; MED=Medical doctor; ADM=administrative staff), and the interval during which this contact was active is [ t - 20s, t ]. If multiple contacts are active in a given interval, you will see multiple lines starting with the same value of t. Time is measured in seconds.
