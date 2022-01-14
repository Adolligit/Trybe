require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('fecthProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it('A função fetch foi chamada ao executar fetchProducts("computador") ', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('É utilizado o endpoint "search?q=computador" ao executar fetchProducts("computador")', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('A estrutura do retorno de fetchProducts("computador") é igual a computadorSearch', async () => {
    const structureReturn = (typeof fetchProducts('computador'));
    expect(structureReturn).toEqual(typeof computadorSearch);
  });

  it('fetchProducts() retorna a mensagem de erro "You must provide an url"', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
