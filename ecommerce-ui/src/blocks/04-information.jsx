import React from 'react';
import PropTypes from 'prop-types';

import Combination from './04a-combination'

function Information({
    houseType,
    location,
    hostName,
    priceInfo
}){
    return(
        <div className="information-card">
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
        </div>
    );
}