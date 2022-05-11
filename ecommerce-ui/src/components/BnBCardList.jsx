////////////////////////////////////////////////////////////////////////////////
// BnBCardList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import BnBCard from './BnBCard';

function BnBCardList ({bnbData, cartContents, setCartContents}) {

  // Map each [bnb] in [bnbData] to a [BnBCard] in [bnbCardList].
  let iKey = -1;
  const bnbCardList = bnbData.map((bnb) => {
    // Construct a unique key for each [BnBCard].
    iKey++;
    const id = "bnbcard-" + iKey;
    return <BnBCard 
      bnb={bnb}
      key={id}
      id={id}
      cartContents={cartContents}
      setCartContents={setCartContents} />
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
  setCartContents: PropTypes.func.isRequired
}

export default BnBCardList;