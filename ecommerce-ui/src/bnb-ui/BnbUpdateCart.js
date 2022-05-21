import React from 'react';
// import PropTypes from 'prop-types';

export default function BnbUpdateCart({cartItem, removeItem}) {
  return (
    <div className='cart-item'>
      <div>
        <img className="cartimage leftSide" src={cartItem.bnb.image} alt={cartItem.bnb.title}></img>
        <div className='rightside'>
            <div>{cartItem.bnb.title}</div>
            
            <div>{cartItem.bnb.houseType} 
                <span hidden={!cartItem.bnb.payment.description}> &#x2022; {cartItem.bnb.payment.description}</span>
            </div>
            <div>{cartItem.bnb.rating.stars} Stars &#40;{cartItem.bnb.rating.reviews}&#41;
                <span hidden={!cartItem.bnb.host.isSuperhost}> &#x2022; Superhost</span>
            </div>
            <div>
                Cost &#40;USD&#41; ${cartItem.bnb.payment.cost}
            </div>
            <button className='remove' onClick={(e) => removeItem(e, cartItem)}>Remove</button>
        </div>
    </div>
    <br></br>
    </div>
  );
}