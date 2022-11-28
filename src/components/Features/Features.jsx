import React from "react";
import "./Features.css";
import check from "../../Images/Group 1120.svg";
import feature from "../../Images/Illustration 2.svg";

export default function Features() {
  return (
    <>
      <div id="Features" className="features">
        <div className="features-img">
          <img src={feature} alt="feature" />
        </div>
        <div className="features-text">
          <h2 className="feature-header sub-heading">
            We Provide Many Features You Can Use
          </h2>
          <p className="feature-desc sub-desc">
            Have fun exploring the features that we provide and see all the
            functions each feature has.
          </p>
          <ul className="feature-list">
            <li className="feature-list-item">
              <span>
                <img src={check} alt="check" />
              </span>
              Powerful online protection.
            </li>
            <li className="feature-list-item">
              <span>
                <img src={check} alt="check" />
              </span>
              Internet without borders.
            </li>
            <li className="feature-list-item">
              <span>
                <img src={check} alt="check" />
              </span>
              Supercharged VPN
            </li>
            <li className="feature-list-item">
              <span>
                <img src={check} alt="check" />
              </span>
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
