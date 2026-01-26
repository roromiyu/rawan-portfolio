document.addEventListener("DOMContentLoaded", () => {
  // ===== PAGE FADE-IN =====
  requestAnimationFrame(() => document.body.classList.add("loaded"));

  // ===== START BUTTON & SECTIONS FADE-IN =====
  const startBtn = document.getElementById("start-btn");
  const sections = document.querySelectorAll(".all-sections"); // All sections to reveal

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";  // Hide start button

    // Reveal sections one by one with staggered animation
    sections.forEach((sec, idx) => {
      setTimeout(() => {
        sec.style.display = "block";          // Show section
        sec.querySelectorAll(".section-title, .project-card").forEach(el => el.classList.add("visible"));
      }, idx * 400); // 400ms between sections
    });

    // Scroll to profile smoothly
    document.querySelector("#profile").scrollIntoView({ behavior: "smooth" });
  });

  // ===== SMOOTH SCROLL FOR NAVIGATION =====
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if(target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ===== PROFILE PHOTO PARALLAX =====
  const profileImg = document.querySelector(".profile-photo");
  window.addEventListener("mousemove", e => {
    if(!profileImg) return;
    const x = (window.innerWidth/2 - e.clientX)/30;
    const y = (window.innerHeight/2 - e.clientY)/30;
    profileImg.style.transform = `translate(${x}px, ${y}px)`;
  });

  // ===== SCROLL ANIMATION FOR REMAINING SECTIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), index * 120);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".section-title, .project-card").forEach(el => observer.observe(el));
});
