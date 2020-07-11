var interval;
var contador = 0;

document.querySelector("#items").addEventListener("onload", (event) => {
  const images = document.querySelectorAll(".item");

  function transition() {
    contador += 1;

    if (contador < images.length) {
      event.target.scrollBy(300, 0);
    } else {
      event.target.scrollTo(0, 0);
      contador = 0;
    }
  }

  interval = setInterval(transition, 2000);
});

document.querySelector("#items").addEventListener("mouseout", (event) => {
  clearInterval(interval);
});
