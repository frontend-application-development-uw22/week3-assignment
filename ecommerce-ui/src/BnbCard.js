import React from 'react';

export default function BnbCard({bnb}) {
    // let superHost = '';
    // if (bnb.host.isSuperhost === true) {
    //     superHost = `Superhost`;
    // };
    return (
        <div className='container'>

            <img className='image' src={bnb.image} alt={bnb.title}></img>

            <div className='information'>

                <div className='leftSide'>
                    <div className='location'>
                        <b>{bnb.location.city}, {bnb.location.country}</b>
                    </div>
                    <div className='title'>
                        <b>{bnb.title}</b>
                    </div>
                    <div className='houseType'>{bnb.houseType}</div>
                    <div className='cost'>${bnb.payment.cost}</div>
                    <div className='description'>{bnb.payment.description}</div>
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
