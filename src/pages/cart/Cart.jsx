import React, { useEffect } from 'react'
import './Cart.css'

export const Cart = () => {
  useEffect(() => {
    document.title = "Cart | Meem's Cakes";
  }, []);
  return (
    <>
    <div className="container">
    Home
    </div>
    </>
  )
}
