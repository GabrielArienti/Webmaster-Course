var conteudo = document
  .querySelector(".conteudo h2 span")
  .addEventListener("click", function () {
    var paragrafos = document.querySelectorAll(".conteudo p");
    paragrafos.forEach(function (paragrafo) {
      paragrafo.classList.add("mostrar");
    });
  });
