/**
 * Author: Lurd Synell B. Najarila
 * Description: Component to display listing information on Listing Details page
 */

import Card from '../../components/Card.jsx';
import AccentButton from '../../components/AccentButton.jsx';
import ListingGallery from './ListingGallery.jsx';

function ListingInfo({ listing }) {
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});
  
  return (
    <Card elevation={1}>
      <div className='p-16 grid grid-cols-2 gap-16'>
        <ListingGallery imageUrls={listing.imageUrls}/>
        
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
            <AccentButton>Make Offer</AccentButton>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ListingInfo;