import React from 'react';
import propTypes from 'prop-types';


const BnbCard = (props) => {

    const { bnb, onAdd } = props;

    return (
        <div>
            <img src={bnb.image} alt={bnb.title} />
            <h2>{bnb.title}</h2>
            <p>Located in {bnb.location.city}, {bnb.location.country}</p>
            <p>${bnb.payment.cost}/night</p>
            <button onClick={() => onAdd(bnb)}>Reserve</button>
        </div>
    );
};

BnbCard.propTypes = {
    bnb: propTypes.object.isRequired,
    onAdd: propTypes.func,
};

export default BnbCard;