import React from "react";
import "./footer.css";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Ahmed Hamdy
      </a>

      <ul className="permaLinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testmonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://web.facebook.com/ana.henkesh.92/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-hamdy-a87a651ab/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/ahmedhamdy4129/"
          target="_blank"
          rel="noreferrer"
        >
          <CiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ahmed Hamdy. All rights reserved.</small>
      </div>
    </footer>
  );
};
export default Footer;
