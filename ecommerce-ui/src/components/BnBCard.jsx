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

function BnBCard ({bnb, cardId, bnbId, cartContents, setCartContents}) {

  return (
    <div className="bnbcard" id={cardId}>
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
        <BnBCardButton
          bnbId={bnbId}
          title={bnb.title}
          cost={bnb.payment.cost}
          cartContents={cartContents}
          setCartContents={setCartContents} 
        />
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
  cardId: PropTypes.string.isRequired,
  bnbId: PropTypes.string.isRequired,
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired
}

export default BnBCard;