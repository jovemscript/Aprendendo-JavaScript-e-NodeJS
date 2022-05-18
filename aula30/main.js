/* const dataHora = document.querySelector('.container h1');
const data = new Date();

function getDiaDaSemanaTexto(diaDaSemana) {
    let SemanaTexto;

    switch (diaDaSemana) {
        case 0:
            SemanaTexto = 'Domingo'
            return SemanaTexto
        case 1:
            SemanaTexto = 'Segunda-feira'
            return SemanaTexto
        case 2:
            SemanaTexto = 'Terça-feira'
            return SemanaTexto
        case 3:
            SemanaTexto = 'Quarta-feira'
            return SemanaTexto
        case 4:
            SemanaTexto = 'Quinta-feira'
            return SemanaTexto
        case 5:
            SemanaTexto = 'Sexta-feira'
            return SemanaTexto
        case 6:
            diaTexto = 'Sábado'
            return SemanaTexto

        default:
            SemanaTexto = 'Ocorreu um erro!Volte mais tarde.'
            return SemanaTexto
    }
}

function getNomeMes(numeroMes) {
    let MesTexto;

    switch (numeroMes) {
        case 0:
            MesTexto = 'Janeiro'
            return MesTexto
        case 1:
            MesTexto = 'Fevereiro'
            return MesTexto
        case 2:
            MesTexto= 'Março'
            return MesTexto
        case 3:
            MesTexto = 'Abril'
            return MesTexto
        case 4:
            MesTexto = 'Maio'
            return MesTexto
        case 5:
            MesTexto = 'Junho'
            return MesTexto
        case 6:
            MesTexto = 'Julho'
            return MesTexto
        case 7:
            MesTexto = 'Agosto'
            return MesTexto
        case 8:
            MesTexto = 'Setembro'
            return MesTexto
        case 9:
            MesTexto = 'Setembro'
            return MesTexto
        case 10:
            MesTexto = 'Outubro'
            return MesTexto
        case 11:
            MesTexto = 'Novembro'
            return MesTexto
        case 12:
            MesTexto = 'Dezembro'
            return MesTexto
        default:
            MesTexto = 'Ocorreu um erro!Volte mais tarde.'
            return MesTexto
    }
}

function zeroAEsquerda (num){
    return num  >= 10 ? num : `0${num}`;
}

function criaData(data){
    const semanaDia = data.getDay();
    const mesNumero = data.getMonth();
    
    const SemanaTexto = getDiaDaSemanaTexto(semanaDia)
    const MesTexto = getNomeMes(mesNumero)

    return `${SemanaTexto}, ${data.getDate()} de ${MesTexto} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

dataHora.innerHTML = criaData(data); */


const h1 = document.querySelector ('.container h1');
const data = new Date ();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle:'full'})
