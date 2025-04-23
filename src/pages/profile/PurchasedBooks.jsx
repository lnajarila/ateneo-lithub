/**
 * Author: Lurd Synell B. Najarila
 * Description: Component that fetches purchased books and displays in a list.
 */

import { useContext } from 'react';
import { Link } from 'react-router';
import { PurchaseContext } from '../../context/PurchaseContext.jsx';
import { ListingContext } from '../../context/ListingContext.jsx';
import ProfileListing from '../../widgets/ProfileListing.jsx';

function PurchasedBooks({ userId }) {
  const { getPurchasesByBuyerId } = useContext(PurchaseContext);
  const { getListingById } = useContext(ListingContext);
  const purchases = getPurchasesByBuyerId(parseInt(userId));

  if (purchases.length <= 0) {
    return (
      <p className='text-center italic'>No purchases found.</p>
    );
  }

  return (
    <ul>
      {purchases.map((purchase) => {
        const listing = getListingById(purchase.listingId);

        return (
          <li key={purchase.id} className='mb-6 last:mb-0'>
            <Link to={`/listings/${listing.id}`}>
              <ProfileListing listing={listing} listingStatus={'Available'} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PurchasedBooks;