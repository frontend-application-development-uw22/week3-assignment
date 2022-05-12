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
  // let totalCost = 0;

  const addRental = (index) => {

    const exist = rentalItems.find((x) => x.id === properties.id);

    if (exist) {
      setRentalItems(
        rentalItems.map((x, id) =>
          x.id === properties.id ? {...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setRentalItems([...rentalItems, {...properties[index], qty: 1}])
    }

  };

  //   const addRental = (id) => {
  //   setRentalItems([...rentalItems, properties[id]]);
  //   // update total cost
  //   // totalCost += properties.payment.cost;
  // }

  return ( 
  <div className = "App" >
    <Header/>
    <div className = "row" >
      <Main 
        properties = {properties} 
        addRental = {addRental}
      />   
      <ShoppingCart 
        rentalItems = {rentalItems}  
        addRental = {addRental}
      />  
    </div>   
  </div>
  );
}

export default App;
