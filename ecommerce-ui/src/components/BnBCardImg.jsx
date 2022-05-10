////////////////////////////////////////////////////////////////////////////////
// BnBCardImg //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

function BnBCardImg ({title, imgUrl, isSuperHost}) {

  // Determine visibility of 'Superhost' tag.
  let superHostClass = "hidden";
  if (isSuperHost) {
    superHostClass = "bnbcard-img-superhost";
  }

  return (
    <div className="bnbcard-img">
      <span className={superHostClass}>Superhost</span>
      <img src={imgUrl} alt="Photograph of: {title}" />
    </div>
  );

}

BnBCardImg.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  isSuperHost: PropTypes.bool.isRequired
}

export default BnBCardImg;