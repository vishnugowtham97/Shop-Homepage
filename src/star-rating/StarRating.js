import React, { useState } from "react";

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);

  function handleStarClick(index) {
    setRating(index + 1);
    onChange(index + 1);
  }

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star-filled" : "star-unfilled"}
          onClick={() => handleStarClick(index)}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
