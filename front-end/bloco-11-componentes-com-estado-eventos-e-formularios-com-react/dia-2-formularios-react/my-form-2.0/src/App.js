import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
    }
  };

  handleChange (event) {
    this.setState ({

    })

  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange}/>
        <button onClick={this.handleChange}>Enviar!</button>
      </div>
    );
  }
}

export default App;
