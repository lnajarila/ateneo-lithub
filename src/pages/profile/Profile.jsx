/**
 * Author: Lurd Synell B. Najarila
 * Description: Profile page to display user information.
 */

import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext.jsx';
import Header from '../../widgets/Header.jsx';
import ProfileCard from '../../widgets/ProfileCard.jsx';
import BookListings from './BookListings.jsx';
import PurchasedBooks from './PurchasedBooks.jsx';
import MyOffers from './MyOffers.jsx';
import Reviews from './Reviews.jsx';

function Profile() {
  const { userId } = useParams();
  const { userAuth } = useContext(AuthContext);
  const [profileTabIndex, setProfileTabIndex] = useState(0);
  const tabs = parseInt(userAuth) === parseInt(userId)
    ? [
        'Book Listings',
        'Unavailable Books',
        'Sold Books',
        'Purchased Books',
        'My Offers',
        'Reviews',
      ]
    : [
        'Book Listings',
        'Reviews',
      ];

  return (
    <div>
      <header>
        <Header />
      </header>
      
      <main className='py-16'>
        <div className='mx-auto max-w-3/4'>
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
                        className='px-4 hover:border-b-1 hover:border-primary-500 text-gray-600 hover:text-gray-900 cursor-pointer'
                        onClick={() => setProfileTabIndex(index)}
                      >
                        {tabName}
                      </li>
                })}
              </ul>
            </nav>

            <section className='px-16 pb-16'>
              { parseInt(userAuth) === parseInt(userId) ? (
                <div>
                  { profileTabIndex == 0 && <BookListings userId={userId} listingStatus={'Available'} />}
                  { profileTabIndex == 1 && <BookListings userId={userId} listingStatus={'Unavailable'} />}
                  { profileTabIndex == 2 && <BookListings userId={userId} listingStatus={'Sold'} />}
                  { profileTabIndex == 3 && <PurchasedBooks userId={userId} />}
                  { profileTabIndex == 4 && <MyOffers userId={userId} />}
                  { profileTabIndex == 5 && <Reviews />}
                </div>
              ) : (
                <div>
                  { profileTabIndex == 0 && <BookListings userId={userId} listingStatus={'Available'} />}
                  { profileTabIndex == 1 && <Reviews />}
                </div>
              )}
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;