import React from 'react';
import '../ecommerceApp.css';
import showhideBtn from '../graphics/HideShow.png';
import viewCartBtn from '../graphics/ShoppingCart.png';

export default function CartSummary({rentalToAddList}) {
    const totalRentalItem = rentalToAddList.Count;
    let totalRentalCost = 0;
    totalRentalCost = rentalToAddList.map((addedRentalItem, idx) => {
        totalRentalCost += addedRentalItem.payment.cost;
        return totalRentalCost;
    });
    return (
       
        <div className="cartSummary-div">
            <div>
                <input Type="image" src={showhideBtn} onClick="" className="cartSummary-hideShowBtn" alt="HideShowBtn"/>
            </div>
            <div className="cartSummary-CartInfoPanel-div">
                <div>
                    <input Type="image" src={viewCartBtn} onClick="" className="cartSummary-viewCartBtn" alt="ViewCartBtn"/>
                </div>
                <div className="cartSummary-CartInfoPanel-CartInfo-div">
                    <p>Item Count: {totalRentalItem}</p>
                    <p>Total Cost: {totalRentalCost} </p>
                </div>
            </div>
            
        </div>
        
    );
}