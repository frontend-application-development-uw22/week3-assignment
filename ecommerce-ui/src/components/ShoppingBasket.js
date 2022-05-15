/* eslint-disable react/prop-types */
import React from 'react';

export default function ShoppingBasket(props) {
  const { cartItems,  onRemove } = props;

  console.log("CART ITEMS = " + JSON.stringify(cartItems));

  let totalcost = 0;
 
  cartItems.forEach((bnb) => {
    const { payment } = bnb;
    const {cost} = payment;
    totalcost = totalcost + cost;
  });

  console.log(`TOTAL COST = ${totalcost}`);

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-4">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
            </div>

            <div className="col-2 text-right">
                 ${item.payment.cost}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalcost}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Checkout functionality coming soon ....')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
