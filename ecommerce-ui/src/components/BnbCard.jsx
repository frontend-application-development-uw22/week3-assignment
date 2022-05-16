import React from 'react';

const BnbCard = (props) => {

  const { bnb, onAdd } = props;

  return (
    <div>
      <img src={bnb.image} alt={bnb.title}/>
      <h2>{bnb.title}</h2>
      <p>Located in {bnb.location.city}, {bnb.location.country}</p>
      <p>${bnb.payment.cost}/night</p>
        <button onClick={() => onAdd(bnb)}>Reserve</button>
    </div>
  );
}

export default BnbCard;