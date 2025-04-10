/**
 * Author: Lurd Synell B. Najarila
 * Description: Profile page to display user information.
 */

import { useState } from 'react';
import { useParams } from 'react-router';
import ProfileCard from '../../widgets/ProfileCard.jsx';
import BookListings from './BookListings.jsx';
import UnavailableBooks from './UnavailableBooks.jsx';
import SoldBooks from './SoldBooks.jsx';
import PurchasedBooks from './PurchasedBooks.jsx';
import MyOffers from './MyOffers.jsx';
import Reviews from './Reviews.jsx';

function Profile() {
  const [profileTabIndex, setProfileTabIndex] = useState(0);
  const tabs = [
    'Book Listings',
    'Unavailable Books',
    'Sold Books',
    'Purchased Books',
    'My Offers',
    'Reviews'
  ];
  const { userId } = useParams();

  return (
    <div className='max-w-3/4'>
      <section className='mb-8'>
        <ProfileCard userId={userId}/>
      </section>

      <section className='rounded-xl bg-white shadow-sm'>
        <nav className='mb-8 pt-12 border-b-1 border-gray-300'>
          <ul className='flex gap-12 px-16'>
            {tabs.map((tabName, index) => {
              return index === profileTabIndex
                ? <li
                    key={index}
                    className='px-4 border-b-2 border-primary-500 font-bold text-primary-500 cursor-pointer'
                    onClick={() => setProfileTabIndex(index)}
                  >
                    {tabName}
                  </li>
                : <li
                    key={index}
                    className='px-4 hover:border-b-1 hover:border-primary-500 cursor-pointer'
                    onClick={() => setProfileTabIndex(index)}
                  >
                    {tabName}
                  </li>
            })}
          </ul>
        </nav>

        <section className='px-16 pb-16'>
          { profileTabIndex == 0 && <BookListings userId={userId} />}
          { profileTabIndex == 1 && <UnavailableBooks />}
          { profileTabIndex == 2 && <SoldBooks />}
          { profileTabIndex == 3 && <PurchasedBooks />}
          { profileTabIndex == 4 && <MyOffers />}
          { profileTabIndex == 5 && <Reviews />}
        </section>
      </section>
    </div>
  );
}

export default Profile;