class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  whatAnimalIs() {
    return this.nome;
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chamando o construtor da classe pai corretamente
    this.raca = raca;
  }

  printRaca() {
    return this.raca;
  }
}

let teddy = new Cachorro("Teddy", "Bulldog");
console.log(teddy.printRaca());
