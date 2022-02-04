import React from 'react';

class Tipo extends React.Component {
  render(){
    const { currentState, changeState } = this.props;

    // if(currentState.length > 40) alert("O limite máximo é 40 caractéres");

    return(
      <label> Tipo
        <input onChange={changeState} type="radio" name="tipo" value={currentState.toUpperCase()} required/>
      </label>
    );
  }
}

export default Tipo;