import React from 'react'
import { Link } from 'react-router-dom'

export const Mysingup = () => {
  return (
    <div className='singup'>
      <h2>User Registration Form</h2>
  <form>
  <label for="name">Name:</label><br />
  <input type="text" id="name" name="name"   /><br />

  <label for="email">Email:</label><br />
  <input type="email" id="email" name="email"   /><br />

  <label for="mobile">Mobile:</label><br />
  <input type="tel" id="mobile" name="mobile"   pattern="[0-9]{10}" /><br />

  <label for="password">Password:</label><br />
  <input type="password" id="password" name="password"   minlength="8" /><br />

  <label for="confirm_password">Confirm Password:</label><br />
  <input type="password" id="confirm_password" name="confirm_password"   minlength="8" /><br />

  <input type="submit" value="Register" />
  <Link to='/'><p> already have an account</p> </Link>

</form>


    </div>
  )
}
