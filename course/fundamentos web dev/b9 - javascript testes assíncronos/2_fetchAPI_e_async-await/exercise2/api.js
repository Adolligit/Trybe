const API_URL = 'https://api.coincap.io/v2/assets/';

async function getCoin(url){
  const coins = await fetch(url);
  const jsonDataCoin = await coins.json();
  return jsonDataCoin;
}

function createElement({id, symbol, priceUsd}){
  const li = document.createElement('li');
  li.innerHTML = `${id} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}`;
  document.getElementById('list-crypto').appendChild(li);
}

getCoin(API_URL).then((dataJson) => {
  dataJson.data.forEach((element) => {
    createElement(element);
  });
})