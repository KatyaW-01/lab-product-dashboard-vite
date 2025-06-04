import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Button from '@mui/material/Button';
import { Container, Box } from '@mui/material'

const App = () => {
  
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

  
  let content;
  if (filteredProducts.length === 0) {
    content = <p>No products available.</p>;
  } else {
    content = <ProductList products={filteredProducts} />;
  }

  return (
    <Container maxWidth="sm">
      <div>
        <h1>Product Dashboard</h1>
        
        
        <Box sx={{mb: 2}}>
          <div>
            <Button variant="contained" onClick={() => setFilter('all')} sx={{mr:1}}>All</Button>
            <Button variant="contained" onClick={() => setFilter('inStock')} sx={{mr:1}}>In Stock</Button>
            <Button variant="contained" onClick={() => setFilter('outOfStock')} sx={{mr:1}}>Out of Stock</Button>
          </div>
        </Box>

       
        <Box sx={{border: 'solid 3px black'}}>
          {content}
        </Box>
      </div>
      
    </Container>
  );
};

export default App;
