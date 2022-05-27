import React, {useState} from "react";
import data from "../_data/bnbs";
import header from "../graphics/HeaderImage.PNG";
import addBtn from "../graphics/addBtn.png";
import removeBtn from "../graphics/removeBtn.png";
import showhideBtn from '../graphics/HideShow.png';
import viewCartBtn from '../graphics/ShoppingCart.png';
import "../ecommerceApp.css";

function CartSummary({rentalToAddList, setRentalToAddList}) {
    const [cartViewable, setCartViewable] = useState(true);

    // get the totalRentalItem
    const totalRentalItem = rentalToAddList.length;
    let totalRentalCost = 0;
    //get the totalRentalCost
    rentalToAddList.forEach((addedRentalItem, idx) => {
        totalRentalCost += addedRentalItem.payment.cost;
    });

    const onHideShowBtnClick = ()=>{
        setCartViewable(!cartViewable);
    }
    return (
        <div>
          <div className="cartSummary-div">
            <div>
                <input onClick={onHideShowBtnClick} id="hideShowBtn" type="image" src={showhideBtn}  className="cartSummary-hideShowBtn" alt="HideShowBtn"/>                
            </div>
            <div className="cartSummary-CartInfoPanel-div">
                <div>
                    <img src={viewCartBtn} 
                        className="cartSummary-viewCartBtn" alt="ViewCartBtn"
                    />
                </div>
                <div className="cartSummary-CartInfoPanel-CartInfo-div">
                    <p>Item Count: {totalRentalItem}</p>
                    <p>Total Cost: ${totalRentalCost} </p>
                </div>
            </div>
            
        </div>
        <p className="title">&nbsp;&nbsp;Rental Item Selected</p>
        <div>
            {cartViewable ? <ListingSelectedRentalItems
                    rentalToAddList = {rentalToAddList}
                    setRentalToAddList = {setRentalToAddList}
                    /> : null}
        </div>
    </div>
    );
}
function ListingSingleItemRemoveForm({rentalItem, rentalToAddList, setRentalToAddList})
{   
    
    const removeItem = (el) => {
        el.preventDefault();
        let rentalToRemoveListCopy = [...rentalToAddList];
        rentalToRemoveListCopy = rentalToRemoveListCopy.filter((item) => item.id !== rentalItem.id);
        setRentalToAddList(rentalToRemoveListCopy);
      
    }
    return(
        
        <form onSubmit={removeItem}>
         <div key={rentalItem.id} className="listingSingleItemForm-div">      
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
                <input id="removeBtn" type="image" src={removeBtn} className="listingSingleItemForm-addBtn" alt="RemoveBtn"/>
            </div>           
        </div>
    </form>
    );
}

function ListingSingleItemAddForm({rentalItem, rentalToAddList, setRentalToAddList})
{       
    const addItem = (event) => {
        event.preventDefault();
        setRentalToAddList([...rentalToAddList, rentalItem ]);
    }
    return(
        <form onSubmit={addItem}>
         <div key={rentalItem.id} className="listingSingleItemForm-div">      
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
                <input id="addBtn" type="image" src={addBtn} className="listingSingleItemForm-addBtn" alt="AddBtn"/>
            </div>           
        </div>
    </form>
    );
}

function ListAllRentals({rentalToAddList, setRentalToAddList}) {
 
  return (
      
    data.map(item =>
        <ListingSingleItemAddForm 
            rentalItem = {item}   
            rentalToAddList = {rentalToAddList} 
            setRentalToAddList = {setRentalToAddList}
        />
    )    
  );
  
}

function ListingSelectedRentalItems({rentalToAddList, setRentalToAddList}){
    return (
        rentalToAddList.map(item =>
         <ListingSingleItemRemoveForm 
            rentalItem = {item}   
            rentalToAddList = {rentalToAddList} 
            setRentalToAddList = {setRentalToAddList}
        />
        )
    );
}
// main
export default function EcommerceApp() {
    const [rentalToAddList, setRentalToAddList] = useState([]);
  return (
    <div>
      <div className="header-div">
        <img src={header} className="header" alt="headerimg" />
      </div>
      <CartSummary 
        rentalToAddList={rentalToAddList}
        setRentalToAddList = {setRentalToAddList}
      />

      <div className="listingAll-div">
        <p className="title">&nbsp;&nbsp;Rental Item Available</p>  
        <ListAllRentals
            rentalToAddList = {rentalToAddList}
            setRentalToAddList = {setRentalToAddList}
        />
      </div>
    </div>
  );
}
