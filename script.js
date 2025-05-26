// Menu burger mobile
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".navigation ul");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
  // Ferme le menu si on clique sur un lien
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });
}
