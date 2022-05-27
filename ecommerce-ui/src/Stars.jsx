import React from 'react';
import PropTypes from 'prop-types'
import three from './3star.png';
import four from './4star.png';
import five from './5star.png';

export default function Stars(rating) {
  const num = Math.floor(rating);
  switch (num) {
    case 3:
      return <img className="card-text Stars-pic" src={three} alt="3-star host rating" />;
      break;
    case 4:
      return <img className="card-text Stars-pic" src={four} alt="4-star host rating" />;
      break;
    case 5:
      return <img className="Stars-pic card-text" src={five} alt="5-star host rating" />;
      break;
    default:
      return <p>Rating unavailable</p>;
      break;
  }
}

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};
