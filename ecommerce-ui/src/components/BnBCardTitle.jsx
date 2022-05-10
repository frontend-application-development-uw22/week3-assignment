////////////////////////////////////////////////////////////////////////////////
// BnBCardTitle ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardTitle ({title, houseType, city, country}) {

  // Construct subtitle.
  const subtitle = <p>{houseType} in {city}, {country}</p>

  return (
    <div className="bnbcard-title">
      <p>{subtitle}</p>
      <h2>
        {title}
      </h2>
    </div>
  );

}

export default BnBCardTitle;