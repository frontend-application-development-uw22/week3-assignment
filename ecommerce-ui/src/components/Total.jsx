import React from 'react';
import PropTypes from 'prop-types';

function Total({ total })
{
  return (
    <div >
      <h3>{`Total = $${total}`}</h3>
    </div>
  )
}

Total.propTypes =
  {
    total: PropTypes.number.isRequired
  }

export default Total;
