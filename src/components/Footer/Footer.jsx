import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands'
import { faLocation, faPhone,  faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links =[
    {id: 1, name: 'All', url: '/shop'},
    {id: 2, name: 'Wedding Cakes', url: ''},
    {id: 3, name: 'Birthday Cakes', url: ''},
    {id: 4, name: 'Valantine Cakes', url: ''},
    {id: 5, name: 'Treats/Pastries (Treats)', url: ''},
  ]
  const place = links.map((link)=>(
    <li key={link.id}><Link to={link.url}><FontAwesomeIcon icon={faAngleRight} className="angle" />{link.name}</Link></li>
  ))
  return (
    <>
    <footer>
      <div className="footCon">
        <div className="info">
          <h3>Get In Touch</h3>
          <ul>
            <li><a href=""><FontAwesomeIcon icon={faPhone} className='ico' />+2348123456789</a></li>
            <li><a href=""><FontAwesomeIcon icon={faEnvelope} className='ico' />meemscakes@gmail.com</a></li>
            <li><FontAwesomeIcon icon={faLocation} className='ico' />Kaduna, Nigeria</li>
            {/* <li><a href=""> </a></li> */}
            <ul className="sub">
              <li><a href="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="https://www.instagram.com/_meems_cakes/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </ul>
        </div>
        <div className="cat">
          <h3>Categories</h3>
          <ul>
           {place}
          </ul>
        </div>
      </div>
      <div className="foot">
      © {currentYear}. Meem's Cakes. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}
