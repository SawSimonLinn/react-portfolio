import React, { useState } from "react";
import "./MyProject.css";
import mywork_data from "../../assets/mywork_data";
import { GoRocket } from "react-icons/go";
import { GoBrowser } from "react-icons/go";
import { AnimatePresence, motion } from "motion/react";
import { FaLocationArrow } from "react-icons/fa";

const MyProject = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const classNames = [
    "bg-green-box",
    "bg-white-box",
    "bg-yellow-box",
    "bg-blue-box",
    "bg-green-box",
    "bg-white-box",
  ];

  const textClassNames = [
    "text-green",
    "text-white",
    "text-yellow",
    "text-blue",
    "text-green",
    "text-white",
  ];
  return (
    <div className="container" id="projects">
      <div className="title-box">
        <h1>My latest work</h1>
      </div>
      <div className="all-card">
        {mywork_data.map((work, index) => {
          const cardClassName = classNames[index % classNames.length];
          const textClassName = textClassNames[index % textClassNames.length];
          return (
            <div className="gradient-cards" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="card"
              >
                <div className={`container-card ${cardClassName}`}>
                  <a
                    className="btn-link"
                    href={work.w_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-image"
                      src={work.w_img}
                      alt={work.w_name}
                    />
                  </a>
                  <div className="text-box">
                    <h2
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="card-title"
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={hoveredIndex === index ? "hover" : "default"}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {hoveredIndex === index
                            ? work.w_name_hover
                            : work.w_name}
                        </motion.span>
                      </AnimatePresence>
                    </h2>

                    <div className="language">
                      <p className={`language-p ${textClassName}`}>
                        {work.w_language}
                      </p>
                    </div>
                    <p className="card-description">{work.w_description}</p>
                    <div className="card-btn">
                      <a
                        className="btn-link"
                        href={work.w_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className={`demo-btn ${textClassName}`}>
                          Demo <GoBrowser />
                        </button>
                      </a>
                      <a
                        className="btn-link"
                        href={work.w_github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="work-btn-github">
                          GitHub <GoRocket />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="work-connect">
        <a
          className="work-anchor-link"
          offset={50}
          href="https://github.com/SawSimonLinn"
          target="_blank"
        >
          <button>
            <p> Explore more</p> <FaLocationArrow />
          </button>
        </a>
      </div>
    </div>
  );
};

export default MyProject;
