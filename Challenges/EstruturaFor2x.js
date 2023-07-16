const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
    console.log(amizadesDaJuliana[indexDaJuliana]);
}

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
    console.log('Pessoa Amiga da Juliana');
    console.log(amizadesDaJuliana[indexDaJuliana]);
    for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
        console.log('Pessoa amiga do Adilson: ' + amizadesDoAdilson[indexDoAdilson]);
    }
}

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
    for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
        if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]) {
            amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
        }
    }
}

console.log(amizadesEmComum);

const valoresProdutos = [10, 12, 8];
let somaTotal = 0;
/***** Escreva seu código nas linhas abaixo *****/
for (let index = 0; index < valoresProdutos.length; index = + 1) {
    somaTotal = somaTotal + valoresProdutos[index];
}
console.log(somaTotal);

const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
/***** Escreva seu código nas linhas abaixo *****/
listaDeFrutas.push('manga');
for (let index = 0; index < listaDeFrutas.length; index += 1) {
    console.log(listaDeFrutas[index]);
}


const multiplicador = [3, 7];

let resultado;

for (let index = 0; index < multiplicador.length; index = index + 1) {
    for (let index2 = 1; index2 <= 9; index2 = index2 + 1) {
        resultado = multiplicador[index] * index2;
        console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
    }
}


const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];
const contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];
let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador + 1;
    }
  }
}
console.log(contador);

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];
let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] !== coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];
let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexJ]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);

