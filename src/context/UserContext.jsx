/**
 * Author: Lurd Synell B. Najarila
 * Description: Context provider to manage user data and provide CRUD functions.
 */

import { createContext, useState } from 'react';
import { sampleUsers } from '../data/sampleUsers.js';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize users from localStorage or sample user data
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : sampleUsers;
  });

  // Save to localStorage whenever user data changes
  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  // CREATE: Add a new user
  const createUser = (email, firstName, lastName, password) => {
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);
  };

  // READ: Get users
  const getUsers = () => users;
  const getUserById = (id) => users.find((user) => user.id === id);
  const getUserOnLogin = (email, password) => {
    return users.find((user) => user.email === email && user.password === password);
  }

  // UPDATE: Modify an existing user
  const updateUser = (id, updatedData) => {
    const updatedUsers = users.map((user) => {
      user.id === id ? {...users, ...updatedData} : user;
    });

    saveUsers(updatedUsers);
  };

  // DELETE: Remove a user
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    saveUsers(updatedUsers);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        getUsers,
        getUserById,
        getUserOnLogin,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};