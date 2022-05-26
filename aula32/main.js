const pessoa = {
    nome: 'luiz',
    sobrenome: 'Cezar',
    idade:'25 anos',
    endereco:{
        rua:'Av. Brasil',
        numero:'112'
    }
};

 //atribuição via desestruturação
 const {nome, sobrenome, ...resto} = pessoa;
 console.log(nome,resto)