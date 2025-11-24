
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