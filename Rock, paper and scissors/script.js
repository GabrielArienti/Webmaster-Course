var elements = document.querySelectorAll(".player-options div > img");

//
var playerOpt = "";
var inimigoOpt = "";

// resert for enemy
function resetInimigo() {
  const enemyOptions = document.querySelectorAll(".enemy-options div");
  for (var i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].childNodes[0].style.opacity = 0.3;
  }
}

// function for the enemy
function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3);

  const enemyOptions = document.querySelectorAll(".enemy-options div");
  resetInimigo();

  for (var i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].childNodes[0].style.opacity = 1;
      inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
    }
  }

  alert(playerOpt);
  alert(inimigoOpt);
}

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

    // enemy round
    inimigoJogar();
  });
}
