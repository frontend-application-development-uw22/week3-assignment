import React from 'react';
import PropTypes from 'prop-types';

function RemoveFromCart ({cname, cartItem, handleRemove, id})
{
  function handleOnClick (e)
  {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={cname} key={id}>
      <button onClick={handleOnClick}>Remove from cart</button>
    </div>
  )
}



RemoveFromCart.propTypes =
  {
    cname: PropTypes.string.isRequired,
    cartItem: PropTypes.object.isRequired,
    handleRemove : PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  }

export default RemoveFromCart;
