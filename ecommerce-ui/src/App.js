import React from 'react';
import './App.css';
import Bnbs from './bnbs';
import BnbCard from './BnbCard';

function App() {
  const bnbrender = Bnbs.map((newbnbs,index) =>
    <BnbCard
        key = {index}
        bnb = {newbnbs}
    />
  )
  return (
    <div className='bnbcard'>
      {/* <BnbCard
        bnb = {Bnbs[0]}/>
      <BnbCard
        bnb = {Bnbs[1]}/>
      <BnbCard
        bnb = {Bnbs[2]}/> */}
      {bnbrender}
    </div>
  );
}

export default App;
