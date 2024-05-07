import { Link } from 'react-router-dom';
import React from "react";
import '../css/Navbar.css';
import  { useContext } from 'react';
import { SessionContext } from '../Context/SessionContext';


const Navbar = () => {
  const { logout } = useContext(SessionContext);

  const handleLogout = () => {
    // Clear authentication token
    logout();
    // Redirect to login page or another page
    // You may need to use React Router for this
    window.location.href = '/login'; 
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
          <>     
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/products'>AllCategory</Link>
            </li>
            <li>
                <Link to='/volunteer'>Volunteer</Link>
            </li>
            <li>
                <Link to='/event'>Events</Link>
            </li>
            <li>
              <Link to='/'><button onClick={handleLogout}>LogOut</button></Link>
            </li>
          </>
        
      </ul>
    </nav>
  )
}

export default Navbar;
