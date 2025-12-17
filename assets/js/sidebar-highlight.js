document.addEventListener("DOMContentLoaded", function () {
  // Find all sidebar links that point to in-page anchors
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".sidebar-list a[href^='#']")
  );

  if (links.length === 0) return;

  // Map: section ID -> link element
  var sectionMap = {};
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    var id = href.slice(1); // remove leading "#"
    var section = document.getElementById(id);
    if (section) {
      sectionMap[id] = {
        section: section,
        link: link
      };
    }
  });

  var activeLink = null;

  function setActiveLink(id) {
    if (activeLink) {
      activeLink.classList.remove("sidebar-link-active");
    }
    var entry = sectionMap[id];
    if (entry) {
      entry.link.classList.add("sidebar-link-active");
      activeLink = entry.link;
    }
  }

  // Use IntersectionObserver to track which section is in view
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            if (id && sectionMap[id]) {
              setActiveLink(id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // favor sections closer to top
        threshold: 0.1
      }
    );

    Object.keys(sectionMap).forEach(function (id) {
      observer.observe(sectionMap[id].section);
    });
  } else {
    // Fallback: highlight based on click only
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        links.forEach(function (l) {
          l.classList.remove("sidebar-link-active");
        });
        link.classList.add("sidebar-link-active");
      });
    });
  }
});
