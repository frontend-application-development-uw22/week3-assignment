import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReviewCard from "./ReviewCard";
import LoadingSpinner from "../Assets/LoadingSpinner";
import "./Reviews.css";

export default function Reviews() {
  const [reviewers, setReviewers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoaded, setReviewsLoaded] = useState(false);

  const reviewerEndpoint = `https://randomuser.me/api/?results=6`;
  const reviewsEndpoint = `https://baconipsum.com/api/?type=meat-and-filler&paras=10&format=json`;

  useEffect(() => {
    fetch(reviewerEndpoint)
      .then((response) => response.json())
      .then((data) => setReviewers(data.results));
  }, []);

  useEffect(() => {
    fetch(reviewsEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setReviewsLoaded(true);
      });
  }, []);

  return (
    <div className="reviews">
      <h2 className="reviews__title">Property Reviews</h2>
      <div className="reviews__list">
        {!reviewsLoaded ? (
          <>
            <p>
              Loading reviews <LoadingSpinner />
            </p>
          </>
        ) : (
          reviewers.map((reviewer, index) => {
            return (
              <ReviewCard
                key={reviewer.login.uuid}
                reviewer={reviewer}
                review={reviews[index]}
                reviewsLoaded={reviewsLoaded}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviewers: PropTypes.string,
};
