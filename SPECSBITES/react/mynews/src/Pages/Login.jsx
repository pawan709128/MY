import React from 'react'

export const Login = () => {
  return (
    <div>

    {/* Login page  */}
          <div className='container'>
            <h2>SignUp Form</h2>
            <form onSubmit={handleSubmit}>
              
    
              <label htmlFor="email">Email or Mobile no.</label><br />
              <input type="text" id="email" name="email" required /><br />
    
              
    
              <label htmlFor="password">Password:</label><br />
              <input type="password" id="password" name="password" required minLength="8" />   <i className="Pass fa-regular fa-eye"></i><br />
    
              
    
              <input type="submit" value="Login" />
              <p>Forgot Password?</p>
              <p>No account !  Sign Up</p>
            </form>
          </div>
          </div>
  )
}
