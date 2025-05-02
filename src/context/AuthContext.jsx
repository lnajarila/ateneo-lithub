/**
 * Author: Lurd Synell B. Najarila
 * Description: Context provider to manage user auth.
 */

import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user auth session from localStorage
  const [userAuth, setUserAuth] = useState(() => {
    const storedUserAuth = localStorage.getItem('userAuth');
    return storedUserAuth ? localStorage.getItem('userAuth') : '';
  });

  // Login and save user auth session to localStorage
  const login = (userId) => {
    setUserAuth(userId);
    localStorage.setItem('userAuth', userId);
  };

  // Logout and clear user auth session in localStorage
  const logout = () => {
    setUserAuth('');
    localStorage.setItem('userAuth', '');
  }

  return (
    <AuthContext.Provider
      value={{
        userAuth,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}