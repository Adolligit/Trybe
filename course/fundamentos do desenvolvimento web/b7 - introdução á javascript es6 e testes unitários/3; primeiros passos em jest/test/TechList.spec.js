const techList = require("../src/TechList.js");

console.log(techList)

describe("Testa a função techList", () => {
	it("Testa se a função techList é definida", () => {
		expect(techList).toBeDefined();
	});

	it("Retornar verdadeira ao verificar se techList é uma função", () => {
		expect(typeof techList).toBe("function");
	});

	it("Ao receber uma lista com 5 tecnologia, será retornada outra com  objetos ordenados", () => {
		expect(
			techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
		).toEqual([
			{
				tech: "CSS",
				name: "Lucas",
			},
			{
				tech: "HTML",
				name: "Lucas",
			},
			{
				tech: "JavaScript",
				name: "Lucas",
			},
			{
				tech: "Jest",
				name: "Lucas",
			},
			{
				tech: "React",
				name: "Lucas",
			},
		]);
	});

	it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
		expect(techList([], "Lucas")).toBe("Vazio!");
	});
});

module.exports = techList;
