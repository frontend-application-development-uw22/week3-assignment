import React from 'react';
import PropTypes from 'prop-types';

function AddToCart ({cname, bnbItem, handleAdd, id})
{
  function handleOnClick (e)
  {
    e.preventDefault()
    handleAdd(bnbItem)
  }

  return (
    <div className={cname} key={id}>
      <button onClick={handleOnClick}>Add to cart</button>
    </div>
  )
}



AddToCart.propTypes =
  {
    cname: PropTypes.string.isRequired,
    bnbItem: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  }

export default AddToCart;
