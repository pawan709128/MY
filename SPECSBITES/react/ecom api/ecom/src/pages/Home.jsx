import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export const Home = () => {
  const[category,setCategory] = useState([]);
  useEffect(() =>{
    fetch('https://specbitsgroup.com/ecom/get-categories')
    .then(response => response.json())
    .then(data => setCategory(data))
  })
  return (
<div className='mymenu'>
  <li>
    <Link to="/">Home</Link>
    {
      category.map((item, index) => {
        return <li> <Link to="/link">Category name</Link></li>
      })
    }
  </li>
  
</div>
  )
}
