import React from 'react'
import profileImage from '../images/profileImage.png'
import { UserAuth } from '../Context/AuthContext'
const Navbar = () => {
  const {auth,login,logout}=UserAuth();



    return (
        <nav className='navbar flex-row'>
            <div className='nav-section1'>
                THE <span>PRODUCT</span> PLATFORM
            </div>
            <div className='nav-section2 flex-row'> 
                
                   <div>
                    {auth?(<button className='loginButton' onClick={logout}>Logout</button>):(<button className='loginButton' onClick={login}>Login</button>)}  
                   </div>
                    <div>
                        <select name="" id="">
                            <option value="learn">Learn</option>
                        </select>
                    </div>  
                    <div>
                        <select name="" id="">
                            <option value="practice">Practice</option>
                        </select>
                    </div>  

                    <div className='profileImage'>
                       <img src={profileImage} alt="profile" />
                    </div>
             
            </div>
        </nav>
    )
}

export default Navbar
