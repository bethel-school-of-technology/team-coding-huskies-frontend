import axios from 'axios';
import UserContext from "./UserContext";
import { useEffect, useState } from 'react';


 function UserProvider(props) {
  const baseUrl = "http://localhost:5020";
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('myPodcastToken'));
  useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    try {
      const response = await axios.get(`${baseUrl}/api/Profile`);
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }

  async function createUser(username, password, email) {
    try {
      const user = { username, password, email };
      const response = await axios.post(`${baseUrl}/api/Profile`, user);
      return response.data;
    } catch (error) {
      console.error('Failed to create user:', error);
      throw error;
    }
  }

  async function signInUser(email, password) {
    try {
      const user = {password, email};
      const response = await axios.get(`${baseUrl}/api/Profile`, user);
      localStorage.setItem('myPodcastToken', response.data);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      console.error('Failed to sign in:', error);
      throw error;
    }
  }

  function handleLogout() {
    localStorage.removeItem('myPodcastToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  }

  async function getUser(profileId) {
    try {
      const myHeaders = {
        Authorization: `Bearer ${localStorage.getItem('myPodcastToken')}`
      };
    //   var test =  users._id;
      const response = await axios.get(`${baseUrl}/api/Profile/login/${profileId}`, { headers: myHeaders });
      return response.data;
    } catch (error) {
      console.error('Failed to get user:', error);
      throw error;
    }
  }

  return (
    <UserContext.Provider value={{
      users,
      getAllUsers,
      createUser,
      signInUser,
      getUser,
      isAuthenticated,
      handleLogout
    }}>
      {props.children}
    </UserContext.Provider>
  );
}
export default UserProvider;
