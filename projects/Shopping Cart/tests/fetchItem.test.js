require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function');
  })

  it('Ao executar fetchItem("MLB1615760527") a função fetch será chamada', () => {
    expect.assertions(1);
    fetchItem('MLB1516760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch("MLB1615760527") utiliza o endpoint "items/MLB1615760527"', () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    
    expect.assertions(1);
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url)
  });
  
  it('O retorno de fetchItem("MLB1615760527") tem uma estrutura igual a item.js', async () => {
    const typeReturn = typeof await fetchItem("MLB1615760527");

    expect.assertions(1);
    expect(typeof item).toEqual(typeReturn);
  });

  it('Executando fetchItem() retornar a mensagem de erro: "You must provide an url"', async () => {
    expect.assertions(1);
    expect(await fetchItem()).toEqual(new Error("You must provide an url"));
  });
});
