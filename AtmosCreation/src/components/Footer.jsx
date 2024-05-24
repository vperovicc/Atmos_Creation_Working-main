import React from 'react'
import './footer.css'
import Insta from '../assets/instagram.svg'
import Face from '../assets/facebook.svg'
import Twitt from '../assets/twitter.svg'
import You from '../assets/youtube.svg'
import Log from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='infos'>
            <div className='social'>
            <a href='https://www.instagram.com/aurelius.gill/' target='_blank' rel='noopener noreferrer'>
              <img src={Insta}/>
            </a>

            <a href='https://www.facebook.com/profile.php?id=100092427669650' target='_blank' rel='noopener noreferrer'>
              <img src={Face}/>
            </a>

            <a href='https://twitter.com/Aureliusgill' target='_blank' rel='noopener noreferrer'>
                <img src={Twitt} />
            </a>

            <a href='http://www.youtube.com/@AureliusGill' target='_blank' rel='noopener noreferrer'>
                <img src={You} />
            </a>
            </div>

            <img className='logo1' src={Log}/>

            <div className='email'>
            info@atmoscreations.io
            </div>
        </div>

        <div className='line'/>

        <p className='rights'>
            ©2024 atmoscreation.io All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer