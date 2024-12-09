import React from "react";
import "./portofolio.css";
import img1 from "../../assets/porto.png";
import img2 from "../../assets/ecommerce pure.png";
import img3 from "../../assets/dorsinReact.png";
import img4 from "../../assets/book search.png";
import img5 from "../../assets/qustion&answer.png";
import img6 from "../../assets/ecommmerceAuction.png";
const data = [
    {
        id: 1,
        title: "Portfolio",
        explain:
            "My Portfolio: A showcase of my projects and skills, built to highlight my expertise in frontend development using React. It includes dynamic designs, responsive layouts, and detailed descriptions of my work to demonstrate my capabilities as a developer.",
        image: img1,
        githubLink: "https://github.com/ahmedhamdy09/privatePortfolio",
        demo: "https://private-portfolio-chi.vercel.app/",
    },
    {
        id: 1,
        title: "E-commerce Shoes Pure",
        explain:
            "This e-commerce store is entirely built using the fundamental web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity. No additional programming languages or frameworks were used.",
        image: img2,
        githubLink:
            "https://github.com/ahmedhamdy09/e-commerce-Html-Css-js-Only",
        demo: "https://ahmedhamdy09.github.io/e-commerce-Html-Css-js-Only/",
    },
    {
        id: 3,
        title: "Dorsin Help Company ReactJS",
        explain:
            "We help startups rapidly develop and launch their products using the React JavaScript library, creating dynamic and scalable user interfaces.",
        image: img3,
        githubLink: "https://github.com/ahmedhamdy09/startupresponsive",
        demo: "https://startupresponsive.vercel.app/",
    },
    {
        id: 4,
        title: "Book Search ReactJS",
        explain:
            "BookSearch: A React-based web application that allows users to search for books dynamically using API integration. Features include advanced filtering, a responsive design, and a seamless user experience.",
        image: img4,
        githubLink: "https://github.com/ahmedhamdy09/BookSearch",
        demo: "https://book-search-ivory-psi.vercel.app/",
    },
    {
        id: 5,
        title: "Question And Answer ReactJS",
        explain:
            "QuestionAndAnswer: A React-based web application enabling users to ask, answer, and explore questions dynamically. It features responsive design and real-time data handling with API integration.",
        image: img5,
        githubLink: "https://github.com/ahmedhamdy09/questionAndanswer",
        demo: "https://question-andanswer.vercel.app/",
    },
    {
        id: 6,
        title: "Smart Trade Auction Plus ReactJS",
        explain:
            "E-Commerce: A React-based web application offering a complete online shopping experience. Features include product filtering, CRUD operations, payment integration, responsive design, and seamless API integration for dynamic data handling.",
        image: img6,
        githubLink: "https://github.com/ahmedhamdy09/AuctionPlus",
        demo: "http://62.72.19.133:9000/",
    },
];
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, title, image, githubLink, demo, explain }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <p>{explain}</p>
                            <p></p>
                            <div className="portfolio__item-cta">
                                <a
                                    href={githubLink}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;

