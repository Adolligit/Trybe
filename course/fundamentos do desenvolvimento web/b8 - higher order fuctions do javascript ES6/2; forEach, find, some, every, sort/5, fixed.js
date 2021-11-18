const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => {
  return array.some((element) => element === name);
}

console.log(hasName(names, 'Ana'));