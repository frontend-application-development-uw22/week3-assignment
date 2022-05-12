import React from "react";

function CartItems({index, item, addRental, removeRental}) {

    return (
    <div  className="block col-2">
        <div className="row">
          
                <div key={index}  className="row">
                    <div key={index} className="col-2">{item.title}</div>
                    <div key={index} className="col-2">
                       <button key={index} onClick={() => removeRental(item)} className="remove">
                                -
                        </button>
                        <button key={index}  onClick={() => addRental(item)} className="add">
                                +
                        </button>
                    </div>
                    <div key={index} className="col-2 text-right">
                            {item.qty} nights x ${item.cost} 
                    </div>
                </div>
       </div>
    </div>

    )
}

export default CartItems