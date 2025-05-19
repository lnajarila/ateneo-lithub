/**
 * Author: Steven Gabriel Y. Williams
 * Description: Reusable header component (state-based navigation)
 */
import React from 'react';
import logo from '../assets/LitHubLogo.png';

function Header({ onNav }) {
  return (
    <header className="bg-[#1D4289] text-white p-4 shadow-md">
      <div className="relative flex items-center justify-between font-serif max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Ateneo LitHub Logo" className="h-8 w-8" />
          <button
            onClick={() => onNav && onNav('home')}
            className="text-2xl font-bold cursor-pointer text-white hover:text-gray-300 transition-colors duration-300"
            style={{ textDecoration: 'none' }}
          >
            Ateneo LitHub
          </button>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <button
            onClick={() => onNav && onNav('home')}
            className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => onNav && onNav('browse-books')}
            className="text-lg text-white hover:text-gray-300 transition-colors duration-300"
          >
            Browse Books
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNav && onNav('login')}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => onNav && onNav('register')}
            className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-[#1D4289] transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;