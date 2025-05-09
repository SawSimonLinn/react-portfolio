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
        <h1 className='title-box-h1'> Get in touch</h1>
      </div>
      <div className='contact-section'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='contact-left'
        >
          <h1>Let's talk</h1>
          <p>
            Got a project idea, a collaboration offer, or just want to say hi?
            I’d love to hear from you. Fill out the form or email me directly.
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='mailicon' />{' '}
              <p>simon@sawsimonlinn.com</p>
            </div>
            {/* <div href='#' className='contact-details'>
              <img src={call_icon} alt='linkedin' /> <p>LinkedIn</p>
            </div> */}
            <div className='contact-detail'>
              <img src={call_icon} alt='' />{' '}
              <a
                target='_blank'
                href='https://www.linkedin.com/in/sawsimonlinn/'
                rel='noopener noreferrer'
              >
                <p>LinkedIn</p>
              </a>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='locationicon' />{' '}
              <p>Los Angeles, California.</p>
            </div>
          </div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onSubmit={onSubmit}
          className='contact-right'
        >
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
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
