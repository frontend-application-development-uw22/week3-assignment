import React from 'react';
import BnbCard from './BnbCard';
import Bnbs from '../bnbs';
import PropTypes from 'prop-types';

export default function BnbApp({addItem}) {
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
  

  
BnbApp.propTypes = {
    addItem: PropTypes.func.isRequired
}