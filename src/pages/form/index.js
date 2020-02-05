import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css'

export default class PetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:  '',
      breed: '',
      value: 'manga'
    };

    this.changeName   = this.changeName.bind(this);
    this.changeBreed  = this.changeBreed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(event) {
    this.setState({ name: event.target.value });
  }

  changeBreed(event) {
    this.setState({ breed: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.name} onChange={this.changeName} />
        </label>

        <label>
          Choose a breed:
          <select value={this.state.breed} onChange={this.changeBreed}>
            <option value="doberman">Doberman</option>
            <option value="xiaou">XiaouMi</option>
            <option value="shiba">Shiba-Inu</option>
            <option value="husk">Husk</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}