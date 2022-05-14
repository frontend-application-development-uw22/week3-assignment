import React, {useState} from "react";
import './App.css';
import Main from './ecommerce-ui/Main'
import Header from './ecommerce-ui/Header';
import ShoppingCart from './ecommerce-ui/ShoppingCart';
import properties from "./_data/bnbs.json"


function App() {

  const [rentalItems, setRentalItems] = useState([]);

// function to add selected property to the cart
  const addRental = (property) => {

    const exist = rentalItems.find((x) => x.id === property.id);

    if (exist) {
      setRentalItems(
        rentalItems.map((x, id) =>
           x.id === property.id ? {...exist, qty: exist.qty + 1} : x)
      );
    } else {
      setRentalItems([...rentalItems, {...property, qty: 1}])
    }
  }

  //function to delete selected item from the cart
  const removeRental = (item) => {

    setRentalItems(rentalItems.filter((x) => x.id !== item.id));
    
  } 
    
  console.log(rentalItems);
  
  // return section of APP
  return ( 
  
  <div className = "App" >
    <Header/>

    <div className = "row" >
      <Main 
        key={properties.id}
        properties = {properties} 
        addRental = {addRental}
        setRentalItems={setRentalItems}

      />   
      <ShoppingCart 
        key={rentalItems.id}
        rentalItems = {rentalItems}  
        id={rentalItems.id}
        removeRental={removeRental}
        
       
       />  
    </div>   
  
  </div>
  );
}


export default App;