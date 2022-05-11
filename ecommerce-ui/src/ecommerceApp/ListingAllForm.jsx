import React, {useState} from 'react';
import data from '../_data/bnbs';
import header from '../graphics/HeaderImage.PNG';
import '../ecommerceApp.css';
import ListingSingleItemForm from './ListingSingleItemForm';
import CartSummary from './CartSummary';

export default function ListingAllForm(){
    const [rentalToAddList, setRentalToAddList] = useState([]);
    const rentalList = data.map( rental =>
        <ListingSingleItemForm 
            rentalItem = {rental}
            rentalToAddList = {rentalToAddList}
            setRentalToAddList = {setRentalToAddList}
        />
    );
    return (
        <div>
            <div className="header-div">
                <img src={header} className="header" alt="headerimg"/>
            </div>
            <CartSummary rentalToAddList={rentalToAddList}/>
            <div>       
                {rentalList}
            </div>
        </div>
        
    );
}