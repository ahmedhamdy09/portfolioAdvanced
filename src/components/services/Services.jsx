import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>I create visually appealing user interfaces.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Ensuring designs are responsive and modern.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Focusing on user-friendly navigation and layout.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Collaborating to deliver intuitive digital experiences.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Transforming ideas into stunning visual designs.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Building responsive and dynamic web applications.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Implementing clean, efficient, and reusable code.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Optimizing websites for speed and performance.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Ensuring cross-browser compatibility and accessibility.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Delivering seamless integration with backend systems.</p>
            </li>
          </ul>
        </article>
        {/* End of Frontend */}
        {/* <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="sevice__list-icon" />
              <p>my design is beauty and pretty hello my name ahmed</p>
            </li>{" "}
            <li>
              <FaCheck className="sevice__list-icon" />
              <p>my design is beauty and pretty hello my name ahmed</p>
            </li>{" "}
            <li>
              <FaCheck className="sevice__list-icon" />
              <p>my design is beauty and pretty hello my name ahmed</p>
            </li>{" "}
            <li>
              <FaCheck className="sevice__list-icon" />
              <p>my design is beauty and pretty hello my name ahmed</p>
            </li>{" "}
            <li>
              <FaCheck className="sevice__list-icon" />
              <p>my design is beauty and pretty hello my name ahmed</p>
            </li>{" "}
          </ul>
        </article> */}
        {/* End of backend */}
      </div>
    </section>
  );
};

export default Services;
