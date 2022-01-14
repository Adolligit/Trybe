const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('O método localStorage.getItem é chamado ao executar getSavedCartItems()', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('É chamado localStorage.getItem("cartItems") ao executar getSavedCartItems()', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith("cartItems");
  });
});
