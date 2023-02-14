import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { GrMenu, GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="home">
        <span>T</span>Trafalagar
      </Link>
      <ul className={`nav-items ${isOpen ? "show-menu" : " "}`}>
        <li>
          <Link to="home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="services" onClick={() => setIsOpen(false)}>
            Find a doctor
          </Link>
        </li>

        <li>
          <Link to="apps" onClick={() => setIsOpen(false)}>
            Apps
          </Link>
        </li>

        <li>
          <Link to="testimonials" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="about" onClick={() => setIsOpen(false)}>
            About us
          </Link>
        </li>

        <li>
          <Link to="contact" onClick={() => setIsOpen(false)}>
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
