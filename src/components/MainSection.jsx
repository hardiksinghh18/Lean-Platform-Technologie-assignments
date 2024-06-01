import React from 'react'
import Box1 from './Boxes/Box1'
import Box2 from './Boxes/Box2'

const MainSection = () => {
  return (
    <>
      <hr className='line' />

      <div className='backbutton'>
        <button>&larr;  Back to Questions </button>
      </div>

     

      <div className="boxes flex-col">
        <Box1 />

        <div className='flex-row answers'>
          <div>
            <h4>Answers(23)</h4>
          </div>
          <div >
             Sort By : 
            <select name="dropdown" id="" className='dropdown-new'>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
        <Box2 />
      </div>

    </>
  )
}

export default MainSection
