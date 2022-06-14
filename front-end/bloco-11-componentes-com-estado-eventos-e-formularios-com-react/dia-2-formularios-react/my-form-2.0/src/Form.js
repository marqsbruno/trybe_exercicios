import React from "react";

class Form extends React.Component {
  render() {
    const { handleChange } = this.props
    return(
      <fieldset>
        <legend>Dados</legend>
        Nome:
        <input
        type="name"
        name="name"
        maxLength="40"
        required 
        onChange={handleChange}
        />

        Email:
        <input
        type="email"
        name="email"
        maxLength="50"
        required
        onChange={handleChange} />

        CPF:
        <input
        type="text"
        name="cpf"
        maxLength="11"
        required
        onChange={handleChange} />

        Endereço:
        <input
        type="text"
        name="address"
        maxLength="200"
        required
        onChange={handleChange} />

        Cidade:
        <input
        type="text"
        name="city"
        maxLength="28"
        required
        onChange={handleChange} />

        <label htmlFor="apart">
          <input
          type="radio"
          id="apart"
          name="type"
          value="apart"
          onClick={handleChange} />
        </label>
        apartamento

        <label htmlFor="house">
          <input
          type="radio"
          id="house"
          name="type"
          value="house" 
          onChange={handleChange}/>
        </label>
        casa
      </fieldset>
    );
  }
}

export default Form;