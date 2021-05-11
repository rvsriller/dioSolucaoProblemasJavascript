/*

    Nesse algoritmo você deverá descobrir se um conjunto de palavras é bom ou ruim. 
    Por definição, um conjunto é bom quando nenhuma palavra desse conjunto é um prefixo de outra palavra. 
    Caso contrário, é considerado um conjunto ruim.

    Por exemplo, {dbc, dae, dbcde} é um conjunto ruim, pois dbc é um prefixo de dbcde. 
    Quando duas palavras são idênticas, definimos como uma sendo prefixo da outra.

*/

let N;
const limit = Math.pow(10, 5);
let palavras, eRuim;

while (true) {
  
  palavras = [];
  N = parseInt(gets()); //Extrai as palavras

  //Flag ponto de parada do algoritmo
  if (N === 0 || (N < 1 || N > limit)) break; //Se N for igual a 0, vazio, menor que um ou maior que o limite, o laço de repetição é interrompido

  for (let i = 0; i < N; i++) {
    palavra = gets();
    if (!(/^[a-z]{1,100}$/g.test(palavra))) continue;
    palavras = [...palavras, palavra]
  }

  eRuim = palavras.some((palavraAtual, i, palavra) => {
    
    const pattern = new RegExp(`^(${palavraAtual}).+`)

    for (const word of palavra) {
      if (pattern.test(word)) return true
    }

    const same = palavra.reduce((total, w) => {
      total += w === palavraAtual ? 1 : 0
      return total
    }, 0)

    return same > 1;
    
  })
  
  console.log(eRuim ? 'Conjunto Ruim' : 'Conjunto Bom');
}