// Desafio 1
function compareTrue(x, y) {
  return (x && y) === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringUnknown) {
  return stringUnknown.split(' ');
}

// Desafio 4
function concatName(arrayUnnown) {
  return `${arrayUnnown[arrayUnnown.length - 1]}, ${arrayUnnown[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0) points = wins * 3;
  if (ties > 0) points += ties;
  return points;
}

// Desafio 6
function highestCount(arrayBigNumb) {
  let count = 0;
  let big = arrayBigNumb[0];

  for (let i = 0; i < arrayBigNumb.length; i += 1) {
    if (big === arrayBigNumb[i]) {
      count += 1;
    } else if (big < arrayBigNumb[i]) {
      big = arrayBigNumb[i];
      i = count = 0;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) return 'os gatos trombam e o rato foge';
  else if (cat1 < cat2) return 'cat1';
  else return 'cat2';
}

// Desafio 8
function fizzBuzz(x) {
  let z = [];
  for (let y of x) {
    if ((y % 3 === 0) && (y % 5 === 0)) z.push('fizzBuzz');
    else
      if (y % 3 === 0) z.push('fizz');
      else if (y % 5 === 0) z.push('buzz');
      else z.push('bug!');
  }
  return z;
}

// Desafio 9
function encode(x) {
  let vowels = 'aeiou'.split('');
  let phrase = x.split('');
  for (let i = 0; i, i < phrase.length; i += 1) {
    for (let j = 0; j < vowels.length; j += 1) {
      if (phrase[i] === vowels[j]) {
        phrase[i] = j+1;
      }
    }
  }
  return phrase.join('');
}
function decode(x) {
  let vowels = 'aeiou'.split('');
  let codified = x.split('');
  for (let i = 0; i < codified.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (codified[i] == j + 1) {
        codified[i] = vowels[j];
      }
    }
  }
  return codified.join('');
}

// console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
