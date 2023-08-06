function solucao(min, max, valores) {

    const valoresAutorizados = [];

    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            valoresAutorizados.push(valor)
        }
    }
    console.log(valoresAutorizados)
}

solucao(2, 10, [0, 5, 6, 10, 11])
solucao(1, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9])