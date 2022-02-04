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
      // para que CSS se você tem a tag  <br />? (risos)
      <fieldset>
        <h1>Dados pessoais</h1>
        <Name currentState={name} changeState={this.changeState}/> <br />
        <Email currentState={email} changeState={this.changeState}/> <br />
        <CPF currentState={cpf} changeState={this.changeState}/> <br />
        <Endereco currentState={endereco} changeState={this.changeState}/> <br />
        <Estado currentState={estado} changeState={this.changeState}/> <br />
        <Cidade currentState={cidade} changeState={this.changeState}/> <br />
        <Tipo currentState={tipo} changeState={this.changeState}/> <br />
      </fieldset>
    );
  }
}

export default PersonData;