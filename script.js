// Typing effect
const phrases = [
  "Tech student.",
  "Aspiring developer.",
  "Short-form content creator."
];
const typingEl = document.getElementById("typing");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = phrases[phraseIndex];
  typingEl.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1200);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}
type();

// Dark / light theme toggle
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Contact form (front-end only)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formStatus").textContent =
    "Thanks, " + name + "! Your message has been received.";
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();