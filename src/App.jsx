import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0); // Default price
  const [discount, setDiscount] = useState(50); // Default discount

  // Calculate final price and savings
  const finalPrice = (price - (price * discount) / 100).toFixed(2);
  const savings = (price - finalPrice).toFixed(2);

  // Clear button functionality
  const handleClear = () => {
    setPrice(0);
    setDiscount(0);
  };

  return (
    <div className="app">
      <div className="container">
        {/* Original Price Section */}
        <div className="original-price">
          <label htmlFor="price-input">Enter Price</label>
          <input 
            type="number" 
            
            id="price-input" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} // Captures user input
            className="price-input"
          />
        </div>

        {/* Discount Section */}
        <div className="discount-section">
          <label>Discount</label>
          <div className="discount-value">{discount}%</div>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="range-slider"
          />
        </div>

        {/* Final Price Section */}
        <div className="final-price-section">
          <div className="final-price">
            <label>Final Price</label>
            <div className="price-display">{finalPrice}</div>
          </div>

          <div className="you-save">
            <label>You Save</label>
            <div className="price-display">{savings}</div>
          </div>
        </div>

        {/* Clear All Button */}
        <button className="clear-button" onClick={handleClear}>
          CLEAR ALL
        </button>
      </div>
    </div>
  );
}

export default App;
