import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import { motion } from "motion/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GoArrowUp } from "react-icons/go";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = ["Web Developer", "React Developer", "Frontend Developer"];
  const [showToHome, setShowToHome] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowToHome(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="hero-hero">
      <div id="home" className="hero" ref={heroRef}>
        <AnchorLink
          className={`toHome ${showToHome ? "show" : ""}`}
          href="#home"
          offset={100}
        >
          <p>
            <GoArrowUp className="up-btn" />
          </p>
        </AnchorLink>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile_img}
            alt=""
            className="profile-img profile-img_shadow"
          />
        </motion.div>
        <h1>
          <span>I'm Saw Simon Linn, </span>
          <br />
          {text} <br></br>based in the California.
        </h1>
        <p>
          A TripleTen graduate from California, USA, specializing in building
          modern, user-friendly websites and creating responsive web designs.
        </p>
        <div className=""></div>
        <div className="hero-action">
          <div className="hero-connect">
            <a className="anchor-link" offset={50} href="#projects">
              <button>View My Work</button>
            </a>
          </div>
          {/* <div className='hero-text-fly'>
            <div className='hero-linkedin'>
            <GoPaperAirplane className='hero-linkedin-arrow' />
            <h6 className='hero-linkedin-text'>LinkedIn</h6>
            </div>
            </div> */}
        </div>
      </div>
      <div className="hero-background-animation">
        <h2 className="hero-background-animation-text">
          SAW SIMON LINN SAW SIMON LINN{" "}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
