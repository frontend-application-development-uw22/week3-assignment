/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from "prop-types";

export default function VacationCard({card, idx, onAdd}){

  return (

    <div key={idx} className="parent">

      <div className="child">

        <img src={card.image} className="card-img" alt="rental"/>

      </div>

      <div className="child">

        <div>

          <div className="rental-list-description">

            <p>{card.title}</p>

          </div>

        </div>

        <div className="rental-list-city">

          <p> {card.location.city} </p>

        </div>
        <div className="rental-list-country">

          <p> {card.location.country} </p>

        </div>

        <div className="rental-list-cost">

          <p> {card.payment.cost} </p>

        </div>

        <div className="rental-add-to-cart">

          <button className="btn btn-primary" onClick={onAdd}>Add to Cart</button>

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
