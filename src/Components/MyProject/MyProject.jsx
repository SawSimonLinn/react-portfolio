import React from 'react';
import './MyProject.css';
import mywork_data from '../../assets/mywork_data';
import { GoRocket } from 'react-icons/go';

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
    <div class='container'>
      <div className='title-box'>
        <h1>My latest work</h1>
      </div>
      <div className='all-card'>
        {mywork_data.map((work, index) => {
          const cardClassName = classNames[index % classNames.length];
          return (
            <div class='gradient-cards' key={index}>
              <div class='card'>
                <div class={`container-card ${cardClassName}`}>
                  <img
                    className='card-image'
                    src={work.w_img}
                    alt={work.w_name}
                  />
                  <div className='text-box'>
                    {' '}
                    <h2 class='card-title'>{work.w_name}</h2>
                    <p class='card-description'>{work.w_description}</p>
                    <div className='card-btn'>
                      <a href={work.w_url} target='_blank'>
                        <button className={`demo-btn ${cardClassName}`}>
                          Demo
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProject;
