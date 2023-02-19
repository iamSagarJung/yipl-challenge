import React, { useEffect, useState } from "react";
import { TestimonialsData } from "../../Data";
import "./Testimonials.scss";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Dots from "../Dots";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(TestimonialsData.length - 1);
    } else if (index > TestimonialsData.length - 1) {
      setIndex(0);
    }
    let slider = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);


  return (
    <div style={{position:"relative"}}>
     <div className="bottom-dots">
        <Dots/>
      </div>
      <div className="testimonials-container" id="testimonials">
        <Dots />
       
        <header>
          <h2>What our customer are saying</h2>
          <div className="title-border" />
        </header>
        {TestimonialsData.map(
          ({ id, image, title, position, name, description }, personIndex) => {
            let classes = "nextSlide";
            if (personIndex === index) {
              classes = "activeSlide";
            }
            if (personIndex === index - 1) {
              classes = "lastSlide";
            }
            return (
              <article className={classes} key={id}>
                <section className="left-content">
                  <figure>
                    <img src={image} alt={title} />
                    <figcaption>
                      <h2>{name}</h2>
                      <p className="primary-text">{position}</p>
                    </figcaption>
                  </figure>
                </section>
                <section className="right-content">
                  <p className="primary-text">
                    <ImQuotesLeft className="icon" /> {description}{" "}
                    <ImQuotesRight className="icon" />
                  </p>
                </section>
              </article>
            );
          }
        )}
      </div>
      <div className="slider-icons">
        <div className="prev-icon">
          <BsArrowLeft
            onClick={() => setIndex(index - 1)}
          />
        </div>
        <div className="navigation-btns">
          {TestimonialsData.map((_, i) => {
            return (
              <button
                key={i}
                className={index === i ? "active" : " "}
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
        <div className="next-icon">
          <BsArrowRight onClick={() => setIndex(index + 1)} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
