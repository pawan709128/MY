import React from 'react'
import logo from '../Components/IMG/logo_putlu_news.png'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
    
    <div className='Sidebar'>
      <img src={logo} alt="mylogo" />
      <ul>
        <li><Link to='/MyDashbord'>Dashboard</Link></li>
        <li><Link to='/AddNews'>Add News</Link></li>
        <li><Link to='/MyMunageNews'>Manage News</Link></li>
      </ul>
    </div> 
  )
}
