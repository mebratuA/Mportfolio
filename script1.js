// Typing
const texts = [
  "Web Developer",
  "ERPNext Developer",
  "Data Analyst",
  "IT Administrator",
  "Network Engineer",
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 100;

function type() {
  const element = document.getElementById("typing");
  const current = texts[i];

  element.textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
    setTimeout(type, 800);
    return;
  }

  setTimeout(type, isDeleting ? 50 : speed);
}

type();

// dark mode

function toggleMode() {
  const body = document.body;
  const btn = document.getElementById("modeToggle");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️"; // switch to sun
  } else {
    btn.textContent = "🌙"; // switch to moon
  }
}

// animation
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
