const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const hamburderIcon = document.getElementsByClassName("hamburger-icon")[0];
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
// Hamburger Menu

hamburderIcon.addEventListener("click", () => {
  if (navbarLinks.style.display === "flex") {
    navbarLinks.style.cssText = "display:none";
    closeIcon.style.cssText = "display:none";
    hamburger.style.cssText = "display:block";
    return;
  } else {
    navbarLinks.style.cssText = "display:flex";
    closeIcon.style.cssText = "display:block";
    hamburger.style.cssText = "display:none";
    return;
  }
});
