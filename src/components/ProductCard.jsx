import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  let stock;
  console.log(styles)
  if (product.inStock) {
    stock = styles.inStock;
  } else {
    stock = styles.outOfStock;
  }
  return (
    <div className={stock}>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
    </div>
  );
};

export default ProductCard;
