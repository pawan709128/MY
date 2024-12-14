import React from 'react';
import logo from '../../Assets/IMG/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <div id="navbar">
        <div className="nav1">
          <p>
            Get a hosting plans, as low as starting at only{' '}
            <span>
              <b>$2.78/mo*</b>
            </span>
          </p>
        </div>
        <div className="nav2">
          <Link to="/">
            <i className="fa-solid fa-phone"></i>Customer service
          </Link>
          <Link to="/">
            <i className="fa-regular fa-envelope"></i>support@domain.com
          </Link>
        </div>
      </div>
      <div className="myheader">
        <div className="header_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header_btn">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Hosting">Hosting</Link>
          <Link to="/Domain">Domain</Link>
          <Link to="/Pricing">Pricing</Link>
          <Link to="/Support">Support</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="header_login">
          <span className="header_search">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </span>
          <Link to="/">
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
