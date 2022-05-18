import React from 'react';
import './App.css';
import Bnbs from './bnbs';
import BnbCard from './BnbCard';

function App() {
  return (
    <div>
      <BnbCard
        bnb = {Bnbs[0]}/>
      <BnbCard
        bnb = {Bnbs[1]}/>
      <BnbCard
        bnb = {Bnbs[2]}/>
    </div>
  );
}

export default App;
