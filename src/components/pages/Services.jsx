import React from "react";
import "./Services.scss";
import { featuredData } from "../Data";

const Services = () => {
  return (
    <div className="service-container">
      {/* <div className='background-design'/> */}
      {/* <div className='wrapper'> */}
      <header>
        <h3 className="service-title">Our Services</h3>
        <div className="title-border"/>
        <p className="primary-text">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </header>
      <section className="service-card-container">
        {featuredData.map((item) => {
          return (
            <div className="service-card" key={item.id}>
              <p className="icon">{item.icon}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="primary-text">{item.desc}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;
