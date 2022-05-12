import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ reviewer, review }) {
  review = review.toUpperCase();
  return (
    <div className="review-card">
      <img
        className="review-card__image"
        src={reviewer.picture.medium}
        alt={reviewer.name.first}
      />
      <div className="review-card__review">
        <h4 className="review-card__name">{reviewer.name.first}</h4>
        <p className="review-card__review">{review}...</p>
      </div>
    </div>
  );
}
