import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Card } from '../pages/Cart'; 

export const Category = () => {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://specbitsgroup.com/ecom/get-product-by-category?cname=${category}`)
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
