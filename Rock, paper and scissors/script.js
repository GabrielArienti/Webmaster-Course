var elements = document.querySelectorAll(".player-options div > img");

//
var playerOpt = "";
var inimigoOpt = "";

// who is the winner
function validarVitoria() {
  let vencedor = document.querySelector(".vencedor");

  if (playerOpt == "papel") {
    if (inimigoOpt == "papel") {
      // empate
      vencedor.style.color = "black";
      vencedor.innerHTML = "Empate!";
    } else if (inimigoOpt == "tesoura") {
      // inimigo ganhou
      vencedor.style.color = "red";
      vencedor.innerHTML = "O computador venceu!";
    } else if (inimigoOpt == "pedra") {
      // player ganhou
      vencedor.style.color = "green";
      vencedor.innerHTML = "Você ganhou!";
    }
  }

  if (playerOpt == "pedra") {
    if (inimigoOpt == "papel") {
      // inimigo ganhou
      vencedor.style.color = "red";
      vencedor.innerHTML = "O computador venceu!";
    } else if (inimigoOpt == "tesoura") {
      // player ganhou
      vencedor.style.color = "green";
      vencedor.innerHTML = "Você ganhou!";
    } else if (inimigoOpt == "pedra") {
      // empate
      vencedor.style.color = "black";
      vencedor.innerHTML = "Empate!";
    }
  }

  if (playerOpt == "tesoura") {
    if (inimigoOpt == "papel") {
      // player ganhou
      vencedor.style.color = "green";
      vencedor.innerHTML = "Você ganhou!";
    } else if (inimigoOpt == "tesoura") {
      // empate
      vencedor.style.color = "black";
      vencedor.innerHTML = "Empate!";
    } else if (inimigoOpt == "pedra") {
      // inimigo ganhou
      vencedor.style.color = "red";
      vencedor.innerHTML = "O computador venceu!";
    }
  }
}

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

  validarVitoria();
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
