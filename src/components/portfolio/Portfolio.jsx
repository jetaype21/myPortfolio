import React from 'react'
import './portfolio.css'

const portfolio = [
  {
    id: 1,
    title: 'Dashboard - users',
    site: 'https://dashboardtaype.netlify.app/'
  },
  {
    id: 2,
    title: 'Web site GYM',
    site: 'https://gym2022.netlify.app/'
  },
  {
    id: 3,
    title: 'Web site - Shopping simulation',
    site: 'https://jetaype21.github.io/simulatorshorv2/'
  },
  {
    id: 4,
    title: 'Climate',
    site: 'https://jetaype21.github.io/climaApi/'
  },
  {
    id: 5,
    title: 'Consumes API - poke',
    site: 'https://jetaype21.github.io/pockeApi/'
  },
  {
    id: 6,
    title: 'Multiplication random',
    site: 'https://jetaype21.github.io/multiplicacion-random/'
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { portfolio.map( item => (
        <article className="portfolio__item" key={item.id}>
          <div className="portfolio__item-image">
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="banner" />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-option">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href={item.site || ''} target='_blank' className='btn btn-primary'>Demo</a>
          </div>
        </article>))}
      </div>
    </section>
  )
}
