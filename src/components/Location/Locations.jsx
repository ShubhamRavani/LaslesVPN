import React from "react";
import "./Location.css";
import global from "../../Images/Huge Global.svg";
import netflix from "../../Images/Mask Group.svg";
import reddit from "../../Images/Mask Group (1).svg";
import amazon from "../../Images/Mask Group (2).svg";
import discord from "../../Images/Mask Group (3).svg";
import spotify from "../../Images/Mask Group (4).svg";

export default function Locations() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="locations">
            <div className="section-text locations-text">
              <h2 className="locations-header sub-heading">
                Huge Global Network of Fast VPN
              </h2>
              <p className="locations-desc sub-desc">
                You can use <span>LaslesVPN</span> everywhere which makes it
                easier for you when you move locations.
              </p>
            </div>
            <div className="location-points">
              <img src={global} alt="global" />
            </div>
          </div>
          <div className="brands">
            <div className="brand-img">
              <img src={netflix} alt="netflix" />
            </div>
            <div className="brand-img">
              <img src={reddit} alt="reddit" />
            </div>
            <div className="brand-img">
              <img src={amazon} alt="amazon" />
            </div>
            <div className="brand-img">
              <img src={discord} alt="discord" />
            </div>
            <div className="brand-img">
              <img src={spotify} alt="spotify" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
