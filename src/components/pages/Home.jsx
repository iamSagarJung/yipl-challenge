import React from "react";
import "./Home.scss";
import Dots from "../Dots";
const Home = () => {
  return (
    <div className="homepage-container" id="home">
      <Dots/>
      <figure className="image-container">
      <figcaption className="text-content">
          <h2 className="image-title">Virtual healthcare for you</h2>
          <p className="primary-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="home-btn">Consult today</button>
        </figcaption>
        <img src="home.png" alt="homepage Image" />
      </figure>
    </div>
  );
};

export default Home;
