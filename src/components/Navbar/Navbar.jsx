import React from 'react';
import './Navbar.css';
import logo from '../../Images/Logo.svg';

export default function Navbar () {
  return (
      <>
          <div className="nvcontainer">
              <div className="wrapper">
                  <header>
                      <div className="logo">
                          <img className="nvimg" src={logo} alt="logo" />
                      </div>
                      <nav>
                          <ul className="nav-item-list">
                              {['About', 'Features', 'Pricing', 'Testimonials', 'Help'].map((item) => (
                                  <li className="nav-item" key={`link-${item}`}>
                                      <div />
                                      <a className="nav-link" href={`#${item}`}>{item}</a>
                                  </li>
                              ))}
                          </ul>
                      </nav>
                      <div className="header-sign-btns">
                          <button className="btn sign-in-btn">Sign In</button>
                          <button className="btn btn-light sign-up-btn">Sign Up</button>
                      </div>
                  </header>
              </div>
          </div>
    </>
  )
}
