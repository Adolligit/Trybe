// transforme a matriz em um array.
const matrix = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(matrix) {
	return matrix.reduce((acc, value) => {
		value.forEach((element) => acc.push(element));
		return acc;
	}, []);
}

console.log(flatten(matrix));
