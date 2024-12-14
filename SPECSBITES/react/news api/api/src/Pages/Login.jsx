import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      <div className='container'>
        <h2>SignUp Form</h2>


        <label htmlFor="email">Email or Mobile no.</label><br />
        <input type="text" id="email" name="email" required /><br />



        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required minLength="8" />   <i className="Pass fa-regular fa-eye"></i><br />



        <input type="submit" value="Login" />
        <Link to='/New_password'><p>Forgot Password?</p></Link>
          <Link to='/Mysingup'><p>No account !  Sign Up</p> </Link>
      </div>
    </div>
  )
}
