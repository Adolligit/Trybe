import React from 'react';
import Cargo from './Cargo';
import Curriculo from './Curriculo';
import DescricaoCargo from './DescricaoCargo';

class ProfessionalXp extends React.Component {
  constructor(){
    super();
    this.state = {
      resumoCurriculo: "",
      cargo: "",
      descricaoCargo: "",
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }){
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render(){
    const { resumoCurriculo, cargo, descricaoCargo } = this.state;

    return(
      <fieldset>
        <h1>Experiência profissional</h1>
        <Curriculo funcChangeState={this.changeState} getCurrentState={resumoCurriculo}/>
        <Cargo funcChangeState={this.changeState} getCurrentState={cargo}/>
        <DescricaoCargo funcChangeState={this.changeState} getCurrentState={descricaoCargo}/>
      </fieldset>
    );
  }
}

export default ProfessionalXp;