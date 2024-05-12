import {useEffect} from 'react'
import './About.css'
import { Hero } from '../../components/Hero/Hero'

export const About = () => {
  useEffect(() => {
    document.title = " Meem's Cake | About";
  }, []);
  return (
    <>
    <Hero title="About Us" link="/" name="Home" name1="About-Us" />
    <section className='about'>
      <div className="head">
      <h4>Welcome to</h4>
      <h2>MeemsCake</h2>
      </div>

    </section>
    
    </>

  )
}
