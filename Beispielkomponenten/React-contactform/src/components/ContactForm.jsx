import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './Form.css'


const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_jli0ypm', form.current, 'user_4qCEPNJsuE6MTOkr5IRBD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
<section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <FaFacebookF></FaFacebookF>
        </div>
        <div className="link">
          <FaInstagram></FaInstagram>
        </div>
        <div className="link">
          <FaYoutube/>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-item">
        <input type="text" name="user_name" />
          <label>Name:</label>
        </div>
        <div className="form-item">
        <input type="email" name="user_email" />
          <label>Email:</label>
        </div>
        <div className="form-item">
        <input type="telefonNummer" name="user_tel" />
          <label>Telefonnummer:</label>
        </div>
        <div className="form-item">
        <textarea name="message" />
          <label>Message:</label>
        </div>
        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
  </div>
</section>
    );
};

export default ContactForm;