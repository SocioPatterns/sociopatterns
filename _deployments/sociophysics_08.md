---
layout: deployment
slug: sociophysics_08
title: SocioPhysics workshop
wp_post_id: 458
date: "2010-12-11 05:08:11"
permalink: /deployments/sociophysics_08/
event: Sociophysics - status and perspectives (sociophysics08)
event_type: Workshop (small scientific conference)
event_url: "http://www.isi.it/progetti/sociophysics08/"
location: Villa Gualino, Turin, Italy
from: 2008-05-26
till: 2008-05-29
size: 65
---

<h1>Sensor infrastructure</h1>

For the first experimental deployment of the contact sensing platform we were working on, we aimed to detect temporarily sustained spatial proximity as a proxy observable of social contact. To monitor this observable we used the active-RFID based technology created by the <a href="http://www.openbeacon.org/">OpenBeacon.org</a> project. This technology involves small electronic badges which emit a radio beacon signal at multiple power levels. This signal consists of a small data-packet that contains the unique identifier of the badge, the power level at which it was emitted, and a packet counter. Note that this configuration did not yet use the more advanced communication scheme that was later developed for the fully-fledged SocioPatterns sensing platform.

<figure class="sp-figure">
<img
  src="/assets/img/system-basics.png"
  alt="Diagram of signal flow from the badges over 2.4 Ghz radio to the readers and then over Ethernet to the server."
/>
<figcaption>
  Signal flow from the badges over 2.4 Ghz radio to the readers, which forward the data packets over Ethernet to the server.
</figcaption>
</figure>

A large amount (relative to subsequent deployments) of RFID readers were installed in the various public areas used by the workshop attendees. These readers listened for the data packets emitted by the badges, and, upon reception, sent a reception report including the original packet to the server.

The packets from up to 50 badges were collected continuously for about 75 hours at an overall rate of up to 100 distinct packets per second. In total about 25 million packets were collected, corresponding to about 200 Mb of compressed raw data.

<figure class="sp-figure">
<img
  src="/assets/img/Map-of-the-placement-of-the-stations-in-Villa-Gualino.png"
  alt="Map of Villa Gualino with markings of the location of the RFID readers in the three rooms used for the workshop."
/>
<figcaption>
  Map of Villa Gualino with the location of the RFID readers in the three public areas used by the workshop participants:  Sala A in which the presentations took place, the Bar, and the Cafeteria.
</figcaption>
</figure>

<h1>Reception strength fingerprints</h1>

As so many readers were installed, the beacon signals emitted by a badge were typically received by several readers. The aggregation of the beacon reception reports from the various readers enabled the server to produce a fingerprint for each badge for a given period (typically 20 seconds). Such a fingerprint consist of a vector with for each reader a real value that quantifies the <em>reception strength</em>. This value is obtained by looking both at the power level used for the beacon signals received by the respective readers during that period, and the <em>drop rate</em>, which is the rate at which beacon signals that were emitted during that period, were <em>not</em> received by the respective readers.

Given that badges that are physically near each other will have similar reception fingerprints, the physical proximity of each pair of badges can be inferred from the similarity of their respective fingerprints. Alternatively one could infer the locations of the badges through triangulation based on the reception strengths, and compare these locations to infer spatial proximity. However, this approach would use the same signal strength information as we used, but uses the additional step of location inference. Our approach avoid this additional step, as well as the additional errors it entails.

<figure class="sp-figure">
<img
  src="/assets/img/fingerprints.png"
  alt="Diagram with an example of the fingerprint comparison process."
/>
<figcaption>
  The beacon signals of two badges are received by the three same readers with varying strength. These strengths comprise a fingerprint that can be compared to infer the physical proximity of the badges.
</figcaption>
</figure>

Given the data collected by the system, a dynamic continuously updated network is constructed. The nodes in this network are the participants that are wearing the badges, while the edges represent the inferred physical proximity. All calculations were performed in real-time over a sliding window of about two minutes by the SocioPatterns server, which was entirely coded in <a href="http://python.org">Python</a>, using the <a href="http://twistedmatrix.com/">Twisted</a> framework and the <a href="http://numpy.scipy.org/">Numpy</a> library.
<h1>Visualizing the network</h1>
The resulting dynamic network data was stored for subsequent off-line data analysis and investigation, but was also served as a real-time data stream to the visualization application that we developed in the context of this project. This data stream consisted of data structures representing the current state of the network, wich were dispatched on regular intervals by the server over the TCP socket connection to the visualization clients.

The network visualization represents the badges as simple round marks, which are optionally labeled. The readers were represented by labeled marks, laid out equiangularly on a circumcentric oval. The proximity relations are shown as edges. The length, thickness and transparency of these edges is a function of the strength of the proximity: short, thick and more opaque links represent strong –in terms of distance and duration– proximity; thin, transparent links indicate weak proximity. The size of the badge marks is a function of its proximity strength, i.e., the sum of the strength of proximity relations it is currently involved in. The size of the reader marks is a function of the number of beacon signals dispatched through them.

<figure class="sp-figure">
<img
  src="/assets/img/viz-detail1.png"
  alt="Diagram showing a full view of the network visualization next to a detail in which a reader and badge mark are highlighted."
/>
<figcaption>
  A complete view of the network visualization is shown on the left. A small region from this view is enlarged and shown on the right. Annotations point out a reader and a badge mark in this detail view.
</figcaption>
</figure>

While the readers are laid out at fixed positions, the badges are laid out by using a force-based layout algorithm. Badge marks repel each other to avoid visual overlap, while proximity relations act as a spring force pulling the linked badge marks closer to each other. The stiffness of the spring increases with the proximity strength. Badges are also pulled towards the readers that see them more often, so that groups of nearby badges are laid out in the vicinity of the readers that are closest to them. The result is meant to be a rather abstract yet spatially structured visualization of the proximity dynamics.

Thanks to the real-time proximity detection and processing capabilities of the sensing system, the real-time stream of network updates dispatched to the visualization client, and the dynamic force-directed layout algorithm, we were able to create a real-time visualization of the instantaneous proximity network. This visualization was shown on a publicly displayed screen in the bar area. The following movie shows a time-lapsed playback of this visualization for some interesting periods of one day of the workshop.

<div class="video-container">
  <iframe
    src="https://player.vimeo.com/video/1180738?title=0&byline=0&portrait=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
<p class="video-caption">A time-lapse playback of the visualization of the proximity network dynamic for some selected periods of one day of the SocioPhysics workshop.</p>

<h1>Visualization application</h1>

The visualization client was an <a href="http://www.adobe.com/products/air/" target="_blank">Adobe Air</a> application developed in ActionScript 3 and <a href="http://www.adobe.com/products/flex/" target="_blank">Flex</a>. The visualization and physics system used (a mildly modified version of) the <a href="http://flare.prefuse.org/" target="_blank">flare visualization toolkit</a>.

The application's interface involved a visualization window, a control panel and a number of auxiliary windows. The visualization itself could be shown full-screen during presentations. The control panel provided various interfaces to manage the data-sources, the visualization and the physics engine.

The data source was either the real-time stream from the server, a simulation for off-line testing, or data files for (time-lapsed) playback. When using a simulation, an additional window was provided in which the simulated readers and badges were shown. When in time-lapse mode, one could activate a frame recorder, which saved a bitmap file for each rendered frame. These saved frames were for example used to create the movie shown above.

<figure class="sp-figure">
<a href="/assets/img/beacontracer-screengrab.png">
  <img
    src="/assets/img/beacontracer-screengrab.png"
    alt="The complete interface of the visualization client, including the simulation window."
  />
</a>
<figcaption>
  The interface of the visualization client, including the simulation window.
</figcaption>
</figure>

<h1>Ethical considerations</h1>

All data handling was performed in full compliance with the Italian regulations on privacy. All participants were given a paper document with a clear description of the deployment objectives, the technological configuration and the data handling procedures. They were requested to sign this enrollment agreement and consent form before becoming a participant of the deployment.

No records were made of badge-person associations. The data packets were encrypted before being emitted by the badges and were forwarded in encrypted form to the server over a virtual private network. The server on which the data was processed and stored was installed in a secured location.

<h1>Conclusion</h1>
The technological platform used in this deployment was meant to detect spatial proximity between the badges, as a proxy observable of the non-technologically mediated (NTM) person-to-person interactions we were interested in. It became, however, apparent that this approach suffered two deficiencies. The first is that the fingerprint based proximity inference method was not sufficiently accurate to attain the desired spatial resolution. But more importantly it became clear that co-location is not a sufficiently reliable proxy observable of NTM interactions. Co-location is a pre-condition for NTM interaction (ignoring long-range interactions involving shouting, facial expressions and/or some form of sign language), but co-location does not imply such interaction. We attempted to address these deficiencies in <a href="/deployments/isi-offices/">subsequent studies</a>.

During the course of this deployment we experimentally provided a public display of the real-time visualization on a screen in the bar area. The immediacy of this visualization appeared to touch a nerve as it drew an unexpected amount of attention from the participants. This phenomena was further explored in subsequent deployments.

<h1>Acknowledgements</h1>
<ul>
	<li>development: Ciro Cattuto and Wouter Van den Broeck</li>
	<li>deployment: Alain Barrat, Ciro Cattuto, Vittoria Colizza, Daniela Paolotti, Jean-François Pinton, Wouter Van den Broeck, and Alessandro Vespignani</li>
	<li>visualisation: Wouter Van den Broeck</li>
	<li>data analysis: Ciro Cattuto</li>
	<li>thanks to: the workshop participants, Santo Fortunato, ISI administration, Ezio Borzani, and Milosch Meriac (<a href="http://openbeacon.org" target="_blank">openbeacon.org</a>)</li>
	<li>sponsoring institutions:
<ul>
	<li><a href="https://www.isi.it" target="_blank">ISI Foundation</a> (Torino, Italy)</li>
	<li><a href="http://www.cpt.univ-mrs.fr/">Centre de Physique Théorique</a> (CNRS, Marseille, France)</li>
	<li><a href="http://www.ens-lyon.fr/PHYSIQUE/" target="_blank">Laboratoire de Physique de l'École Normale Supérieure de Lyon</a> (Lyon, France)</li>
</ul>
</li>
</ul>
