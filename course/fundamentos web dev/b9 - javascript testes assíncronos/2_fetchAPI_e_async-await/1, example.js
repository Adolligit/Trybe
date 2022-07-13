const fetch = require('node-fetch');

async function fetchJoke() {
	const url = 'https://api.chucknorris.io/jokes/random?category=dev';

	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.value);
	} catch (error) {
		console.log(`Algo deu errado :( \n${error}`);
	}
}

fetchJoke();
