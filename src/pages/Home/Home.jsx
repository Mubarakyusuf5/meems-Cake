import React from 'react'
import './Home.css'
import { Scard } from '../../components/Cards/Scard'

export const Home = () => {
  return (
    <>
    <div className="container">
    <section className="hero">
      <h1>Delicious</h1>
      <h2>___ Cakes For You</h2>
      <p>meems cake offer the best <br /> cakes and treats for you. </p>
      <a href="#" className="button">Order Now</a>
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
      <h2></h2>
      
    </section>
    </div>
    </>
  )
}
