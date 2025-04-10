import { useContext } from 'react';
import { ListingContext } from '../../context/ListingContext.jsx';
import Card from '../../components/Card.jsx';
import Chip from '../../components/Chip.jsx';

function BookListings({ userId }) {
  const { getListingsByUserId } = useContext(ListingContext);
  const listings = getListingsByUserId(parseInt(userId), 'Available');
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});

  return (
    <ul>
      {listings.map((listing) => (
        <li key={listing.id} className='mb-6'>
          <Card elevation={2}>
            <div className='flex h-32 brightness-95 hover:brightness-100 duration-300 cursor-pointer'>
              {/* Book Image */}
              <figure className='w-64 h-full bg-gray-400'></figure>

              {/* Listing Details */}
              <section className='flex flex-col w-full h-full px-8 py-4'>
                <hgroup>
                  <h4 className='font-serif font-bold text-xl text-gray-900'>{listing.title}</h4>
                  <p className='text-gray-600'>{listing.authors.join(', ')}</p>
                </hgroup>

                <div className='flex justify-between items-end h-full'>
                  <div className='flex gap-2'>
                    <Chip>{listing.category}</Chip>
                    <Chip>{listing.subcategory}</Chip>
                  </div>

                  <p className='font-extrabold text-primary-500 text-2xl'>
                    {numberFormat.format(listing.price)}
                  </p>
                </div>
              </section>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default BookListings;