function hydrate(string) {
	let qntCup = 0;
	let wrdCup = "";

	string.split(/[, ]+[e ]+/).forEach((x) => {
		let int = parseInt(x);

		if (isNaN(int))
			throw "Error 01: Você não informou a quantidade de algum dos itens.";

		qntCup += int;
	});

	wrdCup = qntCup > 1 ? "copos" : "copo";

	return `${qntCup} ${wrdCup} de água`;
}

module.exports = hydrate;
