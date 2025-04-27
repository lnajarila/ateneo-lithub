/**
 * Author: Steven Gabriel Y. Williams
 * Description: Reusable header component
 */

import logo from '../assets/lithub-logo.png';

function Header() {
  return (
    <header className="bg-[#1D4289] text-white p-4">
      <div className="relative flex items-center justify-between font-serif">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Ateneo LitHub Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Ateneo LitHub</h1>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <a 
            href="#home" 
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#browse-books" 
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300"
          >
            Browse Books
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="#login" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Login
          </a>
          <a 
            href="#signup" 
            className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-[#1D4289] transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;