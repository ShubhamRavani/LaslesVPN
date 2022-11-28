import React from "react";
import "./Pricing.css";
import pcheck from "../../Images/Group 1120.svg";
import free from "../../Images/Free.svg";

export default function Pricing() {
  return (
    <>
      <div id="Pricing" className="container">
        <div className="wrapper">
          <div className="plans">
            <div id="pricing" class="plans-text section-text">
              <h2 className="plans-header sub-heading">Choose Your Plan</h2>
              <p className="plans-desc sub-desc">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
            <div className="plans-list">
              <div id="free-plan" className="plan">
                <div className="plan-img">
                  <img src={free} alt="free" />
                </div>
                <p className="plan-type">Free Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Unlimited Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Encrypted Connection
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    No Traffic Logs
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Works on All Devices
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">Free</p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
              <div id="standard-plan" className="plan">
                <div className="plan-img">
                  <img src={free} alt="free" />
                </div>
                <p className="plan-type">Standard Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Unlimited Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Encrypted Connection
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Has Traffic Logs
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Works on All Devices
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Works Anywhere
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">
                    $9<span> / mo</span>
                  </p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
              <div id="premium-plan" class="plan">
                <div className="plan-img">
                  <img src={free} alt="free" />
                </div>
                <p className="plan-type">Premium Plan</p>
                <ul className="plan-features">
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Unlimited Bandwith
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Encrypted Connection
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Has Traffic Logs
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Works on All Devices
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Works Anywhere
                  </li>
                  <li className="plan-feature-item">
                    <span>
                      <img src={pcheck} alt="pcheck" />
                    </span>
                    Gets New Features
                  </li>
                </ul>
                <div className="plan-select">
                  <p className="plan-price">
                    $12<span> / mo</span>
                  </p>
                  <button className="btn-light plan-select-btn">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
