import React from "react";

export default function BookCard({
    img,
    bookInfo,
    bookAuthor,
    category,
    price

}) {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <div className="h-60 w-full overflow-hidden">
        <img
          src={`${img}`}
          alt="Book Cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{bookInfo}</h2>
        <p className="text-sm text-gray-500 mb-2">{bookAuthor}</p>
        <div className="flex space-x-2 mb-3">
          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">{category}</span>
          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">{category}</span>
        </div>
        <p className="text-blue-600 font-semibold text-lg">{price}</p>
      </div>
    </div>
  );
}
