import Header from './components/Header';
import RentalListings from './components/RentalListings';

import ShoppingBasket from './components/ShoppingBasket';
import { useState } from 'react';
import bnbs from './bnbs.json';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (bnb,index) => {
    const exist = cartItems.find((element) => element.index === index);

    if (exist) {
      alert("Vacation listing already added to shopping cart");
    } else {
      bnb.index = index;
      setCartItems([...cartItems, { ...bnb, qty: 1 }]);
    }
  };

  const onRemove = (bnb) => {
    const exist = cartItems.find((element) => element.index === bnb.index);
    if (exist) {
      setCartItems(cartItems.filter((element) => element.index !== bnb.index));
    } 
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <RentalListings bnbs={bnbs} onAdd={onAdd}></RentalListings>
        <ShoppingBasket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></ShoppingBasket>
      </div>
    </div>
  );
}

export default App;
