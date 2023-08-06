function solucao(precos) {

    const precoMinimo = Math.min(...precos)
    let valorTotal = 0
    for (let valor of precos) {
        valorTotal += valor;
        if (valor < precoMinimo) {
            precoMinimo = valor;
        }
    }
    if (precos.length < 3) {
        console.log(valorTotal);
    } else {
        valorTotal -= precoMinimo * 0.5;
        console.log(valorTotal);
    }

}

solucao([150, 50])
solucao([100, 100, 100])
solucao([200, 150, 50, 100,])