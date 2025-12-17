---
layout: page
title: "SocioPatterns"
permalink: /
---

<div class="home-intro">
  <p>
    SocioPatterns is an <strong>interdisciplinary, international research collaboration</strong> that measures and studies <strong>human and animal proximity networks</strong> using <strong>wearable devices</strong> and wireless sensor networks. We apply methods from data science, network science, and machine learning to investigate problems in the epidemiology of infectious diseases, computational epidemiology, social network analysis, computational social science, and beyond. From schools and hospitals to museums, social gatherings, and households, we collect data across <strong>a wide range of real-world environments</strong>. Over the last 15+ years, our <strong>open data</strong> has enabled thousands of studies.
  </p>
</div>

<div class="image-gallery" id="imageGallery">
  <!-- Images will be loaded here by JavaScript -->
</div>

<script>
(function() {
  const galleryContainer = document.getElementById('imageGallery');
  const imagePoolPath = '/assets/img/roll/';
  const numImagesToShow = 15; // 5x3 grid
  let allImages = [];
  let currentImages = [];

  // Fetch list of images from JSON manifest
  async function loadGallery() {
    try {
      // Fetch the list of available images
      const response = await fetch(imagePoolPath + 'images.json');
      allImages = await response.json();

      if (!allImages || allImages.length === 0) {
        console.log('No images available in gallery');
        return;
      }

      // Shuffle and select random images
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      currentImages = shuffled.slice(0, Math.min(numImagesToShow, shuffled.length));

      // Clear existing content
      galleryContainer.innerHTML = '';

      // Create image elements
      currentImages.forEach((filename) => {
        const img = document.createElement('img');
        img.src = imagePoolPath + filename;
        img.alt = 'SocioPatterns research image';
        img.className = 'gallery-image';
        img.loading = 'lazy';
        img.dataset.filename = filename;

        // Handle missing images gracefully
        img.onerror = function() {
          this.style.display = 'none';
        };

        galleryContainer.appendChild(img);
      });

      // Start replacing images one at a time
      startImageRotation();

    } catch (error) {
      console.error('Error loading gallery:', error);
      galleryContainer.innerHTML = '<p style="text-align: center; color: #666;">Gallery loading...</p>';
    }
  }

  // Replace one random image every 2 seconds
  function startImageRotation() {
    setInterval(() => {
      if (allImages.length <= numImagesToShow) {
        // Not enough images to rotate
        return;
      }

      const galleryImages = galleryContainer.querySelectorAll('.gallery-image');
      if (galleryImages.length === 0) return;

      // Pick a random image element to replace
      const randomIndex = Math.floor(Math.random() * galleryImages.length);
      const imageToReplace = galleryImages[randomIndex];
      const oldFilename = imageToReplace.dataset.filename;

      // Pick a new image that's not currently displayed
      const availableImages = allImages.filter(img => !currentImages.includes(img));
      if (availableImages.length === 0) return;

      const newFilename = availableImages[Math.floor(Math.random() * availableImages.length)];

      // Update the image
      imageToReplace.src = imagePoolPath + newFilename;
      imageToReplace.dataset.filename = newFilename;

      // Update currentImages array
      const currentIndex = currentImages.indexOf(oldFilename);
      if (currentIndex !== -1) {
        currentImages[currentIndex] = newFilename;
      }

    }, 2000); // Replace one image every 2 seconds
  }

  // Load gallery on page load
  loadGallery();
})();
</script>