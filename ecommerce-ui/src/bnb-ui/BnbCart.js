import React from 'react';
import PropTypes from 'prop-types';

export default function BnbCart({image, title, houseType, description, stars, reviews, superhost, cost}) {

  console.log('hello')

  return (
    <div className='cart'>
      <div>Your cart is currently empty.</div>
      <br></br>

      <img src={image} alt='placeholder'></img>

      <div>{title}</div>
      
      <div>{houseType} 
        <span hidden={!description}> &#x2022; {description}</span>
      </div>
      <div>{stars} Stars &#40;{reviews}&#41;
        <span hidden={!superhost}> &#x2022; Superhost</span>
      </div>
      <br></br>
      <div>Remove</div>
      <br></br>
      <div>Price details</div>
      
      <div>Total &#40;USD&#41; ${cost}</div>

    </div>
  );
}

BnbCart.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  superhost: PropTypes.bool.isRequired,
  cost: PropTypes.number.isRequired
}