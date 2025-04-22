/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays details of selected book listing, seller info, and related book listings.
 */

import { useContext } from 'react';
import { useParams, Link } from 'react-router';
import { ListingContext } from '../context/ListingContext.jsx';
import ProfileCard from '../widgets/ProfileCard.jsx';
import Card from '../components/Card.jsx';

function ListingDetails() {
  const { getListingById } = useContext(ListingContext);
  const { listingId } = useParams();
  const listing = getListingById(parseInt(listingId));
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});

  return (
    <div className='max-w-3/4'>
      <nav className='mb-4'>
        <ul className='flex flex-row'>
          <li className="text-gray-600 after:px-4 after:content-['>']">Book Listings</li>
          <li className="text-gray-600 after:px-4 after:content-['>']">{listing.category}</li>
          <li className="text-gray-600 after:px-4 after:content-['>']">{listing.subcategory}</li>
          <li className="font-bold text-primary-500">{listing.title}</li>
        </ul>
      </nav>

      <section>
        <Card elevation={1}>
          <div className='p-16 grid grid-cols-2 gap-16'>
            <div>
              <div className='mb-2 aspect-3/2 w-full bg-gray-400'></div>

              <div className='grid grid-cols-4 gap-2'>
                <div className='aspect-3/2 w-full bg-gray-400'></div>
                <div className='aspect-3/2 w-full bg-gray-400'></div>
                <div className='aspect-3/2 w-full bg-gray-400'></div>
                <div className='aspect-3/2 w-full bg-gray-400'></div>
              </div>
            </div>
            
            <div>
              <article className='mb-4'>
                <p className='font-serif font-bold text-3xl text-gray-900'>{listing.title}</p>
                <p className='text-gray-600 text-xl'>{listing.authors.join(', ')}</p>
              </article>

              <article className='mb-8'>
                <p className='font-extrabold text-2xl text-primary-500'>{numberFormat.format(listing.price)}</p>
                {listing.isPriceNegotiable && (
                  <p className='italic text-sm text-gray-600'>Price negotiable</p>
                )}
              </article>

              <div className='flex flex-col gap-1 p-8 bg-slate-100'>
                <article className='flex flex-row'>
                  <p className='min-w-32 font-bold text-gray-900'>ISBN</p>
                  {listing.isbn
                    ? <p>{listing.isbn}</p>
                    : <p className='italic text-gray-600'>No ISBN provided</p>
                  }
                </article>

                <article className='flex flex-row'>
                  <p className='min-w-32 font-bold text-gray-900'>Condition</p>
                  <p>{listing.condition}</p>
                </article>

                <article className='flex flex-row'>
                  <p className='min-w-32 font-bold text-gray-900'>Category</p>
                  <p>{listing.category} {'>'} {listing.subcategory}</p>
                </article>

                {listing.course && (
                  <article className='flex flex-row'>
                    <p className='min-w-32 font-bold text-gray-900'>Course</p>
                    <p>{listing.course}</p>
                  </article>
                )}
              </div>

              <hr className='mx-auto my-12 max-w-3/4 border-gray-400' />

              <article className='mb-8'>
                <p className='mb-2 font-serif font-bold text-xl'>Description</p>
                <p>{listing.description}</p>
              </article>

              <div className='flex justify-center w-full'>
                <button className='min-w-72 px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-400 font-bold text-gray-900 cursor-pointer'>
                  Make Offer
                </button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className='mt-8'>
        <Link to={`/user/${listing.userId}`}>
          <ProfileCard userId={listing.userId} />
        </Link>
      </section>
    </div>
  );
}

export default ListingDetails;