document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");
  
    toggleButton.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });
  