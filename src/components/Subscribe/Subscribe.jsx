import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="subscribe">
            <div className="subscribe-content">
              <div className="subscribe-text">
                <h2 className="subscribe-header sub-heading">
                  Subscribe Now for Get Special Features!
                </h2>
                <p className="subscribe-desc sub-desc">
                  Let's subscribe with us and find the fun.
                </p>
              </div>
              <div className="subscribe-btn-ctr">
                <button className="subscribe-btn btn-dark">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
