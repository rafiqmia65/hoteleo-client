import React from "react";
import { NavLink } from "react-router";

const CardView = ({ room }) => {
  return (
    <NavLink to={`/roomDetails/${room._id}`} className="h-full">
      <div className="bg-secondary rounded-2xl border border-accent hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 space-y-3 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-accent">{room.title}</h3>
          <p className="text-sm text-text line-clamp-2">{room.description}</p>

          <div className="flex flex-wrap items-center justify-between text-sm">
            <span className="text-text font-medium">💰 ${room.price}</span>
            <span className="text-text">Reviews: {room.reviews.length}</span>
          </div>

          <div className="text-sm text-text">
            <span className="font-semibold text-accent">Features:</span>{" "}
            {room.features.slice(0, 3).join(", ")}...
          </div>

          <div className="flex justify-between items-center pt-2 mt-auto">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                room.availability
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {room.availability ? "Available" : "UnAvailable"}
            </span>

            <button className="text-sm font-medium cursor-pointer text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-1.5 rounded-full transition-all">
              See Details
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardView;
