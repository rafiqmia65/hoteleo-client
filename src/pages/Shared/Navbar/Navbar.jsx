import React from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../../../assets/logo.png";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: `You are successfully LogOut`,
          text: "You clicked the button!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const links = (
    <>
      <li className="text-base font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/allRooms"}>All Rooms</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/myBookings"}>My Bookings</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/contactUs"}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-yellow-50 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="cursor-pointer">
            <img className="w-36 h-14" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3">
              <img
                className="w-10 rounded-full ring-2 ring-yellow-500"
                src={user?.photoURL}
                alt="User"
              />
              <button
                onClick={handleLogOut}
                className="btn bg-yellow-500 text-white"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink className="btn bg-yellow-500 text-white" to={"/login"}>
                Login
              </NavLink>
              <NavLink className="btn bg-yellow-600 text-white" to={"/signUp"}>
                SignUp
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
