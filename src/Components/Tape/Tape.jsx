import React from 'react';
import { motion } from 'framer-motion';
import './Tape.css';
import StarIcon from '../../assets/star.png';

const words = [
  'Reliable',
  'Responsive',
  'Usable',
  'Dynamic',
  'Interactive',
  'User-friendly',
  'Performant',
  'Cross-browser',
  'Mobile-friendly',
  'Accessible',
  'Scalable',
  'Maintainable',
  'Secure',
];

const Tape = () => {
  return (
    <div className='tape'>
      <div className='tape-gradient'>
        <motion.div
          className='tape-container'
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 50,
            ease: 'linear',
          }}
        >
          {[...words, ...words].map((word, index) => (
            <div key={index} className='tape-word'>
              <span>{word}</span>
              <img src={StarIcon} alt='Star' />
              <p> . </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tape;
