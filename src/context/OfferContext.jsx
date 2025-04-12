/**
 * Author: Lurd Synell B. Najarila
 * Description: Context provider to manage offer and provide CRUD functions.
 */

import { createContext, useState } from 'react';
import { sampleOffers } from '../data/sampleOffers.js';

export const OfferContext = createContext();

export const OfferProvider = ({ children }) => {
  // Initialize offers from localStorage or sample offers data
  const [offers, setOffers] = useState(() => {
    const storedOffers = localStorage.getItem('offers');
    return storedOffers ? JSON.parse(storedOffers) : sampleOffers;
  });

  // Save to localStorage whenever offers data changes
  const saveOffers = (updatedOffers) => {
    setOffers(updatedOffers);
    localStorage.setItem('offers', JSON.stringify(updatedOffers));
  };

  // CREATE: Add a new offer
  const createOffer = () => {};

  // READ: Get offers
  const getOffers = () => offers;
  const getOfferById = (id) => offeres.find((offer) => offer.offerId === id);
  const getOffersByUserId = (userId) => {
    return offers
      .filter((offer) => offer.userId === userId)
      .sort((a, b) => {
        const dateA = new Date(a.offerDate);
        const dateB = new Date(b.offerDate);
        return dateB - dateA;
      });
  };

  // UPDATE: Modify an existing offer
  const updateOffers = (id, updatedData) => {
    const updatedOffers = offers.map((offer) => {
      offer.offerId === id ? {...offers, ...updatedData} : offer;
    });

    saveOffers(updatedOffers);
  };

  // DELETE: Remove an offer
  const deleteOffer = (id) => {
    const updatedOffers = offers.filter((offer) => offer.offerId !== id);
    saveOffers(updateOffers);
  };

  return (
    <OfferContext.Provider
      value={{
        offers,
        saveOffers,
        createOffer,
        getOffers,
        getOfferById,
        getOffersByUserId,
        updateOffers,
        deleteOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};