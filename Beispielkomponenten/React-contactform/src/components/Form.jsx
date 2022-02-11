import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'

export const ContactUs = () => {
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

    <div class="flex-container">
   <div class="flex-items">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Telefonnummer</label>
      <input type="telefonNummer" name="user_tel" />
      <label>Subject</label>
      <input type="subject" name="user_subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
   </div>
</div>
    
  );
};

export default ContactUs