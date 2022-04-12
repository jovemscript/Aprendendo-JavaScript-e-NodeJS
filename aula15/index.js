//arredondando números

let num1 = 12.5132
let numA = Math.round(num1)//mais próximo
console.log(numA)

let num2 = 12.5132
let numB = Math.floor(num2)//menor
console.log(numB)

let num3 = 12.3132
let numC = Math.ceil(num3)//maior
console.log(numC)

//maximo e minimo
console.log(Math.max(1,2,3,4,5,6,7,8))
console.log(Math.min(1,2,3,4,5,6,7,8))

//gerar numero aleatório entre 1 e 9

console.log(Math.round(Math.random()*(9-1)))
