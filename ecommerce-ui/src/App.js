import React, {
  useState
} from "react";
import './App.css';
import Main from './ecommerce-ui/Main'
import Header from './ecommerce-ui/Header';
import ShoppingCart from './ecommerce-ui/ShoppingCart';
import properties from "./_data/bnbs.json"


function App() {

  const [rentalItems, setRentalItems] = useState([]);

  const addRental = (property) => {

    const exist = rentalItems.find((x) => x.id === property.id);

    if (exist) {
      setRentalItems(
        rentalItems.map((x) => 
        x.id === property.id ? {...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setRentalItems ([...rentalItems, {...property, qty: 1}])
    }

  };

  return ( 
    <div className = "App" >
          <Header/>
          <div className = "row" >
              <Main properties = {properties} addRental={addRental}/> 
              <ShoppingCart rentalItems = {rentalItems} addRental={addRental}/> 
          </div> 
    </div>
  );
}

export default App;
