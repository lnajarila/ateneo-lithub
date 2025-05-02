/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays details of selected book listing, seller info, and related book listings.
 */

import { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ListingContext } from '../../context/ListingContext.jsx';
import ListingBanner from './ListingBanner.jsx';
import ListingInfo from './ListingInfo.jsx';
import ProfileCard from '../../widgets/ProfileCard.jsx';
import getListingStatus from './getListingStatus.js';

function ListingDetails() {
  const { getListingById } = useContext(ListingContext);
  const { listingId } = useParams();
  const listing = getListingById(parseInt(listingId));
  const status = getListingStatus(listing);

  return (
    <div className='max-w-3/4'>
      <nav className='mb-8'>
        <ul className='flex flex-row'>
          <li className="text-gray-600 after:px-4 after:content-['>']">Book Listings</li>
          <li className="text-gray-600 after:px-4 after:content-['>']">{listing.category}</li>
          <li className="text-gray-600 after:px-4 after:content-['>']">{listing.subcategory}</li>
          <li className="font-bold text-primary-500">{listing.title}</li>
        </ul>
      </nav>

      {status !== 'PublicAvailable' &&
        <section className='mb-8'>
          <ListingBanner listing={listing} />
        </section>
      }

      <section className='mb-8'>
        <ListingInfo listing={listing} />
      </section>

      <section>
        <Link to={`/user/${listing.userId}`}>
          <ProfileCard userId={listing.userId} />
        </Link>
      </section>
    </div>
  );
}

export default ListingDetails;