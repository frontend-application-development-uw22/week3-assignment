import React from 'react';
import PropTypes from 'prop-types';

function Combination({
    thisClassName,
    leftColumnImageAlt, 
    leftColumnImageSrc,
    leftColumnEntry,
    rightColumnImageAlt, 
    rightColumnImageSrc,
    rightColumnEntry
}) {
    return(
        <div className={thisClassName}>
            <p><img 
                    alt={leftColumnImageAlt}
                    src={leftColumnImageSrc}
                ></img> {leftColumnEntry}</p>
            <p><img 
                    alt={rightColumnImageAlt}
                    src={rightColumnImageSrc}
                ></img> {rightColumnEntry}</p>
        </div>
    );
}

Combination.PropTypes(
    thisClassName = PropTypes.string.isRequired,
    leftColumnImageAlt = PropTypes.string.isRequired,
    leftColumnImageSrc = PropTypes.string.isRequired,
    leftColumnEntry = PropTypes.string.isRequired,
    rightColumnImageAlt = PropTypes.string.isRequired,
    rightColumnImageSrc = PropTypes.string.isRequired,
    rightColumnEntry = PropTypes.string.isRequired
);

export default Combination;