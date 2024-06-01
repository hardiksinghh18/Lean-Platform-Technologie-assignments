import React from 'react'
import companytype from'../../images/companytype.png'
const Box1 = () => {
  return (
    
       <div className="box1 ">  
             <div  className='flex-row '>
                 <div  className='flex-row'>
                    <div className='design'>Design</div>
                    <div className='design'> Technology</div>
                 </div>
                 <div className='companytype'>
                    <img src={companytype} alt="" />
                 </div>
             </div>
             <div>
                <p className='p1'>
                A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? 
                </p>

                <p className='p2'>
                Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? 
                </p>
             </div>
             <div className='flex-row box1-low'>
                <p className='flex-row'><i class='bx bxs-show'></i> 100 views</p>
                <p className='flex-row'><i class='bx bx-info-circle' ></i> How should you word your answer?</p>
             </div>
        
        </div>
    
  )
}

export default Box1
