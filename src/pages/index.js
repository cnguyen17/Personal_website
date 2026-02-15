import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import {
  homeObjOne,
  // projectOne,
  // projectTwo,
  Contact,
} from '../components/InfoSection/Data';

import Resume from '../components/Resume';
import {Experience} from '../components/Resume/Data';
import MSUKonnect from '../components/MSUKonnect';
import {projectOne,} from '../components/MSUKonnect/Data';
import EESANA from '../components/eesana';
import{projectTwo} from '../components/eesana/Data';
import Pacer from '../components/Pacer'
import { projectThree } from '../components/Pacer/Data';
import Scout from '../components/Scout';
import { projectFour } from '../components/Scout/Data';
import ShipCaptain from '../components/ShipCaptain';
import { projectFive } from '../components/ShipCaptain/Data';

import Services from '../components/Services';
import Internships from '../components/Internships';



function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Resume {...Experience}/>
      <Services />
      <MSUKonnect {...projectOne} />
      <EESANA {...projectTwo}/>
      <Pacer {...projectThree} />
      <Scout {...projectFour} />
      <ShipCaptain {...projectFive} />
      <Internships/>
      <InfoSection {...Contact} />
      <Footer />
    </>
  );
}

export default Home;
