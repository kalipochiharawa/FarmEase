import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Head = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Head Section */}
      <nav className="bg-white font-medium text-black px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Links - Hidden on mobile */}
          <ul className="hidden lg:flex space-x-8 text-sm font-medium">
            <li>
              <Link to="/about" className="hover:text-gray-700">
                About us
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-gray-700">
                News
              </Link>
            </li>
            <li>
              <Link to="/plans" className="hover:text-gray-700">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/industry" className="hover:text-gray-700">
                Industry
              </Link>
            </li>
            <li>
              <Link to="/how-to-post" className="hover:text-gray-700">
                How to post
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-gray-700">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-700">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-gray-700">
                FAQs
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 px-4">
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/about" className="block hover:text-gray-700">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/news" className="block hover:text-gray-700">
                  News
                </Link>
              </li>
              <li>
                <Link to="/plans" className="block hover:text-gray-700">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/industry" className="block hover:text-gray-700">
                  Industry
                </Link>
              </li>
              <li>
                <Link to="/how-to-post" className="block hover:text-gray-700">
                  How to post
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="block hover:text-gray-700">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block hover:text-gray-700">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="block hover:text-gray-700">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Separation Line */}
      <hr className="my-4 border-gray-300" />
    </>
  );
};

export default Head;
