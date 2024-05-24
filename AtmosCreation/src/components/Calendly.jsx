import React from 'react';
import './calendly.css'
import {InlineWidget} from 'react-calendly'

const Calendly = () => {
  return (
      <div id='calendlySection' className='container_calendly'>
      <InlineWidget url='https://calendly.com/atmoscreation/30min?hide_gdpr_banner=1'/>
    </div>
  );
};

export default Calendly;
