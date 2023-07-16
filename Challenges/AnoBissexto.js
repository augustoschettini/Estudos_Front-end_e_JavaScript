let ano = 1988;

let mes = 3;

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log('Mês possui 31 dias!');
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log('Mês possui 30 dias!');
} else if (mes > 12 || mes < 1) {
    console.log('Mês Inválido!');
} else if (mes == 2) {
    let anoBissexto = ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);
    if (anoBissexto) {
        console.log('Ano Bissexto! Mês possui 29 dias!');
    } else {
        console.log('Mês possui 28 dias!')
    }
}
