import React from "react";
import "./Technologies.css";
import { RiReactjsLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiWebpack,
  SiTypescript,
} from "react-icons/si";
import { FaJsSquare, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <h1>Technologies</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className=""
      >
        <div className="tech-icons">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <RiReactjsLine className="icon react" />
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <FaJsSquare className="icon javascript" />
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <RiNextjsLine className="icon nextjs" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <SiTailwindcss className="icon tailwind" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <SiTypescript className="icon typescript" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <FaGithub className="icon github" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <SiWebpack className="icon webpack" />
          </motion.div>
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <RiNodejsLine className="icon nodejs" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <SiExpress className="icon express" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="tech-icon"
          >
            <SiMongodb className="icon mongodb" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
