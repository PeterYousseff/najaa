// navbar
// navbar transition in scrolling
function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changeBg);

// =========================================================
// =========================== navbar ======================
// =========================================================
// Function to toggle the menu
function toggleMenu() {
  const other = document.getElementById("other");
  other.classList.toggle("removeMenu");
}
// Function to close the menu when clicking outside
function closeMenuOnClickOutside(event) {
  const dropdownMenu = document.querySelector(".other");
  if (!event.target.closest(".down")) {
    dropdownMenu.classList.add("removeMenu");
  }
}
// Attach event listeners
document.getElementById("aMenu").addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnClickOutside);
// =========================================================
// =========================================================
// close and open the menu in responsive design
let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".menu");

// Toggle menu visibility on toggler click
toggler.onclick = function () {
  menu.classList.toggle("visibleNavMenu");
};

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !toggler.contains(event.target)) {
    menu.classList.add("visibleNavMenu");
  }
});

// Get all the links inside the menu
const links = menu.getElementsByClassName("target");

// Function to close the menu
function closeMenu() {
  // menu.style.display = 'none'; // Hide the menu
  menu.classList.add("visibleNavMenu");
}

// Add click event listeners to each link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", closeMenu);
}

// =========================================================
// =========================== navbar ======================
// =========================================================
// navbar

// visible scroll to top
function visibleScrollToTop() {
  let scrollToTop = document.getElementById("scroll-to-top");
  let scrollValue = window.scrollY;
  if (scrollValue > 500) {
    scrollToTop.classList.remove("visible-scroll-to-top");
  } else {
    scrollToTop.classList.add("visible-scroll-to-top");
  }
}
window.addEventListener("scroll", visibleScrollToTop);


