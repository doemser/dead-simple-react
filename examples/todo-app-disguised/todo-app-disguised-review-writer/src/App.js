import { useState } from "react";
import { nanoid } from "nanoid";

const stars = Array.from({ length: 5 }, (_, index) => ({
  id: index
}));

export default function App() {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <h1>Review Writer</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const comment = event.target.elements.textArea.value;
          setReviews([{ id: nanoid(), rating, comment }, ...reviews]);
        }}
      >
        {stars.map((star, index) => {
          return (
            <button
              type="button"
              key={star.id}
              onClick={() => {
                setRating(index + 1);
              }}
            >
              <svg
                width="24px"
                color={rating >= index + 1 ? "orange" : "lightgrey"}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </button>
          );
        })}
        <br />
        <textarea required type="textarea" name="textArea" />
        <br />
        <button type="submit">submit review</button>
      </form>

      <hr />

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              stars: {review.rating}
              <br />
              comment: {review.comment}
            </li>
          );
        })}
      </ul>
    </>
  );
}
