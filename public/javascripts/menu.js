document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const menuOverlay = document.getElementById("menu-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  const openMenu = () => {
    mainNav.classList.add("open");
    menuToggle.classList.add("active");
    if (menuOverlay) menuOverlay.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");
    if (menuOverlay) menuOverlay.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      if (mainNav.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (menuOverlay) {
      menuOverlay.addEventListener("click", closeMenu);
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && mainNav.classList.contains("open")) {
        closeMenu();
      }
    });
  }
});

