import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='title-box'>
        <h1>My latest work</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='work-card'>
                <img src={work.w_img} alt={work.w_name} />
                <div className='work-title'>
                  <h2>{work.w_name}</h2>
                </div>
                <div className='work-info'>
                  <h2>{work.w_name}</h2>
                  <p>{work.w_description}</p>
                  <div className='work-btn'>
                    <a href={work.w_url} target='_blank'>
                      <button>Demo</button>
                    </a>
                    <a href={work.w_github} target='_blank'>
                      <button>GitHub</button>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
