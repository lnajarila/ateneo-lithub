import Card from '../components/Card.jsx';

function ProfileListing({ listing, listingStatus }) {
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});

  return (
    <Card elevation={2} isClickable={true}>
      <div className='group flex h-32'>
        {/* Book Image */}
        {listingStatus === 'Unavailable'
          ? <figure className='w-64 h-full bg-blue-400 grayscale'></figure>
          : <figure className='w-64 h-full bg-blue-400'></figure>
        }

        {/* Listing Details */}
        <section className='flex flex-col w-full h-full px-8 py-4'>
          <hgroup>
            <h4 className='font-serif font-bold text-xl text-gray-900'>{listing.title}</h4>
            <p className='text-gray-600'>{listing.authors.join(', ')}</p>
          </hgroup>

          <div className='flex justify-between items-end h-full'>
            <div className='flex gap-2'>
              <p className='rounded-lg px-4 py-1 bg-gray-300 text-gray-600 text-sm'>
                {listing.category}
              </p>
              <p className='rounded-lg px-4 py-1 bg-gray-300 text-gray-600 text-sm'>
                {listing.subcategory}
              </p>
            </div>

            <p className='font-extrabold text-primary-500 text-2xl'>
              {numberFormat.format(listing.price)}
            </p>
          </div>
        </section>
      </div>
    </Card>
  );
}

export default ProfileListing;