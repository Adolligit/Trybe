const challenges = require("../src/Challenges");
const { encode } = challenges;
const { decode } = challenges;

describe("Ambas as funções, encode e decode", () => {
	test("Verificando se encode e decode são funções", () => {
		expect(typeof encode).toBe("function");
		expect(typeof decode).toBe("function");
	});

	test("Quantificando a string recebida pelas funções", () => {
    expect(encode("excepcional")).toHaveLength(11);
    expect(decode("tryb2")).toHaveLength(5);
  });
});

describe("Somente a função encode", () => {
	test('Covertendo as vogais na sequência numérica 12345', () => {
		expect(encode("aeiou")).toEqual("12345");
	});

	test("Retorne '1d2ls4n' ao receber 'adelson' como parâmetro", () => {
		expect(encode("adelson")).toMatch("1d2ls4n");
	});
});

describe("Somente a função decode", () => {
	test("Convertendo a sequência numérica '12345' em vogais", () => {
		expect(decode("12345")).toEqual("aeiou");
	});

	test("Retorne 'adelson' ao receber '1d2ls4n' como parâmetro", () => {
		expect(decode("1d2ls4n")).toMatch("adelson");
	});
});
