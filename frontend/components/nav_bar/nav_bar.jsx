import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="nav">
      <li><Link to="/" style={{ textDecoration: 'none' }}>Browse Events</Link></li>
      <li><Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></li>
      <li><Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
    </nav>
  );
  const personalGreeting = () => (
  <nav className="nav">
      <li><Link to="/" style={{ textDecoration: 'none' }}>Browse Events</Link></li>
      <li><Link to="/" className="Create-event" >Create Event</Link></li>
      <li><button className="header-button" onClick={logout}>Log Out</button></li>
  </nav>
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {currentUser.email}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;
