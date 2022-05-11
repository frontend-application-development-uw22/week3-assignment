/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from "prop-types";

export default function ShopItem({card, idx, onRemove}){

  return (

    <div key={idx} className="shopping-cart">

      <div>

        <img src={card.image} className="shopping-cart-img" alt="rental"/>

      </div>

      <div className="rental-description">

        <div>

          <div>

            <p>{card.title}</p>

          </div>

        </div>

      </div>

      <div>

        <p className="rental-city"> {card.location.city} </p>

      </div>

      <div>

        <p className="rental-price"> {card.payment.cost} </p>

        <div>
          <button className="btn btn-danger" onClick={onRemove}>Remove</button>
        </div>

      </div>

    </div>

  )


}

// VacationCard.propTypes = {
//
//   card: PropTypes.object.isRequired,
//   idx: PropTypes.number.isRequired,
//
// }
