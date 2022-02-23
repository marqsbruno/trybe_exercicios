import React from "react";

class Form extends React.Component {
  render() {
    return(
      <fieldset>
        <legend>Dados</legend>
        Nome:
        <input
        type="name"
        name="name"
        maxLength="40"
        required />

        Email:
        <input
        type="email"
        name="email"
        maxLength="50"
        required />

        CPF:
        <input
        type="cpf"
        name="text"
        maxLength="11"
        required />

        Endereço:
        <input
        type="text"
        name="address"
        maxLength="200"
        required />

        Cidade:
        <input
        type="text"
        name="city"
        maxLength="28"
        required />

        <label htmlFor="apart">
          <input
          type="radio"
          id="apart"
          name="type"
          value="apart" />
        </label>
        apartamento

        <label htmlFor="house">
          <input
          type="radio"
          id="house"
          name="type"
          value="house" />
        </label>
        casa
      </fieldset>
    );
  }
}

export default Form;