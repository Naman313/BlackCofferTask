import React from 'react'
import './Navbar.css'
import Mask from '../../../Task 3/src/assets/Mask group.png';
import content from '../../../Task 3/src/assets/Frame 6.png';
import search from '../../../Task 3/src/assets/search.png';
import phone from '../../../Task 3/src/assets/phone.png';
function Navbar(){
    return(
        <>
        <div className='navbar'>
        <img src= {Mask} alt="" className='logo' />
        <img src= {content} alt="" className='frame6'/>
        <img src= {search} alt="" className='search'/>
        <button className='btn2'> 
            {/* <img src={phone} alt="" /> */}
            Contact Us </button>
        </div>
        </>
    )
}

export default Navbar;