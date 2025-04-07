/**
 * Author: Lurd Synell B. Najarila
 * Description: Profile page to display user information.
 */

import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../context/UserContext.jsx';
import BookListings from './BookListings.jsx';
import UnavailableBooks from './UnavailableBooks.jsx';
import SoldBooks from './SoldBooks.jsx';
import PurchasedBooks from './PurchasedBooks.jsx';
import MyOffers from './MyOffers.jsx';
import Reviews from './Reviews.jsx';

function User() {
  const [profileTabIndex, setProfileTabIndex] = useState(0);
  const { getUserById } = useContext(UserContext);
  const { userId } = useParams();
  const user = getUserById(parseInt(userId));

  return (
    <div>
      <section className='mb-8'>
        <span>{user.firstName} {user.lastName}</span>
      </section>

      <div>
        <nav className='mb-8'>
          <ul>
            <li onClick={() => setProfileTabIndex(0)}>Book Listings</li>
            <li onClick={() => setProfileTabIndex(1)}>Unavailable Books</li>
            <li onClick={() => setProfileTabIndex(2)}>Sold Books</li>
            <li onClick={() => setProfileTabIndex(3)}>Purchased Books</li>
            <li onClick={() => setProfileTabIndex(4)}>My Offers</li>
            <li onClick={() => setProfileTabIndex(5)}>Reviews</li>
          </ul>
        </nav>

        <section>
          { profileTabIndex == 0 && <BookListings />}
          { profileTabIndex == 1 && <UnavailableBooks />}
          { profileTabIndex == 2 && <SoldBooks />}
          { profileTabIndex == 3 && <PurchasedBooks />}
          { profileTabIndex == 4 && <MyOffers />}
          { profileTabIndex == 5 && <Reviews />}
        </section>
      </div>
    </div>
  );
}

export default User;