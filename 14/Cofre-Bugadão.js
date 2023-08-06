function processData(input) {

    let linhas = input.split("\n")
    let senha = linhas[0];
    let palavraDigitada = linhas[1];
    let i = 0;

    for (let palavra of palavraDigitada) {
        if (palavra === senha[i]) {
            i++;
        }
    }
    if (i === senha.length) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}
processData("cubos\ncuggbyos");
processData("cubos\newvelrabsocaeln");