---
layout: deployment
slug: practice-mapping
title: Practice Mapping
wp_post_id: 540
date: "2010-12-12 21:22:47"
permalink: /deployments/practice-mapping/
event: Interactivos? Process as Paradigm
event_type: Workshop
event_url: "http://www.practicemapping.org"
location: LABoral, Gijon, Spain
from: 2010-04-08
till: 2010-04-20
size: 100
---

<h1>Context and objective</h1>

The Practice Mapping project, a project to be situated at the intersection of art and science, was developed during the <a href="http://medialab-prado.es/article/convocatoria_interactivos_laboral">Interactivos? LABoral: When Process Becomes Paradigm</a> workshop, from April 8 till April 20, 2010. This workshop took place at the <a href="http://www.laboralcentrodearte.org/">LABoral Centro de Arte y Creación Industrial</a>, which has been steadily acquiring international acclaim for its relentless exploration of the intersections of art, science and technology, since its opening in 2007 in Gijón in Spain.

The workshop was organized in the programme of an ambitious exhibition called <a href="http://www.sujaschko.de/en/curating/exhibitions/process.html">Process as Paradigm</a>, curated by <a href="http://www.sujaschko.de/">Susanne Jaschko</a> and <a href="http://www.waag.org/persoon/lucas">Lucas Evers</a>. This exhibition researches the nature of processes and self organising, processual systems on a cultural level and in the arts. Its puts forward the idea that today processes have become one of the major paradigms and creative strategies in contemporary art and design across the disciplines. It aims to reveal the elementary shift from a culture based on the concept of manifestation and the final product, to a culture of process resulting from a networked society.

<figure class="sp-figure">
<img
  src="/assets/img/laboral-space.jpg"
  alt="Two photographs. Left: detail of LABoral entrance. Right: the main workshop space."
/>
<figcaption>
  Left: detail of LABoral entrance. Right: the main workshop space.
</figcaption>
</figure>

For the workshop we proposed Practice Mapping, a project that aims to reflect on the creative practice, guided by the premise that it is a compilation and transformation process governed by complex, multifaceted interactions of the author with other people, objects, tools, signs, texts and contexts.

The project proposed to collect data on these interactions in a structured manner, and to use scientific analysis techniques to detect patterns and structure in the collected data. The resulting annotated network data should then serve as source data for the computationally generated visualizations, both dynamic and static, which are to form a visual narrative, part cartographic, part tomographic, making visible certain aspects of the interaction dynamics of the investigated creative practice.

<h1>Data collection</h1>
The data collection efforts were focussed on two main methods. The first involved the deployment of the SocioPatterns platform. All participants, mentors, organizers and support crew members, as well as all spaces, physical tools, and other relevant objects, were outfitted (where possible) with a SocioPatterns badge, while most relevant areas were covered by the reader infrastructure. This enabled us to collect extensive data on the physical face-to-face proximity among the concerned people, as well as the proximity of participants with respect to relevant objects and spaces, resulting in a comprehensive and temporally fine-grained record of the physically grounded interaction network and its dynamics over the course of the workshop.

<figure class="sp-figure">
<img
  src="/assets/img/tagged-objects.jpg"
  alt="Three photographs of different techniques used to outfit objects and areas with SocioPatterns badges"
/>
<figcaption>
  Various techniques used to outfit objects and areas with SocioPatterns badges.
</figcaption>
</figure>

This physically grounded data was complemented with semantic background data collected through interviews and questionnaires covering aspects such as tool usage, training, inspiration and collaborations. The resulting information was interpreted in terms of entities (e.g. persons, tools, or events) and relations (e.g. collaborates-with, likes, or uses) and entered in a computer database.

<figure class="sp-figure">
<img
  src="/assets/img/semantic-data-collection.jpg"
  alt="Two-part image. On the left a picture of the notebook and questionaires, the analogue tools used in the background data collection process. On the right: detail of the digital interface used to enter background network data in the database."
/>
<figcaption>
  Left: a picture of the notebook and questionaires, the analogue tools used in the background data collection process. Right: detail of the digital interface used to enter background network data in the database.
</figcaption>
</figure>

All obtained data was processed and integrated in a unified network dataset and served to the scripts and applications that generated the visualizations.

<figure class="sp-figure">
<img
  src="/assets/img/system-overview.png"
  alt="System overview diagram."
/>
<figcaption>
  Overview of the various hardware and software components that comprise the system used for collecting, processing, and integrating the data, and serving it back in the form of dynamic socket-based data streams or static files.
</figcaption>
</figure>
<h1>Maps</h1>

We developed a number of scripts and applications that generated a visualization (or map), either static or dynamic, given the collected data.

<h3>Static Map #1</h3>

This visualization includes as entities all persons in the semantic network, all organizations, projects and tools. The relations are drawn when there is a relation in the semantic network or when a physical proximity was detected when the map was generated. [Developed by Marco Quaggiotto]

<figure class="sp-figure">
<a href="/assets/img/map_1_big.jpg">
  <img
    src="/assets/img/map_1_inline.jpg"
    alt="Map 1, overview and detail."
  />
</a>
<figcaption>
  Left: full map. Right: detail of map. Click on the figure to view a larger version.
</figcaption>
</figure>

<h3>Static Map #2</h3>
The second map aims to provide an overview of the level of <em>activity</em> of each project over time. This activity is measured in terms of the amount of physical proximity detection events per time unit in the proximity of the workspace table/area assigned to the respective projects.

<figure class="sp-figure">
<a href="/assets/img/map_2_big.png">
  <img
    src="/assets/img/map_2_inline_b.jpg"
    alt="Map 2, overview and detail."
  />
</a>

<figcaption>
  Left: full map. Right: detail of map. Click on the figure to view a larger version.
</figcaption>
</figure>

<h3>Static Map #3</h3>
This visualization maps out the tool usage of all participants. [Developed by Marco Quaggiotto]

<figure class="sp-figure">
<a href="/assets/img/map_3_big.jpg">
  <img
    src="/assets/img/map_3_inline.jpg"
    alt="Map 3, overview and detail."
  />
</a>
<figcaption>
  Left: full map. Right: detail of map. Click on the figure to view a larger version.
</figcaption>
</figure>

<h3>Static Map #4</h3>

A forth map aims to offer an overview of the level of interaction of each participant with the other projects. This quantity is measured in terms of how much time each participant spent near other project tables or the participants of the respective projects. The representations of the persons are plotted such that they are closer to those projects with which they had more interaction.

<figure class="sp-figure">
<a href="/assets/img/map_4_big.png">
  <img
    src="/assets/img/map_4_inline.jpg"
    alt="Map 4, overview and detail."
  />
</a>
<figcaption>
  Left: full map. Right: detail of map. Click on the figure to view a larger version.
</figcaption>
</figure>

<h3>Dynamic Map #1</h3>

The first dynamic map shows all participants and project tables. Edges are drawn between nodes when they are physically near each other (as detected by the SocioPatterns platform). The nodes are laid out by a force-directed algorithm that aims to position nodes near each other on the map when they are near each other in the physical space. [Developed by Marco Quaggiotto]

<div class="video-container">
  <iframe
    src="https://player.vimeo.com/video/17956745?title=0&byline=0&portrait=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<h3>Dynamic Map #2</h3>

A second dynamic map shows a (time-lapsed) replay of the growth of the semantic network as we entered data in the system over the course of the workshop.

<div class="video-container">
  <iframe
    src="https://player.vimeo.com/video/17957004?title=0&byline=0&portrait=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<h3>Dynamic Map #3</h3>

This third dynamic map was developed by Abelardo Gil-Fournier. On the technical side he explored the application of the isometric game engine he developed for the <a href="http://processing.org/">Processing platform</a>. On the visual side he investigated the use of the visual language of computer games, in particular isometric strategy and platform games. He also experimented with the use of horizontal layers (or levels), to provide an integrated representation of the multi-facetted annotated network data.

<div class="video-container">
  <iframe
    src="https://player.vimeo.com/video/17959186?title=0&byline=0&portrait=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<h1>Presentation</h1>

At the end of the workshop we were given the opportunity to present our project in the Interactivos? workshop projects area in the Process as Paradigm exhibition. We presented a wall-mounted composition of the various maps we developed, the static ones in the form of prints, the dynamic ones shown in a loop on a flatscreen.

<figure class="sp-figure">
<img
  src="/assets/img/expo-workshop.jpg"
  alt="Photograph of the space in the exhibition where the workshop projects were presented."
/>
<figcaption>
  The space in the exhibition where the workshop projects were presented.
</figcaption>
</figure>

<figure class="sp-figure">
<img
  src="/assets/img/expo-composition.jpg"
  alt="Two photographs of the wall-mounted presentation of the maps."
/>
<figcaption>
  The composition of printed static maps and the dynamic maps, which shown in a loop on a flatscreen.
</figcaption>
</figure>

<h1>Acknowledgements</h1>
<ul>
	<li>project mentors: Wouter Van den Broeck and Marco Quaggiotto</li>
	<li>project collaborators: Sandra Fernández García (Complutense University of Madrid) and <a href="http://www.croopier.com/">Abelardo Gil-Fournier</a></li>
	<li>thanks to: the workshop participants, organizers, tutors and technical support, LABoral, Medialab-Prado Madrid, Ciro Cattuto, Alain Barrat, Alessandro Vespignani, and the ISI administration</li>
	<li>sponsoring institutions:
<ul>
	<li><a href="https://www.isi.it/" target="_blank">ISI Foundation</a> (Turin, Italy)</li>
	<li><a href="http://www.laboralcentrodearte.org/">LABoral</a> (Gijon, Spain)</li>
</ul>
</li>
</ul>
