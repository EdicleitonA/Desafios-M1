function solucao(min, km) {

    let precoAPagar = 0;
    if (min <= 20) {
        precoAPagar += min * 50;
    } else {
        precoAPagar += 20 * 50 + (min - 20) * 30;
    }
    if (km <= 10) {
        precoAPagar += km * 70;
    } else {
        precoAPagar += 10 * 70 + (km - 10) * 50;
    }
    console.log(Math.floor(precoAPagar))

}
solucao(25, 11.5)