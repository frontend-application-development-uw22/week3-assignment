////////////////////////////////////////////////////////////////////////////////
// BnBCardList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import BnBCard from './BnBCard';

function BnBCardList ({bnbData}) {

  // Map each [bnb] in [bnbData] to a [BnBCard] in [bnbCardList].
  const bnbCardList = bnbData.map((bnb) => {
    return <BnBCard bnb={bnb} />
  });

  // Return the list of [BnBCard]s in [bnbCardList].
  return (
    <div className="bnbcard-list">
      {bnbCardList}
    </div>
  );

}

BnBCardList.propTypes = {
  bnbData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BnBCardList;