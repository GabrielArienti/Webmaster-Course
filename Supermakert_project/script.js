// Array of items
var items = [];

// Values from input
document.querySelector("input[type=submit]").addEventListener("click", () => {
  var nomeProdutoInput = document.querySelector("input[name=nome_produto");
  var precoProdutoInput = document.querySelector("input[name=valor_produto");

  var nomeProduto = nomeProdutoInput.value;
  var precoProduto = precoProdutoInput.value;

  if (nomeProduto == "" || precoProduto == "") {
    return alert("Por favor, preencha os campos");
  }
  //   inserting in the array
  items.push({
    nome: nomeProduto,
    valor: precoProduto,
  });

  /* Basic HTML element
    <div class="lista-produto-single">
        <h3>Doritos</h3>
        <h3 class="price_produto"><span>$10,99</span></h3>
    </div>
*/

  let listaProdutos = document.querySelector(".lista-produtos");
  let total = 0;
  listaProdutos.innerHTML = "";

  items.map(function (val) {
    // calculating total
    total += parseFloat(val.valor);

    listaProdutos.innerHTML +=
      `
    
    <div class="lista-produto-single">
        <h3>` +
      val.nome +
      `</h3>
        <h3 class="price_produto"><span>R$` +
      val.valor +
      `</span></h3>
    </div>
    `;
  });

  total = total.toFixed(2);
  nomeProdutoInput.value = "";
  precoProdutoInput.value = "";
  let elementoSoma = document.getElementById("result");
  elementoSoma.textContent = "R$" + total;
});

// clean button
document.querySelector("button[name=limpar]").addEventListener("click", () => {
  items = [];
  document.querySelector(".lista-produtos").innerHTML = "";
  document.getElementById("result").innerHTML = "R$0.00";
});
