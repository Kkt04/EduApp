import React from 'react';
import Hero from './hero/Hero';
import AboutCard from '../about/AboutCard';
import CoursesCard from '../allcourses/CourseCard';




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
 