## Acesso ao chefão
Difícil
200 pontos

### Problema
Como desenvolvedor sênior da Cubos Game, empresa da Cubos Academy destinada a fazer jogos eletrônicos para computadores, você ficou responsável por implementar a lógica que mostre ao jogador do "Enfrentando Bugs", novo jogo da empresa, se ele pode ou não entrar na sala do chefão da fase em que ele se encontra no jogo.

Para ter o direito de enfrentar o chefão, o jogador deve ter coletado três itens específicos ao longo da fase, que variam de chefão para chefão.

Entrada
A entrada do seu programa será composta por quatro variáveis:

itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
Saída
Você deve retornar:

PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
Exemplo
Entrada
itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

itemNecessario1 = "machado"

itemNecessario2 = "espada"

itemNecessario3 = "sapato"

Saída
NAO PODE ENFRENTAR

Explicação
Apesar do jogador ter conseguido coletar dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.

'''js

/*function solucao(peso1, peso2){
}
console.log(solucao(85, 90));*/

let itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete", "espada"];

const itemNecessario1 = "machado"
const itemNecessario2 = "espada"
const itemNecessario3 = "sapato"

let enfrentaChefao = ""; 
for (let item of itensColetados) {
  if (item === itemNecessario1 || item === itemNecessario2 || item === itemNecessario3){
    enfrentaChefao = enfrentaChefao + item;
    //console.log('PODE ENFRENTAR');
  }
}
console.log(typeof enfrentaChefao);

if(enfrentaChefao === itemNecessario1 + itemNecessario2 + itemNecessario3){
  console.log('igual');
}else{
  console.log('Não');
}

// SAIDA
// NAO PODE ENFRENTAR

'''

## Código Correto
``` js
function solucao (itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
//let itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete", "espada"];

//const itemNecessario1 = "machado"
//const itemNecessario2 = "espada"
//const itemNecessario3 = "sapato"

let quantidadeItens = 0;

for (let item of itensColetados) {
  if (item === itemNecessario1 || item === itemNecessario2 || item === itemNecessario3) {
    quantidadeItens +=1;
  }
}
if (quantidadeItens === 3) {
 // console.log('LUTA');
  return 'PODE ENFRENTAR';
}else {
  //console.log('PERDEU')
  return 'NAO PODE ENFRENTAR';
}
}
console.log(solucao(["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"], "machado", "espada", "sapato"));

```