import './App.css';
import React, { useState } from 'react';

function App() {
  const [goldWeight, setGoldWeight] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [goldKarat, setGoldKarat] = useState(24);

 
  const karatPrices = {
    24: 5000, 
    22: 4500, 
    18: 3500, 
  };

  const calculateLoan = () => {
    const pricePerGram = karatPrices[goldKarat];
    const totalValue = goldWeight * pricePerGram;
    const interest = (totalValue * interestRate * loanDuration) / 100;
    return totalValue - interest;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gold Loan Calculator</h1>
        
        <div className="input-group">
          <label>Gold Weight (grams): {goldWeight}</label>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={goldWeight} 
            onChange={(e) => setGoldWeight(Number(e.target.value))} 
          />
          <input
            type="number"
            value={goldWeight}
            onChange={(e) => setGoldWeight(Number(e.target.value))}
            placeholder="Enter weight in grams"
            min="0"
            max="1000"
          />
        </div>

        <div className="input-group">
          <label>Interest Rate (%): {interestRate}</label>
          <input 
            type="range" 
            min="0" 
            max="20" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))} 
          />
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="Enter rate in %"
            min="0"
            max="20"
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Loan Duration (years): {loanDuration}</label>
          <input 
            type="range" 
            min="1" 
            max="30" 
            value={loanDuration} 
            onChange={(e) => setLoanDuration(Number(e.target.value))} 
          />
          <input
            type="number"
            value={loanDuration}
            onChange={(e) => setLoanDuration(Number(e.target.value))}
            placeholder="Enter duration in years"
            min="1"
            max="30"
          />
        </div>

        <select 
          value={goldKarat} 
          onChange={(e) => setGoldKarat(Number(e.target.value))}
        >
          <option value={24}>24 Karat</option>
          <option value={22}>22 Karat</option>
          <option value={18}>18 Karat</option>
        </select>

        <button onClick={() => setLoanAmount(calculateLoan())}>Calculate Loan</button>
        {loanAmount > 0 && <p>Estimated Loan Amount: ₹{loanAmount.toFixed(2)}</p>}
      </header>
    </div>
  );
}

export default App;