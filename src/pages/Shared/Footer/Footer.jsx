import React from "react";
import logo from "./../../../assets/favicon.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <div className="flex gap-2 items-center">
            <img className="w-16 h-16" src={logo} alt="Hoteleo" />
            <h3 className="text-2xl font-bold">Hoteleo</h3>
          </div>
          <p className="text-base font-medium mt-3 text-gray-300">
            Seamless hotel booking experience since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/aboutUs"}>About Us</NavLink></li>
            <li><NavLink to={"/allRooms"}>All Rooms</NavLink></li>
            <li><NavLink to={"/contactUs"}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a className="cursor-pointer">FAQ</a></li>
            <li><a className="cursor-pointer">Terms & Conditions</a></li>
            <li><a className="cursor-pointer">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
          <div className="flex space-x-4">
            <a className="text-gray-300 cursor-pointer hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a className="text-gray-300 cursor-pointer hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a className="text-gray-300 cursor-pointer hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a className="text-gray-300 cursor-pointer hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Hoteleo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

