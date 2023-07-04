var conteudo = document
  .querySelector(".conteudo h2 span")
  .addEventListener("click", function () {
    var paragrafos = document.querySelectorAll(".conteudo p");
    paragrafos.forEach(function (paragrafo) {
      if (paragrafo.classList.contains("mostrar")) {
        paragrafo.classList.remove("mostrar");
        paragrafo.classList.add("ocultar");
      } else {
        paragrafo.classList.remove("ocultar");
        paragrafo.classList.add("mostrar");
      }
    });
  });
