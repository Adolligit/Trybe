const myRemove = require("../src/MyRemove");

describe("myRemove(array, item) retorna um array se o item informado", () => {
	it("Retornar o seguinte vetor: [ 1, 2, 4 ]", () => {
		expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
	});

	it("Não retornar o seguinte vetor: [1, 2, 3, 4]", () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});

	it("Retornar o seguinte vetor: [1, 2, 3, 4]", () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});
