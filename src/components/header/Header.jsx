import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/MEnumOne-removebg-preview.png";
import HeaderScroll from "./HeaderScroll";
const Headers = () => {
    return (
        <>
            <header>
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h2>Ahmed Hamdy</h2>
                    <h5 className="text-light">Software Developer</h5>
                    <CTA />

                    <HeaderScroll />
                    <div className="me">
                        <img src={Me} alt="Ahmed Hamdy" />
                    </div>

                    <a href="#contactMe" className="scroll__down">
                        Scroll Down
                    </a>
                </div>
            </header>
        </>
    );
};

export default Headers;
