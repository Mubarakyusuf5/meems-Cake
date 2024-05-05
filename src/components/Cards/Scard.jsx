import './Scard.css'

import React from 'react'

export const Scard = () => {
    const details = [
        {id:1, img:"/images/tag1.jpg", tag:"Valentine Cake"},
        {id:2, img:"", tag:"Birthday Cake"},
        {id:3, img:"", tag:"Wedding Cake"},
        // {id:4, img:"", tag:"Budget Cake"},
        {id:5, img:"", tag:"Kid's Cake"}
    ]

    const place = details.map(({id, img, tag}) => (
    <div className="Scard" key={id}>
        <img src={img} alt="" />
        <div className="Sbadge">
            <h3>{tag}</h3>
        </div>
    </div>
    ))
  return (
    <>
    {place}
    </>
  )
}
