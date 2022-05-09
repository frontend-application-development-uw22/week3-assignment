import React from 'react'
import PropTypes from "prop-types";

export default function VacationCard({card, idx}){

  return (

    <div key={idx} className="parent">

      <div className="child">

        <img src={card.image} className="article-img"/>

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

                <p className="author-name"> {card.cost} </p>

                <p className="author-name"> {card.description} </p>

              </div>
              <div className="child-six">

                <button aria-controls="addToCatalogBookmarkButton" aria-expanded="false" aria-label="Add to list bookmark button" className="ay ki ba bb bc bd be bf bg mz">

                  <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" className="tp">
                    <path d="M 17.5 1.25 a 0.5 0.5 0 0 1 1 0 v 2.5 H 21 a 0.5 0.5 0 0 1 0 1 h -2.5 v 2.5 a 0.5 0.5 0 0 1 -1 0 v -2.5 H 15 a 0.5 0.5 0 0 1 0 -1 h 2.5 v -2.5 Z m -11 4.5 a 1 1 0 0 1 1 -1 H 11 a 0.5 0.5 0 0 0 0 -1 H 7.5 a 2 2 0 0 0 -2 2 v 14 a 0.5 0.5 0 0 0 0.8 0.4 l 5.7 -4.4 l 5.7 4.4 a 0.5 0.5 0 0 0 0.8 -0.4 v -8.5 a 0.5 0.5 0 0 0 -1 0 v 7.48 l -5.2 -4 a 0.5 0.5 0 0 0 -0.6 0 l -5.2 4 V 5.75 Z" fill="#000">

                    </path>

                  </svg>

                </button>

              </div>

            </div>

          </div>


        </div>


      </div>

    </div>

  )


}

VacationCard.propTypes = {

  card: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,

}
