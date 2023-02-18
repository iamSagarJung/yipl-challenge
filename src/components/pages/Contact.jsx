import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="form-container" id="contact">
      <header>
        <h1>Contact us</h1>
        <div className="title-border" />
        <p className="primary-text">
          Have any questions? We'd love to hear from you.
        </p>
      </header>
      <form className="form">
        <div className="form-row">
          <div className="row-one">
            <label htmlFor="name">Your Name</label>
            <br />
            <input type="text" id="name" />
            <br />
          </div>

          <div className="row-two">
            <label htmlFor="phone">Phone No.</label>
            <br />
            <input type="number" id="phone" />
            <br />
          </div>
        </div>

        <label htmlFor="email">Email ID</label>
        <br />
        <input type="email" id="email" />
        <br />

        <label htmlFor="message">Your message</label>
        <br />
        <textarea rows="5" cols="6" id="message"></textarea>

    <div className="btn">
        <button>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
