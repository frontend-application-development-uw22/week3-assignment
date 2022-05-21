import React from 'react';
import BnbCard from './BnbCard';
import Bnbs from '../bnbs';

function BnbApp({addItem}) {
    const bnbrender = Bnbs.map((bnb,index) =>
      <BnbCard
          key = {index}
          bnb = {bnb}
          addItem = {addItem}
      />
    )
  
    return (
      <div className='bnbcard' >
        {bnbrender}
      </div>
    );
  }
  
  export default BnbApp;
  