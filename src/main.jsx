import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { UserProvider } from './context/UserContext.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import User from './pages/user/User.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          
          <Route path='user'>
            <Route path=':userId' element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
