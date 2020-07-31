const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  form.classList.add("form-hide");
});

form.addEventListener("animationstart", (event) => {
  if (event.animationName === "down") {
    document.body.style.overflow = "hidden";
  }
});

form.addEventListener("animationend", (event) => {
  // O animationend chama o evento quando
  //  a animação direcionada a aquele evento finalizar

  if (event.animationName === "down") {
    // animationName referencia o nome da animação
    form.style.display = "none";
    document.body.style.overflow = "none";
  }
});
