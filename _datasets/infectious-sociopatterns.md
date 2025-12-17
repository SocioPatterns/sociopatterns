---
layout: dataset
title: '"Infectious" exhibition'
slug: infectious-sociopatterns
date: '2011-03-31'
data_terms_html: 'The data are distributed to the public under a <a title="CC BY-NC-SA 3.0" href="http://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike</a> license. When these data are used in published research or for visualization purposes, please cite <a href="https://www.sciencedirect.com/science/article/abs/pii/S0022519310006284">What’s in a crowd? Analysis of face-to-face behavioral networks</a>. Please also acknowledge the <strong>SocioPatterns</strong> collaboration and provide a link to <a href="https://www.sociopatterns.org">www.sociopatterns.org</a>.'
files:
- label: Cumulative daily networks, GML format, 258 KB
  path: /assets/data/INFECTIOUS_cumulative_daily_networks.tar.gz
---

<figure class="sp-figure-right">
  <img
    src="/assets/img/sp_infectious_twodays.png"
    alt="Graph visualization of two daily cumulative networks."
  />
</figure>
This first dataset contains the daily cumulated networks represented in the <a href="/gallery/infectious-sociopatterns-poster/">Infectious SocioPatterns visualization</a>. The downloadable package contains one gml (<a href="http://en.wikipedia.org/wiki/Graph_Modelling_Language">Graph Modelling Language</a>) file for each of the sixty-nine covered days. The nodes represent visitors of the Science Gallery while the edges represent close-range face-to-face proximity between the concerned persons. The weights associated with the edges are the number of 20 seconds intervals during which close-range face-to-face proximity has been detected. Note that the same node ids are used in successive days for simplicity, but they naturally correspond to different visitors as each visitor was present only on one day.

For more details on the data collection and processing please see our paper <a href="/publications/whats-in-a-crowd-analysis-of-face-to-face-behavioral-networks/">What’s in a crowd? Analysis of face-to-face behavioral networks</a>.
