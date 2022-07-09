var header = document.getElementById("primary-header");
var links = document.getElementById("primary-navigation");
var hamburgerButton = document.getElementById("hamburger-button");

function showMobileMenu() {
  if (header.classList.contains("open")) {
    console.log("removed");
    header.classList.remove("open");
    links.classList.remove("flex-column");
    links.classList.add("hidden");
    hamburgerButton.classList.remove("close-menu");
  } else {
    console.log("added");
    header.classList.add("open");
    links.classList.add("flex-column");
    links.classList.remove("hidden");
    hamburgerButton.classList.add("close-menu");
  }
}

function hideNavigationLinks() {
  if (screen.width <= 768) {
    if (
      !links.classList.contains("hidden") &&
      !header.classList.contains("open")
    ) {
      links.classList.add("hidden");
    }
  }
  if (screen.width > 768) {
    if (links.classList.contains("hidden")) {
      links.classList.remove("hidden");
    }
    header.classList.remove("open");
    links.classList.remove("flex-column");
  }
}

addEventListener("load", hideNavigationLinks);
addEventListener("resize", hideNavigationLinks);
