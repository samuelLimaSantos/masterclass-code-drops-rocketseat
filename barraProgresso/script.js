// Pegar o container do texto
const postWrap = document.querySelector(".post-wrap");
let barra = document.createElement("div");

/**Estilização da barrinha */
barra.style.height = "4px";
barra.style.width = "0";
barra.style.backgroundColor = "#6633cc";
barra.style.position = "fixed";
barra.style.top = "0";
barra.style.left = "0";
barra.style.zindex = "9999";
barra.style.transition = "0.2s";

document.body.append(barra); //Adiciona a barra no final do body

// Atualizar a barrinha
function updateBar() {
  // offsetHeight retorna a altura de determinado elemento
  const alturaDaPagina = postWrap.offsetHeight;
  const pagePositionY = window.pageYOffset;
  const updatedBar = (pagePositionY * 100) / alturaDaPagina;
  barra.style.width = updatedBar + "%";
  // window.pageYOffset retorna a posição do eixo Y no momento
}

document.addEventListener("scroll", updateBar);
