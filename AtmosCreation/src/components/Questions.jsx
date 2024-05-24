import React, { useState } from 'react'
import './questions.css'

const questions = ({questionText, answerText}) => {

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!isExpanded);
    };

  return (
    <div>
        <div className={`wrapper ${isExpanded ? 'expanded' : ''}`}>

            <div className='question-container'>
                <p className='question'>{questionText}</p>
                <div className='dot' onClick={toggleExpansion}/>
            </div>
            
            {isExpanded && (
            <div className='answer'>
                <p>{answerText}</p>
            </div>
        )}
        </div>
        
    </div>
  )
}

export default questions