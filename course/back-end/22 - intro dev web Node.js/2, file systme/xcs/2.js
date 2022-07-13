const one = require('./1');

const x = 3;
const arr = [];

for (let index = 0; index < 3; index++) {
  const random = Math.floor(Math.random() * 100);

  arr.push(random);
}

one.main(...arr)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));