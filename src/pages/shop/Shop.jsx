import React, { useEffect } from 'react'
import './Shop.css'
import { Hero } from '../../components/Hero/Hero';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { Pcard } from '../../components/Cards/Pcard';

export const Shop = () => {
  useEffect(() => {
    document.title = " Meem's Cake | Shop";
  }, []);
  const links =[
    {id: 1, name: 'All', url: '/shop'},
    {id: 2, name: 'Wedding Cakes', url: ''},
    {id: 3, name: 'Birthday Cakes', url: ''},
    {id: 4, name: 'Valantine Cakes', url: ''},
    {id: 5, name: 'Treats/Pastries (Treats)', url: ''},
  ]
  const place = links.map((link)=>(
    <li key={link.id}><NavLink to={link.url}><FontAwesomeIcon icon={faAngleRight} className='angle' />{link.name}</NavLink></li>
  ))
  return (
    <>
    <Hero title="Shop" link="/" name="Home" name1="Shop" />
    <section className='shop'>
      <div className="sLeft">
        <div className="category">
          <h3>Categories</h3>
          <ul>
            {place}
          </ul>
        </div>
      </div>
      <div className="sRight">
      <div className="card">
        <Pcard />
      </div>
      </div>
    </section>
    </>
  )
}
