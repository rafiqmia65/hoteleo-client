import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import Review from "./Review/Review";
import { FaRegCalendarTimes } from "react-icons/fa";
import BookingDateUpdate from "./BookingDateUpdate/BookingDateUpdate";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import moment from "moment";
import useBookingApi from "../../api/useBookingApi";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookingData, setMyBookingData] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const { getMyBookings } = useBookingApi();

  useEffect(() => {
    if (user?.email) {
      getMyBookings(user.email)
        .then((data) => {
          setMyBookingData(data);
        })
        .catch((err) => {
          console.error("Error fetching bookings:", err);
        });
    }
  }, [user, getMyBookings]);

  const handleBookingCancel = (bookingId, roomId, idx, bookingDate) => {
    const today = moment();
    const targetDate = moment(bookingDate);
    const diff = targetDate.diff(today, "days");

    if (diff < 1) {
      return Swal.fire({
        icon: "error",
        title: "Cancellation not allowed",
        text: "You can only cancel bookings at least 1 day in advance.",
      });
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_serverURL}/booking-cancel`, {
            data: { bookingId, roomId },
          })
          .then((res) => {
            if (res.data.success) {
              Swal.fire(
                "Cancelled!",
                "Your booking has been cancelled.",
                "success"
              );

              const updated = [...myBookingData];
              updated.splice(idx, 1);
              setMyBookingData(updated);
            } else {
              Swal.fire("Error", "Failed to cancel booking.", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  const handleReviewClick = (roomId) => {
    setSelectedRoomId(roomId);
    document.getElementById("review_modal").showModal();
  };

  return (
    <div className="pt-30 pb-16">
      <Helmet>
        <title>Hoteleo - My Bookings</title>
      </Helmet>
      <div className="container mx-auto px-5 lg:px-0">
        {myBookingData.length <= 0 ? (
          <>
            <div className="flex flex-col justify-center items-center h-[calc(100vh-200px)] text-center px-4">
              <FaRegCalendarTimes className="text-yellow-500 text-6xl mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                You haven't booked any rooms yet.
              </h2>
              <p className="text-gray-500">
                Please browse rooms and make your first booking.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">
              My Bookings
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="w-full text-sm text-left text-gray-800 border border-yellow-500">
                <thead className="bg-yellow-100 text-gray-900 uppercase text-sm">
                  <tr>
                    <th className="px-6 py-4 border-b border-yellow-500">
                      Image
                    </th>
                    <th className="px-6 py-4 border-b border-yellow-500">
                      Room
                    </th>
                    <th className="px-6 py-4 border-b border-yellow-500">
                      Date
                    </th>
                    <th className="px-6 py-4 border-b border-yellow-500 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {myBookingData.map((booking, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100"
                      }`}
                    >
                      <td className="px-6 py-4 border-b border-yellow-500">
                        <img
                          src={booking.image}
                          alt={booking.title}
                          className="w-24 h-16 rounded-md border border-yellow-400 shadow-sm"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium border-b border-yellow-500 text-lg">
                        {booking.title}
                      </td>
                      <td className="px-6 py-4 border-b border-yellow-500">
                        <span className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {new Date(booking.date).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 space-x-2 text-center border-b border-yellow-500">
                        <button
                          onClick={() =>
                            handleBookingCancel(
                              booking.bookingId,
                              booking.roomId,
                              idx,
                              booking.date
                            )
                          }
                          className="inline-flex items-center gap-1 mb-3 lg:mb-0 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow cursor-pointer"
                        >
                          <FaTrash className="text-sm" /> Cancel
                        </button>
                        <button
                          className="inline-flex items-center mb-3 lg:mb-0 gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow cursor-pointer"
                          onClick={() =>
                            document
                              .getElementById(`update_modal_${idx}`)
                              .showModal()
                          }
                        >
                          <FaEdit className="text-sm" /> Update
                        </button>

                        <dialog
                          id={`update_modal_${idx}`}
                          className="modal modal-bottom sm:modal-middle"
                        >
                          <div className="modal-box">
                            <BookingDateUpdate
                              roomId={booking.roomId}
                              bookingId={booking.bookingId}
                              idx={idx}
                              onSuccess={(newDate) => {
                                const updated = [...myBookingData];
                                updated[idx].date = newDate;
                                setMyBookingData(updated);
                              }}
                            />
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>

                        <button
                          className="inline-flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow cursor-pointer"
                          onClick={() => handleReviewClick(booking.roomId)}
                        >
                          <FaStar className="text-sm" /> Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Single review modal outside the table */}
      <dialog id="review_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {selectedRoomId && <Review roomId={selectedRoomId} />}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyBookings;
