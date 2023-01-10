import React from 'react'
import { CTA } from './CTA'
import './header.css'
import { HeaderSocials } from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Juan Taype</h1>
        <h5 className="text-light">Fullstack - Movil developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="logo" />
        </div>
      </div>
      
    </header>
  )
}

export default Header
