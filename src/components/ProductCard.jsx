import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin: 15px 0;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #007b5e;
`;

const Button = styled.button`
  background-color: #007b5e;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005f47;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.imgUrl} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <Button>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
