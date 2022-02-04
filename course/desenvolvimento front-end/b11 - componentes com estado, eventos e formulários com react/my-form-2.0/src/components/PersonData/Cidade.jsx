import React from 'react';

class Cidade extends React.Component {
  render(){
    const { currentState, changeState } = this.props;

    if(currentState.length > 40) alert("O limite máximo é 40 caractéres");

    return(
      <label> Nome completo
        <input onChange={changeState} type="text" name="name" value={currentState.toUpperCase()} required/>
      </label>
    );
  }
}

export default Cidade;