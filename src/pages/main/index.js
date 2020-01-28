import React, { Component } from 'react';

import api from '../../services/api'

export default class Main extends Component {
  componentDidMount() {
    this.loadPets();
  }

  loadPets = async () => {
    const response = await api.get('/pets')

    console.log(response);
  }

  render() {
    return <h1>Hello react!</h1>
  }
}