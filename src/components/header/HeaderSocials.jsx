import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jetaypedev" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/jetaype21" target='_blank'><BsGithub /></a>
      <a href="https://github.com/jetaype21" target='_blank'><BsFacebook /></a>
    </div>
  )
}
