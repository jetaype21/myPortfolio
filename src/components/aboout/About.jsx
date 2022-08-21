import React from 'react'
import './about.css'
import { } from 'react-icons/'
import { BsAward, BsFolderFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Tnow</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Years working</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>+3 clients</small>
            </article>

            <article className="about__card">
              <BsFolderFill className='about__icon' />
              <h5>Projects</h5>
              <small>+13 projects</small>
            </article>
          </div>

          <p>
          Meticulous web developer with 6+ months of front-end experience and a passion for
responsive website design and a firm believer in the mobile-first approach. Specialist
in problem solving and teamwork.
          </p>
          <a href="#contact" className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}