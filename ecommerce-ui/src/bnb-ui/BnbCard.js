import React from 'react';
import PropTypes from 'prop-types';
import BnbCart from './BnbCart.js';

export default function BnbCard({bnb}) {
    return (
        <div className='container' onClick={() => {
            <BnbCart
                image={bnb.image} 
                title={bnb.title}
                houseType={bnb.houseType}
                description={bnb.payment.description}
                stars={bnb.rating.stars}
                reviews={bnb.rating.reviews}
                superhost={bnb.host.isSuperhost}
                cost={bnb.payment.cost}
            />
          }}>
            <img className='image' src={bnb.image} alt={bnb.title}></img>
            <div className='information'>
                <div className='leftSide'>
                    <div className='location'>
                        <b>{bnb.location.city}, {bnb.location.country}</b>
                    </div>
                    <div className='title'>
                        <b>{bnb.title}</b>
                    </div>
                    <div className='houseType'>
                        {bnb.houseType} 
                        <span hidden={!bnb.payment.description}> &#x2022; {bnb.payment.description}</span>
                    </div>
                    <div className='cost'>${bnb.payment.cost}</div>
                </div>
                <div className='rightSide'>
                    <div className='name'>
                        {bnb.host.name} 
                        <span hidden={!bnb.host.isSuperhost}> &#x2022; Superhost</span>
                    </div>
                    <div className='stars'>{bnb.rating.stars} Stars</div>
                    <div className='reviews'>{bnb.rating.reviews} Reviews</div>
                </div>
            </div>
            <br></br>
        </div>
    );
}

BnbCard.propTypes = {
    bnb: PropTypes.any.isRequired,
}