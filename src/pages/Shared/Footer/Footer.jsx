import React from "react";
import logo from "./../../../assets/favicon.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-text pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="flex gap-2 items-center">
            <img className="w-16 h-16" src={logo} alt="Hoteleo" />
            <h3 className="text-2xl text-accent font-bold">Hoteleo</h3>
          </div>
          <p className="text-base font-medium mt-3 text-text">
            Seamless hotel booking experience since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-text font-medium">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/allRooms"}>All Rooms</NavLink>
            </li>
            <li>
              <NavLink to={"/myBookings"}>My Bookings</NavLink>
            </li>
            <li>
              <NavLink to={"/contactUs"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">Support</h3>
          <ul className="space-y-2 text-sm text-text font-medium">
            <li>
              <a className="cursor-pointer">FAQ</a>
            </li>
            <li>
              <a className="cursor-pointer">Terms & Conditions</a>
            </li>
            <li>
              <a className="cursor-pointer">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="text-text cursor-pointer hover:text-accent">
              <FaFacebookF />
            </a>
            <a className="text-text cursor-pointer hover:text-accent">
              <FaInstagram />
            </a>
            <a className="text-text cursor-pointer hover:text-accent">
              <FaTwitter />
            </a>
            <a className="text-text cursor-pointer hover:text-accent">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-accent mt-8 pt-4 text-center text-sm text-accent font-semibold">
        &copy; {new Date().getFullYear()} Hoteleo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
