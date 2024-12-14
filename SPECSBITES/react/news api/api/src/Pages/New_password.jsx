import React from 'react'
import { Link } from 'react-router-dom'

export const New_password = () => {
  return (
    <div className='New_pass'>
  <form>
    <label htmlFor="password">New Password:</label><br />
    <input type="password" id="password" name="password" minLength="8" /><br />

    <label htmlFor="confirm_password">Confirm Password:</label><br />
    <input type="password" id="confirm_password" name="confirm_password" minLength="8" /><br />
    <input type="submit" value="Submit" />
    <Link to='/'><p>Go Back</p></Link>
  </form>
</div>


    
  )
}
