import React from 'react';
import addBtn from '../graphics/addBtn.png';
import '../ecommerceApp.css';

function ListingSingleItemForm({rentalItem, rentalToAddList, setRentalToAddList}){
    
    const addItem = (event) => {
        console.log(rentalItem);
        event.prevenDefault();
        setRentalToAddList([...rentalToAddList, rentalItem ]);
    }
    return (
        <form onSubmit={addItem}>
            <div className="listingSingleItemForm-div">      
                <div>
                    <img src={rentalItem.image} className="rental-img" alt="rentalImg"/>
                </div>
                <div className="listingSingleItemForm-rentalInfo">
                    <ul>
                        <li className="itemFont">Features: {rentalItem.title}</li>
                        <li>House Type: {rentalItem.houseType}</li>
                        <li>Location: {rentalItem.location.city}, {rentalItem.location.country}</li>
                        <li>Cost: ${rentalItem.payment.cost} avg/night, {rentalItem.payment.description}</li>
                        <li>Host Contact: {rentalItem.host.name}, {rentalItem.host.isSuperhost}</li>
                        <li>Rating: {rentalItem.rating.stars} * ({rentalItem.rating.reviews} Reviews)</li>
                    </ul>
                </div>
                <div className="listingSingleItemForm-addBtn-div">
                    <input Type="image" src={addBtn} lassName="listingSingleItemForm-addBtn" alt="AddBtn"/>
                </div>           
            </div>
        </form>
    );
}
export default ListingSingleItemForm;