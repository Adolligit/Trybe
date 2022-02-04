import React from 'react';

class Endereco extends React.Component {
  render(){
    const { currentState, changeState } = this.props;

    if(currentState.length > 200) alert("O limite máximo é de 200 caractéres");

    return(
      <label> Endereço
        <input 
          onChange={changeState} 
          type="text" 
          name="endereco" 
          value={currentState.replace(/[^a-zA-z ]/g, "")} // https://qastack.com.br/programming/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
        required/>
      </label>
    );
  }
}

export default Endereco;