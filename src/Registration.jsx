/**
 * Author: James Andrei L. Aguilar
 * Description: Registration Form
 */

import React from 'react'

const Registration = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4 py-10 bg-gray-50'>
      <div className='w-full max-w-4xl shadow-[0px_0px_15px_rgba(0,0,0,0.1)] bg-white p-10 rounded-lg'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='font-serif font-bold text-4xl'>Create an Account</h1>
          <p className='font-sans mt-3 text-base text-gray-600'>
            Join Ateneo Lithub to buy and sell books with the AdNU community
          </p>
        </div>

        {/* REGISTRATION FORM */}
        <form className='flex flex-col gap-6 mt-10'>

          {/* NAME */}
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex flex-col w-full'>
              <label className='text-base font-light font-sans'>First Name</label>
              <input
                type='text'
                id='FirstName'
                name='FirstName'
                required
                placeholder='First Name'
                className='border border-gray-400 rounded-md p-3 w-full text-base'
              />
            </div>

            <div className='flex flex-col w-full'>
              <label className='text-base font-light font-sans'>Last Name</label>
              <input
                type='text'
                id='LastName'
                name='LastName'
                required
                placeholder='Last Name'
                className='border border-gray-400 rounded-md p-3 w-full text-base'
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className='text-base font-light font-sans'>GBOX Email</label>
            <input
              type="email"
              id='email'
              name='email'
              required
              placeholder='youremail@gbox.adnu.edu.ph'
              className='border border-gray-400 rounded-md p-3 w-full text-base'
            />
            <span className='text-sm text-gray-700 font-sans'>
              We will send a verification link to this email
            </span>
          </div>

          {/* PASSWORD */}
          <div>
            <label className='text-base font-light font-sans'>Password</label>
            <input
              type="password"
              id='password'
              name='password'
              required
              placeholder='Create a strong password'
              className='border border-gray-400 rounded-md p-3 w-full text-base'
            />
            <span className='text-sm text-gray-700 font-sans'>
              Must be at least 8 characters with uppercase, lowercase, and a number
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className='text-base font-light font-sans'>Confirm Password</label>
            <input
              type="password"
              id='confirmPassword'
              name='confirmPassword'
              required
              placeholder='Re-enter your password'
              className='border border-gray-400 rounded-md p-3 w-full text-base'
            />
          </div>

          {/* CREATE ACCOUNT BUTTON */}
          <button
            type="submit"
            className='bg-accent-500 w-full py-4 text-gray-800 font-semibold font-sans rounded-md text-lg hover:bg-accent-600 transition-colors duration-200 cursor-pointer'
          >
            Create Account
          </button>

          {/* Login */}
          <div className='text-center'>
            <p className='text-base'>
              Already have an account?{' '}
              <a href='#' className='text-primary-500 font-bold'>Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
