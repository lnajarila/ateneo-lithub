/**
 * Author: Lurd Synell B. Najarila
 * Description: Function to get listing status for displaying banner in Listing Details page.
 */

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';

function getListingStatus(listing) {
  const { userAuth } = useContext(AuthContext);

  if (listing.userId === userAuth) {
    if (listing.status === 'Available') return 'OwnAvailable';
    if (listing.status === 'Unavailable') return 'OwnUnavailable';
    if (listing.status === 'Sold') return 'Sold';
  } else {
    if (listing.status === 'Unavailable') return 'PublicUnavailable';
    if (listing.status === 'Sold') return 'Purchased';
  }
  
  return 'PublicAvailable';
}

export default getListingStatus;