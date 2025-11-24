
class Heroi {
  // Construtor para inicializar as propriedades do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo; // Ex: guerreiro, mago, monge, ninja
  }

  // Método para realizar o ataque
  atacar() {
    let ataque;

    // Define a descrição do ataque com base no tipo do herói
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = "usou magia";
        break;
      case 'guerreiro':
        ataque = "usou espada";
        break;
      case 'monge':
        ataque = "usou artes marciais";
        break;
      case 'ninja':
        ataque = "usou shuriken";
        break;
      default:
        ataque = "realizou um ataque indefinido";
    }

    // Exibe a mensagem de ataque formatada
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


// 1. Cria um herói do tipo Mago e faz ele atacar
const heroiMago = new Heroi("Merlin", 1000, "mago");
console.log(`Herói: ${heroiMago.nome}, Tipo: ${heroiMago.tipo}`);
heroiMago.atacar();
// Saída: O mago atacou usando usou magia

console.log("\n---");

// 2. Cria um herói do tipo Guerreiro e faz ele atacar
const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
console.log(`Herói: ${heroiGuerreiro.nome}, Tipo: ${heroiGuerreiro.tipo}`);
heroiGuerreiro.atacar();
// Saída: O guerreiro atacou usando usou espada

console.log("\n---");

// 3. Cria um herói do tipo Monge e faz ele atacar
const heroiMonge = new Heroi("Liu Kang", 40, "monge");
console.log(`Herói: ${heroiMonge.nome}, Tipo: ${heroiMonge.tipo}`);
heroiMonge.atacar();
// Saída: O monge atacou usando usou artes marciais

console.log("\n---");

// 4. Cria um herói do tipo Ninja e faz ele atacar
const heroiNinja = new Heroi("Hanzo", 28, "ninja");
console.log(`Herói: ${heroiNinja.nome}, Tipo: ${heroiNinja.tipo}`);
heroiNinja.atacar();
// Saída: O ninja atacou usando usou shuriken