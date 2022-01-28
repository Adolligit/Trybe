import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.imprimeNaTela = this.imprimeNaTela.bind(this);
  }

  imprimeNaTela(number){
    switch(number){
      case 1: console.log('Booom diaaaa!'); break;
      case 2: console.log('Taaaarde!'); break;
      case 3: console.log('Buenas noites'); break;
      default: console.log('Numero inválido'); break;
    }
  }

  render() {   
    return (
      <>
        <button onClick={ () => { this.imprimeNaTela(1) } } value="este é o valor">Primerio</button>
        <button onClick={ () => { this.imprimeNaTela(2) }  }>Segundo</button>
        <button onClick={ () => { this.imprimeNaTela(3) }  }>Terceiro</button>
      </>
    )
  }
}

export default App;
