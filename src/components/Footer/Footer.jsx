import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin'

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="footerCon">
          <div className="info">
            <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href=""><FontAwesomeIcon icon={faLocationPin} /></a>
          </div>
          <div className="category">
            <a href="">home</a>
            <a href="">home</a>
            <a href="">home</a>
            <a href="">home</a>
            <a href="">home</a>
          </div>
        </div>
        <div className="footer">
          <img src="/images/meemcake.png" alt="" />
          <div className="con">
            <div className="social">
              <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <p>Copyright &copy; 2024 Memescake. All Rights Reserved.</p>
          </div>
        </div>
    </footer>
    </>
  )
}
