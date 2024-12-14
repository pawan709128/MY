import React from 'react'
import { Link } from 'react-router-dom'
import pplogo from '../../Assets/IMG/pp_logo.png'

export const Header = () => {
  return (
    <div>
     <header>
      <div className="logo_bar">
        <img src={pplogo} alt="logo" />
      </div>
      <div className="btn_bar">
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Bedroom'>Bedroom</Link></li>
        <li><Link to='/Dining'>Dining</Link></li>
        <li><Link to='/Seating'>Seating</Link></li>
        <li><Link to='/Storage'>Storage</Link></li>
        <li><Link to='/Living'>Living</Link></li>

        

      </ul>
      </div>
     </header>
    </div>
  )
}
