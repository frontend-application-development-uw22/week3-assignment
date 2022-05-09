import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ totalReviews }) {
  const [reviewers, setReviewers] = useState([]);
  const apiEndpoint = `https://randomuser.me/api/?results=10`;

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setReviewers(data.results));
  }, []);

  return reviewers.map((reviewer) => {
    return <ReviewCard data={reviewer} />;
  });
}
