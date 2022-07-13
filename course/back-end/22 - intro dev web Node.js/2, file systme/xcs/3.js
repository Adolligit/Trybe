const { main } = require('./1');

const x = 3;
const arr = [];

for (let index = 0; index < x; index++) {
  const random = Math.floor(Math.random() * 100);
  arr.push(random);
}

async function print() {
  try {
    const result = await main(...arr);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

print();