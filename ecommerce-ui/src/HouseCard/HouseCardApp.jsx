import React, { useState } from 'react';
import HouseDetails from './HouseDetails';
import data from '../_data/bnbs.json';
import './house.css'
import BookingSummary from '../BookingSummary/BookingSummary';

function HouseCardApp () {
    const [nights, setNights] = useState (0);
    const [collectData , setCollectData] = useState([]);

    const reserveBooking = () => {
        let value = window.prompt ("Please enter number of nights");
         setNights(value);
         return
    }
    
    const selectedProperty = (index) => {
        console.log(index)
        setCollectData([...collectData, data[index]])
        return;
    }
    
    const removeBooking = (index) => {
        const selectedBooking = collectData[index];
        setCollectData([...collectData.slice(0, index), ...collectData.slice(index+1, collectData.length)]);
    }


     const bookingSummary = collectData.map ((item,idx) => 
     <BookingSummary
        key = { idx }
        imageUrl = { item.image } 
        title = { item.title }
        houseType = { item.houseType }
        cost = { item.cost }
        reviews = { item.rating.reviews }  
        stars = { item.rating.stars }
        noOfNights = { nights }
        removeBooking = {() => {removeBooking(idx)}}
     /> 
     );
    
    const houseCard = data.map((item, idx) =>
     <HouseDetails key = { idx }
        imageUrl = {item.image}
        city = { item.location.city} 
        country = {item.location.country} 
        title = {item.title}
        name = {item.host.name} 
        houseType = {item.houseType} 
        noOfGuest = {item.noOfGuest}
        noOfRoom = {item.houseDetails.noOfRoom}
        noOfBathroom = {item.houseDetails.noOfBathroom}
        amenities = {item.amenities}
        cost = {item.cost} 
        description = {item.payment.description}
        reviews = {item.rating.reviews}
        stars = {item.rating.stars}
        setNights = { setNights }
        selectedProperty = { ()=> selectedProperty (idx) }
        reserveBooking = {reserveBooking }
        />      
    );

    return (
        <div>
        <div className =" container " >
             <div>
             <p className =" home-title">Vacation rentals</p>
                 <div className = "header-button">
                     <button>Sign up</button>
                     <button>Log in</button>
                     <button>Help</button>
                     <button>Become a host</button>
                 </div>
            </div>
            <div className = " houseCards ">
                <div className = "house-div" >
                { houseCard }
                </div>
                <div className = "house-div">
                  <div className = { (Object.keys(collectData).length  !== 0 && nights > 0)  ? "show" : "hide" }>
                  <h2>Booking Summary</h2>
                {/* <BookingSummary
                    imageUrl = { collectData.image } 
                    title = { collectData.title }
                    houseType = { collectData.houseType }
                     //reviews = { collectData.rating.reviews }  
                    //  stars = { stars }
                    //  isSuperhost = { isSuperhost } 
                      cost = { collectData.cost }
                    noOfNights = { nights }
                    // proceedPayment = { proceedPayment }
                    removeBooking = { removeBooking }
                />  */}
                { bookingSummary }
                  </div>
                </div>
          </div>
          </div>
        </div>
    );
}

export default HouseCardApp;