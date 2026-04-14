const navbar = document.getElementById("navbar");
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile toggle
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu when clicking link
document.querySelectorAll("ul li a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
