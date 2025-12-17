---
layout: dataset
title: Kenyan households contact network
slug: kenyan-households-contact-network
date: '2016-06-20'
data_terms_html: 'The data are distributed to the public under a <a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication license</a>. When this data is used in published research or for visualization purposes, please cite <a href="http://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-016-0084-2">Quantifying social contacts in a household setting of rural Kenya using wearable proximity sensors, EPJ Data Science 5(1), 1-21 (2016)</a>.'
files:
- label: Contact list, CSV (comma-separated values) format, 826KB
  path: /assets/data/scc2034_household_contact_dataset.zip
- label: Variables dictionary, TXT format, 1KB
  path: /assets/data/scc2034_variables_dictionary.txt
---

This dataset contains the full list of contacts measured between members of 5 households of rural Kenya between April 24  and May 12, 2012. Results from the analysis of this dataset have been published in <a href="http://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-016-0084-2" target="_blank">M. Kiti et al., EPJ Data Science 5(1), 1-21 (2016)</a>.

Each file in the downloadable package contains a comma-separated list representing each measured contact between any two household members (member 1 and member 2) over three days of experiment. The first file stores the contacts recorded between members of the same household, the second file stores the contacts between members of different households.
Each line has the form: "h1, m1, h2, m2, age1, age2, sex1, sex2, duration, day, hour", where:
<ul>
	<li>h1 is the household of member 1; h1=[L, F, E, B, H]</li>
	<li>m1 is the anonymous ID number of member 1;</li>
	<li>h2 is the household of member 2; h2=[L, F, E, B, H]</li>
	<li>m2 is the anonymous ID number of member 2;</li>
	<li>age1 is the age of member 1; age1 = [0, 1, 2, 3, 4]</li>
	<li>age2 is the age of member 2; age2 = [0, 1, 2, 3, 4]</li>
	<li>sex1 is the gender of member 1; sex1 = [F, M]</li>
	<li>sex2 is the gender of member 2; sex2 = [F, M]</li>
	<li>duration is the duration of the contact event in seconds;</li>
	<li>day is the day of experiment; day = [1, 2, 3]</li>
	<li>hour is the day time of the contact event; hour = [7 - 20]</li>
</ul>
A more detailed description of the variables is available in the variable dictionary file.
