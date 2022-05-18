import React from 'react';
import BnbCard from './BnbCard';
import Bnbs from '../bnbs';

function BnbApp() {
    const bnbrender = Bnbs.map((newbnbs,index) =>
      <BnbCard
          key = {index}
          bnb = {newbnbs}
      />
    )
  
    return (
      <div className='bnbcard'>
        {bnbrender}
      </div>
    );
  }
  
  export default BnbApp;
  