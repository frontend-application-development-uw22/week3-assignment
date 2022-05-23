import React from 'react';
import PropTypes from 'prop-types';

function BnbInfo ({cname, bnbItem, id})
{
  return (
    <div className={cname} key={id}>
      <h3>{bnbItem.title}</h3>
      <p>{bnbItem.houseType}</p>
      <h5>{`${bnbItem.location.city}, ${bnbItem.location.country}`}</h5>
      <h5>{`$${bnbItem.payment.cost}`}</h5>
    </div>
  )
}


BnbInfo.propTypes =
  {
    cname: PropTypes.string.isRequired,
    bnbItem: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  }

export default BnbInfo;
