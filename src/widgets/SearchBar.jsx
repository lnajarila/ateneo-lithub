import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-xl rounded-md border border-gray-300 overflow-hidden mt-7">
        <input
            type="text"
            placeholder="Search by title, author, or ISBN..."
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
        />
        <button className="bg-blue-900 text-white px-6 py-2 font-semibold hover:bg-[#1A407A] hover:cursor-pointer">
            Search
        </button>
    </div>
  )
}

export default SearchBar