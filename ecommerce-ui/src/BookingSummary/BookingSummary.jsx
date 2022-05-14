import React from 'react';
import HouseImage from '../HouseCard/HouseImage';
import Proptypes from 'prop-types';
export default function BookingSummary ({ imageUrl, title, houseType, stars, reviews, isSuperhost, cost, noOfNights, removeBooking}) {

    const totalCost = () => {
      return  cost * noOfNights;
    }
    const total = () => {
      let sum = totalCost () + 40 + 70;
        return sum;
    }
    const totalPrice = totalCost();
    const calculation = total();

    return (
        <div className = "booking-container">
            <div className = "details-container">
              <div className = "image-section booking-img">
                <HouseImage imageUrl = { imageUrl }/>
              </div>
              <div>
                <h3 className ="house-name">{ title }</h3>
                <div className = "heart-div">
                  <p className = "amenities">Type: { houseType }</p>
                </div>
                <div className = " heart-div ">
                  <p className = "reviews">{ stars } star ({ reviews }) reviews</p>
                  <p>{isSuperhost ? "Superhost" : "" }</p>
                </div>
              </div>
            </div>
            <hr/>
            <h3 className = "bookingSummary__heading">Price details</h3>
            <div className = "booking-cards ">
              <p className = "booking-text">{ cost } x { noOfNights }</p>
              <p> ${ totalPrice }</p>
            </div>
            <div className = "booking-cards ">
              <p className = "booking-text">Service fee</p>
              <p>$40</p>
            </div>
            <div className = "booking-cards ">
              <p className = "booking-text">Occupancy taxes and fees</p>
              <p>$70</p>
            </div>
            <hr className = "booking-line"/>
            <div className = "booking-cards ">
              <p className = "booking-text">Total(USD)</p>
              <p>${ calculation }</p>
            </div>
            <div className = "booking-cards ">
              <button onClick = { removeBooking }>Remove</button>
              {/* <button onClick = { proceedPayment } >Proceed payment</button> */}
            </div>
            </div>
    );
}

BookingSummary.propTypes = {
  BookingSummary: Proptypes.object.isRequired
}
