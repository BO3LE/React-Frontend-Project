import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../Comits/ProductCard';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://perenual.com/api/species-list?key=sk-dWfb66b4d979965216473');
        setProducts(response.data.data); // Adjust according to the API response structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container flex flex-wrap items-center justify-center space-x-9 mx-auto'>
      
        {/* <ProductCard
          key={index}
          img={product.default_image?.thumbnail}
          prod={product.common_name || product.scientific_name}
        /> */}
        <ProductCard
        img="src/Icon/Bser.jpg"
        />
        <ProductCard
        img="src/Icon/Bser.jpg"
        />
        <ProductCard
        img="src/Icon/Bser.jpg"
        />
      
    </div>
  );
}
