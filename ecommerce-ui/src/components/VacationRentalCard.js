import React from 'react';
 

export default function VacationRentalCard(props) {
  const { bnb, onAdd, index } = props;
  const { title,houseType, image, location, payment, host, rating } = bnb;
  console.log(`title is ${title}, image is ${image} houseType = ${houseType} host = ${host}, rating = ${rating}` );
  const {stars,reviews} = rating;
  const {city, country} = location ;
  const {cost, description} = payment;
  console.log(`city = ${city}, country = ${country} cost = ${cost}, description = ${description}`);
  const {name,isSuperhost} = host;
  const superhost = isSuperhost ? "SuperHost" : "";

  return (
    <div>
    <div className="flex-container">
       <div className="flex-child magenta">
           <img className="small" src={bnb.image} alt={bnb.title} />
       </div>
       <div className="flex-child green">
           <h3>{title} </h3>
           {houseType} <br></br>   <br></br>  
           {name} <br></br>
           {city}, {country} <br></br>  <br></br>  
           {superhost} <br></br>
           {description} <br></br> 
           {stars} star rating <br></br>
           {reviews} reviews <br></br>
            Rate: {cost}$
       </div>
    </div>
          <button onClick={() => onAdd(bnb,index)}>Add To Cart</button>
    </div>

  );
}