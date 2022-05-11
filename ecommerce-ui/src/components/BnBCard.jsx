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

function BnBCard ({bnb, id}) {

  return (
    <div className="bnbcard" id={id}>
      <BnBCardImg
        title={bnb.title}
        imgUrl={bnb.image}
        isSuperhost={Boolean(bnb.host.isSuperhost)}
      />
      <div className="bnbcard-data">
        <BnBCardTitle
          title={bnb.title}
          houseType={bnb.houseType}
          city={bnb.location.city}
          country={bnb.location.country}
        />
        <BnBCardButton />
        <div className="bnbcard-foot">
          <BnBCardRating
            stars={bnb.rating.stars}
            reviews={bnb.rating.reviews}
          />
          <BnBCardPrice
            cost={bnb.payment.cost}
          />
        </div>
      </div>
    </div>
  );

}

BnBCard.propTypes = {
  bnb: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default BnBCard;