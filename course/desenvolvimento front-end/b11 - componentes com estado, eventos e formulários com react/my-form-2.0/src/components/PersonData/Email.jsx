import React from 'react';

class Email extends React.Component {
  render(){
    const { currentState, changeState } = this.props;

    if(currentState.length > 50) alert("O limite máximo é 50 caractéres");

    return(
      <label> Email
        <input 
          onChange={changeState} 
          type="email" 
          name="email" 
          value={currentState} 
          required/>
      </label>
    );
  }
}

export default Email;