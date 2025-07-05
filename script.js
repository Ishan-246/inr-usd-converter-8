import { useState } from "react";
function App() {
          const [inr, setInr] = useState("");
  const [usd, setUsd] = useState(null);
  const exchangeRate = 0.012; 

  const convertCurrency = () => {
    const result = (parseFloat(inr) * exchangeRate).toFixed(2);
    setUsd(result);
  };

  return (
    <div className="App">
      <h2>INR ➜ USD Converter 💱   </h2>
        <input type="number"// 
        placeholder="Enter amount in ₹"
        value={inr}
        onChange={(e) => setInr(e.target.value)}
      />
      <button onClick={convertCurrency}>Convert</button>
      {usd && <p>USD: ${usd}</p>}
    </div>
  );
}

export default App;









import React {useState} from "react";
function App() {
    const [inr,setInr]=useState ("");
    const [usd,setUsd]=useState(null);
    const exchangeRate =0.012;
    const convertCurrency =()=>{
        const result=(parseFloat(inr))* exchangeRate).toFixed(2);
        setUsd(result);         
    };
    return (
        <div className="App">
            <h2>INR ➜ USD Converter 💱</h2>
            <input
                type="number"
                placeholder="Enter amount in ₹"
                value={inr}
                onChange={(e) => setInr(e.target.value)}
            />
            <button onClick={convertCurrency}>Convert</button>
            {usd && <p>USD: ${usd}</p>}
        </div>
    )

