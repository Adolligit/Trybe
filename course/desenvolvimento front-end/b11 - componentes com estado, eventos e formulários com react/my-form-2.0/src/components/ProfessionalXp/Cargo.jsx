import React from 'react';

class Cargo extends React.Component {
  constructor(){
    super();
    this.state = { alertView: 1 }
  }

  render(){
    const { funcChangeState, getCurrentState } = this.props;

    if (getCurrentState.length > 40) alert(`Você inseriu ${getCurrentState.length} caractéres, mas o máximo é 40`);

    const alertMessage = () => {
      if (this.state.alertView) {
        alert("Preencha com cuidado esta informação.");
        this.setState({ alertView : 0})
      }
    }

    return(
      <>
        <p>Cargo</p>
        <textarea 
          onMouseEnter={alertMessage} 
          onChange={funcChangeState} 
          name="cargo" 
          value={getCurrentState} 
        required/>
      </>
    );
  }
}

export default Cargo;