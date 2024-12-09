import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_jyyv3i9",
                "template_6wmmsms",
                e.target,
                "0I6F45xtDpbSCVkU3"
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article
                        className="contact__option"
                        style={{ width: "250px" }}
                    >
                        <MdEmail className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>hamdyahmed09@gmail.com</h5>
                        <a
                            href="mailto:hamdyahmed09@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article
                        className="contact__option"
                        style={{ width: "250px" }}
                    >
                        <FaFacebookMessenger className="contact_option-icon" />
                        <h4>Massenger</h4>
                        <h5>Ahmed Hamdy</h5>
                        <a
                            href="https://m.me/ana.henkesh.92"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article
                        className="contact__option"
                        style={{ width: "250px" }}
                    >
                        <FaWhatsapp className="contact_option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+201092355899</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=201092355899"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* End of contact */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        rows="7"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary" style={{width:"200px", height:"60px", fontWeight:"bold"}}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
