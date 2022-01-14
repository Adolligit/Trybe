const saveCartItems = (param) => {
  // alteração para passar no test
  const value = localStorage.cartItems ? `${localStorage.cartItems}, ${param}` : param;
  localStorage.setItem('cartItems', value);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}