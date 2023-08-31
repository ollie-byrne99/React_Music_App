import React from 'react';
import { NavLink, } from 'react-router-dom'

const NavBar = () => (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/contact" >Contact</NavLink></li>
      </ul>
    </nav>
  );

  export default NavBar;
