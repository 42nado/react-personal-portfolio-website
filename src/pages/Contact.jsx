import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1orcuvn', 'template_hwemm2z', form.current, 'nufWVpy63w_2mRZyk')
      .then((result) => {
          console.log("Email sent successfully");
          console.log(result.text);
          // alert("Email sent successfully");
          Swal.fire(
            'Email Sent Successfully!',
            '',
            'success'
          )
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>     
        <input name="subject" type="text" class="feedback-input" placeholder="Subject" required/>  
        <input name="name" type="text" class="feedback-input" placeholder="Name" required/>   
        <input name="email" type="email" class="feedback-input" placeholder="Email"  required/>
        <textarea name="message" class="feedback-input" placeholder="Comment" required ></textarea>
        <input type="submit" value="Send"/>
    </form>
  )
}

export default Contact;