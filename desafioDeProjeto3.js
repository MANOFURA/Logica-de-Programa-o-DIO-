class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Converte para minúsculas para evitar erros de digitação
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso:
const heroi1 = new Heroi("Gandalf", 1500, "mago");
const heroi2 = new Heroi("Arthur", 30, "guerreiro");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Hattori", 25, "ninja");

heroi1.atacar(); // Saída: o mago atacou usando magia
heroi2.atacar(); // Saída: o guerreiro atacou usando espada
heroi3.atacar(); // Saída: o monge atacou usando artes marciais
heroi4.atacar(); // Saída: o ninja atacou usando shuriken