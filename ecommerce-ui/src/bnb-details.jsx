import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types';

const mapLocation = <FontAwesomeIcon icon={faMapMarker} />

function BnbDetails({title, houseType, city, country}){

  
    return <div className='details-container'>
        <div className="title">{title}
            <p className="type">Rental Type: {houseType}</p>
        </div>
        <p className="location">{mapLocation} &nbsp; {city}, {country}</p>
     </div>;
  }

  BnbDetails.propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,

  }
  

export default BnbDetails;