import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('preloader-hidden');
      }
    }, 2000); // 5000 milliseconds = 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='preloader'>
      <div className='preloader-title'>Saw Simon Linn</div>
      {/* <div className="preloader-title">Loading...</div> */}
      <div className='preloader-bar'></div>
    </div>
  );
};

export default Preloader;
