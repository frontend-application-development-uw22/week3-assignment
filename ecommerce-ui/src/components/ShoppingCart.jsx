import React from 'react';
import propTypes from 'prop-types';

const ShoppingCart = (props) => {
  const { rentalItems, onAdd, onRemove } = props;
  const totalPrice = rentalItems.reduce((total, rentalItem) => total + rentalItem.payment.cost * rentalItem.qty, 0);
  const pricePerNight = rentalItems.reduce((total, rentalItem) => rentalItem.payment.cost, 0);

  return (
    <aside className="main cart">
      <h1>Your stay</h1>
      <div>
        {rentalItems.length !== 0 && (
          <>
            {rentalItems.map((item) => (
              <div key={item.id} className="bnb-card">
                <div className="title">{item.title}</div>
                <div className="bnb-card">
                  <h2>How many nights?</h2>
                  <button onClick={() => onRemove(item)} className="decrease">-</button>{' '}
                  <button onClick={() => onAdd(item)} className="increase">+</button>
                  <div className="cart text-right">
                    <p>{item.qty} nights</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bnb-card">
              <h2>Price Per Night</h2>
              <div className="cart text-right">
                <p>${pricePerNight}</p>
              </div>
            </div>
            <div className="bnb-card">
              <h2>Total Price</h2>
              <div className="cart text-right">
                <p>${totalPrice}</p>
              </div>
            </div>
            <button>Confirm Reservation</button>
          </>
        )}
      </div>
    </aside>
  );
}

ShoppingCart.propTypes = {
  rentalItems: propTypes.array,
  onAdd: propTypes.func,
  onRemove: propTypes.func
};

export default ShoppingCart;