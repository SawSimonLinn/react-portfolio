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
  return (
    <div className='container'>
      <div className='title-box'>
        <h1>My latest work</h1>
      </div>
      <div className='all-card'>
        {mywork_data.map((work, index) => {
          const cardClassName = classNames[index % classNames.length];
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
                    {' '}
                    <h2 className='card-title'>{work.w_name}</h2>
                    <p className='card-description'>{work.w_description}</p>
                    <div className='card-btn'>
                      <a href={work.w_url} target='_blank'>
                        <button className={`demo-btn ${cardClassName}`}>
                          Demo <GoBrowser />
                        </button>
                      </a>
                      <a href={work.w_github} target='_blank'>
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
