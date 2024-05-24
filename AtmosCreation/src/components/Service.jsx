import React, {useEffect} from 'react'
import './service.css'
import Pic1 from '../assets/1.png'
import Pic2 from '../assets/2.png'
import Pic3 from '../assets/3.png'
import Pic4 from '../assets/4.png'
import Pic5 from '../assets/5.png'
import Pic6 from '../assets/6.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Service = () => {

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.defaults({
                toggleActions: 'play none none reverse'
            })

            gsap.fromTo('.movingLine',{
                height:0,
            },{
                height: 2590,
                duration:12,
                scrollTrigger:{
                    trigger:'.contain',
                    start: 'top 20%'
                }
            })

            gsap.fromTo('.one',{
                opacity: 1
            },{
                opacity: 1,
                duration:2,
                scrollTrigger:{
                    trigger:'.contain',
                    start: 'top 20%'
                }
            })
        }
    },[])

  return (
    <div className='all'>
        <div className='tit'>
            <h1 className='titText' >Our Services</h1>
        </div>

        <div className='contain'>

        <div className='movingLine'/>
            <div className='one'>
                <h>Content (SFC) Content System</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic1}></img>
                    <p>Our signature SFC System. Tailored for impact, our strategy combines a content calendar, production workflow, content idea generators and more to ensure your message not only reaches but resonates with your audience. With our system everything becomes streamlined.</p>
                </div>
            </div>

            <div className='one'>
                <h>DFY Process</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic2}></img>
                    <p>We offer a complete Done For You process.
                    We will edit, create the thumbnails, make the captions and post the content all for you.</p>
                </div>
            </div>


            <div className='one'>
                <h>Personal Studio Guide</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic3}></img>
                    <p>From selecting the perfect room and background to optimising lighting and cameras, our guides ensure you present your best self. We even cover wardrobe tips to enhance your on-camera presence. It's your personal studio setup, simplified.</p>
                </div>
            </div>


            <div className='one'>
                <h>Talk to Camera Mini Course</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic4}></img>
                    <p>Learn the art of camera communication with our Talk to Camera Mini Course. Learn the four pillars of influential communication—authenticity, emotion, humour, and energy. This course turns amateur content creators into titans.</p>
                </div>
            </div>

            <div className='one'>
                <h>Content (SFC 6x per week)</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic5}></img>
                    <p>Build a loyal following with our SFC 6x per week service. We help you consistently deliver high-quality, engaging short form content that captures attention. Keep your brand relevant and your audience engaged with fresh, compelling content week after week.</p>
                </div>
            </div>

            <div className='one'>
                <h>Community for Agency Owners</h>
                <div className='circle'/>
                <div className='separateCreative'>
                    <img src={Pic6}></img>
                    <p>Connect and grow with our exclusive community for agency owners. This is your space to network with peers, discover new service providers, and share insights. Whether you're looking to expand your offerings or seeking partnerships, our community is designed to support your agency's growth and success.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Service