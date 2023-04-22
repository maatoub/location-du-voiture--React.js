import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naygs9a', 'template_hphufch', form.current, '1uL_a1HAZmLbqYUmq')
      .then((result) => {
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container mt-5">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    
  );
};
export default ContactUs;
/* export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naygs9a', 'template_hphufch', form.current, '1uL_a1HAZmLbqYUmq')
      .then((result) => {
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container mt-5">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    
  );
};*/