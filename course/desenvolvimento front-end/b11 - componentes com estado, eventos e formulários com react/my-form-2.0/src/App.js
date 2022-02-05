import React from 'react';
import './App.css';
// import Informacoes from './components/Informacoes/Informacoes';
import PersonData from './components/PersonData/PersonData';
import ProfessionalXp from './components/ProfessionalXp/ProfessionalXp';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      form:{},
      div: [],
    }

    this.getChildState = this.getChildState.bind(this);
    this.divToData = this.divToData.bind(this);
  }

  getChildState(stateChild){
    this.setState({
      form: {
        ...this.state.form,
        ...stateChild,
      }
    });
  }

  divToData(){
    this.setState({
      div: [...Object.values(this.state.form)]
    })
  }

  render(){
    return (
      <>
        <PersonData returnState={this.getChildState}/>
        <ProfessionalXp returnState={this.getChildState}/>
        <input onClick={this.divToData} type="button" value="Enviar" id="butao"/>
        <fieldset>
          { this.state.div.map((e, index) => (<div key={`${e}, ${index}`}>{e}</div>)) /* gambiarra nas keys*/ }
        </fieldset>
      </>
    );
  }
}

export default App;
