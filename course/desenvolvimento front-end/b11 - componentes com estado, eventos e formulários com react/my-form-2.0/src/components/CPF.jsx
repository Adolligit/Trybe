import React from 'react';

class CPF extends React.Component {
  render(){
    const { currentState, changeState } = this.props;

    if(currentState.length > 11) alert("O limite máximo de caractéres é 11");

    return(
      <label> CPF
        <input 
          onChange={changeState} 
          type="text" 
          name="cpf"  
          value={currentState.replace(/[a-zA-Z.-]/g, "")}
        required />
      </label>
    );
  }
}

export default CPF;