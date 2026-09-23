function calcularRank(vitorias, derrotas) {
    // 1. Calcula o saldo de Rankeadas (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 2. Determina o nível com base no saldo de vitórias
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // 3. Retorna o texto formatado para salvar em uma variável
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

const resultado = calcularRank(200, 35);
console.log(resultado);
