import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-100">
      <nav className="flex items-center justify-between p-6 h-20 bg-white shadow-sm">
        <div className="py-5 px-3 rounded-full">
          <Link to="/">
            <img
              src="file.png"
              alt="logo"
              className="h-12 md:h-20 w-auto block mx-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex md:flex lg:flex space-x-5 text-l">
          <li className="text-gray-700  hover:underline">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-gray-700 hover:underline">
            <Link to="/bestsellers">BestSellers</Link>
          </li>
          <li className="text-gray-700 hover:underline">
            <Link to="/Register">Register</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden md:hidden lg:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-indigo-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden md:hidden lg:hidden bg-white shadow-sm">
          <ul className="py-2">
            <li className="block py-2 px-4 text-gray-700 hover:text-indigo-700">
              <Link to="/">Shop</Link>
            </li>
            <li className="block py-2 px-4 text-gray-700 hover:text-indigo-700">
              <Link to="/products">Products</Link>
            </li>
            <li className="block py-2 px-4 text-gray-700 hover:text-indigo-700">
              <Link to="/bestsellers">BestSellers</Link>
            </li>
            <li className="block py-2 px-4 text-gray-700 hover:text-indigo-700">
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
