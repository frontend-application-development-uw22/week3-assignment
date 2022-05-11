import './App.css';
import React, {useState} from "react";
import BnBCardList from './components/BnBCardList';
import Nav from './components/Nav'
import ShoppingCart from './components/ShoppingCart';
import bnbData from './data/bnbs.json';

function App() {

  const [cartContents, setCartContents] = useState([]);

  return (
    <div className="App">
      <Nav />
      <BnBCardList 
        bnbData={bnbData}
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
      <ShoppingCart 
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
    </div>
  );
}

export default App;
