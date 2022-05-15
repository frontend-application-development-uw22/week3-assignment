import React from 'react';
import RentalCard from './VacationRentalCard';

export default function VacationRentalListings(props) {
  const { bnbs, onAdd } = props;
  return (
    <main className="block col-2" >

      <div >  
        <label htmlFor="start">Booking Start date:</label>
        <input type="date" id="start" name="trip-start"
                value="2022-05-22"></input>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label htmlFor="start">Booking End date:</label>
          <input type="date" id="end" name="trip-end"
                value="2022-06-22"></input>
      </div>

      <br></br>
            
      <h2> Vacation Rental Listings:</h2>
      <div className="row">
        <ul>
        {bnbs.map((bnb,index) => (
         <li>
          <RentalCard key={index} index = {index} bnb={bnb} onAdd={onAdd}></RentalCard>
          </li>))}
       </ul>
      </div>
    </main>
  );
}
