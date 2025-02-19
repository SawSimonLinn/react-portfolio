import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // enter your own web3 forms access key below
    formData.append('access_key', '58da7cb8-40e0-4a4b-90c7-d204c4a1f513');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    alert(res.message);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className='contact'
    >
      <div className='title-box'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>simon@sawsimonlinn.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>+1 (414) 343-6893</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>Los Angeles, California.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor='message'>Write your message here</label>
          <textarea
            name='message'
            rows='8'
            placeholder='Enter your message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type='submit' className='contact-submit'>
            Submit now
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
