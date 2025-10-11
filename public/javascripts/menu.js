document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      // Alternar la clase 'open' para mostrar/ocultar el menú
      mainNav.classList.toggle("open");
    });

    // Cerrar el menú al hacer clic en un enlace (importante para SPA)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("open")) {
          mainNav.classList.remove("open");
        }
      });
    });
  }
});
