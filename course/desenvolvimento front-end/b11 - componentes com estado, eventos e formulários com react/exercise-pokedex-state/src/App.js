import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterPokemons: pokemons,
    }
    this.filtering = this.filtering.bind(this);
  };

  filtering(type){
    const { filterPokemons } = this.state;
    const forType = pokemons.filter((pokemon) => pokemon.type === type);
    
    // console.log(forType);
    this.setState({ filterPokemons: forType });
  }

  render() {
    const { filterPokemons } = this.state;

    return (
        <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={ filterPokemons } />
        { 
          pokemons
            .map(({ id, type }) => {
              return <button onClick={ () => this.filtering(type) } key={ id }> { type } </button>
            }) 
        }
      </div>
    );
  }
}

export default App;