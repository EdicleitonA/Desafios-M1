function solucao(lista) {

    const maiorIdade = lista.filter(function (idade) {
        return idade >= 18;
    });

    if (maiorIdade.length > 0) {
        const menorIdade = Math.min(...maiorIdade);
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }
}

const lista = [12, 13, 15]
solucao(lista)