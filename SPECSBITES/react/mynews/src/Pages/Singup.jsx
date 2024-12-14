import React from 'react'

export const Singup = () => {
  return (
    <div>   <div className='q'>
    <div className='container'>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="mobile">Mobile:</label><br />
        <input type="tel" id="mobile" name="mobile" required pattern="[0-9]{10}" /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required minLength="8" />   <i className="Pass fa-regular fa-eye"></i><br />

        <label htmlFor="confirm_password">Confirm Password:</label><br />
        <input type="password" id="confirm_password" name="confirm_password" required minLength="8" /> <i className="Pass fa-regular fa-eye"></i>
        <br />

        <input type="submit" value="Register" />
        <p>Forgot Password?</p>
        <p>Alreday have an account?</p>
      </form>
    </div>
    {error && <p className="error">{error}</p>}


  </div></div>
  )
}
