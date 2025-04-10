/**
 * Author: Lurd Synell B. Najarila
 * Description: Displays profile information of the given user.
 */

import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { ListingContext } from '../context/ListingContext.jsx';
import Card from '../components/Card.jsx';

function ProfileCard({ userId }) {
  const { getUserById } = useContext(UserContext);
  const { getListingsByUserId } = useContext(ListingContext);
  const user = getUserById(parseInt(userId));
  const listings = getListingsByUserId(parseInt(userId), 'Sold');

  return (
    <Card elevation={1}>
      <div className='px-16 py-8'>
        <div className='flex'>
          <hgroup className='flex flex-1 gap-6'>
            {/* Profile Image */}
            <figure className='flex justify-center items-center aspect-square h-full rounded-full bg-sky-700'>
              <p className='font-sans text-2xl font-medium text-white'>
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </p>
            </figure>

            {/* Name and Role */}
            <div className='flex flex-1 flex-col justify-center'>
              <h3 className='font-serif font-bold text-2xl'>{user.firstName} {user.lastName}</h3>
              <p className='font-sans text-gray-600 text-lg'>BS Information Technology</p>
            </div>
          </hgroup>
          <aside className='flex-none'>
            <dl className='flex gap-4 justify-end h-full'>
              {/* User Rating */}
              <div className='flex flex-col-reverse justify-center items-center w-48 py-4 border border-gray-500 rounded-lg'>
                <dt className='text-sm text-gray-900'>52 Reviews</dt>
                <div className='flex gap-1 items-center'>
                  <dd className='text-xl font-bold text-gray-900'>4.2</dd>
                  <span className='material-symbols-outlined text-accent-500'>star</span>
                </div>
              </div>
              
              {/* Books Listed */}
              <div className='flex flex-col-reverse justify-center items-center w-48 py-4 rounded-lg bg-gray-100'>
                <dt className='text-sm text-gray-900'>Books Sold</dt>
                <dd className='text-xl font-bold text-gray-900'>{listings.length}</dd>
              </div>

              {/* Books Sold */}
              <div className='flex flex-col-reverse justify-center items-center w-48 py-4 rounded-lg bg-gray-100'>
                <dt className='text-sm text-gray-900'>Books Purchased</dt>
                <dd className='text-xl font-bold text-gray-900'>5</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;