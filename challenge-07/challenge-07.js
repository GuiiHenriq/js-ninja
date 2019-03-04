/*
Crie um array com 5 items (tipos variados).
*/
const myArr = ['String', 777, 'teste', true, { carro: 'ferrari' }];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newItem) {
  if(newItem !== undefined) {
    return myArr.push(newItem);
  }
  return myArr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( { carro: 'BMW', cor: 'AZUL', ano: '2019' } );
console.log(myArr[5]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArr[5]['cor']}.`); 

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArr.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArr[5].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let numPar = 10;
while(numPar <= 20) {
  numPar % 2 === 0 ? console.log(numPar) : '';
  numPar++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let numImpar = 10;
while(numImpar <= 20) {
  (numImpar++) % 2 === 0 ? console.log(num) : '';
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(numberPar = 100; numberPar <= 120; numberPar) {
  numberPar % 2 === 0 ? console.log(numberPar) : '';
  numberPar++;
}

console.log( 'Números ímpares entre 111 e 125:' );
for(numberImpar = 100; numberImpar <= 120; numberImpar++) {
  (numberImpar++) % 2 === 0 ? console.log(numberImpar) : '';
}