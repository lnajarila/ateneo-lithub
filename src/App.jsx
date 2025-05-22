import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
import ListingDetails from './pages/listing-details/ListingDetails.jsx';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />} />
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