import React from "react";
import "./about.css";
import Me from "../../assets/B612_20191007_133618_302.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PiFoldersFill } from "react-icons/pi";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me_image">
                        <img src={Me} alt="about me" />
                    </div>
                </div>
                {/* <div className="about__content">
          <div className="about__cards">
            <article className="about__cards">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Junior Frontend Developer</small>
            </article>
            <article className="about__cards">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Still No have Clients Just Tasks</small>
            </article>
            <article className="about__cards">
              <PiFoldersFill className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
            <p>
              Junior Frontend Developer who has experience in ReactJs
              development, interested in learning web development, staying
              updated with the latest technologies
            </p>

            <a href="/" className="btn btn-primary" rel="noopener noreferrer">
              Let's Talk
            </a>
          </div>
        </div> */}
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Junior Software Developer</small>
                        </article>
                        <article className="about__card">
                            <FaUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>Still No have Clients Just Tasks</small>
                        </article>
                        <article className="about__card">
                            <PiFoldersFill className="about__icon" />
                            <h5>Projects</h5>
                            <small>2 Completed</small>
                        </article>
                    </div>

                    <p>
                        Junior Frontend Developer who has experience in ReactJs
                        development, interested in learning web development,
                        staying updated with the latest technologies
                    </p>

                    <a
                        href="https://api.whatsapp.com/send?phone=201092355899"
                        className="btn btn-primary"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
