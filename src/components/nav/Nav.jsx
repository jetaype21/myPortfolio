import React, { useState } from 'react'
import './nav.css'

import { AiFillBook, AiFillHome, AiFillMessage, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {

  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiFillBook /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav