//1.for

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//2.While loop

let i = 5

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i--;
}

//3. Do.. while

do {
    console.log('digitando!', i)
    i++;
} while (i < 10)


//4. for in

const pessoas = {
    nome: "edu",
    idade: 22
};

for (let key in pessoas) {
    console.log(key, pessoas['nome']);
}

const cores = ['vermelho', 'azul', 'verde']

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//5. for-of

for(let cor of cores){
    console.log(cor);
}