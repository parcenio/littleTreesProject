const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const menuBurguer = document.getElementById("menu-burguer");
  menuBurguer.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
