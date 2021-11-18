/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores que estão nele.
  Caso a função receba um array com valores não númericos ou vazio, retornar undefined.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
function average(array) {
  let avg = 0;

  if (!array.length) return undefined;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') return undefined;
    avg += array[i];
  }

  return Math.round((avg / array.length));
}

module.exports = average; 
