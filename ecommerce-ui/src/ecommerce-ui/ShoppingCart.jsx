import React from "react";


function ShoppingCart() {
    return (
        <>
            <div className="cart-item">
                <div className="cart-info">
                    <img
                        src="https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80"
                        alt="Centrally-located Manhattan studio"
                        className="cart-image"
                    />
                    <div className="cart-card-info">
                        <p><span>Location: </span>New York, USA</p>
                        <p><span>Price per night: $ </span>150</p>
                    </div>
                </div>
                <div className="cart-button-container">
                    <div className="cart-center-button">
                        <button className="delete-cart">Delete from cart</button>
                    </div>
                </div>

            </div>
            <div className="cart-item">
                <div className="cart-info">
                    <img
                        src="https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80"
                        alt="Centrally-located Manhattan studio"
                        className="cart-image"
                    />
                    <div className="cart-card-info">
                        <p><span>Location: </span>New York, USA</p>
                        <p><span>Price per night: $ </span>150</p>
                    </div>
                </div>
                <div className="cart-button-container">
                    <div className="cart-center-button">
                        <button className="delete-cart">Delete from cart</button>
                    </div>
                </div>

            </div>
        </>
    )

}

export default ShoppingCart