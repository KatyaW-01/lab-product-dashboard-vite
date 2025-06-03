import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h1>{product.name}</h1>
      {/* TODO: Display product price */}
      <p>{product.price}</p>
      {/* TODO: Show if the product is in stock or out of stock */}
      <p>In stock: {product.inStock}</p>
    </div>
  );
};

export default ProductCard;
