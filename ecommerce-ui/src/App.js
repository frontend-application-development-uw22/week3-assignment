import './App.css';
import bnbs from './bnbs.json';
import Image from './picture';
import BnbDetails from './bnb-details';
import HostDetails from './host'
import Cost from './cost';
import CartBtn from './addtocartbtn';
import Cart from './cart'
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (rental) =>{
    setCartItems((prevState) => [...prevState, rental] );
  }

  const onRemove = (rental) => {
   setCartItems(cartItems.filter(cartItem => cartItem.id !== rental.id));
  }

  return (
    <div className="App">
      <div className='header'><h1>JS320BnB</h1></div>
      <div className='main-container col-12'>
        <div className='bnb-ui-main-container col-12 col-md-8'>
       {bnbs.map((rental) => {
         let isInCart = false;
         for(const cartItem of cartItems){
          if(cartItem.id === rental.id){
            isInCart = true
            break
          }
         }
         return <div className='container col-12 bnb-container' key={rental.id} id={rental.id}> 
                <Image src={rental.image} alt="Picture of the rental location " />
                <BnbDetails title={rental.title} houseType={rental.houseType} city={rental.location.city} country={rental.location.country}/>
                <hr/>
                <HostDetails host={rental.host.name} superHost={rental.host.isSuperhost} rating={rental.rating.stars} reviews={rental.rating.reviews} />
                <hr/>
                <Cost cost={rental.payment.cost} description={rental.payment.description} /> 
                <CartBtn rental={rental} onAdd = {onAdd} isInCart={isInCart}/>
              </div>
            
       })}
    </div>
     <Cart cartItems={cartItems} onRemove={onRemove}/>
    </div>
    </div>
  );
}

export default App;
