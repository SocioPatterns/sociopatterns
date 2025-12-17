---
layout: news_item
title: Exposing contact patterns
date: '2008-06-13 00:44:00'
slug: exposing-contact-patterns
wp_permalink: /news/2008/06/exposing-contact-patterns/
---

SocioPatterns.org aims to shed light on hidden patterns in social dynamics. A case in point is the study of <em>contact patterns,</em> which deals with such patterns in contacts among people. To date, little is known about these patterns. Although models can help in learning more, measuring real-world dynamics is indispensable for obtaining a complete picture. However, doing so manually is both laborious and intrusive, and tends to produce unreliable data - yet until recently it was the sole option we had. Fortunately, emerging technologies such as <a href="http://en.wikipedia.org/wiki/Rfid" target="_blank">active RFID</a> devices offer previously unfeasible means for collecting this much needed data. While collecting data is the first step, making sense of the resulting large amounts of data is the next. This is where insightful visualizations come into play, as these can expose otherwise invisible features and regularities.

The following movie gives an impression of a first contact patterns experiment and visualization we have been working on. It is followed by a detailed description.

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/ObtVS547lu4"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<h4>Experiment set-up</h4>
We have been working on an experimental set-up in which we aim to measure the contact patterns of a group of people. To do so we asked volunteers to wear small tags with integrated active RFID technology, henceforth called the <em>beacons</em>. These beacons continuously broadcast small data packets. These packets are received by a number of <em>stations</em> and relayed through a local network to a server for further processing. The stations are installed in fixed locations in the environment. The beacons and stations we used were created by and obtained from <a href="http://www.openbeacon.org/" target="_blank">OpenBeacon.org</a>.
<figure class="sp-figure">
  <img
    src="/assets/img/beacon-station-server-diagram1.jpg"
    alt="Schematic overview of the interactions between the beacons, the stations, and the server."
      loading="lazy"
    />
  <figcaption>
    Schematic overview of the interactions between the beacons, the stations, and the server.
  </figcaption>
</figure>

A first medium-sized test deployment of this experimental set-up took place recently (26-29 May, 2008) during the workshop <a href="http://www.isi.it/progetti/sociophysics08/" target="_blank">"Sociophysics: status and perspectives"</a> in <a href="https://www.google.com/local/place/fid/0x478872a84fa62cab:0x5b7b9c62a78e8056/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3Dgjo3eo9RwZs23lBk5OK3Wg%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D60.15698%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFmdqbzNlbzlSd1pzMjNsQms1T0szV2c%3D&sa=X&ved=2ahUKEwi8nIjhyr2RAxWngf0HHVGOCacQpx96BAguEA8" target="_blank">Villa Gualino</a>, in Turin, Italy. The workshop presentations took place in <em>Sala A</em>, while the participants lingered in the <em>Bar</em> during breaks, and had lunch in the <em>Cafeteria</em>. All three areas were covered by at least four stations each, as shown on the map below.
<figure class="sp-figure">
  <img
    src="/assets/img/stations-map.png"
    alt="Map of the placement of the stations in Villa Gualino."
      loading="lazy"
    />
  <figcaption>
    Map of the placement of the stations in Villa Gualino.
  </figcaption>
</figure>

The packets from up to 50 beacons were collected continuously for about 75 hours at an overall rate of up to 100 distinct packets per second. In total about 25 million packets were collected, corresponding to about 200 Mb of compressed raw data.
<h4>On-line data analysis and visualization server</h4>
In addition to recording data for further analysis - whose results will be posted here in the future - we also developed a real-time visualization system to display some aspects of the observed dynamics. Our visualization involves a server component and a client component. The server component processes the beacon packets relayed by the stations. These packets are typically received by multiple stations at varying strengths. These reception patterns can be used as a proxy for the physical proximity of two beacons. A related technique is used in the geo-location feature of the Apple <a href="https://web.archive.org/web/20080323065355/http://www.apple.com/ipodtouch/features.html#maps" target="_blank">iPod Touch</a> and <a href="https://web.archive.org/web/20080111051348/http://www.apple.com/iphone/features/index.html#map" target="_blank">iPhone</a>, or in services like <a href="http://www.placeengine.com/en" target="_blank">PlaceEngine</a>.

All calculations are performed in real-time over a sliding window of about two minutes. The post-processed data are dispatched to the visualization client at regular intervals, as an XML stream. The on-line data collection and analysis system is entirely coded in <a href="http://python.org">Python</a> on top of the <a href="https://twisted.org/">Twisted</a> framework and the <a href="https://numpy.org/">Numpy</a> library.

<h4>Visualization client</h4>
The main visualization represents the beacons, the stations, and their relations of proximity as measured by the system. The beacons are shown as simple discs, which are optionally labeled. Two beacons are connected by a link if the system detected that they are close to each other. The length, thickness and transparency of a link are a function of the strength of the link: short, thick and more opaque links represent strong proximity; thin, transparent links indicate weak proximity. The size of the discs representing the beacons depends on the number and proximity of other beacons, and specifically is a function of the sum of link weights to other beacons. The stations are shown as labeled shapes and laid out in a circle that spans the main view. The size of these shapes varies according to the number of beacons that are close to them.
<figure class="sp-figure">
  <img
    src="/assets/img/viz-detail1.png"
    alt="Stations and beacons in the main visualization view."
      loading="lazy"
    />
  <figcaption>
    Stations and beacons in the main visualization view.
  </figcaption>
</figure>

While the stations are laid out at fixed positions, the beacons are not. The network of their proximity relations is laid out by using a force-based model. Beacons repel each other, and the link between two beacons acts as a spring pulling them close to each other. The stiffness of the spring increases with the proximity of beacons. Beacons are also pulled towards the stations that see them more often, so that groups of nearby beacons are laid out in the vicinity of the stations that is closest to them.

The result is a first attempt to obtain a rather abstract yet comprehensive visualization of the proximity dynamics. The movie at the top of this post contains a time-lapse playback of the most interesting periods of one day of the workshop.

<h4>Visualization client interface</h4>
The visualization client is an <a href="http://www.adobe.com/products/air/" target="_blank">Adobe Air</a> application developed in <a href="https://en.wikipedia.org/wiki/Apache_Flex" target="_blank">Flex</a>. The visualization and physics system use (a mildly modified version of) the <a href="https://github.com/prefuse/Flare" target="_blank">flare visualization toolkit</a>.

The application interface involves a visualization window, a control panel and a number of auxiliary windows. The visualization itself can be shown full-screen during presentations. The control panel provides various interfaces to manage the data-sources, the visualization and the physics engine.

The data source is either the server component for real-time visualizations, a simulation for off-line testing, or data files for time-lapse playback. When using a simulation, an additional window is provided in which the simulated stations and beacons are shown. When in time-lapse mode, one can activate the recorder, which saves a bitmap file for each rendered frame. These saved frames were for example used to create the movie at the top of this post.
<figure class="sp-figure">
  <a href="/assets/img/beacontracer-screengrab.png">
    <img
      src="/assets/img/beacontracer-screengrab.png"
      alt="The complete interface of the visualization client, including the simulation window."
      loading="lazy"
    />
  </a>
  <figcaption>
    The complete interface of the visualization client, including the simulation window.
  </figcaption>
</figure>

<h4>Credits</h4>
<strong>visualisation:</strong> Wouter Van den Broeck

<strong>data analysis:</strong> Ciro Cattuto

<strong>music:</strong> Maps and Diagrams - Siaptik - Recorded by <a href="https://cactusislandrecordings.bandcamp.com/" target="_blank">Tim Martin</a>

<strong>experiment set-up:</strong> Alain Barrat, Ciro Cattuto, Vittoria Colizza, Daniela Paolotti, Jean-François Pinton, Wouter Van den Broeck, and Alessandro Vespignani

<strong>thanks to:</strong> Santo Fortunato, ISI administration, Ezio Borzani, Milosch Meriac (<a href="http://openbeacon.org" target="_blank">openbeacon.org</a>), and the workshop participants

<strong>sponsoring institutions:</strong> <a href="http://www.isi.it" target="_blank">Institute For Scientific Interchange Foundation</a> (Torino, Italy), <a href="http://www.ens-lyon.fr/PHYSIQUE/" target="_blank">Laboratoire de Physique de l'École Normale Supérieure de Lyon</a> (Lyon, France)
