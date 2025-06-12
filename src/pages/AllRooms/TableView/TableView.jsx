import React from "react";
import { NavLink } from "react-router";

const TableView = ({ room }) => {
  return (
    <tr className="first:bg-yellow-100 even:bg-yellow-50 odd:bg-white hover:bg-yellow-100 transition">
      <td>
        <img
          src={room.image}
          alt={room.title}
          className="w-20 h-14 object-cover rounded-md"
        />
      </td>
      <td className="font-semibold text-slate-800">{room.title}</td>
      <td className="text-yellow-700 font-medium">${room.price}</td>
      <td className="text-sm text-gray-600">{room.features.join(", ")}</td>
      <td>{room.rating} ⭐</td>
      <td>
        {room.availability ? (
          <span className="px-4 rounded-full font-medium py-2 bg-green-500 text-white">
            Available
          </span>
        ) : (
          <span className="px-4 rounded-full font-medium py-2 bg-red-500 text-white">
            Not Available
          </span>
        )}
      </td>
      <td>
        <NavLink
          to={`/roomDetails/${room._id}`}
          className="text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-1.5 rounded-full transition-all"
        >
          See Details
        </NavLink>
      </td>
    </tr>
  );
};

export default TableView;
