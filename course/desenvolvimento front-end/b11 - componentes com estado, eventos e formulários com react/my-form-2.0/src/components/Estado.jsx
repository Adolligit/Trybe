import React from 'react';
import estadosBrasileiros from './estadosBrasileiros'

class Estado extends React.Component {
  render(){
    const { currentState, changeState } = this.props;
    
    if(currentState.length > 40) alert("O limite máximo é 40 caractéres");
    
  

    return(
      <label> Estado
        <select name="estado" value={currentState} onChange={changeState}>
        {
          estadosBrasileiros.map((estado) => {
            const value = Object.values(estado);
            return <option key={value} value={value} >{ value }</option>
          }
          )
        }
        </select>
      </label>
    );
  }
}

export default Estado;