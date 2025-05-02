/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays listing status and relevant actions to user.
 */

import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext.jsx';
import SurfaceButton from '../../components/SurfaceButton.jsx';
import OutlinedButton from '../../components/OutlinedButton.jsx';

function ListingBanner({ listing }) {
  const { userAuth } = useContext(AuthContext);
  let status = 'PublicAvailable';

  if (listing.userId === userAuth) {
    if (listing.status === 'Available') {
      status = 'OwnAvailable';
    }
    if (listing.status === 'Unavailable') {
      status = 'OwnUnavailable';
    }
    if (listing.status === 'Sold') {
      status = 'Sold';
    }
  } else {
    if (listing.status === 'Unavailable') {
      status = 'PublicUnavailable';
    }
    if (listing.status === 'Sold') {
      status = 'Purchased';
    }
  }

  return (
    <section className='flex justify-between items-center px-8 py-6 rounded-lg bg-primary-500 shadow-md'>
      <p className='text-slate-100'>
        {status === 'OwnAvailable' && 'You are viewing your own listing.'}
        {status === 'OwnUnavailable' && 'You have currently marked this listing as unavailable.'}
        {status === 'PublicUnavailable' && 'This listing is currently marked as unavailable by the seller.'}
        {status === 'Sold' && 'You are viewing an archived listing of a book you sold.'}
        {status === 'Purchased' && 'You are viewing an archived listing of a book you purchased.'}
      </p>

      {status === 'OwnAvailable' &&
        <nav className='flex gap-4'>
          <SurfaceButton>Mark as Unavailable</SurfaceButton>
          <OutlinedButton>Edit Listing</OutlinedButton>
          <Link to={`/user/${userAuth}`}>
            <OutlinedButton>My Listings</OutlinedButton>
          </Link>
        </nav>
      }

      {status === 'OwnUnavailable' &&
        <nav className='flex gap-4'>
          <SurfaceButton>Mark as Available</SurfaceButton>
          <OutlinedButton>Edit Listing</OutlinedButton>
          <Link to={`/user/${userAuth}`}>
            <OutlinedButton>My Listings</OutlinedButton>
          </Link>
        </nav>
      }

      {status === 'PublicUnavailable' &&
        <nav className='flex gap-4'>
          <OutlinedButton>Return to Listings</OutlinedButton>
        </nav>
      }

      {(status === 'Sold' || status === 'Purchased') &&
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