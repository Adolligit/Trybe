import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			indexPokemon: 0,
			powerfulAnimal: props.pokemons
		};
		
		this.nextPokemon = this.nextPokemon.bind(this);
		this.previousPokemon = this.previousPokemon.bind(this);
	}
	
	nextPokemon() {
		const { indexPokemon, powerfulAnimal } = this.state;
		const { pokemons } = this.props;

		this.setState({
			indexPokemon: (indexPokemon < powerfulAnimal.length - 1) ? indexPokemon + 1 : 0,
		});
	}

    previousPokemon() {
		const { indexPokemon, powerfulAnimal: { length } } = this.state;

		this.setState({
			indexPokemon: (indexPokemon > 0) ? indexPokemon - 1 : length - 1 
		});
	}

	filtering(type){
		const { pokemons } = this.props;
		const filterType = pokemons.filter((pokemon) => pokemon.type === type);

		this.setState({
			indexPokemon: 0,
			powerfulAnimal: filterType 
		})
		console.log(this.state.powerfulAnimal);
	}

	render() {
		const { pokemons } = this.props;
		const { indexPokemon, powerfulAnimal } = this.state;
	
		return (
			<>
				<div className="pokedex">
					<button onClick={this.previousPokemon}>Anterior</button>
					<Pokemon pokemon={ powerfulAnimal[indexPokemon] }/>
					<button onClick={this.nextPokemon}>Próximo</button>
				</div>
				<div>
					{ 
						pokemons
						.map(({ id, type }) => 
							<button onClick={ () => this.filtering(type) } key={ id }> { type } </button>
						) 
					}
				</div>
			</>
		);
	}
}

export default Pokedex;
