import React from 'react';

class Input extends React.Component {
  render(){
    const { name, handleFunction, handleState } = this.props;

    return (
      <input onChange={ handleFunction } name={ name } type="text" value={ handleState }/>
    );
  }
}

export default Input;