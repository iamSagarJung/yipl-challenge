import React from "react";
import "./Footer.scss";
import { HiChevronDoubleUp } from "react-icons/hi"

const Footer = () => {
  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }

  return (
    <footer className="footer-container">
      <div className="move-to-top" onClick={scrollToTop}>
        <HiChevronDoubleUp style={{fontSize:"4rem"}}/>
        <p>Scroll to to Top</p>
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
            <li>About</li>
            <li>Testimonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
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
    </footer>
  );
};

export default Footer;
