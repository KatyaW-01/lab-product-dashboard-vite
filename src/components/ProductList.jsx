import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  // TODO: Check if the product list is empty and display a message if needed

  return (
    <div>
      {products.map((product)=>(
        <ProductCard id={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
