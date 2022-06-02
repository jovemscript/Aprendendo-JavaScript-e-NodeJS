const nome =  ['Eduardo Leite', 'Henrique Batista', 'Paula Leandra']

for (let valor of nome){
    console.log(valor);
}
console.log('--------')

for (let i in nome){
    console.log(nome[i]);
}

console.log('--------')

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


//for clássico - Para iteraveis (array ou strings)
//for in -  Retorna o Indice
//for of - Retorna o valor