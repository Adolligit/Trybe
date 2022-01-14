const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('O método localStorage.setItem é chamado ao executar saveCartItems(value) |  string value = "<ol><li>Item</li></ol>"', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  
  it('Executando saveCartItems(value), o chamado o localStorage.setItem("cartItems",value) | string value = "<ol><li>Item</li></ol>"', () => {
    const value = "<ol><li>Item</li></ol>";
    saveCartItems(value);
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems", value);
  });
});
