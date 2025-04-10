/**
 * Author: Lurd Synell B. Najarila
 * Description: Context provider to manage book listing data and provide CRUD functions.
 */

import { createContext, useState } from 'react';
import { sampleListings } from '../data/sampleListings.js';

export const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  // Initialize listings from localStorage or sample listing data
  const [listings, setListings] = useState(() => {
    const storedListings = localStorage.getItem('listings');
    return storedListings ? JSON.parse(storedListings) : sampleListings;
  });

  // Save to localStorage whenever listing data changes
  const saveListings = (updatedListings) => {
    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));
  };

  // CREATE: Add a new listing
  const createListing = () => {};

  // READ: Get listings
  const getListings = () => listings;
  const getListingById = (id) => listings.find((listing) => listing.id === id);
  const getListingByUserId = (userId) => listings.filter((listing) => listing.userId === userId);

  // UPDATE: Modify an existing listing
  const updateListings = (id, updatedData) => {
    const updatedListings = listings.map((listing) => {
      listing.id === id ? {...listings, ...updatedData} : listing;
    });

    saveListings(updatedListings);
  };

  // DELETE: Remove a listing
  const deleteListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    saveListings(updatedListings);
  };

  return (
    <ListingContext.Provider
      value={{
        listings,
        saveListings,
        createListing,
        getListings,
        getListingById,
        getListingByUserId,
        updateListings,
        deleteListing,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};