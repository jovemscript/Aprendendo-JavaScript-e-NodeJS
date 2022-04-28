const num = Number(prompt("Digite um numero:"));
const texto = document.getElementById("numero");
const raizQ = (num);


texto.innerHTML = `<h1>certo, seu numero é: ${num} </h1>`;
texto.innerHTML += `<p>A raiz quadrada de ${num} é obviamente: ${num**2}</p>`;
texto.innerHTML += `<p>o numero ${num} é inteito? ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>o numero ${num} é um NaN? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>o numero ${num} arredondado para baixo é: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>o numero ${num} arredondado para cima é: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>o numero ${num} com duas casas decimais ficaria: ${num.toFixed(2)}</p>`;

