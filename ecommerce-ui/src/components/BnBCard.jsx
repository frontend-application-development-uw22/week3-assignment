////////////////////////////////////////////////////////////////////////////////
// BnBCard /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import BnBCardImg from './BnBCardImg';
import BnBCardTitle from './BnBCardTitle';
import BnBCardRating from './BnBCardRating';
import BnBCardPrice from './BnBCardPrice';
import BnBCardButton from './BnBCardButton';

function BnBCard ({bnb}) {

  return (
    <div className="bnbcard">
      <BnBCardImg 
        title={bnb.title} 
        imgUrl={bnb.image} 
        isSuperHost={bnb.host.isSuperHost}
      />
      <BnBCardTitle
        title={bnb.title}
        houseType={bnb.houseType}
        city={bnb.location.city}
        country={bnb.location.country}
      />
      <BnBCardRating 
        stars={bnb.rating.stars}
        reviews={bnb.rating.reviews}
      />
      <BnBCardPrice
        cost={bnb.payment.cost}
      />
      <BnBCardButton />
    </div>
  );

}

export default BnBCard;