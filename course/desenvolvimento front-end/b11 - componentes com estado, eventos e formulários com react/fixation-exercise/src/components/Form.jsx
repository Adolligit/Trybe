import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selecao: "",
      first_name: "",
      last_name: "",
      description: "",
      verificado: false,
    }

    this.capText = this.capText.bind(this);
  }

  capText({ target }){
    const { value, name, type, checked } = target;

    this.setState({
      [name]: (type !== "checkbox") ? value : checked
    });
  }

  render(){
    const { selecao, first_name, last_name, description, value } = this.state; 
    return(
       <form action="">
         <br />
         <select onChange={this.capText} name="selecao" value={ selecao }>
           <option value="item1">Só tem esse</option>
           <option value="item2">mais um</option>
           <option value="item3">último</option>
         </select>
         <br />
         <input onChange={this.capText} name="first_name" type="text" value={ first_name }/>
         <br />
         <input onChange={this.capText} name="last_name" type="text" value={ last_name }/>
         <br />
         <textarea onChange={this.capText} name="description" cols="30" rows="10" value={ description }/>
         <br />
         <input onChange={this.capText} type="checkbox" name="verificado" value={ value } />
      </form>
    );
  }
}

export default Form;