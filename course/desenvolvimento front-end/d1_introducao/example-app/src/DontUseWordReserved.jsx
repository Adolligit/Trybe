import React from 'react';
class DontUseWordReserved extends React.Component {
  Meliante(){
    return (
      <>
        <h1>Adelson</h1>
        <p>i'm 23 old, my name's Adelson Lima and i develop software to web</p>
      </>
    );
  }
  render() {
    return (this.Meliante());
  }
}

export default DontUseWordReserved;