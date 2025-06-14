import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const BookingModal = ({ room, setRoomData }) => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBookRoom = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const bookingInfo = { name, email, date: selectedDate.toISOString() };

    axios
      .patch(
        `${import.meta.env.VITE_serverURL}/book-room/${room._id}`,
        bookingInfo
      )
      .then((result) => {
        if (result.data.modifiedCount) {
          setRoomData((prev) => ({
            ...prev,
            availability: false,
            bookedDates: [...(prev.bookedDates || []), bookingInfo],
          }));

          Swal.fire({
            icon: "success",
            title: "Booking Confirmed!",
            text: "Your room has been booked successfully.",
          });

          document.getElementById("my_modal_5").close();
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error?.response?.data?.message || "Something went wrong.",
        });
        document.getElementById("my_modal_5").close();
      });
  };

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
            <form onSubmit={handleBookRoom}>
              <fieldset className="fieldset">
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  name="name"
                  defaultValue={user?.displayName}
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  readOnly
                />
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  name="email"
                  defaultValue={user?.email}
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  readOnly
                />
                <label className="block mb-1 text-sm font-medium">
                  Select Booking Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="input input-bordered w-full border-yellow-400"
                  minDate={new Date()}
                  placeholderText="Choose a date"
                />
                <button
                  type="submit"
                  className="btn bg-yellow-500 hover:bg-yellow-600 text-white mt-4"
                >
                  Book Room
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
