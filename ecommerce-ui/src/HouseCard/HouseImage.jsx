import React from 'react';
import Proptypes from 'prop-types';
function HouseImage (props) {
    return (
        <img src = { props.imageUrl } alt = "loading..." className = "house-image"/>
    );
}

HouseImage.propTypes = {
    HouseImage: Proptypes.object.isRequired
}

export default HouseImage;

