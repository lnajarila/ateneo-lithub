import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './widgets/Header.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import ListingDetails from './pages/listing-details/ListingDetails.jsx';

function App() {
  const [page, setPage] = useState('home');

  // Example image URLs for ListingGallery
  const imageUrls = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
  ];

  return (
    <BrowserRouter>
      <Header onNavigate={setPage} />
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        
        <Route path='user'>
          <Route path=':userId' element={<Profile />} />
        </Route>

        <Route path='listings'>
          <Route path=':listingId' element={<ListingDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;