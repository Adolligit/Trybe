import React from 'react';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Endereco from './Endereco';
import Cidade from './Cidade';
import Estado from './Estado';
import Tipo from './Tipo';

class PersonData extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      cpf: "",
      endereco: "",
      estado: "",
      cidade: "",
      tipo: "",
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }){
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render(){
    const { name, email, cpf, endereco, cidade, estado, tipo } = this.state;

    return(
      <fieldset> Dados pessoais
        <Name currentState={name} changeState={this.changeState}/>
        <Email currentState={email} changeState={this.changeState}/>
        <CPF currentState={cpf} changeState={this.changeState}/>
        <Endereco currentState={endereco} changeState={this.changeState}/>
        <Estado currentState={estado} changeState={this.changeState}/>
        <Cidade currentState={cidade} changeState={this.changeState}/>
        <Tipo currentState={tipo} changeState={this.changeState}/>
      </fieldset>
    );
  }
}

export default PersonData;