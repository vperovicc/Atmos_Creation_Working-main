import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './hero.css'
import Logo from '../assets/Logo.png'
import Vid from '../assets/vslDone.mov'

const Hero = () => {

  return (
    <div>
      <img className='logo' src={Logo} alt='Logo' />
      <div className='title'>Helping Agencies Attract Clients On Demand With A <span className='span'>Leveraged Audience & Content Acquisition Systems</span>
      </div>
      <div className='description'>Proven content systems & infrastructures used by the titans in the industry</div>
      <div className='video-container'>
      <video className='video'controls>
        <source src={Vid} type='video/mp4'/>
      </video>
      </div>
      <Link to='calendlySection' smooth={true} duration={1300} offset={-50}>
        <div className='button'>
          <div className='btnText'>Book a Call</div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
