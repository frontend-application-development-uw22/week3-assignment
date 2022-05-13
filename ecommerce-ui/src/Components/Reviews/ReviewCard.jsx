import React from "react";
import PropTypes from "prop-types";
import "./ReviewCard.css";

export default function ReviewCard({ reviewer, review, reviewsLoaded }) {
  if (!reviewsLoaded) {
    return <h2>Loading reviews...</h2>;
  } else {
    return (
      <div className="review-card">
        <img
          className="review-card__image"
          src={reviewer.picture.medium}
          alt={reviewer.name.first}
        />
        <div className="review-card__review">
          <h4 className="review-card__name">{reviewer.name.first}</h4>
          <p className="review-card__review">{review.slice(0, 100)}...</p>
        </div>
      </div>
    );
  }
}

ReviewCard.propTypes = {
  reviewer: PropTypes.object.isRequired,
  review: PropTypes.string.isRequired,
};
