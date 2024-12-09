import React, { useState } from "react";
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href="/"
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
                rel="noopener noreferrer"
            >
                <IoHome />
            </a>
            <a
                href="#about"
                rel="noopener noreferrer"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            >
                <FaRegUser />
            </a>
            <a
                href="#experience"
                rel="noopener noreferrer"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <FaBook />
            </a>
            <a
                href="#services"
                rel="noopener noreferrer"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
            >
                <RiServiceFill />
            </a>
            <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <MdContacts />
            </a>
        </nav>
    );
};

export default Nav;
