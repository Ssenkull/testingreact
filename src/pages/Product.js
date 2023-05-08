import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      setProduct(data);
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: {product.price}$</p>
      {product.discount && <p>Discount: {product.discount}</p>}
      <p>Rating: {product.rating}/5</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductPage;
