import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import DataProvider from './context/DataProvider.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import ListingDetails from './pages/ListingDetails.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          
          <Route path='user'>
            <Route path=':userId' element={<Profile />} />
          </Route>

          <Route path='listings'>
            <Route path=':listingId' element={<ListingDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>
);
