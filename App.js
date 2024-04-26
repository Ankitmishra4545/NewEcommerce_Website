// App.js
import React from 'react';
import ProductsDisplay from './components/ProductsDisplay';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import productsArr from './productsArr'; // Import products array

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4 mb-4">Welcome to My eCommerce Store</h1>
      <ProductsDisplay products={productsArr} />
    </div>
  );
}

export default App;
