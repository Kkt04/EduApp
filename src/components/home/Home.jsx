import React from 'react';
import Hero from './hero/Hero';
import AboutCard from '../about/AboutCard';
import CoursesCard from '../allcourses/CourseCard';
import PriceCard from '../pricing/PriceCard';
import Pricing from '../pricing/Price';
import Contact from '../contact/Contact';



const Home = () => {
  return (
    <>
      <Hero />
      <CoursesCard/>
      <AboutCard />
    </>
  );
};

export default Home;
 