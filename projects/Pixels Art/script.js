createBoard(localStorage.getItem('sizeBoard') != null ? localStorage.getItem('sizeBoard') : 5);

colorRandom();

document.addEventListener('click', (action) => {
  let element = action.target;

  if (element.className === 'color') {
    let childrenElementParent = element.parentNode.children;
    for (let i = 0; i < childrenElementParent.length; i += 1) {
      childrenElementParent[i].classList.remove('selected');
    }
    element.className += ' selected';
  }

  if (element.className === 'pixel') {
    let colorSelected = document.querySelector('.selected');
    element.style.backgroundColor =
      window.getComputedStyle(colorSelected).backgroundColor;
  }

  if (element.id === 'clear-board') clearBoard();

  if (Object.is(element.id, 'generate-board')) {
    let inputValue = document.getElementById('board-size').value;

    if (inputValue === '') alert('Board inválido!');
    else if (inputValue < 5) inputValue = 5;
    else if (inputValue > 50) inputValue = 50;

    if (inputValue > 0 && inputValue < 51) {
      createBoard(inputValue);
      clearBoard();
      localStorage.setItem('sizeBoard', inputValue);
    }
  }
});

function clearBoard(){
    let vectorPixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < vectorPixel.length; i += 1) {
      vectorPixel[i].style.backgroundColor = 'white';
    }
}

function createBoard(size) {
  let div, li;
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';

  for (let i = 0; i < size; i += 1) {
    li = document.createElement('li');
    for (let j = 0; j < size; j += 1) {
      div = document.createElement('div'); 
      pixelBoard.appendChild(li).appendChild(div).className = 'pixel';
    }
  }
}

function colorRandom(){
    let r, g, b, c1, c2, c3;
    let colors = document.getElementById('color-palette').children;
    for (let i = 1; i < colors.length; i += 1){
        
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        
        colors[i].style.backgroundColor = `rgb(${r},${g},${r})`;

        if(i === 2){
            c1 = document.getElementsByClassName('color')[i].style.backgroundColor;
            c2 = document.getElementsByClassName('color')[i-1].style.backgroundColor;
            if(c1 === c2) i = -1;
        }else if (i === 3){
            c1 = document.getElementsByClassName('color')[i].style.backgroundColor;
            c2 = document.getElementsByClassName('color')[i-1].style.backgroundColor;
            c3 = document.getElementsByClassName('color')[i-2].style.backgroundColor;
            if(c1 === c2 || c1 === c3) i = -1;
        }

    }
}
