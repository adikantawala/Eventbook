import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav">
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;
