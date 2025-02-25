import React from "react";
import "./experience.css";
import { FaCheckSquare } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have..?</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experince__content">
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>Sass</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experince__details">
                            <FaCheckSquare className="experince__details-icon" />
                            <div>
                                <h4>NextJS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End Of FrontEnd */}
                {/* <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experince__content">
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experince__details">
              <FaCheckSquare className="experince__details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div> */}
            </div>
        </section>
    );
};

export default Experience;
