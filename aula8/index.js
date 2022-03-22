const nome = 'Eduardo'
const peso = 80
const altura = 1.80
let imc = (peso)/(altura*altura)
imc=imc.toFixed(2)

console.log(`Olá ${nome} se seu peso é de ${peso}kg e se sua altura é ${altura}, então seu imc é: ${imc}`)
