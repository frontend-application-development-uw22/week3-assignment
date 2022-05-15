import React from 'react';
import PropTypes from 'prop-types';

export default function Cart({ cartItems, onRemove }) {
  const totalPrice = cartItems.reduce((prev, current) => prev + current.payment.cost, 0);
  return (
    <div className="card Card-width p-2 m-2">
      <h4>Cart</h4>
      <div>
        {cartItems.length === 0 && <div>Empty</div>}
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-8">{item.title}</div>
          <div className="col-4 Text-right">
            {item.qty}
            $
            {item.payment.cost}
          </div>
          <div>
            <button 
              className="btn btn-warning justify-content-end" 
              type="button" 
              onClick={() => onRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <p className="col">Total</p>
            <p className="col Text-right">${totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
