import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "./contact.scss";

const SERVICE_ID = "service_fvjeat7";
const TEMPLATE_ID = "template_jnlu471";
const PUBLIC_KEY = "CNggA-Bfla9h4Jykd";
const CONTACT_EMAIL = "shadyalonsoo@gmail.com";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    if (sending) return;
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          // The real reason is only useful to me - visitors get a way through
          // instead of a raw API error. The mail service can fail entirely
          // (expired token, quota), so always offer the direct address.
          console.error("EmailJS sendForm failed:", error);
          Swal.fire({
            icon: "error",
            title: "Message could not be sent",
            html:
              "Something went wrong on our side. Please email me directly at " +
              `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="about_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft">
        CONTACT ME <span></span>
        <p className="shadow">CONTACT ME</p>
      </h2>
      <div className="contact">
        <div className="contact_info ">
          <div className="contact_info_panel animate__animated animate__slow animate__fadeInUp ">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="text">
              <h4>Phone</h4>
              <a href="tel:+201020285787">+201020285787</a>
            </div>
          </div>
          <div className="contact_info_panel animate__animated animate__slow animate__fadeInUp animate__delay-1s">
            <div className="icon">
              <i className="far fa-envelope"></i>
            </div>
            <div className="text">
              <h4>Email</h4>
              <a href="mailto:shadyalonsoo@gmail.com">shadyalonsoo@gmail.com</a>
            </div>
          </div>
          <div className="contact_info_panel animate__animated animate__slow animate__fadeInUp animate__delay-2s">
            <div className="icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="text">
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/shady-agamy-746a59147/"
                target="_blank"
                rel="noopener noreferrer"
              >
                shady-agamy
              </a>
            </div>
          </div>
          <div className="contact_info_panel animate__animated animate__slow animate__fadeInUp animate__delay-2s">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text">
              <h4>Location</h4>
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <div className="contact_form animate__animated animate__slow animate__fadeInUp animate__delay-3s">
          <p>Get In Touch</p>
          <form id="contact-form" onSubmit={submitEmail}>
            <div className="input_group">
              <label htmlFor="name">Enter your name*</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="input_group">
              <label htmlFor="email">Enter your email*</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="input_group">
              <label htmlFor="subject">Enter your subject*</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="input_group">
              <label htmlFor="message">Enter your Message*</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="1"
                required
              />
            </div>

            <div className="input_group">
              <button type="submit" className="blue_btn" disabled={sending}>
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
