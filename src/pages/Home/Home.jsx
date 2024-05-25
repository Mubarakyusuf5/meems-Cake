import React, { useEffect } from 'react'
import './Home.css'
import { Scard } from '../../components/Cards/Scard'
import { Pcard } from '../../components/Cards/Pcard'
import { Link } from 'react-router-dom'

export const Home = () => {
  useEffect(() => {
    document.title = " Home - Meem's Cakes | Affordable Cakes in Kaduna, Nigeria";
  }, []);
  return (
    <>
    <div className="container">
    <section className="hero">
      <div className="Hleft">
      <h1>Delicious</h1>
      <h2>___ Cakes For You</h2>
      <p>meems cake offer the best <br /> cakes and treats for you. </p>
      <Link to="/shop" className="button">Order Now</Link>
      </div>
      <div className="Hright">
        {/* <img src="/images/cake5.png" alt="" /> */}
      </div>
    </section>
    <section className="spec">
<div className="head">
  <h2>Our Specialties</h2>
</div>
<div className="card">
  <Scard />
</div>
    </section>
    <section className="product">
      <h2>Explore Our Cakes</h2>
      <div className="card">
        <Pcard />
      </div>
    </section>
    <section className='testmonial'>
      <h2>Client Says</h2>
      <div className="testCon">

      </div>
    </section>
    <section className='project'>
      <h2>Our Creations</h2>
      <div className="projectCon">

      </div>
    </section>
    </div>
    </>
  )
}
