import './App.css';
import React, {useState} from "react";
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'
import ShoppingCart from "./rentals/ShoppingCart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {

  const [cart, setCart] = useState([])

  function addToCart(card){

    console.log('button clicked')
    console.log(cart)

    setCart([...cart, card])

  }

  function removeFromCart(idx){

    console.log('button clicked')
    console.log(idx)
    setCart([...cart.slice(0, idx), ...cart.slice(idx+1, cart.length)])

  }

  let sum=0

  cart.forEach(value =>{

    sum+=value.payment.cost

  })

  return (

    <div className="mother">

      <div className="website-description">

        <h1>Random BnBs at Localhost</h1>

      </div>

      <div className="menu-buttons">
        {/*add material-ui button*/}

        <Stack spacing={2} direction="row">

          <Button variant="contained" color="secondary">Input BnB</Button>

          <Button variant="contained" color="secondary">Toggle Cart</Button>

        </Stack>



      </div>

      <div>

        <div className="App">

          <div className="app-grid">

            <h1 className="input-bnb-h1">BnB Form</h1>

            <hr />



          </div>

          <div className="app-grid">

            <h1 className="vacation-rentals-h1">Vacation Rentals</h1>

            <hr />

            <VacationRental bnbs={bnbs} addToCart = {addToCart}/>

          </div>

          <div className="app-grid-shopping-cart">

            <h1 className="shopping-cart-h1">Shopping Cart</h1>

            <hr />

            <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>

            <div className="app-grid-total-due">

              <h1 className="total-payment">Total Due</h1>
              <hr />
              <h1 className="sum">{sum}</h1>

            </div>

          </div>



        </div>

      </div>

      </div>






  );
}

export default App;
