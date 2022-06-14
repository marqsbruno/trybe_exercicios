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
    const { name } = event.target;
    // linha mágica que lida com checkbox
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState ({
      [name] : value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange}/>
        <button onClick={this.handleChange}>Eu não funciono!</button>
      </div>
    );
  }
}

export default App;
