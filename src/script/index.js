const openMenu = () => {
  let btnMenu = document.getElementById("btn-menu");
  let btnsUl = document.querySelector(".mobile-menu");

  btnMenu.addEventListener("click", () => {
    btnsUl.classList.toggle("open");
  });

  btnMenu.classList.toggle("text__white");

  if (btnMenu.classList.contains("text_white")) {
    btnMenu.src = "./src/assets/burguer-bar.png";
  } else {
    btnMenu.src = "./src/assets/close.png";
  }
};
openMenu();
