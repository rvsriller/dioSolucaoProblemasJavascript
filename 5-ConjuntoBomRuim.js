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
