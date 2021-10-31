const sum = require("../src/Sum");

describe("Testando função sum", () => {
	test("O retorno deve ser 9 quando função receber (4,5)", () => {
		expect(9).toBe(sum(4, 5));
	});

	test("O retorno deve ser 0 quando função receber (0,0)", () => {
		expect(0).toBe(sum(0, 0));
	});

	test("A função deve lançar um erro quando não receber valores numéricos", () => {
		expect(() => {
			sum(4, "5");
		}).toThrow("parameters must be numbers");
	});
});
