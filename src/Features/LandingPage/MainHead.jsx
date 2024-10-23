import React, { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-4xl font-extrabold text-green-500">
          FarmEase.
        </a>
        <div className="flex items-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 sm:px-4 rounded text-sm sm:text-base">
            + Add Product
          </button>
          <FaBars
            className="text-gray-600 text-2xl sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <FaUser className="w-8 h-8 text-gray-600" />
          <div className="flex flex-col items-start text-gray-600">
            <span className="text-sm sm:text-base my-0">Welcome User</span>
            <div className="flex items-center">
              <a href="/login" className="underline-animation font-bold text-sm sm:text-base mr-2">
                Login
              </a>
              <span className="text-black font-medium mx-2 text-sm sm:text-base">or</span>
              <a href="/register" className="underline-animation text-sm font-bold sm:text-base">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden mt-2 space-y-2">
          <FaUser className="w-6 h-6 text-gray-600 mx-auto" />
          <div className="text-center text-gray-600">
            <span className="text-sm text-gray-700 sm:text-base">Welcome User</span>
            <div className="flex flex-col items-center">
              <a href="/login" className="underline-animation  text-sm sm:text-base mb-2">
                Login
              </a>
              <a href="/register" className="underline-animation text-sm sm:text-base">
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
