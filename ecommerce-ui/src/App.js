import React, { useState } from 'react';
import './App.css';
import Listings from './Listings';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = ((rental) => {
    setCartItems((cartItems) => [...cartItems, rental]);
  }
  );
  const onRemove = (rental) => {
    const exist = cartItems.find((x) => x.id === rental.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== rental.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === rental.id ? { ...exist, qty: exist.qty - 1 } : x),
      );
    }
  };
  return (
    <div className="">
      <div className="row row-cols-sm-2 Centered">
        <div className="col">
          <Listings 
            onAdd={onAdd}
            cartItems={cartItems}
            onRemove={onRemove}/>
        </div>
        <div className="col Cart-pos">
          <Cart
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  )};

export default App;
