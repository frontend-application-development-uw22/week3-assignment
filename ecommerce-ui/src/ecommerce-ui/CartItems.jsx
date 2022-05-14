import React from "react";
import PropTypes from 'prop-types'

function CartItems({ id, item , removeRental }) {
 
    const totalPerProperty = (item.qty * item.payment.cost)

    return (

        <div key={id} className="block ">
            <div key={id} className="row">

                <div key={id} className="row  row-start">
                    <div key={id} className="column">
                        <div key={id} className=" ">{item.shortTitle}</div>
                        <div key={id} className=" ">
                            {item.qty} night(s) @ ${item.payment.cost} per night 
                        </div>
                        <div key={id}>Total Cost: ${totalPerProperty}</div>
                        <div key={id}>{item.payment.description}</div>
                    </div>
                    <div key={id} className="row block">
                        <button key={id} onClick={() => removeRental(item)} className="remove">
                            Remove
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}

CartItems.propTypes = {
    item: PropTypes.object.isRequired,
    removeRental: PropTypes.func.isRequired,
    id: PropTypes.number

}
export default CartItems