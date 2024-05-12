import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export const Hero = (props) => {
  return (
    <>
    <div className="herocon">
        <h3>{props.title}</h3>
        <div className="linkcon">
            <Link to={props.link}>{props.name}</Link>
            /
            <p>{props.name1}</p>
        </div>
    </div>
    </>
  )
}
