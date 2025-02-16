import React from 'react';
import './About.css';
import profile_img from '../../assets/author-image.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
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
            <p>
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
        <div className='about-achievement'>
          <h1>10+</h1>
          <p>COMPLETED PROJECTS</p>
          <p className='about_hover__text'>
            Real-world projects built during TripleTen Bootcamp.
          </p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>10+</h1>
          <p>TECHNOLOGIES MASTERED</p>
          <p className='about_hover__text'>
            Including JavaScript, React.js, Node.js, and more.
          </p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>500+</h1>
          <p>CODING HOURS LOGGED</p>
          <p className='about_hover__text'>
            Dedicated hours spent mastering front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
