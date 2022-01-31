import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			indexPokemon: 0,
		};

		this.nextPokemon = this.nextPokemon.bind(this);
		this.previousPokemon = this.previousPokemon.bind(this);
	}

	nextPokemon() {
		const { indexPokemon } = this.state;
		const { pokemons } = this.props;

		this.setState({
			indexPokemon: (indexPokemon < pokemons.length - 1) ? indexPokemon + 1 : 0,
		});
	}

    previousPokemon() {
		const { indexPokemon } = this.state;
		const { pokemons: { length } } = this.props; 

		this.setState({
			indexPokemon: (indexPokemon > 0) ? indexPokemon - 1 : length - 1 
		});
	}


	render() {
		const { pokemons } = this.props;
		const { indexPokemon } = this.state;

		return (
			<div className="pokedex">
				<button onClick={this.previousPokemon}>Anterior</button>
				<Pokemon pokemon={pokemons[indexPokemon]} />
				<button onClick={this.nextPokemon}>Próximo</button>
  		</div>
		);
	}
}

export default Pokedex;
