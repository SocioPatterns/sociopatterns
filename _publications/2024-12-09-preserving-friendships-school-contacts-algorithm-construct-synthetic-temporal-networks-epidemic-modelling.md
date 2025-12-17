---
title: 'Preserving friendships in school contacts: An algorithm to construct synthetic temporal networks for epidemic modelling'
slug: preserving-friendships-school-contacts-algorithm-construct-synthetic-temporal-networks-epidemic-modelling
date: '2024-12-09'
reference: PLoS Computational Biology 20(12), e1012661 (2024)
bibtex: |-
  @article{Calmon2024PLOSCompBiol,
    author = {Calmon, Lucille and Colosi, Elisabetta and Bassignana, Giulia and Barrat, Alain and Colizza, Vittoria},
    title = {Preserving friendships in school contacts: An algorithm to construct synthetic temporal networks for epidemic modelling},
    journal = {PLoS Computational Biology},
    year = {2024},
    volume = {20},
    number = {12},
    pages = {e1012661},
    doi = {10.1371/journal.pcbi.1012661},
    url = {https://doi.org/10.1371/journal.pcbi.1012661},
    keywords = {SocioPatterns}
  }
pdf_url: /assets/papers/journal.pcbi.1012661.pdf
external_url: https://doi.org/10.1371/journal.pcbi.1012661
abstract: |-
  High-resolution temporal data on contacts between hosts provide crucial information on the mixing patterns underlying infectious disease transmission. Publicly available data sets of contact data are however typically recorded over short time windows with respect to the duration of an epidemic. To inform models of disease transmission, data are thus often repeated several times, yielding synthetic data covering long enough timescales. Looping over short term data to approximate contact patterns on longer timescales can lead to unrealistic transmission chains because of the deterministic repetition of all contacts, without any renewal of the contact partners of each individual between successive periods. Real contacts indeed include a combination of regularly repeated contacts (e.g., due to friendship relations) and of more casual ones. In this paper, we propose an algorithm to longitudinally extend contact data recorded in a school setting, taking into account this dual aspect of contacts and in particular the presence of repeated contacts due to friendships. To illustrate the interest of such an algorithm, we then simulate the spread of SARS-CoV-2 on our synthetic contacts using an agent-based model specific to the school setting. We compare the results with simulations performed on synthetic data extended with simpler algorithms to determine the impact of preserving friendships in the data extension method. Notably, the preservation of friendships does not strongly affect transmission routes between classes in the school but leads to different infection pathways between individual students. Our results moreover indicate that gathering contact data during two days in a population is sufficient to generate realistic synthetic contact sequences between individuals in that population on longer timescales. The proposed tool will allow modellers to leverage existing contact data, and contributes to the design of optimal future field data collection.
authors: Lucille Calmon, Elisabetta Colosi, Giulia Bassignana, Alain Barrat, Vittoria Colizza
pid: Calmon2024PLOSCompBiol
layout: publication_item
---
