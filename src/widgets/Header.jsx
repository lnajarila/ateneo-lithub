/**
 * Author: Steven Gabriel Y. Williams
 * Description: Reusable header component
 */

import { useContext } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/lithub-logo.png';
import { AuthContext } from '../context/AuthContext.jsx';
import { UserContext } from '../context/UserContext.jsx';

function Header() {
  const { userAuth, logout } = useContext(AuthContext);
  const { getUserById } = useContext(UserContext);
  const user = userAuth !== '' ? getUserById(parseInt(userAuth)) : null;

  return (
    <div className="bg-[#1D4289] text-white p-4 h-20">
      <div className="relative flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Ateneo LitHub Logo" className="h-8 w-8" />
          <h1 className="font-serif text-2xl font-bold">Ateneo LitHub</h1>
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <a 
            href="/" 
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300 font-sans"
          >
            Home
          </a>
          <a 
            href="/listings" 
            className="text-white hover:text-gray-300 text-lg transition-colors duration-300 font-sans"
          >
            Browse Books
          </a>
        </nav>

        { user !== null ? (
          <nav className='flex items-center space-x-4 h-full'>
            <NavLink
              to={`/user/${user.id}`}
              className='h-full'
            >
              {/* Profile Image */}
              <figure className='flex justify-center items-center aspect-square h-full rounded-full bg-sky-700'>
                <p className='font-sans text-md font-medium text-white'>
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </p>
              </figure>
            </NavLink>

            <NavLink
              to='/'
              className='flex align-center items-center h-full'
              onClick={() => logout()}
            >
              <span className='material-icons md-30'>logout</span>
            </NavLink>
          </nav>
        ) : (
          <nav className='flex items-center space-x-4'>
            <a 
              href="/login" 
              className="text-white transition-colors duration-300 font-sans border border-white rounded-sm px-4 py-1"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="border border-white px-4 py-1 rounded-sm bg-white text-[#1D4289] transition-colors duration-300 font-sans"
            >
              Sign Up
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;