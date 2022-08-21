import React from 'react'
import './footer.css'

import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JE TAYPE</a>

      <ul className='footer__links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="wa.me//+51935747422">
          <BsWhatsapp className='footer__socials-icon'/>
        </a>
        <a href="www.linkedin.com/in/jetaypedev">
          <AiFillLinkedin className='footer__socials-icon'/>
        </a>
        <a href="www.linkedin.com/in/jetaypedev">
          <BsInstagram className='footer__socials-icon'/>
        </a>
      </div>

      <div className="footer__copyrigth">
        <small>All rigths reserved &copy; JE TAYPE 2022. </small>
      </div>
    </footer>
  )
}
