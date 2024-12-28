import React from 'react';
import search from '../../../Task 3/src/assets/Group 1.png';
import './Body.css'; // Assuming you're using an external CSS file.

function Body() {
  return (
    <div className="image-container">
      <img src={search} alt="search" className="body-image" />
      <div className="text-overlay">TOGETHER WE</div>
      <div className="text-overlay3">Together, we can reinvent your business. Reinvention is about breaking industry norms. Our wide range of capabilities, ecosystem partnerships and unmatched industry expertise can help your business become the next best version of itself. </div>
      <div className='text-overlay4'>See what we do</div>
      <div className="text-overlay5">Services</div>
      <div className='text-overlay2'>REINVENTED</div>
    </div>
  );
}

export default Body;
