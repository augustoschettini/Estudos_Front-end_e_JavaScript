// Seleção Olimpica
/*
Nas olimpíadas, para a modalidade FUTEBOL, existe uma regra um pouco diferente para a convocação dos atletas. As seleções olímpicas podem convocar até 18 atletas para seu time, mas, cada time deve ter no máximo 3 jogadores com mais de 23 anos.
Ou seja, caso uma equipe tente convocar um grupo de jogadores com mais de três jogadores tendo mais de 23 anos, dizemos que essa convocação foi inválida.
Além disso, cada equipe pode ter, no máximo, 18 jogadores. Sendo assim, caso uma equipe convoque mais de 18 jogadores, a convocação também é inválida.
Você está trabalhando do comitê olímpico internacional e, para facilitar a validação das convocações das seleções, você ficou responsável por fazer um programa que avalia as idades dos jogadores de um time e informa se essa convocação é válida ou não.

Input Format

A entrada será sempre um array chamado idadesDeUmTime que representa uma convocação de um time.
Cada item desse array é do tipo number, inteiro e positivo, que representa a idade de um jogador do time.

Output Format

Caso um time tenha convocado mais de 18 jogadores, imprima na tela a mensagem: INVALIDA POR TER MAIS DE 18 JOGADORES
Caso um time tenha uma quantidade adequada de jogadores no total, mas tenha convocado mais de 3 jogadores com mais de 23 anos, você deve imprimir na tela apenas o número de jogadores com mais de 23 anos
Caso a convocação seja válida, imprima na tela apenas a mensagem: CONVOCACAO VALIDA

Obs: Sempre maiúsculass, sem acentos e sem cedilhas, exatamente como mostrado acima.
Obs2: Você pode obter o tamanho do array fazendo idadesDeUmTime.length.
*/
// 18 jogadores no máximo 3 com mais de 23 anos

// imprimir a quantidade de jogadores com mais de 23 anos
const idadesDosAtletas = [20, 24, 21, 20, 20, 17, 21, 20, 22, 21, 17, 17, 20, 24, 17, 22, 23, 24];

let maisDe23 = 0;
for (let item of idadesDosAtletas) {
    if (item > 23) {
        maisDe23++;
    }
}
if (idadesDosAtletas.length > 18) {
    console.log("INVALIDA POR TER MAIS DE 18 JOGADORES");
} else if (maisDe23 > 3) {
    console.log("maisDe23");
} else {
    console.log("CONVOCACAO VALIDA");
}