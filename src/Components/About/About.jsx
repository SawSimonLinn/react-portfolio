import React from 'react';
import './About.css';
import profile_img from '../../assets/author-image.jpg';
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      id='about'
      className='about'
    >
      <div className='title-box'>
        <h1>About me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              I'm Saw Simon Linn, a TripleTen graduate and dedicated Full-Stack
              Developer. I specialize in designing and developing responsive,
              user-friendly websites that balance aesthetics and functionality
              while tackling coding challenges with enthusiasm.
            </p>
            <p initial={{ width: '90%' }}>
              I'm passionate about exploring new technologies and continuously
              refining my skills. My goal is to create solutions that are both
              innovative and user-centered.
            </p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className='about-skill'>
              <p>React JS</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className='about-skill'>
              <p>Node JS</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='about-achievement'
        >
          <h1>10+</h1>
          <p>COMPLETED PROJECTS</p>
          <p className='about_hover__text'>
            Real-world projects built during TripleTen Bootcamp.
          </p>
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='about-achievement'
        >
          <h1>10+</h1>
          <p>TECHNOLOGIES MASTERED</p>
          <p className='about_hover__text'>
            Including JavaScript, React.js, Node.js, and more.
          </p>
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='about-achievement'
        >
          <h1>500+</h1>
          <p>CODING HOURS LOGGED</p>
          <p className='about_hover__text'>
            Dedicated hours spent mastering front-end development.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
