/*

    José como é o Rei, contratou o seu time para, dados a quantidade de ouro a ser recolhido em cada feudo (em kg), a lista das estradas do reino, com os respectivos comprimentos (em km) e a capacidade de carga da carruagem real (em kg), determine qual é a mínima distância que a carruagem deve percorrer para recolher todo o ouro devido.

    Entrada
    A primeira linha contém dois inteiros N e C indicando respectivamente o número de cidades e a capacidade de carga da carruagem (2 ≤ N ≤ 104 e 1 ≤ C ≤ 100). O feudo principal é identificado pelo número 1 e os outros feudos são identificadas por inteiros de 2 a N . A segunda linha contém N inteiros Ei representando a quantidade de imposto devido por cada feudo i (0 ≤ Ei ≤ 100 para 1 ≤ i ≤ N ). Cada uma das N-1 linhas seguintes contém três inteiros A , B e C , indicando que uma estrada liga o feudo A e o feudo B (1 ≤ A, B ≤ N ) e tem comprimento C (1 ≤ C ≤ 100).

    Saída
    Seu programa deve produzir uma única linha com um inteiro representando a menor distância que a carruagem real deve percorrer para recolher todo o imposto devido, em km.

*/


(() => {
    
    let input = '';
    let taxToPay;
    let routes, visited, previousRoutes;
  
    input = gets();
  
    if (!input || input === '') return false;
  
    const [nCities, cargo] = input.match(/\d+/g);
  
    taxToPay = gets().match(/\d+/g);
  
  
    
    
  
    
  
    
  
   
  
  
   
    
    
  })();