import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { motion } from 'motion/react';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-300px';
  };

  return (
    <div className='navbar'>
      <motion.div
        className='nav-logo'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Simon Linn</h1>
        <div className='hire__div'>
          <div className='hire__green'></div>
          <p className='hire-text'>Avaiable For Hire</p>
        </div>
      </motion.div>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=''
          className='nav-mob-close'
        />
        <li>
          <AnchorLink className='anchor-link' href='#home' offset={100}>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className='nav-connect'>
        <a
          className='anchor-link'
          offset={50}
          href='https://www.linkedin.com/in/sawsimonlinn/'
          target='_blank'
        >
          <button>Connect With Me</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
