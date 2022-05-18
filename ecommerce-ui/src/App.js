import React from 'react';
import './App.css';
import BnbApp from './bnb-ui/BnbApp.js';
import BnbCart from './bnb-ui/BnbCart.js';

function App() {
  return (
    <div className='ui-app'>
      <BnbApp/>
      <BnbCart/>
    </div>
  );
}

export default App;
