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
		this.withoutFilter = this.withoutFilter.bind(this);
		this.previousPokemon = this.previousPokemon.bind(this);
	}
	
	nextPokemon() {
		const { indexPokemon, powerfulAnimal } = this.state;

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
		});
	}

	withoutFilter(){
		const { pokemons } = this.props;
		
		this.setState({
			indexPokemon: 0,
			powerfulAnimal: pokemons 
		});
	}
	
	render() {
		const { pokemons } = this.props;
		const { indexPokemon, powerfulAnimal } = this.state;
		const pokemonsTypes = [...new Set(pokemons.map((pokemon) => pokemon.type))] // https://www.delftstack.com/pt/howto/javascript/javascript-remove-duplicates-from-an-array/

		return (
			<>
				<div className="pokedex">
					<button onClick={this.previousPokemon}>Anterior</button>
					<Pokemon pokemon={ powerfulAnimal[indexPokemon] }/>
					<button onClick={this.nextPokemon}>Próximo</button>
				</div>
				<div>
					{
						pokemonsTypes.map((type) => 
							<button onClick={ () => this.filtering(type) } key={ type }> { type } </button>
							) 
						}
						<button onClick={ this.withoutFilter }>Tirar filtro</button>
				</div>
			</>
		);
	}
}

export default Pokedex;