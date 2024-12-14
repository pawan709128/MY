import React, { useEffect, useState } from 'react';
import { Card } from './Cart'; 

export const Home = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://specbitsgroup.com/ecom/get-categories')
      .then(response => response.json())
      .then(data => setProducts(data))
      
  });

  return (
    <div>
      {products.map((item) => (
        <Card
          key={item.pid}
          id={item.pid} 
          name={item.pname}
          img={item.pimg}
          mrp={item.old_pprice} 
          sp={item.pprice}
          category={item.cname}
        />
      ))}
    </div>
  );
};
