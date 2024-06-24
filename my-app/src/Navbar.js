import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='header'>
        <img className='logo' src={"/cyberForge_logo.png"}/>
        <h1>CyberForge</h1>
        </div>
        <div className='options'>
            <p>About Us</p>
            <p>Gallery</p>
            <p>Custom PCs</p>
            <p>Consultation</p>
            <p>Pre-Build PCs</p>
        </div>

        <button>
            Contact Us
        </button>

    </div>
  )
}
