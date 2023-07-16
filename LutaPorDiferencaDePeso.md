## Luta por diferença de peso
Médio
200 pontos

## Problema
Você foi contratado pelo UFC, maior evento de artes maciais mistas (MMA) do mundo, para desenvolver um programa que os ajude a saber se uma luta entre dois lutadores pode ou não acontecer.

A única restrição para que uma luta aconteça é que os lutadores tenham uma diferença máxima de peso de 5 kg.

### Entrada
A entrada do seu programa será composta por uma variável chamada pesos, do tipo array de number, que armazena, respectivamente, o peso do Lutador A e do Lutador B, ambos em quilogramas, sendo esses os lutadores analisados.

### Saída
Você deverá retornar:

_PODEM LUTAR_: caso a diferença entre os pesos dos lutadores seja no máximo de 5 kg;
_NAO PODEM LUTAR_: caso a diferença entre os pesos dos lutadores seja maior que 5 kg.

Exemplo

Entrada
pesos = [50, 53]

Saída
PODEM LUTAR

Explicação
O Lutador A pesa 50 kg e o Lutador B pesa 53 kg. Como a diferença entre os pesos é de 3 kg, eles podem lutar.

'''js
function solucao (pesos){
let LutadorA = pesos[0];
let LutadorB = pesos[1];
let soma = LutadorA - LutadorB;



if (soma >= -5 && soma <= 5) {
  //console.log('PODEM LUTAR');
  return 'PODEM LUTAR';
}else {
  //console.log('NAO PODEM LUTAR');
  return 'NAO PODEM LUTAR';
}
}
console.log(solucao([60 , 56]))
'''