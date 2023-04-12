import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navleft">INLIFE</div>
        <ul className="navmiddle">
          <li><Link className='navitem' to="/">Home</Link></li>
          <li><Link className='navitem' to="/liveaction">Live Actions</Link></li>
          <li><Link className='navitem' to="/about">About Us</Link></li>
          <li><Link className='navitem' to="/community">Community</Link></li>
          <li><Link className='navitem' to="/contact">Contact</Link></li>
        </ul>
        <ul className="navright">
          <li><Link className='navitem loginbtn' to="/login">Sign In</Link></li>
          <li><Link className='navitem signupbtn' to="/signup">Signup</Link></li>
        </ul>
    </div>
  )
}

export default Navbar