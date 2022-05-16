import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const userIcon = <FontAwesomeIcon icon={faUserAlt} />
const starIcon = <FontAwesomeIcon icon={faStar} />

function HostDetails({host, superHost, rating, reviews }){

let hostDiv = <div className="host">{userIcon} &nbsp; {host} &nbsp; &#124; &nbsp; Rating: {starIcon}&nbsp;{rating} &#8226; Reviews: {reviews}</div> ;

if(superHost === true){
    hostDiv = <div className="host">{userIcon} &nbsp; {host} &#8226; <span className="superhost">Super Host</span>&nbsp; &#124; &nbsp; Rating: {starIcon}&nbsp;{rating} &#8226; Reviews: {reviews}</div>
  }
  
    return <div className='host-container'>
       {hostDiv}
     </div>;
  }

  HostDetails.propTypes = {
    host: PropTypes.string.isRequired,
    superHost: PropTypes.bool,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
  }
  

export default HostDetails;