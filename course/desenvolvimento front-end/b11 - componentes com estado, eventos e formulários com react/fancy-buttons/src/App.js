import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberInterval: 0,
    }
    this.setInterval = this.setInterval.bind(this);
  }

  setInterval() {
    this.setState({
      numberInterval: this.state.numberInterval + 1
    });
  }

  render() {   
    return (
        <button onClick={ this.setInterval } value="este é o valor">{this.state.numberInterval}</button>
    )
  }
}

export default App;
