import { Link } from 'react-router-dom';
import React from "react";


const Navbar = () => {

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
              <Link to='/volunteer'>Volunteer</Link>
            </li>
            <li>
              <Link to='/event'>Events</Link>
            </li>
            <li>
              <Link to='/logout'>LogOut</Link>
            </li>
          </>
        <li>
          <Link to='/products'>AllCategory</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
