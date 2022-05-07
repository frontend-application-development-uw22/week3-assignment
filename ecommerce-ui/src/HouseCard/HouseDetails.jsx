import React, { useState } from 'react';
import HouseImage from './HouseImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

function HouseDetails ({imageUrl, city, country, title, name, houseType, noOfGuest, noOfRoom,  noOfBathroom, amenities, description, stars, reviews, cost, reserveBooking, selectedProperty}){   
  const [heart, setHeart] = useState (false);
    const heartfunc = () => {
        setHeart(!heart);
    }
  
    return (
        <div className = "details-container" onClick = { selectedProperty }>
            <div className = "image-section">
                <HouseImage imageUrl = { imageUrl }/>
            </div>
            <div className = "houseDetails__outerdiv">
              <div className = "heart-div">
                <p className = "first-line">Entire guest suite in { city } { country }</p>
                { heart  ? <FontAwesomeIcon  icon={ faHeartSolid } onClick = { heartfunc } size = "sm" /> : <FontAwesomeIcon  onClick = { heartfunc } icon= { faHeart } size="sm" />} 
              </div>
              <h3 className ="house-name">{ title }</h3>
              <p>Hosted by: { name } </p>
              <hr className = "after-title"/>
              <div className = "heart-div">
                <p className = "amenities">
                  <span>Type: { houseType }</span>
                  <span className = "amenities__span">{ noOfGuest }guest . { noOfRoom }rooms . { noOfBathroom }bath</span>
                </p>
              </div>
              <p className = "amenities">{ amenities }</p>
              <p className = "description ">{ description }</p>
              <div className = " heart-div ">
                <p className = "amenities">
                  <span>{ stars } star ({ reviews }) reviews</span>
                  <span className = " amenities__span bold">${ cost }</span>
                </p>
              </div>
              <button className = "reserve-button" onClick = { reserveBooking }>Reserve</button>
            </div>
        </div>
    );
}
//   

export default HouseDetails;


           
           
         
            
           
           