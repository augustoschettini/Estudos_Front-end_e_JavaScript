## Luta entre categorias
Médio
200 pontos

### Problema
Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo, deve desenvolver um programa que indique à organização do novo evento que sua empresa vai fazer se dois lutadores podem ou não lutar.

Os lutadores serão divididos em cinco categorias:

Peso leve: lutadores com peso mais leve que 55 kg;

Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

Peso pesado: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.

Entrada
A entrada do seu programa será composta por duas variáveis:

peso1: variável numérica que armazena o peso de um dos lutadores;

peso2: variável numérica que armazena o peso do outro lutador.

Saída
Você deve retornar:

PODEM LUTAR: se os lutadores forem da mesma categoria;

NAO PODEM LUTAR: se os lutadores forem de categorias diferentes.

Exemplo
Entrada 1
peso1 = 60

peso2 = 64

Saída 1
PODEM LUTAR

Explicação 1
Um dos lutadores pesa 60 kg e o outro pesa 64 kg. Como ambos são da categoria dos pesos meio-médios, eles podem lutar.

Entrada 2
peso1 = 55

peso2 = 54

Saída 1
NAO PODEM LUTAR

Explicação 1
Um dos lutadores pesa 55 kg e o outro pesa 54 kg. O primeiro lutador citado é da categoria dos pesos meio-médios, o outro é da categoria dos pesos leves. Como ambos são de categorias diferentes, eles não podem lutar

'''js
let lutador1;
let lutador2;

if (peso1 < 55){
  
  lutador1 = 'leve';
  
}else if (peso1 >= 55 && peso1 < 65){
  
  lutador1 = 'medio-leve';
  
}else if (peso1 >= 65 && peso1 < 75){
  
  lutador1 = 'medio';
  
}else if (peso1 >= 75 && peso1 < 85){
  
  lutador1 = 'meio-pesado';
  
}else if (peso1 >= 85){
  
  lutador1 = 'pesado';
  
}


if (peso2 < 55){
  
  lutador2 = 'leve';
  
}else if (peso2 >= 55 && peso2 < 65){
  
  lutador2 = 'medio-leve';
  
}else if (peso2 >= 65 && peso2 < 75){
  
  lutador2 = 'medio';
  
}else if (peso2 >= 75 && peso2 < 85){
  
  lutador2 = 'meio-pesado';
  
}else if (peso2 >= 85){
  
  lutador2 = 'pesado';
  
}

if (lutador1 === lutador2){
  return 'PODEM LUTAR';
  }else {
  return 'NAO PODEM LUTAR';
  }
  
'''