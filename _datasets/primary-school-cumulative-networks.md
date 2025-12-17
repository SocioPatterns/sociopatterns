---
layout: dataset
title: 'Primary school: cumulative networks'
slug: primary-school-cumulative-networks
date: '2011-08-27'
data_terms_html: 'The data are distributed to the public under a <a title="CC BY-NC-SA 3.0" href="http://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike</a> license. When these data are used
  in published research or for visualization purposes, please cite <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0023176">High-Resolution Measurements of Face-to-Face Contact Patterns in a Primary School</a>. Please also acknowledge the <strong>SocioPatterns</strong> collaboration and provide a link to <a href="https://www.sociopatterns.org">www.sociopatterns.org</a>.'
files:
- label: Cumulative network day 1, GEXF format, 44 KB
  path: /assets/data/sp_school_day1.gexf.gz
- label: Cumulative network day 2, GEXF format, 57 KB
  path: /assets/data/sp_school_day2.gexf.gz
- label: Metadata (Class and Gender), csv format, 2.5KB
  path: /assets/data/sp_primary_school_metadata.txt
---

<figure class="sp-figure-right">
  <img
    src="/assets/img/sp_primary_school_network_small.png"
    alt="Annotated cumulative network of first day."
  />
</figure>
This dataset is part of our study of contact networks in a primary school, as reported in the paper <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0023176">High-Resolution Measurements of Face-to-Face Contact Patterns in a Primary School</a>. The dataset comprises two weighted networks of  face-to-face proximity between students and teachers. For each day of the study, a daily contact network is provided: nodes are individuals and edges represent face-to-face interactions.  Nodes have two attributes: <em>classname</em> that indicates the school class and grade of the corresponding individual, and <em>gender</em>. Teachers are all assigned to the "Teachers" class. Edges between A and B have two weights associated with them: <em>duration</em>, which is the cumulative time spent by A and B in face-to-face proximity, over one day, measured in seconds (multiples of 20 seconds); and <em>count</em>, which is the number of times the A-B contact was established during the school day. The networks are provided as two <a href="https://gexf.net" target="_blank">GEXF</a> files, one per day of the study, which can be loaded directly into <a href="http://gephi.org/" target="_blank">Gephi</a>. These GEXF files contain the same data <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0023176#s5">provided in the supporting information</a> of the paper above.
