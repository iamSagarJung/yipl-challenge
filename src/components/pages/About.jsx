import React, { useState } from "react";
import { aboutData } from "../../Data";
import "./About.scss";
import { BsArrowRight } from "react-icons/bs";


const About = () => {
  const [showIndex, setShowIndex] = useState(null);

  const toggleShow = (index) => {
    console.log(index)
    if(showIndex===index){
      setShowIndex(null)
    }else{
      setShowIndex(index)
    }
    
  };

  return (
    <section id="about" style={{position:"relative",overflow:"hidden"}}>
     <div className="dot-square-grid">
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
  </div>
      <header>
        <h2 className="about-title">Check out our latest article</h2>
        <div className="title-border" />
      </header>

      <div className="background-image">
        <img src="vector2.png"/>
      </div>
    
      <div className="about-container">
        {aboutData.map(({ id, image, title, description },index) => {
          const shortDescription = description.slice(0, 90) + "....";

          return (
            <div key={id} className="card">
              <figure>
                <img src={image} alt={title} />
                <figcaption className="card-content">
                  <h2>{title}</h2>
                  <p className="primary-text">
                    {index===showIndex
                     ?description: shortDescription}
                  </p>
                  <p
                    className={showIndex===index ?"read-btn show-btn": "read-btn" }
                    onClick={()=>toggleShow(index)}
                  >
                    {index===showIndex ? "Show less" : "Read more "}
                    <BsArrowRight className="icon" />
                  </p>
                </figcaption>
              </figure>
            </div>
          );
        })}
         
      </div>
      <div className="about-btn">
        <button>View all</button>
      </div>
    </section>
  );
};

export default About;
