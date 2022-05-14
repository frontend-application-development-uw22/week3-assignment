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

function App() {
  const[bookingCount, setCount]=useState(0)
    function booking(){
      setCount(prevbookingCount => prevbookingCount + 1)
    }
    function minus(){
      if(bookingCount>0){
        setCount(prevbookingCount=> prevbookingCount - 1)
      }else{
        setCount(0)
      }
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
        <IconButton onClick={(e)=>minus()} size='large' aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={bookingCount} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
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
                    <Button id={`cardButtonID_${index}`} className='cardButton' variant="contained" onClick={(e)=>booking()} >Book</Button>
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
