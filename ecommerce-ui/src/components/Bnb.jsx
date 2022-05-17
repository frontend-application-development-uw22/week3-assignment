import React from 'react';
import BnbCard from './BnbCard';
import propTypes from 'prop-types';

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

Bnb.propTypes = {
    bnbRentals: propTypes.array.isRequired,
    onAdd: propTypes.func,
}

export default Bnb;