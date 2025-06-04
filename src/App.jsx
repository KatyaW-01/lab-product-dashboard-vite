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
  const [filter,setFilter] = useState('all')

  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') {
      return product.inStock; //where inStock is true 
    } else if (filter === 'outOfStock') {
      return !product.inStock; //where inStock is false
    } else {
      return true; //show all products 
    }
  });

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('inStock')}>In Stock</button>
        <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}

      <ProductList products={filteredProducts} />
      
    </div>
  );
};

export default App;
