import React, { useEffect } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'

export const Signup = () => {
  useEffect(() => {
    document.title = "Register | Meem's Cakes";
  }, []);
  return (
    <>
    <div className="loginCon">
      <div className="form">
        <form action="">
          <h2>Signup</h2>
          <div className="form-group">
            <input type="text" placeholder='FullName' className='form-control' />
          </div>
          <div className="form-group">
            <input type="text" placeholder='Email' className='form-control' />
          </div>
          <div className="form-group">
            <input type="password" placeholder='Password' className='form-control' />
          </div>
          <div className="form-group">
            <input type="password" placeholder='Confirm Password' className='form-control' />
          </div>
          {/* <Link className='frgt' to='/'>Forgot Password?</Link> */}
          <button className='logbtn'>Signup</button>
          <p>Already have an account? <Link to='/signin'>Login</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}
