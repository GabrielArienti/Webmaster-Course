// calling the API list
fetch(
  "https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=e5ffaa97d866155e543551e3e7159ea6",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((json) => {
    var container = document.querySelector(".container");
    json.results.map(function (val) {
      var tituloFilmeElement = document.createElement("div");
      tituloFilmeElement.className = "tituloFilme";
      tituloFilmeElement.style.cursor = "pointer";
      tituloFilmeElement.innerHTML = val.title;
      container.appendChild(tituloFilmeElement);

      var descriptionElement = document.createElement("div");
      descriptionElement.className = "description";
      descriptionElement.style.display = "none";
      descriptionElement.innerHTML = val.overview;
      tituloFilmeElement.appendChild(descriptionElement);

      var hrElement = document.createElement("hr");
      tituloFilmeElement.appendChild(hrElement);

      tituloFilmeElement.addEventListener("click", function () {
        if (this.querySelector(".description").style.display == "none") {
          this.querySelector(".description").style.display = "block";
        } else {
          this.querySelector(".description").style.display = "none";
        }
      });
    });
  });
