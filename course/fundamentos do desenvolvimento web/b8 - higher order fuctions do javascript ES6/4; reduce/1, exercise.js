const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function sum(array){
  return array.reduce((evens, number) => (number % 2 == 0) ? evens + number : evens);
}

console.log(sum(numbers));