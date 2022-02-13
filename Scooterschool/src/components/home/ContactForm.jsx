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
    
    emailjs.sendForm('service_od1rs9m', 'template_jli0ypm', form.current, 'user_4qCEPNJsuE6MTOkr5IRBD')
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
    <div className="contact-links-wrapper">
      <h2 className='contact-h2'>Kontaktiere uns</h2>
      <p className='contact-para'>
          Wir freuen uns, das sie Interesse zeigen. Sie können uns 
          jederzeit bei Problemen oder Fragen kontaktieren. Wenn die Nachricht 
          angekommen ist, erhalten sie eine Bestätigungs-Email.
      </p>
      <div className="contact-links">
        <div className="contact-link">
          <FaFacebookF></FaFacebookF>
        </div>
        <div className="contact-link">
          <FaInstagram></FaInstagram>
        </div>
        <div className="contact-link">
          <FaYoutube/>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-form-item">
        <label>Name:</label>
        <input required type="text" name="user_name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Max Mustermann'/>
        
        </div>
        <div className="contact-form-item">
        <label>Email:</label>
        <input required type="email" name="user_email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='example@example.com' />
          
        </div>
        <div className="contact-form-item">
        <label>Telefonnummer:</label>
        <input required type="telefonNummer" name="user_tel" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='+43123456789' />
          
        </div>
        <div className="contact-form-item">
        <label>Nachricht:</label>
        <textarea required name="message" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder='Deine Muster Nachricht ...' />
          
        </div>
        <input className="bubbly-button position-bubbly-button" type="submit" value="Nachricht senden" />
      </form>
    </div>
  </div>
</section>
    );
};

export default ContactForm;