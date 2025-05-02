import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AuthContext } from './context/AuthContext.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import ListingDetails from './pages/listing-details/ListingDetails.jsx';

function App() {
  const { login } = useContext(AuthContext);
  
  useEffect(() => {
    login(4);
  }, []);
  
  return (
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
  );
}

export default App;