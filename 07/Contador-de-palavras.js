function solucao(texto) {

    texto = texto.trim()
    let contador = 0
    const palavras = texto.split(" ")
    for (let palavra of palavras) {
        if (palavra.trim()) {
            contador++
        }
    }
    console.log(contador);
}
solucao("Um texto qualquer");
solucao("Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer")