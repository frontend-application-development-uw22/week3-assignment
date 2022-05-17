import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Combination from './04a-combination'
import CartButton from './05-cart-button';
import PropertyPicture from './06-property-picture'

function Information({
    title,
    houseType,
    location,
    hostName,
    priceInfo,
    stayTotal,
    picturePath
}){
    return(
        <div className="information-card">
            <h1>{title}</h1>
            <Combination
                thisClassName="combination-house-type-location"
                leftColumnImageAlt="house icon"
                leftColumnImageSrc="../icons/house-16.png"
                leftColumnEntry={houseType}
                rightColumnImageAlt="pin icon"
                rightColumnImageSrc="../icons/pin-16.png"
                rightColumnEntry={location}
            />
            <Combination
                thisClassName="combination-host-price"
                leftColumnImageAlt="desk icon"
                leftColumnImageSrc="../icons/desk-16.png"
                leftColumnEntry={hostName}
                rightColumnImageAlt="money icon"
                rightColumnImageSrc="../icons/money-16.png"
                rightColumnEntry={priceInfo}
            />
            
            <CartButton amountTotal={stayTotal}/>

            <PropertyPicture 
                picturePath={picturePath}
            />
        </div>
    );
}

Information.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    hostName: PropTypes.string.isRequired,
    priceInfo: PropTypes.string.isRequired,
    stayTotal: PropTypes.string.isRequired,
    picturePath: PropTypes.string.isRequired
}

export default Information