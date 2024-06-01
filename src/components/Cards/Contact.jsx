import React, { useState } from 'react'
import Popup from '../Cards/Popup'
import { UserAuth } from '../../Context/AuthContext';

const Contact = ({ setCardOpen,setfeedbackOpen,setSelectedCard}) => {
    const [textContent,setTextContent]=useState('')
    const [popupOpen, setPopupOpen] = useState(false);
    const {auth,login,logout}=UserAuth();

const handleSubmit=(e)=>{

    setPopupOpen(true);
    setTimeout(() => {
        setPopupOpen(false)
        setCardOpen(false)
        setfeedbackOpen(false)
        setSelectedCard('')
    }, 4000);
}

    if(popupOpen){
        return (
            <div className='notification-box'>
            <Popup message={`Thanks for reaching out to us! We will get back to you as soon as possible`}/>
          </div>
        )
    }


  return (
    <div className='report-issue contactbox'>
         <h4>Let us know what <span>your queries</span> are!</h4>

         <div className="line"></div>

         <form action="" className='flex-col' onSubmit={handleSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' />

            {auth ? (null):(
            <div className=' loggedout'>
              <label htmlFor="">Enter your email<sub>*</sub></label>
              <input type="text"  placeholder='Enter your Email' required/>

              <label htmlFor="">Enter your Mobile Number<sub>*</sub></label>
              <input type="email"  placeholder='Enter your Mobile Number' required/>
            </div>
            )}

            <label htmlFor="">What would you like to ask?  <sub>*</sub></label>
            <textarea name="issue" id="issue" cols="30" rows="4" required placeholder='Write here...' onChange={(e)=>setTextContent(e.target.value)}></textarea>


            <label htmlFor="file-input" className="attach-button">
                <span>Attach</span>
                <input
                    type="file"
                    id="file-input"
                    name="file"
                  
                />
            </label>
            <div><button type='submit' className={`${textContent.length>0?'button-enabled':'button-disabled'}`} >Submit</button></div>
         </form>
    </div>
  )
}

export default Contact
