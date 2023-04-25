import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


import './products.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');

      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilter(params.get('filter') || '');
  }, [location]);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    setFilter(filterValue);
  };

  const filteredProducts = products.slice().sort((a, b) => {
    switch (filter) {
      case 'popularity':
        return b.rating - a.rating;
      case 'price':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className='products'>
      <h1>Products</h1>
      <div className='products__select'>
        <label className='products__label' htmlFor="filter-select">Filter by:</label>
        <select className='products__input' id="filter-select" value={filter} onChange={handleFilterChange}>
          <option value="">None</option>
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div>
                {/* <img src={product.image} alt={product.title} /> */}
              </div>
              <div className='product'>
                <h2 className='product__title'>{product.title}</h2>
                <p>Price: {product.price}</p>
                {product.discount && <p>Discount: {product.discount}</p>}
                <p>Rating: {product.rating}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;