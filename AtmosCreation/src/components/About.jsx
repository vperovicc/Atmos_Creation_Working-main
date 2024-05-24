import React, {useEffect} from 'react'
import '../components/about.css'
import './about.css'
import Hands from '../assets/Hands.png'
import Check from '../assets/icon.png'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {

  useEffect(() => {
    // Ensure ScrollTrigger is available
    if (typeof window !== 'undefined') {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // Set defaults for ScrollTrigger
      ScrollTrigger.defaults({
        toggleActions: 'play none none reverse',
      });

      // Animation for the icon
      gsap.fromTo(
        '.icon',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 5,
          scrollTrigger: {
            trigger: '.icon',
            start: 'top 60%',
          },
        }
      );
    }
  }, []);

  return (
        <div>
            <div className='back'>
                <div className='text'>What is Atmos Creation</div>
            </div>

            <img src={Hands} className='pic'></img>

            <div className='boxter'>
              <div className='desc'>Atmos Creation was born to make content effortless for agencies. We offer everything you need to build a powerful online presence with SFC</div>
              <div className='desc'>Content systems, exclusive community access, and mastering the art of speaking to the camera with authority, we cover every aspect.</div>
              <div className='desc'>Our mission is to bridge the entire content creation gap, making it impossible for your agency not to scale from $10k to $100k+</div>
              <div className='lastDiv'>
                <div className='lastText'>With Atmos, your success is inevitable.</div>
                <img className='icon' src={Check}></img>
              </div>
            </div>

        </div>

  )
}

export default About