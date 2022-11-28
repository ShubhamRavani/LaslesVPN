import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo.svg";
import fb from "../../Images/Facebook.svg";
import twitter from "../../Images/Twitter.svg";
import insta from "../../Images/Instagram.svg";

export default function Footer() {
  return (
    <>
      <div className="footercontainer">
        <div className="wrapper">
          <div className="footer">
            <div className="company-info">
              <div className="footer-logo">
                <img src={logo} />
              </div>
              <div className="company-desc-text">
                <p className="company-desc sub-desc">
                  <span>LaslesVPN</span> is a private virtual network that has
                  unique features and has high security.
                </p>
              </div>
              <div className="social-media-links">
                <a href="#" className="social-media-icon">
                  <img className="social-media-icon" src={fb} />
                </a>
                <a href="#" className="social-media-icon">
                  <img className="social-media-icon" src={twitter} />
                </a>
                <a href="#" className="social-media-icon">
                  <img className="social-media-icon" src={insta} />
                </a>
              </div>
              <p className="copyright">©2020LaslesVPN</p>
            </div>
            <div id="help" className="footer-links">
              <div className="link-col">
                <p className="link-col-label">Product</p>
                <a className="footer-link" href="#">
                  Download
                </a>
                <a className="footer-link" href="#">
                  Pricing
                </a>
                <a className="footer-link" href="#">
                  Locations
                </a>
                <a className="footer-link" href="#">
                  Server
                </a>
                <a className="footer-link" href="#">
                  Countries
                </a>
                <a className="footer-link" href="#">
                  Blog
                </a>
              </div>
              <div className="link-col">
                <p className="link-col-label">Engage</p>
                <a className="footer-link" href="#">
                  LaslesVPN?
                </a>
                <a className="footer-link" href="#">
                  FAQ
                </a>
                <a className="footer-link" href="#">
                  Tutorials
                </a>
                <a className="footer-link" href="#">
                  About Us
                </a>
                <a className="footer-link" href="#">
                  Privacy Policy
                </a>
                <a className="footer-link" href="#">
                  Terms of Services
                </a>
              </div>
              <div className="link-col">
                <p className="link-col-label">Earn Money</p>
                <a className="footer-link" href="#">
                  Affiliate
                </a>
                <a className="footer-link" href="#">
                  Become Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
