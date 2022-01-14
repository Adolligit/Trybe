const fetchProducts = async (query) => {
  try {
    const searchProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return await searchProduct.json();
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
