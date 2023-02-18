import React from "react";
import "./Footer.scss";
import { HiChevronDoubleUp } from "react-icons/hi"
import Dots from "./Dots";
import { Link } from "react-scroll";

const Footer = () => {
  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

  return (
    <footer className="footer-container">
      <div className="move-to-top" onClick={scrollToTop}>
        <HiChevronDoubleUp style={{fontSize:"4rem"}}/>
        <p>Scroll to  Top</p>
      <Dots/>
      </div>
      <section className="first-row">
        <div className="logo">
        <span>T</span>Trafalagar
        </div>
        <p className="primary-text">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>

          <p className="primary-text">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
      </section>


      <section className="second-row">
      <h2 className="footer-title">Company</h2>
        <ul>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Find a doctor</Link></li>
            <li><Link to="apps" smooth={true} duration={500}>Apps</Link></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </section>

      <section className="third-row">
      <h2 className="footer-title">Region</h2>

        <ul>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
        </ul>
      </section>

      <section className="fourth-row">
      <h2 className="footer-title">Help</h2>
        <ul>
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
        </ul>
      </section>
      <div className="footer-dots">
      <div className="dot-grid">
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
      </div>
    </footer>
  );
};

export default Footer;
