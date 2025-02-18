import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img className='footer_logo' src={footer_logo} alt='' />
          <p>
            A TripleTen graduate, I’m passionate about delivering user-friendly
            web solutions. Let’s connect and discuss your project.
          </p>
        </div>
        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='footer-subscribe'>Subscribe</div>
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
          </a>
          <a href='https://github.com/SawSimonLinn' target='_blank'>
            <p>GitHub</p>
          </a>
          <a href='https://www.linkedin.com/in/sawsimonlinn/' target='_blank'>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
