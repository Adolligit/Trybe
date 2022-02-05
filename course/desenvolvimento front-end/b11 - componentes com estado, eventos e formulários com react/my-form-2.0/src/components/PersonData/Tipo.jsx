import React from 'react';

class Tipo extends React.Component {
  render(){
    const { changeState } = this.props;

    return(
      <label>
        Tipo: 
        <label>
          <input 
            onClick={changeState} 
            type="radio" 
            name="tipo" 
            value="Casa" 
          required/>
        Casa</label>
        <label> 
          <input 
            onClick={changeState} 
            type="radio" 
            name="tipo" 
            value="Apartamento"
          required/>
        Apartamento </label>
      </label>
    );
  }
}

export default Tipo;