const fetchItem = async (itemId) => {
  try {
    const item = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    const itemJson = await item.json();
    return itemJson;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
