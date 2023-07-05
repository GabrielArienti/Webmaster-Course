var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

request.onload = () => {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.Response);
    console.log(data);
  }
};

request.onerror = () => {};

request.send();
