import React from 'react';
import Input from './Input';
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

    this.captureChange = this.captureChange.bind(this);
  }

  captureChange({ target }){
    const { value, name, type, checked } = target;

    console.log(value, name, type, checked);
    this.setState({
      [name]: (type !== "checkbox") ? value : checked
    });
  }

  render(){
    const { selecao, first_name, last_name, description, value } = this.state; 
  
    return(
       <form action="">
         <br />
         <select onChange={this.captureChange} name="selecao" value={ selecao }>
           <option value="item1">Só tem esse</option>
           <option value="item2">mais um</option>
           <option value="item3">último</option>
         </select>
         <br />
         <Input name="first_name" handleFunction={ this.captureChange } handleState={ first_name }/>
         <br />
         <Input name="last_name" handleFunction={ this.captureChange } handleState={ last_name }/>
         <br />
         <textarea onChange={this.captureChange} name="description" cols="30" rows="10" value={ description }/>
         <br />
         <input onChange={this.captureChange} type="checkbox" name="verificado" value={ value } />
      </form>
    );
  }
}

export default Form;