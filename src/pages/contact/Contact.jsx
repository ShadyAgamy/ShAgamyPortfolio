import React from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import "./contact.scss";
const SERVICE_ID = "service_fvjeat7";
const TEMPLATE_ID = "template_jnlu471";
const USER_ID = "CNggA-Bfla9h4Jykd";
const Contact = () => {


  const submitEmail =  (e) => {
    e.preventDefault();
    e.persist();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        e.target.reset();
         Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        }) 
        
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
   
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
              <a href="mailto: shadyagmy@yahoo.com">shadyagmy@yahoo.com</a>
              <a href="mailto: shadyalonsoo@gmail.com">shadyalonsoo@gmail.com</a>
            </div>
          </div>
          <div className="contact_info_panel animate__animated animate__slow animate__fadeInUp animate__delay-2s">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="text">
              <h4>Address</h4>
              <p>6 Horeya Square, Maadi, Egypt</p>
            </div>
          </div>
        </div>
        <div className="contact_form animate__animated animate__slow animate__fadeInUp animate__delay-3s">
          <p>Get In Touch</p>
          <form id="contact-form" onSubmit={submitEmail}>
            <div className="input_group">
              <label htmlFor="name">Enter your name*</label>
              <input id="name" name="name" type="text" className="form-control" required />
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
              <input id="subject" name="subject" type="text" className="form-control" required />
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
              <button type="submit" className="blue_btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
