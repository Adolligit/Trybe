import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selecao: "",
      first_name: "",
      last_name: "",
      description: "",
    }

    this.capText = this.capText.bind(this);
  }

  capText({ target }){
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
       <form action="">
         <select onChange={this.capText} name="selecao" id="">
           <option value="item1">Só tem esse</option>
         </select>
         <input onChange={this.capText} name="first_name" type="text" />
         <input onChange={this.capText} name="last_name" type="text" />
         <textarea onChange={this.capText} name="description" cols="30" rows="10" />
      </form>
    );
  }
}

export default Form;