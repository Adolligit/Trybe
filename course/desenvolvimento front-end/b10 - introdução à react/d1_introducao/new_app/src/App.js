import React, { Component } from 'react';
import './App.css';

import HelloWorld from './HelloWorld';
import ComponenteQlQr from './ComponenteQlQr';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HelloWorld/>,
        <ComponenteQlQr />
      </React.Fragment>
    );
  }
}