import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO CourseBazar' title='Best Online Education Expertise' />
            <p><b>A place where you can learn, And be industry ready EXPERT</b></p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero;