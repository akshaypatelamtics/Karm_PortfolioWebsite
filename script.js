// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Dynamic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal & skill bar animation
const revealElements = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.id === "skills") {
          progressBars.forEach((bar) => {
            bar.style.width = bar.dataset.width;
          });
        }
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// Contact form demo submission
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  formStatus.textContent = `Thanks, ${name}! Your message has been recorded locally for this demo.`;
  contactForm.reset();
});