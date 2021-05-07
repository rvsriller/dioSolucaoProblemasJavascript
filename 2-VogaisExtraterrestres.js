/*

  Dado uma sequência de vogais, em um determinado alfabeto alienígena, 
  esse algoritmo contabiliza, em um texto escrito com o mesmo alfabeto, 
  quantas vogais o mesmo possui.

  Haverá diversos casos de teste. Cada caso de teste é formado por duas linhas. 
  A primeira linha informa uma palavra, formada por todas as vogais alienígenas 
  de um determinado planeta. A segunda linha contém uma frase formada por 
  letras do mesmo alfabeto. A entrada termina com fim de arquivo.


  Exemplo
  vogaisDosAliens: aeiou
  frase: o rato roeu a roupa do rei de roma

  retorno (16)
*/


let vogaisDosAliens = '' //Armazena as vogais
let frase = '' //Armazena a frase
const foraDoAlfabeto = /[^A-Z a-z 0-9 ]/g //Conjunto de alfabeto