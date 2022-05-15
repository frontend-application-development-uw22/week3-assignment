import React from 'react';
import PropTypes from 'prop-types';
import bnbs from './bnbs.json';
import Stars from './Stars';
import SuperHost from './SuperHost';

export default function Listings({ onAdd, cartItems, onRemove }) {
  return (
    <>
      {bnbs.map((listing) => (
          <div key={listing.id} className="card Card-width">
            <img src={listing.image} className="card-img-top" alt={listing.title} />
            <div className="card-body">
              <h4 className="card-title">{listing.title}</h4>
              <p className="card-text">{listing.houseType}</p>
              <p className="card-text">{listing.location.city}</p>
              <p className="card-text">{listing.location.country}</p>
              <p className="card-text">{listing.payment.cost}</p>
              <p className="card-text">{listing.payment.description}</p>
              <Stars rating={listing.rating.stars} />
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => cartItems.includes(listing) ? onRemove(listing) : onAdd(listing)} >Add to cart</button>
            </div>
          </div>
      ))}
    </>
  );
}

Listings.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  payment: PropTypes.shape({
    cost: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired
};
