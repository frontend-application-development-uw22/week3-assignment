import React, {useState} from 'react';
import Button from '@mui/material/Button'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton, Badge } from '@mui/material';

export default function CartMenu({cart}) {
  const[bookingCount, setCount]=useState(0)
  function booking(){
    setCount(prevbookingCount => prevbookingCount + 1)
  }
  function minus(){
    console.log('here')
    if(bookingCount>0){
      setCount(prevbookingCount=> prevbookingCount - 1)
    }else{
      setCount(0)
    }
  }

  return (
    <div className='shoppingCart'>
        <IconButton onClick={(e)=>minus()} size='large' aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={bookingCount} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </div>
  );
}