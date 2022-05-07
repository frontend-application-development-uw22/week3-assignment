import React from 'react';

function HouseImage (props) {
    return (
        <img src = { props.imageUrl } alt = "house image is loading" className = "house-image"/>
    );
}

export default HouseImage;

