import './App.css'
import Hero from '../src/components/Hero.jsx'
import About from '../src/components/About.jsx'
import Service from '../src/components/Service.jsx'
import Faq from '../src/components/Faq.jsx'
import Footer from '../src/components/Footer.jsx'
import Calendly from '../src/components/Calendly.jsx'

const App = () =>(

  <div className="bg-color">
    <div className="white-glow1"/>
    <Hero/>
    <About/>
    <div className='white__gradient1'/>
    <div className='white__gradient2'/>
    <Service/>
    <div className='white__gradient3'/>
    <div className='white__gradient4'/>
    <Faq/>
    <Calendly/>
    <Footer/>
    <div className='white__gradient5'/>
  </div>
);

export default App
