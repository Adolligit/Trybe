import React, { Component } from 'react';

export default class ReactClass extends Component {
  BotaNaTelaIssoAqui() {
    return (
      <>
        <h1>React: segundo componente criado na vida</h1>
        <p>Era para ser o primeiro componente React,  na tentativa mesmo. Mas virou o segundo</p>
      </>
    );
  }

  render() {
    return (
      <this.BotaNaTelaIssoAqui />
    );
  }
}