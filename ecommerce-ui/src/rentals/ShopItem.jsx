/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from "prop-types";

export default function ShopItem({card, idx, onRemove}){

  // function handleClick(e){
  //   e.preventDefault()
  //   console.log('the button was clicked')
  // }

  return (

    <div key={idx} className="parent">

      <div className="child">

        <img src={card.image} className="article-img" alt="rental"/>

      </div>

      <div className="child">

        <div id="link-article" className="parent-two">

          <div className="child-two">

            <p>{card.title}</p>

          </div>

        </div>

        <div className="parent-two-prime">

          <div className="child-three">

            <div className="child-four">

              <div className="child-five">

                <p className="author-name"> {card.location.city} </p>

                <p className="author-name"> {card.location.country} </p>

                <p className="author-name"> {card.payment.cost} </p>

                <p className="author-name"> {card.description} </p>

              </div>
              <div className="child-six">

                <button onClick={onRemove}>Remove From Cart</button>

              </div>

            </div>

          </div>


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
