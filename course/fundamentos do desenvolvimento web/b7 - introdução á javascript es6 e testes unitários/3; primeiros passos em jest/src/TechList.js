function techList(array, personName) {
  if (array.length === 0) return "Vazio!";
  return array
  .sort()
  .map((element) => element = {
    tech: element,
    name: personName,
  });
}

module.exports = techList;