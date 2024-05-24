import React from 'react'
import './faq.css'
import Quest from '../components/Questions'

const Faq = () => {

  //here is where you add and change the questions and answers for you FAQ
  const faqList = [
    {question:"What will I get?", answer: "You will get a streamlined operation that includes:\n\tContent calendar, production, and distribution strategy\nFour styles of templates for engaging Short-Form Content scripts.\nGuidance on everything from room selection to lighting and wardrobe tips for the perfect video setup.\nA course on mastering the art of camera communication\nConsistent, high-quality SFC content to keep your audience engaged and your brand relevant.\nAccess to a network of like minded agency owners"},
    {question:"Are results guaranteed?", answer: "What we guarantee is our commitment to applying the industry's best practices, continuous optimization, and a deep understanding of market trends to maximise the impact of your content. Our goal is to partner with you in driving growth and achieving measurable success."},
    {question:"Is there a refund policy?", answer: "Given the digital format of our services and the fact that access once granted cannot be retracted, we are unable to provide refunds at this time."},
    {question:"Still have questions?", answer: "Contact info@atmoscreation.io"},
  ];

  return (
    <div>
        <div className='tit'>
            <p className='titleText'>FAQ</p>
        </div>

        <div className='box'>
            {faqList.map((faq,index)=>(
              <Quest key={index}
              questionText={faq.question}
              answerText={faq.answer}/>
            ))}
        </div>
    </div>
  )
}

export default Faq