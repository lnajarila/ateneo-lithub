/**
 * Author: Steven Gabriel Y. Williams
 * Description: Reusable header component
 */

import logo from '../assets/LitHubLogo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#1D4289] text-white p-4">
      <div className="relative flex items-center justify-between font-serif">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Ateneo LitHub Logo" className="h-8 w-8" />
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Ateneo LitHub
          </h1>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/browse-books')}
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Browse Books
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
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