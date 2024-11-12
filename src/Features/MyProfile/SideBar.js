// components/SideBar.js
import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosInformation } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiTrashLight } from "react-icons/pi";

function SideBar() {
  return (
    <div className="w-64 bg-white h-screen border-r p-6 space-y-6">
      {/* Logo */}
      <h1 className="text-green-600 text-2xl font-bold mb-8">Farmease.</h1>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <FaHouse  className="h-6 w-6 mr-3" />
          Home
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <CiCirclePlus className="h-6 w-6 mr-3" />
          Add Product
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <IoWalletOutline className="h-6 w-6 mr-3" />
          Analytics
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <IoPersonOutline  className="h-6 w-6 mr-3" />
          My Profile
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <IoIosInformation className="h-6 w-6 mr-3" />
          Profile Info
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <RiLogoutCircleRLine className="h-6 w-6 mr-3" />
          Logout
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
          <PiTrashLight className="h-6 w-6 mr-3" />
          Delete Account
        </a>
      </nav>
    </div>
  );
}

export default SideBar;
