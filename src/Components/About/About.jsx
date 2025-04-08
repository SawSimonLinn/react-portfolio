import React from "react";
import "./About.css";
import profile_img from "../../assets/author-image.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="about"
    >
      <div className="title-box">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
          <p>
            {" "}
            Outside of coding, I enjoy editing videos, designing visuals, and
            spending time with my family.
          </p>
        </div>
        <div className="about-right">
          <div className="about-para">
            <h3>Who Am I?</h3>
            <p>
              I’m Simon, a passionate frontend developer with a background in
              graphic design and video editing.
              <br /> I started designing at 13 and spent over 6 years working
              professionally as a designer in Myanmar. Later, I transitioned
              into software engineering to pursue my lifelong dream of creating
              tools that help people.
            </p>
            <p>
              I recently graduated from a software engineering program where I
              learned HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.
              I’m now focused on building real-world applications and becoming
              the best developer I can be.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next.js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>20+</h1>
          <p>COMPLETED PROJECTS</p>
          <p className="about_hover__text">
            Real-world projects built during TripleTen Bootcamp.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>TECHNOLOGIES MASTERED</p>
          <p className="about_hover__text">
            Including JavaScript, React.js, Node.js, and more.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>900+</h1>
          <p>CODING HOURS LOGGED</p>
          <p className="about_hover__text">
            Dedicated hours spent mastering front-end development.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
