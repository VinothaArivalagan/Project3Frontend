import React, { useContext } from 'react';
import { SessionContext } from '../Context/SessionContext';

const LogoutButton = () => {
  const { logout } = useContext(SessionContext);

  const handleLogout = () => {
    // Clear authentication token
    logout();
    // Redirect to login page or another page
    // You may need to use React Router for this
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <button onClick={handleLogout}style={{ display: 'block', margin: '0 auto' }}>Logout</button>
  );
};

export default LogoutButton;