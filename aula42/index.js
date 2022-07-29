const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){

        if (typeof entrada !== 'number'){
          return('Não é um número')
        }
        else if (entrada % 5 == 0 && entrada % 3 == 0){
          return("FizzBuzz")
        }

        else if (entrada % 5 !== 0 && entrada % 3 !== 0)
          return(entrada)

        else if (entrada % 3 == 0){
          return('Fizz')
        } 

        else (entrada % 5 == 0)
          return("Buzz")
        
}