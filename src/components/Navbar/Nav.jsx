import React, { useState } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
    faPhone,
    faTimes,
  } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/fontawesome-free-brands";
import { faUser, faEnvelope} from "@fortawesome/free-regular-svg-icons";

export const Nav = () => {
  const [isRes, setIsRes] = useState(false);
  const [navbar, setNavbar] = useState(true);

  const Links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Shop", url: "/shop" },
    // { id: 3, name: "Cake", url: "/cake" },
    // { id: 4, name: "Treat", url: "/treat" },
    { id: 5, name: "About", url: "/about" },
    {id: 6, name: "Contact", url: "/contact"},
    { id: 7, name: "Signin", url: "/signin", icon: <FontAwesomeIcon icon={faUser}/> },
  ];
  const linking = Links.map((link) => (
    <li key={link.id}>
      <NavLink to={link.url}>{link.icon} {link.name}</NavLink>
    </li>
  ));
  const toggle = ()=> {
    setIsRes(preRes => !preRes)
}
  const changeNav = () => {
  scrollY > 0 ? setNavbar(true) : setNavbar(false)
  }
  window.addEventListener("scroll", changeNav)

  return (
    <>
    <div className="topdivcon">
      <div className="topdiv">
        <div className="col">
            <a href="callto:"><FontAwesomeIcon icon={faPhone}  className="ico"/> +2348134567890</a>
          |
          <a href=""><FontAwesomeIcon icon={faWhatsapp} className="ico"/> +2348134567890</a>
        </div>

        <div className="icon">
            <a href="mailto:" className="email"><FontAwesomeIcon icon={faEnvelope} className="ico" /> meemscake@gmail.com</a>
          |
            <a href="https://web.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/_meems_cakes/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>

    </div>
      <nav className={navbar ? 'color' : ''}>
       <Link to='/'> <img src="/images/meemcake.png" alt="" className="logo"  /> </Link>
        <ul className="navUl">{linking}</ul>
        <div className="toggle" onClick={toggle}>
        {isRes ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
        </div>
        <ul className={isRes ? 'mobile show' : 'mobile'}>
          {linking}
        </ul>
      </nav>
    </>
  );
};
