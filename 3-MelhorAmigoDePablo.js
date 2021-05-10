
/*
  Desafio 3 - Melhor Amigo De Pablo
  

*/

let entrada = gets();
let lista = [];

function amigos(listaDeNomes) {

  //Filtra os amigos que responderam "SIM" e ordena os nomes do maior para menor
  let ganhador = listaDeNomes
    .filter(value => value.opcao === "SIM")
    .sort((a, b) => b.nome.length - a.nome.length);

  listaDeNomes.sort((a, b) => {
    if (a.opcao < b.opcao) return 1;
    if (a.opcao > b.opcao) return -1;
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
  });
}

do {
  
  let [nome, opcao] = entrada.split(" ");
  