// Cinco ou mais, um é grátis
/* Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.
Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!
Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.
Você ficou com essa tarefa.

Input Format
A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

Output Format
Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).
*/

const precos = [100, 500, 100, 200, 50];
// const precos = [100, 100, 100, 50];

let soma = 0;
let menor = 0;
for (let item of precos) {
    soma = soma + item; //somar todos os itens do array
}
for (let elemento of precos) {
    if (menor === 0) {
        menor = elemento;
    } else if (elemento < menor) {
        menor = elemento;
    }
}
// simplificação do código acima
/*
for (let item of precos) {
    soma = soma + item;
    if (menor === 0){
        menor = item;
    }else if (item < menor){
        menor = item;
    }
} 
*/
if (precos.length >= 5) {
    //comprou 5 ou mais
    console.log(soma - menor);
} else {
    //comprou 4 ou menos
    console.log(soma);
}