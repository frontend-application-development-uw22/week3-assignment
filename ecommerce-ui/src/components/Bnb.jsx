import React from 'react';
import BnbCard from './BnbCard';

const Bnb = (props) => {

  const { bnbRentals, onAdd } = props;

  return (
    <main className="main bnbs">
      <h1>Vacation Rental Mock</h1>
      <div className="bnb-card">
        {bnbRentals.map((bnb) => (
          <BnbCard key={bnb.id} bnb={bnb} onAdd={onAdd}></BnbCard>
        ))}
      </div>
    </main>
  );
}

export default Bnb;