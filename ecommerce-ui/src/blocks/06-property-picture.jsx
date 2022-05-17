import React from 'react';
import PropTypes from 'prop-types';

function PropertyPicture({picturePath}){
    return (
        <img className='property-picture' alt='placeholder due to lack of .json' src={picturePath}></img>
    );
}

PropertyPicture.propTypes = {
    picturePath: PropTypes.string.isRequired
}

export default PropertyPicture