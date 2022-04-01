
let valorA = 'a'  
let valorB = 'b' 
let valorC = 'c'

const tempvalorA = valorA

valorA = valorB
valorB = valorC
valorC = tempvalorA

console.log(valorA , valorB , valorC)

//aprendi sobre variaveis temporarioas

//metodo moderno de resolução
let valorD = 'a';  
let valorE = 'b';
let valorF = 'c';

[valorD, valorE, valorF] = [valorE, valorF, valorD]

console.log(valorD, valorE, valorF);