import React from 'react';
import './App.css'
import CardBuilder from './components/card';
import data from './_data/bnbs' 
function App() {
  return (
    <div className='main'>
      <div className='nav'>
        <ul>
          <li>Welcome</li>
        </ul>
      </div>
      <div className='rentals'>
          {data.map((rental, index)=>{
            return(
              <CardBuilder
                imgSrc={rental.image}
                imgAlt={rental.houseType}
                imgId ={`rental_${index}`}
                imgClassName = "rental_img"
                title={rental.title}
                houseType={rental.houseType}
                stars={rental.rating.stars}
                reviewCount={rental.rating.reviews}
                hostName={rental.host.name}
                isHostSuper={rental.host.isSuperHost}
                cost={rental.payment.cost}
                cost_description={rental.payment.description}
                city={rental.location.city}
                country={rental.location.country}
                />
                // <Button variant="contained">Book</Button>
                )})
              }
      </div>
    </div>
  );
}

export default App;
