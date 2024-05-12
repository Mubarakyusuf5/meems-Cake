import React, { useEffect } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom';

export const Signin = () => {
  useEffect(() => {
    document.title = "Meem's Cakes | Login";
  }, []);
  return (
    <>
    <div className="loginCon">
      <div className="form">
        <form action="">
          <h2>Login</h2>
          <div className="form-group">
            <input type="text" placeholder='Email' className='form-control' />
          </div>
          <div className="form-group">
            <input type="password" placeholder='Password' className='form-control' />
          </div>
          <Link className='frgt' to='/'>Forgot Password?</Link>
          <button className='logbtn'>Login</button>
          <p>Don't have an account? <Link to='/signup'>signup</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}
