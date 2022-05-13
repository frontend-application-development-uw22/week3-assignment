import React from "react";

function CartItems({ index, item, addRental, removeRental }) {
    // console.log(index);
    return (

        <div className="block col-2">
            <div className="row">

                <div key={index} className="row  row-start">
                    <div className="column">
                        <div key={index} className=" ">{item.shortTitle}</div>
                        <div key={index} className=" ">
                            1 night @ ${item.payment.cost} per night
                        </div>
                    </div>
                    <div key={index} className="row block">
                        <button key={index} onClick={() => removeRental(index)} className="remove">
                            -
                        </button>
                        <button key={index} onClick={() => addRental(index)} className="add">
                            +
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CartItems