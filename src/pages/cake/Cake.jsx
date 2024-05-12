import React, { useEffect } from 'react'
import './Cake.css'
import { Hero } from '../../components/Hero/Hero';

export const Cake = () => {
  useEffect(() => {
    document.title = " Meem's Cake | Cakes";
  }, []);
  return (
    <>
    <Hero title="Cake" link="/" name="Home" name1="Cakes" />
    </>
  )
}
