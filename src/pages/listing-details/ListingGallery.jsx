/**
 * Author: Lurd Synell B. Najarila
 * Description: Gallery component to display images of listing
 */

import { useState } from 'react';

function ListingGallery({ imageUrls }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const imageThumbnails = imageUrls.map((element, index) =>
    selectedImage == index
      ? <li key={index} className='aspect-square h-28'>
          {/* Replace with image URL */}
          <figure className='w-full h-full border-4 rounded-xl bg-gray-400'></figure>
        </li>
      : <li key={index} className='aspect-square h-28' onClick={() => setSelectedImage(index)}>
          {/* Replace with image URL */}
          <figure className='w-full h-full hover:border-2 rounded-xl bg-gray-400'></figure>
        </li>
  );

  function handlePreviousImage() {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  }

  function handleNextImage() {
    if (selectedImage < imageUrls.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  }

  return (
    <div>
      <div className='group relative mb-4 aspect-3/2 w-full'>
        <div className='flex items-center absolute left-4 h-full'>
          { imageThumbnails.length > 1 &&
              <button
                className='hidden group-hover:block aspect-square h-12 rounded-full bg-gray-50 shadow-lg'
                onClick={() => handlePreviousImage()}
              >
                <div className='flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
          }
        </div>
        <div className='flex items-center absolute right-4 h-full'>
          { imageThumbnails.length > 1 &&
              <button
                className='hidden group-hover:block aspect-square h-12 rounded-full bg-gray-50 shadow-lg'
                onClick={() => handleNextImage()}
              >
                <div className='flex justify-center items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
              </button>
          }
        </div>

        {/* Replace with image URL */}
        {selectedImage == 0 && <div className='w-full h-full rounded-xl bg-gray-400'></div>}
        {selectedImage == 1 && <div className='w-full h-full rounded-xl bg-red-400'></div>}
        {selectedImage == 2 && <div className='w-full h-full rounded-xl bg-green-400'></div>}
        {selectedImage == 3 && <div className='w-full h-full rounded-xl bg-orange-400'></div>}
        {selectedImage == 4 && <div className='w-full h-full rounded-xl bg-cyan-400'></div>}
        {selectedImage == 5 && <div className='w-full h-full rounded-xl bg-pink-400'></div>}
        {selectedImage == 6 && <div className='w-full h-full rounded-xl bg-violet-400'></div>}
        {selectedImage == 7 && <div className='w-full h-full rounded-xl bg-lime-400'></div>}
      </div>

      <ul className='flex justify-center gap-2 overflow-auto'>
        {imageThumbnails}
      </ul>
    </div>
  );
}

export default ListingGallery;