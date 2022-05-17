import React, { useState }from 'react';
// Style Script
import './App.css'
// Data
import data from './_data/bnbs' 
// My Components
import CardBuilder from './components/card';
// MUI Components
import Button from '@mui/material/Button'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton, Badge } from '@mui/material';
import CartItemBuilder from './components/cartItem';

function App() {
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTotalCost, setCartTotalCost] = useState(0)
  
  function shoppingCartAddItem(houseType, city, country, img ,index, cost ){
    setCart(prevCartItem=> {return {...prevCartItem, dataIndex: index, houseType: houseType, city: city, country: country, cost: cost}})
    setCartCount(cartCount + 1)
    setCartTotal(cartTotal + 1)
    setCartTotalCost(cartTotalCost + cost)
    setCart([...cart, {dataIndex: index, houseType: houseType, city: city, country: country, img: img, cost: cost}])
    console.log(cart, cartCount, cartTotal, cartTotalCost)
    // return a div with the cart item
  }
  function shoppingCartRemoveItem(houseType, city, country, img ,index, cost ){
    setCartCount(cartCount - 1)
    setCartTotal(cartTotal - 1)
    setCartTotalCost(cartTotalCost - cost)
    setCart([...cart.filter(item => item.dataIndex !== index)])
    console.log(cart, cartCount, cartTotal, cartTotalCost)
  }
    const[bookingCount, setCount]=useState(0)
    function booking(e, houseType, city, country, img, index, cost){
      shoppingCartAddItem(houseType, city, country, img, index, cost)
      setCount(prevbookingCount => prevbookingCount + 1)
    }
    function minus( e, houseType, city, country, img, index, cost){
      if(bookingCount>0){
        setCount(prevbookingCount=> prevbookingCount - 1)
        shoppingCartRemoveItem(houseType, city, country, img, index, cost)
      }else{
        setCount(0)
      }
    }
    const[viewCart , setViewCart]=useState("hiddenCart")
    function showCart(e){
      setViewCart(prevViewCart=> {return prevViewCart === "hiddenCart" ? "showCart" : "hiddenCart"})
    }
  return (
    <div className='main'>
      <div className='nav'>
        <ul className='nav-list'>
          <li>
            <h1>Welcome</h1>
          </li>
        </ul>
      </div>
      <div className='shoppingCart'>
        <IconButton className='cartLogo' onClick={(e)=>showCart()} size='large'color="inherit">
          <Badge badgeContent={bookingCount} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </div>
      <div className={viewCart}>
        {
          cart.map((item, index)=> {
            return (
              <div>
              <CartItemBuilder
              key={index} 
              houseType={item.houseType} 
              city={item.city} 
              country={item.country} 
              img={item.img} 
              cost={item.cost}/>
              <Button variant="outlined" color="error" onClick={(e)=>{minus(e, item.houseType, item.city, item.country, item.img, item.dataIndex, item.cost)}}>Remove</Button>
              </div>
            )
        })}
        <p>TOTAL: ${cartTotalCost} <span id='taxSpan'>( Taxes and Fees not included )</span> <span><Button id="checkoutBtn" variant='contained' color='error' onClick={()=>{alert("Demo ends here")}}>Checkout</Button></span></p>
      </div>
      <div className='rental-block'>
          {data.map((rental, index)=>{
            return(
                  <div className='rental-card' id={`card_${index}`} key={index}>
                    <CardBuilder
                      id={index}
                      imgSrc={rental.image}
                      imgAlt={rental.houseType}
                      imgId ={`rental_${index}`}
                      imgClassName = "rental_img"
                      title={rental.title}
                      houseType={rental.houseType}
                      stars={rental.rating.stars}
                      reviewCount={rental.rating.reviews}
                      hostName={rental.host.name}
                      isHostSuper={rental.host.isSuperhost}
                      cost={rental.payment.cost}
                      cost_description={rental.payment.description}
                      city={rental.location.city}
                      country={rental.location.country}
                      />
                    <Button id={`cardButtonID_${index}`} className='cardButton' variant="contained" onClick={(e)=>booking(e, rental.houseType, rental.location.city, rental.location.country, rental.image, index, rental.payment.cost)} >Book</Button>
                  </div>
                  )
                }
              )
              }
      </div>
    </div>
  );
}

export default App;
