function processData(input) {
    const linhas = input.split('\n')
    const funcionarios = linhas.slice(0, 1)
    const novaLinha = linhas.slice(1)

    let cordenadaX = []
    let cordenadaY = []

    for (let linha of novaLinha) {
        let cordenadas = linha.split(' ');
        cordenadaX.push(cordenadas[0])
        cordenadaY.push(cordenadas[1])
    }

    let maiorDistancia = 0;

    for (let i = 0; i < cordenadaX.length; i++) {
        for (let j = i + 1; j < cordenadaY.length; j++) {
            const x1 = cordenadaX[i]
            const y1 = cordenadaY[i]
            const x2 = cordenadaX[j]
            const y2 = cordenadaY[j]

            const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia);

}
processData("3\n0 0\n0 3\n4 0");
processData("5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7");