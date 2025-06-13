import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookingModal from "./BookingModal/BookingModal";

const RoomDetails = () => {
  const room = useLoaderData();
  const [roomData, setRoomData] = useState(room);

  return (
    <div className="pt-30 bg-gradient-to-br px-5 lg:px-0 from-yellow-50 to-white pb-14 bg-base-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <img
            src={room.image}
            alt={room.title}
            className="rounded-lg w-full"
          />

          <div className="text-gray-600 rounded-2xl shadow-xl p-8 space-y-6">
            <h1 className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">
              {room.title}
            </h1>
            <p>{room.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Location:</strong> {room.location}
              </div>
              <div>
                <strong>Price:</strong> ${room.price}
              </div>
              <div>
                <strong>Size:</strong> {room.size}
              </div>
              <div>
                <strong>Bed Type:</strong> {room.bedType}
              </div>
              <div>
                <strong>Max Guests:</strong> {room.maxGuests}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                {roomData.availability ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Not Available
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2 text-sm pt-2">
              <div>
                <strong>Features:</strong>{" "}
                <span>{room.features?.join(", ") || "N/A"}</span>
              </div>
              <div>
                <strong>Amenities:</strong>{" "}
                <span>{room.amenities?.join(", ") || "N/A"}</span>
              </div>
              <div>
                <strong>Tags:</strong>{" "}
                <span>{room.tags?.join(", ") || "N/A"}</span>
              </div>
            </div>

            {roomData.availability ? (
              <>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn bg-yellow-500 text-white"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Book Now
                </button>

                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="text-2xl text-yellow-500 font-bold mb-4">
                      Booking Summary
                    </h3>
                    <BookingModal
                      room={room}
                      setRoomData={setRoomData}
                    ></BookingModal>
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            ) : (
              <button className="btn btn-disabled">Not Available</button>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 max-w-3xl mx-auto px-5 lg:px-0">
        <h2 className="text-2xl font-semibold mb-2 text-center">Reviews:</h2>
        {room.reviews.length ? (
          <div className="space-y-3">
            {room.reviews.map((review, idx) => (
              <div key={idx} className="border p-3 rounded-lg bg-base-200">
                <p className="text-sm text-gray-800">{review.comment}</p>
                <p className="text-xs text-yellow-600">— {review.userName}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <hr className="mb-5 mt-4 border-t-4 border-yellow-500" />
            <p className="italic text-center text-gray-500">
              No reviews available for this room.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;
