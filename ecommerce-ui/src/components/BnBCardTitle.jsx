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
      {subtitle}
      <h2>
        {title}
      </h2>
    </div>
  );

}

BnBCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default BnBCardTitle;