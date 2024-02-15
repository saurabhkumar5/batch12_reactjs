
import React from 'react'
import './Header.css';
import img from './home.png'
import img1 from './bmw.png'

function Header() {
  return (
    <div>
      <div className='header'>
         <ul>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
         </ul>
       </div>

       <img src={img}/>
       <img src={img1}/>


    </div>
    
  )
}

export default Header;