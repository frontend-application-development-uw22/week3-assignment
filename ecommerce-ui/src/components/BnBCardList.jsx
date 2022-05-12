////////////////////////////////////////////////////////////////////////////////
// BnBCardList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import BnBCard from './BnBCard';

function BnBCardList ({bnbData, cartContents, setCartContents, cartOpen, setCartOpen}) {

  // Map each [bnb] in [bnbData] to a [BnBCard] in [bnbCardList].
  let iKey = -1;
  const bnbCardList = bnbData.map((bnb) => {
    // Construct a unique key for each [BnBCard].
    iKey++;
    const cardId = "bnbcard-" + iKey;
    const bnbId = "bnb-" + iKey;
    return <BnBCard 
      bnb={bnb}
      key={cardId}
      cardId={cardId}
      bnbId={bnbId}
      cartContents={cartContents}
      setCartContents={setCartContents}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
    />
  });

  // Return the list of [BnBCard]s in [bnbCardList].
  return (
    <div className="bnbcard-list">
      {bnbCardList}
    </div>
  );

}

BnBCardList.propTypes = {
  bnbData: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartContents: PropTypes.array.isRequired,
  setCartContents: PropTypes.func.isRequired,
  cartOpen: PropTypes.bool.isRequired,
  setCartOpen: PropTypes.func.isRequired
}

export default BnBCardList;