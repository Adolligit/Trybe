import React from 'react';
import TextArea from './TextArea';

class ProfessionalXp extends React.Component {
  constructor(){
    super();
    this.state = {
      resumoCurriculo: "",
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState({ target }){
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render(){
    const { textarea } = this.state;

    return(
      <TextArea funcChangeState={this.changeState} getCurrentState={textarea}/>
    );
  }
}

export default ProfessionalXp;