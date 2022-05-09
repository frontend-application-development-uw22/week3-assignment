import React from "react";

export default function ReviewCard({ data }) {
  return (
    <div className="review-card">
      <img src={data.picture.thumbnail} alt={data.name.first} />
      <h5>
        {data.name.first} {data.name.first}
      </h5>
    </div>
  );
}
