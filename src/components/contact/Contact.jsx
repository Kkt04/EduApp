import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true); 
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Haryana Sonepath</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>coursebazar@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 1234567890</p>
              </div>
            </div>

            {messageSent && <p className='success-message'>Your message has been sent!</p>} 

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' required />
                <input type='email' placeholder='Email' required />
              </div>
              <input type='text' placeholder='Subject' required />
              <textarea cols='30' rows='10' placeholder='Create a message here...' required></textarea>
              <button type='submit' className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
