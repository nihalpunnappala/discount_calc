
import './App.css'
import React, { useState } from 'react';


function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    if (originalPrice && discountPercentage) {
      const discount = (originalPrice * discountPercentage) / 100; 
      const finalAmount = originalPrice - discount; 
      setFinalPrice(finalAmount.toFixed(2));
    } else {
      alert('Please enter valid numbers');                   
    }
  };

  return (
    <>
    <div className="container">
      <h1>Discount Calculator</h1>
      <div className="input-group">
        <label>Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(parseFloat(e.target.value) || '')}
          placeholder="Enter original price"
        />
      </div>
      <div className="input-group">
        <label>Discount Percentage:</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(parseFloat(e.target.value) || '')}
          placeholder="Enter discount percentage"
        />
      </div>
      <button onClick={calculateDiscount}>Calculate</button>

      {finalPrice !== null && (
        <div className="result">
          <h2>Final Price: ₹{finalPrice}</h2>
        </div>
      )}
    </div>
      
    </>
  )
}

export default App
