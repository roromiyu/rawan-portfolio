// ==============================
// PORTFOLIO JS - FULL CYBERPUNK
// ==============================

// ===== ELEMENTS =====
const startBtn = document.getElementById("start-btn");
const sections = document.querySelectorAll(".all-sections");
const stars = document.getElementById("stars");

// ===== START BUTTON =====
startBtn.addEventListener("click", () => {
  sections.forEach(section => {
    section.classList.remove("hidden");
    section.style.animation = "fadeIn 1s ease forwards";
  });
  startBtn.style.display = "none";
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== FADE IN ANIMATION =====
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from {opacity:0; transform:translateY(20px);}
  to {opacity:1; transform:translateY(0);}
}
`;
document.head.appendChild(style);

// ===== STARS ANIMATION =====
function generateStars(numStars = 100) {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = Math.random();
    star.style.position = 'absolute';
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.pointerEvents = 'none';
    stars.appendChild(star);
  }
}
generateStars(150);

// Optional: floating star movement
function moveStars() {
  const starElements = document.querySelectorAll('.star');
  starElements.forEach(star => {
    let y = parseFloat(star.style.top);
    y -= 0.05; // speed
    if (y < 0) y = 100;
    star.style.top = y + "%";
  });
  requestAnimationFrame(moveStars);
}
moveStars();

// ===== MOUSE FOLLOW GLOW =====
document.addEventListener("mousemove", e => {
  const glow = document.querySelectorAll(".project-card");
  glow.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ===== CARD HOVER GLOW (CSS Variables for JS) =====
const cardStyle = document.createElement('style');
cardStyle.innerHTML = `
.project-card {
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: '';
  position: absolute;
  top: var(--mouse-y, 50%);
  left: var(--mouse-x, 50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(124,255,178,0.3) 0%, transparent 80%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: top 0.1s, left 0.1s;
  border-radius: 50%;
}
`;
document.head.appendChild(cardStyle);

// ===== OPTIONAL: TYPING INTRO =====
const hero = document.querySelector(".hero-title");
const heroText = "Rawan Ahmad";
let idx = 0;
function typeHero() {
  if(idx <= heroText.length) {
    hero.textContent = heroText.slice(0, idx);
    idx++;
    setTimeout(typeHero, 150);
  }
}
typeHero();

