import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ room }) => {
  return (
    <div>
      <div className="">
        <div>
          <p>
            <strong>Title:</strong> {room.title}
          </p>
          <p>
            <strong>Price:</strong> ${room.price}
          </p>
          <p>
            <strong>Description:</strong> {room.description}
          </p>
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium">
              Select Booking Date
            </label>
            <DatePicker
            //   selected={bookingDate}
            //   onChange={(date) => setBookingDate(date)}
              className="input input-bordered w-full border-yellow-400"
              minDate={new Date()}
              placeholderText="Choose a date"
            />
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button
            //   onClick={handleConfirmBooking}
              className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
