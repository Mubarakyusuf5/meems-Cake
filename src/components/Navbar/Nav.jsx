import React, { useState } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes
  } from "@fortawesome/free-solid-svg-icons";


export const Nav = () => {
  const [isRes, setIsRes] = useState(false);
  const [navbar, setNavbar] = useState(true);
  const Links = [
    { id: 1, name: "Home", url: "/home" },
    { id: 2, name: "Shop", url: "/shop" },
    { id: 3, name: "Cake", url: "/cake" },
    { id: 4, name: "Treat", url: "/treat" },
    { id: 5, name: "About", url: "/about" },
  ];
  const linking = Links.map((link) => (
    <li key={link.id}>
      <NavLink to={link.url}>{link.name}</NavLink>
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
      <div className="topdiv">
        <div className="col">
          <div className="num">
            <a href="callto:">+4567890</a>
          </div>
          |
          <div className="email">
            <a href="mailto:">memecake</a>
          </div>
        </div>

        <div className="icon">
            {/* <a href=""><FontAwesomeIcon icon={faFacebook } /> </a> */}
            <a href="https://web.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/_meems_cakes/" target="_blank">inta</a>
        </div>
      </div>
      <nav className={navbar ? 'color' : ''}>
       <Link to='/home'> <img src="/images/meemcake.png" alt="" className="logo"  /> </Link>
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
