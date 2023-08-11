import React from 'react';
import './Components.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesomeIcon
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // Use faPhoneAlt instead of faPhone
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="icons">
        <button className="contact" onClick={() => (window.location = 'mailto:soderlind.sara@gmail.com')}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>


        &nbsp;&nbsp;&nbsp;
        <button
          className="contact"
          onClick={() => (window.location.href = 'https://www.linkedin.com/in/sara-s%C3%B6derlind-482a871ba/')}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          className="contact"
          onClick={() => (window.location.href = 'https://github.com/soderlinds')} // Replace with your GitHub profile URL
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
