var el = document.getElementById("box");
var el2 = document.getElementsByClassName(".box");
var el3 = document.querySelectorAll(".box")[0];
el3[0].innerHTML = '<div class = "box white"></div>';
el3.addEventListener("click", () => {
  el3.classList.add("animeEsquerda");
});
