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
            <Link to='/products/new'>NewProduct</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
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
