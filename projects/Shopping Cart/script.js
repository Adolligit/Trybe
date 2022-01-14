// const SELECT_ITEM = null;
// const SEARCH_PRODUCT = null;
const cartItems = document.getElementsByClassName('cart__items')[0];

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function totalPrice(priceProduct) {
  const priceCurrent = Number(document.getElementsByClassName('total-price')[0].innerText);
  const total = priceProduct + priceCurrent;
  document.getElementsByClassName('total-price')[0].innerText = total;
}

function cartItemClickListener({ target }) {
  const { innerText } = target; // lint fix: desestruturação

  const SKU = innerText.split(' ')[1];
  const priceCartItem = -innerText.substring(innerText.indexOf('$') + 1);
  totalPrice(priceCartItem);

  const storage = localStorage.cartItems.replace(`${SKU}`, '');
  localStorage.setItem('cartItems', storage);
  target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function waitingResponse() {
  const itemsElement = document.getElementsByClassName('items')[0];
  const loadingElement = document.createElement('h1');

  loadingElement.className = 'loading';
  loadingElement.innerText = 'carregando...';
  itemsElement.appendChild(loadingElement);
}

async function getProductByName(nameProduct) {
  const { results } = await fetchProducts(nameProduct);
  
  waitingResponse();
  
  results.forEach(({ id, title, thumbnail }) => {
    const aux = createProductItemElement({ sku: [id], name: [title], image: [thumbnail] });
    
    document.getElementsByClassName('items')[0].appendChild(aux);
  });

  setTimeout(() => document.getElementsByClassName('loading')[0].remove(), 1000);
}

async function addItemAtCart(sku) {
  if (sku) {
    const { id, title, price } = await fetchItem(sku);
    const element = createCartItemElement({ sku: id, name: title, salePrice: price });
    
    cartItems.appendChild(element);
    totalPrice(price);
  } 
}

function buttonAddEvent() {
  const addButtons = document.querySelectorAll('.item__add');

  addButtons.forEach((element) => {
    element.addEventListener('click', (pointer) => {
      const parent = pointer.target.parentNode;
      const sku = getSkuFromProductItem(parent);

      saveCartItems(sku);
      addItemAtCart(sku);
    });
  });
}

function removeAllItemsCart() {
  document.getElementsByClassName('empty-cart')[0].addEventListener('click', () => {
    cartItems.innerText = '';
    localStorage.clear();
  });
}

window.onload = () => {
  getProductByName('computador').then(buttonAddEvent);
  removeAllItemsCart();
  if (getSavedCartItems()) {
    getSavedCartItems().split(', ')
      .forEach((sku) => {
        addItemAtCart(sku);
      });
  }
};
