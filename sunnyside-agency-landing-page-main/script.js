const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu_items"); // Changed from ".menuItem" to ".menu_items"
const hamburger = document.querySelector(".menuIcons"); // Changed from ".hamburger" to ".menuIcons"
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);