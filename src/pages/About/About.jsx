import React from 'react'
import './About.css'
import { Hero } from '../../components/Hero/Hero'

export const About = () => {
  return (
    <>
    <Hero title="About Us" link="/" name="Home" link1="/about" name1="About-Us" />
    <section className='about'>
      <div className="head">
      <h4>Welcome to</h4>
      <h2>MeemsCake</h2>
      </div>

    </section>
    </>
  )
}
