/*
    Desafio 1 - Contagem Repetida De Números

    Neste desafio sua tarefa será ler vários números e 
    em seguida dizer quantas vezes cada número aparece, ou seja,
    deve-se escrever cada um dos valores distintos que aparecem 
    na entrada por ordem crescente de valor.

    A primeira linha de entrada contem um único inteiro N, 
    que indica a quantidade de valores que serão lidos 
    para X (1 ≤ N ≤ 2000) logo em seguida. Com certeza, 
    cada número não aparecerá mais do que 20 vezes na entrada de dados.

    Exemplo
    Entrada: [7, 8, 10, 8, 260, 4, 10, 10]

    Saída:
    4 aparece 1 vez(es)
    8 aparece 2 vez(es)
    10 aparece 3 vez(es)
    260 aparece 1 vez(es)
*/


//Recebe a quantidade de casos a serem processados
let casosN = parseInt(gets());

//Objeto definido para guardar informações dos números e suas contagens
let numeros = {};

//Variável definida para receber cada número e ser utilizado nas condições lógicas
let numeroAtual;

//Iteração de casos e leitura dos número
for (let i = 0; i < casosN; i++) {
    numeroAtual = gets(); //Recebe o número atual

    /*Se o número for indefinido no objeto NUMS, esse número deverá ser salvo com contador 1
      Senão, seu contador é incrementado sempre que for encontrado.
    */
    if(typeof numeros[numeroAtual] === 'undefined')
        numeros[numeroAtual] = {valor: parseInt(numeroAtual), cnt:  1};
    else
        numeros[numeroAtual].cnt++; //Incrementando o contador
}

//Iteração para exibir a quantidade de vezes que o número foi encontrado.
for(var [chave, numero] of Object.entries(numeros)){
    console.log(`${numero.valor} aparece ${numero.cnt} vez(es)`);
}