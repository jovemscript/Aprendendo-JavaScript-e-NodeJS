const data = new Date('2019-05-12 10:45:40');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth())+1;//mês começa no zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('Dia da Semana', data.getDay());//0=domingo, 6=sabado
console.log (data.toString());