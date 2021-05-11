/*
    escrever um programa que omita a parte repetida, de modo que as palavras sejam pronunciadas como deveriam ser.
    Escreva um programa que, dada uma palavra errada, a mesma seja corrigida.

*/


let entrada = '';
let limite = 0;
let resultado;


while (true) {//Executa enquanto a condição é verdadeira!
  entrada = gets() //Extrai os dados de entrada

  //Restrição: Se entrada nula ou vazia ou maior que 30 caracteres, o laço é interrompido
  if (!entrada || entrada === '' || entrada.length > 30) break;

  //O limite é o tamanho da entrada / 2 negativo
  limite = -Math.floor(entrada.length / 2)

  //Armazena o resultado final
  resultado = []

  for (let i = -1; i >= limite; i--) { //Percorre cada elemento até que o i seja maior ou igual ao limite
    entrada.slice(i) === entrada.slice(i * 2, i) && resultado.push(entrada.slice(0, i))
  }

  //Verifica se a enntrada tem tamanho 0
  if (!resultado || resultado.length === 0) {
    console.log(entrada)
    continue;
  }

  //Ordena o resultado final
  for (const resultadoFinal of resultado.sort()) {
    console.log(resultadoFinal)
  }
}