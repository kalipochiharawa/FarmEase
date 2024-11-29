// components/Header.js
import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-end items-right p-4 ">
      <div className="flex items-right space-x-4">
        {/* Contact Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell className="h-6 w-6" />
        </button>

        {/* Account Button */}
        <div className="flex items-right space-x-3">
          <button><IoPersonOutline className="h-6 w-6 text-gray-600" /></button>
          <button className="text-gray-800 font-medium ">My Account</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
