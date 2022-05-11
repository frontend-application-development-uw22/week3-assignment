import './App.css';
import React, {useState} from "react";
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'
import ShoppingCart from "./rentals/ShoppingCart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { red } from '@mui/material/colors';

// const toggleButtonColor = red[500];


function App() {

  const [cart, setCart] = useState([])

  const [cartVisible, setCartVisible] = useState(true)

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

  function handleToggle(){
    console.log('toggle button clicked')
    setCartVisible(!cartVisible)
    console.log(cartVisible)
  }

  function handleInputBnB(){
    console.log('Input BnB button clicked')
  }

  let sum=0

  cart.forEach(value =>{

    sum+=value.payment.cost

  })

  return (

    <div className="mother">

      <div className="website-description">

        <div>

        </div>
        <div>

          <h1>Random BnBs at Localhost</h1>

        </div>
        <div>

        </div>



      </div>

      <div className="menu-buttons">
        {/*add material-ui button*/}

        <div>

        </div>

        <div>

          <Stack spacing={2} direction="row">

            <Button onClick={handleInputBnB} variant="contained" style={{
              backgroundColor: "#c51162",
              padding: "10px 10px",
              marginTop: "10px",

            }}>Input BnB</Button>

            <Button onClick={handleToggle} variant="contained" style={{
              backgroundColor: "#6200ea",
              padding: "10px 10px",
              marginTop: "10px",

            }}>Toggle Cart</Button>

          </Stack>

        </div>

        <div>

        </div>






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

          <div className={cartVisible ? 'app-grid-shopping-cart' : 'shopping-cart-off'}>

          {/*<div className="app-grid-shopping-cart">*/}

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
