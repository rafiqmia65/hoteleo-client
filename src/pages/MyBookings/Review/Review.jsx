import React, { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Review = ({ roomId }) => {
  const { user } = useAuth();
  const [ratingError, setRatingError] = useState("");

  const handleReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const rating = parseFloat(form.rating.value);
    const comment = form.comment.value;

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return setRatingError(
        "Invalid Rating, Please enter a rating between 1 and 5"
      );
    }
    const review = {
      name,
      rating,
      comment,
    };

    axios
      .patch(`${import.meta.env.VITE_serverURL}/review/${roomId}`, { review })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Thanks!", "Your review has been submitted.", "success");
          form.reset();
          document.getElementById("review_modal").close();
        }
      })
      .catch((err) => {
        console.error("Review Error:", err);
        Swal.fire("Error", "Something went wrong. Try again.", "error");
        document.getElementById("review_modal").close();
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
            defaultValue={user.displayName}
            type="text"
            className="input w-full"
            placeholder="Name"
            readOnly
          />
          <label className="label">Rating</label>
          <input
            name="rating"
            type="text"
            className="input w-full"
            placeholder="Rating ( 1 to 5 )"
          />
          {ratingError && <p className="text-sm text-red-400">{ratingError}</p>}
          <label className="label">Comment</label>
          <input
            name="comment"
            type="text"
            className="input w-full"
            placeholder="Comment"
          />

          <button className="btn text-white bg-yellow-500 hover:bg-yellow-600 mt-4">
            Review
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Review;
