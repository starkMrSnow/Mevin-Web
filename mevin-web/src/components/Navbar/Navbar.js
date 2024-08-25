import React from 'react'
import './NavbarStyles.css'
import logo from '../../Assets/logo.png'

 function Navbar() {
  return (
   <div className="navbar">
   <div className="navbarLogo">
        <h2>Mevin</h2>
        <img src={logo} alt="Logo" className="logo" />
   </div>
    

    <ul>
        <li>HOME</li>
        <li>BLOG</li>
        <li>CONTACT</li>
        <li>REVIEWS</li>
    </ul>

    <button className='login'>LOG IN</button>

   </div>
  )
}
export default Navbar
