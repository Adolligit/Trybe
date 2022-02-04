import React from 'react';

class TextArea extends React.Component {
  render() {
    const { funcChangeState, getCurrentState } = this.props;
    return(
      <textarea name="resumoCurriculo" value={ getCurrentState } onChange={ funcChangeState } required/>
    );
  }
}

export default TextArea;