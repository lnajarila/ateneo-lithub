/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays listing status and relevant actions to user.
 */

import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext.jsx';
import SurfaceButton from '../../components/SurfaceButton.jsx';
import OutlinedButton from '../../components/OutlinedButton.jsx';

function ListingBanner({ listingStatus }) {
  const { userAuth } = useContext(AuthContext);

  return (
    <section className='flex justify-between items-center px-8 py-6 rounded-lg bg-primary-500 shadow-md'>
      <p className='text-slate-100'>
        {listingStatus === 'OwnAvailable' && 'You are viewing your own listing.'}
        {listingStatus === 'OwnUnavailable' && 'You have currently marked this listing as unavailable.'}
        {listingStatus === 'PublicUnavailable' && 'This listing is currently marked as unavailable by the seller.'}
        {listingStatus === 'Sold' && 'You are viewing an archived listing of a book you sold.'}
        {listingStatus === 'Purchased' && 'You are viewing an archived listing of a book you purchased.'}
      </p>

      {listingStatus === 'OwnAvailable' &&
        <nav className='flex gap-4'>
          <SurfaceButton>Mark as Unavailable</SurfaceButton>
          <OutlinedButton>Edit Listing</OutlinedButton>
          <Link to={`/user/${userAuth}`}>
            <OutlinedButton>My Listings</OutlinedButton>
          </Link>
        </nav>
      }

      {listingStatus === 'OwnUnavailable' &&
        <nav className='flex gap-4'>
          <SurfaceButton>Mark as Available</SurfaceButton>
          <OutlinedButton>Edit Listing</OutlinedButton>
          <Link to={`/user/${userAuth}`}>
            <OutlinedButton>My Listings</OutlinedButton>
          </Link>
        </nav>
      }

      {listingStatus === 'PublicUnavailable' &&
        <nav className='flex gap-4'>
          <OutlinedButton>Return to Listings</OutlinedButton>
        </nav>
      }

      {(listingStatus === 'Sold' || listingStatus === 'Purchased') &&
        <nav className='flex gap-4'>
          <OutlinedButton>View Messages</OutlinedButton>
          <Link to={`/user/${userAuth}`}>
            <OutlinedButton>Return to My Profile</OutlinedButton>
          </Link>
        </nav>
      }
    </section>
  );
}

export default ListingBanner;