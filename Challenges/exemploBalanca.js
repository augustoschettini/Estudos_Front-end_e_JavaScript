// Código escrito no editor para teste

const pesoLadoA1 = 10;
const pesoLadoA2 = 20;
const pesoLadoB1 = 20;
const pesoLadoB2 = 10;

let pesoA = pesoLadoA1 + pesoLadoA2;
let pesoB = pesoLadoB1 + pesoLadoB2;

	if (pesoA === pesoB){
	  console.log('EQUILIBRIO');
	}else if (pesoA > pesoB){
	  console.log('LADO A');
	}else {
	  console.log('LADO B');
	}
	
	
// Código escrito dentro do teste IFOOD

function balanca (pesoLadoA1, pesoLadoA2, pesoLadoB1, pesoLadoB2){
  let pesoA = pesoLadoA1 + pesoLadoA2;
  let pesoB = pesoLadoB1 + pesoLadoB2;

	if (pesoA === pesoB){  
		return 'EQUILIBRIO';
	}else if (pesoA > pesoB){
		return 'LADO A';
	}else {
		return 'LADO B';
	}
}
console.log(balanca(20, 20, 20, 10));	