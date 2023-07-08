// Array of items
var items = [];

// Values from input
document.querySelector("input[type=submit]").addEventListener("click", () => {
  var nomeProduto = document.querySelector("input[name=nome_produto").value;
  var precoProduto = document.querySelector("input[name=valor_produto").value;

  //   inserting in the array
  items.push({
    nome: nomeProduto,
    valor: precoProduto,
  });
});
