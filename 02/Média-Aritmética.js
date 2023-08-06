let lista = [2, 3, 4]

function solucao(lista) {

    let somaTotal = 0;

    for (numero of lista) {
        somaTotal += numero
    }
    const media = somaTotal / lista.length
    console.log(media)
}
solucao(lista)