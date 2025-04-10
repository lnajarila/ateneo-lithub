import { useContext } from 'react';
import { ListingContext } from '../../context/ListingContext.jsx';

function BookListings({ userId }) {
  const { getListingByUserId } = useContext(ListingContext);
  const listings = getListingByUserId(parseInt(userId));

  return (
    <ul>
      {listings.map((listing) => (
        <li key={listing.id}>
          {listing.id} - {listing.title}
        </li>
      ))}
    </ul>
  );
}

export default BookListings;