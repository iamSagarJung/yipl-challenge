import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { GrMenu, GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="home"  smooth={true} duration={500}>
        <span>T</span>Trafalagar
      </Link>
      <ul className={`nav-items ${isOpen ? "show-menu" : " "}`}>
        <li>
          <Link to="home" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="services" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            Find a doctor
          </Link>
        </li>

        <li>
          <Link to="apps" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            Apps
          </Link>
        </li>

        <li>
          <Link to="testimonials" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="about" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            About us
          </Link>
        </li>

        <li>
          <Link to="contact" onClick={() => setIsOpen(false)} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <GrClose /> : <GrMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
