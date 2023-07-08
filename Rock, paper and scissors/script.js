var elements = document.querySelectorAll(".player-options div > img");

//
var playerOpt = "";
// function to reset opacity.
function resetOpacityPLayer() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0.3;
  }
}

// selection of opcion (player)
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    resetOpacityPLayer();
    this.style.opacity = 1;
    playerOpt = this.getAttribute("opt");
    alert(playerOpt);
  });
}
