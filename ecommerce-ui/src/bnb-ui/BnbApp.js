import React from 'react';
import BnbCard from './BnbCard';
import Bnbs from '../bnbs';

function BnbApp() {
    const bnbrender = Bnbs.map((bnb,index) =>
      <BnbCard
          key = {index}
          bnb = {bnb}
      />
    )
  
    return (
      <div className='bnbcard' >
        {bnbrender}
      </div>
    );
  }
  
  export default BnbApp;
  