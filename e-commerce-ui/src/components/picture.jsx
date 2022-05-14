import React from "react";
import PropTypes from 'prop-types'
export default function Picture({src, alt, className, id}){
  return(
    <img className={className} id={id} src={src} alt={alt} />
  )
}
Picture.propTypes ={
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // This is a styling feature therefore not required for all 
  // but the proptype must be a string
  className: PropTypes.string,
  id: PropTypes.string
}
