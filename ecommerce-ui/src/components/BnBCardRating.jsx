////////////////////////////////////////////////////////////////////////////////
// BnBCardRating ///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardRating ({stars, reviews}) {

  return (
    <div className="bnbcard-rating">
      <p>
        <span className="bnbcard-rating-star-glyph">★</span> 
        <span className="bnbcard-rating-star-count"> {stars} </span>
        <span className="bnbcard-rating-review-count">({reviews} reviews)</span>
      </p>
    </div>
  );

}

export default BnBCardRating;