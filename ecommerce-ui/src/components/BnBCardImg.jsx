////////////////////////////////////////////////////////////////////////////////
// BnBCardImg //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardImg ({title, imgUrl, isSuperhost}) {

  // Determine visibility of 'Superhost' tag.
  const superhostClasses =
    isSuperhost ? "bnbcard-img-superhost" : "bnbcard-img-superhost hidden"

  return (
    <div className="bnbcard-img">
      <span className={superhostClasses}>Superhost</span>
      <img src={imgUrl} alt="Photograph of: {title}" />
    </div>
  );

}

BnBCardImg.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  isSuperhost: PropTypes.bool.isRequired
}

export default BnBCardImg;