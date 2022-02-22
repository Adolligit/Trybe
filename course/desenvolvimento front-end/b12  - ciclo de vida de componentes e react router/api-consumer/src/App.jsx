import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: 'nome',
        gender: 'genero',
        age: 0,
        email: 'email@email.com',
      },
      features: {
        loading: true,
      },
    }

    this.consumerAPI = this.consumerAPI.bind(this);
    this.randomUser = this.randomUser.bind(this);
  }

  async consumerAPI(endpoint){
    const response = await fetch(endpoint);
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  async randomUser() {
    const { results } = await this.consumerAPI("https://api.randomuser.me/");

    results
      .forEach(({ name, dob: { age }, gender, email }) => 
        this.setState({
          person:{
            name: `${ name.first } ${ name.last }`,
            age,
            gender,
            email,
          },
          features:{  
            loading: false,
          }
        }
      ));
  }

  componentDidMount(){
    this.randomUser();
  }

  render(){
    const { features: { loading }, person } = this.state;

    return (
      <>
        <h1>Meliante</h1>
        { (loading) ?
          <div>loading...</div> :
          Object.values(person)
            .map((dataPerson) => 
              <h3 key={ dataPerson }>{ dataPerson }</h3>
            )
        }
      </>
    );
  }
}

export default App;
