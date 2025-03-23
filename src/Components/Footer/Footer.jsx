import React, { useState } from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';
import { GoArrowUpRight } from 'react-icons/go';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img className='footer_logo' src={footer_logo} alt='' />
          <p>Built with passion, persistence, and code.</p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='' />
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='footer-subscribe'>
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>
          © 2025 Saw Simon Linn. All rights reserved.
        </p>
        <div className='footer-bottom-right'>
          <a href='https://www.instagram.com/sawsimonlinn' target='_blank'>
            <p>Instagram</p>
            <GoArrowUpRight className='arrow-up' />
          </a>
          <a href='https://github.com/SawSimonLinn' target='_blank'>
            <p>GitHub</p>
            <GoArrowUpRight className='arrow-up' />
          </a>
          <a href='https://www.linkedin.com/in/sawsimonlinn/' target='_blank'>
            <p>LinkedIn</p>
            <GoArrowUpRight className='arrow-up' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
