import React, { useState } from 'react'
import openoptions from '../images/openoptions.png'
import close from '../images/close.png'
import contact from '../images/contact.png'
import suggestion from '../images/suggestion.png'
import feedback from '../images/feedback.png'
import issue from '../images/report-issue.png'
import ReportIssue from './Cards/ReportIssue'
import Sharefeedback from './Cards/Sharefeedback'
import CardOpened from './Cards/CardOpened'

const Feedback = () => {
  const [feedbackOpen, setfeedbackOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
const [selectedCard,setSelectedCard]=useState('');



  const toggleFeedback = () => {
    setSelectedCard('')
    setfeedbackOpen(!feedbackOpen)
    setCardOpen(false)
  
  }

  const reportIssueToggle = () => {
    setSelectedCard('reportIssue')
    setCardOpen(true)
  }
  const feedbackToggle = () => {
    setSelectedCard('feedback')
    setCardOpen(true)

  }

  const suggestionToggle = () => {
    setSelectedCard('suggestion')
    setCardOpen(true)
  }
  const contactToggle = () => {
    setSelectedCard('contact')
    setCardOpen(true)
  }



  return (

    <>
    
    {feedbackOpen ?(<div className='overlay'></div>):(null)} 
    <div className='feedback '>
      
     
      <div className='input-cards'>
        <CardOpened selectedCard={selectedCard} cardOpen={cardOpen} setCardOpen={setCardOpen} setfeedbackOpen={setfeedbackOpen}  setSelectedCard={setSelectedCard}/>
      
        
      </div>

      <div className={`  ${cardOpen ? 'cardisopen' : 'cardisclosed'} `}>
        <div className={`feedbackmenu  ${cardOpen ? 'flex-row-reverse' : ''}  ${feedbackOpen ? 'expanded' : ''}`}>
          <div className=' feedback-button-expand '>
            <div className={` ${cardOpen ? 'hide-feedback-button-desc' : 'feedback-button-desc'}`}>Report an Issue</div>
            <div className={`${selectedCard==='reportIssue'?'button-wrapper':''}`}><div className='feedback-buttons' onClick={reportIssueToggle}><img src={issue} alt="issue" /></div></div>
          </div>
          <div className='feedback-button-expand'>
            <div className={`${selectedCard==='reportIssue'?'':''} ${cardOpen ? 'hide-feedback-button-desc' : 'feedback-button-desc'}`}>Share Feedback</div>
           <div className={`${selectedCard==='feedback'?'button-wrapper':''}`}> <div className='feedback-buttons' onClick={feedbackToggle}><img src={feedback} alt="feedback" /></div></div>
          </div>
          <div className='feedback-button-expand'>
            <div className={`${cardOpen ? 'hide-feedback-button-desc' : 'feedback-button-desc'}`}>Give Suggestion</div>
            <div className={`${selectedCard==='suggestion'?'button-wrapper':''}`}> <div className='feedback-buttons ' onClick={suggestionToggle}><img src={suggestion} alt="suggestion" /></div></div>
          </div>
          <div className='feedback-button-expand'>
            <div className={`${cardOpen ? 'hide-feedback-button-desc' : 'feedback-button-desc'}`}>Contact Us</div>
            <div className={`${selectedCard==='contact'?'button-wrapper':''}`}> <div className='feedback-buttons'  onClick={contactToggle} ><img src={contact} alt="contact" /></div></div>
          </div>




        </div>


        <div className='open-options feedback-buttons' onClick={toggleFeedback}>


          {feedbackOpen ? (<img src={close} alt="" />) : (<img src={openoptions} alt="" />)}

        </div>

      </div>

    </div>
    </>
  )
}

export default Feedback
