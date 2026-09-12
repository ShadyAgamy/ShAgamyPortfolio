import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import "./contact.scss";
import { useReveal, fadeInClass } from "../../hooks/useReveal";

const SERVICE_ID = "service_fvjeat7";
const TEMPLATE_ID = "template_jnlu471";
const PUBLIC_KEY = "CNggA-Bfla9h4Jykd";
const CONTACT_EMAIL = "shadyalonsoo@gmail.com";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const header = useReveal<HTMLElement>("contact");
  const info = useReveal<HTMLDListElement>("contact");
  const form = useReveal<HTMLFormElement>("contact");

  const submitEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

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
        },
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="page contact_page">
      <header
        ref={header.ref}
        className={`page_header ${fadeInClass(header.state)}`}
      >
        <p className="eyebrow">Get in touch</p>
        <h1>Contact me</h1>
      </header>

      <div className="contact_grid">
        <dl
          ref={info.ref}
          className={`info_list ${fadeInClass(info.state)}`}
        >
          <div className="info_list_row">
            <dt>Phone</dt>
            <dd>
              <a href="tel:+201020285787">+201020285787</a>
            </dd>
          </div>
          <div className="info_list_row">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </dd>
          </div>
          <div className="info_list_row">
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://www.linkedin.com/in/shady-agamy-746a59147/"
                target="_blank"
                rel="noopener noreferrer"
              >
                shady-agamy
              </a>
            </dd>
          </div>
          <div className="info_list_row">
            <dt>Location</dt>
            <dd>Cairo, Egypt</dd>
          </div>
        </dl>

        <form
          ref={form.ref}
          id="contact-form"
          className={`contact_form ${fadeInClass(form.state, "animate__delay-1s")}`}
          onSubmit={submitEmail}
        >
          <p className="form_title">Send a message</p>

          <div className="field">
            <label htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="c-email">Your email</label>
            <input id="c-email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="c-subject">Subject</label>
            <input id="c-subject" name="subject" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" rows={4} required />
          </div>

          <div className="form_actions">
            <button type="submit" className="btn_outline" disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
