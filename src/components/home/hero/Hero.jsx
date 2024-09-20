import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>A place where you can learn and earn a certificate, And be industry ready EXPERT</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero;