import React from 'react'
// import '../style/Style.css'
import {Link} from 'react-router-dom'
// import { logo } from '../data/data'
import logo from '../images/logo.png'
import '../style/Navbar.css'

function Navbar() {
  return (
    <>
     <div className="navbar-main">
      <div className='logo1'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='navlist'>
      <Link className='about' to='/home'>About</Link>
      <Link className='media' to='/home'>Media</Link>
      <Link className='virtual' to='/home'>Virtual Tour</Link>
      <Link className='peb' to='/home'>E-Brochure</Link>
      <Link className='ava' to='/contact'>Availability</Link>
      <Link className='conatct' to='/contact'>Contact</Link>
      <Link className='live' to='/contact'>Live Camera</Link>
      <Link className='esp' to='/contact'>ESP</Link>
      </div>
      
        
        
     </div>
    </>
  )
}

export default Navbar