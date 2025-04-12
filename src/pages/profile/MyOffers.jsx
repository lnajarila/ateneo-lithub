/**
 * Author: Lurd Synell B. Najarila
 * Description: Component that fetches offers and displays in a list.
 */

import { useContext } from 'react';
import { OfferContext } from '../../context/OfferContext.jsx';
import { ListingContext } from '../../context/ListingContext.jsx';
import Card from '../../components/Card.jsx';
import OfferStatusIndicator from '../../widgets/OfferStatusIndicator.jsx';

function MyOffers({ userId }) {
  const { getOffersByUserId } = useContext(OfferContext);
  const { getListingById } = useContext(ListingContext);
  const offers = getOffersByUserId(parseInt(userId));
  const numberFormat = Intl.NumberFormat('PH', {style: 'currency', currency: 'PHP'});
  const dateFormat = Intl.DateTimeFormat('PH', {month: 'long', day: 'numeric', year: 'numeric'});

  if (offers.length <= 0) {
    return (
      <p className='text-center italic'>No offers found.</p>
    );
  }

  return (
    <ul>
      {offers.map((offer) => {
        const listing = getListingById(offer.listingId);
        const offerDate = new Date(offer.offerDate);
        
        return (
          <li key={offer.offerId} className='group mb-6 last:mb-0'>
            <Card elevation={2}>
              <div className='flex flex-col brightness-95 hover:brightness-100 duration-300'>
                {/* Listing details */}
                <section className='flex gap-6 p-8 bg-slate-200'>
                  {/* Book image */}
                  <figure className='w-40 h-24 bg-accent-500 cursor-pointer'></figure>
                  
                  <hgroup className='flex flex-col justify-between'>
                    <div>
                      <h4 className='font-serif text-2xl font-bold text-primary-500 cursor-pointer'>{listing.title}</h4>
                      <p className='italic text-gray-900'>{listing.authors.join(', ')}</p>
                    </div>

                    <p className='text-lg text-gray-900'>{numberFormat.format(listing.price)}</p>
                  </hgroup>
                </section>

                {/* Offer details */}
                <section className='p-8'>
                  <header className='flex items-center justify-between mb-2'>
                    <div className='flex items-center'>
                      <p className='mr-2 font-semibold text-gray-900'>Offered Price:</p>
                      <p className='mr-4 font-extrabold text-2xl text-primary-500'>{numberFormat.format(offer.offerAmount)}</p>
                      <OfferStatusIndicator offerStatus={offer.status}>{offer.status}</OfferStatusIndicator>
                    </div>

                    <p className='text-gray-600'>{dateFormat.format(offerDate)}</p>
                  </header>
                  
                  <div className='p-6 bg-gray-200'>
                    <p className='text-gray-900'>"{offer.message}"</p>
                  </div>
                </section>
              </div>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

export default MyOffers;