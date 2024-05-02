import React, { useState } from 'react';
import StockForm from './stockForm';
import './App.css';

function App() {
  const [stockPrice, setStockPrice] = useState(null);

  const handleFormSubmit = (price) => {
    setStockPrice(price);
  };
  
  return (
    <>
      <div className='pageWrapper'>
        <h1>Enter a stockName:</h1>
        <div className='container'>
          <StockForm onSubmit={handleFormSubmit} />
        </div>
        <div className='price-container'>
          {stockPrice ? <h4>current price per stock: {stockPrice}</h4> : null}
        </div>
      </div>
    </>
  );
}

export default App;
