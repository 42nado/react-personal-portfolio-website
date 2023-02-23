import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1orcuvn', 'template_hwemm2z', form.current, 'nufWVpy63w_2mRZyk')
      .then((result) => {
          console.log(result.text);
          console.log("Email sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form>     
        <input name="subject" type="text" class="feedback-input" placeholder="subject" />  
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="message" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="Send"/>
    </form>
  )
}

export default Contact;