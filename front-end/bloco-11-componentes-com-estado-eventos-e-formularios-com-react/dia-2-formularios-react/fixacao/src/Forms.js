import React from "react";
import God from "./God";

class Forms extends React.Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      god: '',
      quemSouEu: '',
      planeta: '',
    }
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState ({
      [name]: value,
    });
  }


  render() {
    return (
      <div className='form'>
      <h1>Meu formulário</h1>
      <label htmlFor="quemSouEu">
        Quem é você?
        <select name='quemSouEu' onChange={this.handleChange}>
          <option value= 'Nao Sei'>Não Sei</option>
          <option value='Sei lá'>Sei lá</option>
        </select>
      </label>
      <label>De qual planeta você é?
        <input type='text' name='planeta' onChange={this.handleChange}/>
      </label>
      <God value={this.state.god} handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default Forms;
