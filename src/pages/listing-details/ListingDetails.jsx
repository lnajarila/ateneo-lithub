/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays details of selected book listing (Modified to support navigation)
 */

import { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ListingContext } from '../../context/ListingContext.jsx';
import getListingStatus from './getListingStatus.js';
import ListingBanner from './ListingBanner.jsx';
import ListingInfo from './ListingInfo.jsx';
import BookCard from '../../widgets/BookCard.jsx';
import Header from '../../widgets/Header.jsx';
import ProfileCard from '../../widgets/ProfileCard.jsx';

function ListingDetails({ onNav }) {
  const { getListingById } = useContext(ListingContext);
  const { listingId } = useParams();
  const listing = getListingById(parseInt(listingId));
  const status = getListingStatus(listing);

  return (
    <div>
      <header>
        <Header onNav={ onNav } />
      </header>

      <main className='py-16'>
        <div className='mx-auto max-w-3/4'>
          <nav>
            <ul className='flex flex-row'>
              <li className="text-gray-600 after:px-4 after:content-['>']">Book Listings</li>
              <li className="text-gray-600 after:px-4 after:content-['>']">{listing?.category || 'Category'}</li>
              <li className="text-gray-600 after:px-4 after:content-['>']">{listing?.subcategory || 'Subcategory'}</li>
              <li className="font-bold text-primary-500">{listing?.title || 'Book Title'}</li>
            </ul>
          </nav>

          {listing && status !== 'PublicAvailable' &&
            <section className='mt-4'>
              <ListingBanner listing={listing} />
            </section>
          }

          {listing && 
            <section className='mt-4'>
              <ListingInfo listing={listing} />
            </section>
          }

          {listing && 
            <section className='mt-8'>
              <Link to={`/user/${listing.userId}`}>
                <ProfileCard userId={listing.userId} />
              </Link>
            </section>
          }

          <section className='mt-16'>
            <h3 className='font-serif text-3xl font-bold text-gray-900'>Similar Listings</h3>

            <div className='grid grid-cols-4 gap-4 mt-4'>
              {listing && <>
                <BookCard listing={listing} />
                <BookCard listing={listing} />
                <BookCard listing={listing} />
                <BookCard listing={listing} />
              </>}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ListingDetails;