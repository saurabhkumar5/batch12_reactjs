
import React from 'react'
import './Header.css'
import img from './home.png'

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


    </div>
    
  )
}

export default Header;