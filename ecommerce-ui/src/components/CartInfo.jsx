import React from 'react';
import PropTypes from 'prop-types';
import BnbInfo from "./BnbInfo";

function CartInfo ({cname, cartItem, id})
{
  return  (
    <div className={cname} key={id}>
      <BnbInfo bnbItem={cartItem} cname={"bnbtextcell"} id={id}/>
    </div>
  )
}

CartInfo.propTypes =
{
  cname: PropTypes.string.isRequired,
  cartItem: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default CartInfo;
