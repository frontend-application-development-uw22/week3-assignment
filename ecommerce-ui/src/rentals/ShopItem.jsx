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


        {/*<div className="parent-two-prime">*/}

        {/*  /!*<div className="child-three">*!/*/}
        {/*  */}
        {/*  /!*  /!*<div className="child-four">*!/*!/*/}
        {/*  /!*  *!/*/}
        {/*  /!*  /!*  /!*<div className="child-five">*!/*!/*!/*/}
        {/*  /!*  /!*  *!/*!/*/}
        {/*  /!*  /!*  /!*  <p className="author-name"> {card.location.city} </p>*!/*!/*!/*/}
        {/*  /!*  /!*  /!*  <p className="author-name"> {card.location.country} </p>*!/*!/*!/*/}
        {/*  /!*  /!*  /!*  <p className="author-name"> {card.payment.cost} </p>*!/*!/*!/*/}
        {/*  /!*  /!*  /!*  <p className="author-name"> {card.description} </p>*!/*!/*!/*/}
        {/*  /!*  /!*  *!/*!/*/}
        {/*  /!*  /!*  /!*</div>*!/*!/*!/*/}
        {/*  /!*  /!*  *!/*!/*/}
        {/*  /!*  /!*  /!*<div className="child-six">*!/*!/*!/*/}
        {/*  /!*  /!*  *!/*!/*/}
        {/*  /!*  /!*  /!*  <button onClick={onRemove}>Remove From Cart</button>*!/*!/*!/*/}
        {/*  /!*  /!*  *!/*!/*/}
        {/*  /!*  /!*  /!*</div>*!/*!/*!/*/}
        {/*  /!*  *!/*/}
        {/*  /!*  /!*</div>*!/*!/*/}
        {/*  */}
        {/*  /!*</div>*!/*/}


        {/*</div>*/}


      </div>

      <div>

        <p className="rental-city"> {card.location.city} </p>

      </div>

      <div>

        <p className="rental-price"> {card.payment.cost} </p>

        <div>
          <button className="remove-button" onClick={onRemove}>Remove</button>
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
