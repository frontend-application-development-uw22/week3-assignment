import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import "./Reviews.css";

export default function Reviews({ totalReviews }) {
  const [reviewers, setReviewers] = useState([]);
  const [reviews, setReviews] = useState([]);

  const reviewerEndpoint = `https://randomuser.me/api/?results=5`;
  const reviewsEndpoint = `https://baconipsum.com/api/?type=meat-and-filler&paras=10&format=json`;

  useEffect(() => {
    fetch(reviewerEndpoint)
      .then((response) => response.json())
      .then((data) => setReviewers(data.results));
  }, []);

  useEffect(() => {
    fetch(reviewsEndpoint)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="reviews">
      {reviewers.map((reviewer, index) => {
        return <ReviewCard reviewer={reviewer} review={reviews[index]} />;
      })}
    </div>
  );
}
