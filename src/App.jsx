import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const products = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 29.99,
      inStock: true
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: 89.99,
      inStock: false
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: 49.99,
      inStock: true
    }
  ];
  // TODO: Implement state to manage filtering
  const [product,setProduct] = useState()

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>{/* TODO: Add 'Product Dashboard' title here */}</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}

      {/* TODO: Render the ProductList component and pass filtered products */}

      <ProductList products={products} />
      
    </div>
  );
};

export default App;
