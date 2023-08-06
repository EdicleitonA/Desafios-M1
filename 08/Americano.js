function solucao(numeros) {

    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    let posicaoDoGoleiro = soma % numeros.length

    posicaoDoGoleiro = posicaoDoGoleiro === 0 ? numeros.length : posicaoDoGoleiro

    console.log(posicaoDoGoleiro)

}
solucao([1, 3, 2, 1]);
solucao([1, 1, 1]);