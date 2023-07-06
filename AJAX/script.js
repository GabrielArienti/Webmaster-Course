var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    // sucesso
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    // erro
  }
};

request.onerror = function () {
  // erro de rede
};

request.send();

// fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
