import React from 'react';
import './MyProject.css';
import mywork_data from '../../assets/mywork_data';
import { GoRocket } from 'react-icons/go';
import { GoBrowser } from 'react-icons/go';
import { motion } from 'motion/react';

const MyProject = () => {
  const classNames = [
    'bg-green-box',
    'bg-white-box',
    'bg-yellow-box',
    'bg-blue-box',
    'bg-green-box',
    'bg-white-box',
  ];

  const textClassNames = [
    'text-green',
    'text-white',
    'text-yellow',
    'text-blue',
    'text-green',
    'text-white',
  ];
  return (
    <div className='container' id='projects'>
      <div className='title-box'>
        <h1>My latest work</h1>
      </div>
      <div className='all-card'>
        {mywork_data.map((work, index) => {
          const cardClassName = classNames[index % classNames.length];
          const textClassName = textClassNames[index % textClassNames.length];
          return (
            <div className='gradient-cards' key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='card'
              >
                <div className={`container-card ${cardClassName}`}>
                  <img
                    className='card-image'
                    src={work.w_img}
                    alt={work.w_name}
                  />
                  <div className='text-box'>
                    <h2 className='card-title'>{work.w_name}</h2>
                    <div className='language'>
                      <p className={`language-p ${textClassName}`}>
                        {work.w_language}
                      </p>
                    </div>
                    <p className='card-description'>{work.w_description}</p>
                    <div className='card-btn'>
                      <a
                        className='btn-link'
                        href={work.w_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <button className={`demo-btn ${textClassName}`}>
                          Demo <GoBrowser />
                        </button>
                      </a>
                      <a
                        className='btn-link'
                        href={work.w_github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <button className='work-btn-github'>
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
    </div>
  );
};

export default MyProject;
