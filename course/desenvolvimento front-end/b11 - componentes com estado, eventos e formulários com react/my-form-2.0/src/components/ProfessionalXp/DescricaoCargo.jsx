import React from 'react';

class DescricaoCargo extends React.Component {
  render() {
    const { funcChangeState, getCurrentState } = this.props;

    if (getCurrentState.length > 500) alert(`Você inseriu ${getCurrentState.length} caractéres, mas o máximo é 500`);

    return(
      <>
        <p>Descricão do Cargo</p>
        <textarea 
          name="descricaoCargo" 
          value={ getCurrentState } 
          onChange={ funcChangeState } 
        required/>
      </>
      );
  }
}

export default DescricaoCargo;