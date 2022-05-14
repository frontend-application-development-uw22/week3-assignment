import React, { useState } from 'react';
import bnbs from './bnbs.json';
import Title from './components/Title';
import Rentals from './components/Rentals';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (idx) => {

    setCart([...cart, idx ]);

  }

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div className="row">
        <main>
          <h2>Available to Rent</h2>
          <div className="row">
            {bnbs.map((bnb, idx) =>
              <Rentals
                key={idx}
                bnb={bnb}
                addItem={addItem}
              />
            )}
          </div>

        </main>
        <aside>
          <h2>Cart</h2>
        <div>
          {cart.map((item, idx) =>
            <Cart
              key={idx}
              item={item}
              // removeItem={removeItem}
            />
          )
          }
        </div>
        </aside>


      </div>


    </div>
)}
      export default App
