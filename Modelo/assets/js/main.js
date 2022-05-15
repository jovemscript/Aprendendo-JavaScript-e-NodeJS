//para o envio do formulario para manter os dados
const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false); 
        return;
    }
    
    if (!altura) {
        setResultado("Altura Invalida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}  (${nivelImc})`;

    setResultado(msg, true);


    //segue o código
});

  function getImc (peso, altura) {
    const imc = peso/altura**2;
    return imc.toFixed(2);

}

  function getNivelImc (imc){
    const nivel = ["Abaixo do peso", "Peso Normal", " Sobrepeso", "Obesidade Grai 1", "Obesidade Grai 2", "Obesidade Grai 3"];
  
    if(imc >= 39.9) {
      return nivel [5]
    }

    if(imc >= 34.9) {
      return nivel [4]
    }

    if(imc >= 29.9) {
      return nivel [3]
    }

    if(imc >= 24.9) {
      return nivel [2]
    }

    if(imc >= 18.5) {
      return nivel [1]
    }

    if(imc < 18.5) {
      return nivel [0]
    }
  }

  function criaP (){
    const p = document.createElement('p');
    return p;
}

  function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
      p.classList.add('p-resultado')
    }  
      else {
      p.classList.add('p-bad')
    }

   
    p.innerHTML = msg
    resultado.appendChild(p)



  }
