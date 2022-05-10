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
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
