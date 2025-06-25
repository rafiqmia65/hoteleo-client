import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import useAuth from "../../../Hook/useAuth";
import useUpdateApi from "../../../api/useUpdateApi";

const BookingDateUpdate = ({ roomId, onSuccess, bookingId, idx }) => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [emptyDate, setEmptyDate] = useState("");

  const { getUpdateBooking } = useUpdateApi();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      return setEmptyDate("Please select a date");
    }

    getUpdateBooking(user.email, {
      roomId,
      bookingId,
      newDate: selectedDate.toISOString(),
    })
      .then((response) => {
        if (response.data.success) {
          onSuccess(selectedDate.toISOString());
          Swal.fire("Updated!", response.data.message, "success");
        } else {
          Swal.fire("Failed!", response.data.message, "error");
        }
        document.getElementById(`update_modal_${idx}`).close();
      })
      .catch((error) => {
        Swal.fire(error.message, "Something went wrong", "error");
        document.getElementById(`update_modal_${idx}`).close();
      });
  };

  return (
    <div>
      <h3 className="font-medium text-yellow-600 text-lg">
        Give a Review of this Room!
      </h3>

      <form onSubmit={handleUpdate}>
        <fieldset className="fieldset mt-10">
          <label className="label">Select Update Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="input input-bordered w-full border-yellow-400"
            minDate={new Date()}
            placeholderText="Choose a date"
          />
          {emptyDate && (
            <p className="text-red-400 text-sm text-left">{emptyDate}</p>
          )}
          <button className="btn text-white bg-yellow-500 hover:bg-yellow-600 mt-4">
            Update Booking Date
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingDateUpdate;
