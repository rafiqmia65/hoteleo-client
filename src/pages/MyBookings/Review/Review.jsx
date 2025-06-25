import React, { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import useReviewApi from "../../../api/useReviewApi";

const Review = ({ roomId }) => {
  const { user } = useAuth();
  const [ratingError, setRatingError] = useState("");

  const { getReviewRoom } = useReviewApi();

  const handleReview = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const rating = parseFloat(form.rating.value);
    const comment = form.comment.value;

    if (isNaN(rating) || rating < 1 || rating > 5) {
      setRatingError("Invalid Rating, Please enter a rating between 1 and 5");
      return;
    }

    const review = {
      name,
      rating,
      comment,
      userName: name,
      date: new Date().toISOString(),
    };

    getReviewRoom(roomId, review)
      .then((response) => {
        if (response.data.success) {
          Swal.fire("Thanks!", "Your review has been submitted.", "success");
          form.reset();
          document.getElementById("review_modal").close();
        } else {
          Swal.fire(
            "Error",
            response.data.message || "Failed to submit review",
            "error"
          );
        }
      })
      .catch((err) => {
        console.error("Review Error:", err);
        let errorMessage = "Something went wrong. Try again.";

        if (err.response) {
          errorMessage = err.response.data?.message || errorMessage;
        } else if (err.request) {
          errorMessage = "Network error. Please check your connection.";
        }

        Swal.fire("Error", errorMessage, "error");
      });
  };

  return (
    <div>
      <h3 className="font-medium text-yellow-600 text-lg">
        Give a Review of this Room!
      </h3>
      <form onSubmit={handleReview}>
        <fieldset className="fieldset mt-5">
          <label className="label">Name</label>
          <input
            name="name"
            defaultValue={user?.displayName || ""}
            type="text"
            className="input w-full"
            placeholder="Name"
            readOnly
            required
          />

          <label className="label">Rating</label>
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            className="input w-full"
            placeholder="Rating (1 to 5)"
            required
          />
          {ratingError && <p className="text-sm text-red-400">{ratingError}</p>}

          <label className="label">Comment</label>
          <textarea
            name="comment"
            className="textarea w-full"
            placeholder="Your review comment"
            rows="3"
            required
          />

          <button className="btn text-white bg-yellow-500 hover:bg-yellow-600 mt-4">
            Submit Review
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Review;
