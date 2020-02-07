import React from 'react';

import './styles.css';

import Header  from './components/Header';
import SignIn  from './components/SignIn';
import Main    from './pages/main';
import PetForm from './pages/form';

const App = () => (
  <div className="App">
    {/* <Header /> */}
    {/* <Main /> */}
    {/* <PetForm /> */}
    <SignIn />
  </div>
);

export default App;
