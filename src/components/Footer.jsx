/**
 * Author: James Andrei L. Aguilar
 * Description: Footer
 */

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary-500 flex flex-col justify-center items-center p-7 gap-5'>
      <div>
        <ul className='text-white flex flex-col sm:flex-row gap-5 sm:gap-10 text-center'>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Terms of Service</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>FAQ</a></li>
        </ul>
      </div>
      <div>
        <p className='text-[#86B6C6] text-sm sm:text-base'>&copy; 2025 Ateneo LitHub. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
