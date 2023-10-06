import { createContext } from 'react';

const UserContext = createContext({
  isAuthenticated: false, // Default value for isAuthenticated
  handleLogout: () => {}, // A placeholder logout function
});

export default UserContext;