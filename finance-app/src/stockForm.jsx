import React, { useState } from 'react';
import getStockPrice from './getStockprice.jsx';

const StockForm = ({ onSubmit }) => {
  const [stockName, setStockName] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { latestStockValue } = await getStockPrice(stockName);
      onSubmit(latestStockValue); // Update parent component state with stock price
    } catch (error) {
      console.error('Error fetching stock price:', error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="stockName">Enter a stock name:</label>
      <input
        type="text"
        id="stockName"
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StockForm;