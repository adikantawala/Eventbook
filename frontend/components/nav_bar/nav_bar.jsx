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
    <div className="positioning-padding">
      <li><Link className="browse" to="/" style={{ textDecoration: 'none' }}>Browse Events</Link></li>
    </div>

    <div className="positioning-padding">
      <li><Link to="/" className="create-event" >Create Event</Link></li>
      </div>



      <li className="dropdown">
      <img className="profile-icon" src={window.images.profile_icon} />
      <div className="drop-down-parent">
      <div className="dropdown-content">
          <a href="#">Tickets</a>
          <a href="#">Liked</a>
          <div className="positioning-padding">
          <a className="logout" onClick={logout}>Log Out</a>
          </div>
      </div>
      </div>


      </li>

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
