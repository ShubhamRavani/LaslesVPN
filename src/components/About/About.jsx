import React from "react";
import about from "../../Images/Illustration 1.svg";
import loc from "../../Images/Group 1215.svg";
import user from "../../Images/Group 1216.svg";
import server from "../../Images/Group 1217.svg";
import "./About.css";

export default function About() {
  return (
    <>
      <div id="About" className="abtcontainer">
        <div className="wrapper">
          <div className="about1">
            <div className="about-info">
              <div className="about-text">
                <h1 className="about-text-header">
                  Want anything to be easy with <span>LaslesVPN.</span>
                </h1>
                <p className="about-text-desc sub-desc">
                  Provide a network for all your needs with ease and fun using
                  <span> LaslesVPN</span> and discover interesting features from
                  us.
                </p>
              </div>
              <div className="about-btn-abt">
                <button className="about-btn btn-dark">Get Started</button>
              </div>
            </div>
            <div className="about-img">
              <img src={about} alt="about" />
            </div>
          </div>
          <div className="stats">
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={user} alt="user" />
              </div>
              <div className="stats-text">
                <p className="text-num">90+</p>
                <p className="text-label">Users</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={loc} alt="location" />
              </div>
              <div className="stats-text">
                <p className="text-num">30+</p>
                <p className="text-label">Locations</p>
              </div>
            </div>
            <div className="stats-item">
              <div className="stats-img-abt">
                <img src={server} alt="server" />
              </div>
              <div className="stats-text">
                <p className="text-num">50+</p>
                <p className="text-label">Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
