import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState([]); 

  useEffect(() => {
    fetch(`https://specbitsgroup.com/ecom/product-details?id=${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      
  }); 
  return (
    <div>
    {product.pname}
    {product.pdese}
    {product.pprice}

    </div>
  );
}
