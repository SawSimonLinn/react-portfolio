import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import MyProject from './Components/MyProject/MyProject';
import Technologies from './Components/Technologies/Technologies';
import TapeSection from './Components/Tape/Tape';
import Preloader from './Components/Preloader/Preloader';

const App = () => {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <MyProject />
      {/* <MyWork /> */}
      <Technologies />
      <TapeSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
