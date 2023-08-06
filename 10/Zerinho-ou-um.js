function solucao(jogadores) {

    let somaDasJogadas = 0;
    for (let jogador of jogadores) {
        somaDasJogadas += jogador.jogada;
    }
    let vencedor;

    if (somaDasJogadas === 1 || somaDasJogadas === jogadores.length - 1) {
        for (let jogador of jogadores) {
            if (jogador.jogada === 1 && somaDasJogadas === 1) {
                vencedor = jogador;

            } else if (jogador.jogada === 0 && somaDasJogadas === jogadores.length - 1) {
                vencedor = jogador;

            }
        }
    }
    console.log(vencedor ? vencedor.nome : "NINGUEM")
}
let jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
];
solucao(jogadores);