import React, { useState } from 'react';
import './App.css'
import bnbs from './bnbs';
import Bnb from './components/Bnb';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const { bnbRentals } = bnbs;
  const [rentalItems, setRentalItems] = useState([]);

  const onAdd = (bnb) => {
    const available = rentalItems.find((item) => item.id === bnb.id);
    if (available) {
      setRentalItems(
        rentalItems.map((item) =>
          item.id === bnb.id ? { ...available, qty: available.qty + 1 } : item
        )
      );
    } else {
      setRentalItems([...rentalItems, { ...bnb, qty: 1 }]);
    }
  };

  const onRemove = (bnb) => {
    const available = rentalItems.find((item) => item.id === bnb.id);
    if (available.qty === 1) {
      setRentalItems(rentalItems.filter((item) => item.id !== bnb.id));
    } else {
      setRentalItems(
        rentalItems.map((item) =>
          item.id === bnb.id ? { ...available, qty: available.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="bnb-card">
        <Bnb
          bnbRentals={bnbRentals}
          onAdd={onAdd}>
        </Bnb>
        <ShoppingCart
          rentalItems={rentalItems}
          onAdd={onAdd}
          onRemove={onRemove}>
        </ShoppingCart>
      </div>
    </div>
  );
};

export default App;