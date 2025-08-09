import React from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../../../assets/favicon.png";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";
import DarkLightMode from "./DarkLightMode/DarkLightMode";
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
        <NavLink to={"/allRooms"}>All Rooms</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/myBookings"}>My Bookings</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/contactUs"}>Contact Us</NavLink>
      </li>
      <li className="text-base font-bold">
        <NavLink to={"/aboutUs"}>About Us</NavLink>
      </li>

      <li className="hover:!bg-none lg:hidden">
        <div className="flex items-center justify-between">
          <NavLink
            className="btn border-yellow-500 bg-none text-text hover:bg-accent hover:text-white"
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className="btn border-yellow-600 bg-none text-text hover:bg-accent hover:text-white"
            to={"/signUp"}
          >
            SignUp
          </NavLink>
        </div>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-primary shadow-sm">
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
              className="menu menu-sm dropdown-content bg-primary rounded-box z-[999] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="cursor-pointer flex gap-2 items-center">
            <img className="w-12 h-12" src={logo} alt="" />
            <h2 className="mt-2 text-accent text-2xl font-bold">Hoteleo</h2>
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
            <div className="flex gap-3 items-center">
              <DarkLightMode></DarkLightMode>
              <div className="hidden lg:block">
                <NavLink
                  className="btn border-yellow-500 bg-transparent text-text hover:bg-accent hover:text-white mr-3"
                  to={"/login"}
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn border-yellow-600 bg-transparent text-text hover:bg-accent hover:text-white"
                  to={"/signUp"}
                >
                  SignUp
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
