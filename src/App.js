import React from 'react';

import './styles.css';

import Header  from './components/Header';
import Main    from './pages/main';
import PetForm from './pages/form';

const App = () => (
  <div className="App">
    <Header />
    {/* <Main /> */}
    <PetForm />
  </div>
);

export default App;
