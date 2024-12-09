import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderScroll = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ahmed-hamdy-a87a651ab/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/ahmedhamdy09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://web.facebook.com/ana.henkesh.92/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/ahmedhamdy4129/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderScroll;
