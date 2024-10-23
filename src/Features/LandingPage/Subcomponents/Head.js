import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white font-medium text-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Links - Hidden on mobile */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700">
              Contact-us
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-700">
              About-us
            </Link>
          </li>
        </ul>

        {/* Currency Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <img
            src="https://flagcdn.com/w20/mw.png" // Malawi flag (20px width)
            alt="Malawi Flag"
            className="w-6 h-6"
          />
          <span className="text-sm font-semibold">MWK</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="block hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-700">
                Contact-us
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-700">
                About-us
              </Link>
            </li>
            {/* Currency Info */}
            <div className="flex items-center space-x-2 mt-4">
              <img
                src="https://flagcdn.com/w20/mw.png"
                alt="Malawi Flag"
                className="w-6 h-6"
              />
              <span className="text-sm font-semibold">MWK</span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Head;
