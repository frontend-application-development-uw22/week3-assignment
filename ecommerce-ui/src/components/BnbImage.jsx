import React from 'react';
import PropTypes from 'prop-types';

function BnbImage ({cname, imgCname, imgUrl, id})
{
  return (
    <div className={cname} >
      <img className={imgCname} src={imgUrl} alt="" key={id} />
    </div>
  )
}

BnbImage.propTypes =
  {
    cname: PropTypes.string.isRequired,
    imgCname: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

export default BnbImage;
