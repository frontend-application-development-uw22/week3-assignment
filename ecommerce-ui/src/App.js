import './App.css';
import React, {useState} from "react";
import BnBCardList from './components/BnBCardList';
import Nav from './components/Nav'
import ShoppingCart from './components/ShoppingCart';
import bnbData from './data/bnbs.json';

function App() {

  const [cartContents, setCartContents] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="App">
      <Nav
        cartContents={cartContents}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <main>
        <BnBCardList 
          bnbData={bnbData}
          cartContents={cartContents}
          setCartContents={setCartContents}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <ShoppingCart 
          cartContents={cartContents}
          setCartContents={setCartContents}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </main>
    </div>
  );
}

export default App;
