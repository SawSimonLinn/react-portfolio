import React, { useState, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'motion/react';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = ['Web Developer', 'React Developer', 'Full-Stack Developer'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div id='home' className='hero'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile_img}
          alt=''
          className='profile-img profile-img_shadow'
        />
      </motion.div>
      <h1>
        <span>I'm Simon Linn, </span>
        {text} <br></br>based in the USA.
      </h1>
      <p>
        A TripleTen graduate from California, USA, specializing in building
        modern, user-friendly websites and creating responsive web designs.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <a
            className='anchor-link'
            offset={50}
            href='https://www.linkedin.com/in/sawsimonlinn/'
            target='_blank'
          >
            <button>Connect with me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
