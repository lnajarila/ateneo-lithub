/**
 * Author: Lurd Synell B. Najarila
 * Description: Component that fetches book listings and displays in a list.
 */

import { useContext } from 'react';
import { ListingContext } from '../../context/ListingContext.jsx';
import ProfileListing from '../../widgets/ProfileListing.jsx';

function BookListings({ userId, listingStatus }) {
  const { getListingsByUserId } = useContext(ListingContext);
  const listings = getListingsByUserId(parseInt(userId), listingStatus);

  if (listings.length <= 0) {
    return (
      <p className='text-center italic'>No book listings found.</p>
    );
  }

  return (
    <ul>
      {listings.map((listing) => (
        <li key={listing.id} className='mb-6 last:mb-0'>
          <ProfileListing listing={listing} listingStatus={listingStatus} />
        </li>
      ))}
    </ul>
  );
}

export default BookListings;