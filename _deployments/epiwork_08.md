---
layout: deployment
slug: epiwork_08
title: Epiwork workshop
wp_post_id: 468
date: "2010-12-11 05:19:11"
permalink: /deployments/epiwork_08/
event: Facing the Challenge of Infectious Diseases (epiwork08)
event_type: Workshop (small scientific conference)
event_url: "http://www.isi.it/progetti/epiwork08/"
location: Villa Gualino, Turin, Italy
from: 2008-10-13
till: 2008-10-17
size: 75
---

<h1>Deployment description</h1>
This was the second deployment of the fully-fledged SocioPatterns sensing platform, which is described in detail in the description of <a href="/deployments/isi-offices/">its first deployment</a>. All participants of the workshop were proposed to participate in the SocioPatterns deployment and most gladly accepted. This workshop took place at the same location as the <a href="/deployments/sociophysics_08/">SocioPhysics workshop</a>, i.e., Villa Gualino in Turin, Italy. This enabled us to compare the behavior and results of the SocioPatterns sensing platform versus the pilot sensing technology deployed during this SocioPhysics workshop.

Since the new platform does not rely on the reception of the beacon signals by multiple readers, we did not need to install as many readers as for the <a href="/deployments/sociophysics_08/">SocioPhysics workshop deployment</a>. The following map of the conference floor of Villa Gualino shows the location of the eight installed readers.

<figure class="sp-figure">
<img
  src="/assets/img/epiwork-readers-map.png"
  alt="The location of the installed RFID readers in the rooms used for the workshop."
/>
<figcaption>
  The location of the installed RFID readers in the rooms used for the workshop.
</figcaption>
</figure>
<h1>Visualization</h1>
For this deployment we developed two visualizations. The first showed the instantaneous face-to-face proximity network (the current state of the network) similar to the visualization developed for the earlier <a href="/deployments/sociophysics_08/">SocioPhysics workshop deployment</a>.

Comparing the visualizations of the instantaneous network obtained through the new sensing platform with that obtained with the initial proximity-only system used for the <a href="/deployments/sociophysics_08/">SocioPhysics workshop deployment</a>, clearly shows the difference. The following figure shows a side by side comparison of the networks, the one on the left for the <a href="/deployments/sociophysics_08/">SocioPhysics workshop deployment</a> around 11:30 AM on May 27, 2008, and the one on the right for the <a href="/deployments/epiwork_08/">Epiwork workshop deployment</a> around 11:00 AM on October 15, 2008. Both show the network while the people were gathering in the bar during the coffee break. The visualization on the left clearly shows an almost fully connected network since it shows edges between participants that were spatially near each other. The network on the right, however, is much more sparse, since it only has edges between participants that were facing each other while being near each other. The network on the right is clearly a much better approximation of the actual person-to-person interaction network.

<figure class="sp-figure">
<img
  src="/assets/img/evidence.png"
  alt="Side by side comparison of the networks, the one the left for the SocioPhysics workshop deployment around 11:30 AM on May 27, 2008, and the one on the right for the Epiwork workshop deployment around 11:00 AM on October 15, 2008. Both show the network while the people were gathering in the bar during the coffee break. The visualization on the left shows an almost fully connected network since it shows edges between participants that were spatially near each other. The network shown on the right is much more sparse, since it only has edges between participants that were facing each other while being near each other."
/>
<figcaption>
  Side by side comparison of the instantaneous networks obtained through the initial proximity-only sensing technology (left) and the fully-fledges SocioPatterns sensing platform (right).
</figcaption>
</figure>

The following movie shows the instantaneous face-to-face proximity network obtained through the SocioPatterns sensing platform, for some selected periods of one day of the workshop.

<div class="video-container">
  <iframe
    src="https://player.vimeo.com/video/2410580?title=0&byline=0&portrait=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
<p class="video-caption">A time-lapsed playback of the visualization of the instantaneous face-to-face proximity network as obtained through the SocioPatterns sensing platform, for some selected periods of one day of the SocioPhysics workshop.</p>

The second visualization showed the cumulative network, which was obtained by cumulating all face-to-face proximity relations detected since the beginning of the respective day. To enable the observer to focus on the significant interactions in the otherwise highly connected cumulative network, the summed edge weights were logarithmically reweighed to compensate for the long-tail nature, and only the edges with a weight exceeding a certain threshold were retained.

Both visualizations offered a "live" continuously updated representation of the network thanks to the real-time proximity detection and processing capabilities of the sensing system, the real-time stream of network updates dispatched to the visualization client, and the dynamic force-directed layout algorithm. They were shown on two publicly displayed screens in the bar area as shown in the following figure.

<figure class="sp-figure">
<img
  src="/assets/img/epiwork-viz-screens.jpg"
  alt="Two visualizations shown on two publicly displayed screens installed in the bar."
/>
<figcaption>
  The two visualizations shown on two publicly displayed screens installed in the bar. The left-hand screen shows the instantaneous network while the other screen showed the cumulative network.
</figcaption>
</figure>

The badge marks in these visualizations were annotated with the name of the participant associated with the respective badge. This not only enabled the viewers to identify their representations in the visualization, as well as those of other participants, but also allowed them to roughly locate other participants as their representations were positioned near the labeled marks of the readers they were physically closest to. Note that the names are not shown in the time-lapsed extracts shown in the above movie in accordance with our privacy protocols.
<h1>Results: Interaction activity analysis</h1>
What follows is an example of a study of the data obtained through the SocioPatterns sensing platform. Thanks to the ability to roughly locate each participant by looking at which readers received which messages from the badge of that participant, we can investigate the social activity per room, as well as its evolution over time.

We consider the three main 'rooms' in which the workshop participants were tracked: the conference room, the bar and the cafeteria. The following figure shows how many participants were in each of these locations over the course of one day of the conference, with time on the horizontal axis and the number of participants on the vertical axis. It shows the attendance in the conference room during the workshop sessions (two in the morning and two in the afternoon) and the shifts to the bar during the coffee breaks, and the cafeteria during breakfast and lunch. The social event taking place in the bar after 7.30 pm is also clearly visible.

<figure class="sp-figure">
<a href="/assets/img/fig_activity1.jpg">
  <img
    src="/assets/img/fig_activity1.jpg"
    alt="number of attendees in conference rooms"
  />
</a>
</figure>

Correlating this location data with the data on non-technologically-mediated person-to-person interactions, henceforth referred to as <em>contacts</em>, can offer a more interesting picture than the simple attendance figures for seminars or social events. One approach is to aggregate the contact data over discrete time intervals. For each interval we can then calculate measures such as the average number of contacts of each participant, or their average duration. When plotted over time, these measures provide insights into the temporal evolution of the social dynamics of the group as a whole. The following figure is an example of this. In it we compare the average number of contacts per participant, denoted <em>&lt;k&gt;</em>,  measured over 20 seconds time windows, with the number of participants that are present in the conference room. Strikingly, the number of contacts per participant is low when the attendance in the conference room is high. A strong increase of the average number of contacts per participant is observed during each break. This clearly shows how most social interactions occur during the coffee and lunch breaks, while a lower level of interaction takes place during the talks: people talking to their immediate neighbor, typically.
<figure class="sp-figure">
<a href="/assets/img/fig_avg_blog.jpg">
  <img
    src="/assets/img/fig_avg_blog.jpg"
    alt=""
  />
</a>
</figure>
Another more detailed approach is to gather for each interval the average number of distinct contact pairs, contact <em>triangles</em>, and contact <em>cliques</em> with four or more participants. In the following figure we again plot these measures over the course of one day. We see that triangles and cliques of 4 individuals almost exclusively occur during the breaks. A fluctuating number of pairs is observed during the session, corresponding most probably to participants turning towards their neighbors to chat or comment. Peaks are observed at the beginning and end of each session and in fact of each talk, when participants have indeed more activity. The small number of triangles observed during the sessions correspond to small groups of participants remaining in the coffee break area for discussions even after the beginning of the session.

<figure class="sp-figure">
<a href="/assets/img/fig_cliques.jpg">
  <img
    src="/assets/img/fig_cliques.jpg"
    alt=""
  />
</a>
</figure>

That social interactions take place during breaks is certainly not a surprise nor a novelty: these results are clearly expected. Our aim here is to emphasize how our experimental setup is able to characterize face-to-face interaction and not simply spatial proximity. A simpler setup based on physical proximity alone would show a large number of cliques (or even a unique large clique) during the sessions, in which participants are indeed physically close. Here, in contrast, we are able to detect meaningful social contacts, and also discriminate between pair interactions or discussions in small groups of 3, 4 or 5 persons.

<h1>Results: Contact duration</h1>
In this second example of the kinds of analysis that can be performed on the data obtained through the SocioPatterns sensing platform, we look at the duration of contacts. The probability <em>P(Dt)</em> of observing a contact of duration <em>Dt</em> is shown as a function of the contact duration <em>Dt</em>. The probability distribution was computed using a few hours of data. The interval of time we analyzed was divided into slices of 20 seconds, and for each of these slices the contact graph of the attendees was computed and used to assess when a new contact was established, continued, or broken. As a consequence, the contact durations we measure are multiples of the interval used for temporal coarse-graining (i.e., contacts last 20 seconds, 40 s, 60 s, ...)

Remarkably, this simple analysis exposes a clear pattern of social contact: the duration of face-to-face contacts is power-law distributed (straight line on a log-log plot) with an exponent close to <em>-2</em> (black line). This behavior holds over different periods of time, and is robust across different groups of individuals.

<figure class="sp-figure">
<a href="/assets/img/contact_duration1.jpg">
  <img
    src="/assets/img/contact_duration1.jpg"
    alt=""
  />
</a>
</figure>

Qualitatively, the figure above shows something obvious: there are comparatively few long-lasting contacts and a multitude of brief contacts. It is remarkable, however, that such a clear-cut pattern emerges when observing a few tens of persons over a few hours. Moreover, the specific value of the scaling exponent (<em>-2</em>) shows that the duration of social contact is scale-free, i.e., there is no "typical" duration for contacts. While one can always compute an average duration of contacts over a finite sample of data, the scaling properties are such that the computed average will increase without limit on increasing the length of the experiment.

We close by noticing that we are not the first to observe this regularity for the duration of social contacts (see for example the work by Scherrer et al. on <a href="http://dx.doi.org/10.1016/j.comnet.2008.06.007">"Description and simulation of dynamic mobility networks"</a>). Our measurements, however, achieve higher spatial and temporal accuracy than previous studies, and reliably select face-to-face interactions at close range, which are a very good proxy for social interaction.

<h1>Acknowledgements</h1>
<ul>
	<li>development: Ciro Cattuto and Wouter Van den Broeck</li>
	<li>deployment: Alain Barrat, Ciro Cattuto, Vittoria Colizza, Daniela Paolotti, Wouter Van den Broeck, and Alessandro Vespignani</li>
	<li>thanks to: workshop organizers, Ezio Borzani, ISI administration, and the workshop participants</li>
	<li>sponsoring institutions:
<ul>
	<li><a href="http://isi.it/" target="_blank">Institute For Scientific Interchange Foundation</a> (Torino, Italy)</li>
	<li><a href="http://www.ens-lyon.fr/PHYSIQUE/" target="_blank">Laboratoire de Physique de l’École Normale Supérieure de Lyon</a> (Lyon, France)</li>
	<li><a href="http://www.cpt.univ-mrs.fr/">Centre de Physique Théorique</a> (CNRS, Marseille, France)</li>
</ul>
</li>
</ul>
