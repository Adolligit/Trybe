import React from 'react';

class TextArea extends React.Component {
  render() {
    const { funcChangeState, getCurrentState } = this.props;

    if (getCurrentState.length > 1000) alert(`Você inseriu ${getCurrentState.length} caractéres, mas o máximo é 1000`);

    return(
      <>
        <p>Resumo do currículo</p>
        <textarea 
          name="resumoCurriculo" 
          value={ getCurrentState } 
          onChange={ funcChangeState } 
        required/>
      </>
      );
  }
}

export default TextArea;