const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const navBurguer = document.getElementById("nav-burguer");
  navBurguer.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
