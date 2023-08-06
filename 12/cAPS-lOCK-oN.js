function processData(input) {
    let correcao = "";

    for (let letras of input) {
        if (letras === letras.toLowerCase()) {
            correcao += letras.toUpperCase()
        } else {
            correcao += letras.toLowerCase()
        }
    }
    if (input.toUpperCase() === input || input[0].toLowerCase() === input[0] && input.slice(1).toUpperCase() === input.slice(1)) {
        console.log(correcao)
    } else {
        console.log(input)
    }
}
processData("cAPS");
processData("lock");
processData("CAPS")