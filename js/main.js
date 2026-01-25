document.addEventListener("DOMContentLoaded", () => {
  // ===== Page fade-in =====
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });

  // ===== Animate project cards =====
  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 150);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".project-card").forEach(card => {
    cardObserver.observe(card);
  });

  // ===== Animate section titles =====
  const titleObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".section-title").forEach(title => {
    titleObserver.observe(title);
  });

  // ===== Smooth page transitions for HTML links =====
  document.querySelectorAll("a[href$='.html']").forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");
      if (!url.startsWith("#")) {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      }
    });
  });

  // ===== Smooth scrolling for anchor links =====
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


