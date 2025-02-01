import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm VanAnh LE,</span> junior web developer fullstack</h1>
      <div className="hero-action">
        <div className="hero-connect">
          <a className='anchor-link' href='https://github.com/vingtle'>Connect with me</a>
        </div>
        <a className="hero-link" href="https://www.linkedin.com/in/le-van-anh-53843731/">
         Check it out
        </a>
      </div>
    </div>
  );
};

export default Hero;
