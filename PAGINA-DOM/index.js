let btn = document.querySelector('.button')

btn.addEventListener('click', function (e) {
   
    let cores = document.querySelector('#cor').value
    document.querySelector('body').style.background = cores

    let nome = document.querySelector('#nomeUsuario').value
    document.querySelector('p').innerText =` Olá ${nome} seja bem vindo a esta pagina!` 

    e.preventDefault()
});







