import React from "react";
import "./Apps.scss";

const Apps = () => {
  return (
    <div className="apps-container">
      <div className="apps-container-one">
        <figure className="image-container">
          <img src="apps1.png" alt="homepage Image" />
          <figcaption className="text-content">
            <h2 className="image-title">Leading healthcare providers</h2>
        <div className="title-border"/>
            <p className="primary-text">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <button className="primary-btn">Learn more</button>
          </figcaption>
        </figure>
      </div>

      <div className="apps-container-two">
        <figure className="image-container">
          <figcaption className="text-content">
            <h2 className="image-title">Download our mobile apps</h2>
            <p className="primary-text">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <button className="primary-btn">Learn more</button>
          </figcaption>
          <img src="apps1.png" alt="homepage Image" />
        </figure>
      </div>
    </div>
  );
};

export default Apps;
