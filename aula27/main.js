//sintaxe: (condição) ? valor para True : valor para False

const pontosUsuario = 800;
const nivelUsuario = pontosUsuario >= 1000 ? "Usuário VIP" : "Usuário Comum";

const corUsuario = null;
const corPadrao = corUsuario || 'Branca';

console.log(nivelUsuario, corPadrao)

//if(pontosUsuario >= 1000){
  //  console.log("Usuario VIP")
//}
//else{
  //  console.log("Usua b rio Comum")
//}