import React, { Component } from 'react';

import './styles.css'

export default class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:  '',
      breed: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br />
          <textarea name="name" value={this.state.name} onChange={this.handleInputChange} />
        </label>

        <br /><br />

        <label>
          Choose a breed:<br />
          <select name="breed" value={this.state.breed} onChange={this.handleInputChange}>
            <option value="doberman">Doberman</option>
            <option value="xiaou">XiaouMi</option>
            <option value="shiba">Shiba-Inu</option>
            <option value="husk">Husk</option>
          </select>
        </label>

        <br /><br />
        
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}