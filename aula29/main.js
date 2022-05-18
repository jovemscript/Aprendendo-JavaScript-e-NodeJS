const data = new Date('1997-05-05 00:00:00')
let diaDaSemana = data.getDay()
let diaTexto

switch (diaDaSemana) {
    case 0:
        diaTexto='Domingo'
        break;
    case 1:
        diaTexto='Segunda'
        break;
    case 2:          
        diaTexto='Terça'
        break;
    case 3:
        diaTexto='Quarta'
        break;
    case 4:
        diaTexto='Quinta'
        break;
    case 5:
        diaTexto='Sexta'
        break;
    case 6:
        diaTexto='Sábado'
         break;
                        
    default:
        diaTexto = 'Dia inválido'
        break;
}

console.log(diaDaSemana, diaTexto)

/*
if (diaDaSemana === 0) {
    diaTexto = 'DOMINGO'   
}

else if (diaDaSemana === 1){
    diaTexto = 'SEGUNDA'
}

else if (diaDaSemana === 2){
    diaTexto = 'TERÇA'
}

else if (diaDaSemana === 3){
    diaTexto = 'QUARTA'
}

else if (diaDaSemana === 4){
    diaTexto = 'QUINTA'
}

else if (diaDaSemana === 5){
    diaTexto = 'SEXTA'
}

else if (diaDaSemana === 6){
    diaTexto = 'SÁBADO'
}

else{
    diaTexto = 'Este não é um dia válido'
}

console.log (diaDaSemana, diaTexto)
*/