import React from "react";
import { NavLink } from "react-router";

const CardView = ({ room }) => {
  return (
    <NavLink to={`/roomDetails/${room._id}`}>
      <div className="bg-white rounded-2xl border border-yellow-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-semibold text-slate-800">{room.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {room.description}
          </p>

          <div className="flex flex-wrap items-center justify-between text-sm">
            <span className="text-yellow-800 font-medium">
              💰 ${room.price}
            </span>
            <span className="text-yellow-700">
              Reviews: {room.reviews.length}
            </span>
          </div>

          <div className="text-sm text-gray-700">
            <span className="font-semibold text-yellow-800">Features:</span>{" "}
            {room.features.slice(0, 3).join(", ")}...
          </div>

          <div className="flex justify-between items-center pt-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                room.availability
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {room.availability ? "Available" : "UnAvailable"}
            </span>

            <NavLink
              to={`/roomDetails/${room._id}`}
              className="text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-1.5 rounded-full transition-all"
            >
              See Details
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CardView;
