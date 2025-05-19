import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/Register.jsx';
import ListingDetails from './pages/listing-details/ListingDetails.jsx';

function App() {
  const [page, setPage] = useState('home');

  const handleNavigation = (pageName) => {
    setPage(pageName);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.appNavigation = handleNavigation;
    return () => {
      delete window.appNavigation;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {page === 'home' && <Home onNav={handleNavigation} />}
        {page === 'browse-books' && <ListingDetails onNav={handleNavigation} />}
        {page === 'login' && <Login onNav={handleNavigation} />}
        {page === 'register' && <Register onNav={handleNavigation} />}
      </main>
    </div>
  );
}

export default App;