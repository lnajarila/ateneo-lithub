/**
 * Author: Lurd Synell B. Najarila
 * Description: Context provider to manage purchases data and provide CRUD functions.
 */

import { createContext, useState } from 'react';
import { samplePurchases } from '../data/samplePurchases';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  // Initialize purchases from localStorage or sample purchase data
    const [purchases, setPurchases] = useState(() => {
      const storedPurchases = localStorage.getItem('purchases');
      return storedPurchases ? JSON.parse(storedPurchases) : samplePurchases;
    });
  
    // Save to localStorage whenever listing data changes
    const savePurchases = (updatedPurchases) => {
      setPurchases(updatedPurchases);
      localStorage.setItem('purchases', JSON.stringify(updatedPurchases));
    };
  
    // CREATE: Add a new listing
    const createPurchase = () => {};
  
    // READ: Get listings
    const getPurchases = () => purchases;
    const getPurchaseById = (id) => purchases.find((purchase) => purchase.id === id);
    const getPurchasesByBuyerId = (userId) => {
      return purchases
        .filter((purchase) => purchase.buyerId === userId)
        .sort((a, b) => {
          const dateA = new Date(a.purchaseDate);
          const dateB = new Date(b.purchaseDate);
          return dateB - dateA;
        });
    };
  
    // UPDATE: Modify an existing listing
    const updatePurchases = (id, updatedData) => {
      const updatedPurchases = purchases.map((purchase) => {
        purchase.id === id ? {...purchases, ...updatedData} : purchase;
      });
  
      savePurchases(updatedPurchases);
    };
  
    // DELETE: Remove a listing
    const deletePurchase = (id) => {
      const updatedPurchases = purchases.filter((purchase) => purchase.id !== id);
      savePurchases(updatePurchases);
    };
  
    return (
      <PurchaseContext.Provider
        value={{
          purchases,
          savePurchases,
          createPurchase,
          getPurchases,
          getPurchaseById,
          getPurchasesByBuyerId,
          updatePurchases,
          deletePurchase,
        }}
      >
        {children}
      </PurchaseContext.Provider>
    );
};