function main(...arr) {
  return new Promise((resolve, reject) => {
    let sum = 0;

    for (value of arr) {
      if (typeof value !== 'number') reject(new Error('Informe apenas números'));
      sum += value;
    }
    const lastValue = arr.slice(arr.lastIndexOf());
    const result = (sum - lastValue) * lastValue;
  
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result)
  });
}

module.exports = { main };