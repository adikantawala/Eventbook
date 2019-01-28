import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="footer">
        <p>This website is a porfolio project inspired by Eventbrite built using Ruby on Rails, React, and PostgreSQL. For more information about the developer, please click the links below.</p>
        <div className="footer-logos">
          <div className="footer-logo">
            <a href="https://www.adikan.tech/" target="_blank">Portfolio Website</a>
          </div>
          <div className="footer-logo">
            <a href="https://www.linkedin.com/in/aditya-kantawala/" target="_blank">LinkedIn</a>
          </div>
          <div className="footer-logo">
            <a href="https://github.com/adikantawala/Eventbook" target="_blank">Github</a>
          </div>
        </div>
      </div>
    );

  }



}

export default Footer;
