import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Smartphone', price: 599, imgUrl: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Laptop', price: 999, imgUrl: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Headphones', price: 199, imgUrl: 'https://via.placeholder.com/300x200' },
    // More products
  ]);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
