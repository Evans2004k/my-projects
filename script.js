// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();

// Active link highlight while scrolling
const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navA.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// Contact form (simple demo)
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const status = document.getElementById("formStatus");

  status.textContent = `Thanks ${name}! Your message has been received ✅`;

  event.target.reset();
  return false;
}