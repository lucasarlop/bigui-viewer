import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
  state = {
    pets: []    
  };

  componentDidMount() {
    this.loadPets();
  }

  loadPets = async () => {
    const response = await api.get('/pets');

    this.setState({ pets: response.data });
  }

  render() {
    const { pets } = this.state;

    return (
      <div className="pets-list">
        {pets.map(pet => (
          <article key={pet.id}>
            <strong>{pet.name}</strong>
            <p>Breed: {pet.breed} | Gender: {pet.gender} | Size: {pet.size}</p>
            <a href=''>SHOW</a>
          </article>
        ))}
      </div>
    )
  }
}