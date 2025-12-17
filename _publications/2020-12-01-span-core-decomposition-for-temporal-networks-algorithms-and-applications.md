---
title: 'Span-core Decomposition for Temporal Networks: Algorithms and Applications'
slug: span-core-decomposition-for-temporal-networks-algorithms-and-applications
date: '2020-12-01'
reference: ACM Transactions on Knowledge Discovery from Data 15(1), 2 (2020)
bibtex: |-
  @article{10.1145/3418226,
    author    = {Galimberti, Edoardo and Ciaperoni, Martino and Barrat, Alain
                 and Bonchi, Francesco and Cattuto, Ciro and Gullo, Francesco},
    title     = {Span-core Decomposition for Temporal Networks: Algorithms and Applications},
    journal   = {ACM Transactions on Knowledge Discovery from Data},
    volume    = {15},
    number    = {1},
    articleno = {2},
    numpages  = {44},
    year      = {2020},
    month     = {dec},
    publisher = {Association for Computing Machinery},
    address   = {New York, NY, USA},
    issn      = {1556-4681},
    doi       = {10.1145/3418226},
    url       = {https://doi.org/10.1145/3418226},
    keywords  = {Temporal networks, community search, core decomposition,
                 face-to-face interaction networks, maximal cores}
  }
pdf_url: ''
external_url: https://doi.org/10.1145/3418226
abstract: |-
  When analyzing temporal networks, a fundamental task is the identification of dense structures (i.e., groups of vertices that exhibit a large number of links), together with their temporal span (i.e., the period of time for which the high density holds). In this article, we tackle this task by introducing a notion of temporal core decomposition where each core is associated with two quantities, its coreness, which quantifies how densely it is connected, and its span, which is a temporal interval: we call such cores span-cores. For a temporal network defined on a discrete temporal domain T, the total number of time intervals included in T is quadratic in |T|, so that the total number of span-cores is potentially quadratic in |T| as well. Our first main contribution is an algorithm that, by exploiting containment properties among span-cores, computes all the span-cores efficiently. Then, we focus on the problem of finding only the maximal span-cores, i.e., span-cores that are not dominated by any other span-core by both their coreness property and their span. We devise a very efficient algorithm that exploits theoretical findings on the maximality condition to directly extract the maximal ones without computing all span-cores. Finally, as a third contribution, we introduce the problem of temporal community search, where a set of query vertices is given as input, and the goal is to find a set of densely-connected subgraphs containing the query vertices and covering the whole underlying temporal domain T. We derive a connection between this problem and the problem of finding (maximal) span-cores. Based on this connection, we show how temporal community search can be solved in polynomial-time via dynamic programming, and how the maximal span-cores can be profitably exploited to significantly speed-up the basic algorithm. We provide an extensive experimentation on several real-world temporal networks of widely different origins and characteristics. Our results confirm the efficiency and scalability of the proposed methods. Moreover, we showcase the practical relevance of our techniques in a number of applications on temporal networks, describing face-to-face contacts between individuals in schools. Our experiments highlight the relevance of the notion of (maximal) span-core in analyzing social dynamics, detecting/correcting anomalies in the data, and graph-embedding-based network classification.
authors: Edoardo Galimberti, Martino Ciaperoni, Alain Barrat, Francesco Bonchi, Ciro Cattuto, Francesco Gullo
pid: '1980'
layout: publication_item
---
