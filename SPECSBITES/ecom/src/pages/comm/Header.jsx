import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://specbitsgroup.com/ecom/get-categories')
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []); // Add an empty dependency array to ensure this runs only once

  return (
    <div className='mymenu'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {
          category.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.cname}`}>{item.cname}</Link>
            </li>
          ))
        }
      </ul>
    </div>  
  );
}
