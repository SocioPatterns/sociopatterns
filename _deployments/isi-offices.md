---
layout: deployment
slug: isi-offices
title: ISI Offices
wp_post_id: 485
date: "2010-12-12 15:32:10"
permalink: /deployments/isi-offices/
event: 
event_type: Office
event_url: www.isi.it
location: Turin, Italy
from: 2008-07-14
till: 2008-07-25
size: 45
---

<h1>Improved contact sensing platform</h1>

The contact sensing technology used in <a href="/deployments/sociophysics_08/">our first pilot study during the SocioPhysics workshop</a> suffered from two deficiencies. The first is that the fingerprint based proximity inference method was not sufficiently accurate to attain the desired spatial resolution. But more importantly it became clear that co-location is not a sufficiently reliable proxy observable of non-technologically-mediated person-to-person interactions (henceforth called NTM interactions). Co-location is a pre-condition for NTM interaction (ignoring long-range interactions involving shouting, facial expressions and/or some form of sign language), but co-location does not imply such interaction.

We took two measures to address these deficiencies. The first builds on the assumption that a temporarily sustained situation in which persons face each other while being near each other, typically involves social interaction. We should thus be able to obtain more reliable proxy observables of NTM interactions by additionally detecting face-to-face orientation. The second measure was to move from proximity <em>inference</em> to direct proximity <em>detection</em>.

We achieved these objectives by developing new badge firmware. The resulting new badge behavior involved the regular emission of two kinds of messages: <em>proximity detection</em> messages, which were emitted at a number of low power levels, and <em>proximity reporting</em> messages, which were emitted at the highest power level. The badges also operated in a receiving mode. The messages are thus no longer only received by the readers, but also by other badges within range. The badges were programmed to ignore the high-powered <em>reporting</em> messages they received, yet kept track of the number of low-powered <em>proximity detection</em> messages they received and to include these numbers in their reporting messages (as far as the capacity permitted).

<figure class="sp-figure">
<img
  src="/assets/img/signal-flow-2.jpg"
  alt="Signal flow diagram. See caption."
/>
<figcaption>
  Signal flow consisting of proximity detection messages over short-range 2.4 Ghz radio between the badges, proximity reporting messages from the badges over long-range 2.4 Ghz radio to the readers, and then over Ethernet to the server.
</figcaption>
</figure>

The key in achieving the direct proximity detection is that the range in which proximity detection messages can be received and subsequently reported, is dependent on the power level at which they are emitted. The approximate range for each of the four possible power levels under average atmospheric conditions are ~.5 meters; ~1.5–2 meters; ~5–8 meters; and ~15–25 meters.

The key in achieving face-to-face proximity detection is that when the badges are worn on the breast like regular conference badges, then the (water in) the body shields the low-powered radio signals going backwards, as well as those coming from that direction. Low-powered proximity detection messages can thus only be exchanged between badges (and subsequently reported) when the persons wearing those badges are facing each other while being near each other.

The resulting system is thus capable of directly detecting face-to-face spatial proximity of badge wearing participants, which serves as a sufficiently reliable proxy observable for non-technologically mediated person-to-person interactions, with a satisfactory spatial (~ 1 m) and temporal (~ 10 s) resolution. We call this system the <strong>SocioPatterns sensing platform</strong>.

Note that since this platform does not rely on the reception of the beacon signals by multiple readers, it can be deployed with significantly less readers than <a href="/deployments/sociophysics_08/">its precursor</a>. The only requirement is that all reporting messages, which are broadcast at the highest power level, can be received by at least one reader.

<h1>Proof of concept deployment</h1>
In order to test the new sensing platform we conducted a 10-day deployment at the offices of the ISI Foundation. About 45 participants, resident as well as visiting scientists, were asked to carry their badges while being present at the ISI offices. This rather small-scale deployment at our offices allowed us to interactively fine-tune  the parameters and assert the accuracy of the detection and aggregation processes as well as stability of the platform over long-term deployments.

<h1>Acknowledgements</h1>
<ul>
	<li>development: Ciro Cattuto and Wouter Van den Broeck</li>
	<li>deployment: Alain Barrat, Ciro Cattuto, Vittoria Colizza, Daniela Paolotti, and Wouter Van den Broeck</li>
	<li>data analysis: Ciro Cattuto and Alain Barrat</li>
	<li>thanks to: Ezio Borzani, the ISI administration, Milosch Meriac (<a href="http://openbeacon.org" target="_blank">openbeacon.org</a>), and the participating scientists and visitors.</li>
	<li>sponsoring institutions:
<ul>
	<li><a href="https://www.isi.it" target="_blank">ISI Foundation</a> (Torino, Italy)</li>
	<li><a href="http://www.ens-lyon.fr/PHYSIQUE/" target="_blank">Laboratoire de Physique de l'École Normale Supérieure de Lyon</a> (Lyon, France)</li>
	<li><a href="http://www.cpt.univ-mrs.fr/">Centre de Physique Théorique</a> (CNRS, Marseille, France)</li>
</ul>
</li>
</ul>
