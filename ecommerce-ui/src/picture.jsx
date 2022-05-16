import React from 'react';

import PropTypes from 'prop-types';

function Image({src, alt}){
    return <img className='image col-6 col-md-4' src={src} alt={alt}/>;
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Image